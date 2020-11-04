import React from 'react'



import img from './assets/img/image.png'






const imageUrl = './assets/img/image.png'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: imageUrl,
            image: img,
           
            
        }
       
    }

    

    reset = (e) => {
        e.preventDefault()
        
        this.setState({
            imageUrl: imageUrl,
            image: img,
            user: '',
            comment: ''

        })
    }

   
   
     

    render() {
       
        return <div className="form-div">
        
            <form onSubmit={this.props.action}>
                <div>
                    <input type="text" hidden name="image" defaultValue={imageUrl} />
                   

                    {
                        (this.props.imageUrl === './components/assets/img/image.png') 
                        ? (<div className="photo-upload" onClick={this.props.upload}>
                            <img className="image" src={this.props.image} alt="custom post" />
                            </div>)
                        : (<div  onClick={this.props.upload}>
                            <img className="photo-upload" src={this.props.image} alt="custom post" />
                            </div>)
                       
                    
                     }

                </div>
                <div>
                <label htmlFor="userId" />
                <input type="text" name="user" id="userId" value={this.props.user}  onChange={this.props.inputChange}  placeholder="Digite seu nome" />
                </div>
                <div>
                    <label htmlFor="commentId" />
                    <textarea id="commentId" name="comment" value={this.props.comment} onChange={this.props.textareaChange} placeholder="Mensagem" />
                </div>
                <div className="btn-div">
                <span onClick={this.props.reset}>Descartar</span>
                {
                    (this.props.imageUrl !== './components/assets/img/image.png' && this.props.user && this.props.comment)
                        ? (<button className="btn-active" type="submit">Publicar</button>)
                        : (<button className="btn-inative" disabled type="submit">Publicar</button>)
                        
                }
                
                </div>
               
            </form>
        </div>
    }
}
export default Form