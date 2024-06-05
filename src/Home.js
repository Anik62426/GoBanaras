import React, { useState, useEffect } from "react";
export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [dogsPreseved, setDogsPreseved] = useState([]);
  const [text, setText] = useState("");


  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); // using fetch api to fetch data
        const data = await res.json();
        setDogs(data);
        setDogsPreseved(data)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);

  const handleSubmit = async (data) => {  // filtering data
    const Filterdata = dogsPreseved.filter((bk) =>{ if(bk.name.toLowerCase().includes(data) || bk.name.includes(data))return bk})
    setText(data)
    setDogs([...Filterdata])
   console.log(Filterdata)
  }

 

  return (
    <>
       <div className=" flex justify-center ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for users"
          className="mt-5 my-4 py-2 px-4 rounded max-w-[500px] shadow w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white placeholder-white"
          value={text}
          onChange={(e) => handleSubmit(e.target.value)}
        />
     </div>

      <div className=" grid justify-center">
        {dogs?.map((ele)=><div>
<article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] pb-2 mb-3 pt-1 mt-1 max-w-[400px]"
>
  <div className="rounded-[10px] bg-white p-4  sm:p-6">
    <h2  className="block text-xl text-black"> {ele.name} </h2>
      <h3 className="mt-0.5 text-sm font-medium text-gray-900">
        {ele.email}  {"|"} {ele.username}
      </h3>
    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        {ele.phone}
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        {ele.website}
      </span>
    </div>
  </div>
</article>
          </div>)}
      </div>
      <div>

      </div>
      
    </>
  );
}
