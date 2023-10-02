import React, { useEffect, useState } from "react";
import bg from "../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import { baseURL, apiKey } from "../../config/config.json";
import SingleSong from "../../components/SingleSong";

const Home = () => {
  const [allMusics, setAllMusic] = useState([]);

  const getMusics = async () => {
    const url = `${baseURL}/sample/?api_key=${apiKey}`;
    const response = await fetch(url);
    const musics = await response.json();
    console.log(musics);
    // set musics
    setAllMusic(musics);
  };

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto pt-5 px-4">
        <Link
          to="/edit"
          className="border border-[#8A97DA] hover:bg-[#8A97DA] hover:text-gray-50 w-full flex justify-center items-center py-3 text-2xl text-[#8A97DA] font-poppins  rounded-md"
        >
          Create +
        </Link>
        <div className="mt-5 ">
          <h1 className="text-2xl font-semibold">All songs</h1>
          <div className="mt-4">
            {allMusics.map((item) => (
              <SingleSong
                key={item?.id}
                id={item?.id}
                name={item?.name}
                date={item?.datetime}
              />
            ))}
          </div>
        </div>
        <div className="pb-5 mt-5">
          <Link
            to="/edit"
            className="border border-[#8A97DA] hover:bg-[#8A97DA] hover:text-white w-full flex justify-center items-center py-3 text-2xl text-[#8A97DA] font-poppins  rounded-md"
          >
            Create +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
