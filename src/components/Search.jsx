import React, {useState} from "react";
import Form from "react-bootstrap/Form";


export default function Search(props) {
    const { songs, setSongs } = props;
    const [searchString, setSearchString] = useState("");

    const handleChange = (e) => {
        setSearchString(e.target.value);
        const filteredResult = songs.filter(song => song.primary_artist.name === searchString);
        setSongs(filteredResult);
    }
  return (
    <Form.Group>
        <p>{searchString}</p>
      <Form.Control      
        onChange={handleChange}
        type="text"
        size="lg"
        placeholder="Enter email"
      />
    </Form.Group>
  );
}
