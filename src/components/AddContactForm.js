import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

function AddContactForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    try {
      setLoading(true);
      const { data, error: supabaseError } = await supabase
        .from("contacts")
        .insert([formData])
        .select();

      if (supabaseError) throw supabaseError;

      setFormData({ name: "", email: "", phone: "" });
      setTimeout(()=>{
        console.log("Adding contact")
      },2000);
      onAdd?.(data[0]);
    } catch (err) {
      console.error("Error adding contact:", err.message);
      setError("Failed to add contact. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col gap-2">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-1 border-gray-200 focus:ring-emerald-400 outline-none"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-1 border-gray-200 focus:ring-emerald-400 outline-none"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-1 border-gray-200 focus:ring-emerald-400  outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-200 text-black px-4 py-2 rounded-md hover:bg-emerald-500 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Contact"}
          </button>
          <button
            type="button"
            disabled={loading}
            className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 disabled:opacity-50"
            onClick={() => onAdd?.(null)}
          >
            Cancel
          </button>
        </div>
        
      </form>
    </>
  );
}

export default AddContactForm;
