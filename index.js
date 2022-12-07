$(document).ready(function () {
$("#Name").keyup(function () {
        var text=$(this).val()
        if(text.length<3 ){
              $("#usercheck1").html("**minimum 3 character");
        }
        else{
            $("#usercheck1").html("");
        }
        if(text.match(/[0-9]/g)){
            $("#usercheck").html("**Number is Not allowed");
        }
        else{
            $("#usercheck").html("");
        }
    })

//email
$("#email").change(function() {
   var inputValues=$(this).val();
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(!regex.test(inputValues)){
    $("#usercheck2").html("**invalid email address");
   }else{
    $("#usercheck2").html("");
   }
 return regex.test(inputValues);
})

//dob
$('#dob').change(function () {
            var now = new Date();
            var past = new Date($('#dob').val());
            if (past > now) {
                $("#usercheck4").html("Entered Date is Greater than Current Date");
            }else{
                $("#usercheck4").html("");
            }
            var nowYear = now.getFullYear();
            var pastYear = past.getFullYear();
            var age = nowYear - pastYear;
            $('#age').val(age);
     })

    //password

$('#password').keyup(function() {
    var password = $(this).val();
    if ( password.length < 8 ) {
    $('#length').removeClass('valid').addClass('invalid');
} else {
    $('#length').removeClass('invalid').addClass('valid');
}if ( password.match(/[A-z]/) ) {
    $('#letter').removeClass('invalid').addClass('valid');
} else {
    $('#letter').removeClass('valid').addClass('invalid');
}if ( password.match(/[A-Z]/) ) {
    $('#capital').removeClass('invalid').addClass('valid');
} else {
    $('#capital').removeClass('valid').addClass('invalid');
}if ( password.match(/[0-9]/g)) {
    $('#number').removeClass('invalid').addClass('valid');
}else {
    $('#number').removeClass('valid').addClass('invalid');
}if(password.match(/[!@#$%^&*]/g)) {
    $('#special').removeClass('invalid').addClass('valid');
}else {
    $('#special').removeClass('valid').addClass('invalid');
}

}).focus(function() {
    $('#password_info').show();
}).blur(function() {
   $('#password_info').hide();
});

$("#submit").click(function(){
        var pwd = $('#password').val();
        var cpwd = $('#confirm-password').val();
        if(cpwd!=pwd){
            $('#CheckPasswordMatch').html('Passwords are not matching');
            $('#CheckPasswordMatch').css('color','red');

        }else{
            $('#CheckPasswordMatch').html("");
            return false;
        }

        var password = $('input[type=password]').val();
        if (password.length < 8) {
            return false;
        }
        if (password.match(/[A-Z]/)) {
            return false;
        }
        if (password.match(/[0-9]/g)) {
            return false;
        }  if(password.match(/[!@#$%^&*]/g)) {

        }else
            return true;
    
    })



})
//eyeicon
$('#toggle_pwd').click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});






