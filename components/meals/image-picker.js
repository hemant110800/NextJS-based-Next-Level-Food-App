'use client'
import {useRef, useState} from 'react';
import classes from "./image-picker.module.scss";
import Image from 'next/image';

export default function ImagePicker({ label,name }) {

  const input_ref = useRef()
  const [pickedImage,setPickedImage] = useState();

  const imageHandler = ()=>{
      // const img = document.getElementById(name);
      // console.log(img);
      // img.click();
      input_ref.current.click();
  }

  const handleImageChange = (e)=>{
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      if(!file){
        return;
      }
      
      const fileReader = new FileReader();
      fileReader.onload = () => {
          setPickedImage(fileReader.result);
      }
      fileReader.readAsDataURL(file)

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
      <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage}  alt="the image selected by user" fill></Image>}
      </div>
      <input type="file" className={classes.input} id={name} name={name} onChange={handleImageChange} required accept="image/png,image/jpeg" ref={input_ref}/>
      <button className={classes.button} type="button" onClick={imageHandler}>Pick an Image</button>
      </div>
    </div>
  );
}
