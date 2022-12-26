import {useState} from 'react';
import { sendMessage } from '../utils/API';

const PostsList = ({ id, description, author, isAuthor, token}) => {
    const [message, setMessage] = useState('');
    const [sentMessage, setSentMessage] = useState('');
    async function submitForm(e){
        e.preventDefault();
        await sendMessage(message, id);
        sendMessage('');
        setSentMessage(`You sent a message to ${author}!`);
    }
    return(
        <li key={id}>
        <h2>{author}</h2>
        <h3>{description}</h3>
        {author && <button>Delete Post</button>}
        {token && !isAuthor &&
            <form onClick= {submitForm}>
                <input 
                    type= "text"
                    value= {message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type= "submit">Send Message</button>
                <p>{sentMessage}</p>
            </form>}
        </li>
    )
}

export default PostsList;