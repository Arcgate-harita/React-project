import React, { useState, useEffect } from "react";
import "../components/Component.css";

const Component = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 768 pixels (typical tablet width)
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Add event listener to check for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initially when the component mounts

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImages = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const handlePrevImages = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Determine the number of visible images based on screen size
  const numVisibleImages = isMobileView ? 1 : 3;

  // Slice the images array to display the appropriate number of images
  const visibleImages = images.slice(startIndex, startIndex + numVisibleImages);

  const showScrollButtons = images.length > numVisibleImages;

  return (
    <div className={`image-gallery${isMobileView ? " mobile-view" : ""}`}>
      {showScrollButtons && (
        <button
          className="scroll-button1"
          onClick={handlePrevImages}
          disabled={startIndex === 0}
        >
          &lt;
        </button>
      )}
      <div className="image-row">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`circleImage${isMobileView ? " mobile-image" : ""}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {showScrollButtons && (
        <button
          className="scroll-button2"
          onClick={handleNextImages}
          disabled={startIndex === images.length - numVisibleImages}
        >
          &gt;
        </button>
      )}
      {selectedImage && (
        <div className="modal">
          <span className="close-button" onClick={handleCloseModal}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Full Screen"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
};

export default Component;
