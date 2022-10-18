import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetchImageMeme();
  }, []);

  function fetchImageMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(
        (result) => {
          let newImageList = result.data.memes.map(img => img.url);

          let randomIndex = Math.floor(Math.random() * newImageList.length/10);
          setImageList(newImageList.slice(randomIndex, randomIndex + 30));
        },
        (error) => {}
      )
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mb-3">
        <Button variant="outline-primary" onClick={fetchImageMeme}>Get Memes</Button>{' '}
      </Row>
      <Row >
        {imageList.map((item, index) => {
          return <Col key={index} xs={12} md={6} lg={4} className="mb-3 text-center">
            <img alt="" src={item} width="300px" style={{minWidth: "150px"}}></img> 
          </Col>
        })}
      </Row>
    </Container>
  );
}

export default App;
