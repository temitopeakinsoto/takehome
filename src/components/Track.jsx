import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Track(props) {
  const { likes, updateLikes, track } = props;
  return (
    <Jumbotron
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2>{track.primary_artist.name}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "60%"
        }}
      >
        <audio id="test_audio" controls>
          <source
            src={`https://genius.p.rapidapi.com/artists/16775/songs/${track.id}`}
            type="audio/ogg"
          />
        </audio>

        <span>
          <h3 onClick={updateLikes}>{likes} </h3>
        </span>
      </div>
    </Jumbotron>
  );
}
