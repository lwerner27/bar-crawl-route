import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

export default function RegisterModal({ handleChange, toggle, isOpen, submitForm }) {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Register User
            </ModalHeader>
            <ModalBody>
                <Form>

                    <FormGroup>
                        <Label for="newUsername">Username</Label>
                        <Input onChange={handleChange} type="text" name="newUsername" id="newUsername" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="newPassword">Password</Label>
                        <Input onChange={handleChange} type="password" name="newPassword" id="newPassword" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input onChange={handleChange} type="password" name="confirmPassword" id="confirmPassword" />
                    </FormGroup>

                    <Button onClick={submitForm} color="primary">Submit</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
