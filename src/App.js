import { useEffect } from "react";
import { supabase } from "./lib/supabaseClient";

function App() {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from("contacts").select("*");
      console.log("Data:", data, "Error:", error);
    };
    test();
  }, []);

  return <h1>Contact List App</h1>;
}

export default App;
