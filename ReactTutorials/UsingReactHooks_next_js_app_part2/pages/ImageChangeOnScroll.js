import React, { useState, useEffect } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

function ImageChangeOnScroll() {

    const [currentImageName, setCurrentImageName] = useState("NONE");
    const [mouseEventCount, setMouseEventCount] = useState(0);

    useEffect( () => {
        window.document.title = `ImageName: ${currentImageName}`;
        console.log(`useEffect: setting title to ${currentImageName}`);
    }, [currentImageName]);

    let images = [0,1,0,1,0,1,0,1]
    return ( 
        <div>
            <span>mouseEventCount: ${mouseEventCount}</span>
            {images.map((img) => {
                return (
                    <div 
                    onMouseOver={() => {
                        setCurrentImageName(img);
                        console.log(`onMouseOver:${img}`)
                        setMouseEventCount(mouseEventCount + 1)
                    }}>
                    <ImageToggleOnScroll primaryImg="/static/images/bye.png"
                        secondaryImg="/static/images/hi.png"
                        alt="" />
                    </div>
                );
            })}
        </div>
     );
};

export default ImageChangeOnScroll;