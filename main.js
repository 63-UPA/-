const audio = new Audio('./sounds/click.mp3')
const zaporija = document.querySelector('#zp')
const lugansk = document.querySelector('#ln')
const donetsk = document.querySelector('#dn')
const harkiv = document.querySelector('#hk')
const crimea = document.querySelector('#cr')
const btn = document.querySelector('#mobil')
const close = document.querySelector('.hideM')
const hid = document.querySelector('.hid')
let incrementButton = document.querySelector('#colvo_hid')
let number = parseInt(incrementButton.textContent)

function showModalSheva() {
  let modalBackground = document.getElementById("no_sheva")
  modalBackground.style.display = "block"
}

function hideModalSheva() {
  let modalBackground = document.getElementById("no_sheva")
  modalBackground.style.display = "none"
}

function hideModalBar() {
  let modalBackground = document.getElementById("modal_progress")
  modalBackground.style.display = "none"
}

function showModalBar() {
  let modalBackground = document.getElementById("modal_progress")
  modalBackground.style.display = "block"
  let progressBar = document.querySelector('.progress')
  let progress = 0

  function updateProgress() {
    if (progress < 100) {
      progress++
      progressBar.style.width = progress + '%'
    }
  }
  setInterval(updateProgress, 20)
}

zaporija.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

lugansk.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

donetsk.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

hid.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
  showModalBar()
  setTimeout(function(){
    hideModalBar()
  }, 3000)
  setTimeout(function(){
    number++
    incrementButton.textContent = number.toString()
  }, 4000)
})

harkiv.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

crimea.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

close.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
})

btn.addEventListener('click', () => {
  audio.currentTime = 0
  audio.play()
  colvo = document.querySelector('.colvo')

  if (colvo.innerHTML === ': 6000') {
    document.getElementById("text-container").style.display = "block"

    setTimeout(function() {
    document.getElementById("text-container").style.opacity = 0
    }, 1000)

    colvo.innerHTML = ': 7000'
  } else if (colvo.innerHTML === ': 7000') {

    document.getElementById("text-container2").style.display = "block"

    setTimeout(function() {
      document.getElementById("text-container2").style.opacity = 0
    }, 500)

    colvo.innerHTML = ': 8000'
  } else {
    showModalSheva()
  }
})