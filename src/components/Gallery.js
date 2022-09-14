import React from 'react'

function Gallery(props) {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/1.jpg" class="d-block w-100" alt="pix.jpg"/>
        </div>
        <div class="carousel-item">
          <img src="/2.jpg" class="d-block w-100" alt="pix2.jpg"/>
        </div>
        <div class="carousel-item">
          <img src="./3.jpg" class="d-block w-100" alt="pix3.jpg"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Gallery