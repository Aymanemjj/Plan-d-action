function localStorageGet(key){
    try {
        const data = localStorage.getItem(key);
        if(data === null){
            return [];
        }else{
            let parse = JSON.parse(data)
            return parse;
        }
        

    } catch (error) {
        console.log(`error handeling key: ${key}. reseting`);
        return [];
        
    }
}

function localStorageSet(key) {
    localStorage[key] = JSON.stringify(cart);
}


let cart = localStorageGet("cartList");
let total = 0;

const buttons = document.querySelectorAll(".add");
const cartList = document.getElementById("cartList");
const totalSpan = document.getElementById("total");

cart.forEach(item => total += item.price);
updateCart();

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let name = btn.getAttribute("name");
        let price = Number(btn.getAttribute("price"));

        let item = {
            name: name,
            price: price
        };

        cart.push(item);

        total += price;

        localStorageSet("cartList");
        updateCart();
    });
});


function updateCart() {
    cartList.innerHTML = "";

    cart.forEach(item => {
        let i = cart.indexOf(item);
        cartList.innerHTML += 
                `<li>
                    ${item.name} - ${item.price}$
                    <button class="delete" order="${i}">X</button>
                </li>`
    });

    totalSpan.innerText = total;

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("order");
            total -= cart[index].price;
            cart.splice(index, 1);
            localStorageSet("cartList");
            updateCart();
        });
    });
}

