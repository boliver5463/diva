/* Easy reference elements */
var form          = jQuery('#search-form');
var search        = jQuery('#search');
var reminder      = jQuery('#search-reminder');
var other         = jQuery('#other-search');
var g_suite       = jQuery('#google-suite');
var currentMethod = 'GET';

/* Starting processes*/
jQuery(function(){
  // createOtherEngines();
  jQuery.getJSON("http://jsonip.com?callback=?", function (data) {
      jQuery("#ip-address").text(data.ip);
  });

  search.focus();
  reminder.hide();


  browserVersion( jQuery('#browser') );
  /* Get current Datetime */
  setInterval(function(){
    currentTime( jQuery('#date-time') );
  }, 1000);

  /* Fade in corner elements */
  jQuery('.fade-in').hide().delay(500).fadeIn('slow');

});

jQuery('body').on( 'submit', '#search-form', function( event ){
  event.preventDefault();
  if( currentMethod == 'STATIC'){
    var url = jQuery( this ).attr('action')+jQuery('#search').val();
    location.replace(url);
  }else{
    var url = jQuery( this ).attr('action')+'?q='+jQuery('#search').val();
    location.replace(url);
  }
  return false;
});

/* 
 * Track when keyup in input 
 * and perform search checks
 */
search.on('keyup', function(){
  searchTerms();
});

/* 
 * On Search focus and focus out.
 * display the other search engines. 
 */
search.on('focus', function(){
  other.fadeIn('slow');
});
search.on('focusout', function(){
  other.fadeOut('slow');
});

/* 
 * Update search engine on click of
 * one of the visible one's on focus.
 */
jQuery('body').on('click', '.single-engine', function(){
  var short = jQuery(this).data('short');
  search.val( short );
  search.focus();
  searchTerms();
});

/* Add search engines to page dynamically */
// function createOtherEngines(){
//   var html = '';
//   jQuery.each( engines, function(key,engine){
//     html += '<div class="row single-engine" data-short="'+engine['short']+'"">';
//     html +=   '<div class="col-3 col-xs-3">';
//     html +=     engine['short'];
//     html +=   '</div>';
//     html +=   '<div class="col-9 col-xs-9">';
//     html +=     engine['name'];
//     html +=   '</div>';
//     html += '</div>';
//   });

//   other.html( html );
// }

/* Get search input */
function searchTerms(){
  var isRequest = isChangeRequest();
  if( isRequest ){
    changeSearchEngine( isRequest );
  }
  if( search.val() ){
    reminder.fadeIn('slow');
    // reminder.slideDown('slow');
  }else{
    // reminder.fadeOut('slow');
    reminder.fadeOut('slow');
  }
  updateParticles();
}

/* Manipulate search form to switch to different search engines based on text */
function isChangeRequest(){
  var value = false;
  var term = jQuery.trim( search.val().toLowerCase() );
  
  /* 
   * Looking through each search engine short code
   * to see if referenced. If it is, return the appropriate engine
   */
  jQuery.each( engines, function(key, engine){
    if( engine['short'] == term ){
      value = engine['name'];
    }
  });
  return value;
}

/* Change search engine to the requested one */
function changeSearchEngine( request ){
  jQuery.each( engines, function(key, engine){
    if( engine['name'] == request ){
      form.attr('action', engine['action']);
      search.attr('placeholder', engine['name']);
      reminder.text( engine['name'] );
      currentMethod = engine['method'];
    }
  });
  search.val('');
}

/* Find what browser and it's current version of the current user */
function browserVersion( element ){
  var str = '';
  if( jQuery.browser.chrome ) {
     str = 'Chrome';
  } else if ( jQuery.browser.mozilla ) {
     str = 'Mozilla';
  } else if ( jQuery.browser.opera ) {
     str = 'Opera';
  } else if ( jQuery.browser.msie ) {
     str = 'Internet Explorer';
  }
  str += " "+jQuery.browser.version;
  jQuery( element ).text( str );
}

/* Current Date, Time and UTC */
function currentTime( element ){
  var currentDate = new Date();
  var year = currentDate.toLocaleString('en-US', { year: 'numeric'});
  var date = "<div class='copy'>"+currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short', hour12: true })+"</div>";
  date += "<div class='copy'><span class='text-uppercase'>" + currentDate.toLocaleString('en-US', { weekday: 'long'}) + "</span> ";
  date += currentDate.toLocaleString('en-US', { month: 'long'}) + " ";
  date += currentDate.toLocaleString('en-US', { day: 'numeric'}) + ", ";
  date += year;
  date += "</div>";
  jQuery( element ).html( date );

  jQuery('#current-year').html('© D.I.V.A. '+year);
}

/* 
 * On KeyUp on the search box, delete particles and
 * then create particles based on the character length of the query.
 */
function updateParticles(){
  jQuery('#particles-js').html('');
  if( search.val() ){
    createParticles( search.val().length );
  }
}

/* ---- particles.js config ---- */

/* Create particles based on number given */
function createParticles( number ){

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": number,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

}