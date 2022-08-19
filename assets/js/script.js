let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let max_key_length = letters.length
let shiftedLetters = "";




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
const messageLabel = document.getElementById('messageLabel');
const outputLabel = document.getElementById('outputLabel');
const encryptDecryptButton = document.getElementById('encrypt-decrypt');
const returnArrow = document.getElementById('return');
let cipherMode = ""

//HELP PAGE TYPEWRITER EFFECTS
const typeText = document.getElementById('typetext');
const helpPhrases = ['Click button below', 'Click! Click!', 'Click Now!']; 

//item in array
let i = 0
//letter
let x = 0
let currentPhrase = [];
let isDeletingLetter = false

//LTYPEWRITER FUNCTION
function typewriter() {
   //LOOP THROUGH PHRASES ARRAY
   typeText.innerText = currentPhrase.join('');
   //loop through items in phrases array
   if(i < helpPhrases.length){
      // console.log(helpPhrases[i]);

      //[i] is first item in array
      if(!isDeletingLetter && x <= helpPhrases[i].length){
         currentPhrase.push(helpPhrases[i][x])
         // console.log(helpPhrases[i][x]);
         // console.log(currentPhrase);
         x++;
      }

      //if reach end of phrase, need to delete letters 
      if(isDeletingLetter && x <= helpPhrases[i].length){
         currentPhrase.pop(helpPhrases[i][x])
         x--;
      }

      //MOVE ONTO SECOND ITEM IN ARRAY

      // if x is equal to the length of the first phrase, increment to move to next item in array
      if(x == helpPhrases[i].length){
         //need to delete existing phrase before moving onto next
         isDeletingLetter = true;
      }

      
   }
   
    setTimeout(typewriter,500)
}

typewriter();


//CAPTURES MODE - ENCRYPT OR DECRYPT
function modeEncrypt() {
   let mode = "encrypt";
   console.log(mode);
   return mode

}

function modeDecrypt() {
   let mode = "decrypt";
   console.log(mode);
   return mode
}


//HIDE BUTTONS WHEN CLICKED
function hideButtons() {
   if (encrypt.style.display === "none" && decrypt.style.display === "none"  && introText.style.display === "none") {
      encrypt.style.display = "block";
      decrypt.style.display = "block";
      introText.style.display = "block"
   } else {
      encrypt.style.display = "none"
      decrypt.style.display = "none"
      introText.style.display = "none"
   }
}


//DISPLAYS CAESAR CIPHER
function displayCipher() {
   if (cipherContent.style.display === "none") {
      cipherContent.style.display = "flex";
      console.log("this is the if")
   } else {
      cipherContent.style.display = "none";
      console.log("this is the else")
   }

}

//GET MESSAGE FROM INPUT FIELD
function getMessage() {
   // get text from input fields
   let message = document.getElementById('message').value;
   console.log(message);
   return message

}

//GET KEY FROM INPUT FIELD
function getKey() {

   let key = +document.getElementById('key').value;
   if (key >= 1 && key <= max_key_length) {
      console.log("key is returned")
      return key
   } else {
      alert(`The key value must be greater than 0 and less than ${max_key_length}`);

   }
   console.log(key);
   console.log(typeof key)
}


//ENCRYPT/DECRYPT MESSAGE
function encryptMessage(message, key) {

   let translated = ""

   //LOOP THROUGH EACH CHARACTER OF MESSAGE
   for (let letter of message) {

      //GETS INDEX OF LETTER IN LETTERS STRING
      let letterIndex = letters.indexOf(letter)
      console.log(letterIndex)

      //IF LETTER IS NOT RECOGNISED IE IS A SYMBOL OR NUMBER STAYS THE SAME
      if (letterIndex == -1) {
         translated += letter
      }
      //SHIFT LETTER BY KEY NUMBER
      else {
         letterIndex += key
         console.log(letterIndex);
      }

      //EXCEPTION HANDLING IF LETTER EXCEEDS LENGHT OF LETTER STRING DUE TO KEY VALUE
      if (letterIndex >= letters.length) {
         letterIndex -= letters.length;
         console.log(letterIndex)
      } else if (letterIndex < 0) {
         letterIndex += letters.length
         console.log(letterIndex)
      }

      //ADDS THE SHIFTED LETTERS TO THE TRANSLATED VARIABLE
      translated += letters[letterIndex]
   }

   console.log(translated);
   ciphertext.textContent = translated;
   return translated;

   console.log(message)
   console.log(key)
}

function decryptMessage(message,key)
{
   let translated = ""
   key = -key

   for (let letter of message) {

      //GETS INDEX OF LETTER IN LETTERS STRING
      let letterIndex = letters.indexOf(letter)
      console.log(letterIndex)

      //IF LETTER IS NOT RECOGNISED IE IS A SYMBOL OR NUMBER STAYS THE SAME
      if (letterIndex == -1) {
         translated += letter
      }
      //SHIFT LETTER BY KEY NUMBER
      else {
         letterIndex += key
         console.log(letterIndex);
      }

      //EXCEPTION HANDLING IF LETTER EXCEEDS LENGHT OF LETTER STRING DUE TO KEY VALUE
      if (letterIndex >= letters.length) {
         letterIndex -= letters.length;
         console.log(letterIndex)
      } else if (letterIndex < 0) {
         letterIndex += letters.length
         console.log(letterIndex)
      }

      //ADDS THE SHIFTED LETTERS TO THE TRANSLATED VARIABLE
      translated += letters[letterIndex]
   }

   console.log(translated);
   ciphertext.textContent = translated;
   return translated;

}

//ENCRYPT BUTTON EVENT LISTENER
encrypt.addEventListener('click', () => {
   console.log("this is the encrypt event listerner")
   modeEncrypt();
   displayCipher();
   heading.innerText = "Encrypt"
   if(heading.innerText === "Encrypt")
   {
      cipherMode = "encrypt"
   }
   else{
      console.log("the heading is not encrypt")
   }

   //DISPLAY RETURN ARROW WHEN CLICKED
   returnArrow.style.display = "block";
})

//DECRYPT BUTTON EVENT LISTENER
decrypt.addEventListener('click', () => {
   console.log("this is the decrypt event listener");
   modeDecrypt();
   displayCipher();
   heading.innerText = "Decrypt";
   messageLabel.innerText = "Message to decrypt:";
   encryptDecryptButton.innerText = "Decrypt"
   outputLabel.innerText = "Decrypted Text:"

   //DISPLAY RETURN ARROW WHEN CLICKED
   returnArrow.style.display = "block";

})

//ENCRYPT DECRYPT BUTTON EVENT LISTENER
generateBtn.addEventListener('click', () => {
   console.log("this is the decrypt event listener");
   console.log(`the cipher mode is ${cipherMode}`)
   if(cipherMode === "encrypt")
   {
      encryptMessage(getMessage(), getKey());
   }
   else {
      decryptMessage(getMessage(), getKey());
   }

   //DISPLAY LABEL WHEN BUTTON IS CLICKED
   outputLabel.style.display = "block";

  
   
   
})
