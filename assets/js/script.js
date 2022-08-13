let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let max_key_length = letters.length
let shiftedLetters = "";


//home page modals
const openModal = document.getElementById('help-modal');
const closeModal = document.getElementsByClassName('close');
const modal = document.getElementById('helpModal');

// openModal.addEventListener("click", () => {
//     modal.classList.add("show");
//   });
  
  // Close Modal
//   closeModal.addEventListener("click", () => {
//     modal.classList.remove("show");
//   });


//ENCRYPT DECRYPT BUTTONS
const encrypt = document.getElementById('encrypt-btn');
const decrypt = document.getElementById('decrypt-btn');
const generateBtn = document.getElementById('encrypt-decrypt');

//ENCRYPT DECRYPT SECTION
let message = document.getElementById('message').value;
let key = document.getElementById('key').value;
let ciphertext = document.getElementById('ciphertext');

 //encrypt.addEventListener("click", modeDecrypt)
 encrypt.addEventListener("click", modeEncrypt)

    encrypt.addEventListener('click', () => {
        console.log("clicked")
    })


 function modeEncrypt()
 {
    let mode = "encrypt";
    console.log(mode);
    return mode
    
 }

 function modeDecrypt()
 {
    let mode = "decrypt";
    console.log(mode);
    return mode
 }


//ENCRYPT DECRYPT INPUTS
function getMessage(){
    // get text from input fields
    let message = document.getElementById('message').value;
    console.log(message);
    return message

 }

 function getKey(){

    let key = +document.getElementById('key').value;
    if(key >= 1 && key <= max_key_length)
    {
        console.log("key is returned")
        return key
    }
    else
    {
        alert(`The key value must be greater than 0 and less than ${max_key_length}`);
        
    }
    console.log(key);
    console.log(typeof key)
 }

 function encryptMessage(message)
 {

   let translated = ""

   //LOOP THROUGH EACH CHARACTER OF MESSAGE
   for (let letter of message)
   {
      
      //GETS INDEX OF LETTER IN LETTERS STRING
      let letterIndex = letters.indexOf(letter)
      console.log(letterIndex)

      //IF LETTER IS NOT RECOGNISED IE IS A SYMBOL OR NUMBER STAYS THE SAME
      if (letterIndex == -1)
      {
         translated += letter
      }

      
   }
   console.log(message)
 }

//variable that stores all letters user can input
//variable that covers the max key length
// get encrypt input
// get encrypt key
// get decrypt input
// get decrypt key
// encryptMessage
// decryptMessage

