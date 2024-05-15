
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Faq from "../components/Faq";
import Donar from "../components/Donar";


const Home = () => {
const data=useLoaderData()
// console.log(data)
    return (
        <div>
            <Carousel></Carousel>
            <Featured data={data}></Featured>
           <Faq></Faq>
           <Donar></Donar>
        </div>
    );
};

export default Home;