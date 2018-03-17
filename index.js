let blogTitle = document.getElementById('top_blog_title');
let navigationBar = document.getElementById('top_navigation_bar');

window.onscroll = function() {
  if (window.scrollY) {
    if (blogTitle.style.opacity == 1 && navigationBar.style.opacity == 0) {
      blogTitle.style.display = 'none';
      navigationBar.style.display = 'block';
      fadeIn(navigationBar);
    }
  } else {
    fadeOut(navigationBar);
    navigationBar.style.display = 'none';
    blogTitle.style.display = 'block';
    fadeIn(blogTitle);
  }
}

function fadeIn(element) {
  var start = null;
  var opacity = 0;

  function fadeInAnimation(timestamp) {
    if (start) start = timestamp;
    opacity = (opacity + 0.05) <= 1 ? opacity + 0.05 : 1;
    element.style.opacity = opacity;

    if (opacity <= 1) {
      requestAnimationFrame(fadeInAnimation);
    }
  };

  requestAnimationFrame(fadeInAnimation);
  console.log("fadeIn");
}

function fadeOut(element) {
  var start = null;
  var opacity = 1;

  function fadeOutAnimation(timestamp) {
    if (start) start = timestamp;
    opacity = (opacity - 0.05) >= 0 ? opacity - 0.05 : 0;
    element.style.opacity = opacity;

    if (opacity >= 0) {
      requestAnimationFrame(fadeOutAnimation);
    }
  };

  requestAnimationFrame(fadeOutAnimation);
  console.log("fadeOut");
}