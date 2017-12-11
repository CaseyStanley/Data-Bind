$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { fruit: 'Banana', 	colour: 'Yellow',	cost: 1, country: 'Africa'},
  { fruit: 'Orange',  colour: 'Orange', cost: 2, country: 'Spain'},
  { fruit: 'Lime',	colour: 'Green', cost: 3, country: 'Egypt'}
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
	el: '#data-bind',
	el: '#content',
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { fruitlist: fruit }
		});
}