/* global $ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
$.getJSON('data/products.json', function(products){
  
  $('<ul>');
         
        $('body').css('background', 'url("http://wallpapercave.com/wp/z6gCFAz.png") no-repeat');
            
           
  
  _.forEach(products, function(product, i, a){
     var $li = $('<li>');
     let thumbs = '/projects/product-project/img/product/thumbs/';
        $li.text(product.desc);
            $('#container').append($li);
                $('<img>').on('click', function(event){
                    $('<div>').attr('id', 'modal').appendTo($li);                 
                         $li.text(product.specs);
                }).attr('src', thumbs.concat(product.image)).prependTo($li);
           $li.css('size', )
               //have to get images to reappear after click.
            
 

      
 });
 
        });
	// ALL YOUR CODE GOES ABOVE HERE //
});

//reduce products to type
//select element to get the id for the box. search id[0].value