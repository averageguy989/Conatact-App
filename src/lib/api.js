import {supabase} from "./supabaseClient"

export async function getContact() {
    try {
        const {data, error} = await supabase
        .from("contacts")
        .select("*")
        .order("name", {ascending: true})
        .limit(20)

        if(error){
            console.log("Supabase query erorr: ",error.message);
            return [];
        }

        return data || [];
    } catch(err){
        console.error("Unexpected error while fetching contacts:", err);
        return [];
    }
}

export default getContact;