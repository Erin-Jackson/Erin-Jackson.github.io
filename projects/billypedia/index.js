/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('color', 'blue').css('padding-left', '15px');
        $('#section-quotes').css('color', 'blue').css('padding-left', '15px');
        $('#list-top-rated').appendTo('sidebar');
   
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording, i) {
           // console.log(recording);
           var $recording= $('<li>');
           $recording.addClass('top-rated');
           $recording.attr('id, i');
           var title = recording.title;
           $recording.text(recording.title);
           $('#list-top-rated').append($recording);
           
        });
        
        //start @ top rated
        //add li tags
        //add titles to li tags
        //we have access to data.discography.topRated
        //loop over topRated array
        //create li tag
        //add topRated titles  to li tag
        //append li tags to #list-top-rated
        
        _.forEach(topRated, function(recording, i, a){
            var $li = $('<li>');
            $li.text(recording.title);
            $li.css('color', 'purple');
           $('#list-top-rated').append($li);
             //$li.appendTo($('#list-top-rated'));
        });
    //create recordings section
    //add it below section for topRated
    //loop for recordings
    //create/style ul id for recordings
    //add it to the section recordings
    //add styled li recording for every recording   
      
       $('#section-recordings').appendTo('#list-top-rated');
    let records = data.discography.recordings;   
    _.forEach(records, function(recording, i, a){
     var $ul = $('<ul>');
        $ul.text(recording.title);
        $ul.css('font-style', 'italic');
        $('#list-top-rated').append($ul);
       
    });   
     //6  
 
 
 
 $('<img>').attr('src', 'images/album/voice-in-the-night.jpg').prependTo($("#list-top-rated"));
 $('<img>').attr('src', 'images/album/eastern-rebellion.jpg').prependTo($("#section-recordings")); 
   
   
   
     
   //7
   //find id of element
   //create event handler
   //click handler
   //loop through array of images
   //put next image into image container
   
   const images = data.images.billy;
   var url=0;
   $('#image-billy').on('click', function(event){
     if(url <= images.length -2){
        url++;
    } else {
     url=0;
 }$('#image-billy').attr('src', images[url]);       
 });
   
//$('<li>')('#list-top-rated')
$('#list-top-rated').on('click', function(event){
    if(url <= images.length -1){
        url++;
    } else {
        url = 0;
    }$('#list-top-rated').attr('src', images[url]);
});

//$('<li>')('#section-recordings');
   
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


