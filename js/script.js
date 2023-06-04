console.log('おはようございます')
// alert('おはようございます')

//document.body.innerHTML = '<h1>今日は雨です</h1> '

var box
let box2
let box3 = '雨'

let a, b, sum

a = 4
b = 5
sum = a + b
console.log(sum)

//文字列型
let html = '<p class="weather">明日は晴れです</p>'
//let html2 "<p class=\"weather\">明日は晴れです</p>"

// \t タブ空　\s スペース空　\d　特殊な意味を持つ エスケープ文字

//ブーリアン型
console.log(12 > 6)
console.log(12 < 6)

//undefined
let notDefined
console.log(notDefined)

//データ型チェック
let checkType = 'バナナ'
console.log(typeof checkType)

//ショートハンド演算
let c = 5
//c = c + 3
c += 3
console.log(c)

//c += 1
c++ //後置き(優先度下)
console.log(c) //9
console.log(++c) //前置き(優先度上)
console.log(--c) //デクリメント

let d = 4
let e = '5'
let f = '焼き鳥'
console.log(typeof (d + e))

let price = 800
let str = 'ハンバーグの値段は' + price + '円です'
console.log(str)
console.log(d - e)
console.log(d - f)
console.log(typeof String(d))
console.log(typeof Number(f))

//テンプレートリテラル
let tmplt = `ハンバーグの値段は${price}円です`
//console.log(tmplt)

let g = 5
let h = '5'
if (g == h) {
  console.log('gとhは等しい')
}

console.log(!true)
console.log(!false)

let i = 0
if(i) {
  console.log('trueです')
}else {
  console.log('falseです')
}

console.log( 5 == 4 && 8 == 7 )
console.log( 5 == 5 || 8 == 7 )

let j = 8
let k = 7
j == k ? console.log('jとkは等しい') : console.log('jとkは等しくない')
let l = j == k ? '等しい' : '等しくない'
console.log(l)

let pens = ['red','orange','green','blue']
console.log(pens)
console.log(pens[1])

pens[3] ='peple'
console.log(pens[3])

console.log(pens.length)
//pens.length = 7
console.log(pens)

pens.reverse()
console.log(pens)
let deleted = pens.shift()
console.log(deleted)
pens.unshift('black','white')//引数
console.log(pens)
pens.pop()
pens.push('pink','skyblue')
console.log(pens)
pens.splice(2,2)
console.log(pens)


let sliced = pens.slice(1,3)
console.log(sliced)

let result = multiply(8, 5)
function multiply(a, b) {
  return a * b
}
console.log(result)

//無名関数
//let divide = function(a ,b) {
 // return a/b
//}
//result = divide(40,5)
//console.log(result)

//アロー関数
//let divide =() => {
//  return a/b
//}
//result = divide(40,5)
//console.log(result)

//簡単に書くと
let divide = (a,b) =>a/b
result = divide(40,5)
console.log(result);

//即時関数
(function(yaki){
  let result = 'あいうえお'
  console.log(result,yaki)
})(f)
console.log(result)

//定数　const
const tax =0.1
const arr = ['blue','red','green']
arr[1] = 'pink'
console.log(arr)

//オブジェクトコンストラクタ
function Car (maker,brand,type,color,year) {
  this.maker = maker
  this.brand = brand
  this.type = type
  this.color = color
  this.year = year
  this.updateYear = function (){
    return ++this.year
  }
}

const hondacar = new Car('HONDA','CIVIC','compact',['red','sliver'],2022)
console.log(hondacar.brand)
let year = hondacar.updateYear()
console.log(year)

//const now = new Date()
//console.log(now.getFullYear())
//document.body.innerHTML = 
 //`${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`

const old  = new Date('1999-9-10')
if(old.getDay() ==5){
  console.log('金曜日')
}
 // console.log(old.getDay())

 //ブラケットノーテーション
 //console.dir(hondacar['this-year'])

 //const car2 = {
//    'this-year':
// }

 //繰り返し処理
 //for文 
 //for (初期化式;繰り返し条件;増減式){}
 for(let counter = 0; counter <=10; counter++){
  console.log(`カウンターの値は${counter}`)
 }
