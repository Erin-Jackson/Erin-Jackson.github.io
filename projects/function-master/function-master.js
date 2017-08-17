function objectValues (object){
    var values = Object.values(object);
    values.push();
    return values;
}


//keysToString() : Should take an object and return all its keys in a string each separated with a space 
function keysToString (object){
    Object.keys(object).join(' ');
 return object;
}


//valuesToString() : Should take an object and return all its string values in a string each separated with a space
function valuesToString (object){
  Object.keys(object).concat(' ')
  return object;
}

function arrayOrObject(argument){
    if(Array.isArray(argument)){
    return 'array';
    } else if (typeof argument === 'object') {
        return 'object';
    }   
}

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized 
function capitalizeWord(string){
    string.toUpperCase(string[0]);
return string;
}

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords (string){
    
}


//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!
function welcomeMessage(object){
    var names = object.name;
    return 'Welcome' + names + '!';
}

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object){
    
}


//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises' 