const form = document.querySelector('form')
const result = document.querySelector('.result-card')
const rating = document.querySelector('.rating-container')
const ratingResult = document.querySelector('.ratings-result')

result.style.display = 'None'

const onSubmit = (e) => {
    e.preventDefault()
    let idx = -1
    let i = 0
    for (const btn of rating.children) {
        if (btn.classList.contains('rating-btn-active')) {
            idx = i
        }
        i++
    }
    
    if (idx < 0) return
    ratingResult.textContent = `You selected ${idx + 1} out of 5`
    result.style.display = ''
    form.style.display = 'None'
}

const setRating = (e) => {
    if (e.target.tagName !== 'BUTTON') return
    for (const btn of rating.children) {
        if (btn === e.target) btn.classList.add('rating-btn-active')
        else btn.classList.remove('rating-btn-active')
    }
}

const hoverRating = (e) => {

    for (const btn of rating.children) {
        if (e.target.tagName !== 'BUTTON') {
            btn.classList.remove('rating-btn-hover')
            continue
        }

        if (btn === e.target) {
            if (btn.classList.contains('rating-btn-hover')) {
                btn.classList.remove('rating-btn-hover')
            } else {
                btn.classList.add('rating-btn-hover')
            }
        }

        else btn.classList.remove('rating-btn-hover')
    }
}

form.addEventListener('submit', onSubmit)
form.addEventListener('pointerover', hoverRating)
rating.addEventListener('click', setRating)