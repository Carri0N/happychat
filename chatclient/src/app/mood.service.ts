import { Message } from './classes/message';

export class MoodService{

    constructor() {}

    getMood(input, messageObject:Message) {
        fetch("/tone", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'cors'
            },
            body: JSON.stringify({
               texts: [input, ""]
            })
        })
        .then((response) => {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
               return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then((response) => { 
            //console.log("response:" +  JSON.stringify(response));
            if (response.mood) {
              messageObject.mood = response.mood;
            }
        })
    }
}