/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SelectedBrandCard = ({ selectedBrand }) => {
  const {
    _id,
    imgUrl,
    brandName,
    name,
    type,
    productImg,
    shdetails,
    description,
    price,
    rating,
  } = selectedBrand || {};
  console.log(selectedBrand);

  return (
    <div>
      <div>
        <div className="card bg-base-100 mb-10 mt-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={imgUrl} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button className="btn btn-primary">{brandName}</button>
            </div>
          </div>
        </div>
      </div>


      <h1 className="text-4xl font-bold text-center mt-10 mb-10">Products</h1>



      <div className="max-w-screen-2xl mx-auto gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="card bg-base-100 mb-10 mt-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/vLPNnpf/tshirt.jpg" className="rounded-xl" />
          </figure>
          <div className="text-center">
          <p className="text-2xl font-bold">Name: Mens Jordan Dri-FIT Football Shirt</p>
          <p>Brand name: ADIDAS</p>
          <p>Type: T-shirt</p>
          <p>Price: $40</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          
          <div className="card-body items-center text-center">
            <div className="card-actions">
              
            <Link to={`/details/${_id}`}>

            <button className="btn btn-primary">DETAILS</button>
            </Link>

            <Link to={`/updatepro/${_id}`}>
            <button className="btn btn-primary">UPDATE</button>
            </Link>
              
            </div>
          </div>
        </div>

        <div className="card bg-base-100 mb-10 mt-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/VTvwLn2/pants.jpg" className="rounded-xl" />
          </figure>
          <div className="text-center">
          <p className="text-2xl font-bold">Name: Jogger Basketball Pants</p>
          <p>Brand name: Levis</p>
          <p>Type: Pants</p>
          <p>Price: $90</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions">
            <Link to={`/details/${_id}`}>

            <button className="btn btn-primary">DETAILS</button>
            </Link>
            <Link to={`/updatepro/${_id}`}>
            <button className="btn btn-primary">UPDATE</button>
            </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 mb-10 mt-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/27nrSQw/hoddie.jpg" className="rounded-xl" />
          </figure>
          <div className="text-center">
          <p className="text-2xl font-bold">Name: Club Fleece</p>
          <p>Brand name: GUCCI</p>
          <p>Type: Hoodie</p>
          <p>Price: $80</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions">
            <Link to={`/details/${_id}`}>

            <button className="btn btn-primary">DETAILS</button>
            </Link>
            <Link to={`/updatepro/${_id}`}>
            <button className="btn btn-primary">UPDATE</button>
            </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 mb-10 mt-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/2nhrxrb/shoe.jpg" className="rounded-xl" />
          </figure>
          <div className="text-center">
          <p className="text-2xl font-bold">Name: Air Jordan 1 Retro High OG</p>
          <p>Brand name: NIKE</p>
          <p>Type: Shoe</p>
          <p>Price: $180</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <Link to={`/details/${_id}`}>

            <button className="btn btn-primary">DETAILS</button>
            </Link>
              <Link to={`/updatepro/${_id}`}>
            <button className="btn btn-primary">UPDATE</button>
            </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SelectedBrandCard;
