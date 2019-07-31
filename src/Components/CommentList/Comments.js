import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { string } from 'prop-types'



class Comments extends Component {

    static propTypes = {
        username: string.isRequired,
        email: string.isRequired
    }

    static defaultProps = {
        username: "",
        email: ""
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="3"></Col>
                    <Col sm={{ size: '6', offset: 0 }}>
                        <div className="p-2 bg-info my-1 rounded">
                            <Row>
                            <div className="p-2 bg-secondary my-1 rounded">
                                <Col sm={{ size: 'auto', offset: 0 }}>{this.props.username}</Col>
                           </div>
                            </Row>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>{this.props.content}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Comments;