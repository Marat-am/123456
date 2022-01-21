import { renderFirstPage } from "./js/views/firstPage";
import { renderMenuList }  from "./js/views/menuList";
import router from "./js/routing";

renderFirstPage();


 
document.querySelector(".btn").addEventListener("click",function(){
    console.log(4)
   renderMenuList(); 
})

