// $(document).ready(function () {
//   alert('jQuery動作テスト');
// });

// .style.color = 'green'
$('h1').css('color', 'green')
console.log($('h1')[0])

$('.site-header-nav li a').css('color', 'pink')

$('.mv-copy').next().css('text-decoration', 'underline')

$('.service-card')
  .parent()
  .css('border', '1px solid orange')

$('.site-footer-sns').children().css('color', 'orange')

$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000')

$('.contact-logo').closest('div').css('background', '#eee')

//const tweet = '<div class="tweet-content">イ//エローマジックデザインワークショップを開催しまし//た。「普段何気なく使っているモノの見方を変えて見//る」をテーマに、参加者のいろんなアイデアと作品が//生まれました。</div>';

//const $tweetContainer = $('.//tweet-container')
//$tweetContainer.append(tweet)
//$tweetContainer.html(tweet)

let display = true
// on => addEventListener
$('#quick-news-btn').on('click', e => {
  if (display) {
    $('.quick-news-content').wrap('<div class="hidden">')
    $(e.target).text('+ ニュースを開く')
    display = false
  } else {
    $('.quick-news-content').unwrap()
    $(e.target).text('× ニュースを閉じる')
    display = true
  }

})


$('.works-desc').empty()
$('.works-desc').remove()

// $('.works-thumb img').removeAttr('alt')
const alt = $('.works-thumb img').attr('alt')
console.log(alt)
$('.works-thumb img').attr('alt', '古い家具')

//クラス追加・削除
//$('.faq-openclose').addClass('is-open')
//$('.faq-openclose').toggleClass('is-open')

//イベント操作
$('body').on('click', '.faq-openclose',e => {
  console.log('clickしました')
 // $(e.target).off('click')
  $(e.target).toggleClass('is-open')
})

//これと同等 $('.faq-openclose').click(e => {})
//ダブルクリック .on('dbclick') == dbclick()
//ホバー .on('mouseenter') .on('mouseleave') == hover (() => {}, () => {})

$(document).ready(() => {
  $('.site-header-logo').css('border-bottom', '2px solid #000')
})
//$(() => {})

$(window).on('load',() => {
  console.log('ページロード完了')
  $('.loader').remove()
})

//イベントオブジェクト
$('.faq-list *').on('click',e => {
  console.dir(e)
  e.stopPropagation()
})

//マウス追従
const mouseFollow = $('.mouse-follow')
let 
mouseX = 0, //マウスのX座標
mouseY =0, //マウスのY座標
currentX = 0, //現在のX座標
currentY = 0//現在のY座標
$(window).on('mousemove',e => {
  console.log(e.clientX,e.clientY)
  mouseX = e.clientX
  mouseY = e.clientY
//  mouseFollow.css({
//    'left' : e.clientX,
//    'top' : e.clientY
 // })
})

function updateFollowPosition(){
  let nowX = lerp(currentX,mouseX,0.1)
  let nowY = lerp(currentY,mouseY,0.1)
  currentX =nowX
  currentY =nowY
  mouseFollow.css({
    'left': nowX,
    'top': nowY
  })
  requestAnimationFrame(updateFollowPosition)
}
updateFollowPosition()

//c:curerent(現在地) d:destination(目的地) e:easing(イージング)
function lerp(c, d, e =0.05) {
  return c + (d - c) * e
}

$('a,.faq-openclose').hover(
  () => {
    $('body').addClass('link-active')
  }, //mouseenter
  () => {
    $('body').removeClass('link-active')
  } //mouseleave
)

//フェードイン・フェードアウト
$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000, function (){
    $(this).css('background-color','yellow')
  });
});

$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut();
});

//表示・非表示・トグル
//$('.faq-openclose').on('click',e => {
//  $(e.target).parent().next().show()
//  const dd = $(e.target).parent().next()
  //if( dd.is(':visible') ) {
  //  dd.hide();
  //} else {
  //  dd.show()
  //}
//  dd.toggle(!dd.is(':visible'))
//})

$('.faq-openclose').on('click', e => {
  const dd = $(e.target).parent().next();
//
//  dd.toggle( !dd.is(':visible') );
//
//});
$(e.target).toggleClass('is-open')
//slideDown / slideUp / slideToggle
//dd.slideDown(7000);
dd.stop().slideToggle(!dd.is(':visible'))
})

//タイマー処理
const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19')
let counter = 0
tweetContent.text(tweets[0]).fadeIn()

setInterval(() => {
  tweetContent.text(tweets[counter]).fadeOut(400,() => {
    counter++
  })
},3000)