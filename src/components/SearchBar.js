import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
    return (
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-emerald-400 w-5 h-5" />
        <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
      />
      </div>
    );
  }
  
  export default SearchBar;
  