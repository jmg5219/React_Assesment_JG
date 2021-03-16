import React from 'react'
import { Button } from 'reactstrap';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

export default function Buttons() {
    return (

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <div style={{ marginBottom: '1rem', marginLeft: '1.5rem' }}>

                <Button size="lg" style={{ backgroundColor: '#37966F' }}>
                    SIGN-OFF
                </Button>

                <Button style={{ marginLeft: '1.4rem' }} size="lg" outline color="danger" >
                    REJECT
                </Button>{' '}

            </div>

            <ShareRoundedIcon style={{ marginTop: '1rem' }} />

        </div>
    );
}


