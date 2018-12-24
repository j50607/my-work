$(document).ready(function(e) {

  $(window).scroll(function(){
    //var $(window).scrollTop(); 為 scroll
    var scroll = $(window).scrollTop();
    //當卷軸超過50px，自動加上 .navbar-fixed-top ，如果小於就移除
    if( scroll >= 50){
      
      $('.navbar-scroll').addClass('navbar-fixed-top');
      
    }else{
      
      $('.navbar-scroll').removeClass('navbar-fixed-top')
      
    }

    
  });

/* progress-bar */ 

    $(function(){
        var $window = $(window);
        var $progress = $('.progress');
        var sHeight = $('body').height() - $window.height();
        $window.on('scroll', function() {
            window.requestAnimationFrame(function(){
                var value = Math.max(0, Math.min(1, $window.scrollTop() / sHeight));
                updateProgressBar(value);
            });
        });

        function updateProgressBar(value) {
            $progress.css({width: value * 100 +'%'});
        }
    });

/* progress-bar end  */

/* support slide  */
    $('.support-list li').click(function(e) {

      if ($(e.currentTarget).find('.teacher-advise').css('display') == 'block') {
        $('.support-list .teacher-advise').slideUp();
      } else {
        $('.support-list .teacher-advise').slideUp();
        $(e.currentTarget).find('.teacher-advise').slideToggle();
      }
      
    });

/* support slide end */

/* go-top */

    $('#go-top').click(function(e){

        e.preventDefault();

        var target = $('#go-top a').attr('href');
        var target = $(target).offset();

        $('html, body').animate({scrollTop: target.top});
    });

    $(document).scroll(function(event) {
        
        if($(this).scrollTop() > 250) {
            $('#go-top').stop().animate({opacity:1});
        }if($(this).scrollTop() < 250)
            $('#go-top').stop().animate({opacity:0});
    });

/* go-top end */

/* slick */    

    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
      infinite: true,
      prevArrow: false,
      nextArrow: false,

    });

    $('#years20').waypoint(function(direction){
      if (direction == 'down') {

        $('.video-text').animate({opacity: '0'});
        $('.video-text2').animate({opacity: '0'});
      }else {
        $('.video-text').animate({opacity: '1'});
        $('.video-text2').animate({opacity: '1'});
      };  
    });

    $('#years30').waypoint(function(direction){
      if (direction == 'down') {

        $('.video-text').animate({opacity: '0'});
        $('.video-text2').animate({opacity: '0'});
      }else {
        $('.video-text').animate({opacity: '1'});
        $('.video-text2').animate({opacity: '1'});
      };  
    });

    $('#years40').waypoint(function(direction){
      if (direction == 'down') {

        $('.video-text').animate({opacity: '0'});
        $('.video-text2').animate({opacity: '0'});

      }else {
        $('.video-text').animate({opacity: '1'});
        $('.video-text2').animate({opacity: '1'});
      };  
    });

/* more-topic cover  */

    $('.cover').mouseenter(function(event) {
      $(this).find('.block').css('opacity', '0.6');
    });

    $('.cover').mouseleave(function(event) {
      $(this).find('.block').css('opacity', '0');
    });

/* more-topic cover end */

/* stopattop */
   $(".video-20y").stopAtTop(); 
   $(".video-30y").stopAtTop(); 
   $(".video-40y").stopAtTop(); 

/* stopattop end  */


});
  

