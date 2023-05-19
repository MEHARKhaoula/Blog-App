
import {useState, useEffect} from 'react'
import axios from 'axios';
const Menu = ({cat}) => {
   
  const [posts, setPosts] = useState([]);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className='menu'>
    <h1>Other posts you make like</h1>
    {posts.map(post=>(
        <div className='post' key={post.id}>
            <img src={`../upload/${post?.img}`} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
    ))}
    </div>
  )
}

export default Menu