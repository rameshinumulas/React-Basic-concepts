import React, { Component } from 'react';
import HOC from './HOC';
import { actionUse } from '../redux/action';
import { connect } from 'react-redux';
import { Mycontext } from './ContextApi';

class FirstClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 'hello'
        }
        this.firstRef = React.createRef(null)
    }
    render() {
        const { viewDetails, setDetails } = this.context;
        console.log(this.props, 'calss')
        return (
            <div>
                {this.props.counter}
                <h2>heee121</h2>
                <button onClick={this.props.actionOne}>Click</button>
                {this.props?.value?.name}
            </div>
        )
    }
}

FirstClass.PropType = {
    name: String
}

const mapStateToProps = (state) => {
    console.log(state, 'jjj')
    return {
        counter: state.reducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionOne: () => dispatch(actionUse(9))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FirstClass)



