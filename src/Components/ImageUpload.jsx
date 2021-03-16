import React from 'react'
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';

export default function ImageUpload() {
    return (
        <div style={{ 'marginBottom': '1.5rem', display: 'flex' }}>
            <div style={{ display: 'flex', height: '2rem', width: '10rem', backgroundColor: '#E4E4ED', marginLeft: '1.5rem', padding:'0.3rem'  }}>
                <PictureAsPdfRoundedIcon />
                Louver design ...
            </div>

            <div style={{ display: 'flex', height: '2rem', width: '10rem', backgroundColor: '#E4E4ED', marginLeft: '1.5rem', padding:'0.3rem' }}>
                <ImageRoundedIcon/>
                Site photo
            </div>

        </div>
    );
}


