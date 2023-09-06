$(document).ready(() => {
	// MM - DD - YYYY
  function getDayFromDate(dateString) {
    var now = new Date(dateString);
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  
  let cutoffLow = getDayFromDate("11/24");
  let cutoffHigh = getDayFromDate("01/05");
  let now = getDayFromDate(new Date());
    
  if(now >= cutoffLow && now <= cutoffHigh) {
  	document.querySelector('#two').style.display = "block";
  }
});