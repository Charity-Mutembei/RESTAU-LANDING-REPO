//delete functioh
// let cart = getElementById('cart');
// if (document.readyState =="loading"){
//     document.addEventListener("DOMcontentloaded", ready);
// }else{
//     ready();
// }
// function ready(){
//     var removeItemsFromCart = document.getElementById('trash')
//     console.log(removeItemsFromCart)
//     for (var i = 0; i < removeItemsFromCart.length; i++){
//         var but = removeItemsFromCart[i]
//         but.addEventListener('click', removecartitems)
//     }
// }
// function removeItemsFromCart(event){
//     var butClicked = event.target
//     butClicked.parentElement.remove()
// }

// add to cart 
// var addItemId = 0;
// function addToCart(item){
//     addItemId += 1;
//     var selectedItem = document.createElement ('div');
//     selectedItem.classList.add('cartImg');
//     selectedItem.setAttribute('id', addItemId);
//     var img = document.createElement('img');
//     img.setAttribute('src', item.childeren[0].currentSrc);
//     var cartItems = document.getElementById('cart');
//     selectedItem.append(img);
//     cartItems.append(selectedItem);
// }



//below is an incluse of all the 'add to cart' button of the same class named 'shop'
// let addToCartBtn = document.getElementsByClassName('shop');
//below is a loop 
// for (i= 0; i < addToCartBtn.length; i++){
    //below each of the 'add To Cart button is included through the i]
    // addToCartBtn[i].addEventListener('click', addToCart)
    //above, we just invested a function called 'addToCart which tells, when the respective or any of the 'Add to Cart' they add the product to the cart.
// }

//lets make the 'addToCart' function come to life

// function addToCart(event){
    //above, the word 'event' in the bracket of the created function is an argument
//    let btn = event.target
//    let btnParent = btn.ParentElement
// let btnParent= document.getElementsByClassName('card-body');
// let btnGrandParent = document.getElementsByClassName('card.h-100'); 
//    let btnGrandParent= btn.ParentElement.ParentElement
//    let itemName = btnParent.children[0].innerText
// let itemName = document.getElementsByTagName('h5');
// let itemName = btn.clossest.('classname');
   
//     console.log(itemName)

// }

//constructor 
function Pizza(size, crust, toppings, noOfPizza){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.noOfPizza = noOfPizza;
}

// var inputPizzaSize = document.getElementById('size').checked;
// var inputDrinkSize = document.getElementById('size2').checked;

var inputPizzaSize = document.querySelectorAll('#size').checked;
var inputDrinkSize = document.querySelectorAll('#size2').checked;

// console.log(inputPizzaSize);

let submitButton = document.querySelector('.shop');
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log (inputPizzaSize)
});

// var inputCrust = document.getElementsByClassName