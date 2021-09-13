var dnperm = document.getElementById('dnperm');
var dntrigger = document.getElementById('dntrigger');

//Request permission
dnperm.addEventListener('click', function(e) {
  e.preventDefault();
  if (!window.Notification) {
    alert('Sorry no notification');
  } else {
    Notification.requestPermission(function(p) {
      if (p === 'denied') {
        alert('You have denied notifications');
      } else if (p === 'granted') {
        alert('You have allowed notifications!');
      }
    });
  }
});

//Simulate an event
dntrigger.addEventListener('click', function(e) {
  var notify;
  e.preventDefault();
  if (Notification.permission === 'default') {
    alert('Please allow notifications');
  } else {
    notify = new Notification(
      'New message From Nick', {
        body: 'Hi John, I have sent through all of the documents. Cheers.',
        icon: 'https://app.visory.com.au/users/azuread-b79580cb-2278-4fcb-90aa-60111a1ae980/photo?secondary=false&getMaxSize=false',
        tag: '123456'
      });
    notify.onclick = function() {
      window.location = '?message=' + this.tag;
    }
  }
})