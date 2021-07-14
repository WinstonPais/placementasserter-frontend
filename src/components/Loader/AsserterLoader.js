import React, { useState, useEffect } from 'react';
import Loadercode from './Loadercode/Loadercode';

const AsserterLoader = (props) => {
    const [isLoading, didPageLoad] = useState(true);
    useEffect(() => {
        document.body.style.backgroundColor = "black";
        setTimeout(() =>{
            didPageLoad(false);
        }, 1500)
    }, []);

    return (
        <>
        {
            isLoading
                ? <Loadercode/>
                :   props.pageComponent
        }
        </>
    )
}

export default AsserterLoader;

