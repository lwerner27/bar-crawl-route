import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
    
export default function ResultsDisplay({ results, clickHandler }) {
    let resultCards = <div></div>
    if (results) {
        resultCards = results.map(({ image_url, name, location: { address1, city, state} } , index) => (
            <Col key={index}>
                <Card style={styles.card}>
                    <CardImg src={image_url} style={styles.img} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{`${address1}\n${city}, ${state}`}</CardText>
                        <Button 
                            onClick={() => {clickHandler({name, image_url, address1, city, state})}}
                        >
                            Add Stop!
                        </Button>
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