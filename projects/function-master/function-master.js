
    function objectValues(data){
     var array = Object.values(data);
       return array;
    }
    
    
    
      function keysToString(data){
     return Object.keys(data).join(' ');
         
            
             
       
      
      }
      
      function valuesToString(data){
         var toArray=Object.values(data);
         var strArray =[];
         for(var i = 0; i<toArray.length; i++){
         if(typeof toArray[i]==='string'){
         strArray.push(toArray[i]);
        
         }
      }
      var toString=strArray.join(' ')
      return toString
      }
      
      
      function arrayOrObject(data){
          if(Array.isArray(data))
          return "array";
          if (typeof data ==='object')
          return 'object';
          
      }
      
      
      function capitalizeWord(string){
       var newArray = [];
       var modified=string.charAt(0).toUpperCase() + string.substring(1);
       newArray.push(modified);
       return newArray;
    
      }
      
      
  function capitalizeAllWords(words){
  var newArray = words.toLowerCase().split(' ');
 for (var i = 0; i < newArray.length; i++) {
   if (newArray.length[i] < newArray.length) {
     newArray[i].charAt(0).toUpperCase();     
   }
      words = newArray.join(' '); 
 }
return words;
 
      //finish
  }
    

   function welcomeMessage (object){
    var name= Object.charAt(0).toUpperCase()+ Object.substring(1);
       return 'Welcome' +' '+ object.name + '!';
   }//finish
 
 function profileInfo(name, species){
     return name.charAt(0).toUpperCase() + "is a " + species.charAt(0).toUpperCase();
 }
 function maybeNoises(object, noises){
     
 }
 function hasWord(string, words){
     if(string)
 }
 
 function addFriend(name, object){
   
   object.friends.push(name);
   return object
     
     }
     
         
     
 
 function isFriend(name, object){
     if(name === object){
        
         return true;
     } else {
         return false;
     }
     
 }
 function nonFriends(){
     
 }
 
 function updateObject(){
     
 }
 function removeProperties(){
     
 }