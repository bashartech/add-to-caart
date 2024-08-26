let cart = []

const addToCart = (productName, productPrice) => {
    const existingProduct = cart.find((items) => items.name === productName)
    if(existingProduct){
        existingProduct.quantity += 1
    }else{
        cart.push({
            name : productName,
            price : parseFloat(productPrice),
            quantity : 1
})
    }
    updateCart()
}

const updateCart = () => {
    const cartItems = document.querySelector("#cart-items")

    cartItems.innerHTML = ""
    let total = 0
    cart.forEach(item  =>{
        const list = document.createElement("li")
        list.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        cartItems.appendChild(list)
        total += item.price * item.quantity
        
    } 
)
const totalPrice = document.getElementById('total-price');
if (totalPrice) {
    totalPrice.textContent = `$${total.toFixed(2)}`;
}
}
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", ()=>{
        const product = button.closest(".product") 
        if (product) {
            const name = product.getAttribute("data-name");
            const price = product.getAttribute("data-price");
            addToCart(name, price);
        }
    })
  
})

