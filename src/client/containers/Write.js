import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import Textarea from '../components/Textarea';


const fetchUrl = 'http://localhost:3000/api/save';

class Write extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.context.router.push('/login');
    }
  }
  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) {
      this.context.router.push('/');
    }
  }
  render() {
    return (
      <main className="write">
        <Row>
          <Col xs={6} offset={3} className="boxShadow">
            <Textarea fetchUrl={fetchUrl} />
          </Col>
        </Row>
      </main>
    );
  }
}

Write.propTypes = {
  isAuthenticated: PropTypes.bool
};

Write.contextTypes = {
  router: React.PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};
export default connect(mapStateToProps)(Write);
