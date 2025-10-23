function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    );
  }
  
  export default SearchBar;
  