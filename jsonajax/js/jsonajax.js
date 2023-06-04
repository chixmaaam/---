//const cars = [
//  {
//    "name": "カローラ",
//    "type": "セダン",
//    "brand": "TOYOTA"
//  },
//  {
//    "name": "フィット",
//    "type": "コンパクト",
//    "brand": "HONDA"
//  },
//  {
//    "name": "ハイゼット",
//    "type": "軽自動",
//    "brand": "ダイハツ"
//  }
//]

//console.log(cars[2].name)

const btn = document.querySelector('#btn')
const info = document.querySelector('#car-info')
const request = new XMLHttpRequest()
request.open('get', 'https://norixx.github.io/jquery_elearing/cars1.json')

btn.addEventListener('click', () => {
  request.onload = () => {
    console.log(request.responseText)
    const res = JSON.parse(request.responseText)
    outputHtml(res)
  }

  request.send()
})

// [{},{},{}]
function outputHtml(res) {
  let html = ''
  res.forEach(obj => {
    // console.log(`<p>${obj.name}</p>`)
    const colors = obj.colors.join(' / ')
    html += `<p>${obj.name} - ${obj.type} (${obj.brand})色: ${colors}</p>`
  })
  info.insertAdjacentHTML('beforeend', html)
}