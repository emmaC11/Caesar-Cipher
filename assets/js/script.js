let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let max_key_length = letters.length;

//ENCRYPT DECRYPT BUTTONS
const encrypt = document.getElementById('encrypt-btn');
const decrypt = document.getElementById('decrypt-btn');
const generateBtn = document.getElementById('encrypt-decrypt');

//ENCRYPT DECRYPT SECTION
const cipherContent = document.getElementById('cipher-container');
let message = document.getElementById('message');
let key = document.getElementById('key').value;
let ciphertext = document.getElementById('ciphertext');
const heading = document.getElementById('main-title');
const introText = document.getElementById('user-options');
const messageLabel = document.getElementById('messageLabel');
const outputLabel = document.getElementById('outputLabel');
const encryptDecryptButton = document.getElementById('encrypt-decrypt');
const returnArrow = document.getElementById('return');
let cipherMode = "";

//footer
const footer = document.querySelector('footer');

//HELP PAGE TYPEWRITER EFFECTS
const typeText = document.getElementById('typetext');
const helpPhrases = ['Click button below', 'Click! Click!', 'Click Now!'];

//item in array
let i = 0;
//letter
let x = 0;
let currentPhrase = [];
let isDeletingLetter = false;

//LTYPEWRITER FUNCTION - referenced following video https://www.youtube.com/watch?v=mULM6KcF_mo
function typewriter() {
   //LOOP THROUGH PHRASES ARRAY
   typeText.innerText = currentPhrase.join('');

   //loop through items in phrases array
   if (i < helpPhrases.length) {

      //push letters to currentPhrase array
      if (!isDeletingLetter && x <= helpPhrases[i].length) {
         currentPhrase.push(helpPhrases[i][x]);
         x++;
      }

      //if reach end of phrase, need to delete letters 
      if (isDeletingLetter && x <= helpPhrases[i].length) {
         currentPhrase.pop(helpPhrases[i][x]);
         x--;
      }

      // if x is equal to the length of the first phrase, increment to move to next item in array
      if (x == helpPhrases[i].length) {
         //need to delete existing phrase before moving onto next
         isDeletingLetter = true;
      }

      //when all letters are removed, move onto next item in array, now adding letters
      if (isDeletingLetter && x === 0) {
         currentPhrase = [];
         isDeletingLetter = false
         i++;

         //if reach end of array, reset back to 0
         if (i === helpPhrases.length) {
            i = 0;
         }
      }


   }

   if (isDeletingLetter) {
      setTimeout(typewriter, 150);
   } else {
      setTimeout(typewriter, 200);
   }

}
typewriter();


//HIDE BUTTONS WHEN CLICKED
function hideButtons() {
   if (encrypt.style.display === "none" && decrypt.style.display === "none" && introText.style.display === "none") {
      encrypt.style.display = "block";
      decrypt.style.display = "block";
      introText.style.display = "block";
   } else {
      encrypt.style.display = "none";
      decrypt.style.display = "none";
      introText.style.display = "none";
   }
}


//DISPLAYS CAESAR CIPHER
function displayCipher() {
   if (cipherContent.style.display === "none") {
      cipherContent.style.display = "flex";
   } else {
      cipherContent.style.display = "none";
   }

}

//GET MESSAGE FROM INPUT FIELD
function getMessage() {
   // get text from input fields
   let message = document.getElementById('message').value;
   return message;

}

//GET KEY FROM INPUT FIELD
function getKey() {

   let key = +document.getElementById('key').value;
   if (key >= 1 && key <= max_key_length) {
      console.log("key is returned");
      return key;
   }
}


