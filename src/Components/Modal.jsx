/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, Container } from 'reactstrap';

//Import Modal components
import Header from './Header'
import Files from './Files'
import Buttons from './Buttons'
import StakeholderCollapse from './StakeholderCollapse'
import MessageCollapse from './MessageCollapse'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{ backgroundColor: '#37966F' }} onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>

        <div style={{ textAlign: 'right', marginRight: '0.5rem', marginTop: '0.5rem' }}>
          <CloseRoundedIcon onClick={() => toggle()} />
        </div>

        <Container>
          <Header />
          <StakeholderCollapse />
          <MessageCollapse />
          <Files />
        </Container>
        <hr style={{ width: '100%' }} />

        <Container>
          <Buttons />
        </Container>

      </Modal>
    </div>
  );
}

export default ModalExample;