import React, {useEffect, useState} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Photo = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
   // Fetch the image paths from the JSON file
   fetch(`${process.env.PUBLIC_URL}/img/photo/photos.json`)
     .then((response) => response.json())
     .then((data) => setPhotos(data.photos));
   }, []);

  return (
    <div>
      <h1 className="text-4xl" style={{lineHeight: '5rem', marginBottom: 20}}>PHOTO</h1>
      <div className="image-container">
        {photos.map((src, index) => (
          <div className="photo">
            <LazyLoadImage
              key={index}
              src={`${process.env.PUBLIC_URL}/img/photo/${src}`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;
