import React from 'react'
import Form from './components/Form'
import Banner from './components/Banner'
import './components/assets/css/style.css'
import Feed from './components/Feed'

//random images
import img1 from './components/assets/img/img1.jpg'
import img2 from './components/assets/img/img2.jpg'
import img3 from './components/assets/img/img3.jpg'
import img4 from './components/assets/img/img4.jpg'

//icon image
import defaultImage from './components/assets/img/image.png'
const imageUrlDefault = './components/assets/img/image.png'

const images = [ 
    { image: img1, url: './components/assets/img/img1.jpg' },
    { image: img2, url: './components/assets/img/img2.jpg' },
    { image: img3, url: './components/assets/img/img3.jpg' },
    { image: img4, url: './components/assets/img/img4.jpg' }
  ]



class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     user: '',
     comment: '',
     image: defaultImage,
     imageUrl: imageUrlDefault,
     showFeed: false,
     feedsNumber: 0,
    feedsArray: []
    
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
    this.setState({
      userToPublish: this.state.user,
      commentToPublish: this.state.comment,
      imageToPublish: this.state.image,
      showFeed: true,
      feedsNumber: this.state.feedsNumber + 1
    })

    const postObj = { user: this.state.user, comment: this.state.comment, image: this.state.image}
    this.state.feedsArray.push(postObj)
    console.log(this.state.feedsArray)
    this.handleReset(e)

  }

  handleReset = (e) => {
    e.preventDefault()
    
    this.setState({
        imageUrl: imageUrlDefault,
        image: defaultImage,
        user: '',
        comment: '',

    })
}

generateRamdon = () => {
  
  return Math.floor(Math.random() * 3);
}

  handleOnClickUpload = (e) => {
    e.preventDefault()

    let rnd = this.generateRamdon()

    this.setState({
        image: images[rnd].image,
        imageUrl: images[rnd].url,
        
    })       
  }

  handleOnClickDeletePost = (e) => {
    e.preventDefault()
    const index = e.target.id
    this.state.feedsArray.splice(index,1)
    this.setState({
      showFeed: true
    })
    console.log(this.state.feedsArray)
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
               
              {(this.state.showFeed && this.state.feedsNumber !== 0)

              ? this.state.feedsArray.slice(0).reverse().map((post, index) => {
                return <Feed key={index} user={post.user} comment={post.comment} image={post.image} 
              handlePostDeletion={this.handleOnClickDeletePost} index={this.state.feedsArray.length - 1 - index} />
              })
              :null}

              
            </div>
  }
}

export default App;
