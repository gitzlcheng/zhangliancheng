$(function() {
        var shop = cookie.get('shop');
        // console.log(shop);
        if (shop) {
            shop = JSON.parse(shop);
            // console.log(shop);
            var idData = shop.map(elm => elm.id).join();
            $.ajax({
                type: "get",
                url: "../php/shop.php",
                data: {
                    "idData": idData
                },
                dataType: "json",
                success: function(response) {
                    var data = '';
                    response.forEach(function(elm) {
                        var pic = JSON.parse(elm.pic);
                        var arr = shop.filter((val, i) => {
                            return val.id === elm.id;
                        });
                        data = `
                    <li class="cart-merchant">
                        <table class="cart-merchant-body">
                            <tr class="cart-more-buy">
                                <td class="cart-product-buy" colspan="5">
                                    <div class="more-buy-tag">
                                        <span>加价购</span>
                                    </div>
                                    <span class="more-buy-tips">另加15元起，即可换购超值商品</span>
                                    <span class="more-buy-skip">立即加购 &gt;</span>
                                </td>
                            </tr>
                            <tr class="cart-product">
                                <td class="cart-col-select">
                                    <input type="checkbox" name="checkbox" id="checkbox">
                                    <a href="#" class="cart-product-link" target="_blank">
                                        <img class="cart-product-img " alt="${elm.title}" src="${pic.small1}" style="display: inline; ">
                                    </a>
                                    <a href="# " class="cart-product-link cart-product-info" target="_blank ">
                                        <p class="cart-product-item-name">${elm.title}</p>
                                        <p class="cart-product-desc">${elm.details}</p>
                                    </a>
                                </td>
                                <td class="cart-col-price">
                                    <p>
                                    <i>￥</i><span class="cart-product-price">${elm.price}</span>
                                    </p>
                                </td>
                                <td class="cart-col-number">
                                    <div class="cart-product-number-adder">
                                        <p class="cart-product-number-max show">
                                        </p>
                                        <div class="mz-adder ">
                                            <button class="mz-adder-subtract disabled" style="height:24px">-</button>
                                            <div class="mz-adder-num">
                                                <input type="number" id="addchange" class="mz-adder-input" value="${arr[0].num}" max="${elm.num}" min="1" style="height:24px;">
                                            </div>
                                            <button class="mz-adder-add" style="height:24px">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="cart-col-total">
                                    <span class="cart-product-price">
                                        <i>￥</i><span class="priceadd">${(arr[0].num*elm.price).toFixed(2)}</span>
                                    </span>
                                </td>
                                <td class="cart-col-ctrl">
                                    <div id="cart_shop" data_id=${elm.id} class="cart-product-remove glyphicon glyphicon-remove"></div>
                                </td>
                            </tr>
                        </table>
                    </li>
                    `;
                        $('#merchantList').append(data);
                        $('.cart-product-remove').on('click', function() {
                            var id = $('#cart_shop').attr("data_id");
                            var caremove = $(this).parent().parent().parent('.cart-merchant');
                            caremove.css('display', 'none');
                            var arr1 = shop.filter((val, i) => {
                                return val.id != elm.id;
                            });
                            // console.log(arr1);
                            arr1 = JSON.stringify(arr1);
                            cookie.set('shop', arr1, 1);
                            location.reload();
                        });

                    });
                }
            });
        }
        var ulshop = $('#merchantList');
        ulshop.on('change', function(ev) {
            ev = ev || event;
            target = event.target || event.srcElement;
            var node = target.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
            var nodep = target.parentNode.parentNode.parentNode.parentNode.previousElementSibling;
            var chanum = $(target).val() * $(nodep).find('.cart-product-price').html();
            // console.log(chanum);
            $(node).find('.priceadd').html(chanum);
        });
        var zojia = $('#zojia');
        zojia.innerHTML = '';
        ulshop.on('click', function(ev) {
            ev = ev || event;
            target = event.target || event.srcElement;
            console.log(target.nodeName);
            if (target.nodeName == 'INPUT') {
                var valshop = $(target).parent().parent().find('.priceadd');
                zojia.innerHTML += valshop.html();
                // zojie.html(function(old) {
                //     return old + valshop.html();
                // });
                console.log(zojia);
            }
        });
    })
    // $('#checkbox').on('click', function() {
    //     var valshop = $(this).parent().parent().find('.priceadd');
    //     console.log(valshop);
    // });