import React from 'react';
import { connect } from 'react-redux';
import Component2 from '../components/Component2';

class Component2Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOne: 1
    }
  }

  render () {
    return (
      <div>
        <Component2 />
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//
// })
//
// const mapDispatchToProps = (dispatch) => ({
//
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Component2Container);

export default Component2Container;
