// JavaScript Document

function progress() {
  var winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
  var width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  var scrolled = (winScroll / width) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}