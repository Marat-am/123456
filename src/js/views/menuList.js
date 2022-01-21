export const renderMenuList= () => {
    const wrapper = `<nav class="header"></nav> 
    
    <div id="mav">
        <h2>սեղանի համար #</h2>
        <button id="btn">cansel</button>

    </div>

    <div class="container1">
           <button id="btnIcon"> <i class="fas fa-align-justify"></i></button>

        <div class="yashik">
        <div class="cube"  > <a href="#">Տաք Ուտստ</a></div>
        <div class="cube"> <a href="#"> Խորտիկներ </a></div>
        <div class="cube">  <a href="#">  Քաղցրավենիք </a></div>
        <div class="cube">  <a href="#">  Ըմպելիք </a></div>
        <div class="cube"> <a href="#">Պիցցաներ </a></div>
        <div class="cube"><a href="#"> Աղցաններ  </a></div>
        </div>

    </div>
        

    `
    document.querySelector(".container1").innerHTML = wrapper;
}