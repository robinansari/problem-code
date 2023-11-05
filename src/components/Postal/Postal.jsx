
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Postal = ({postal}) => {
    const{title,body,id}=postal;
    console.log(id);
    return (
        <div className='diba'>
            <h1>Id number:{id}</h1>
            <p>name:{title} </p>
            <p>{body}</p>
            {/* <Link to={`/postal/${id}`}>Click me</Link> */}
            {/* <Link to={`/postal/${id}`}>Click me</Link> */}
            <Link to={`/postal/${id}`}>Click me</Link>
        </div>
    );
};

Postal.propTypes = {
    postal:PropTypes.object
};
export default Postal;




