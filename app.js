'use strict'

var allProductNames = ['Suitcase', 'Banana Holder', 'Ipad Bathroom Mount', 'Rain Boots', 'All-in-one Breakfast Maker', 'Meatball Gum', 'Fun Chair', 'Action Figure', 'Duck Dog Muzzle', 'Dragon Meat', 'Pencap Utensils', 'Dog Shoe Sweepers', 'Pizza Cutter Scissors', 'Shark Sleeping bag', 'Baby Onsee Sweeper', 'Taun-Taun Sleeping Bag', 'Unicorn Meat', 'Tentacle USB', 'Watering Can', 'Unique Wine Glass'];
var roundsOfVotes = 25;
var allProducts = [];


var resultsNav = document.getElementById('finalResults')
// var imageIndex = document.getElementById('images');
var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');



function randomProductIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function ProductName(name, source) {
    this.name = name;
    this.images = source;
    this.votes = 0;
    this.views = 0;
    allProducts.push(this)
}

new ProductName(allProductNames[0], 'images/bag.jpg');
new ProductName(allProductNames[1], 'images/banana.jpg');
new ProductName(allProductNames[2], 'images/bathroom.jpg');
new ProductName(allProductNames[3], 'images/boots.jpg')
new ProductName(allProductNames[4], 'images/breakfast.jpg');
new ProductName(allProductNames[5], 'images/bubblegum.jpg');
new ProductName(allProductNames[6], 'images/chair.jpg');
new ProductName(allProductNames[7], 'images/cthulhu.jpg');
new ProductName(allProductNames[8], 'images/dog-duck.jpg');
new ProductName(allProductNames[9], 'images/dragon.jpg');
new ProductName(allProductNames[10], 'images/pen.jpg');
new ProductName(allProductNames[11], 'images/pet-sweep.jpg');
new ProductName(allProductNames[12], 'images/scissors.jpg');
new ProductName(allProductNames[13], 'images/shark.jpg');
new ProductName(allProductNames[14], 'images/sweep.png');
new ProductName(allProductNames[15], 'images/tauntaun.jpg');
new ProductName(allProductNames[16], 'images/unicorn.jpg');
new ProductName(allProductNames[17], 'images/usb.gif');
new ProductName(allProductNames[18], 'images/water-can.jpg');
new ProductName(allProductNames[19], 'images/wine-glass.jpg');

function renderImage() {
    var indexOne = randomProductIndex(allProducts.length);
    var indexTwo = randomProductIndex(allProducts.length);
    var indexThree = randomProductIndex(allProducts.length);

    var firstProduct = allProducts[indexOne];
    var secondProduct = allProducts[indexTwo];
    var thirdProduct = allProducts[indexThree];

    leftImage.src = firstProduct.images
    leftImage.views++
    centerImage.src = secondProduct.images
    centerImage.views++
    rightImage.src = thirdProduct.images
    rightImage.views++
}
renderImage();

function oneClickVote(click) {
    for (var i = 0; i < allProducts.length; i++) {
        if (click.target.src.includes(allProducts[i].images)) {
            allProducts[i].votes++
        }
    }

    if (roundsOfVotes > 0) {
        renderImage();
    } else {
        rightImage.removeEventListener('click', oneClickVote);
        leftImage.removeEventListener('click', oneClickVote);
        centerImage.removeEventListener('click', oneClickVote);
        renderResults();
    }
    roundsOfVotes -= 1
}

rightImage.addEventListener('click', oneClickVote);
leftImage.addEventListener('click', oneClickVote);
centerImage.addEventListener('click', oneClickVote);

function renderResults() {
    for (var i = 0; i < allProducts.length; i++) {
        var item = allProducts[i]
        var resultsRow = document.createElement('tr')
        var nameData = document.createElement('td')
        var votesData = document.createElement('td')
        nameData.textContent = (item.name + ":  ")
        resultsRow.appendChild(nameData)
        resultsNav.appendChild(resultsRow)
        votesData.textContent = item.votes
        resultsRow.appendChild(votesData)
        resultsNav.appendChild(resultsRow)
    }
}

