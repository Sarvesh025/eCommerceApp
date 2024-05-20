import React, { useRef, useState } from 'react'

const actionBtn = {
  width:'100%',
  display:'flex',
  justifyContent:'space-around',
  zIndex:'5'
}

const success ={
  background: 'rgb(52 91 255)',
  width: '-webkit-fill-available',
  height: '-webkit-fill-available',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}


export default function Dropbox({title, getData}) {
  
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState('');

  const boundry = {
      border:'2px dashed black',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '50vh',
      width: '100%',
      margin: '15px auto',
      background: imagePreview ? `url('${imagePreview}') center center / contain no-repeat` : 'white',
      color:'black',
      position:'relative'
  }
  const [flag, setFlag] = useState(true);

    const box = useRef();
    const inputRef = useRef();

    const handleImageChange = (e) => {
      const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setImageName(file.name)
        // console.log(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
    };
    
    function handelDragOver(event){
        event.preventDefault();
    }

    function handelOnDrop(event){
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
            setImageName(file.name)
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please drop a valid image file.');
        }

    }

    function handelCancel(e){
      e.preventDefault();
      setImagePreview(null);
      // localStorage.clear('frontDesign');
      // localStorage.clear('backDesign');
    }

    function handelUpload(e){
      e.preventDefault();
      getData(imagePreview, imageName);
      setFlag(!flag);
      
      //Upload to backend.

    }

   
  return (
    <>
    <div style={boundry} onDragOver={handelDragOver} onDrop={handelOnDrop} ref={box}>
      {flag  ?
      imagePreview 
      ? 
        <div style={actionBtn}>
          <button onClick={handelCancel}>Cancel</button>
          <button onClick={handelUpload}>Upload</button>
        </div>
      :
      <div>
        <h2>{title}</h2>
        <input type="file" accept="image/*" id='upload-button' ref={inputRef} onChange={handleImageChange} hidden/>
        <button onClick={()=>inputRef.current.click()}>Upload design</button>
      </div>
      :
      <div style={success}>
        <h3>Image Uploaded Successfully.</h3>
        <button onClick={()=>{setFlag(!flag); setImagePreview(null)}}>Restart <i className="ri-refresh-line"></i></button>
      </div>
    }
    </div>
    </>
  )
}
