const input = document.querySelectorAll(".login")
const logIn = () => {
    input.forEach(x =>{
        if(x.value.trim() == "")
        {
            
            let span = document.createElement("span")
            span.textContent = "this field must be filled"
            span.style.color = 'red'
            x.after(span)
        }
    } 
        
        )
    }
    const click = () => {
    
        const button = document.querySelector(".click")
        button.addEventListener('click', e => {e.preventDefault(); logIn();})
    }
    input.forEach(x => console.log(x.value))
    click()
    
    