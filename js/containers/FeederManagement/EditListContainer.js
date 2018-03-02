/**
 * Created by Aaron on 2017/11/14.
 */
import React, {Component,propTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class EditListContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    const {paramsBasket, actions, dispatch} = this.props
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
          actions,
          dispatch
        })
    })

    return (
      <div>
        {childrenWrapper}
      </div>
    )
  }
}

EditListContainer.propTypes = {
}

function mapStateToProps(state) {
  return {
    paramsBasket: {
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditListContainer)
