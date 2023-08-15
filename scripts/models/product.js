// Product JS contains the structure of a pizza Object 
// Pizza object - ID,name, 
class Product{
    constructor(id,name,desc,price,url){
this.id = id;
this.name = name;
this.desc =  desc;
this.price =  price;
this.url = url;
this.isAddedInCart = false;
    };
    //   isToggle() 
    //   {
    //     Product.isAddedInCart = !Product.isAddedInCart;
    // }

}
export default Product;