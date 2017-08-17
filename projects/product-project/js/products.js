/* global $ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
$.getJSON('data/products.json', function(products){
  
  $('<ul>');
  
  
  _.forEach(products, function(product, i, a){
     var $li = $('<li>');
     let thumbs = '/projects/product-project/img/product/thumbs/';
        $li.text(product.desc);
            $('#container').append($li);
                $('<img>').attr('src', thumbs.concat(product.image)).prependTo($li);

     
        
});

    
    
    
});
	// ALL YOUR CODE GOES ABOVE HERE //
});

//reduce products to type