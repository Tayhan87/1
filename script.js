document.querySelectorAll('.btn').forEach(button=>{button.addEventListener("click",goback)});
document.getElementById("rw").addEventListener('click',removeproduct);
document.addEventListener('DOMContentLoaded',loadfromstorage)
function goback(){
    let row=this.parentElement.parentElement;
    let product=row.children[0].innerText;
    let price=row.children[1].innerText;
    console.log(product+" "+price);
    let creating=document.createElement("tr");

    creating.innerHTML=
    `<td>${product}</td>
    <td>${price}</td>
    <td><a href='#' class = "delete">X</a></td>`;

    let inside=document.getElementById('rw');
    inside.appendChild(creating);   
    
    savetolocalstorage();
}

function removeproduct(e){
       if(e.target.hasAttribute("href")){
        e.target.parentElement.parentElement.remove();
        savetolocalstorage();
       }
}

function savetolocalstorage(){

    let inside=document.getElementById('rw');
    let cartData=[];
    inside.querySelectorAll('tr').forEach(row=>{
        let product=row.children[0].innerText;
        let price =row.children[1].innerText;
        cartData.push({product,price});
    });

    localStorage.setItem('cart',JSON.stringify(cartData));
}

function loadfromstorage(){

    let inside= document.getElementById('rw');
    let cartData=JSON.parse(localStorage.getItem('cart'));

    if(cartData){
        cartData.forEach(item=>{
            let creating=document.createElement("tr");
            creating.innerHTML=
            `<td>${item.product}</td>
            <td>${item.price}</td>
            <td><a href='#' class = "delete">X</a></td>`;
            inside.appendChild(creating);
        });
    }
}

