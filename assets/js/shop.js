$(document).ready(function() {

    function add_product(item) {
        $('.shop_product').append(
            '<div class="col-md-3 col-sm-6 col-xs-12 mt-5">' +
            '<div class="item">' +
            '<div class="card">' +
            '<div class="product_figure">' +
            ' <img class="card-img-top" src="' + item.img + '" alt="Card image cap">' +
            '</div>' +
            '<div class="card-body text-center">' +
            '<div class="item-content">' +
            '<p class="product_brand">' + item.brand + '</p>' +
            '<h5 class="card-title">' + item.title + '</h5>' +
            '<p class="card-text">' + item.descrip + '</p>' +
            '<p class="item-price"><b>' + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) + '</b></p>' +
            // '<a href="#" class="btn btn-buy">Mua ngay</a>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
    }

    function empty_product() {
        if (!$('.shop_product').is(':empty')) {
            $('.not-found').addClass('d-none')
        }
        if ($('.shop_product').is(':empty')) {
            $('.not-found').removeClass('d-none')
        }
    }
    $('#sidebar').html('')
    var shop = $('#shop').attr('data-shop');
    $.getJSON("../assets/js/data-" + shop + ".json", function(data) {
        var n = Math.round(data.length / 40);
        var page = "page-1"
        var pages = {
            'page-1': ""
        }
        for (var i = 0; i < n; i++) {
            let num = i + 1
            pages['page-' + num.toString()] = data.slice(Math.floor(data.length / n) * i, Math.floor(data.length / n) * (i + 1))
            $('.pagination').append('<li class="page-item" data-page="page-' + num.toString() + '"><a class="page-link" href="#" >' + num.toString() + '</a></li>')
        }
        $('.pagination .page-item:first-child').addClass('active')
        pages[page].map(add_product)
        $('#filter-product__all').click(function() {
            $('.shop_product').empty();
            pages[page].map(add_product)
        })
        $('#filter-product__5').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price < 500000) {
                    add_product(item)
                }
            })
            empty_product()
        })
        $('#filter-product__10').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 500000 && item.price < 1000000) {
                    add_product(item)
                }
            })
            empty_product()

        })
        $('#filter-product__20').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 1000000 && item.price < 2000000) {
                    add_product(item)
                }
            })
            empty_product()
        })
        $('#filter-product__50').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 2000000 && item.price < 3000000) {
                    add_product(item)
                }
            })
            empty_product()
        })
        $('#filter-product__100').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 3000000) {
                    add_product(item)
                }
            })
            empty_product()
        })
        $('.page-item').on('click', function() {
            $('.shop_product').empty();
            $('.page-item').removeClass('active')
            $(this).addClass('active')
            page = $(this).attr('data-page')
            pages[page].map(add_product)
        })
        $('#shop-search__input').on('keypress', function(e) {
            if (e.which == 13) {
                $('.shop_product').empty();

                data.map(function(item) {
                    if ((item.title.toLowerCase().indexOf($('#shop-search__input').val().toLowerCase()) != -1) || (item.brand.toLowerCase().indexOf($('#shop-search__input').val().toLowerCase()) != -1)) {
                        if (!$('.not-found').hasClass('d-none')) {
                            $('.not-found').addClass('d-none')
                        }
                        add_product(item)
                    }
                    if ($('.shop_product').is(':empty')) {
                        $('.not-found').removeClass('d-none')
                    }
                })
            }
        });
    });


});
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