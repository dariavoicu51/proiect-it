import { useState } from "react";
import NavbarPrivate from "../components/NavbarPrivate";
import "./Postgrill.css";
import fireback from "../assets/fireback.png";

export default function Postgrill() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const grillData = {
      title,
      description,
      image,
    };

    console.log("Grill posted:", grillData);

    alert("Your grill was posted!");
  };

  return (
    <>
      <NavbarPrivate />

      <div
        className="postgrill-container"
        style={{
          backgroundImage: `url(${fireback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form className="postgrill-card" onSubmit={handleSubmit}>
          <h2>Grill name:</h2>
          <input
            type="text"
            placeholder="Enter grill name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h2>Description:</h2>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="upload-btn">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />
            📎 Upload photo
          </label>

          <button className="post-btn" type="submit">
            Post this grill!
          </button>
        </form>
      </div>
    </>
  );
}
