import React, { useEffect, useState } from "react";
import bg from "../../assets/bg1.jpg";
import { baseURL } from "../../config/config.json";
import SingleSong from "../../components/SingleSong";

const Home = () => {
  const [allMusics, setAllMusic] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const getMusics = async () => {
    setIsLoading(true);
    try {
      const url = `${baseURL}/sample`;
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
      className="bg-no-repeat pb-5"
    >
      <div className="max-w-7xl mx-auto pt-5 px-4">
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
                recording_data={item?.recording_data}
                type={item?.type}
                editbutton={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
