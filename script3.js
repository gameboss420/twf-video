$(document).ready(() => {
  // MM - DD - YYYY
  function getDayFromDate(dateString) {
    var now = new Date(dateString);
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  let cutoffLow = getDayFromDate("1/01");
  let cutoffHigh = getDayFromDate("1/05");
  let now = getDayFromDate(new Date());

  if(now >= cutoffLow && now <= cutoffHigh) {
    document.querySelector('#two').style.display = "block";
  }
});