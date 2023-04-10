const counter = document.querySelector('.counter')
const sheva = document.querySelector('#sheva')

function showModalDN() {
  let colvo = document.querySelector('.colvo')
  let modalBackground = document.getElementById("donetsk")
  modalBackground.style.display = "block"

  if (colvo.innerHTML === ': 6000') {
    document.querySelector('#h2_alert').style.display = 'block'
  } else {
    document.querySelector('#h2_alert').style.display = 'none'
  }
}

function hideModalDN() {
  let modalBackground = document.getElementById("donetsk")
  modalBackground.style.display = "none"
}

function showModalDefeat() {
  let modalBackground = document.getElementById("defeat")
  modalBackground.style.display = "block"
}

function hideModalDefeat() {
  let modalBackground = document.getElementById("defeat")
  modalBackground.style.display = "none"
}

function showModalWin() {
  let modalBackground = document.getElementById("win")
  modalBackground.style.display = "block"
}

function hideModalWin() {
  let modalBackground = document.getElementById("win")
  modalBackground.style.display = "none"
}

counter.addEventListener('click', () => {
  colvo = document.querySelector('.colvo')
  hideModalDN()
  sheva.style.left = '1530px'
  sheva.style.top = '480px'
  setTimeout(function() {
  if (colvo.innerHTML === ': 6000') {
    let randomNumber = Math.random()
    if (randomNumber <= 0.5) {
      showModalDefeat()
    } else {
      showModalWin()
    }
    colvo.innerHTML = ': 0'
    document.getElementById("text-container3").style.display = "block"

    setTimeout(function() {
      document.getElementById("text-container3").style.opacity = 0
    }, 500)
  } else if (colvo.innerHTML === ': 7000') {
    showModalWin()
    colvo.innerHTML = ': 1000'
    document.getElementById("text-container3").style.display = "block"

    setTimeout(function() {
      document.getElementById("text-container3").style.opacity = 0
    }, 500)
  } else {
    showModalWin()
    colvo.innerHTML = ': 2000'
    document.getElementById("text-container3").style.display = "block"

    setTimeout(function() {
      document.getElementById("text-container3").style.opacity = 0
    }, 500)
  }
}, 1000);
})