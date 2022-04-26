var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if ((prevScrollpos > currentScrollPos) || currentScrollPos < 200) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
$(document).ready(function() {
    $.getJSON("../assets/js/data-new.json", function(data) {
        $('.card-product').each(function(index) {
            $(this).html(
                '<div class="product_figure">' +
                '<img class="card-img-top" src="' + data[index].img + '" alt="Card image cap">' +
                '</div>' +
                '<div class="card-body text-center">' +
                '<div class="item-content">' +
                '<p class="product_brand">' + data[index].brand + '</p>' +
                '<h5 class="card-title" style="height: 50px;">' + data[index].title + '</h5>' +
                '<p class="card-text" style="white-space: nowrap;overflow: hidden;">' + data[index].descrip + '</p>' +
                '<p class="item-price"><b>' + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data[index].price) + '</b></p>' +
                '<a href="#" class="btn btn-buy">Buy now</a>'
            )
        });
    });
    $('#carousel-slider').carousel({
        interval: 3000
    })
    $('.video-item').click(function() {
        var video = $(this).attr('data-video');
        console.log(video);
        $('#myVideo').attr('src', video);
    })
    $('.customer-reviews').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    $('.news').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4
            }
        }
    })


});