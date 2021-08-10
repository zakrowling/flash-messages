import confetti from "https://cdn.skypack.dev/canvas-confetti";

$(function() {
  $(".show-success").click(function() {
    $("#flash_message").removeClass();
    $("#flash_message").addClass("success");
    $(".alert-sound").addClass("active");
    
    confettiCannon();
    
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
});

function confettiCannon() {
  setTimeout(function() {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { x: 1, y: 1 }
    });
  }, 500);
}
