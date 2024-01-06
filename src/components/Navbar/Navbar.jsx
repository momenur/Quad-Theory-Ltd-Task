import { CiSearch, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between pt-8">
        <div>
          <h1 className="text-5xl">pti.</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-10">
          <div className="bg-[#FEFEFE] flex items-center pl-2 py-1 rounded-xl gap-1">
            <CiSearch className="text-[#F99F1C] font-bold h-[20px] w-[20px]" />
            <input
              className="bg-transparent placeholder:text-[#A1A1A1] placeholder:text-[18px] focus:border-none focus:outline-none w-[700px] h-[60px]"
              type="text"
              placeholder="Search Product"
            />
          </div>
          <div className="bg-[#FEFEFE] h-[60px] flex items-center px-6 rounded-xl">
            <h1 className="text-xl font-medium font">MENU</h1>
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center p-[18px] text-3xl  rounded-full text-white bg-[#FD6011]">
          <CiUser />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
