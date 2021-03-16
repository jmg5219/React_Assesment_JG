import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import Message from './Message'

const MessageCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div color="primary" onClick={toggle} style={{ marginBottom: '1rem', textAlign: 'right', marginRight: '1.4rem' }}>

        <KeyboardArrowDownRoundedIcon />
      </div>

      <Collapse isOpen={isOpen}>
        <Message />
      </Collapse>
      
    </div>
  );
}

export default MessageCollapse;