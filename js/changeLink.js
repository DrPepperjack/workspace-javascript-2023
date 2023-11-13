// call back function example
// $('body').hide().fadeIn(4000, function(){alert("done");});
/* how jquery event works */
    $('h1').click(function(){
        $('this').text("Hide the image")
        $('img').hide();
        $('body').children('p').slideToggle();

    });
// console.log("I am here");

// play with jQuery .each function

// update the img link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr("src", newpath);
    // console.log(newpath);

});

// update the anchor link

$('a').each(function(){
    var path = $(this).attr('href');
    var newpath = "Google" + ".com";
    $(this).attr("href", newpath);
    console.log(newpath)
});

// Text manipulation
$('a').each(function(){});