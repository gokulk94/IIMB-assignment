$(function() {
    var i = 0;
    var slide = [];
    // $.getJSON('js/slides.json', function(data) {
    //     console.log(data);
    //     slide = data;
    // });

    $.getJSON('js/slides.json').done(function(data) {
        console.log(data);
    }).error(function() {
        console.log('something is wrong with the json call');
    });
    // console.log(slide);
    // var slide = $.grep(slides, function(element, index) {
    //     return element;
    // });
    // console.log(slides);
    // var slide = slides;

    $('#roller').html('<div class="image-slot"><img src="' + slide[i].image_url + '" alt="Image" class="roller-slot"></div><div class="content"><h2>' + slide[i].title + '</h2><p>' + slide[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><a href="#" id="prev"></a><a href="#" id="next"></a></div></div>');



});

function next(obj, index) {

}
