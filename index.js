const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0

function moveDodger(event) {
  const keycode = event.which
  if (keycode === 37) { 
    let oldLeft = dodger.style.left
      if (oldLeft === '0px') {
      return
    }
    console.log(oldLeft)
    oldLeft = parseInt(oldLeft, 10)
    dodger.style.left = (oldLeft - 10) + 'px'
    dodger.style.backgroundColor = 'pink'
    
  } else if (keycode === 39) { 
    moveDodgerRight(event)
    
    } else if (keycode === 38) {
      moveDodgerUp(event)
      
 } else if (keycode === 40) {
   moveDodgerDown(event)
}
}

function moveDodgerRight(event) {
  if (event.which === 39) {
    let oldLocation = dodger.style.left
    if (dodger.style.left === '360px') {
      return
    }
    console.log(oldLocation)
    oldLocation = parseInt(oldLocation, 10)
    dodger.style.left = (oldLocation + 10) +'px'
    dodger.style.backgroundColor = 'green'
  }
}

function moveDodgerUp(event) {
  if (event.which === 38) {
    let oldLocation = dodger.style.bottom
    if (dodger.style.bottom === '380px') {
      return
    }
    console.log(oldLocation)
    oldLocation = parseInt(oldLocation, 10)
    dodger.style.bottom = (oldLocation + 10) +'px'
    dodger.style.backgroundColor = 'teal'
  }
}

function moveDodgerDown(event) {
  if (event.which === 40) {
    let oldLocation = dodger.style.bottom
    if (dodger.style.bottom === '0px') {
      return
    }
    console.log(oldLocation)
    oldLocation = parseInt(oldLocation, 10)
    dodger.style.bottom = (oldLocation - 10) +'px'
    dodger.style.backgroundColor = 'blue'
  }
}

function moveDodgerRight(){}
document.addEventListener('keydown', moveDodger)