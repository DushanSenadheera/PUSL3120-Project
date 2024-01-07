import Data from "./Movie_Data_Upcoming.json";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin_Edit_Upcoming = () => {
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [cast, setCast] = useState("");
  const [movieDetails, setMovieDetails] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [odcPrice, setODCPrice] = useState("");
  const [boxPrice, setBoxPrice] = useState("");

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setMovieCategory(e.target.value);
  };

  const handleCastChange = (e) => {
    setCast(e.target.value);
  };

  const handleMovieDetailsChange = (e) => {
    setMovieDetails(e.target.value);
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleODCPriceChange = (e) => {
    setODCPrice(e.target.value);
  };

  const handleBoxPriceChange = (e) => {
    setBoxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // after submission
    console.log("Submitted data:", {
      movieName,
      movieCategory,
      cast,
      movieDetails,
      bannerImage,
      videoLink,
      odcPrice,
      boxPrice,
    });
  };

  const handleCancel = () => {
    // After Cancel

    console.log("Form Cancelled");
  };

  return (
    <div className="Edit_Movie_Form">
      <h3>Add Upcoming Movie</h3>
      {Data.map((items) => (
        <form key={items.key} onSubmit={handleSubmit}>
          <div className="Form_lables_n_inputs_style">
            <label htmlFor="movieName">Movie Name:</label>
            <input
              type="text"
              id="movieName"
              name="movieName"
              value={items.title}
              placeholder="Movie Name"
              onChange={handleInputChange}
            />
          </div>

          <div className="Form_lables_n_inputs_style">
            <label htmlFor="movieCategory">Movie Category: </label>
            <select
              id="movieCategory"
              name="movieCategory"
              value={items.category}
              onChange={handleCategoryChange}
            >
              <option value="">Select a Category</option>
              <option value="ActionAdventure">Action & Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>

          <div className="Form_lables_n_inputs_style">
            <label htmlFor="cast">Cast:</label>
            <input
              type="text"
              id="cast"
              name="cast"
              placeholder="Enter Cast Members (e.g., Actor 01, Actor 02)"
              value={items.cast}
              onChange={handleCastChange}
            />
          </div>

          <div className="Form_lables_n_inputs_style">
            <label htmlFor="movieDetails">Movie Details:</label>
            <textarea
              id="movieDetails"
              name="movieDetails"
              placeholder="Enter Movie Description"
              value={items.moviedetails}
              onChange={handleMovieDetailsChange}
              style={{ height: "200px" }}
            />
          </div>

          <div className="Form_lables_n_inputs_style">
            <label htmlFor="bannerImage">Upload Banner: </label>
            <input
              type="file"
              id="bannerImage"
              name="bannerImage"
              accept="image/*"
              onChange={handleBannerImageChange}
            />
          </div>

          <div className="Form_lables_n_inputs_style">
            <label htmlFor="videoLink">Link (Trailer Video):</label>
            <input
              type="link"
              id="videoLink"
              name="videoLink"
              placeholder="Enter Video Link"
              value={items.link}
              onChange={handleVideoLinkChange}
            />
          </div>

          <div className="Form_lables_n_inputs_style">
            <div className="set-prices">
              <label htmlFor="odcPrice">ODC Price: </label>
              <input
                type="text"
                id="odcPrice"
                name="odcPrice"
                placeholder="Enter ODC Price"
                value={items.odc}
                onChange={handleODCPriceChange}
              />

              <label htmlFor="boxPrice">Box Price: </label>
              <input
                type="text"
                id="boxPrice"
                name="boxPrice"
                placeholder="Enter Box Price"
                value={items.box}
                onChange={handleBoxPriceChange}
              />
            </div>
          </div>

          <div className="button-group">
            <button className="Edit_Movie_Submit_Button" type="submit">
              Update
            </button>
            <button
              className="Edit_Movie_Cancel_Button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <br />
        </form>
      ))}
    </div>
  );
};

export default Admin_Edit_Upcoming;
