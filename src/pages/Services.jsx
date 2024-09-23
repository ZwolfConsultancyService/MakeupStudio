import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import services from '../Data/data';
import '../pagesCss/Services.css';

const Services = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,   
            slidesToSlide: 1 // Slides one card at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const formatTitle = (title) => {
        const match = title.match(/(.*?)(\s*\(.*\))/);
        if (match) {
            return (
                <>
                    {match[1]}<span className="bracket-text">{match[2]}</span>
                </>
            );
        }
        return title;
    };

    return (
        <section className='bgcolor '>
            <Container className="my-5 pt-5">
                <h2 className="text-center mb-5 fonts fw-bold text-white">Our <span className='texts'>Services</span></h2>
                {services.map((category, index) => (
                    <div key={index}>
                        <h3 className="category-title">{category.category}</h3>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // Server-side rendering
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                            itemClass="carousel-item-padding-40-px"
                        >
                            {category.services.map((service, index) => (
                                <div className='service-card' key={index}>
                                    <Card className="large-card">
                                        <Card.Img variant="top" src={service.image} />
                                        <Card.Body>
                                            <Card.Title className='title-fonts'>{formatTitle(service.title)}</Card.Title>
                                            <Card.Text className='service-description'>{service.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default Services;
