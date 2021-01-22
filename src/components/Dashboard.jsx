import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import headphone from "../images/headphone.jpg";
import Track from "../components/Track";
import nophoto from "../images/nophoto.png";
import Search from "../components/Search";
import CircularProgress from "@material-ui/core/CircularProgress";

import Nav from "./Nav";

export default function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [likes, setLikes] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);
  const updateLikes = (e) => {
    if (likes > 0) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
  };
  useEffect(() => {
    let url = "https://genius.p.rapidapi.com/artists/16775/songs";
    const fetchData = async () => {
      const res = await fetch(url, {
        headers: {
          "x-rapidapi-key":
            "ee148929damsh9d062b415343b7bp1892abjsn946bf05ab8f5",
        },
      });
      const fetchedSongs = await res.json();
      setSongs(fetchedSongs.response.songs);
      setPageLoading(true);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Row style={{ margin: 0 }}>
        <Col style={{ padding: 0 }} xs={6} md={1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
            }}
          >
            <div style={{ width: "50px", height: "50px", margin: "2rem" }}>
              <Image style={{ width: "100%" }} src={headphone} />
            </div>
            <div style={{ width: "50px", height: "50px", margin: "2rem" }}>
              <Image style={{ width: "100%" }} src={nophoto} roundedCircle />
            </div>
          </div>
        </Col>
        <Col xs={12} md={11} style={{ padding: 0, backgroundColor: "#f7f7f7" }}>
          <div
            style={{ marginBottom: "3rem", boxShadow: "0 2px 3px lightgray" }}
          >
            <Nav />
            <Container style={{ height: "50vh" }}>
              <Jumbotron>
                <h1>Welcome to the dashboard</h1>
                <Search songs={songs} setSongs={setSongs} />
              </Jumbotron>
            </Container>
          </div>
          <div style={{ textAlign: "center" }}>
            {pageLoading ? (
              <Container>
                {songs.map((song) => (
                  <Track updateLikes={updateLikes} likes={likes} track={song} />
                ))}
              </Container>
            ) : (
              <CircularProgress />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
