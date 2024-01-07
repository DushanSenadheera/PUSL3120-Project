import "./Upcoming_Movie_Add.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upcoming_Movie_Add = () => {
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
    <div className="Add_Movie_Form">
      <h3>Add Upcoming Movie</h3>
      <form onSubmit={handleSubmit}>
        <div className="Form_lables_n_inputs_style">
          <label htmlFor="movieName">Movie Name:</label>
          <input
            type="text"
            id="movieName"
            name="movieName"
            placeholder="Enter Movie Name"
            value={movieName}
            onChange={handleInputChange}
          />
        </div>

        <div className="Form_lables_n_inputs_style">
          <label htmlFor="movieCategory">Movie Category: </label>
          <select
            id="movieCategory"
            name="movieCategory"
            value={movieCategory}
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
            value={cast}
            onChange={handleCastChange}
          />
        </div>

        <div className="Form_lables_n_inputs_style">
          <label htmlFor="movieDetails">Movie Details:</label>
          <textarea
            id="movieDetails"
            name="movieDetails"
            placeholder="Enter Movie Description"
            value={movieDetails}
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
            value={videoLink}
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
              value={odcPrice}
              onChange={handleODCPriceChange}
            />

            <label htmlFor="boxPrice">Box Price: </label>
            <input
              type="text"
              id="boxPrice"
              name="boxPrice"
              placeholder="Enter Box Price"
              value={boxPrice}
              onChange={handleBoxPriceChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button className="Add_Movie_Submit_Button" type="submit">
            Submit
          </button>
          <button
            className="Add_Movie_Cancel_Button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upcoming_Movie_Add;
