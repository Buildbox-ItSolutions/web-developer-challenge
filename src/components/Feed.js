import React from 'react'

import deleteImage from './assets/img/delete.png'

class Feed extends React.Component {
    render() {
        return <React.Fragment>
            <p className="feed-paragraph">Feed</p>
        
            <div className="feed-div">
                <div className="feed-delete-div"><img onClick={this.props.handlePostDeletion} id={this.props.index} className="delete-image" src={deleteImage} alt="delete post" /></div>
                
                <table>
                    <tbody>
                         <tr>
                         <td rowSpan="2"><div className="feed-image-div"><img className="photo-upload" src={this.props.image} alt="user pic" /></div></td>
                        
                        <td><p className="feed-comment-div">{this.props.comment}</p></td>
                       </tr>
                        <tr>
                  
                       
                       <td>
                            <p className="feed-sent-by-div">Enviado por</p>
                            <p className="feed-user-div">{this.props.user}</p>
                        </td>
                        </tr>
                    </tbody>
                  
                </table>
                
                
               
               
               
            </div>



        </React.Fragment>
    }
}
export default Feed