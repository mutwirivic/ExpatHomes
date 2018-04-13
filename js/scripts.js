//BACK-END
function resetfields(){
  $("#signUpName").val('');
  $("#signUpAccount").val('');
  $("#signUpEmail").val('');
  $("#signUpPassword").val('');
  $("#signUpPassword2").val('');
  $("#signInName").val('');
  $("#signInPassword").val('');
}

//function Contact(name) {
  //this.firstName = first;
  //this.lastName = last;
  //this.addresses = [];
//}

//function Address(street, city, state) {
  //this.street = street;
//this.city = city;
//  this.state = state;
//}

//FRONT-END
$(document).ready(function(){

  $("#sign-up").click(function(){
    $("#signInForm").hide();
      $("#searchBtn").hide();
    $("#signUpForm").show();

  });

  $("#sign-in").click(function(){
    $("#signUpForm").hide();
    $("#searchBtn").hide();
    $("#signInForm").show();
  });

  //sign-up
  $("#signUpForm").submit(function(event){
    event.preventDefault();

    var userName=$("#signUpName").val();
    console.log(userName);

    var accountType=$("#signUpAccount").val();
    console.log(accountType);

    var email=$("#signUpEmail").val();
    console.log(email);

    var password=$("#signUpPassword").val();
    console.log(password);

    var passwordConfirm=$("#signUpPassword2").val();
    console.log(passwordConfirm);

    console.log(password===passwordConfirm);
    resetfields();

    if(password!==passwordConfirm){
      $("#password-mismatch").show();
    }
    else{
      alert("Registration successful");
      $("#output").prepend("<li>"+userName+"</li>");
    }
  });
 //sign-in
  $("#signInForm").submit(function(event){
    event.preventDefault();

    var userNameInput=$("#signInName").val();
    console.log(userNameInput);

    var userPasswordInput=$("#signInPassword").val();
    console.log(userPasswordInput);

    resetfields();

    //$("#loginBtn").window.location = "user.html";
  });
//cancel sign-in form
$("#cancelSignIn").click(function(event){
  event.preventDefault();
  $("#signUpForm").hide();
  $("#logoImage2").hide();
  $("#signInForm").hide();
  $("#searchBtn").show();
  resetfields();
});
$("#cancelSignUp").click(function(event){
  event.preventDefault();
  $("#signUpForm").hide();
  $("#logoImage2").hide();
  $("#signInForm").hide();
  $("#searchBtn").show();
  resetfields();
});
});
