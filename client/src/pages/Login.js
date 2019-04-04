import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: "",
            password: ""
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
                    <Col sm="12" md={{ size: 6, offset: 3}}>
                        <br/>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="username" name="username" id="username" placeholder="with a placeholder" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password placeholder" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button color="warning" block onClick={this.handleClick}>Submit</Button>
                            <Button color="success" block>Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
