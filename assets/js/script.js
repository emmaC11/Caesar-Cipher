document.addEventListener("DOMContentLoaded",function() 
{
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let max_key_length = letters.length
    console.log(letters);
    console.log(max_key_length);

    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
        button.addEventListener("click",function()
        {
            console.log("the button has been clicked");
        })
    }

}
)

//variable that stores all letters user can input
//variable that covers the max key length
// get encrypt input
// get encrypt key
// get decrypt input
// get decrypt key
// encryptMessage
// decryptMessage

