function getDayFromString(theDate) {
    // parse the date provided, expected in yyyymmdd format (e.g. 19910203)
    // NOTE: This method works with a string, e.g. "19910203", 
    //         see getDayFromNumber() for working with numeric dates.
    
    var yearPart = theDate.substring(0,4);
    var monthPart = theDate.substring(4,6);
    var dayPart = theDate.substring(6,8);

    var msg = "Got date parts from String:\n";
    msg += "Year = " + yearPart + "\n";
    msg += "Month = " + monthPart + "\n";
    msg += "Day = " + dayPart + "\n";
    
    show(msg);
    

}

function getDayFromNumber(theDate) {
    // parse the date provided, expected in yyyymmdd format (e.g. 19910203)
    // NOTE: This method works with a number, e.g. 19910203, 
    //         see getDayFromString() for working with string dates.

var yearPart = Math.floor(theDate / 10000);
    var monthPart = Math.floor((theDate - yearPart*10000) / 100);
    var dayPart = theDate - yearPart*10000 - monthPart*100;

    var msg = "Got date parts from Number:\n";
    msg += "Year = " + yearPart + "\n";
    msg += "Month = " + monthPart + "\n";
    msg += "Day = " + dayPart + "\n";
    
    show(msg);
    

}

function show(msg) {
    
    console.log(msg);
    
} 

getDayFromString("19910203");
getDayFromNumber(19910203);
