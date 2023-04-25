import React from 'react'
import './post.css'
import Dann from '../assets/dann.jpg'
function Posted() {
  return (
    <div className="post">
      <img className="postImg" src={Dann} alt="/" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae
        explicabo reprehenderit fuga, aliquid porro. Debitis tempore temporibus
        expedita libero aperiam aspernatur, sequi quibusdam odio quam dolore
        iure sunt! Ab eos debitis inventore doloremque! Est magnam enim
        aspernatur corrupti optio ex dolores numquam vitae voluptatem! Porro
        voluptatem illum ullam tenetur, ipsa tempore dolores asperiores sunt
        sint, laboriosam, enim impedit consectetur ex adipisci hic incidunt? Nam
        ratione, et fuga, suscipit rerum aut modi tenetur, omnis nisi deleniti
        ea quod eaque earum.
      </p>
    </div>
  )
}

export default Posted
