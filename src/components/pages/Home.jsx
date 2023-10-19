import { useLoaderData } from "react-router-dom";
import Banner from "../Header/banner/Banner";
import Brands from "../Brands/Brands";
import Stats from "./Stats";
import Accordion from "../accordion/Accordion";

const Home = () => {

    const brandss = useLoaderData();

    return (
        <div>

            <div>
            <Banner></Banner>

            </div>

            <div>
                <Brands brandss={brandss}></Brands>
            </div>


            <div className="flex justify-center items-center"><Stats></Stats></div>
            
            <div className="my-10"><Accordion></Accordion></div>

        </div>
    );
};

export default Home;