import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

export default function RegisterModal({ handleChange }) {
    return (
        <Modal>
            <ModalHeader>
                Register User
            </ModalHeader>
            <ModalBody>
                <Form>

                    <FormGroup>
                        <Label for="newUsername">Username</Label>
                        <Input onChange={this.handleChange} type="text" name="newUsername" id="newUsername" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="newPassword">Password</Label>
                        <Input onChange={this.handleChange} type="password" name="newPassword" id="newPassword" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input onChange={this.handleChange} type="password" name="confirmPassword" id="confirmPassword" />
                    </FormGroup>

                    <Button color="primary">Submit</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
