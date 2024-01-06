import bannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-10 mt-20 bg-[#F99F1C] rounded-3xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#FFEFE7] text-3xl font-medium">
          Deliver Food To Your <br /> Door Step|
        </h1>
        <p className="text-[#EBD6B8] text-xl">
          Authentic Food|, Quick Service,Fast Delivery
        </p>
      </div>
      <img src={bannerImage} alt="" />
    </div>
  );
};

export default Banner;
