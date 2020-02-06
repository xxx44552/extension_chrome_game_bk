var count = 0;
var minute = 60000;
function start() {
  fetch('http://likebk.com/jx/bonus.php?takebns=166035939&getb1w=3&msg=0')
      .then(res=>console.log(res, '\nЗапрос: ' + count))
}
start();
setInterval(function () {
  count++;
  start();
}, minute*2);
