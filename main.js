const modal = document.querySelector('.modal-box')
const loginBtn = document.querySelector('.log-in')
const closeBtn = document.querySelector('.close-btn')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target==modal) {
        closeModal()
    }
}

const modal2 = document.querySelector('.modal-box2')
const selectArea = document.querySelector('.view')
const closeBtn2 = document.querySelector('.close-btn2')

selectArea.addEventListener('click', openModal2)
closeBtn2.addEventListener('click', closeModal2)
window.addEventListener('click', outsideClick)


function openModal2 () {
    modal2.style.display = 'block'
    
}

function closeModal2 () {
    modal2.style.display = 'none'
}

function outsideClick (e) {
    if (e.target==modal2){
        closeModal2()
    }
}