function getRandomItem(alphabet) {

    
    let randomIndex = Math.floor(Math.random() * alphabet.length);

    
    let item = alphabet[randomIndex];
 
    return item;
};
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const array = alphabet
const result = getRandomItem(alphabet);
//alert(result);
console.log(result);


document.body.addEventListener('keyup', function(event){ 
var key = (event.key);
const result = getRandomItem(alphabet);
   //alert(key)
    if( key === result){
       // alert('match');
        var x = document.createElement("ol");
        var t = document.createTextNode("SECRET LETTER PRESSED " +key);
        x.appendChild(t);
        document.getElementById("list").appendChild(x);
        }
    }); 




