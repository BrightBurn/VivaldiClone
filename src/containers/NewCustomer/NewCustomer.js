import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as user from '../../redux/actions/userActions';
import {connect} from 'react-redux';

class NewCustomers extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{
                name:null,
                city:null,
                state:null,
                orders:[]
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value,
                orders:[]
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.user);
        this.props.addUser(this.state.user);
    }
    render(){
        return(
            <section className='container'>
                <h1>New Customer</h1>
                <form className='customerForm' onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input onChange={this.handleChange} name='name'></input>
                <label>City:</label>
                <input onChange={this.handleChange} name='city'></input>
                <label>State:</label>
                <input onChange={this.handleChange} name='state'></input>
                <button type='submit'>Submit</button>
                </form>
            </section>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addUser:user.addUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewCustomers);