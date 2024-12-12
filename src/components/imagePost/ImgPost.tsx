import React ,{ useState,useRef } from "react";
import './style.css';
import noImage from "../../assets/no-image.png";

interface IImgPost {
  states: {
    imgSrc: string,
  },
  dimensions: {
    width: number,
    height: number,
  },
  calls: number,
  previewComponent: any,
  updatePreviewComponent: any,
};

export default function __imagePreview(props:IImgPost) {


  const inputFileRef = useRef<HTMLInputElement>( null );


  // Preview the image
  const previewImaga = (e: any) => {
    // console.log(e.target.files);

    if (e.target.files[0]) {
      // Prepare this file for preview

      const t = new FileReader();

      // Listen to load events
      t.onload = function (e: ProgressEvent) {
        const { result }  = e.target as FileReader | any;
        props.updatePreviewComponent({
          ...props.previewComponent,
          states: { ...props.previewComponent.states, imgSrc: result },
        });
      };

      t.readAsDataURL(e.target.files[0]);
    }
  };

  const onBtnSelectImg= () => {
    const act = inputFileRef.current as HTMLInputElement;
    act.click();
  }
  return (
    <div>
      <div className="hide">
        <input
          type="file"
          ref={inputFileRef}
          onInput={(e) => {
            previewImaga(e);
          }}
          required
        />
      </div>

      {/* Preview Section */}
      <div>
        <div>
          <img src={
            (props.previewComponent.states.imgSrc) ? props.previewComponent.states.imgSrc : noImage
            } className="photo-base" onClick={onBtnSelectImg}/>
        </div>
      </div>
    </div>
  );
}