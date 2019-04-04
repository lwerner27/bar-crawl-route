import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3}}>
                        <br/>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="username" name="username" id="username" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password placeholder" />
                            </FormGroup>
                            <Button color="warning" block>Submit</Button>
                            <Button color="success" block>Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
