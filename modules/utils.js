const createMessage = require('../lang/messages');



exports.getDate = function(name){
const date = new Date().toDateString();
const time = new Date().toLocaleTimeString();
return `<p style="color: blue;">${createMessage(name)}  ${date} ${time}</p>`;  
}
