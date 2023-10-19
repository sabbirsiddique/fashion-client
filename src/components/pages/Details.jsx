import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="max-w-full h-screen mx-auto bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-screen-2xl flex justify-center items-center mx-auto p-5"></div>
      <div className="flex justify-center items-center font-rubik gap-40 mt-10">
        <div data-aos="fade-up">
          <h1 className="text-2xl mb-6 font-bold">
            Our Stadium collection pairs replica design <br /> details with
            sweat-wicking technology to <br /> give you a game-ready look inspired by <br />
            your favourite team.
          </h1>
          <ol className="">
            <li className="list-disc text-lg font-semibold">
            Colour Shown: Black/Tour Yellow/Tour Yellow
            </li>
            <li className="list-disc text-lg font-semibold">
            Style: DR3969-011
            </li>
          </ol>
          <Link to="/mycart">
            <button className="mt-10 btn-info p-3 rounded-md font-bold bg-sky-200">Add to Cart</button>
          </Link>
        </div>
        <div className="hover:scale-105 transition duration-700">
          <img src="https://i.ibb.co/vLPNnpf/tshirt.jpg" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Details;
