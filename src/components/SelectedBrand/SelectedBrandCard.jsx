/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Slider from "./Slider";

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
            <h1 className="text-4xl font-bold text-center mt-10 mb-10">Products</h1>
        <div>

        </div>
      </div>
    </div>
  );
};

export default SelectedBrandCard;
