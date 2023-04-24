let num1 = document.querySelector("#number1")
let num2 = document.querySelector("#number2")
const addition = document.getElementById("add")
const subtraction = document.getElementById("sub")
const multiplication = document.getElementById("mul")
const division = document.getElementById("div")
const dResult = document.querySelector("#result")

const rDivision = document.getElementById("rDiv")
const rSubtraction = document.getElementById("rSub")
const rDResult = document.querySelector("#rResult")
const compare = document.querySelector(".compare")
const compareSubFunc = () => {
    if (rSubtraction && rSubtraction > subtraction) {
        compare.textContent = "Reverse > Non-revered"
    } else {
        compare.textContent = "Reverse < Non-revered"

    }
}
addition.addEventListener("click", function() {
    let data = num1.valueAsNumber + num2.valueAsNumber
    dResult.textContent = data
})
subtraction.addEventListener("click", function() {
    let data = num1.valueAsNumber - num2.valueAsNumber
    dResult.textContent = data
})
multiplication.addEventListener("click", function() {
    let data = num1.valueAsNumber * num2.valueAsNumber
    dResult.textContent = data
})
division.addEventListener("click", function() {
        let data = num1.valueAsNumber / num2.valueAsNumber
        dResult.textContent = data
    })
    //Reverse
rDivision.addEventListener("click", function() {
    let data = num2.valueAsNumber / num1.valueAsNumber
    rDResult.textContent = data
})
rSubtraction.addEventListener("click", function() {
    let data = num2.valueAsNumber - num1.valueAsNumber
    rDResult.textContent = data
    compareSubFunc()

})