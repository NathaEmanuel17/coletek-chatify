import Echo from 'laravel-echo'

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '9fd77a3fe1e5fd98cb9b',
  cluster: 'us2',
  forceTLS: true
});

var channel = Echo.channel('my-channel');
channel.listen('.my-event', function(data) {
  alert(JSON.stringify(data));
});