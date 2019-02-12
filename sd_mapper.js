/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Micah Fischer    
   Date:   2-12-19

*/

// Create a new Date
var thisTime = new Date();

// Assign the thisTime variable local string to timeStr variable.
var timeStr = thisTime.toLocaleString();

// In the document find the element with the id of timeStamp assign the innerHTML to timeStr.
document.getElementById("timeStamp").innerHTML = timeStr;

// assign the thisHour variable to the hours of thisTime.
var thisHour = thisTime.getHours();

// assign the theMonth varibale to the months of thisTime.
var thisMonth = thisTime.getMonth();

// Assign the mapNum variable to the solution of the equation below.
var mapNum = (2 * thisMonth + thisHour) % 24;

// Create a variable of imgStr to the the image based on its map number.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />"

// Write the string to the adjacentHTML
document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);