//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal(){
    var trigger = $("body").find('[data-bs-target="staticBackdrop2"]');
    trigger.click(function() {
      var theModal = $(this).data( "target" ),
      videoSRC = $(this).attr( "data-theVideo" ), 
      videoSRCauto = videoSRC+"?autoplay=1" ;
      $(theModal+' iframe').attr('src', videoSRCauto);
      $(theModal+' button.close').click(function () {
          $(theModal+' iframe').attr('src', videoSRC);
      });   
    });
}

