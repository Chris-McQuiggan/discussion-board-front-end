import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { string } from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';


class NewComment extends Component {

    constructor() {
        super()
        this.state = {
            content: ""
        };
    }

    static propTypes = {
        username: string.isRequired,
        email: string.isRequired,
    }

    static defaultProps = {
        username: "",
        email: ""
    }

    handleClick = (e) => {
        e.preventDefault();
        let body = {
            username: this.props.username,
            email: this.props.email,
            content: e.target[0].value
        }

        axios.post('http://localhost:5000/items/createItem', body)
            .then(() => {
                this.props.getAll()
            })
            .catch(error => { console.log(error) })
    }


    render() {
        return (
            <div>
                <Row>
                    <Col sm="3"></Col>
                    <Col sm="6">
                        <Form onSubmit={this.handleClick}>
                            <FormGroup>
                                <Label for="newComment">New Comment:</Label>
                                <Input type="textarea" name="text" id="newComment" required />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </div >
        );
    }
}
export default NewComment;