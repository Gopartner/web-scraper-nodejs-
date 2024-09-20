
/** VALIDATION */
$(document).ready(function() {
  var forms = document.getElementsByClassName('needs-validation');
                  
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
        form.classList.add('was-validated');
      }, false);
    });
});

/** UPDATE TIME START */
function updateTime() {
  var dateInfo = new Date();

  dateInfo = new Date(dateInfo.getTime() + serverTimezoneOffset * 1000);

  /* year */
  var res = dateInfo.getFullYear();

  /* time */
  var hr = (dateInfo.getUTCHours() < 10) ? "0" + dateInfo.getUTCHours() : dateInfo.getUTCHours(),
    min = (dateInfo.getUTCMinutes() < 10) ? "0" + dateInfo.getUTCMinutes() : dateInfo.getUTCMinutes(),
    sec = (dateInfo.getUTCSeconds() < 10) ? "0" + dateInfo.getUTCSeconds() : dateInfo.getUTCSeconds();


  /* date */
  var month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  day = dateInfo.getUTCDate();

  // store date
  var currentDate = dow[dateInfo.getUTCDay()] + ", " + day + "-" + month[dateInfo.getUTCMonth()] + "-" + res;

  var currentTime = hr + ":" + min + ":" + sec;

  // print time
  $(".time-container").text(currentDate + " " + currentTime);

};

function numberWithSeparators(number, separator = '.', decimal = ',') {
	return $.number(number, 0, decimal, separator);
}


// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);

/** END UPDATE TIME */

/** END DARKEN */

$('.disable-after-submit').submit(function() {
  if ($(this)[0].checkValidity()) {
    $(this).find('button, input[type="submit"]').attr('disabled', true);
  }
});
$('.disable-after-submit input').blur(function() {
  $(this).parents('form').find('button, input[type="submit"]').attr('disabled', false);
});


