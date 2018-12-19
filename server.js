const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-11-28',
  iam_apikey: 'U3PVlQAjoK5qBRbADy2ldZ4th_T6HVk_RiuaitGTYIns'
});

var MongoClient = require('mongodb').MongoClient;
var MONGODB_URL = "mongodb://admin:GWUJEMLJRVRJSUEM@portal-ssl372-68.bmix-eu-gb-yp-4e6e6ba4-9939-4737-a6f5-ac66984882f5.12159979.composedb.com:16101,portal-ssl357-46.bmix-eu-gb-yp-4e6e6ba4-9939-4737-a6f5-ac66984882f5.12159979.composedb.com:16101/compose?authSource=admin&ssl=true"

const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const helmet = require('helmet')
const fs = require('fs');
const fu = require('socketio-file-upload');
const file = require('file-system');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const https = require('https');
const moment = require('moment');
const base64 = require('image-to-base64');

const server = http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

var mongoOptions = {

  useNewUrlParser: true,
  ssl: true,
  sslValidate: false,

}

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

/**
 * Force HTTPS
 */
app.use(function (req, res, next) {
  if (req.secure || process.env.BLUEMIX_REGION === undefined) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(helmet());
app.use(fu.router);
app.use(express.static(__dirname));



app.get('*', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
})



MongoClient.connect(MONGODB_URL, mongoOptions, function (err, db) {
  var users;
  if (!err) {
    console.log("Databasee connected");
    var dbo = db.db("mydb");
    updateUsers();
  } else {
    console.log("!Local Database!")
    users = [{ user: "aaaa", pass: "a", file: null, mood: false }]
  }



  //socket data
  //  validchatsession: boolean
  io.on('connection', (socket) => {

    socket.validchatsession = false; //needs login
    var uploader = new fu();
    uploader.dir = "./tempfile/";
    uploader.listen(socket);

    uploader.on("saved", function (event) {
      console.log("Saved file: " + event.file.pathName);
      if (socket.file) {
        try {
          fs.unlinkSync(socket.file.pathName)
        } catch (e) {

        }

      }
      socket.file = event.file;
    })

    socket.on('msgimage', function (image) {

    })

    /**
     * Triggered on login-form submission
     * signindata = {user: string, pass: string}
     * result = {code: number, message: string}
     * codes
     * 0 = default (should not happen)
     * 1 = logged in
     * 2 = valid input but no matched user
     * 3 = valid user only
     * 4 = valid pass only
     * 5 = invalid pass and user
     * 6 = username taken and wrong pass
     */
    socket.on('signin', function (signindata) {
      console.log("Signin request: " + JSON.stringify(signindata));

      var result = { code: 0, message: "Default" };
      var user = signindata.user;
      var pass = signindata.pass;

      var validation = validUserAndPass(user, pass);
      if (validation.validpass && validation.validuser) {

        if (readDB(user, "user") == user) {
          socket.validchatsession = bcrypt.compareSync(pass, readDB(user, "pass"));;
          if (socket.validchatsession) {
            result.code = 1;
            result.message += ", logged in";
            socket.nickname = user;
          } else {
            result.code = 6;
            result.message = "Username taken"
          }
        } else {
          result.code = 2;
          result.message = "Valid Input";
        }
      } else if (!validation.validpass && !validation.validuser) {
        result.code = 5;
        result.message = "Invalid User And Pass";
      } else if (validation.validuser) {
        result.code = 3;
        result.message = "Invalid Password";
      } else if (validation.validpass) {
        result.code = 4;
        result.message = "Invalid User";
      }
      socket.emit('signinresult', result);

      console.log("Signin response: " + JSON.stringify(result)
        + ", for input: " + JSON.stringify(signindata) + "\n");
    })

    /**
     * Triggered on signin-form submission
     * signupdata = {user: string, pass: string, mood:bool}
     * codes
     * 0 = fail
     * 1 = success
     * @returns {code: number, user:string}
     */
    socket.on('signup', function (signupdata) {
      console.log("Signup request: " + JSON.stringify(signupdata));
      var valid = validUserAndPass(signupdata.user, signupdata.pass);
      var response = { code: 0, user: signupdata.user }
      if (valid.validpass && valid.validuser) {
        try {
          if (socket.file.filevalidation == true) {
            base64(socket.file.pathName)
              .then(
                (response) => {
                  signupdata.file = response;
                  writeDB(signupdata);
                }
              )
              .catch(
                (error) => {
                  console.log(error);
                  signupdata.file = null;
                  writeDB(signupdata);
                }
              )
          }
          else {
            signupdata.file = null;
            writeDB(signupdata);
          }
        } catch (e) {
          console.log(e)
          signupdata.file = null;
          writeDB(signupdata);
        }
        response.code = 1;
      }
      socket.emit('signupresult', response);
      try {
        if (socket.file) {
          fs.unlinkSync(socket.file.pathName);
        }
      } catch (e) { }

    })

    /**
     * 
     */
    socket.on('fileValidationResult', function () {
      result = { result: true }; //TODO false
      //user file path 
      //IBM blabla face blabla

      var filePath = socket.file.pathName;
      var imageFile = file.createReadStream(filePath);

      var params = {
        images_file: imageFile
      };

      visualRecognition.detectFaces(params, function (err, response) {
        if (err) {
          console.log(err);
        } else {
          result.result = response.images[0].faces.length != 0;
          result.feedback = response;
          console.log("Result of picture validation '" + socket.file.pathName + "': " + result.result + "\n" + JSON.stringify(response, null, 2))
          socket.emit('fileValidation', result);
          socket.file.filevalidation = result.result;
        }
      });
    })

    /**
     * emits message to all connected socket that you left
     */
    socket.on('disconnect', function () {
      if (socket.nickname != undefined) {
        io.in("global").emit('message', createMessage(2, socket.nickname));
        io.emit('list', getAllUsersAsString());
      }

      try {
        fs.unlinkSync(socket.file.pathName)
        console.log(socket.nickname + "Files Deleted")
      } catch (error) { }
    })

    /**
     * same as disconnect
     */
    socket.on('leave', function () {
      socket.broadcast.emit('message', { timestamp: 'Server', user: 'Info', msg: socket.nickname + ' left!' })
      io.emit('list', getAllUsersAsString());
    })

    /**
     * joins user to chatroom, emits info message to all users in that chat
     */
    socket.on('join', function (chat) {
      socket.join(chat);
      socket.userroom = chat;
      io.in(chat).emit('message', createMessage(1, socket.nickname)); //send msg to e1 in same chat
      socket.emit('list', getAllUsersAsString());
      console.log(socket.nickname + ' joined room: ' + chat);
    })

    socket.on('getuserpic', function (user) {
      var file = readDB(user, "file");
      socket.emit('userpic', { user: user, img: file })
    })


    var fileUpload = [];
    /**
     * emits message to all users in same chat room
     * input {
     *  message: string
     *  isFile: bool
     *  file : File
     * }
     */
    socket.on('message', function (input) {
      var message = input.message;
      var message1 = createMessage(3, socket.nickname, message)
      asarr = message.split(" ");
      message1.isFile = input.isFile;
      if (asarr[0] == "\\whisper" && asarr.length > 2) {
        findClientsSocket().forEach(element => {
          if (element.nickname == asarr[1]) {
            m = "";
            for (let index = 2; index < asarr.length; index++) {
              m += asarr[index] + " ";
            }
            var prvmsg1 = createMessage(3, socket.nickname + " > " + element.nickname, m);
            var prvmsg2 = createMessage(3, socket.nickname + " > " + element.nickname, m);
            prvmsg1.isFile = input.isFile;
            prvmsg2.isFile = input.isFile;
            socket.emit('message', prvmsg1);
            element.emit('message', prvmsg2);
            if (input.isFile) {
              element.emit('messageFile', { id: prvmsg2.id, file: input.data });
              socket.emit('messageFile', { id: prvmsg1.id, file: input.data });
            }
          }
        });
      } else if (asarr[0] == "\\list") {
        message1.message = getAllUsersAsString();
        message1.code = 1;
        message1.user = "Server List";
        socket.emit('message', message1);
      } else {
        io.in(socket.userroom).emit('message', message1);
        if (input.isFile) {
          io.in(socket.userroom).emit('messageFile', { id: message1.id, file: input.data });
        }
      }
      console.log("Message sent in room: " + socket.userroom + ", Message: " + JSON.stringify(message1))
    })

    socket.on('whisper', function (info) {
      console.log(socket.nickname + " whisper to " + info.user);
      findClientsSocket().forEach(element => {
        if (element.nickname == info.user) {
          msg = { code: 2, timestamp: moment().format('hh:mm A'), user: socket.nickname + " whispers", msg: info.msg }
          element.emit('message', msg);
          socket.emit('message', msg);
          return;
        }
      })
    })

    /**
     * todo
     */
    socket.on('file', function () {
      console.log("file");
    })

    /**
     * emits list of all connected users to requester
     */
    socket.on('listmsg', function () {
      console.log(socket.nickname + ': list request');
      var users = "";
      findClientsSocket().forEach(element => {
        users += element.nickname + " ";
      });
      socket.emit('message', { timestamp: 'Server', user: 'Online Users', msg: users });
    })

  });



  function updateUsers() {
    try {
      dbo.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        users = result;
      });
    } catch (e) { }
  }

  function writeDB(signupdata) {
    signupdata.pass = bcrypt.hashSync(signupdata.pass, 8);
    try {
      dbo.collection("users").insertOne(signupdata, function (err, res) {
        if (err) throw err;
        console.log("user inserted");
      });
    } catch (e) {
      users.push(signupdata);
    }
    console.log("Successfull sign up for: " + signupdata.user + " " + signupdata.pass + " " + signupdata.mood + " " + (uufile = signupdata.file == null ? null : signupdata.file.substring(0, 8) + "..."))
    updateUsers();
  }

  function readDB(user, value) {
    var res;
    users.forEach(element => {
      if (user == element.user) {
        switch (value) {
          case "user":
            res = element.user;
            break;
          case "pass":
            res = element.pass;
            break;
          case "mood":
            res = element.mood;
            break;
          case "file":
            res = element.file;
            break;
          default:
        }
      }
    });
    console.log("DB call: Key = " + user + "; Value = " + value + "; Result = " + value == "file" ? (res ? res.substring(0, 50) : null) : res);
    return res;

  }
});

