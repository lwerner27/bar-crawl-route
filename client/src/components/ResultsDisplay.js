import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
    
export default function ResultsDisplay({ results }) {
    let resultCards = <div></div>
    if (results) {
        resultCards = results.map((result, index) => (
            <Col key={index}>
                <Card style={styles.card}>
                    <CardImg src={result.image_url} style={styles.img} />
                    <CardBody>
                        <CardTitle>{result.name}</CardTitle>
                        <CardText>{`${result.location.address1}\n${result.location.city}, ${result.location.state}`}</CardText>
                        <Button>Add Stop!</Button>
                    </CardBody>
                </Card>
            </Col>
        ))
    }

    return (
        <div className="card-container" style={styles.cardContainer}>
            { resultCards }
        </div>
    )
}

const styles = {
    cardContainer: {
        display: "flex",
        overflowX: "scroll",
    },
    card: {
        width: 300,
        height: "auto" 
    },
    img: {
        width: "100%", 
        height: 150, 
        objectFit: "cover"
    }
}