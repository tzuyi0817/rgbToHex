const inputR = document.querySelector('#r')
const inputG = document.querySelector('#g')
const inputB = document.querySelector('#b')
const button = document.querySelector('[data-alpha-pos="convert"]')
const hex = document.querySelector('#hex')
const hexColor = document.querySelector('.hexcolor')

// 檢查書入值是否輸入錯誤 & 轉換hex產生顏色
button.addEventListener('click' , function() {
  let r = inputR.value
  let g = inputG.value
  let b = inputB.value
  check([r, g, b]) 
})

// 檢查輸入值
function check ([r, g, b]) {
  if (r < 0 || r > 255 || r.length === 0 || isNaN(r) === true) {
    alert (`請輸入0~255之間的數字`)
  } else if (g < 0 || g > 255 || g.length === 0 || isNaN(g) === true) {
    alert (`請輸入0~255之間的數字`)
  } else if (b < 0 || b > 255 || b.length === 0 || isNaN(b) === true) {
    alert (`請輸入0~255之間的數字`)
  } else {
    let ans = rgbToHex([r, g, b])
    console.log(ans)
    hex.value = ans
    hexColor.innerHTML = `<div class ="hexcolor" style="background-color:${ans}"></div>`
  }
}

// rgb轉換hex
function rgbToHex(rgb) {
  let hexbe = '#'
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  for (let i = 0; i < 3; i++) {
    let hexAns = []
    let rgbNum = Number(rgb[i])
    let hexB = ''
    if (rgbNum > 16) {
      let hexA = Math.floor(rgbNum / 16)
      hexB = rgbNum % 16
      hexAns.push(hex[hexA])
      hexAns.push(hex[hexB])
    } else {
      hexAns.push(hex[rgbNum])
    }

    if (hexAns.length < 2) {
      hexAns.reverse(hexAns.push('0'))
    }
    hexbe += hexAns.join('')
  }
  return hexbe
}
