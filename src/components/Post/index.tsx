import React from 'react';
import './styles.css'
import ImgPost from '../../images/photo-base.png'
import Button from '../../images/criss-cross.svg'

interface PostProps {
  description: string
  name: string
  onDelete: Function
  postId: number
}

const Post: React.FC<PostProps> = ({ description, name, onDelete, postId }) => {
  return (
    <div className="container" >
        <div className="header" >
          {name}
          <div></div>
          <button className="buttonOff" onClick={() => onDelete(postId)} >
            <img src={Button} alt="button"  />
          </button>
        </div>
        <div className="component" >
          <img src={ImgPost} alt="Post Img"  />
          <div className="description" >
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
  )
}
export default Post