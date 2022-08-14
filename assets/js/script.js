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
const cipherContent = document.getElementById('cipher-container');
let message = document.getElementById('message').value;
let key = document.getElementById('key').value;
let ciphertext = document.getElementById('ciphertext');
const heading = document.getElementById('main-title');
const introText = document.getElementById('user-options')

 //encrypt.addEventListener("click", modeDecrypt)
 encrypt.addEventListener("click", modeEncrypt)

    encrypt.addEventListener('click', () => {
        console.log("this is the encrypt event listerner")
        displayCipher();
        heading.innerText = "Encrypt"
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


 //HIDE BUTTONS WHEN CLICKED
 function hideButtons()
{
   if(encrypt.style.display === "none" && decrypt.style.display === "none" && openModal.style.display === "none" && introText.style.display === "none")
   {
      encrypt.style.display = "block";
      decrypt.style.display = "block";
      openModal.style.display = "block";
      introText.style.display = "block"
   }
   else
   {
      encrypt.style.display = "none"
      decrypt.style.display = "none"
      openModal.style.display = "none"
      introText.style.display = "none"
   }
}

function displayCipher()
{
   if(cipherContent.style.display === "none")
   {
      cipherContent.style.display = "flex";
      console.log("this is the if")
   }
   
   else
   {
      cipherContent.style.display = "none";
      console.log("this is the else")
   }

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

 function encryptMessage(message,key)
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
      //SHIFT LETTER BY KEY NUMBER
      else
      {
         letterIndex += key
         console.log(letterIndex);
      }

      //EXCEPTION HANDLING IF LETTER EXCEEDS LENGHT OF LETTER STRING DUE TO KEY VALUE
      if (letterIndex >= letters.length)
      {
         letterIndex -= letters.length;
         console.log(letterIndex)
      }
      else if(letterIndex < 0)
      {
         letterIndex += letters.length
         console.log(letterIndex)
      }

      //ADDS THE SHIFTED LETTERS TO THE TRANSLATED VARIABLE
      translated += letters[letterIndex]
   }

   console.log(translated);
   return translated;

   console.log(message)
   console.log(key)
 }

//variable that stores all letters user can input
//variable that covers the max key length
// get encrypt input
// get encrypt key
// get decrypt input
// get decrypt key
// encryptMessage
// decryptMessage

