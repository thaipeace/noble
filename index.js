var lang = {},
    selectedLang = {},
    defaultLang = {}

var index = function () {
  function toggle(elm) {
    if (elm) {
      if (elm.classList.contains('active')) {
        elm.classList.remove('active')
      } else {
        elm.classList.add('active')
      }
    }
  }

  function init() {
    //Sticky menu onscroll
    window.addEventListener("scroll", () => {
      let top = window.scrollY
      if (top !== 0 && !document.body.classList.contains('scrolled')) {
        document.body.classList.add('scrolled')
      } else if (top === 0 && document.body.classList.contains('scrolled')) {
        document.body.classList.remove('scrolled')
      }
    }, false);

    //Show mobile menu
    const humburgerElm = document.getElementById('humburger')
    const closeMemuElm = document.getElementById('close-menu')
    const menuElm = document.getElementById('menu')
    if (humburgerElm) {
      humburgerElm.addEventListener('click', () => {
        toggle(menuElm)
      })

      closeMemuElm.addEventListener('click', () => {
        toggle(menuElm)
      })
    }

    //Onclick menu item
    if (menuElm) {
      menuElm.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItems = document.querySelectorAll('#menu li')
        menuItems.forEach(item => {
          if (e.target !== item) {
            item.classList.remove('active')
          } else if (!e.target.classList.contains('active')) {
            toggle(menuElm)
            e.target.classList.add('active')
          }
        })
      })
    }
  }

  return {
    init: init
  }
}();

function moveTo(id) {
  const elem = document.getElementById(id)

  window.scrollTo({
    top: elem.offsetTop - 120,
    left: 0,
    behavior: 'smooth'
  })

  if (id === 'trailer') {
    const maskElm = document.getElementById('mask')
    maskElm.click();
  }
}

function socialShare(mediaType, url, type) {
  var ori_href = url;
  var href = encodeURIComponent(url);
  var title = document.title;

  console.log(mediaType);
  console.log(href);
  console.log(title);

  if (!mediaType || !href || !title) return;

  var lang = selectedLang.data;

  if (mediaType == 'facebook') {
    var fbTitle = lang['facebook-title'];
    var fbText = lang['facebook-textarea'];
    var fbYouTubeTitle = lang['facebook-youtube-title'];
    r = "width=626, height=436, resizable=no, scrollbars=no, status=no, left=0, top=0, screenX=0, screenY=0",
      e = ori_href,
      n = " ",
      i = void 0 === n ? "" : n,
      c = type == 'youtube' ? fbYouTubeTitle : fbTitle,
      o = type == 'youtube' ? fbYouTubeTitle : fbText,
      a = void 0 === o ? "" : o;

    "" !== i && (c += "".concat(i, "\n")), "" !== a && (c += "".concat(a, "\n"));
    var u = "".concat("https://www.facebook.com/sharer/sharer.php", "?u=").concat(encodeURIComponent(e), "&quote=").concat(encodeURIComponent(c)),
      l = window.open(u, "facebook", r);
    if ((null !== l && l.focus(), "function" == typeof s)) {
      var f = function () {
        window.setTimeout(function () {
          !l || l.closed ? ((l = null), s()) : f();
        }, 500);
      };
      f();
    }
  }
  else if (mediaType == 'twitter') {
    var tText = '\n' + lang['tweet-text'] || "";
    var tTextYoutube = '\n' + lang['tweet-youtube'] || "";
    var isText = type == 'youtube' ? tTextYoutube : tText;
    window.open("https://twitter.com/intent/tweet" + "?text=" + encodeURIComponent(title).concat(encodeURIComponent(isText)) + "&url=" + href);
  }
  else {
    return false;
  }
}

var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", 
  "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12"]
var dotId = ["dots1", "dots2", "dots3", "dots4", "dots5", "dots6", "dots7", "dots8", "dots9", "dots10", "dots11", "dots12"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var d = document.getElementsByClassName(dotId[no]);

  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  if (n > d.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = d.length}
  for (i = 0; i < d.length; i++) {
    d[i].className = d[i].className.replace(" active", "");
  }

  x[slideIndex[no]-1].className += " active";
  d[slideIndex[no]-1].className += " active";
}

window.onload = function () {
  index.init()
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);
  showSlides(1, 4);
  showSlides(1, 5);
  showSlides(1, 6);
  showSlides(1, 7);
  showSlides(1, 8);
  showSlides(1, 9);
  showSlides(1, 10);
  showSlides(1, 11);
}