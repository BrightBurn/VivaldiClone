import * as USER from '../actions/userActions';
const data = [
    {
        name:'X',
        city:'Little Rock',
        state: 'RT',
        orders: [{
            product:'Apples',
            quantity:5,
            date:new Date()
        }]
    }]
function userReducer(users=[...data], action){
    switch(action.type){
        case(USER.ADD_USER):{
            return [
                ...users,
                action.payload
            ]
        }
        case(USER.DELETE_USER):{
            return users.filter((user)=>{return user.id!==action.payload});
        }

        default:return users;
    }
}

export default userReducer;