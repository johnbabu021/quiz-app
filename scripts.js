const header = document.querySelector('.headline')
const form = document.querySelector('.form')
const hamburger = document.querySelector('.hamburger')
const hamdiv = document.querySelector('.hamburger div')
const options = form.querySelectorAll('.option')
const answers = document.querySelectorAll('.ans')
const question = document.querySelector('.que')
let xhttp = new XMLHttpRequest()
let tl = new TimelineMax()
let x;
let index = 0;
let correct

const arrlength = [0, 1, 2, 3]
arrlength.sort((a, b) => { return 0.5 - Math.random() })
hamburger.addEventListener('mouseover', hamFunction)
hamburger.addEventListener('mouseout', hamFunction1)


tl.fromTo(header, 1.5, { y: "-30%" }, { y: "0%", ease: Power2.easeInOut })
    .fromTo(hamburger, 1, { x: "250%" }, { x: "0%", ease: Power2.easeInOut }, "-=0.7")
    .fromTo(form, 1, { height: "-100%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(form, 1, { display: "none" }, { display: "block", ease: Power2.easeInOut }, "-=1.5")


xhttp.onload = function onload() {
    if (xhttp.status === 200) {
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

    correct = options[arrlength[0]].value
    console.log(correct)

    
    if (options.some(item => item.value == correct)) {
        alert('ANS IS CORRECT')

    }
    else {
        alert("Wrong answer")
    }

}



function hamFunction() {

    hamdiv.classList.add('blackhover')
}

function hamFunction1() {

    hamdiv.classList.remove('blackhover')
}

