import React, { useEffect, useState } from "react";
import bg from "../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import { baseURL, apiKey } from "../../config/config.json";
import SingleSong from "../../components/SingleSong";

const Home = () => {
  const [allMusics, setAllMusic] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const getMusics = async () => {
    setIsLoading(true);
    try {
      const url = `${baseURL}/sample/?api_key=${apiKey}`;
      const response = await fetch(url);
      const musics = await response.json();

      // set musics
      setAllMusic(musics);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
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
          to="/edit/new"
          className="border border-[#8A97DA] hover:bg-[#8A97DA] hover:text-gray-50 w-full flex justify-center items-center py-3 text-2xl text-[#8A97DA] font-poppins  rounded-md"
        >
          Create +
        </Link>
        <div className="mt-5 ">
          <h1 className="text-2xl font-semibold">
            All songs{" "}
            {isloading && (
              <i className="fa-solid fa-spinner text-lg animate-spin ml-1 text-[#8A97DA]"></i>
            )}
          </h1>
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
            to="/edit/new"
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
