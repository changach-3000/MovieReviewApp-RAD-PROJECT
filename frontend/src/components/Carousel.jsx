// Importing the React library
import React from 'react';
// Functional component definition for the Carousel
function Carousel() {
  // Returning JSX for the Carousel component
  return (
    // Carousel container with id, class, and data attributes for Bootstrap carousel
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel inner container for holding individual carousel items */}
      <div className="carousel-inner">
        {/* First carousel item with image and 'active' class to show it by default */}
        <div className="carousel-item active">
          <img src="/images/slider-badag.jpg" className="d-block w-100" alt="..."/>
        </div>
        {/* Additional carousel items with different images */}
        <div className="carousel-item">
          <img src="/images/slider-badging.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/slider-scale.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/slider-scales.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
            {/* Previous button for carousel navigation */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        {/* Previous button icon */}
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* Visually hidden text for screen readers */}
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Next button for carousel navigation */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        {/* Next button icon */}
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        {/* Visually hidden text for screen readers */}
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Exporting the Carousel component as the default export
export default Carousel;