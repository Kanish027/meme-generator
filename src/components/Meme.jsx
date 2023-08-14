import React, { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMeme(data.data.memes)
    }
    fetchData()
  }, [])

  const handleMemeImg = () => {
    const getRandomImg = Math.floor(Math.random() * 100);
    const url = allMeme[getRandomImg].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  const handleChange = (event) => {
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value
      }
    })
  };

  return (
    <main>
      <div className="form">
        <div className="form--inputs">
          <input
            type="text"
            placeholder="Top Text"
            className="form--input"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="form--input"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button type="submit" className="form--btn" onClick={handleMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Memes" className="meme--image" />
        <h2 className="meme--text top ">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
