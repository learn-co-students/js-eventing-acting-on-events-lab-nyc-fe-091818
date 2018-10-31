const dodger = document.getElementById('dodger')

function moveDodger(event){
  const keycode = event.which
  if (keycode=== 37){
    // left
   let oldLeft =dodger.style.left
   
   if (oldLeft==='0px'){
     return
   }
    console.log(oldLeft)
    
    oldLeft = parseInt(oldLeft, 10)
    
    dodger.style.left = (oldLeft- 10)+ 'px'
    
  } else if (keycode===39){
    moveDodgerRight(event)
  }

}

function moveDodgerRight(event){
  if (event.which=== 39){
    let oldLocation = dodger.style.left
    
    if (oldLocation==='360px'){
      return
    }
    
    oldLocation= parseInt(oldLocation, 10)
    
    dodger.style.left= (oldLocation + 10)+ 'px'
  }
}

function moveDodgerRight(){
  
}

document.addEventListener('keydown', moveDodger)
