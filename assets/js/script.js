document.addEventListener("DOMContentLoaded",function() 
{
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
        button.addEventListener("click",function()
        {
            console.log("the button has been clicked");
        })
    }
})