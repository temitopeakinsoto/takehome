import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Track(props) {
    const { likes, track } = props
  return (
    <Jumbotron>
      <h1>{track.primary_artist.name}</h1>
      <audio id="Test_Audio" controls>
        <source
          src={`https://genius.p.rapidapi.com/artists/16775/songs/${track.id}`}
          type="audio/ogg"
        />
      </audio>
      <span>
        <p>{likes} </p>
      </span>
    </Jumbotron>
  );
}
