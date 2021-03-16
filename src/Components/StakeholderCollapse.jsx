import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

import Stakeholder from './Stakeholders'

const StakeholderCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div color="primary" onClick={toggle} style={{ marginBottom: '1rem', textAlign: 'right', marginRight: '1.4rem' }}>

        <KeyboardArrowDownRoundedIcon />
      </div>

      <Collapse isOpen={isOpen}>
        <Stakeholder />
      </Collapse>
    </div>
  );
}

export default StakeholderCollapse;