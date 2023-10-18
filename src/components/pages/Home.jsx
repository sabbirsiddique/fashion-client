import { useLoaderData } from "react-router-dom";
import Banner from "../Header/banner/Banner";
import Brands from "../Brands/Brands";

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

        </div>
    );
};

export default Home;