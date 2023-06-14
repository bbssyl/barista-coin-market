import MenuBar from "@/components/dashboard/MenuBar";
import SearchBar from "@/components/dashboard/SearchBar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-2 bg-gradient-to-r from-black/50 to-indigo-900/60 text-white">
      <MenuBar />
      <div className="flex flex-col w-full p-4">
        <SearchBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
