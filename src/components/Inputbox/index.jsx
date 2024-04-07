import React, { useRef } from 'react'
import './styles.css'
import imagemolde from '../../assets/photo-upload.png'
import imagepng from '../../assets/image.png'
import photoimage3 from '../../assets/photo-base3.png'
//criação do componente Cabeçalho
const Inputbox = (params) =>{
    
    const autoref = useRef() 
    const mensagemref = useRef()
    const adicionarpost = ()=>{
        params.setPosts((posts)=> {return[...posts,{mensagem:mensagemref.current.value,
        imagem:<img src={photoimage3} alt='photoimage3'/>,
        autor:autoref.current.value}]})

        limparpost();
    }
    const limparpost = () =>{
        autoref.current.value = ''
        mensagemref.current.value = ''
    }

    return (
        <div className= 'Input-box-container'>
            <div className= 'Input-header'>
                <div className= 'button-image'>
                <img className= 'molde'src={imagemolde} alt="imagemolde"/>
                <img className= 'montanha' src={imagepng} alt="imagepng"/>
                </div>
            </div>
            <div className='Input-content'>
                <input className='Input-common Input-name' type="text" ref={autoref} placeholder='Digite seu nome' />

                <textarea className='Input-common Input-message'type="text" ref={mensagemref} placeholder=' Mensagem' />
            </div>
            <div className='buttons-bottom'>
                <div className='buttons-position'>
                    <div className='descarte-button'onClick={limparpost}>Descartar</div>
                    <div className='publicar-button' onClick={adicionarpost}>Publicar</div>
                </div>
            </div>
        </div>
    )
}
export {Inputbox}