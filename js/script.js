$(".accordion").accordion({
  heightStyle: "content"
});

const swiper__projects = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1-button-next',
    prevEl: '.swiper1-button-prev',
  },

  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2,
    },
    321: {
      slidesPerView: 2,
    },
    1540: {
      slidesPerView: 3
    }

  }


});

const swiper__news = new Swiper('.swiper-news', {
  // Optional parameters
  loop: false,

  // Navigation arrows


  slidesPerView: 1,

  spaceBetween: 50,

  breakpoints: {
    768: {
      navigation: false,
      pagination: {
        el: '.swiper-news-pagination',
        type: 'bullets',
      }
        },

    1024: {
       navigation: {
       nextEl: '.swiper-news-button-next',
       prevEl: '.swiper-news-button-prev',
    },
      slidesPerView: 3
      },
    321: {
      slidesPerView: 2,
      pagination: true,
    },

      pagination: true


  }
});

const swiper__hero = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-hero-button-next',
    prevEl: '.swiper-hero-button-prev',
  },

  // autoplay: {
  //   delay: 3000,
  // },

});

const swiper__gal = new Swiper('.galery__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-gal-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-gal-button-next',
    prevEl: '.swiper-gal-button-prev',
  },



  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 2,

      slidesPerGroup: 3,

      spaceBetween: 50,
    },

    321: {
      slidesPerView: 2,
      spaceBetween: 40
    },

    1490: {
      slidesPerView: 3,
      spaceBetween: 50
    }


  }

});

function burgerOnClick(event){
  document.querySelector(".header__nav").classList.toggle("header__nav-active");
  document.querySelector(".burger").classList.toggle("burger-active");
}
document.querySelector(".burger").addEventListener('click',burgerOnClick);

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".menu__list-item-link").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".menu__drop");

    document.querySelectorAll(".menu__list-item-link").forEach(el => {
      if (el != btn) {
        el.classList.remove("active-btn");
      }
    });

    document.querySelectorAll(".menu__drop").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("menu__drop-active");
      }
    })
    dropdown.classList.toggle("menu__drop-active");
    btn.classList.toggle("active-btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".menu__list")) {
    document.querySelectorAll(".menu__drop").forEach(el => {
        el.classList.remove("menu__drop-active");
    })
     document.querySelectorAll(".menu__list-item-link").forEach(el => {
        el.classList.remove("active-btn");
    });
  }
})
})


function onClickGaleryItem(event){
  const contentPlace=event.target.closest('.swiper-slide').querySelector('.galery__drop');
  if (contentPlace) {
    document.querySelector('.galery__drop__card').innerHTML=contentPlace.innerHTML;
    document.querySelector('.galery__modal').classList.toggle("galery__modal-active");
  }
}
function galeryItemsIterator(item, index) {
  item.addEventListener('click', onClickGaleryItem);
};
const galeryItems=[...document.querySelectorAll(".swiper-slide-galery")];
galeryItems.map(galeryItemsIterator);
function closeModal(){
  document.querySelector('.galery__modal').classList.toggle("galery__modal-active");
  document.querySelector('.galery__drop__card').innerHTML='';
}
document.querySelector('.modal-svg').addEventListener('click', closeModal);

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
    });

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.760467, 37.615039],
    zoom: 18
  });
  var myPlacemark = new ymaps.Placemark([55.760467, 37.615039], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/maps-svg.svg',
    iconImageSize: [20, 20]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

// new SimpleBar(document.getElementsByClassName('menu__drop__list'), { autoHide: false });
document.querySelectorAll('.menu__drop__list').forEach(menushka => {
  new SimpleBar(menushka, { autoHide: false, scrollbarMaxSize: 1, });
})

tippy('#myButton',  {
  content: "Пример современных тенденций - современная методология разработки",
  theme: 'purple'
});

tippy('#secondButton',  {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  theme: 'purple'
});

tippy('#thirdButton',  {
  content: "В стремлении повысить качество",
  theme: 'purple'
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

