## React, Node.js, MongoDB Real Time Chat Application


### How To Run Application

1. #### Download or fork the code from my github:

2. #### Install all the dependencies

You can simply install all the dependencies using 'yarn add' or 'npm i'.

3. #### 'yarn start' 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### How To Use Application

####Features
- Real time chat
	- Users can talk and send messages with each other and recieve theses messages instantaneously.
- Auto scroll
	- When people send a lot of messages, the chat interface will autmaticlly scroll to the latest message
recvied.
- Greeting message 
	- You will recieve a greeting message from the interface once you join a chat.
- Sign in 
	- You can sign in and join spedific chatrooms.
- Emojis 
	- This app allows you to send emojis and recive emojis. 
- Page routing
	- You can navigate through multiple pages. 

### How I Built This Application

After I had thought out all of my features, I created a quick mock up of what I wanted the application
to look like, you can view the mock up here. 

## Setting up the files

Firstly I created two folders, server and client. I bootstrapped the client folder using create-react-app, 
as it is the simplest and most efficient way to create React applications. I put the create-react-app inside a client folder becasuse I 
wanted my server folder and my client folder to be seperate. I then initilized my server folder with npm
init.

(STEP1)

## Installing dependencies

Inside my client folder, with my create-react-app, I manaully installed the following dependencies: 

- react-router-dom
	- For page routing functionallity
- react-emoji 
	- So I can use emojis in the chat application
- react-scroll-to-bottom
	- So the application automaticlly scrolls to the bottom
-  & socket.io 
	- Responsible for instant messaging and real time chat, using sockets in real time instead of http requests

(STEP2)

Then in my server folder I installed 

- cors
	-
- express 
	- 
- nodemon
	- For development purposes, editing files in real time
- socket.io
	- Responsible for instant messaging and real time chat, using sockets in real time instead of http requests

## Importing required files, setting up directorys

Inside my client folder, I have cleaned up the src folder that was installed with create-react-app and added
my own files: index.js & App.js. I then set up the index.js to render everything from App.js. 

(STEP3)

## Setting up App.js with react-router for page routing functionallity

In App.js I have imported 'react-router-dom' so I can use the <Router /> & <Route /> components. I then created
two extra components, and put them inside a 'components' folder. The first is the 'Join' component
which is responsible for the user signing in and getting access to the chat. Then I created the 'Chat' 
component which is the main chat page for allowing users to chat with each other. 

(STEP5)

As you can see in my App.js I have created a functional component and im importing the 'Join' and 'Chat'
components and using these inside the <Route /> tags. I gave the Join chat the '/' path and added the 
'exact' attribute so it will be the first page the user sees. Once data has been passed from the 'Join'
component, the 'Chat' component will be loaded, but that will be done later. 
 
//App.js
(STEP4)

Now testing this app with 'yarn start', and everything is working

(STEP6)

## Setting up the server

Inside the server folder, I created a new index.js file. Firstly I have required my dependencies,
then set up my port, I used process.env so I'm not hardcoding my port number for deployment. I then 
set up a simple console.log to check everything is working

(STEP7)

After I have done that, I set up a router.js file for express, this should hanlde routing and any requests.
I am just testing if it is working for now.

(STEP8)

## Inside my index.js file, I can now add the socketio functionallites. I can use the function: io.on('event', cb function);
and fire the callback function. Socketio uses keywords in the first parameter such as: connect or disconnect
and the callback function listens for those keywords. 


(STEP9)

## Using the socket in my client

Going back to my client folder, into my components, now editting my Join component. I will use React
hooks because it makes the code much cleaner and less complicated to underdstand. So first I will 
import the built in <code>{useState}</code> method, then below that import the Link method from 'react-router-dom'
because I want this component to include links. 

Next I will declare a hooks using <code>const [*variable*, *setter function*]</code> and setting it equal
to the useState method I imported from React <code>= useState('')</code> and setting the variable to an empty
array.

(STEP10)

