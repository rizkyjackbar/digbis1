// import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl, text, link, prevSlide, nextSlide }) => {
    return (
        <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: `url('${imageUrl}')` }}>
                <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p className="text-black text-2xl my-4">{text}</p>
                        <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href={link}>get menu</a>
                    </div>
                </div>
            </div>
            <label htmlFor={prevSlide} className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor={nextSlide} className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        </div>
    );
};

Slide.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    prevSlide: PropTypes.string.isRequired,
    nextSlide: PropTypes.string.isRequired
};

export default Slide;
