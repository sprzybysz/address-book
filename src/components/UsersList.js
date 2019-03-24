import React from 'react';
import UserItem from './UserItem';
import { Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { getDetails } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onItemClick = user => {
    this.props.getDetails(user);
    console.log('test')
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <UserItem  key={user.id} user={user} />
      );
    });
  }

  render() {
    console.log(this.props.userDetails) 
    return (
      <React.Fragment>
        <Row className="d-flex mt-5">
          <Col lg="2">
          </Col>
          <Col lg="8">
            <Row>
              {this.renderUsers()}
            </Row>
          </Col>
          <Col lg="2">
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userDetails: state.userDetails
  }
}
export default connect(mapStateToProps, { getUsers, getDetails })(UsersList);
