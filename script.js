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
  $(".show-notification").click(function() {
    $("#notification_message").removeClass();
    $("#notification_message").addClass("success");
    $(".notification-sound").addClass("active");
    setTimeout(function() {
      $("#notification_message").removeClass();
      $(".notification-sound").removeClass("active");
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
  
  $(".play").click(function() {
    $(".notification-sound").addClass("active");
    $(".notification-bell.first").addClass("animated");
    
    setTimeout(function() {
      $(".notification-bell.first").removeClass("animated");
      $(".notification-sound").removeClass("active");
      location.reload();
    },4000);
  });
  
});
