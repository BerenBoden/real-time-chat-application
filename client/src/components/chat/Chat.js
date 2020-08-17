import React, {useState, useEffect} from 'react';
import './Chat.scss';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

//Assigning the socket constant so I can reassign it
let socket; 

const Chat = ({location}) => {
    const [name, setName] = useState('');//Passing an empty string as the value for the first parameter 'name'
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState(['']);
    const [messages, setMessages] = useState([]);
    //Setting the endpoint, this is the same server that is running on index.js in the server folder
    const ENDPOINT = process.env.PORT || 'localhost:5000';
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)//this retrieves the data from the URL, location is a prop from 'react-router-dom'
        
        //Reassigning the 'socket' variable to the 'ENDPOINT' constant
        socket = io(ENDPOINT)

        //call the functions, then pass the 'name' & 'room' constants as the parameters
        setName(name);
        setRoom(room);

        //When the backend recoginizes the string 'join', it will recieve the data from the objects 'name' & 'room'. 
        socket.emit('join', { name, room }, () => {  //{I am using ES6 with these objects, because the variables have the same names (name&room) so I only have to type them once}
        }); 

        //finishing react hook, for unmounting and disconnecting
        return () => {
           socket.emit('disconnect');  
           socket.off();
       }
    }, [ENDPOINT, location.search]) //Adding this array makes sure that this function only activates if one of these values change, so that we aren't making two requests
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages])
    

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="container">
            <div className="container-fluid">
                <InfoBar room={room} /> 
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;