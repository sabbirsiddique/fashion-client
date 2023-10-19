/* eslint-disable react/prop-types */

import BrandsCard from "./BrandsCard";

const Brands = ({brandss}) => {
    return (
        <div className="bg-[url('https://i.ibb.co/jbM8yX9/cool-background.png')]">
            <h1 className="text-3xl text-center p-4 font-bold font-rubik">
        Our BRANDs
      </h1>

      <div className="grid grid-cols-1 mx-auto p-6 sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 gap-8 lg:gap-12">
        

            {
                brandss.map(brand => <BrandsCard key={brand._id} brands={brand}></BrandsCard>)
            }
      </div>

        </div>
    );
};

export default Brands;