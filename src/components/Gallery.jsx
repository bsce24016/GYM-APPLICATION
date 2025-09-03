import React from 'react';

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpeg",
    "/img8.jpg",
  ];

  return (
    <section className='gallery'>
      <h1>BETTER BEATS BEST</h1>
      <div className='images'>
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt={`galleryImage-${index}`} />
          ))}
        </div>
        <div>
          {gallery.slice(3, 5).map((element, index) => (
            <img key={index} src={element} alt={`galleryImage-${index}`} />
          ))}
        </div>
        <div>
          {gallery.slice(5).map((element, index) => (
            <img key={index} src={element} alt={`galleryImage-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
