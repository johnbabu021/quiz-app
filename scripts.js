const header = document.querySelector('.headline')
const form = document.querySelector('.form')
const hamburger = document.querySelector('.hamburger')
const hamdiv = document.querySelector('.hamburger div')
const options = form.querySelectorAll('.option')
const answers = document.querySelectorAll('.ans')
const question = document.querySelector('.que')
const alertBox = document.querySelector('.alert__box')
const alertBoxScore = document.querySelector('.alert__box span')
const score = document.querySelector('.score')
const totalScore = document.querySelector(".total__score")
let xhttp = new XMLHttpRequest()
let x;
let index = 0;
let result = 0;
score.textContent = index
totalScore.textContent = result
alertBox.style.display = "none"
const arrlength = [0, 1, 2, 3]
arrlength.sort((a, b) => { return 0.5 - Math.random() })
hamburger.addEventListener('mouseover', hamFunction)
hamburger.addEventListener('mouseout', hamFunction1)




xhttp.onload = function () {

    if (xhttp.status === 200) {
        form.style.display = "block"

        x = JSON.parse(this.response)
        if (x.results[index].incorrect_answers.length === 3) {
            answers[arrlength[0]].innerHTML = x.results[index].correct_answer
            answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
            answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
            answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
            question.innerHTML = x.results[0].question


        }
        else {
            index++;
            answers[arrlength[0]].innerHTML = x.results[index].correct_answer
            answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
            answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
            answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
            question.innerHTML = x.results[0].question


        }
    }
}
xhttp.open('GET', "https://opentdb.com/api.php?amount=10", true)
xhttp.send()


const onHandleSubmit = () => {
    if (options.forEach((item) => {

        if (item.checked) {
            form.style.display = "none"
            if (item.value === options[arrlength[0]].value) {
                index++
                result++
                xhttp.open('GET', "https://opentdb.com/api.php?amount=10", true)
                xhttp.send()
                score.textContent = index
                totalScore.textContent = result
                arrlength.sort((a, b) => { return 0.5 - Math.random() })

            }
            else {
                index++
                xhttp.open('GET', "https://opentdb.com/api.php?amount=10", true)
                xhttp.send()
                score.textContent = index
                arrlength.sort((a, b) => { return 0.5 - Math.random() })


            }

            if (index === 10) {
                alertBox.style.display = "block"
                alertBoxScore.textContent = result


            }

        }

    }))
        console.log('hi')




}


function hamFunction() {

    hamdiv.classList.add('blackhover')
}

function hamFunction1() {

    hamdiv.classList.remove('blackhover')
}

function onHandleReset() {
    index = 0;
    result = 0;
    score.textContent = index
    totalScore.textContent = result
    alertBox.style.display = "none"

}