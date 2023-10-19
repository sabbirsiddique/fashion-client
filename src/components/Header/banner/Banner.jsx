const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/S3byGTT/pexels-kristina-paukshtite-3038601.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            Fashion and apparel express individuality, culture, and trends through clothing, impacting style and self-expression globally.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