//ENCRYPT MESSAGE
function encryptMessage(message, key) {

   let translated = "";

   //LOOP THROUGH EACH CHARACTER OF MESSAGE
   for (let letter of message) {

      //GETS INDEX OF LETTER IN LETTERS STRING
      let letterIndex = letters.indexOf(letter);

      //IF LETTER IS NOT RECOGNISED IE IS A SYMBOL OR NUMBER STAYS THE SAME
      if (letterIndex == -1) {
         translated += letter;
      }
      //SHIFT LETTER BY KEY NUMBER
      else {
         letterIndex += key;
      }

      //EXCEPTION HANDLING IF LETTER EXCEEDS LENGHT OF LETTER STRING DUE TO KEY VALUE
      if (letterIndex >= letters.length) {
         letterIndex -= letters.length;
      } 
      //ADDS THE SHIFTED LETTERS TO THE TRANSLATED VARIABLE
      translated += letters[letterIndex];


   }

   console.log(translated);

   if (translated.includes("undefined")) {
      let newTranslated = translated.replaceAll('undefined', '');
      ciphertext.textContent = newTranslated;
   } else {
      ciphertext.textContent = translated;
   }  
}

//DECRYPT MESSAGE
function decryptMessage(message, key) {
   let translated = ""
   key = -key;

   for (let letter of message) {

      //GETS INDEX OF LETTER IN LETTERS STRING
      let letterIndex = letters.indexOf(letter);

      //IF LETTER IS NOT RECOGNISED IE IS A SYMBOL OR NUMBER STAYS THE SAME
      if (letterIndex == -1) {
         translated += letter;
      }
      //SHIFT LETTER BY KEY NUMBER
      else {
         letterIndex += key;
      }

      //EXCEPTION HANDLING IF LETTER EXCEEDS LENGHT OF LETTER STRING DUE TO KEY VALUE
      if (letterIndex >= letters.length) {
         letterIndex -= letters.length;
      } else if (letterIndex < 0 && letterIndex != -1) {
         letterIndex += letters.length
      }

      //ADDS THE SHIFTED LETTERS TO THE TRANSLATED VARIABLE
      translated += letters[letterIndex];
   }

   console.log(translated);
   if (translated.includes("undefined")) {
      let newTranslated = translated.replaceAll('undefined', '')
      ciphertext.textContent = newTranslated;
   } else {
      ("this is the replace all else")
      ciphertext.textContent = translated;
   }


}

//ENCRYPT BUTTON EVENT LISTENER
encrypt.addEventListener('click', () => {
   displayCipher();
   heading.innerText = "Encrypt";
   if (heading.innerText === "Encrypt") {
      cipherMode = "encrypt";
   }

   //DISPLAY RETURN ARROW WHEN CLICKED
   returnArrow.style.display = "block";
   footer.style.backgroundImage = "none"
})

//DECRYPT BUTTON EVENT LISTENER
decrypt.addEventListener('click', () => {
   displayCipher();
   heading.innerText = "Decrypt";
   messageLabel.innerText = "Message to decrypt:";
   encryptDecryptButton.innerText = "Decrypt"
   outputLabel.innerText = "Decrypted Text:";

   //DISPLAY RETURN ARROW WHEN CLICKED
   returnArrow.style.display = "block";
   footer.style.backgroundImage = "none";

})


//STORE CIPHERTEXT OUTPUT IN VARIABLE & DISPLAY CHANGES IN FUNCTION
let ciphertextoutput = document.getElementById('output');
let spinner = document.getElementById('load');
let timeout = "";

function displayOutput() {
   ciphertextoutput.style.display = "block"
   spinner.style.display = "none";
}

function loadEffect() {
   timeout = setInterval(displayOutput, 3000);
   spinner.style.display = "block"
   ciphertextoutput.style.display = "none"
}


//ENCRYPT DECRYPT BUTTON EVENT LISTENER
generateBtn.addEventListener('click', () => {
   let includesSpaces = message.value.includes(" ")

   if (getMessage() === "" || getKey() === undefined || includesSpaces) {
      alert(`Fields cannot be left blank\nFields cannot have spaces\nThe key value must be greater than 0 and less than ${max_key_length}`);
   } else {

      if (cipherMode === "encrypt") {
         encryptMessage(getMessage(), getKey());

      } else {
         decryptMessage(getMessage(), getKey());
      }
      loadEffect();

   }
})