/**
 * returns all connected sockets
 * @param {} roomId (optional)
 * @param {*} namespace (optional)
 */
function findClientsSocket(roomId, namespace) {
  var res = []
    , ns = io.of(namespace || "/");

  if (ns) {
    for (var id in ns.connected) {
      if (roomId) {
        var index = ns.connected[id].rooms.indexOf(roomId);
        if (index !== -1) {
          res.push(ns.connected[id]);
        }
      } else {
        res.push(ns.connected[id]);
      }
    }
  }
  return res;
}

/**
 * Validates Username and Password
 * @returns JSON {validuser:bool, validpass:bool}
 * @param {*} user 
 * @param {*} pass 
 */
function validUserAndPass(user, pass) {
  //Regex for username and password
  const userregex = '^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$';
  const passregex = '^[A-Za-z0-9]+$';
  var result = {
    validuser: new RegExp(userregex).test(user) && user.length >= 4 && user.length <= 12
    , validpass: new RegExp(passregex).test(pass)
  };
  console.log("Input validation for: " + user + ", " + pass + " Result: " + JSON.stringify(result));
  return result;
}

var messageId = 0;
/**
 * types:
 * 0 = welcome message
 * 1 = join notification
 * 2 = leave notification
 * 3 = user message
 * @param {*} type 
 */
