import React from 'react'

export const Slide = () => {

    const handleOnAnimationEnd = () => {
        const arrow = document.querySelector('.first-view__slide-arrow');
        arrow.style.animation = "slideDownOff .6s ease-in 1 alternate";
        setTimeout(() => {
            arrow.style.display = "none"
        }, 600);
    }

    return (
        <div className='first-view__slide-arrow' id="arrow" onAnimationEnd={handleOnAnimationEnd}>
            <i className="fas fa-arrow-down"></i>
        </div>
    )
}
