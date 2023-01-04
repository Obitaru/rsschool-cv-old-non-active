
const el = document.querySelector('.nav__links');

const burg = document.querySelector('.burger');
burg.addEventListener("click",()=>{
   
    if(!el.hasAttribute('data')){
      el.style.display = "flex";
      setTimeout(()=>  el.setAttribute("data", "active"),100)
       

      
        
    }else{
        el.style.display = ""
       
        el.removeAttribute("data");
    }
})

console.log(el)


console.log(el.style.display)

