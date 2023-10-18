import React from "react";
import { Container, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class CardContainer extends React.Component {
  render() {
    return (
      <Container>
        <Card
          style={{
            borderWidth: "1px",
            borderColor: "black",
            borderStyle: "solid",
            width: "80vw",
            height: "60vh",
            margin: "auto",
            display: "flex",
            alignItems: "flex-end",
            marginTop: "30vh",
          }}
        >
        </Card>
      </Container>
    );
  }
}

export default CardContainer;
