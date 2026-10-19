var swiperHero = new Swiper(".swiper.is-hero", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
});

var swiperStories = new Swiper(".swiper.is-stories", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
});

var swiperBlog = new Swiper(".swiper.is-blog", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  },
  breakpoints: {
  	991: {
      slidesPerView: 3,
    },
  }
});

var acc = document.getElementsByClassName("faqs-item");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains('open')) {
      this.classList.toggle('open');
    } else {
      $('.faqs-item').removeClass('open');
      this.classList.toggle('open');
    }
  });
}

var acc = document.getElementsByClassName("grant-item");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains('open')) {
      this.classList.toggle('open');
    } else {
      $('.faqs-item').removeClass('open');
      this.classList.toggle('open');
    }
  });
}

var acc = document.getElementsByClassName("scholar-item");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains('open')) {
      this.classList.toggle('open');
    } else {
      $('.scholar-item').removeClass('open');
      this.classList.toggle('open');
    }
  });
}

var acc = document.getElementsByClassName("help-wrapper");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains('open')) {
      this.classList.toggle('open');
    } else {
      this.classList.toggle('open');
    }
  });
}

document.getElementById("open-search").onclick = function() {
  document.getElementById("search").classList.toggle("open");
};

document.getElementById("open-search-mobile").onclick = function() {
  document.getElementById("search").classList.toggle("open");
};

document.getElementById("open-additional-links").onclick = function() {
  document.getElementById("additional-links").classList.toggle("open");
};



document.getElementById("open-font-size").onclick = function() {
  document.getElementById("font-size-selector").classList.toggle("open");
  document.getElementById("open-font-size").classList.toggle("open");
};

document.getElementById("normal-font").onclick = function() {
  document.body.classList.remove("medium-font", "large-font");
};

document.getElementById("medium-font").onclick = function() {
  document.body.classList.remove("large-font");
  document.body.classList.toggle("medium-font");
};

document.getElementById("large-font").onclick = function() {
  document.body.classList.remove("medium-font");
  document.body.classList.toggle("large-font");
};
