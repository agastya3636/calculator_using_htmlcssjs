let string = "";
let buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('.input');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
            string=""+eval(string);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'C')
        {
            string="";
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'DE')
        {
            
            string=string.substring(0,string.length-1);
            document.querySelector('.input').value = string;
        }
    
        else{
        console.log(e.target);
        string += e.target.innerHTML;
        document.querySelector('.input').value = string;
        }
    })
})

inputField.addEventListener('input', (event) => {
    console.log(event);
    string = event.target.value
    console.log(string);
});

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log(string)
    string=""+eval(string);
    document.querySelector('.input').value = string;
  }
});
