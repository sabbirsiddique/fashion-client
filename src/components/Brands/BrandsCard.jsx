/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandsCard = ({ brands }) => {
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
    rating
  } = brands;
  return (
    <div>
      <Link to={`/brandinfo/${_id}`}>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imgUrl} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn btn-primary">{brandName}</button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandsCard;
