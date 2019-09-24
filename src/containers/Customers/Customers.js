import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Customers extends Component{
    constructor(props){
        super(props);

        this.state = {
            users:props.users,
            filter:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({filter:e.target.value.toLowerCase()});
    }
    

    render(){

        let filtereduser = this.state.users.filter((user)=>{
            return user.name.toLowerCase().includes(this.state.filter);
        })
        return(
            <section className='container'>
                <div>
                <h1>Customers</h1>
                <div>
                    <button>PDF</button>
                    <button>Excel</button>
                    <form>
                        <label>Search:</label>
                        <input onChange={this.handleChange}></input>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Customer Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        filtereduser.map((customer, index)=>{
                            return(
                                <tr className='entry' key={index}>
                                    <td>{customer.name}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.state}</td>
                                    <td><Link to={`/Orders:${customer.id}`}>{customer.orders.length}</Link></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
            </section>
        )
    }
}
function mapStateToProps(state){
    return {
        users:[
            ...state.users
        ]
    }
}
export default connect(mapStateToProps, null)(Customers);