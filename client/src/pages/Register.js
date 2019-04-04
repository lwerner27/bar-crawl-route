import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleClick() {
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Form>
                            <br/>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" name="username" id="username" placeholder="" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button color="warning" block onClick={this.handleClick}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
