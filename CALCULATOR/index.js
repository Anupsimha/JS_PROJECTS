//TO-DO -> Make M= and M- Funcitional
//TO-DO -> Use Try and Catch Method if an Invalid Keys are Entered are in The Input Box.
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})