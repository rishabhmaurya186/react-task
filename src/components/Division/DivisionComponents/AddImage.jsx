import React, { useRef, useState } from 'react';
import uploadSvg from '../../../assets/vectors/cardIcon/upload.svg';
import { ErrorMessage, Field } from 'formik';

function AddImage() {
  const MIN_DIMENSION = 150;

  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const uploadBtn = useRef(null);
  const [img, setImg] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const handleBtn = () => {
    setSelectedImage(null); // Clear selected image
    setImg(false); // Reset img state
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const imageElement = new Image();
        const imageUrl = reader.result?.toString() || "";
        imageElement.src = imageUrl;

        imageElement.addEventListener("load", (e) => {
          const { naturalWidth, naturalHeight } = e.currentTarget;
          if (naturalWidth < 300 || naturalHeight < 300) {
            setImgErr(true);
            return setSelectedImage("");
          }
        });
        setSelectedImage(imageUrl);
        setImgErr(false);
      })

      reader.readAsDataURL(file);
      setImg(true);
    } else {
      // No file selected, clear selected image and reset img state
      setSelectedImage(null);
      setImg(false);
    }
  };

  return (
    <>
      <Field
        name='mediaFile'
        id='mediaFile'
        className='hidden'
        type='file'
        ref={uploadBtn}
        accept='image/*'
        onChange={handleImageChange}
      />
      <div className='text-xl mb-3'>Add Image</div>
      <div className=' w-full  lg:w-[590px] h-[270px] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center'>

        {selectedImage ? (
          <div className=' items-center flex flex-col'>
            
            <img src={selectedImage} alt="Selected Image" className=' h-[200px]'  />
            <div
  className='w-[80%] h-[70%]'
  style={{
    backgroundImage: `url(${selectedImage})`,
    backgroundSize: 'cover', // Optional: Adjust this based on your requirements
    backgroundPosition: 'center', // Optional: Adjust this based on your requirements
  }}
></div>

            <button type='button' id='remove' onClick={handleBtn} className='border-2 border-solid border-black p-3 rounded-lg mt-2 '>Remove</button>
          </div>
        ) : (
          <>
            <div className='p-3 rounded-lg' style={{ backgroundColor: '#ffa007' }}>
              <img src={uploadSvg} alt="Upload Icon" />
            </div>
            <div className='p-4 text-center'>Drag and Drop here<br />or</div>
            <button
              type='button'
              className='px-6 py-1 text-center border-solid border-2 rounded-xl hover:bg-gray-100'
              style={{ borderColor: '#ffa007' }}
              onClick={() => { document.getElementById('mediaFile').click() }}
            >
              Upload
            </button>
          </>
        )}

      </div>
      {imgErr && <div className="text-red-600">Image must be at least 300 x 300 pixels.</div>}
      {!img && <ErrorMessage name='mediaFile' component="div" className="text-red-600" />}
      {!img && !imgErr && <div className="">Image must be at least 300 x 300 pixels.</div>}

    </>
  );
}

export default AddImage;
