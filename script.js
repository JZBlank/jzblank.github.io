$(document).ready(function(){


  $('button').click(function(){
    $('.welcome_container').hide();
    $('#portfolio').hide();
    $('.aboutPage').show();
  })

  $('.name').click(function(){
    $('#portfolio').hide();
    $('.aboutPage').hide();
    $('.welcome_container').show();
  })

  $('#about_nav').click(function(){
    $('.welcome_container').hide();
    $('#portfolio').hide();
    $('.aboutPage').show();
  })

  $('#portfolio_nav').click(function(){
    $('.welcome_container').hide();
    $('#about').hide();
    $('#portfolio').show();
  })

})
