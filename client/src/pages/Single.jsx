import React from 'react'
import Edit from'../img/edit.png'
import Delete from '../img/delete.png'
import {Link}  from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
      <div className="user">
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
  <div className="info">
    <span>John</span>
    <p>Posted 2 days ago</p>
  </div>  
  <div className="edit">
    <Link to={`/write`}>
    <img src={Edit} alt="" />
    </Link>
   
    <img src={Delete} alt="" />
  </div>

      </div>

      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quae odio repellendus laudantium sequi illum. Similique quisquam sed ea praesentium voluptas officia debitis, mollitia vel molestiae tempora architecto vero laboriosam!</h1>
      <p></p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
