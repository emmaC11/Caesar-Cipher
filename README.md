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
* I could not use the .textcontent method on an input field so I changed the ciphertext output to a span tag.
* When trying to implement the help page using a modal, all other elements in the dom were hidden so I could not implement any user intereactvity like a close button etc. I decided to store the help information in a seperate page so the user can navigate between content easily.
* When trying to capture the mode the user had selected (encrypt or decrypt), the mode was returning encrypt each time as it had a default value of encrypt. I solved this issue by having a global varibale with an empty value and assigning it a mode based on the event listener called (either encrypt or decrypt).
* I pushed some poor commit messages, I was thinking ahead of what lines of code I would be writing in the next step of a function and adding commit messages based on that. 
* If a user wanted to encrypt/decrypt another message after encrypting one previously, the previous output would still display and the load effect was redundant. I fixed this issue by setting the output display to none in the load effect function.
* Some of my commit messages have spelling errors, however this is due to an issue with the bash terminal. I type the commit message correctly however it is changed after I confirm the commit.
![image](https://user-images.githubusercontent.com/83119583/185887975-9b112f88-6334-4dea-adc7-a9ae1520ae4e.png)
![image](https://user-images.githubusercontent.com/83119583/185888848-3c1f94e4-3665-4e2a-bde1-32e7c3169c2c.png)
*
# **Development Environment**
## Dev Structure
* The first step for this PP2 project was to come up with the project idea, I was thinking perhaps a game or a quiz. But I wanted to improve working with loops & if statements and thought of creating a Caesar Cipher. Most Caesar Ciphers tend be console-based apps or either have a dull front-end, so I wanted to make a Caesar Cipher with an intuitive, well-designed front-end.
* I then moved on to creating some wireframes. I have learned from PP1 that having a good plan before writing any lines of code is critical. I felt I was more productive with my time on this project as I knew the design I wanted to implement and the algorithm I wanted to write.
* To keep track of what tasks I needed to complete and what work I had completed, I created a kanban board. A straight forward one in [Google Keep](https://keep.google.com/) with the headings 'to-do', 'in-progress', 'complete'.
![image](https://user-images.githubusercontent.com/83119583/185893007-9c84fc3d-5532-4f01-a0b5-9043fada4280.png)
* I kept a onenote notebook to log all notes, links etc associated with PP2. This help me keep track of what resources I used, feedback from mentor sessions, masterclass notes & bugs tracked throughout the development cycle.
![image](https://user-images.githubusercontent.com/83119583/185894383-d7f33863-eca8-46d5-adb2-720b56839fd1.png)


# **Deployment**
## Project Creation
This project was created using Gitpod, Gitpod provides prebuilt development environments with a variety of IDEs. 

To use Gitpod, install the Gitpod extension on either Firefox or Chrome. When the extension is installed, it adds a green Gitpod button to Github, where we can click to create a workspace in Gitpod.

For this project, I used the Visual Studio IDE. I used the prebuilt environment provided by [Code Institue](https://github.com/Code-Institute-Org/gitpod-full-template) to start this project. I clicked the 'use this template' button and named my repository 'Caesar-Cipher'. I then created a Gitpod workspace by clicking the green gitpod button in my [Caesar-Cipher](https://github.com/emmaC11/Caesar-Cipher) repository.

I used the following commands throughout the development of this project:
* **python3 -m http.server**  - This command runs a local webserver to view the project.
* **git add .** - This command adds all the changes that have been in the working directory to the staging area. Ready to be committed.
* **git commit -m ""** - This command is used to write descriptive messages of what changes have been made to the code and commits the changes to the local repository.
* **git push** - This command pushes all the committed changes to the Github repository.

## Deployment to GitHub Pages
1. Navigate to [GitHub Repository](https://github.com/emmaC11/Caesar-Cipher)
2. Click the 'Settings' tab.
3. Scroll down to the 'pages' tab on the navigation bar.
4. Open the 'Pages' tab.
5. Select 'main' branch as the source.
6. Click 'save'.
7. Click the link provided to go to the deployed website.
8. The live link can be found here - [Caesar-Cipher](https://github.com/emmaC11/Caesar-Cipher).

## Run Locally
1. Locate the [GitHub Repository](https://github.com/emmaC11/Caesar-Cipher).
2. Click the 'Code' dropdown button.
3. Copy the git URL from the HTTPS text bar.
4. Open a terminal window and locate the directory where you want to store the project.
5. Type the 'git clone' command in the terminal, then paste the git URL. Click return on your keyboard to enter the command.
6. A clone of the project will be created locally on your machine.
**Note** - git commands only work if git is installed on your machine. Find installation documentation [here](https://git-scm.com/).



