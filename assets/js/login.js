function checkName(str) {
    var reg = /^[a-zA-Z0-9]{3,16}$/;
    return reg.test(str);
}

function checkEmail(str) {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(str)
}

function checkPass(str) {
    let strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let mediumPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    if (strongPassword.test(str)) {
        return 3;
    } else if (mediumPassword.test(str)) {
        return 2;
    }
    return 1;
}
$(document).ready(function() {
    $('#signIn').click(function() {
        $('.container').removeClass("right-panel-active");
    });
    $('#signUp').click(function() {
        $('.container').addClass("right-panel-active");
    });
    var check_name;
    var check_email;
    var check_pass;
    $("#name-signup").focus(function() {
        check_name = setInterval(() => {
            if (checkName($("#name-signup").val())) {
                if ($(this).next().hasClass("d-none"))
                    $(this).next().removeClass("d-none");
                if ($(this).next().next().hasClass("d-none") == false)
                    $(this).next().next().addClass("d-none");
            } else {
                if ($(this).next().next().hasClass("d-none"))
                    $(this).next().next().removeClass("d-none");
                if ($(this).next().hasClass("d-none") == false)
                    $(this).next().addClass("d-none");
            }

        }, 1000);
    });
    $("#name-signup").focusout(function() {
        clearInterval(check_name);
    });
    $("#email-signup").focus(function() {
        check_email = setInterval(() => {
            if (checkEmail($("#email-signup").val())) {
                if ($(this).next().hasClass("d-none"))
                    $(this).next().removeClass("d-none");
                if ($(this).next().next().hasClass("d-none") == false)
                    $(this).next().next().addClass("d-none");
            } else {
                if ($(this).next().next().hasClass("d-none"))
                    $(this).next().next().removeClass("d-none");
                if ($(this).next().hasClass("d-none") == false)
                    $(this).next().addClass("d-none");
            }
        }, 1000);
    });
    $("#email-signup").focusout(function() {
        clearInterval(check_email);
    });
    $("#password-signup").focus(function() {
        check_pass = setInterval(() => {

            if (checkPass($("#password-signup").val()) == 3) {
                if ($(this).next().hasClass("d-none"))
                    $(this).next().removeClass("d-none");
                if ($(this).next().next().hasClass("d-none") == false)
                    $(this).next().next().addClass("d-none");
                if ($(this).next().next().next().hasClass("d-none") == false)
                    $(this).next().next().next().removeClass("d-none");
            } else if (checkPass($("#password-signup").val()) == 2) {
                if ($(this).next().next().hasClass("d-none"))
                    $(this).next().next().removeClass("d-none");
                if ($(this).next().hasClass("d-none") == false)
                    $(this).next().addClass("d-none");
                if ($(this).next().next().next().hasClass("d-none") == false)
                    $(this).next().next().next().addClass("d-none");
            } else {
                if ($(this).next().next().next().hasClass("d-none"))
                    $(this).next().next().next().removeClass("d-none");
                if ($(this).next().hasClass("d-none") == false)
                    $(this).next().addClass("d-none");
                if ($(this).next().next().hasClass("d-none") == false)
                    $(this).next().next().addClass("d-none");
            }
        }, 1000);
    });
    $("#password-signup").focusout(function() {
        clearInterval(check_pass);
    });
    $("#confirm-password-signup").focusout(function() {
        if ($("#password-signup").val() == $("#confirm-password-signup").val()) {
            if ($(this).next().hasClass("d-none"))
                $(this).next().removeClass("d-none");
            if ($(this).next().next().hasClass("d-none") == false)
                $(this).next().next().addClass("d-none");
        } else {
            if ($(this).next().next().hasClass("d-none"))
                $(this).next().next().removeClass("d-none");
            if ($(this).next().hasClass("d-none") == false)
                $(this).next().addClass("d-none");
        }
    });
    $('#signIn').click(function() {
        $('#form1')[0].reset();
        var checkList = document.querySelectorAll('.check')
        for (let i = 0; i < checkList.length; i++) {
            if (!checkList[i].classList.contains('d-none')) {
                checkList[i].classList.add('d-none');
            }
        }
    });
    $("#form1").submit(function() {
        if (checkName($('#name-signup').val()) && checkEmail($('#email-signup').val()) && checkPass($('#password-signup').val()) && $('#password-signup').val() == $('#confirm-password-signup').val()) {
            alert("Đăng ký thành công");
        } else {
            alert("Vui lòng kiểm tra và nhập đầy đủ thông tin");
        }
    });
});