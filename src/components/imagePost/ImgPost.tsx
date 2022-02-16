import React ,{ useState,useRef } from "react";
import './style.css';
import noImage from "../../assets/no-image.png";

export default function __imagePreview() {
  const [previewComponent, updatePreviewComponent] = useState(() => {
    return {
      states: {
        imgSrc: '',
      },
      dimensions: {
        width: 100,
        height: 100,
      },
      calls: 0,
    };
  });

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
        updatePreviewComponent({
          ...previewComponent,
          states: { ...previewComponent.states, imgSrc: result },
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
          name="device-images"
          ref={inputFileRef}
          placeholder="Please, Enter the mobile images"
          className="border inline-block w-full"
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
            (previewComponent.states.imgSrc) ? previewComponent.states.imgSrc : noImage
            } className="photo-base" onClick={onBtnSelectImg}/>
        </div>
      </div>
    </div>
  );
}