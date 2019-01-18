/**
 * 
 */

function today() {
var Today = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[Today.getDay()],
	domEnder = function() { var a = Today; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( Today.getDate() < 10) ? '0' + Today.getDate() + domEnder : Today.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[Today.getMonth()],
	curYear = Today.getFullYear(),
	curHour = Today.getHours() > 12 ? Today.getHours() - 12 : (Today.getHours() < 10 ? "0" + Today.getHours() : Today.getHours()),
	curMinute = Today.getMinutes() < 10 ? "0" + Today.getMinutes() : Today.getMinutes(),
	curSeconds = Today.getSeconds() < 10 ? "0" + Today.getSeconds() : Today.getSeconds(),
	curMeridiem = Today.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
return today;
}