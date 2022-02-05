import React, { useState, useEffect } from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

function ImageChangeOnMouseOver() {
    return ( 
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/images/hi.png" 
                                    secondaryImg="/static/images/bye.png"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/images/bye.png" 
                                    secondaryImg="/static/images/hi.png"
                                    alt="" />
        </div>
     );
};

export default ImageChangeOnMouseOver;