import React from 'react'

function Gallery(props) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/1.jpg" className="d-block w-100" alt="..." />
          <div className={`carousel-caption d-none d-md-block text-${props.mode==='light'?'light':'dark'}`}>
            <h5>Place</h5>
            <p>Very Beautiful Place</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/2.jpg" className="d-block w-100" alt="..." />
          <div className={`carousel-caption d-none d-md-block text-${props.mode==='light'?'light':'dark'}`}>
            <h5>Another Place</h5>
            <p>Even more beautiful place.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/3.jpg" className="d-block w-100" alt="..." />
          <div className={`carousel-caption d-none d-md-block text-${props.mode==='light'?'light':'dark'}`}>
            <h5>One more Place</h5>
            <p>The most beautiful place.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Gallery