console.log(pens)
for(let i = 0; i < pens.length; i++){
  console.log(`ペンの色は${pens[i]}です`)
  if(pens[i] ==='white') {
    console.log('当たり！')
  }
}

//for...of文
//for ( 変数 or 配列 ) {}
for(let color of pens){
  console.log(`ペンの色は${color}です`)
}

//switc文
const color = 'blue'
if(color == 'blue'){
  console.log('colorは青です')
}else if (color == 'pink'){
  console.log('colorはpinkです')
}else if (color == 'green'){
  console.log('colorはgreenです')
}

switch(color){
  case 'blue':
    console.log('colorはblueです')
  case 'pink':
    console.log('colorはpinkです')
  case 'green':
    console.log('colorはgreenです')
  break
  default:
    console.log('colorはありません')
}

//カレンダー
const date = new Date()
console.log(date.getMonth() +1)
const date2 = new Date(2023, 5, 0)
console.log(date2.getDate())
const firstDay = new Date(date.getFullYear() + '-' + (date.getMonth() +1) + '-1') //yyyy-mm-dd'
console.log(firstDay.getDay())

const firestCell = firstDay.getDay()
const days = date2.getDate()
const maxCell = Math.ceil((firestCell + days) / 7) * 7
console.log('maxCellの値は',maxCell)

let cell = '<tr>' //<td>1<td/><td>2<td/>...
for(let d = 1; d <= maxCell; d++){
  if(firestCell <=(d - 1) && days >= d - firestCell){
    cell += `<td>${d - 1}</td>`
  }else{
    cell += '<td></td>'
  }

  //cell = cell + '<td>'+d+'</td>'
  //cell = cell + `<td>${d}</td>`
  
  if(d % 7 == 0 && d !== maxCell){
    cell += '</tr><tr>'
  }
}
cell +='</tr>'

console.log(cell)

const cal = document.querySelector('#calendar')
const tbody = cal.querySelector('tbody')
tbody.innerHTML = cell

const fruits = document.getElementsByTagName('p')
console.log(fruits)

const sweet =document.getElementById('sweet')
console.log(sweet)

const food = document.getElementsByClassName('food')
console.log(food)

console.log(
  document.querySelector('p')
)

console.log(
  document.querySelectorAll('p')
)

const boxImg = document.querySelector('#box img')
boxImg.id = 'main-img'
boxImg.className += ' box-img small'
boxImg.classList.add('dummy')
boxImg.classList.remove('medium')
console.log(boxImg.classList.contains('large'))
console.log(boxImg.classList.contains('dummy'))

const outerlink = document.querySelector('.outerlink a')
outerlink.setAttribute('target', '_blank')

const links = document.querySelectorAll('.links a')
console.dir(document)
links.forEach(function (el) {
  if (!el.href.includes(document.baseURI)) {
    el.setAttribute('target', '_blank')
  }
})

fn = function () { }
function example(fn) {
  //...
  let a = 5
  let b = 4
  fn(a, b)
}

example(function (a, b) {
  return a * b
})

const featuredImg = document.querySelector('.featured-image')
const captext = featuredImg.querySelector('img').getAttribute('alt')
const figcap = document.createElement('figcaption')
const capTextNode = document.createTextNode(captext)
figcap.appendChild(capTextNode)
featuredImg.appendChild(figcap)
featuredImg.insertAdjacentElement('afterbegin',figcap)

//スタイル
const sampleLink = document.querySelector('.sample-link')
sampleLink.style.backgroundColor = '#434567'
sampleLink.style.cssText = 'color:white;display:block;background-color:#434567;'

//イベントハンドリング
const toggle = document.querySelector('.toggle')
const textarea = document.querySelector('.textarea')

function toggleTextarea(e){
  textarea.classList.toggle('hide')
  const btnText =toggle.getAttribute('data-text')
  const dispText = toggle.textContent
  toggle.textContent = btnText
  toggle,setAttribute('date-text',dispText)
}
//toggle.onclick = toggleTextarea
toggle.addEventListener('click',toggleTextarea)
//toggle.addEventListener('click',function(){}
toggle.addEventListener('click',() => {
  alert('クリックしました')
  toggle.removeEventListener('click',toggleTextarea)
})
