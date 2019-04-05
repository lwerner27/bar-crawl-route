import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class CreateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: null,
            username: null,
            jwt: null
        }
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>This is the Create Route page.</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
