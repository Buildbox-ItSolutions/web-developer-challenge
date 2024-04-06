import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import deleteIcon from './public/delete.svg'
import noImageIcon from './public/image.png'
import trashIcon from './public/trash.svg'

export interface propsInterface{
    image: string,
    author: string,
    description: string,
}


const App: React.FC = () => {
    const [posts, setPosts] = useState<propsInterface[]>([])
    const [photo, setPhoto] = useState<File | null | any>(null)

    let url = 'urlImg'
    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setPhoto(selectedFile);
        }
    };

    const handleDeletePost = (index: number) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
      };
      
    const createPost = (event:any) =>{
        event.preventDefault();
        if (event.target.author.value && event.target.description.value && event.target.photo.value && photo != null){ 
            var newPost:propsInterface = {
            image: photo ? URL.createObjectURL(photo) : '',
            author: event.target.author.value,
            description: event.target.description.value
            }

            setPosts([newPost, ...posts]);
        } else {
            alert('Preencha todos os dados antes de postar!');
        }
        setPhoto(null)
        event.target.reset();
    }

  return (
    <div className='flex flex-col bg-[#343434] min-h-screen h-full break-all'>
        <Header />
        
        <form onSubmit={createPost} className='border-[1px] border-[#3b3b3b] relative mt-[24px] sm:mt-[40px] sm:w-[516px] sm:mx-0 w-[90%] h-fit p-[24px] rounded-[3px] flex flex-col gap-[8px] self-center bg-[#313131] mb-[81px]'>
            <div className='flex justify-center'>
                {
                    photo ? <img className="z-0 absolute top-[24px] w-[88px] aspect-square rounded-[36px] self-center" src={URL.createObjectURL(photo)} alt="" />  : <img className="absolute top-[24px] w-[88px] aspect-square self-center" src={noImageIcon} alt="" />
                }
                <img className={`${photo ? '' : 'hidden'} w-[24px] aspect-square absolute top-[56px] right-[174px] hover:cursor-pointer`} src={trashIcon} alt="Remove icon" onClick={()=>{setPhoto(null)}}/>
            </div>
            <label id="label" htmlFor="photo" className={`hover:cursor-pointer z-10 w-[88px] aspect-square rounded-[36px] self-center mb-[8px]`}></label>
            <input id="photo" className="hidden" type="file" accept='image/*' onChange={handlePhotoChange}/>
            <input id="author" placeholder="Nome" className="w-full h-[40px] p-[12px] text-[#ffffff] font-[14px] bg-[#494949] rounded-[8px]" type="text" />
            <textarea
                id="description"
                placeholder="Descrição"
                className="w-full p-[12px] min-w-[40px] resize-none text-[#ffffff] font-[14px] bg-[#494949] rounded-[8px]"
                onChange={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
                }}
            />

            <div className='flex justify-end gap-[24px] mt-[32px]'>
                <input className='bg-none text-[#5f5f5f] font-[14px] underline self-center hover:cursor-pointer' type="reset" value="Descartar" />
                <button className='bg-[#71bb00] text-white font-[14px] rounded-[8px] px-[24px] py-[12px]' type="submit">Publicar</button>
            </div>
        </form>
        
        
        {
            posts.map((post, index)=>(
                <div key={index} className={`bg-[#313131] sm:w-[516px] w-[90%] relative h-fit self-center pl-[24px] pr-[12px] pt-[12px] pb-[32px] flex flex-col mb-[16px] border-[1px] border-[#3b3b3b]`}>
                    <p className={`${(index == 0) ? '' : 'hidden'} absolute top-[-30px] left-0 text-[#7a7a7a] font-[14px]`}>Feed</p>
                    <img className="sm:w-[20px] w-[30px] aspect-square self-end hover:cursor-pointer" src={deleteIcon} alt="Delete post button" onClick={() => handleDeletePost(index)}/>
                    <div className='flex gap-[32px] mt-[24px] pr-[48px]'>
                        <img className="sm:w-[88px] sm:h-[88px] w-[60px] h-[60px] rounded-[36px]" src={post.image} alt="" />
                        <div className='flex flex-col gap-[1.25vw]'>
                            <span className='text-[#9f9f9f] mb-[24px]'>{post.description}</span>
                            <div className='flex flex-col'>
                                <span className='text-[#5f5f5f] font-[0.625vw] mb-[0.104vw]'>Enviado por</span>
                                <span className='text-[#7a7a7a] font-[0.729vw]'>{post.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    
    </div>
  );
}

export default App;
