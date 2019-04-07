 

 // Header Typing

$(document).ready(function(){
        ityped.init('#text-rotate-slide', {
          strings: ['MARK HAMLIN', 'CREATIVE DESIGNER','WEB EXPERT'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 500,
          startDelay: 500
        });
    
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          filter: '*',
          masonry: {
            columnWidth: '.col-md-4',
            horizontalOrder: true,
          }
        });                                                  
    });

   // Wow plugin added
 new WOW().init();

  // Modal Video
$(document).ready(function() {

  // Gets the video src from the data-src on each button

  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);

    
    
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  })
    
    
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  })      
    
  // document ready  
  });

// Filter
var $grid = $('.grid') .isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
       $grid.isotope({
        filter: '.web-design'
      });

      $('.filter li') .on("click", function(){
        var akib = $(this).data('name');
        $grid.isotope({
        filter: akib
      });

      });