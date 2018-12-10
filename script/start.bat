cd ..
RMDIR client /S /Q
cd chatclient
start ng build --watch
cd ..
nodemon server.js