import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchInput from "./SearchInput";

const Navbar = () => (
  <div className="h-[78px] px-[97px] w-screen bg-info flex justify-center items-center fixed top-0 z-50">
    <div className="h-[54px] flex justify-between items-center w-full">
      <div className="flex items-center gap-x-6">
        <Logo />
        <SearchInput />
      </div>
      <div>
        <Menu />
        <Button
          classname="bg-base-100 text-secondary font-thin normal-case hover:bg-secondary hover:text-base-100"
          text="Login / Signup"
        />
      </div>
    </div>
  </div>
);

export default Navbar;
