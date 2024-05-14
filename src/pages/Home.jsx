
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";


const Home = () => {
const data=useLoaderData()
console.log(data)
    return (
        <div>
            <Carousel></Carousel>
            <Featured data={data}></Featured>
 <h1>This is Home.</h1>
        </div>
    );
};

export default Home;