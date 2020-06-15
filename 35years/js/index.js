$(document).ready(function() {
  // 加载资源进度
  // 加载图片
  var p1H, p2H, p3H, p4H, p5H, p6H, p7H, p8H, p9H, p10H;

  var imgs = $("img");
  var audios = $(".bg-music");
  var total = imgs.length + audios.length;
  var count = 0;
  var percent = 0;
  var first = true;
  // 避免img不触发load事件
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].src = imgPath + imgs[i].dataset.src;
  }
  // 避免audio不触发canplaythrough事件
  for (var i = 0; i < audios.length; i++) {
    audios[i].src = audioPath + audios[i].dataset.src;
  }
  // 每张图片下载完触发
  $("img").on("load", function() {
    count++;
    this.style.width = this.width / 32 + "rem";
    percent = parseInt((count / total) * 100);
    loadProgress(percent);
  });
  // 每个音乐下载完触发,ios不能触发此事件
  $(".bg-music").on("canplay", function() {
    count++;
    percent = parseInt((count / total) * 100);
    // loadProgress(percent);
  });
  // 能播放时直接改变成加载完的状态
  $("#bg-music").on("play", function() {
    if (first) {
      var timer = setInterval(() => {
        if (count >= imgs.length) {
          // $(".percent-box").hide();
          // $(".content").show();
          loadProgress(100);
          first = false;
          clearInterval(timer);
        }
      }, 1000);
    }
  });
  // 自动播放背景音乐
  autoPlayMusic();
  audioAutoPlay();
});

var box = document.getElementById("draw_box");
var ball = document.getElementById("ball");
var contentWidth = $(document).width();

