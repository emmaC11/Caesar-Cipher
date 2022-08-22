# Caesar Cipher
This application can convert words & sentences into a secret code. It can also convert secert codes back into it's original text.
The secret codes can only be understood if the user knows the key to the codes

# **User Experience & Design**

# User Stories
* As a first time user, I want to learn about a Caesar Cipher is & how to use one.
* As a first time user, I want to encrypt a string of text.
* As a first time user, I want to decrypt a string of text.
* As a first time user, I want to navigate throughout the site to complete different actions.
* As a first time user, I want to view the website on all my devices (Iphone 10, Surface Pro 7+, 32 inch monitor)

## Structure
This is a 2 page website, that has a simple user-interface making it easier for users to navigate the website and choose an action according to their needs. The home screen contains 3 buttons that a user can choose from. A user can choose to encrypt a message, decrypt a message, or click the help button if they are unsure of what action to take.
> As a first time user, I want to navigate throughout the site to complete different actions.

An input section is displayed when a user selects the 'encrypt' or 'decrypt' button. The user can input their messages here and enter the key number of how many letters they want the message to shift. Their message will then be encrypted or decrypted based on their choice.
> As a first time user, I want to encrypt a string of text.
> As a first time user, I want to decrypt a string of text.

CSS Media Queries are used to make the website responsive on different screen sizes. All sections are responsive and content styling changes based on the screen size the user is viewing the website with. This is to ensure that the content is readable and not squashed, all images are clear & visible.
> As a first time user, I want to view the website on all my devices (Iphone 10, Surface Pro 7+, 32 inch monitor)

There is a help section that users can view if they are unsure about how to use a Caesar Cipher and want to learn about it's functionality.
>As a first time user, I want to learn about a Caesar Cipher is & how to use one.

