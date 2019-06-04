$(function() {
    var shop = cookie.get('shop');
    var carnum = 0;
    shop = JSON.parse(shop);
    var arr2 = shop.map(function(elm, i) {
        return elm.num;
    });
    for (var i = 0; i < arr2.length; i++) {
        carnum += arr2[i] * 1;
    }
    console.log(arr2);
    $('.shnum').html(carnum);

    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../php/getItem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            var pic = JSON.parse(response.pic);
            // console.log(pic);
            var add_data = `
            <div class="main">
                <div class="main-nav">
                    <div class="-container">
                        <ul class="-ulist">
                            <li class="-item">
                                <a class="-link" href="https://www.meizu.com/v8pro/summary/index.html">概述</a>
                            </li>
                            <li class="-item">
                                <a class="-link" href="https://www.meizu.com/v8pro/spec/index.html">参数</a>
                            </li>
                            <li class="-item">
                                <a class="-link" href="https://www.meizu.com/v8/summary/">${response.title}</a>
                            </li>
                            <li class="-item">
                                <a class="-link" href="//detail.meizu.com/question/meizuv8.html">常见问题</a>
                            </li>
                        </ul>
                        <span class="-name">
                            ${response.title}
                        </span>
                    </div>
                </div>
                <section class="se-main">
                    <div class="preview">
                        <div class="preview-big">
                            <a href="javascript:;">
                                <img src="${pic.big}" height="560" width="560" alt="" style="display: inline;">
                            </a>
                        </div>
                        <ul class="preview-nav">
                            <li class="">
                                <a href="#">
                                    <img src="${pic.small1}" width="80" height="80"></a>
                            </li>
                            <li class="current">
                                <a href="#">
                                    <img src="${pic.small2}" width="80" height="80"></a>
                            </li>
                            <li class="">
                                <a href="#">
                                    <img src="${pic.small3}" width="80" height="80"></a>
                            </li>
                            <li class="">
                                <a href="#">
                                    <img src="${pic.small4}" width="80" height="80"></a>
                            </li>
                        </ul>
                        <div class="preview-action">
                            <a href="javascript:;">
                                <i class="iconfont glyphicon glyphicon-star"></i>收藏
                            </a>
                            <a class="a-db" href="javascript:;">
                                <i class="iconfont glyphicon glyphicon-sort"></i>
                                <span>对比</span>
                            </a>
                        </div>
                    </div>
                    <div class="details-box">
                        <div class="details-title">
                            <h1>${response.title}</h1>
                            <p class="details-content">${response.details}</p>
                        </div>
                        <div class="details-sell">
                            <div class="price">
                                <small>¥</small>
                                <span class="vm-money">${response.price}</span>
                            </div>
                            <dl class="discount">
                                <dt>
                                    <span>优惠券</span>
                                </dt>
                                <dd>
                                    <span id="vm-tag">满898减150</span>
                                    <a class="vm-more" href="#">更多 &gt;</a>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt>
                                    <span>加价购</span>
                                </dt>
                                <dd>
                                    <span>
                                        另加<em>15</em>元起，即可换购超值商品
                                    </span>
                                    <a class="vm-more" href="#">立即加购 &gt;</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="details-service">
                            <dl>
                                <dt class="vm-metatit">
                                    支
                                    <span class="s-space"></span>
                                    <span class="s-space"></span>
                                    持
                                </dt>
                                <dd class="mod-bd">
                                    <span><i class="glyphicon glyphicon-ok-circle"></i>花呗分期</span>
                                    <span><i class="glyphicon glyphicon-ok-circle"></i>顺丰发货</span>
                                    <span><i class="glyphicon glyphicon-ok-circle"></i>7天无理由退货</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt class="vm-metatit">配送服务</dt>
                                <dd class="details-dd">
                                    <span>本商品由 魅族 负责发货并提供售后服务</span>
                                    <span class="kf">
                                            <i class="glyphicon glyphicon-headphones"></i>
                                        商城客服
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        <div class="details-sibling">
                            <dl>
                                <dt class="vm-metatit">
                                    型<span></span><span></span>号
                                </dt>
                                <dd>
                                    <a href="javascript:;">${response.title}</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="details-sibling">
                            <dl>
                                <dt class="vm-metatit">
                                                网络类型
                                </dt>
                                <dd>
                                    <a href="javascript:;">全网通公开版</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="details-sibling">
                            <dl>
                                <dt class="vm-metatit">
                                        内存容量
                                    </dt>
                                <dd>
                                    <a href="javascript:;">6+64G</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="details-sibling details-sib">
                            <dl>
                                <dt class="vm-metatit">
                                            数<span></span><span></span>量
                                        </dt>
                                <dd>
                                    <div class="mod-control">
                                        <a title="减少" href="javascript:;" class="vm-minus disabled">-</a>
                                        <input type="text" value="1" max="${response.num}" id="shopnum">
                                        <a title="增加" href="javascript:;" class="vm-plus">+</a>
                                    </div>
                                </dd>
                            </dl>
                            <div id="kucun"style="width: 200px;height: 50px;float: left; color: #8c8c8c;vertical-align: middle;margin-top:20px;margin-left:10px;font-size:20px;">库存：
                                <span style="color:#e02b41;margin-left:10px">${response.num}</span>
                            </div>
                        </div>
                        <div class="details-shop">
                            <a class="btnbuy" href="#">立即购买</a>
                            <a class="btnshop" href="javascript:;">加入购物车</a>
                        </div>
                    </div>
                </section>
                <div class="shopdetail">
                    <h2>商品详情</h2>
                </div>
            </div>
            `;

            $('#head').after(add_data).next('.main').find('.btnshop').on("click", function() {
                addshopcart(response.id, response.price, $('#shopnum').val());

            });

            $('.btnshop').on('click', function() {
                var shop = cookie.get('shop');
                var carnum = 0;
                shop = JSON.parse(shop);
                var arr2 = shop.map(function(elm, i) {
                    return elm.num;
                });
                for (var i = 0; i < arr2.length; i++) {
                    carnum += arr2[i] * 1;
                }
                console.log(arr2);
                $('.shnum').html(carnum);
            })
        }
    });

    function addshopcart(id, price, num) {
        var shop = cookie.get('shop');
        var product = {
            "id": id,
            "price": price,
            "num": num
        };
        if (shop) {
            shop = JSON.parse(shop);
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }

})