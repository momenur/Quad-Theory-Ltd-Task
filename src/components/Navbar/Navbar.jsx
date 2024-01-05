import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between pt-8">
        <div>
          <h1 className="text-5xl">pti.</h1>
        </div>

        {/* Search Bar */}
        <div>
          <div className="bg-[#FEFEFE] flex items-center pl-2 py-1 rounded-md gap-1">
            <CiSearch className="text-[#F99F1C] font-bold h-[20px] w-[20px]" />
            <input
              className="bg-transparent placeholder:text-[#A1A1A1] placeholder:text-[18px] focus:border-none focus:outline-none w-[700px] h-[40px]"
              type="text"
              placeholder="Search Product"
            />
          </div>
        </div>

        {/* User Section */}
        <div>
          <p className="text-3xl">User</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
