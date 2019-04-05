import React, { Component } from 'react'
import states from "../Shared/States"
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class CreateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: states,
            userInfo: {
                userId: null,
                username: null,
                jwt: null
            },
            name: null,
            city: null,
            state: null,
            description: null
        }
    }

    render() {
        let states = this.state.states.map(element => <option>{element}</option>)
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <br/>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" name="name" id="name" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="city">City:</Label>
                                <Input type="text" name="city" id="city" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="state">State:</Label>
                                <Input type="select" name="state" id="state">
                                    {states}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Text Area</Label>
                                <Input type="textarea" name="description" id="description" />
                            </FormGroup>
                            <Button color="warning" block>Add Stop</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
