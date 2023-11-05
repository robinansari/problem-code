import { useLoaderData } from "react-router-dom";
import Postal from "../Postal/Postal";
const Posts = () => {
    const posts =useLoaderData();
    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            <div className="diba-container">
                {
               posts.map(postal =><Postal key={postal.id} postal={postal}></Postal>)
                }
            </div>
        </div>
    );
};

export default Posts;