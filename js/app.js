'use strict';

//Global variables

var saleProducts = [];




//constructor
function Product(name) {
  this.name = name;
  // this.path = path;
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

//populate dropdown menu
function addOption(selectbox,text,value )
{
  var optn = document.createElement('OPTION');
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

function shopProduct(){
  var productOptions = new Array('bag','banana','bathroom','boots','breakfast','bubblegum','chair','chultu','dog duck','dragon','pen','pet', 'tauntaun','unicorn','usb','water-can', 'wine glass');

  for (var i=0; i < productOptions.length;++i){
    addOption(document.drop_list.Shop_Product, productOptions[i], productOptions[i]);
  }

}