/*product controller -> its a glue b/w view and model 
controller -> I/O view layer 
*/
import Product from "../models/product.js";
import productOperations from "../services/product-operations.js";
//Data Exchange b/w View and Model
async function loadPizzas() {
  const pizzas = await productOperations.loadProducts();
  console.log("Pizzas are", pizzas);
  pizzas.forEach((pizza) => {
    preparePizzaCard(pizza);
  });
}
loadPizzas();

function preparePizzaCard(pizza) {
  const outputDiv = document.querySelector('#output');
  const colDiv = document.createElement('div');
  colDiv.className = 'col-4';
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card alert alert-info m-2';
  cardDiv.style = 'width : 18 rem;';
  colDiv.appendChild(cardDiv);
  const img = document.createElement('img');
  img.src = pizza.url;
  img.className = 'card-img-top';
  cardDiv.appendChild(img);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardDiv.appendChild(cardBody);
  const h5 = document.createElement("h5");
  h5.className = 'card-title';
  h5.innerText = pizza.name;
  const pTag = document.createElement('p');
  pTag.className = 'card-text';
  pTag.innerText = pizza.desc;
  const button = document.createElement('button');
  button.setAttribute("product-id", pizza.id);
  button.addEventListener("click", addpizzaToCart);
  button.innerText = "Add to Cart";
  button.className = "btn btn-outline-primary";
  cardBody.appendChild(h5);
  cardBody.appendChild(pTag);
  cardBody.appendChild(button);
  outputDiv.appendChild(colDiv); // html vli id ko acces denge  poore card ka
  //colDiv.appendChild(cardBody);
return outputDiv;
};
 function addpizzaToCart() {
    const pizzaId = this.getAttribute("product-id");
    console.log("pizza id is ", pizzaId);
    const pizze = productOperations.searchProducts(pizzaId);
    console.log("pizza", pizze);
    // productOperations.AddToCart(pizze);
    pizze.isAddedInCart = !pizze.isAddedInCart;
    console.log(pizze.isAddedInCart);
    if (pizze.isAddedInCart) {
      this.className = "btn btn-outline-danger";
      this.innerText = "Remove to Cart";
      productOperations.addToCart(pizze);
    }
    else {
      this.className = "btn btn-outline-primary";
      this.innerText = "Add to Cart";
      productOperations.removeFromCart(pizze);
    }
    printCart();
  }

function printCart(pizza) {
  const cartProducts = productOperations.getProductsInCart();
  console.log(cartProducts);
  const cart = document.querySelector("#basket");
  cart.innerHTML ='';
  cartProducts.forEach(el =>{
    const pizrow = document.createElement("div");
    pizrow.className = 'row';
    const pizname = document.createElement('li')
    pizname.className = 'col-9 text-left';
    pizname.innerText = el.name;
    const pizprice =  document.createElement('div')
    pizprice.className = 'col-3 text-right';
    pizprice.innerText = `$ ${el.price}`;
      //   li.innerText = `${product.name}    =  $    ${product.price}`;
  //   basket.appendChild(li);
  // }
  pizrow.appendChild(pizname);
  pizrow.appendChild(pizprice);
  cart.appendChild(pizrow);

});
    const totalPizza = cartProducts.length;
    const total =  document.querySelector('#total') ;
    total.innerHTML = '';
    total.innerText = totalPizza;

var amount = cartProducts.reduce((total,p) => total + parseFloat(p.price),0);
var totalAmount =  amount + amount*(0.18);
const pizzaAmount = document.querySelector('#amount');
pizzaAmount.innerHTML ='';
pizzaAmount.innerText = `$ ${amount}`;
const gstamount = document.querySelector('#gst');
gstamount.innerHTML ='';
gstamount.innerText = `$ ${amount *(0.18)}`;
const totamount  = document.querySelector('#totamount');
totamount.innerHTML = '';
totamount.innerText = `$ ${totalAmount}`;

}
// var rzp1 = new Razorpay(options);
// document.getElementById('rzp-button1').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();


/* pizza.foreach(e => {const.....}) */
//we can use for each instead of for loop.

/* const rowdiv =  document.getElementById('loaddata');
   let pizzalen = pizza.length;
  
  for(let index = 0 ; index< pizzalen ; index++){
  const col = document.createElement('div');
  col.classList.add('col-4')
  col.innerHTML = `
  <div class="card mt-2">
  <img src="${pizza[index].url} alt="..." height="200px" ;
  width="200px">
  <div class="card-body">
  <h5 class="card-title"> ${pizza[index].name} </h5>
  <p class="card-text">${pizza[index].desc}</p>
  <a href="#" class="btn btn-primary">Add to cart</a>
  </div>`;
  rowdiv.appendChild(col);
  } */
