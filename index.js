const red = document.querySelector('#redRange')
const green = document.querySelector('#greenRange')
const blue = document.querySelector('#blueRange')
const redDigital = document.querySelector('.redrange')
const greenDigital = document.querySelector('.greenrange')
const blueDigital = document.querySelector('.bluerange')
const hex = document.querySelector('.hex')
const container = document.querySelector('.container')


// red digital to change
red.addEventListener('input', function () {
  let redValue = red.value
  let greenValue = green.value
  let blueValue = blue.value
  redDigital.innerHTML = `<div class="redrange" style="background-color:red"><h5>${redValue}</h5></div>`
  getHexValue([redValue, greenValue, blueValue])
})

// green digital to change
green.addEventListener('input', function () {
  let redValue = red.value
  let greenValue = green.value
  let blueValue = blue.value
  greenDigital.innerHTML = `<div class="redrange" style="background-color:green"><h5>${greenValue}</h5></div>`
  getHexValue([redValue, greenValue, blueValue])
})

// blue digital to change
blue.addEventListener('input', function () {
  let redValue = red.value
  let greenValue = green.value
  let blueValue = blue.value
  blueDigital.innerHTML = `<div class="redrange" style="background-color:#1E90FF"><h5>${blueValue}</h5></div>`
  getHexValue([redValue, greenValue, blueValue])
})


function getHexValue([r, g, b]) {
  let v = Number(r)
  let red = v.toString(16)
  if (red.length < 2) {
    red = '0' + red
  }

  let c = Number(g)
  let green = c.toString(16)
  if (green.length < 2) {
    green = '0' + green
  }

  let n = Number(b)
  let blue = n.toString(16)
  if (blue.length < 2) {
    blue = '0' + blue
  }

  hex.innerHTML = `<div class="hex" style="background-color:"><h1>#${red}${green}${blue}</h1></div>`
  container.style.backgroundColor = `#${red}${green}${blue}`
}
