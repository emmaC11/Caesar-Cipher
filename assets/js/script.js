let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let max_key_length = letters.length

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

  function getInputs(){
    let message = document.getElementById('message').value;
    let key = document.getElementById('key').value;

    console.log(message,key)
 }

//encrypt decrypt functions
function getEncryptMessage()
{
    let eMessage = document.getElementById('e-message').value;
    return eMessage;
}

function getEncryptKey()
{
    let eKey = document.getElementById('e-key').value;
    if(eKey >=1 && key <= max_key_length)
    {
        return eKey;
    }
    else
    {
        alert("The key is out of range");
    }
   
}

//variable that stores all letters user can input
//variable that covers the max key length
// get encrypt input
// get encrypt key
// get decrypt input
// get decrypt key
// encryptMessage
// decryptMessage

