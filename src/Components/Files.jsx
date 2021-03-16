import React from 'react'
import ImageUpload from './ImageUpload'


export default function Header() {
    return (
        <>

            <h1 style={{ color: 'gray', fontSize: '1rem', marginLeft: '1.5rem' }}>
                FILES (2)
            </h1>

            <ImageUpload />

        </>
    );
}


