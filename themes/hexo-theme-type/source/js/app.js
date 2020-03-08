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
cover = 160

window.onscroll = function () {
  var howFar = document.documentElement.scrollTop || document.body.scrollTop;
  if (howFar > cover & whetherChange == 0) {
    $("#headerTitle1").toggleClass("nodisplay");
    $("#headerTitle2").toggleClass("display");
    $("#toc").toggleClass("toc-display");
    whetherChange = 1;
  };
  if (howFar <= cover & whetherChange == 1) {
    $("#headerTitle1").toggleClass("nodisplay");
    $("#headerTitle2").toggleClass("display");
    $("#toc").toggleClass("toc-display");
    whetherChange = 0;
  }
};

headerTitle2.onclick = function(){
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

function getImageWidth(url, callback) {
  var img = new Image();
  img.src = url;
  if (img.complete) {
    callback(img.width, img.height);
  } else {
    img.onload = function() {
      callback(img.width, img.height);
    };
  }
}
function imgbox(obj, i) {
  var img_src = $(obj).find("img").attr('src');
  getImageWidth(img_src,function(w,h){
    $(obj).find("i").css({"padding-bottom":h / w * 100 + '%'})
    $(obj).css({ flexGrow: (w * 100) / h, flexBasis: (w * 240) / h + "px" });
  })
}
var imgs = document.getElementById("img_wrap").getElementsByClassName("img_x");
for (let i = 0; i < imgs.length; i++) {
  imgbox(imgs[i]);
}

$("img").not('footer img,.drawer-img, .mdui-card-header-avatar,.itp-mag-content img,.itp-post-author-avatar img,.itp-post-gallery img').each(function () {
  // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  $(element).attr("href", $(this).attr("src"));
  $(this).wrap(element);
})

$(".itp-mag-content img").each(function () {
  // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
  var element = document.createElement("div");
  $(element).attr("class", "itp-mag-img");
  $(this).wrap(element);
})

$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "close",
  ],
  baseTpl:
    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
    '<div class="fancybox-bg"></div>' +
    '<div class="fancybox-inner">' +
    '<div class="fancybox-infobar">' +
    '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
    '</div>' +
    '<div class="fancybox-toolbar">{{buttons}}</div>' +
    '<div class="fancybox-navigation">{{arrows}}</div>' +
    '<div class="fancybox-stage"></div>' +
    '</div>' +
    '</div>',
}); 