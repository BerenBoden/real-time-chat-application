import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.scss';
import Home from '../layout/Home'


const Join = () => {
    //Declaring hooks, must be inside function based component
    const [name, setName] = useState('');//Passing an empty array as the value for the first parameter 'name'
    const [room, setRoom] = useState('');
    return (
        <div className="container-xl">
            <Home />
            <div className="heading row">Join</div>
            {/**When user types, fire the event from onChange attribute*/}
                <div>
                    <input placeholder="Name" className="" type="text" onChange={(event) => setName(event.target.value)}/**Set the output of this input, to the 'name' variable, using the setter function 'setName' */ />
                </div>
                <div>
                    <input placeholder="Room" className="" type="text" onChange={(event) => setRoom(event.target.value)}/**Set the output of this input, to the 'room' variable, using the setter function 'setRoom' */ />
                </div>
                {/**This link will be dynamic, and inside template literals so we can add the react hooks that have been declared with const*/}
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="" type="submit">Sign In</button>
                </Link>
        </div>
    );
}

export default Join;