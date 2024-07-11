import React from 'react'
import './styles.css'
import deleteimage from '../../assets/delete.png'

const PostCard = (params) => {
    const Handledeletepost = ()=> {
        params.setPosts((posts)=>posts.filter((nada,index)=>index!==params.index))
    }

    return(
        <div className='card-container'> 
                <div className='header-close'> 
                    <img className= 'delete-button' onClick={Handledeletepost} src={deleteimage} alt="deleteimage"/>
                </div>
                <div className='context-feed'>
                    <div className='imagem-style'>
                        {params.post.imagem}
                    </div>
                    <div className='text-style'>
                        <div className='mensagem-style'>
                            {params.post.mensagem}
                        </div>
                        <div className='autor-style'>
                            <span className='mini-text-style'>Enviado por</span>
                            {params.post.autor}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export {PostCard}