import React from 'react';
import { connect } from 'react-redux';
import Component3 from '../components/Component3';

class Component3Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOne: 1
    }
  }

  render () {
    return (
      <div>
        <Component3 />
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
// export default connect(mapStateToProps, mapDispatchToProps)(Component3Container);

export default Component3Container;
