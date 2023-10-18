/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const BrandsCard = ({ brands }) => {
  const {
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
    </div>
  );
};

export default BrandsCard;
