$.extend($.validator.messages, {
    required: "这是必填字段",
    remote: "请修正此字段",
    email: "请输入有效的电子邮件地址",
    url: "请输入有效的网址",
    date: "请输入有效的日期",
    dateISO: "请输入有效的日期 (YYYY-MM-DD)",
    number: "请输入有效的数字",
    digits: "只能输入数字",
    creditcard: "请输入有效的信用卡号码",
    equalTo: "你的输入不相同",
    extension: "请输入有效的后缀",
    maxlength: $.validator.format("最多可以输入 {0} 个字符"),
    minlength: $.validator.format("最少要输入 {0} 个字符"),
    rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
    range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
    max: $.validator.format("请输入不大于 {0} 的数值"),
    min: $.validator.format("请输入不小于 {0} 的数值")
});

$(function() {
    $('.main-form').validate({
        errorClass: 'error',
        submitHandler: function(form) {
            $.ajax({
                type: "post",
                url: "../php/register.php",
                data: {
                    'phone': $('#phone').val(),
                    'password': $('#password').val()
                },
                // dataType: "json",
                success: function(response) {
                    if (response) {
                        alert('注册成功,点击跳转!');
                        location.href = 'login.html';
                    } else {
                        alert('注册失败');
                        location.href = 'register.html';
                    }
                }
            });
        },
        rules: {
            phone: {
                required: true,
                rangelength: [6, 16]
            },
            password: {
                required: true,
                rangelength: [4, 20]
            }
        }
    });
})