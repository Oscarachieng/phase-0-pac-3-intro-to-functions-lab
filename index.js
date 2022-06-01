function shout (string) {
   return string.toUpperCase();
}
shout('Hello')
//console.log(shout(`I can\'t hear you!`));

//Whisper Function turns the string to Lowercase.
function whisper(string) {
   return string.toLowerCase(); 
}
whisper('OSCAR');

//Logshout Function.
function logShout(string) {
    console.log(string.toUpperCase());
}
//logShout('oscar');
/*let x="OSCAR".toLowerCase();
console.log(x);*/
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("OSCAR");

function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case string.toLowerCase():
            return `I can\'t hear you!`;
            
            break;
        case string.toUpperCase():
            return  "YES INDEED!";
             break;
        case "Let's have dinner together!":
            return "I would love to!"
            break;      
    
        default:
            break;
    }
    
}
x= `i can\'t hear you!`.toLocaleUpperCase();
sayHiToHeadphonedRoommate(x);
console.log(sayHiToHeadphonedRoommate(x));