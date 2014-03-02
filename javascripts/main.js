$(function(){
    $(".slides").slidesjs({
        width: 400,
        height: 125,
        navigation: {
          active: false,
        },
        pagination: {
          active: false,
        },
        play: {
          active: false,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
          effect: "fade",
            // [string] Can be either "slide" or "fade".
          interval: 7000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          swap: true,
            // [boolean] show/hide stop and play buttons
          pauseOnHover: false,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 2500,
          crossfade: true
            // [number] restart delay on inactive slideshow
        }
      });
});