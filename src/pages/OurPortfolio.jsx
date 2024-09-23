import React, { useState, useEffect } from 'react';
import '../pagesCss/OurPortfolio.css';

const images = [
    'images/p3.jpeg', 'images/p16.jpeg', 'images/p20.jpeg', 'images/p4.jpeg', 'images/p9.jpeg',
    'images/pics.jpg', 'images/p17.jpeg', 'images/p18.jpeg', 'images/p1.jpeg', 'images/p19.jpeg',
    'images/founder.jpeg', 'images/p22.jpeg', 'images/p15.jpeg', 'images/p23.jpeg', 'images/p24.jpeg',
    'images/p25.jpeg', 'images/pic8.jpg', 'images/p27.jpeg', 'images/p12.jpeg', 'images/p13.jpeg',
    'images/p14.jpeg', 'images/p5.jpeg', 'images/p26.jpeg'
];

const OurPortfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

       
        checkScreenSize();

        
        window.addEventListener('resize', checkScreenSize);

       
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="container my-5 pt-5">
            <h3 className="text-center mb-4 fonts"><strong>Our <span className='texts'>Portfolio</span> </strong></h3>
            <p className="text-center mb-5">
            Welcome to our Portfolio! Here, we showcase the artistry and expertise of our talented makeup artists. Our portfolio is a testament to the wide range of styles and services we offer, from bridal makeovers to everyday elegance. Each look is carefully curated to highlight our commitment to beauty and excellence.
            </p>
            <div className="portfolio-grid">
                {images.slice(0, isMobile && !showAll ? 6 : images.length).map((src, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={src} className="portfolio-img" alt={`Project ${index + 1}`} />
                    </div>
                ))}
            </div>
           
            {isMobile && !showAll && (
                <div className="text-center mt-4">
                    <button className="btn btn-view-more" onClick={toggleShowAll}>
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default OurPortfolio;
