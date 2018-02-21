'use strict';

//Global variables

var saleProducts = [];




//constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  saleProducts.push(this);
}

//adding-product  objects
function addNewProduct() {
  new Product('bag', 'img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulu', 'img/cthulhu.jpg'),
  new Product('dog duck', 'img/dog-duck.jpg'),
  new Product('dragon', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('pet', 'img/pet-sweep.jpg'),
  new Product('tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('usb', 'img/usb.gif'),
  new Product('water-can', 'img/water-can.jpg'),
  new Product('winer-glass', 'img/wine-glass.jpg');
}
addNewProduct();

console.log(saleProducts);

// set global variables
var productOptions = [];
var btn = document.getElementById('btn');
var qty = document.getElementById('qty');

// populate dropdown menu
function addOption(selectbox,text,value )
{
  var optn = document.createElement('OPTION');
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

function shopProduct(){

  for(var i = 0; i < saleProducts.length; i++) {
    productOptions.push(saleProducts[i].name);
  }

  for (var k=0; k < productOptions.length;++k){
    addOption(document.drop_list.Shop_Product, productOptions[k], productOptions[k]);
  }
}

// set local storage for shopping cart
if(localStorage.cart) {
  var cart = localStorage.cart.split(',');
} else {
  cart = [];
}