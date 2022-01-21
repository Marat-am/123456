export const renderFirstPage = () => {
    const wrapper = `<nav class="header"></nav> 
    
        <p>Yntrel sexany</p>
            <select name="" id="table">
                <option value="notselected">Ընտրել Սեղանը</option> 
                <option value="1">№1</option>
                <option value="2">№2</option>
                <option value="3">№3</option>
                <option value="4">№4</option>
                <option value="5">№5</option>
                <option value="6">№6</option>
                <option value="7">№7</option>
                <option value="8">№8</option>
                <option value="9">№9</option>
            </select><br>
            <button class="btn">Ամրագրել</button>
        

    `
    document.querySelector(".container1").innerHTML = wrapper;
    
   
}