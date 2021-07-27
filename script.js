$(function() {
  $(".show-success").click(function() {
    $("#flash_message").removeClass();
    $("#flash_message").addClass("success");
    $(".alert-sound").addClass("active");
    setTimeout(function() {
      $("#flash_message").removeClass();
      $(".alert-sound").removeClass("active");
    },5000);
  });
  $(".show-error").click(function() {
    $("#error_message").removeClass();
    $("#error_message").addClass("success");
    $(".error-sound").addClass("active");
    setTimeout(function() {
      $("#error_message").removeClass();
      $(".error-sound").removeClass("active");
    },5000);
  });
});