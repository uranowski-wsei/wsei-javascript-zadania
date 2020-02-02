//Task 0
function Basket(){
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    this.products.push({
        name: name,
        price: price
    })
    this.sum += price;
}

Basket.prototype.showBasket = function(){
    this.products.forEach(function(product){
        console.log('Nazwa: ' + product.name + ' Cena: ' + product.price);
    })
    console.log('Do zapłaty: ' + this.sum);
}