// 小火箭轨迹线
var density = 20; // 轨迹线的疏密
var amplitude = 150; // 轨迹线的振幅
var xStart = contentWidth / 2; // 轨迹线的X方向起点
var period = 650; // 轨迹线的周期
var site = 0; //开始位置
var index = 2;
var audioPath = "./mp3/";
var imgPath = "./img/";
// var imgPath = "img/";
function drawSin() {
  var contentHeight = $(".content").height();
  for (var radian = site; radian < contentHeight; radian += density) {
    var childDot = document.createElement("div");
    childDot.className = "dot";
    childDot.style.left = amplitude * Math.sin((radian * Math.PI) / period) + xStart + "px";
    childDot.style.top = radian + "px";
    box.appendChild(childDot);
  }
}
// 小火箭运动方法
function rocket(value) {
  var y = amplitude * Math.sin((value * Math.PI) / period) + xStart;
  var slope = -(amplitude * Math.cos((value * Math.PI) / period)) / 4.4;
  ball.style.top = value - 100 + "px";
  ball.style.left = y - 25 + "px";
  ball.style.transform = "rotate(" + slope + "deg)";
}
// 初始化小火箭位置
rocket(site);
// 小火箭跟随滑动而运动
$(document).scroll(function() {
  rocket($(document).scrollTop() + site);
  var wHeight = $(window).height();
  var scrollTop = $(document).scrollTop();
  var currentHeight = wHeight + scrollTop;
  switch (true) {
    // case p1H < currentHeight && currentHeight < p2H:
    //   if (index != 1) {
    //     $("#bg-music")[0].src = audioPath + "1984.mp3";
    //     index = 1;
    //   }
    //   break;
    case p2H < currentHeight && currentHeight < p3H:
      if (index != 2) {
        $("#bg-music")[0].src = audioPath + "1985.mp3";
        index = 2;
      }
      break;
    case p3H < currentHeight && currentHeight < p4H:
      if (index != 3) {
        $("#bg-music")[0].src = audioPath + "1989.mp3";
        index = 3;
      }
      break;
    case p4H < currentHeight && currentHeight < p5H:
      if (index != 4) {
        $("#bg-music")[0].src = audioPath + "1992.mp3";
        index = 4;
      }
      break;
    case p5H < currentHeight && currentHeight < p6H:
      if (index != 5) {
        $("#bg-music")[0].src = audioPath + "1996.mp3";
        index = 5;
      }
      break;
    case p6H < currentHeight && currentHeight < p7H:
      if (index != 6) {
        $("#bg-music")[0].src = audioPath + "1999.mp3";
        index = 6;
      }
      break;
    case p7H < currentHeight && currentHeight < p8H:
      if (index != 7) {
        $("#bg-music")[0].src = audioPath + "2001.mp3";
        index = 7;
      }
      break;
    case p8H < currentHeight && currentHeight < p8H_2:
      if (index != 8) {
        $("#bg-music")[0].src = audioPath + "2008.mp3";
        index = 8;
      }
      break;
    case p8H_2 < currentHeight && currentHeight < p9H:
      if (index != 8.5) {
        $("#bg-music")[0].src = audioPath + "2008-2.mp3";
        index = 8.5;
      }
      break;
    case p9H < currentHeight && currentHeight < p10H:
      if (index != 9) {
        $("#bg-music")[0].src = audioPath + "2017.mp3";
        index = 9;
      }
      break;
    case p10H < currentHeight:
      if (index != 10) {
        $("#bg-music")[0].src = audioPath + "2020.mp3";
        index = 10;
      }
      break;
    default:
      break;
  }
  $("#bg-music")[0].play();
});
// 资源加载进度
function loadProgress(value) {
  var year = parseInt(1984 + (36 / 100) * value);
  $(".percent-num").text(year);
  $(".percent-progress").css("height", 50 + value / 2 + "%");
  if (value >= 80) {
    // $("#bg-music")[0].play();
    $(".percent-box").hide();
    $(".content").show();
    drawSin();
    // p1H = $(".p1").offset().top;
    p2H = $(".p2").offset().top;
    p3H = $(".p3").offset().top;
    p4H = $(".p4").offset().top;
    p5H = $(".p5").offset().top;
    p6H = $(".p6").offset().top;
    p7H = $(".p7").offset().top;
    p8H = $(".p8").offset().top;
    p8H_2 = p8H + $(".p8-8").get(0).offsetTop;
    p9H = $(".p9").offset().top;
    p10H = $(".p10").offset().top;

    wow = new WOW({
      animateClass: "animated",
      offset: 100,
      callback: function(box) {
        // console.log("WOW: animating <" + box.className.toLowerCase() + ">");
      }
    });
    wow.init();
  } else {
    // 未加载完暂停音乐
    // $("#bg-music")[0].pause();
  }
}
function audioAutoPlay() {
  var audio = document.getElementById("bg-music");
  // audio.play();
  document.addEventListener(
    "WeixinJSBridgeReady",
    function() {
      audio.play();
    },
    false
  );
}
// 音乐播放
function autoPlayMusic() {
  // 自动播放音乐效果，解决浏览器或者APP自动播放问题
  function musicInBrowserHandler() {
    musicPlay(true);
    document.body.removeEventListener("touchstart", musicInBrowserHandler);
  }
  document.body.addEventListener("touchstart", musicInBrowserHandler);
  // 自动播放音乐效果，解决微信自动播放问题
  function musicInWeixinHandler() {
    musicPlay(true);
    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        musicPlay(true);
      },
      false
    );
    document.removeEventListener("DOMContentLoaded", musicInWeixinHandler);
  }
  document.addEventListener("DOMContentLoaded", musicInWeixinHandler);
}
function musicPlay(isPlay) {
  var media = document.querySelector("#bg-music");
  if (isPlay && media.paused) {
    media.play();
  }
  if (!isPlay && !media.paused) {
    media.pause();
  }
}
$(document).on("click", ".view-details", function() {
  var index = this.dataset.detail;
  $(".detail").css("background-image", "url("+imgPath + index + "-detail.jpg)");
  $(".detail").show();
});
$(".close-detail").on("click", function() {
  $(".detail").hide();
});
