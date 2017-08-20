function objectValues (object){
    var values = Object.values(object);
    values.push();
    return values;
}

function keysToString (object){
  var keys = Object.keys(object);
  return keys.join(' ');
}

function valuesToString (object){
 var newArray =[];
    for(var key in object){
     if (typeof object[key] === "string"){
         newArray.push(object[key]);
     }
    }return newArray.join(' ');
}

function arrayOrObject(argument){
    if(Array.isArray(argument)){
        return 'array';
    } else if (typeof argument === 'object') {
        return 'object';
    }   
}

function capitalizeWord(string){
   
return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
}


function capitalizeAllWords(arg) {
   var wordArray = arg.split(" ");
   var capWordArray = [];
   for (var i = 0; i < wordArray.length; i++) {
       var caps = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1);
       capWordArray.push(caps);
   }
   var newCapString = capWordArray.join(" ");
   return newCapString;
}
    



   function welcomeMessage(arg) {
   var name = arg["name"].charAt(0).toUpperCase() + arg["name"].substring(1);
   return "Welcome " + name + "!";  
   }

   
function profileInfo(arg) {
   var name = arg["name"].charAt(0).toUpperCase() + arg["name"].substring(1);
   var species = arg["species"].charAt(0).toUpperCase() + arg["species"].substring(1);
   return name + " is a " + species;
}

function maybeNoises(arg) {
   if (Object.keys(arg).length === 0) {
   return "there are no noises";
   } else if (arg["noises"].length > 1) {
       return arg["noises"].join(" ");
   } else if (arg["noises"].length === 0) {
   return "there are no noises";
   }   
}


function hasWord (string,word){
    if (string.includes(word)){
        return true;
    }   else {
        return false;
    }
}


function addFriend (name, object){
    object.friends.push(name);
    return object;
}


function isFriend(name, obj) {
   if (Object.keys(obj).length < 1) {
       return false;
   } else if (Object.keys(obj).length > 0) {
       for (var i = 0; i < obj["friends"].length; i++) {
           if (obj["friends"][i] === name) {
               return true;
           }
       }
       return false;
   }
}

//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends (name, list) {
  var result = [];
  for (var i = 0; i <= list.length; i++) {
    if (!isFriend(name, list[i]) && list[i].name !== name) {
      result.push(list[i].name);
    }
  }
  return result;
}


function updateObject(obj, key, val) {
   obj[key] = val;
   return obj;
}


function removeProperties(object, array) {
    for (var i = 0; i <= array.length; i++) {
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    } return object;
}


function dedup(data) {
   var dedupSet = new Set(data);
   var dedupArray = Array.from(dedupSet);
   return dedupArray;
}
 