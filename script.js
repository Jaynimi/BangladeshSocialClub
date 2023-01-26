var slideIndex = 0;

var currentSlideIndex = 0;

var slideArray = []


function Slide(title, subtitle, background,link) {
  this.title = title;
  this.subtitle = subtitle;
  this.background = background;
  this.link = link;
  this.id = "slide" + slideIndex;
  slideIndex++;
  slideArray.push(this);
}

var intro = new Slide (
  "IMPACTING THE BANGLADESHI COMMUNITY",
  "",
  "https://browngirlmagazine.com/wp-content/uploads/2016/07/Untitled-design-16-768x384.jpg",
  "registration.html"
);

var welcome = new Slide (
  "",
  "We are the organization responsible for bringing together the Bangladeshi community in Oman. By hosting a wide range of events and gatherings, we ensure that everyone from Bangladesh is kept engaged here!",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Our_Bangladesh.jpg/640px-Our_Bangladesh.jpg",
  "registration.html"
);

function buildSlider() {
  var myHTML;

  for (var i = 0; i < slideArray.length; i++) {
    myHTML +=
      "<div id='" +
      slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" +
      slideArray[i].background +
      ");'>" +
      "<div class='slideOverlay'>" +
      "<h1>" +
      slideArray[i].title +
      "</h1>" +
      "<h4>" +
      slideArray[i].subtitle +
      "</h4>" +
      "<a href='" +
      slideArray[i].link +
      "' target='_blank'>Join Us</a>" +
      "</div>" +
      "</div>";
  }

  document.getElementById("mySlider").innerHTML = myHTML;

  document.getElementById("slide" + currentSlideIndex).style.left = 0;  
}

buildSlider();


function prevSlide() {
  
  var nextSlideIndex;
  
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    
    nextSlideIndex = currentSlideIndex - 1;
  }

  
  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  
    document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInLeft");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutRight");

  
  currentSlideIndex = nextSlideIndex;
}
  
function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === slideArray.length - 1) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInRight");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;
}

