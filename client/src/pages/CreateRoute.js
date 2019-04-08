import React, { Component } from 'react'
import axios from "axios"
import states from "../Shared/States"
import ResultsDisplay from "../components/ResultsDisplay"
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
    ModalHeader,
    CardGroup } from 'reactstrap'

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
            searchCity: "",
            searchText: "",
            searchResults: null,

        }
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.searchPlaces = this.searchPlaces.bind(this)
        this.addStop = this.addStop.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value.trim().toLowerCase()
        })
    }

    searchPlaces() {
        let searchLoc = encodeURIComponent(this.state.searchCity)
        let searchTerm = encodeURIComponent(this.state.searchText)
        axios.get(`/api/places/search/${searchLoc}/${searchTerm}`)
        .then(res => {
            this.setState({
                searchResults: res.data.jsonBody.businesses
            })
        })
    }

    addStop(obj) {
        let { stops } = this.state
        stops.push(obj)
        this.setState(stops, () => {
            console.log(this.state.stops)
        })
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
                                    <option>Select a State</option>
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

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggle}>Search For Stop</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="searchCity">City to Search</Label>
                                <Input onChange={this.handleChange} type="text" name="searchCity" id="searchCity" placeholder="Saint Paul, MN"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="searchText">Search</Label>
                                <Input onChange={this.handleChange} type="text" name="searchText" id="searchText"></Input>
                            </FormGroup>
                            <Button onClick={this.searchPlaces} color="primary">Search</Button>
                        </Form>
                        <br />
                        <hr />
                        <br />
                        <CardGroup>
                            <ResultsDisplay clickHandler={this.addStop} results={this.state.searchResults} />
                        </CardGroup>
                    </ModalBody>
                </Modal>

            </Container>
        )
    }
}
