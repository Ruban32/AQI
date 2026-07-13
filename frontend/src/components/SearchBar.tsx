import { useState } from "react";

function SearchBar() {

  const [city,setCity]=useState("");

  const search=()=>{

    alert("Search : "+city);

  }

  return(

<div className="bg-white p-6 rounded-xl shadow mt-8">

<input

className="border w-full p-3 rounded-lg"

placeholder="Enter City"

value={city}

onChange={(e)=>setCity(e.target.value)}

/>

<button

onClick={search}

className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 w-full hover:bg-blue-700"

>

Search

</button>

</div>

);

}

export default SearchBar;
