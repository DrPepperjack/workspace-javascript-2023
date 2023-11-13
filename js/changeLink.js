// call back function example
// $('body').hide().fadeIn(4000, function(){alert("done");});
/* how jquery event works */
    $('h1').click(function(){
        $('this').text("Hide the image")
        $('img').hide();
        $('body').children('p').slideToggle();

    });
// console.log("I am here");