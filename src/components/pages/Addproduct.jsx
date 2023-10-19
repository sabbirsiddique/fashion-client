import Swal from "sweetalert2";


const Addproduct = () => {
  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const imgUrl = form.imgUrl.value;
    const brandName = form.brandName.value;

    const name = form.name.value;
    const type = form.type.value;

    const productImg = form.productImg.value;
    const shdetails = form.shdetails.value;

    const description = form.description.value;
    const price = form.price.value

    const rating = form.rating.value;

    const productAdded = {
      imgUrl,
      brandName,
      name,
      type,
      productImg,
      shdetails,
      description,
      price,
      rating
    };

    console.log(productAdded);

    fetch('http://localhost:5000/brands',{
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(productAdded)
  })
      .then(res=>res.json())
      .then(data =>{
          console.log(data)
          if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Product added successfully',
                'success'
              )
        }
          
      })
  };

  return (
    <div className="bg-[url('https://i.ibb.co/QHGXCvH/bg.jpg')] p-24">
      <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAdd}>
        {/* 1st row */}
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">
                Brand Image url(optional)
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imgUrl"
                required
                placeholder="Image url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                required
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                required
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* 3rd row */}
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Product Image url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="productImg"
                required
                placeholder="Product Image url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Short Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shdetails"
                required
                placeholder="Short Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        

        {/* 4th row */}


        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                required
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


        {/* 5th row */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                required
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block mt-5"
        />
      </form>
      </div>
    </div>
  );
};

export default Addproduct;
