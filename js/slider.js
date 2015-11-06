var slide = [];
var i = 0;
$(function() {
    $.getJSON('js/slides.json').done(function(data) {
        console.log(data);
        slide = data;
        $('#roller').html('<div class="image-slot"><img src="' + slide[i].image_url + '" alt="Image" class="roller-slot"></div><div class="content"><h2>' + slide[i].title + '</h2><p>' + slide[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><a href="#" id="prev"></a><a href="#" id="next"></a></div></div>');
    }).error(function() {
        console.log('something is wrong with the json call');
    }).success(function() {
        dostuff(slide);
    });
});

function dostuff(obj) {
    document.getElementById('next').onclick = function() {
        nextSlide(obj);
    };

    document.getElementById('prev').onclick = function() {
        prevSlide(obj);
    };
}

function nextSlide(obj) {
    console.log('in next');
    if (i < 3) {
        i++;
        $('#roller').html('<div class="image-slot"><img src="' + obj[i].image_url + '" alt="Image" class="roller-slot"></div><div class="content"><h2>' + obj[i].title + '</h2><p>' + obj[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><a href="#" id="prev"></a><a href="#" id="next"></a></div></div>');
        if (i === 2) {
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        } else {
            document.getElementById('next').onclick = function() {
                nextSlide(obj);
            };
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        }
    }
}


function prevSlide(obj) {
    if (i > 0) {
        i--;
        $('#roller').html('<div class="image-slot"><img src="' + obj[i].image_url + '" alt="Image" class="roller-slot"></div><div class="content"><h2>' + obj[i].title + '</h2><p>' + obj[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><a href="#" id="prev"></a><a href="#" id="next"></a></div></div>');
        if (i === 0) {
            document.getElementById('next').onclick = function() {
                nextSlide(obj);
            };
        } else {
            document.getElementById('next').onclick = function() {
                prevSlide(obj);
            };
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        }
    }
}
