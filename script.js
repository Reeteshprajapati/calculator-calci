let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');


let buttonsarray = Array.from(buttons);
let string =" "
buttonsarray.forEach (btn=> {
  btn.addEventListener('click',  (e) => {
    // string=e.target.innerHTML;
    // display.value = string;
    // console.log(e.target.innerHTML)
    if (e.target.innerHTML == 'del') {
      string = string.substring(0, string.length -1);
      display.value = string;
    } else if (e.target.innerHTML == 'ac') {
      
      string = '';
      display.value = string;
    }else if (e.target.innerHTML == '=') {
        string = eval(string);// string ko num me convert karta h
        display.value =string;
      }
      else{
        string +=  e.target.innerHTML;
        display.value = string ;
      }

  
  });
});
