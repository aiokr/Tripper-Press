var appDaily = {
  baiduSearch: function (words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.baidu.com/baidu?tn=baidu&ie=utf-8&word=';

    window.open(url + key, '_blank');
  },
  googleSearch: function (words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.google.com/search?q=';

    window.open(url + key, '_blank');
  },
  submitSearch: function (search_engines) {
    var $ipt = document.getElementById('homeSearchInput');

    if (search_engines === 'baidu') {
      this.baiduSearch($ipt.value.trim());
    } else {
      this.googleSearch($ipt.value.trim());
    }

    return false; header
  },
};

var whetherChange = 0;
var whetherChangeToTop = 0;
var ticking = false;
cover = 400

window.onscroll = function () {
  var howFar = document.documentElement.scrollTop || document.body.scrollTop;
  if (howFar > cover & whetherChange == 0) {
    $("#toolbar").toggleClass("itp-appbar-color");
    $("#headerTitle1").toggleClass("nodisplay");
    $("#headerTitle2").toggleClass("display");
    $("#toc").toggleClass("toc-display");
    whetherChange = 1;
  };
  if (howFar <= cover & whetherChange == 1) {
    $("#toolbar").toggleClass("itp-appbar-color");
    $("#headerTitle1").toggleClass("nodisplay");
    $("#headerTitle2").toggleClass("display");
    $("#toc").toggleClass("toc-display");
    whetherChange = 0;
  }
};

headerTitle2.onclick = function () {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}


/*

$(".toc li").replaceWith(function () {
  return "<li class='mdui-menu-item'>" + this.innerHTML + "</li>";
});

$(".toc-child li").replaceWith(function () {
  return "<li class='mdui-menu-item'>" + this.innerHTML + "</li>";
});

$(".itp-post-toc ol").replaceWith(function () {
  return "<ul class='mdui-menu mdui-menu-cascade itp-toc-menu' id='toc'>" + this.innerHTML + "</ul>";
});

*/