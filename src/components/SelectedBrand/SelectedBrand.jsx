/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedBrandCard from "./SelectedBrandCard";



const SelectedBrand = () => {

  const [selectedBrand, setSelectedBrand] = useState({});
  const { _id } = useParams();

  const brandInfo = useLoaderData();

  useEffect(() => {
    const findBrand = brandInfo.find((singleBrand) => singleBrand._id == _id);

    setSelectedBrand(findBrand);
  }, [brandInfo, _id]);

  return (
    <div>
      <div className="carousel font-rubik max-w-screen-2xl rounded-xl mx-auto flex bg-cover h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LC5y7tX/Screenshot-2023-10-17-193415.jpg"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black text-white h-full w-full bg-opacity-50 p-4 rounded-lg">
              <p className="text-center mt-[360px] text-4xl font-bold">
                <marquee direction="left">GET 10% OFF</marquee>
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/PWHKCYm/Screenshot-2023-10-17-202545.jpg"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black text-white h-full w-full bg-opacity-50 p-4 rounded-lg">
              <p className="text-center mt-[360px] text-4xl font-bold">
                <marquee direction="left">GET 10% OFF</marquee>
              </p>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/hHB80vF/Screenshot-2023-10-18-231842.jpg"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black text-white h-full w-full bg-opacity-50 p-4 rounded-lg">
              <p className="text-center mt-[360px] text-4xl font-bold">
                <marquee direction="left">GET 10% OFF</marquee>
              </p>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <SelectedBrandCard selectedBrand={selectedBrand}></SelectedBrandCard>

      <div></div>
    </div>
  );
};

export default SelectedBrand;
