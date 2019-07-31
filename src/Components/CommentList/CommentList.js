import React, { Component } from 'react';
import { string, array } from 'prop-types'
import NewComments from './NewComment';
import Comments from './Comments';


class CommentList extends Component {

    static propTypes = {
        username: string.isRequired,
        email: string.isRequired,
        data: array.isRequired
    }

    static defaultProps = {
        username: "",
        email: "",
        data: []
    }

    render() {
        return (
            <div>
                <NewComments username={this.props.username} email={this.props.email} getAll={this.props.getAll} />
                {this.props.data.map(comment => (
                    <Comments
                        key={comment._id}
                        username={comment.username}
                        content={comment.content}
                        />
             ))}
            </div>
        );
    }
}
export default CommentList;