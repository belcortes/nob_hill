var x = " ";

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

    
    var success = new PDFObject({ url: "../images/NHA1.pdf" }).embed('notable');
    var success2 = new PDFObject({ url: "../images/form.pdf" }).embed('form');

    $('.n').on('click', function(){
      
      var n = $(this).attr('id');
      var split = n.slice(2);
      
      if (split == 1) {
        var success3 = new PDFObject({ url: "../images/NHA1.pdf" }).embed('notable');
      } else if(split == 2) {
        var success3 = new PDFObject({ url: "../images/NHA2.pdf" }).embed('notable');
      } else if(split == 3) {
        var success3 = new PDFObject({ url: "../images/NHA3.pdf" }).embed('notable');
      } else if(split == 4) {
        var success3 = new PDFObject({ url: "../images/NHA4.pdf" }).embed('notable');
      } else if(split == 5) {
        var success3 = new PDFObject({ url: "../images/NHA5.pdf" }).embed('notable');
      } else if(split == 6) {
        var success3 = new PDFObject({ url: "../images/NHA6.pdf" }).embed('notable');
      } else if(split == 7) {
        var success3 = new PDFObject({ url: "../images/NHA7.pdf" }).embed('notable');
      } else if(split == 8) {
        var success3 = new PDFObject({ url: "../images/NHA8.pdf" }).embed('notable');
      } else if(split == 9) {
        var success3 = new PDFObject({ url: "../images/NHA9.pdf" }).embed('notable');
      } else if(split == 10) {
        var success3 = new PDFObject({ url: "../images/NHA10.pdf" }).embed('notable');
      } else if(split == 11) {
        var success3 = new PDFObject({ url: "../images/NHA11.pdf" }).embed('notable');
      } else if(split == 12) {
        var success3 = new PDFObject({ url: "../images/NHA12.pdf" }).embed('notable');
      } else if(split == 13) {
        var success3 = new PDFObject({ url: "../images/NHA13.pdf" }).embed('notable');
      } else if(split == 14) {
        var success3 = new PDFObject({ url: "../images/NHA14.pdf" }).embed('notable');
      } else if(split == 15) {
        var success3 = new PDFObject({ url: "../images/NHA15.pdf" }).embed('notable');
      } else if(split == 16) {
        var success3 = new PDFObject({ url: "../images/NHA16.pdf" }).embed('notable');
      } else if(split == 17) {
        var success3 = new PDFObject({ url: "../images/NHA17.pdf" }).embed('notable');
      } else if(split == 18) {
        var success3 = new PDFObject({ url: "../images/NHA18.pdf" }).embed('notable');
      } else if(split == 19) {
        var success3 = new PDFObject({ url: "../images/NHA19.pdf" }).embed('notable');
      }
    
    });
     
    
    
});

      // console.log(split);

      // switch(split) {
      //   case 1:
      //     success4 = new PDFObject({ url: "../images/NHA1.pdf" }).embed('notable');
      //     break;
      //   case 2:
      //     success4 = new PDFObject({ url: "../images/NHA2.pdf" }).embed('notable');
      //     break;
      //   case 3:
      //     success4 = new PDFObject({ url: "../images/NHA3.pdf" }).embed('notable');
      //     break;
      //   case 4:
      //     success4 = new PDFObject({ url: "../images/NHA4.pdf" }).embed('notable');
      //     break;
      //   case 5:
      //     success4 = new PDFObject({ url: "../images/NHA5.pdf" }).embed('notable');
      //     break;
      //   case 6:
      //     success4 = new PDFObject({ url: "../images/NHA6.pdf" }).embed('notable');
      //     break;
      //   case 7:
      //     success4 = new PDFObject({ url: "../images/NHA7.pdf" }).embed('notable');
      //     break;
      //   case 8:
      //     success4 = new PDFObject({ url: "../images/NHA8.pdf" }).embed('notable');
      //     break;
      //   case 9:
      //     success4 = new PDFObject({ url: "../images/NHA9.pdf" }).embed('notable');
      //     break;
      //   case 10:
      //     success4 = new PDFObject({ url: "../images/NHA10.pdf" }).embed('notable');
      //     break;
      //   case 11:
      //     success4 = new PDFObject({ url: "../images/NHA11.pdf" }).embed('notable');
      //     break;
      //   case 12:
      //     success4 = new PDFObject({ url: "../images/NHA12.pdf" }).embed('notable');
      //     break;
      //   case 13:
      //     success4 = new PDFObject({ url: "../images/NHA13.pdf" }).embed('notable');
      //     break;
      //   case 14:
      //     success4 = new PDFObject({ url: "../images/NHA14.pdf" }).embed('notable');
      //     break;
      //   case 15:
      //     success4 = new PDFObject({ url: "../images/NHA15.pdf" }).embed('notable');
      //     break;
      //   case 16:
      //     success4 = new PDFObject({ url: "../images/NHA16.pdf" }).embed('notable');
      //     break;
      //   case 17:
      //     success4 = new PDFObject({ url: "../images/NHA17.pdf" }).embed('notable');
      //     break;
      //   case 18:
      //     success4 = new PDFObject({ url: "../images/NHA18.pdf" }).embed('notable');
      //     break;
      //   case 19:
      //     success4 = new PDFObject({ url: "../images/NHA19.pdf" }).embed('notable');
      //     break;
      // }
      // return success4;
      

