let string = "";
let result=0; 
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
      if(e.target.innerHTML =='='){
         string = eval(string);
         document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML =='AC'){
         result=0
          string ="";
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML =='DE'){
         string=string.toString();
         string = string.slice(0,-1)
         document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML =='M+'){ 
          string = eval(string);
          result+=string;
           string="";
          //document.querySelector('input').value = string;
           document.querySelector('input').value = result.toString();
           //string+="";
           
           
      }
      else if(e.target.innerHTML =='M-'){
         string = eval(string);
        result=string-result;
         string="";
         document.querySelector('input').value = result.toString();
         //string +=""
      }
      else {
         console.log(e.target)
         string = string + e.target.innerHTML;
         document.querySelector('input').value = string; 
      }
     
   })
})