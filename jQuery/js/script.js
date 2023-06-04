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

const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetContainer = $('.tweet-container')
$tweetContainer.append(tweet)
$tweetContainer.html(tweet)

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