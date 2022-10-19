console.log("----------------------------------------------")

const minutesInHoure = 60;
    
// get movie length in minutes
const inputMovieInMinutes =  prompt("Please insert movie length in minutes");
console.log(`inputMovieInMinutes: ${inputMovieInMinutes}`);

// convert to Number
const convertedMinutes = Number(inputMovieInMinutes);
console.log(`convertedMinutes ${convertedMinutes}`);
 
// calc hours
const hours = Math.floor(convertedMinutes / minutesInHoure);
console.log(`hours ${hours}`);

//  calc minutes
const minutes = convertedMinutes % minutesInHoure;
console.log(`minutes ${minutes}`);

// show message x hour(s) and y minute(s)
const message = `${convertedMinutes} are: ${hours} hour(s) and ${minutes} minute(s).`
alert(message);
console.log(message);