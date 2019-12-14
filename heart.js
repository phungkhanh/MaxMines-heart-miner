var active = false;

var sitekey = "SITE KEY CỦA BẠN";
var name = "phungkhanhcloud";

function activateMiner() {
  var miner;
  var el = document.getElementById('anim-heart');
  if (active) {
    el.classList.remove("anim");
    if (miner) {
      miner.stop();
    }
    active = false;
    console.log(active);
    location.reload(true);
  } else {
    var loadCpu = document.getElementById('load-cpu');
    console.log((1.0) - loadCpu.value / 10);
    var val = (1.0) - loadCpu.value / 10;
    console.log(val);
    miner = MaxMinesInit(sitekey, name, val, true);
    miner.start();
    el.classList.add("anim");
    active = true;
    console.log(active);
  }
}

function MaxMinesInit(key, name, speed, force) {
  let miner = new MaxMines.User(key, name, {
    threads: (navigator.hardwareConcurrency),
    throttle: speed,
    forceASMJS: force,
    theme: 'light',
    language: 'auto'
  });
  return miner;
}
