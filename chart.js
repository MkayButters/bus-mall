'use strict'

var canvasEl = document.getElementById('chart');
var ctx = canvasEl.getContext('2d');


var chartConfig = {
  type: 'bar',
  data: {

    labels: ['Suitcase', 'Banana Holder', 'Ipad Bathroom Mount', 'Rain Boots', 'All-in-one Breakfast Maker', 'Meatball Gum', 'Fun Chair', 'Action Figure', 'Duck Dog Muzzle', 'Dragon Meat', 'Pencap Utensils', 'Dog Shoe Sweepers', 'Pizza Cutter Scissors', 'Shark Sleeping bag', 'Baby Onsee Sweeper', 'Taun-Taun Sleeping Bag', 'Unicorn Meat', 'Tentacle USB', 'Watering Can', 'Unique Wine Glass'],
    datasets: [{
      label: '# of Votes',

      data: [12, 19, 3, 5, 2, 3, 500],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
var chart = new Chart(ctx, chartConfig);