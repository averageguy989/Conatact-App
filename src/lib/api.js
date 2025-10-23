import {supabase} from "./supabaseClient"

export async function getContact(searchTerm = "") {
    try {
        let query = supabase
            .from("contacts")
            .select("*")
            .order("name", { ascending: true })
            .limit(20);

        if(searchTerm.trim() !== ""){
            query = query.ilike("name", `%${searchTerm}%`)
        }

        const { data, error } = await query;
        if(error){
            console.error("Supabase query error:", error.message);
            return [];
        }

        return data || [];
    } catch(err){
        console.error("Unexpected error while fetching contacts:", err);
        return [];
    }
}

export default getContact;