function createMessage(type, user, message) {
  result = { id: messageId, code: type, user: "Server", timestamp: moment().format('hh:mm A') };
  switch (type) {
    case 1:
    case 2:
      result.message = user + " has " + (type == 1 ? "joined!" : "left!");
      result.username = user;
      break;
    case 3:
      result.message = message;
      result.user = user;
      break;
    default:
      break;
  }
  messageId++;
  return result;
}



function getAllUsersAsString() {
  var s = "";
  findClientsSocket().forEach(element => {
    if (element.nickname != undefined) {
      s += element.nickname + ";";
    }
  });
  return s;
}




require('dotenv').config({ silent: true });

// Create the service wrapper
let toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
});

app.use(bodyParser.json());

app.use(express.static('public'));

function createToneRequest(request) {
  let toneChatRequest;

  if (request.texts) {
    toneChatRequest = { utterances: [] };

    for (let i in request.texts) {
      let utterance = { text: request.texts[i] };
      toneChatRequest.utterances.push(utterance);
    }
  }

  return toneChatRequest;
}

function happyOrUnhappy(response) {
  const happyTones = ['satisfied', 'excited', 'polite', 'sympathetic'];
  const unhappyTones = ['sad', 'frustrated', 'impolite'];

  let happyValue = 0;
  let unhappyValue = 0;

  for (let i in response.utterances_tone) {
    let utteranceTones = response.utterances_tone[i].tones;
    for (let j in utteranceTones) {
      if (happyTones.includes(utteranceTones[j].tone_id)) {
        happyValue = happyValue + utteranceTones[j].score;
      }
      if (unhappyTones.includes(utteranceTones[j].tone_id)) {
        unhappyValue = unhappyValue + utteranceTones[j].score;
      }
    }
  }
  if (happyValue >= unhappyValue) {
    return 'happy';
  }
  else {
    return 'unhappy';
  }
}

/* Example 
{
  "texts": ["I do not like what I see", "I like very much what you have said."]
}
*/
app.post('/tone', (req, res, next) => {
  let toneRequest = createToneRequest(req.body);

  if (toneRequest) {
    toneAnalyzer.toneChat(toneRequest, (err, response) => {
      if (err) {
        return next(err);
      }
      let answer = { mood: happyOrUnhappy(response) };
      return res.json(answer);
    });
  }
  else {
    return res.status(400).send({ error: 'Invalid Input' });
  }
});