//Production CRUD operations
// C -Create ,R- Read , U- Update, D- Delete
// contains the logic for fetching
// Adding, sorting , searching
// deleting , Updating
/* 
It talks to  the network layer to  bring the  json and
convert json into objects  and vice versa
*/
import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

const productOperations = {
  products: [],
  carts:[],
  
  getProductsInCart(){
    const productInBasket = this.carts.filter(product => product.isAddedInCart);
    return productInBasket;
    },
    addToCart(product){
      this.carts.push(product);
    },
  removeFromCart(product){
    this.carts = this.carts.filter(pizza => pizza.id != product.id)
  },
  async loadProducts() {
    const pizzas = await makeNetworkCall();
    const pizzaArray = pizzas['Vegetarian'];
    const productsArray = pizzaArray.map(pizza => {
        const currentPizza = new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
        return currentPizza;
    });
    this.products = productsArray;
    console.log('ppppp',this.pizzass)
    console.log("Product Array", productsArray);
    return productsArray; //WRAP IN PROMISE
  },
  async sortProducts() {},  

  searchProducts(pizzaId) {
    // console.log('ppppp',this.pizzass)
    // console.log('Search Pizza :::::',id);
    const prod =  this.products.find(pizza=>pizza.id==pizzaId);
    //prod.isAddedInCart = true;
    console.log('array',this.prod);
   return prod;
  },
};
export default productOperations;
