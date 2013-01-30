
var year;
var month;
var day;

var monthKey = new Array(99,1,4,4,0,2,5,0,3,6,1,4,6);
var dayOfWeek = new Array("PLACEHOLDER","Sun", "Mon", "Tue", 
                          "Wed", "Thur", "Fri", "Sat", "Sun");

// Leap years subtract one from month key for Jan & Feb
var LEAPYEAR_JAN_OVERRIDE = 0;
var LEAPYEAR_FEB_OVERRIDE = 3;


function getDayPartsFromNumber(theDate) {
    // parse the date provided, expected in yyyymmdd format (e.g. 19910203)
    // NOTE: This method works with a number, e.g. 19910203, 
    //         see getDayFromString() for working with string dates.

    var yearPart = Math.floor(theDate / 10000);
    var monthPart = Math.floor((theDate - yearPart*10000) / 100);
    var dayPart = theDate - yearPart*10000 - monthPart*100;

    year = yearPart;
    month = monthPart;
    day = dayPart;


}

function getDay(theDate) {
    
    /*

    Rule 1:
    The formula doesn’t work for days prior to 1753.  

    Rule 2:
    Add the last two digits of the year to:
        + one-quarter of the last two digits (discard any remainder), 
        + the day of the month, 
        + and the month key from the key array (above).  

    Rule 3:
    If you’re searching for a weekday prior to 1900, 
        add 2 to the sum before dividing; 
        prior to 1800, add 4.  

    Rule 4:
    From 2000 through 2099, subtract 1 from the sum before dividing.

    Rule 5:
    Divide the sum by 7; 
       the remainder is the day of the week (1 is Sunday, 2 is Monday, and so on).  
       If there is no remainder, the day is Saturday.  
    
    */
    
    // Parse the date into parts
    getDayPartsFromNumber(theDate);
    
    // Rule 1
    if (year < 1753)
        return("UNKNOWN Prior to 1753");
        
    // Rule 2
    var twoDigitYear = year % 100;
    var monthKeyVal = monthKey[month];
    // Adjust monthKeyVal for Leap Year
    if (((year % 4) === 0) && ((month == 1) || (month == 2)))
        monthKeyVal -= 1;

    var lookupVal = twoDigitYear + Math.floor(twoDigitYear/4) 
                    + day + monthKeyVal;
    
    // Rule 3
    if (year < 1900)
        lookupVal += 2;
    
    if (year < 1800)
        lookupVal += 2;
        // Note: adjustment is +4, but +2 was already added (above).
        
    // Rule 4
    if ((year >= 2000) && (year <= 2099))
        lookupVal -= 1;
        
    // Rule 5
    lookupVal = lookupVal % 7;
    
    if (lookupVal === 0)
        return "Sat";
    else
        return dayOfWeek[lookupVal];

}

function showGlobals() {

    var msg = "Got date parts from Number:\n";
    msg += "Year = " + year + "\n";
    msg += "Month = " + month + "\n";
    msg += "Day = " + day + "\n";
    
    show(msg);
    
}
 
function show(msg) {
    
    console.log(msg);
    
} 

show(getDay(19921028));
