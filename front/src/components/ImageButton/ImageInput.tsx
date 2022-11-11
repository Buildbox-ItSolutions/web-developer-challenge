import React  from 'react';
import "./styles.css";
// import { useState } from 'react';

import img from '../../assets/image.svg';
import close from '../../assets/trash.svg';

interface IImage{
    image: string | null
    onImageUpload: (image: string ) => void
}

export function ImageInput({image, onImageUpload}: IImage){

    // const [file, setFile] = useState('');

    const handleChange = async (
        event: React.ChangeEvent<HTMLInputElement>
      ): Promise<any> => {
        
    
        // const ImageName = event.target.value.split('\\')[2];
        // const Image = event.target.value;
        
        if (!event.target.files) return;

        const fileLoaded = URL.createObjectURL(event.target.files[0]);
        // const files = event.target.files;
    
        console.log('files: ', fileLoaded);
        
        onImageUpload(fileLoaded)
        
      };

      function handleClick(){
            onImageUpload('');
      }


    if(image){
        return(
            <div className="wrapper--image">
                <div id='upload'>
                    <img src={image} alt="" />
                </div>
                <div className="close--wrapper">
                    <button id='delete'
                    onClick={(e) => handleClick()}
                    ><img src={close} alt="delete" /></button>
                </div>
            </div>
        )
    }

    else{
        return(
            <>
                <label htmlFor="photo">
                    <input
                        accept="image/*"
                        id="photo"
                        name="photo"
                        type="file"
                        multiple={false}
                        onChange={handleChange}
                    />
                    <button id='upload' >
                        <img src={img} alt="" />
                    </button>
                </label>    
            </>
        )
    }
}