import {useState} from 'react';
import {useOutletContext} from "react-router-dom";
import PostsList from '../Components/PostsList';

const Posts =() => {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     setTimeout(function() {
    //         setPosts([ // use fetch call instead of this array
    //             fetch 
    //         ])
    //     }, 1000)
    // }, [])
    const [token] = useOutletContext();
    const [PostsList, setPostsList] = useState([]);
    return(
        <section>
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map(({location, description, id, isAuthor, message, price, token}) => ( // <img src= {description} alt="post" /> 
                        <PostsList
                            key={id}
                            id={id}
                            location={location}
                            price={price}
                            description={description}
                            message={message}
                            token={token}
                            isAuthor={isAuthor}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Posts;