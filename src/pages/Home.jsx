
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Faq from "../components/Faq";
import Donar from "../components/Donar";
import Carusel, { Carousel5 } from "../components/Carusel/Carusel";
import Location from "../components/Location/Location";


const Home = () => {
const data=useLoaderData()
// console.log(data)
    return (
        <div>
            {/* <Carousel></Carousel> */}
            <Carousel5></Carousel5>

            <Featured data={data}></Featured>
           <Faq></Faq>
           <Location></Location>
           <Donar></Donar>
           {/* <Carusel></Carusel> */}
        </div>
    );
};

export default Home;