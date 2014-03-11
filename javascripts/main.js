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
          effect: "fade",
          interval: 7000,
          auto: true,
          swap: true,
          pauseOnHover: false,
          restartDelay: 2500,
          crossfade: true
        }
      });

    $('#news').bxSlider({
      minSlides: 2,
      maxSlides: 3,
      slideWidth: 940,
      auto: true,

      controls: false,
      pager: false,
      // pagerType: 'full',
      captions: true
    });

    var x = '';
    var success = new PDFObject({ url: "../images/NHA1.pdf" }).embed('notable');
    var success2 = new PDFObject({ url: "../images/form.pdf" }).embed('form');

    $('.n').on('click', function(){
      
      var n = $(this).attr('id');
      var split = n.slice(2);
      // console.log(split);
      
      switch(split) {
        case 1:
          x = 1;
          break;
        case 2:
          x = 2;
          break;
        case 3:
          x = 3;
          break;
        case 4:
          x = 4;
          break;
        case 5:
          x = 5;
          break;
        case 6:
          x = 6;
          break;
        case 7:
          x = 7;
          break;
        case 8:
          x = 8;
          break;
        case 9:
          x = 9;
          break;
        case 10:
          x = 10;
          break;
        case 11:
          x = 11;
          break;
        case 12:
          x = 12;
          break;
        case 13:
          x = 13;
          break;
        case 14:
          x = 14;
          break;
        case 15:
          x = 15;
          break;
        case 16:
          x = 16;
          break;
        case 17:
          x = 17;
          break;
        case 18:
          x = 18;
          break;
        case 19:
          x = 19;
          break;
        // console.log(x); 
      }
      // console.log(x); 
      return x;
      // console.log('hello');
      // url = ;
      // 
      var success = new PDFObject({ url: "../images/NHA"+x+".pdf" }).embed('notable');
    });
    
    
    
});

