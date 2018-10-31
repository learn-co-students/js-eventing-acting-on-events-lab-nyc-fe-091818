const dodger = document.getElementById('dodger')

// dodger.style.bottom = '380px'

function moveDodger(event) {
  const keycode = event.which
  console.log(keycode)
  if (keycode === 37) {
    // figure out where it is now
    let oldLeft = dodger.style.left
    
    if (oldLeft === '0px') {
      return
    }
    // '180px'
    
    console.log(oldLeft)
    oldLeft = parseInt(oldLeft, 10)
    // 180 
    
    // 170 + 'px'
    dodger.style.left = (oldLeft - 10) + 'px'
  } else if (keycode == 39) {
    moveDodgerRight(event)
  }
}

function moveDodgerRight(event) {
  if (event.which === 39) {
    let oldLocation = dodger.style.left
    // '180px'
    if (oldLocation === '360px') {
      return
    }
    
    oldLocation = parseInt(oldLocation, 10)
    // 180
    
    dodger.style.left = (oldLocation + 10) + 'px'
  }
}



function moveDodgerRight() {}

document.addEventListener('keydown', moveDodger)