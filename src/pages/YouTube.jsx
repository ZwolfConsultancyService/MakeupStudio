import React from 'react';
import '../pagesCss/YouTube.css';

const YouTube = () => {
    return (
        <section className="youtube-section mt-2 ">
            <div className="youtube-container pb-2">
                <h2 className="youtube-heading pb-4 fs-1 ">
                    <strong>Visit Our <span className='text-danger'>Youtube </span>Channel</strong>
                </h2>
                <div className="video-wrapper">
                    <iframe
                        width="1000"
                        height="auto"
                        src="https://www.youtube.com/embed/kD2fvNJg43I?si=2UPZ-5Uzfcyn1TI2"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default YouTube;
