import React, { useState, useEffect, useRef } from 'react';
import './Brands.css'; // Import CSS for styling

// Replace these image paths with your actual image paths
const brands = [
    { name: 'Facebook', img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { name: 'YouTube', img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' },
    { name: 'Instagram', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
];

const Marquee = () => {
  const [speed, setSpeed] = useState(50); // Speed of the marquee
  const marqueeRef = useRef(null);

  // Function to increase speed
  const increaseSpeed = () => {
    setSpeed((prev) => Math.max(prev - 10, 10)); // Speed up the animation
  };

  // Function to decrease speed
  const decreaseSpeed = () => {
    setSpeed((prev) => prev + 10); // Slow down the animation
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      increaseSpeed();
    };

    const handleMouseLeave = () => {
      decreaseSpeed();
    };

    const currentMarquee = marqueeRef.current;
    currentMarquee.addEventListener('mouseenter', handleMouseEnter);
    currentMarquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentMarquee.removeEventListener('mouseenter', handleMouseEnter);
      currentMarquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="marquee-container">
      <button className="control" onClick={decreaseSpeed}>
        &#8592; {/* Left Arrow */}
      </button>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
          {brands.map((brand, index) => (
            <div key={index} className="brand">
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
      <button className="control" onClick={increaseSpeed}>
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Marquee;