# Design
This websites design follows a minimalistic approach for a more professional look. I took inspiration from simplistic websites such as the Apple Store. It is an intuitive, easily navigable website with a bright colour scheme that aims for an elegant, simplistic look. 
## Colour Scheme
This website uses a purple colour palette. The primary colours used throughout the website are dark purple (#7f39fb), violet (#be83f1), pink (#e680c7) & grey (#a6a6a6;). I chose a bright colour scheme to make the design unique and to catch the users attention. 

## Typography
The headers throughout the website are using the <strong>Roboto</strong> font with letter spacing of 4px. The rest of the website also uses the <strong>Roboto</strong>.

## Wireframes
The wireframes were created using [Canva](https://www.canva.com/)

![image](https://user-images.githubusercontent.com/83119583/185807478-43c42ae1-d627-4492-9c41-2b140a07822b.png)
![image](https://user-images.githubusercontent.com/83119583/185807515-8ebe1399-2cfc-4456-a5c3-b6052111879b.png)
![image](https://user-images.githubusercontent.com/83119583/185807544-3ac00207-ec89-4b15-8179-ddb8d6d1a3f0.png)

# **Features**

## Home Screen
* At the top of the page, the thick purple heading displays the websites name 'Caesar Cipher' with a animated lock icon positioned to the right of the text.
* The home screen displays 3 pink buttons the users can click - 'Encrypt', 'Decrypt' & 'Help'.
* There are 2 prompts to encoruage the user to take an action (click button) 
* The heading is thick with a dark purple background colour. The text colour is white to make it visible over the dark background.
* The heading indicates clearly the websites purpose
* The footer contains a wave image with the colours from the purple palette to match the theme of the site.

![image](https://user-images.githubusercontent.com/83119583/185808527-ab56cf33-f989-4069-a52b-3f91bac32bc1.png)

## Encrypt/Decrypt Section
* When a user clicks the 'encrypt' or 'decrypt' button, a screen is displayed where they can input a message and a key.
* 'Encrypt' or 'Decrypt' text will be displayed based on the button the user clicked.
* There is an input field where the user can enter the message they want to encrypt/decrypt.
* There is an input field where the user can enter the key. Decryted text will only be readable if the user knows the key used to encrypt the text.
* When the 'encrypt', 'decrypt' button is clicked, a loading symbil is displayed while the text is being translated into ciphertext. The ciphertext is then displayed to the user.
* This section has a return arrow that returns to the home page.

![image](https://user-images.githubusercontent.com/83119583/185808924-3cb594ac-7af6-495b-ad7a-e4069fac572d.png)
![image](https://user-images.githubusercontent.com/83119583/185808989-71a8909e-60db-4c3e-ab1b-e3e6ad9cc5c0.png)
![image](https://user-images.githubusercontent.com/83119583/185809014-0fe62d44-c9b0-4148-8796-34334ede9c57.png)

## Help Section
* The help section gives the user information about what a Caesar Cipher is & how to use one.
* The design is identical to the home screen, there is a thick purple heading that displays the websites name 'Caesar Cipher' with a animated lock icon positioned to the right of the text. The footer contains a wave image with the colours from the purple palette to match the theme of the site.
* There is a summary paragraph that explains how to use the Caesair Cipher.
* ADD IMAGE

# **Testing**
## Validator Testing
* add conntent

## Responsive Testing
* The website was tested on several devices and screen sizes to ensure it was responsvie regardless of the screen size. It has been tested on desktop, Ipad Mini, Ipad Air, Iphone 5, Samsung Galaxy S8+, Iphone X, Iphone SE. Mobile devices have been tested in portrait and landscape mode. The site has been tested in Chrome, Edge, FireFox & Brave browsers.

## Lighthouse Testing
* The Lighthouse tool in Chrome DevTools is used to test a websites performance & accessibility. It is an open-source automated tool used to improve the quality of webpages. 
When I tested my website, an audit report was returned indicating that my website has high performance and is accessible.
* ADD SCREENSHOT

## Event Listener Testing
* All button clicks trigger an event. When the 'encrypt' or 'decrypt' button is clicked on the home screen, the home page is hidden and the input section is displayed.
* The return button in the encrypt decrypt section hides the input section and displays the home screen when clicked.
* The help button on the home screen, opens the help.html page and displays the help page.
* The return button in the help page returns to index.html (the home screen) when clicked.
* The 'encrypt'/'decrypt' display the ciphertext when clicked.

## Bugs Identified During Testing
* Add content when compleying manual testing

## Bugs Identified During Development
* When I was pushing my code, the index.html file was untracked. I discovered this bug when I could not see the index.html file in my [GitHub Repo](https://github.com/emmaC11/Caesar-Cipher). I solved this bug by using a 'git add index.html' command, then doing a git push.
* Using the css height property in percentages was not working when trying to set a height to a div, using the unit of measurement 'rem' solved the issue.
* When using the .getElemenetByID method, I did not put the ID I was targeting in single quotes. This causes issues when I was using IDs that contained a '-'.
* When trying to obtain the key number from the input field, by default the key had string data type, I needed to convert to an int. I changed the data type by adding a '+' symbol when retirieving the ID, this changes the data type to an int.
>  let key = +document.getElementById('key').value;
* I tried naming a variable 'prompt' but prompt is a built-in method in JavaScript, I opted for a different variable name.
*  I orginally took the approach of having several different pages in the site, I wanted to have a seperate page for encryption & decryption. However, I did not realise that I would need to have several different JS files as the DOM is refreshed when a new page is opened. I used the PP2 slack channel for assitant and received assistant from a fellow student which helped me identify this issue. I then decided to take a new approach and mimic page changes by hiding and showing elements. 
> returnArrow.style.display = "block";
> footer.style.backgroundImage = "none"


## Other Images to use in readme
![image](https://user-images.githubusercontent.com/83119583/185809044-8c44ea92-42fd-4f02-939f-3135bed5a39b.png)
![image](https://user-images.githubusercontent.com/83119583/185809121-9e3c5c0a-ceae-4d43-850b-ed086c85acd6.png)