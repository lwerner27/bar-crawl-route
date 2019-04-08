import React from 'react'
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default function StopList({ stops }) {
    let { itemsContainer, itemContainer, stopImg, imgContainer, btnContainer } = styles
    let listItems = <div></div>
    if (stops.length) {
        listItems = stops.map((stop, index) => (
            <ListGroupItem key={index}>
                <div className="items-container" style={itemsContainer}>
                    <div className="img-container" style={imgContainer}>
                        <img src={stop.image_url} style={stopImg} alt=""/>
                    </div>
                    <div className="item-container" style={itemContainer}>
                        <ListGroupItemHeading>{stop.name}</ListGroupItemHeading>
                        <ListGroupItemText>{`${stop.address1}\n ${stop.city}, ${stop.state}`}</ListGroupItemText>
                    </div>
                </div>
                <div className="btn-container" style={btnContainer}>
                    <Button color="danger">Move Up</Button>
                    <Button color="danger">Move Down</Button>
                </div>
            </ListGroupItem>
        ))
    }
  return (
    <ListGroup>
        {listItems}
    </ListGroup>
  )
}

const styles = {
    itemsContainer: {
        display: "flex"
    },
    stopImg: {
        objectFit: "cover",
        height: 100,
        width: 100
    },
    itemContainer: {
        flexDirection: "column",
        paddingLeft: 15
    },
    imgContainer: {
        height: "100px",
        width: "100px"
    },
    btnContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10
    }
}
