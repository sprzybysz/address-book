import React from 'react';
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { getDetails } from '../actions';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = user => {
    this.props.getDetails(user);
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { user } = this.props;

    return (
      <Col lg="6">
        <Card body className="m-3">
          <CardTitle className="font-weight-bold" >{user.name}</CardTitle>
          <CardText>
            <FontAwesomeIcon icon="at" /> {user.email}<br />
            <FontAwesomeIcon icon="phone" /> {user.phone}
          </CardText>
          <Button onClick={this.onItemClick.bind(this, user)} color="info">More</Button>
        </Card>
       
        <Modal isOpen={this.state.modal} toggle={this.onItemClick} className={this.props.className}>
          <ModalHeader className="bg-info text-white text-uppercase" toggle={this.onItemClick}>
            <FontAwesomeIcon icon="user" /> {user.name}
          </ModalHeader>
          <ModalBody>
            <h6 className="text-uppercase font-weight-bold">Personal details:</h6>
            <p>
              <span className="font-weight-bold">email: </span>{user.email}<br/>
              <span className="font-weight-bold">phone: </span>{user.phone}<br />
              <span className="font-weight-bold">website: </span>{user.website}<br />
              <span className="font-weight-bold">company name: </span>{user.company.name}<br/>
              <span className="font-weight-bold">address: </span>{user.address.street} {user.address.suite}, {user.address.city} {user.address.zipcode}<br />
            </p> 
            <p></p>
          </ModalBody>
        </Modal>
      </Col>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    details: state.userDetails
  }
}
export default connect(mapStateToProps, { getDetails })(UserItem);
