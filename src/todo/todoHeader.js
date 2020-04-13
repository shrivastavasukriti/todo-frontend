import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisiblity } from './actions/getTodoActions'

function todoHeader(props) {
    return (
        <p>
            <i className="fa fa-bars"></i>
            {/* <i className="fas fa-filter ml-4" aria-hidden="true"></i> */}
            <span className="dropdown">
                <i className="fas fa-filter ml-4 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* <i className="fa fa-search ml-4" aria-hidden="true"></i> */}
                </i>
                <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Label</a>
                    <a className="dropdown-item" href="#">Priority</a>
                    <a className="dropdown-item" href="#">Due Date</a>
                </span>
            </span>
            <span className="float-right">
                <Link to='/' onClick={() => props.setVisiblity('SHOW_ACTIVE')}>  <span className="mr-4">Task</span></Link>
                <Link to='/archive' onClick={() => props.setVisiblity('SHOW_COMPLETED')}> <span className="mr-4">Archive</span></Link>

            </span>
        </p>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        setVisiblity: (filter) => dispatch(setVisiblity(filter))
    }
}
export default connect(null, mapDispatchToProps)(todoHeader)
