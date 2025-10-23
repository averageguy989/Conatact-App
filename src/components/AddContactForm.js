function AddContactForm() {
    return (
      <form className="space-y-2">
        <input className="w-full p-2 border rounded-md" placeholder="Name" />
        <input className="w-full p-2 border rounded-md" placeholder="Email" />
        <input className="w-full p-2 border rounded-md" placeholder="Phone" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Contact
        </button>
      </form>
    );
  }
  
  export default AddContactForm;
  