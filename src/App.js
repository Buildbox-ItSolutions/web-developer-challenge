import React from 'react'
import Form from './components/Form'
import Banner from './components/Banner'
import './components/assets/css/style.css'
import Feed from './components/Feed'

import image from './components/assets/img/img1.jpg'
import defaultImage from './components/assets/img/image.png'

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     user: '',
     comment: '',
     image: defaultImage,
     imageUrl: './components/assets/img/image.png'
    
   }
 } 
 



handleInputChange = (e) => {
  e.preventDefault()
  this.setState({user: e.target.value})
  console.log(e.target.value)
}

handleTextChange = (e) => {
  e.preventDefault()
  this.setState({comment: e.target.value})
  console.log(e.target.value)
}

  


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.user.value)
    console.log(e.target.comment.value)
    console.log(e.target.image.value)
    this.setState({
      user: e.target.user.value,
      comment: e.target.comment.value
    })

  }

  handleReset = (e) => {
    e.preventDefault()
    
    this.setState({
        imageUrl: 'abc',
        image: defaultImage,
        user: '',
        comment: ''

    })
}



  componentDidUpdate(props,state) {
    console.log(this.state)
  }


  handleOnClickUpload = (e) => {
    e.preventDefault()
    this.setState({
        image: image,
        imageUrl: 'abc',
        
    })       
  }

  
  render() {
    return <div className="App">
              <Banner />
              <Form action={this.handleSubmit} 
                user={this.state.user} 
                comment={this.state.comment} 
                inputChange={this.handleInputChange} 
                textareaChange={this.handleTextChange}
                upload={this.handleOnClickUpload}
                reset={this.handleReset}
                image={this.state.image}
                imageUrl={this.state.imageUrl}
                
               />

              <Feed user={this.state.user} comment={this.state.comment} />
     
            </div>
  }
}

export default App;
