var cambio = document.getElementById("size-c")
var enviar = document.getElementById("Enviar")
var entradas = document.querySelectorAll("input")
var selectores = document.querySelectorAll("select")
var check = document.getElementById("exampleCheck1")


window.addEventListener("resize", () => {
    console.log(screen.width)
    if( screen.width < 577)
    {
        cambio.classList.remove("wh-50")
        cambio.classList.add("wh-120")
        enviar.classList.remove("w-50")
        enviar.classList.add("w-100")
    }
    else{
        cambio.classList.remove("wh-120")
        cambio.classList.add("wh-50")
        enviar.classList.remove("w-100")
        enviar.classList.add("w-50")
    }

    if (screen.height < 570) {
        cambio.classList.remove("wh-120")
        cambio.classList.add("wh-130")
    }
})


var contar = entradas.length
contar--

enviar.addEventListener("click", (e) => {

    for (var i = 0; i < contar; i++) 
    {
            if(entradas[i].value == "" || entradas[i].value == " ")
            {
                e.preventDefault()
                entradas[i].style.border= "1.5px solid red"
                entradas[i].classList.add("error")
            }
            else
            {
                entradas[i].style.border= "1.5px solid #2bdc2b"
                entradas[i].classList.remove("error")
            }
    }

    for (var o = 0; o < selectores.length; o++) 
    {
        if (selectores[o].value == 0) 
        {
            e.preventDefault()
            selectores[o].style.border= "1.5px solid red"
            selectores[o].classList.add("error")    
        }
        else{
            selectores[o].style.border= "1.5px solid #2bdc2b"
            selectores[o].classList.remove("error")
        }
    }
    
    if (check.checked) 
    {
        console.log("marcado")  
        check.style.outline = "none"  
    } 
    else{
        e.preventDefault()  
        check.style.outline = "2px solid red"
    }
})






