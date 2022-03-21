//delete functioh
let cart = getElementById('cart');
if (document.readyState =="loading"){
    document.addEventListener("DOMcontentloaded", ready);
}else{
    ready();
}
function ready(){
    var removeItemsFromCart = document.getElementById('trash')
    console.log(removeItemsFromCart)
    for (var i = 0; i < removeItemsFromCart.length; i++){
        var but = removeItemsFromCart[i]
        but.addEventListener('click', removecartitems)
    }
}
function removeItemsFromCart(event){
    var butClicked = event.target
    butClicked.parentElement.remove()
}