
let result = 0

let a = 0;
let b = 0;

function calculate() {
    let ab = document.getElementById("temp").value;
    let abc = Number(ab);
    
    if (isNaN(abc)||ab===""){
        alert("please enter a valid number");
        return
    }
    let result_round = 0
    if (a == 'celsius' && b == 'celsius') {
        result = (abc * 1)

        console.log("in fahrenheit  :", result)
        output(result);
    }

    else if (a == 'celsius' && b == 'fahrenheit') {
        result = (abc * 9 / 5) + 32
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if (a == 'celsius' && b == 'kelvin') {
        result = (Number(abc) + 273.15)
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if (a == 'fahrenheit' && b == 'celsius') {
        result = ((abc - 32) * 5 / 9)
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if (a == 'fahrenheit' && b == 'fahrenheit') {
        result = (abc * 1)

        output(result)
    }
    else if (a == 'fahrenheit' && b == 'kelvin') {
        result = ((abc - 32) * 5 / 9) + 273.15
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if (a == 'kelvin' && b == 'celsius') {
        result = (Number(abc) - 273.15)
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if (a == 'kelvin' && b == 'fahrenheit') {
        result = ((abc - 273.15) * 9 / 5) + 32
        result_round = result.toFixed(2);
        output(result_round)
    }
    else if(a == 'kelvin' && b == 'kelvin') {
        result= (abc * 1);
        output(result)
    }
    // else {
    //     console.log("inavlid")
    // }


}

function unit() {
    let selected = document.querySelectorAll('input[name="unit"]');

    selected.forEach(element => {
        element.addEventListener("change", () => {
            console.log("this was sewkjnfjka", element.value)
            a = element.value
            let h=document.querySelector(".input")
            let newh=h.querySelector("h4")

            
            newh.textContent = `Enter the temperature in ${a} :`
        })

    });
}


function unit_2() {
    let selected = document.querySelectorAll('input[name="unit-2"]');

    selected.forEach(element => {
        element.addEventListener("change", () => {
            console.log("this was unit 2", element.value)
            b = element.value
            
            

        })

    });
}
let aa = unit()
unit_2()

function output(res){
    let elem = document.querySelector(".output")
    if (elem == null) {
        last (res)
    }
    else{
        elem.remove();
        last(res)
    }

}
function last(res) {
    
        let final = document.createElement("div")
        final.className = "output"
        // final.textContent = `${res}`
        final.textContent = `${res} ${b}`;

        final.style.backgroundColor = "#b6bfff";
        final.style.margin = "15px auto 0px auto"
        final.style.width = "80%"
        final.style.padding = "15px"
        final.style.textAlign = "center"
        final.style.border = "1px solid black"
        final.style.borderRadius = "15px"

        document.querySelector(".input").append(final)
        console.log("we are inside output rn ", res)
    

}

document.getElementById("calc").addEventListener("click", calculate)
document.getElementById("temp").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        calculate();
    }
});


