function slide(){
  slide_counter += 1
  if(slide_counter > 2){
    slide_counter=0
  }
  var target = document.getElementById("carrossel-inner");
  target.scrollLeft = slide_counter * target.offsetWidth
}

window.onresize = function(event) {
  var target = document.getElementById("carrossel-inner");
  target.scrollLeft = slide_counter * target.offsetWidth
};


var slide_counter = 0
setInterval(slide, 6000);