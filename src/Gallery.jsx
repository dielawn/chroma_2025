import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';
import images from './GalleryImages';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsPlaying(false);
    };

    return (
        <div className="gallery-container">
            <h3 className='gallery-title'>Gallery</h3>
            {/* Main Image Container */}
            {/* Main Image Container - simplify to test */}
            <div className="carousel-slide">
                <div
                    className={`slide ${currentIndex === 0 ? 'active' : ''}`}
                >
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="carousel-image"
                    />
                </div>
            </div>           

            {/* Controls Container */}
            <div className="controls-container">
            <button 
                onClick={prevSlide}
                className="nav-button prev-button"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
                {/* Dot Indicators */}
                <div className="dots-container">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`dot-indicator ${currentIndex === index ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <button 
                onClick={nextSlide}
                className="nav-button next-button"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
                
            </div>
            {/* Play/Pause Button */}
            <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="play-pause-button"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
        </div>
    );
};

export default Gallery;