$(document).ready(function(){
 
  $("#myCarousel").carousel({wrap: false});
    
 
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

console.log("myCarousel")

$('#myCarousel').on('slid', '', checkitem);
$('#myCarousel').on('slid.bs.carousel', '', checkitem);

$(document).ready(function(){
    checkitem();
});

function checkitem()
{
var $this = $('#myCarousel');
    if($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').show();
    } else if($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.left.carousel-control').show();
        $this.children('.right.carousel-control').hide();
    } else {
        $this.children('.carousel-control').show();
    } 
}

/*
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}
*/

function getSize(){
          var height = img.height;
          var width = img.width;
          var w = window.innerWidth;
          var h = window.innerHeight;

          var adjH = height * (w/width);
          var adjW = w;
          
          if(adjH>h){
              var wRatio = h/adjH;  
              adjH = h;
              adjW = wRatio * w;
          }
      
         document.getElementById('myCarousel').height = adjH;
         document.getElementById('myCarousel').width = adjW;
     }
function requestFullScreen(element) {
         
         if(fullScreen==false){
             fullScreen=true;

    var requestMethod = element.requestFullScreen;

    if (requestMethod) {
        requestMethod.call(element);
    } 
    else{
         fullScreen=false;
         
         if(document.cancelFullScreen){
		    document.cancelFullScreen();
		} else if(document.exitFullScreen){
		    document.exitFullScreen();
		} else if(document.mozCancelFullScreen){
		    document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen){
		    document.webkitCancelFullScreen();
		} else if(document.msExitFullscreen){
		    document.msExitFullscreen();
		}         
     }         
}

document.querySelector('button').addEventListener('click', toggle)

function toggle(event) {
    if (document.getElementById('about').style.display == 'none') {
    event.target.innerText = 'About'
    document.getElementById('about').style.display = ''
  } else {
    event.target.innerText = 'About'
    document.getElementById('about').style.display = 'none'
  }
}
