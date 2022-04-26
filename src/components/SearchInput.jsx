const SearchInput = () => (
  <div className="flex items-center bg-white rounded-md w-[337px] h-[44px] px-2 gap-x-4">
    <img src={require("../assets/images/search.png")} alt="Search" className="w-[24px]"/>
    <input type="text" placeholder="Search" className="outline-none w-full" />
  </div>
);

export default SearchInput;
