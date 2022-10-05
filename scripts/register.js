const inps = document.querySelectorAll(".textBox")
const Staff = [
    {
         id: 1,
        firstName: 'Khaleelah',
         lastName: 'Uthman',
        phoneNumber: '09035459984',
        emailId: 'uthmnkhaleelah2@gmail.com',
        gender: 'female' 

    },
    {
        id: 2,
       firstName: 'Noor',
        lastName: 'Akinyemi',
       phoneNumber: '09035459984',
       emailId: 'noorbobola@gmail.com',
       gender: 'male' 

   },
    
    
];

const validate = () => {
inps.forEach(inp =>{
    if(inp.value.trim() == "")
    {
        
        let span = document.createElement("span")
        span.textContent = "this field must be filled"
        span.style.color = 'red'
        inp.after(span)
        alert('successfuly sign up')``
    }
} 
    
    )
}
const click = () => {
    
    const button = document.querySelector(".submit")
    button.addEventListener('click', e => {e.preventDefault(); validate();})
}
inps.forEach(inp => console.log(inp.value))
click();
// Object.addEventListener("click",)

// const authorized