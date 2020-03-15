import React, {Component} from 'react';
import {getBlogs} from '../../redux/actions/blogs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor (props){
        super(props);
        this.props.getBlogs();
    }

    static propTypes = {
        getBlogs: PropTypes.func.isRequired,
        blogs: PropTypes.object,
    }

    render(){
        return (
            <div>
            <h1>hello world</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs.all_blogs
});

export default connect(mapStateToProps, {getBlogs})(Home);
