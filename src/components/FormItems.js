import React from 'react'

class FormItems extends React.Component {

  
    
    render() {

        

        return <div>
                    
                {
                    (this.props.imgUrl !== './assets/img/image.png')
                        ? (<div onClick={this.props.handleUpload}>
                                <img className="photo-upload" src={this.props.image} alt="custom post" />
                            </div>)
                        : (<div className="photo-upload" onClick={this.props.handleUpload}>
                                <img className="image" src={this.props.image} alt="custom post" />
                            </div>)
                    
                }
                     
            </div>
               
    
   
    
    }
}
export default FormItems
