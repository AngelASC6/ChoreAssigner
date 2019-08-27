//get refrence
let studentRef = document.getElementById("student_name")
let choreRef = document.getElementById("chore_name")
let containerRef = document.getElementById("container")
let button = document.querySelector("button")
let h3 = document.querySelector("h3")
//makes the student and chore arrays
let studentNames = "studentA studentB studentC studentD studentE studentF studentG studentH studentI"
let choreList = "choreA choreB choreC choreD choreE choreF choreG choreH"
let studentArray = studentNames.split(" ")
let choreArray = choreList.split(" ")
let twoPersonChore = choreArray[3]
let counter = 0
let studentCounter = 0
let choreItemRef =[]
let itemNumber = choreItemRef[counter]

console.log(studentArray)
console.log(choreArray)

button.addEventListener('click',runFunctions)

function runFunctions(){
    containerRef.style.display = "flex"
    button.style.display = "none"
    displayStudent()
}

function displayChores() {
    setTimeout(function(){
        let randomNum = parseInt(Math.random() * choreArray.length)
        let randomChore = choreArray[randomNum]
        let choreItemRef


        //assigns two students to a chore
        choreRef.innerHTML += `<h3 class="animated bounceInDown chore_item">${randomChore}</h3> <br>`
        //gives it a refrence
        choreItemRef = document.getElementsByClassName("chore_item")
        //adds another name if the two person chore comes up
        if(randomChore == twoPersonChore){
            choreRef.innerHTML += "<h3 id='filler'>Test idk</h3><br>"
            setTimeout(function(){
                let randomNum = parseInt(Math.random() * studentArray.length)
                let randomStudent = studentArray[randomNum]
                studentRef.innerHTML += `<h3 class=''>${randomStudent}</h3> <br>`
                studentArray.splice(randomNum,1)
            },500)

        }
        //targets a specific one in the array
        choreItemNumber = choreItemRef[counter]
        //removes the animation once it animates
        choreItemNumber.addEventListener('animationend', function() {choreItemNumber.classList.remove("animated","bounceInDown"); })
        console.log(choreItemRef)
        console.log(counter)
        
        choreArray.splice(randomNum,1)
        counter++
    },1000)
}


function displayStudent() {
    //adds the student to the screen
    setTimeout(function(){
            let i = 0
            //displays the students
            let randomNum = parseInt(Math.random() * studentArray.length)
            let randomStudent = studentArray[randomNum]
            studentRef.innerHTML += `<h3 class="animated bounceInDown item">${randomStudent}</h3> <br>`
            itemRef = document.getElementsByClassName("item")
            //targets a specific one in the array
            itemNumber = itemRef[studentCounter]
            console.log()
            //removes the animation once it animates
            itemNumber.addEventListener('animationend', function() {itemNumber.classList.remove("animated","bounceInDown"); })

            studentArray.splice(randomNum,1)
            if(i<studentArray.length){
                displayStudent()
            }
            if(i<choreArray.length){
                displayChores()
            }
            window.scrollTo(0,document.body.scrollHeight)
            i --
            studentCounter ++
        },2000)
}



function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}