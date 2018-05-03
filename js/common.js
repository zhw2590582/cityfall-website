// Rem 自适应
$('html').css('font-size', document.documentElement.clientWidth / 375 * 312.5 + '%');
window.onresize = function() {
  $('html').css('font-size', document.documentElement.clientWidth / 375 * 312.5 + '%');
};

// Pop 弹窗
$(document).on('click','.pop_bg', function(e){
  if ($(e.target).closest('.pop_inner').length === 0 || $(e.target).hasClass('pop_close')) {
    $(this).closest('.pop_bg').hide();
  }
});

// Tip 提示
function showMessage(info, time) {
  if (typeof info !== 'string') {
    info = JSON.stringify(info);
  }
  var id = (function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  })(1, 10000000);
  $('body').append('<div id="msg' + id + '" class="showMessage">' + info + '</div>');
  setTimeout(function() {
    $('#msg' + id).remove();
  }, time || 2000);
}

// Tab 切换
$(document).on('click', '.tabbar .item', function(e){
  if(e.target.tagName === "A") return;
  var index = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().next().find('.tab-items').eq(index).addClass('active').siblings().removeClass('active');
  return false;
});

// Loading 显示
function showLoading(type) {
  if(type){
    if($('.showLoading').length > 0) return;
    $('body').append('<div class="showLoading"></div>');
  } else {
    $('.showLoading').remove();
  }
}

// Url 参数对象
function getURLParameters() {
  var url = window.location.href;
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function(a, v) {
    return (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a;
  }, {});
}

// String 剪裁
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
}

// Video 播放
$(document).on('click', '[video-data]', function(e){
  $(".video_bg").show();
  $('.video_box').append('<video controls autoplay="autoplay" loop="loop" src="' + $(this).data('video') + '"></video>');
  return false;
});

$(document).on('click', '.video_close', function(e){
  $(".video_bg").hide();
  $('.video_box').html('');
});
