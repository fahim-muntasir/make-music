import React, { useState, useEffect } from "react";
import { baseURL, apiKey } from "../../config/config.json";
import { useParams } from "react-router-dom";
import SingleSong from "../../components/SingleSong";

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
    <div className="pb-[303px]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-[#800080] font-poppins mt-5">
          Share This Sample
        </h1>
        <div className="pb-4">
          <div className="mt-4">
            {!loading && song.id && (
              <SingleSong
                id={song?.id}
                name={song?.name}
                date={song?.datetime}
                recording_data={song?.recording_data}
                type={song?.type}
              />
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
                      ? "bg-[#800080] text-white"
                      : "hover:bg-[#800080] hover:text-white"
                  } rounded border-2 border-[#800080] mx-3`}
                  disabled={shareLoading}
                >
                  {item.sharing ? "Shared" : "Share"}
                </button>
                <button
                  onClick={() => notSharedHandler(item.id, item.name)}
                  className="py-2 text-black text-lg md:text-xl lg:text-xl font-poppins font-medium w-36 md:w-48 lg:w-48 hover:bg-[#800080] hover:text-white rounded border-2 border-[#800080] "
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
