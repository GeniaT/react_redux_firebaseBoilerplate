import React from 'react';
import { connect } from 'react-redux';
import Component1 from '../components/Component1';

class Component1Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOne: 1
    }
  }

  render () {
    return (
      <div>
        <Component1 />
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
// export default connect(mapStateToProps, mapDispatchToProps)(Component1Container);
export default Component1Container;
