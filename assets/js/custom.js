var btn = $('#button');
//¸ü¶àÏÂÔØ£ºhttps://www.bootstrapmb.com 
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});


$(window).on('load', function () {
  // Preloader
  $('.loader').fadeOut();
  $('.loader-mask').delay(350).fadeOut('slow');
});


// wow js
new WOW().init();

// comingsoon page countdown js
(function () {
  if (document.getElementById("days") !== null) {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = '2024',
      dayMonth = "10/14/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        let days = Math.floor(distance / (day));
        let hours = Math.floor((distance % (day)) / (hour));
        let minutes = Math.floor((distance % (hour)) / (minute));
        let seconds = Math.floor((distance % (minute)) / second);

        document.getElementById("days").innerText = days,
          document.getElementById("hours").innerText = hours,
          document.getElementById("minutes").innerText = minutes,
          document.getElementById("seconds").innerText = seconds;

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
          var items = document.querySelectorAll(".compaign_countdown");
          for (var i = 0; i <= items.length; i++) {
            if (typeof items[i] !== 'undefined') {
              items[i].style.display = "none";
            }
          }
        }
        //seconds
      }, 0)
  }
}());
// Get the button
var backButton = document.getElementById("back-to-top-btn");

if ($('#element').length) {

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  backButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}

$(document).ready(function () {
  comparisonTable(".comparison-table ul li.active");

  // DIRTY Responsive pricing table JS
  $(".comparison-table ul").on("click", "li", function () {
    comparisonTable(this);

    $('.comparison-table ul li').removeClass('active');
    $(this).addClass('active');
  });
  // Initialize the media query
  var mediaQuery = window.matchMedia('(max-width: 992px)');
  // Add a listen event
  mediaQuery.addListener(doSomething);
  // On load
  doSomething(mediaQuery);
});

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $('.sep').attr('colspan', 4);
  } else {
    $('.sep').attr('colspan', 4);
  }
}

function comparisonTable(el) {
  if ($('.comparison-table').length) {
    var width = $(document).width();

    if (width >= 992) {
      // $('.new-windows-tables-btn td:eq(0)').attr('colspan', 4);
      $('.comparison-table table tr td').removeAttr('style');
      $('.new-windows-tables-btn td:not(:eq(0))').attr('style', 'display: none !important');
    } else {
      // $('.new-windows-tables-btn td:eq(0)').removeAttr('colspan');

      var pos = $(el).index() + 1;
      $.each($('.comparison-table tbody tr td'), function (index, elem) {
        if ($(this).index() == pos || $(this).index() == 0) {
          $(this).attr('style', 'display: table-cell !important');
        } else {
          $(this).attr('style', 'display: none !important');
        }
      });
    }
  }
}

$(window).on('resize', function () {
  comparisonTable(".comparison-table ul li.active");
});

// 
$(document).ready(function () {
  function toggleButton() {
    if ($(window).width() <= 991) {
      $('.hide-button').show(); // Show the button for screens 991px or less
    } else {
      $('.hide-button').hide(); // Hide the button for larger screens
    }
  }

  // Initial check
  toggleButton();

  // Check on window resize
  $(window).resize(function () {
    toggleButton();
  });
});

$(document).ready(function () {
  var owl = $('.testimonials-con .owl-carousel');
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  })
})

$(document).ready(function () {
  var owl = $('.our-history-con .owl-carousel');
  owl.owlCarousel({
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>', // Left arrow
      '<i class="fa fa-angle-right"></i>' // Right arrow
    ],
    loop: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 4500,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  })
})
// header scroll js
if ($('#element').length) {
  const header = document.querySelector(".header-con");
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      header.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
      // down
      header.classList.remove(scrollUp);
      header.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
      // up
      header.classList.remove(scrollDown);
      header.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
}