$(document).on('ready', function() {
  $('.as-responsive-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });      
});

$(".password-toggle").click(function() {
  var input = $(this).parents('.form-group').find('input');

  $(this).toggleClass('icon-private');
  var type = $(this).hasClass("icon-private") ? "text" : "password";

  input.attr('type', type);
});

$("#filterGames").change(function() {
  loadGameList();
});

var searchTimeout = null;
$("#searchGames").keyup(function() {
  if (searchTimeout != null) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = setTimeout(function() {
    loadGameList();
  }, 300);
});

function loadGameList() {
  var selectedFilter = $("#filterGames").val().toLowerCase().trim();
  var keyword = $("#searchGames").val().toLowerCase().trim();

  var resultContainer = $(".result-container");
  var loaderContainer = $(".loader-container");
  var errorContainer = $(".error-container");

  var targetContainer = resultContainer;
  if (targetContainer.length > 0) {
    var type = selectedFilter;
    
    targetContainer.find('.game-item').addClass('d-none');
    switch (type) {
        case 'freespin':
            targetContainer.find('.game-item[data-freespin="1"]').removeClass('d-none');
            break;

        case 'hot':
            targetContainer.find('.game-item[data-hot="1"]').removeClass('d-none');
            break;

        case 'new':
            targetContainer.find('.game-item[data-new="1"]').removeClass('d-none');
            break;

        default:
            targetContainer.find('.game-item').removeClass('d-none');
    }

    if (keyword.length > 0) {
        
        $.each(targetContainer.find('.game-item:not(.d-none)'), function(k, v) {
            var gameName = $(v).data('name');

            if (!gameName.includes(keyword)) {
                $(v).addClass('d-none');
            }
        });
    }
  }
  
  // loaderContainer.removeClass('d-none');
  // resultContainer.addClass('d-none');
  // errorContainer.addClass('d-none');

  // $.ajax({
  //   url: loadGameUrl,
  //   method: 'POST',
  //   data: {
  //     provider_code: loadProviderCode,
  //     provider_type: loadProviderType,
  //     filter: selectedFilter,
  //     keyword: keyword,
  //     _csrf: csrfToken,
  //   },
  // })
  // .done(function(data) {
  //   loaderContainer.addClass('d-none');
    
  //   resultContainer.html('');

  //   var iconSize = resultContainer.data('icon-size') ?? 'rectangular';

  //   $.each(data, function(k, v) {
  //     var template = ' \
  //         <div class="col"> \
  //           <a href="{game_url}" class="as-slot-image pb-2" target="_blank" {status_blocked}> \
  //               <div class="slot-inner-frame position-relative"> \
  //                   <span class="as-newgame-frame position-absolute p-1 p-md-2 {status_new}">New</span> \
  //                   <span class="as-hotgame-frame position-absolute p-1 {status_hot}"></span> \
  //                   <img class="lozad {icon_size}" data-src="{game_icon}" /> \
  //                   <div class="lds-ripple"> \
  //                       <div></div> \
  //                       <div></div> \
  //                   </div> \
  //               </div> \
  //               <h2 class="pt-1"> \
  //                   {game_name} \
  //               </h2> \
  //               <h3> \
  //                   {provider_name} \
  //               </h3> \
  //           </a> \
  //       </div> \
  //     ';

  //     resultHtml = template;

  //     resultHtml = resultHtml.replace(/{game_name}/, v.game_name);
  //     resultHtml = resultHtml.replace(/{game_icon}/, v.game_icon);
  //     resultHtml = resultHtml.replace(/{provider_name}/, v.provider_name);
  //     resultHtml = resultHtml.replace(/{status_new}/, v.is_new == 1 ? '' : 'd-none');
  //     resultHtml = resultHtml.replace(/{status_hot}/, v.is_hot == 1 ? '' : 'd-none');
  //     resultHtml = resultHtml.replace(/{icon_size}/, iconSize);
      
      
  //     if (v.game_url == '#') {
  //       resultHtml = resultHtml.replace(/{game_url}/, '#');

  //       if(v.provider_status == 2){
  //         resultHtml = resultHtml.replace(/{status_blocked}/, ' data-bs-target="#gameMaintenanceModal" data-bs-toggle="modal"');
  //       } else if (v.user_status == 5) {
  //         resultHtml = resultHtml.replace(/{status_blocked}/, ' data-bs-target="#userRestrictedModal" data-bs-toggle="modal"');
  //       } else if (v.is_blocked == 1) {
  //         resultHtml = resultHtml.replace(/{status_blocked}/, ' data-bs-target="#blockedProviderModal" data-bs-toggle="modal"');
  //       } else if (v.has_demo_play == 0) {
  //         resultHtml = resultHtml.replace(/{status_blocked}/, ' data-bs-target="#loginmodal" data-bs-toggle="modal"');
  //       }
        
  //     } else {
  //       resultHtml = resultHtml.replace(/{game_url}/, v.game_url);
  //       resultHtml = resultHtml.replace(/{status_blocked}/, '');
  //     }
  //     resultContainer.append(resultHtml);
      
  //   });

  //   if (resultContainer.html() == '') {
  //     errorContainer.removeClass('d-none');
  //     resultContainer.addClass('d-none');
  //   } else {
  //     resultContainer.removeClass('d-none');
  //     errorContainer.addClass('d-none');

  //     runLozad();
  //   }
  // })
  // .error(function() {
  //   errorContainer.removeClass('d-none');
  //   loaderContainer.addClass('d-none');
  //   resultContainer.addClass('d-none');
  // });
}

function runLozad() {
  const images = document.getElementsByClassName('lozad');
  for (const image of images) {
    if (!image.getAttribute('data-background-image')) {
      image.onload = function() {
        this.setAttribute('data-fully-loaded', true);
      };
    }
  }

  if (lozadObserver !== undefined) {
    lozadObserver.observe();
  }
}

var lozadObserver;

$(document).ready(function() {
  /*lazy load*/
  lozadObserver = lozad(); // lazy loads elements with default selector as '.lozad'
  
  runLozad();
  
  /*lazy load ending*/
});

function scrollToActivePosition() {
  $.each($(".has-horizontal-fade"), function(k, v) {
    var activeElement = $(v).find('.active');

    if (activeElement.length > 0) {
      var currentScrollLeft = $(v).scrollLeft();
      amountToScroll = (currentScrollLeft + activeElement.offset().left) + activeElement.width() - $(v).width() + 40;
      if (amountToScroll > 0) {
        $(v).scrollLeft(amountToScroll);
      }
    }
  });
}

scrollToActivePosition();
$(window).load(function() {
  scrollToActivePosition();
});

function checkHorizontalScroll(element) {
  var domElement = element[0];
  var fadeContainer = element.parents('.fade-container');
  let width = parseInt((domElement.scrollWidth - domElement.clientWidth));
  let scroll = parseInt(domElement.scrollLeft);

  fadeContainer.removeClass('scroll-start scroll-end');
  
  if (scroll <= 0) {
    fadeContainer.addClass('scroll-start');
  } else if (scroll >= width) {
    fadeContainer.addClass('scroll-end');
  }
}

$(".has-horizontal-fade").scroll(function() {
  checkHorizontalScroll($(this));
});
$.each($(".has-horizontal-fade"), function(k, v) {
  checkHorizontalScroll($(v));
});

function checkMobileLaunchLink() {
  var windowWidth = $(window).width();

  var mobileOffset = 992;
  var mobileLinkSuffix = '&mobile=1';
  $.each($(".game-launch-link"), function(k, v) {
    var link = $(v).attr('href');

    var linkContainMobile = link.indexOf(mobileLinkSuffix) !== -1;

    if (windowWidth <= mobileOffset) {
      if (!linkContainMobile) {
        $(v).attr('href', link + mobileLinkSuffix);
      }
    } else {
      if (linkContainMobile) {
        $(v).attr('href', link.replace(mobileLinkSuffix, ''));
      }
    }
  });
}
$(window).resize(checkMobileLaunchLink);
checkMobileLaunchLink();