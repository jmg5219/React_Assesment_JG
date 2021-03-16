import React from 'react'
import './Stakeholder.css'



export default function Stakeholders() {

   

    return (
        <>
            <div style={{ display: 'flex' }}>
               
                <h1 style={{ color: 'gray', fontSize: '1rem', marginLeft: '1.5rem' }}>STAKEHOLDERS</h1>

                <h2 style={{fontSize:'0.75rem', marginBottom:'0', marginLeft:'0.5rem', marginTop:'0.1rem'}}>2 yes, 1 no, 1 pending</h2>

            </div>
            
            <ul >
                <li className="stakeholderListAccepted">
                    Steven Banks (steven@acme.com)
                </li>
                <li className="stakeholderListAccepted">
                    Dan Smith (steven@acme.com)
                </li>
                <li className="stakeholderListRejected">
                    Xavier King (x@y.com)
                </li>
                <li className="stakeholderList">
                    John Boggs (steven@acme.com)
                </li>
            </ul>

            <hr style={{width:'90%', paddingLeft:'0',textAlign:"left"}}/> 


        </>
    );
}


