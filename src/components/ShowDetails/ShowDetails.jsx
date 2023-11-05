import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
    const userpersonality=useLoaderData();
    const {name,email,phone}=userpersonality;
    
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default ShowDetails;