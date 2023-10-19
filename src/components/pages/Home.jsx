import { useLoaderData } from "react-router-dom";
import Banner from "../Header/banner/Banner";
import Brands from "../Brands/Brands";
import Stats from "./Stats";
import Accordion from "../accordion/Accordion";
import { useState } from "react";
import "./styless/home.css"

const Home = () => {

    const brandss = useLoaderData();

    const[isDark, setDark]=useState(false);

    const toggleTheme = ()=>{
        setDark(!isDark);
    }

    const themeClass = isDark ? "dark" : "light";

    return (
        <div className={`bg-${themeClass}-bg text-${themeClass}-text`}>
            <button onClick={toggleTheme}>Toogle theme</button>

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