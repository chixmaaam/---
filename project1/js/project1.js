const list = document.querySelector('#list')
const request = new XMLHttpRequest()

// 接続の設定 open
request.open('get', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')

// レスポンス後の処理 onload
request.onload = () => {
  const data = JSON.parse(request.responseText)
  outputHtml(data)
}

// リクエストの送信 send
request.send()

// 出力
function outputHtml(data) {
  let html = ''
  // forEach(データ, インデックス, 配列自体)
  data.forEach(list => {
    html += `
      <div>
        <p>${list.id}</p>
        <div>
          <img src="${list.thumbnailUrl}" alt="">
        </div>
        <p>${list.title}</p>
      </div>
    `
  })
  list.insertAdjacentHTML('beforeend', html)
}