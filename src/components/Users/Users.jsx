import { useLoaderData } from "react-router-dom";
import Data from "../Data/Data";
import "../DIba/Diba.css"


const Users = () => {
    const users= useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>Our users:{users.length}</h1>
            <div className="diba-container">
             {
                users.map(user => <Data key={user.id} user={user}></Data>)
             }
            </div>
        </div>
    );
};

export default Users;