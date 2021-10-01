import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import Avatar01 from "../../images/Home/avatar01.jpg";
import Avatar02 from "../../images/Home/avatar02.jpg";
import Avatar03 from "../../images/Home/avatar03.jpg";
import Avatar04 from "../../images/Home/avatar04.jpg";
import Avatar05 from "../../images/Home/avatar05.jpg";
import Avatar06 from "../../images/Home/avatar06.jpg";

function Testamonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testamonial-container">
      <p className="text-center why mb-0">
        OUR <span className="choose">CUSTOMER REVIEWS</span>
      </p>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto"
              variant="top"
              src={Avatar01}
            />
            <Card.Body>
              <Card.Title>Fernando</Card.Title>
              <Card.Text>
                Great product and service! Great product and service! Great
                product and service!
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto mt-2"
              variant="top"
              src={Avatar02}
            />
            <Card.Body>
              <Card.Title>Julia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto"
              variant="top"
              src={Avatar03}
            />
            <Card.Body>
              <Card.Title>James Bond</Card.Title>
              <Card.Text>
                They came out great and our clients loved them! Thank you for
                everything!.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto"
              variant="top"
              src={Avatar04}
            />
            <Card.Body>
              <Card.Title>Bora</Card.Title>
              <Card.Text>
                Quick and easy way to have tshirts made. Pricing is very
                reasonable and very qu...
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto mt-2"
              variant="top"
              src={Avatar05}
            />
            <Card.Body>
              <Card.Title>Teraaa</Card.Title>
              <Card.Text>
                Delivered quickly and exactly as I ordered! Good quality too!
                Delivered quickly
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }} className="testamonial-card shadow">
            <Card.Img
              className="testamonial-img text-center m-auto"
              variant="top"
              src={Avatar06}
            />
            <Card.Body>
              <Card.Title>Aathirea</Card.Title>
              <Card.Text>
                Sage Was terrific She was very understanding And she truly cares
                about the custo...
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testamonial;
