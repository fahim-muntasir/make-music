import React, { useState, useEffect } from "react";
import bg from "../../assets/bg1.jpg";
import { PiMusicNoteDuotone } from "react-icons/pi";
import { baseURL, apiKey } from "../../config/config.json";
import { useParams } from "react-router-dom";

const SharePage = () => {
  const [loading, setLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [notShareLoadin, setNotshareLoading] = useState(false);
  const [song, setSong] = useState({});
  const [locations, setLocations] = useState([]);
  const { id } = useParams();

  const getSong = async () => {
    setLoading(true);
    const url = `${baseURL}/sample/${id}/?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    setSong(data);
    setLoading(false);
  };

  const getLocations = async () => {
    const url = `${baseURL}/location/?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    setLocations(data);
  };

  useEffect(() => {
    getSong();
    getLocations();
  }, []);

  const updateSharing = async (locationId, name, sharingCurrentStatus) => {
    try {
      const url = `${baseURL}/location/${locationId}/?api_key=${apiKey}`;

      const data = {
        sharing: !sharingCurrentStatus,
        api_key: apiKey,
        name,
      };

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const addShareToLoading = async (locationId) => {
    try {
      const url = `${baseURL}/sampletolocation/?api_key=${apiKey}`;

      const data = {
        api_key: apiKey,
        sample_id: id,
        location_id: locationId,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  // song share handler
  const shareHandler = async (locationId, name, sharingCurrentStatus) => {
    try {
      // button loading state
      setShareLoading(true);

      // update the frontend state
      const locationCopy = [...locations];
      const locationShareToggle = locationCopy.map((item) =>
        item.id === locationId ? { ...item, sharing: !item.sharing } : item
      );

      // set location state
      setLocations(locationShareToggle);

      // update sharing status from location endpoint
      await updateSharing(locationId, name, sharingCurrentStatus);

      // add share collection to shareTolocation endpoint
      await addShareToLoading(locationId);

      // button loading state
      setShareLoading(false);
    } catch (error) {
      console.error(error);
      // button loading state
      setShareLoading(false);
    }
  };

  const notSharedHandler = async (locationId, name) => {
    setNotshareLoading(true);
    try {
      // update the frontend state
      const locationCopy = [...locations];
      const locationShareToggle = locationCopy.map((item) =>
        item.id === locationId ? { ...item, sharing: false } : item
      );

      // set location state
      setLocations(locationShareToggle);

      // update sharing status from location endpoint
      await updateSharing(locationId, name, true);

      setNotshareLoading(false);
    } catch (error) {
      console.error(error);
      setNotshareLoading(false);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="bg-no-repeat pb-[303px]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-semibold font-poppins mt-5">Share song</h1>
        <div className="pb-4">
          <div className="mt-4">
            {!loading && (
              <div className="px-4 py-4 md:py-5 lg:py-5 md:flex lg:flex bg-[#8A97DA] items-center rounded-md justify-between">
                <div className="flex items-center mb-4 md:mb-0 lg:mb-0">
                  <i className="fa-solid fa-music text-4xl md:text-5xl lg:text-5xl text-white"></i>
                  <div className="ml-5">
                    <h3 className="text-white text-3xl md:text-4xl lg:text-4xl font-bowlby">
                      {song?.name}
                    </h3>
                    <p className="text-white font-poppins text-sm">
                      {new Date(song?.datetime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3">
                    Preview
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            {locations.map((item) => (
              <div
                key={item.id}
                className="mt-5 flex  justify-end items-center "
              >
                <p className=" text-lg md:text-xl lg:text-xl font-poppins font-medium ">
                  {item?.name}
                </p>
                <button
                  onClick={() => shareHandler(item.id, item.name, item.sharing)}
                  className={`py-2 text-black text-lg md:text-xl lg:text-xl font-poppins font-medium w-36 md:w-48 lg:w-48 ${
                    item.sharing
                      ? "bg-[#8A97DA] text-white"
                      : "hover:bg-[#8A97DA] hover:text-white"
                  } rounded border-2 border-[#8A97DA] mx-3`}
                  disabled={shareLoading}
                >
                  {item.sharing ? "Shared" : "Share"}
                </button>
                <button
                  onClick={() => notSharedHandler(item.id, item.name)}
                  className="py-2 text-black text-lg md:text-xl lg:text-xl font-poppins font-medium w-36 md:w-48 lg:w-48 hover:bg-[#8A97DA] hover:text-white rounded border-2 border-[#8A97DA] "
                  disabled={notShareLoadin}
                >
                  Not Shared
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;
