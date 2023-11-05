
import PropTypes from 'prop-types';
import "./Userstyle/User.css"
import { Link } from 'react-router-dom';
const Data = ({user}) => {
    const {name,email,phone,id}=user;
  
    return (
        <div className='diba'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>click me</button></Link>
        </div>
    );
};

Data.propTypes = {
    user:PropTypes.object
};
export default Data;
