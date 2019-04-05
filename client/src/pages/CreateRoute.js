import React, { Component } from 'react'
import states from "../Shared/States"
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    Modal, 
    ModalBody, 
    ModalHeader } from 'reactstrap'

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
            description: null,
            stops: [],
            searchText: ""
        }
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.searchPlaces = this.searchPlaces.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    searchPlaces() {
        let encodedText = encodeURIComponent(this.state.searchText)
    }

    render() {
        let states = this.state.states.map((element, index) => <option key={index}>{element}</option>)
        return (
            <Container>
                <Row>
                    <Col sm="12" md="3">
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
                            <Button color="warning" block onClick={this.toggle}>Add Stop</Button>
                        </Form>
                    </Col>
                </Row>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Search For Stop</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="searchText">Search</Label>
                                <Input onChange={this.handleChange} type="text" name="searchText" id="searchText"></Input>
                            </FormGroup>
                            <Button onClick={this.searchPlaces} color="primary">Search</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </Container>
        )
    }
}
