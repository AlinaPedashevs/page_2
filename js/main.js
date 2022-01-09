$(function () {
  alert();
});

$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a span").removeClass("minus").addClass("plus");
    } else {
      $(".set > a span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }
    return false;
  });
});




$(function(){
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});

$(document).ready(function () {
  $(".menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});




$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    $('.popup-form').slideUp(400);
    setTimeout(function () {
      $('.popup-title').text('Заявка успешно отправлена');
      $('.popup-title').css('background-color', 'green');
    }, 400);
  });

  $('.btn-popup').on('click', function () {
    $('.popup-form').show();
    $('.overlay').fadeIn(400);
  });


  $('.popup-close').on('click', function () {
    $('.overlay').fadeOut(400);
  });

  $('.btn-popup').on('click', function () {
    $('.overlay').toggleClass('active');
  });

});

//Header

// $(function () {
//   let header = $('.menu__inner.top');

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1) {
//       header.addClass('active');
//     } else {
//       header.removeClass('active');
//     }
//   });
// });

$(function () {
  let header = $('.menu__inner');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});


$(function () {
  let header = $('.menu__inner');
  let hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('fixed');
      $('body').css({
        'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
      });
    }  else {
      header.removeClass('fixed');
      $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
      })
    }
  });
});



let telInput = $("#phone")

// initialize
telInput.intlTelInput({
  initialCountry: 'auto',
  preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
  autoPlaceholder: 'aggressive',
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json', {
      cache: 'reload'
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Failed: ' + response.status)
    }).then(ipjson => {
      callback(ipjson.country)
    }).catch(e => {
      callback('us')
    })
  }
})

let telInput2 = $("#phone2")

// initialize
telInput2.intlTelInput({
  initialCountry: 'br',
  preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
  autoPlaceholder: 'aggressive',
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"
})


$('[data-fancybox]').fancybox({
  youtube: {
    controls: 0,
    showinfo: 0
  },
  vimeo: {
    color: 'f00'
  }
});