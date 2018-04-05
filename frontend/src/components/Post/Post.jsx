import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactQuill from 'react-quill';

const Post = props => (
    <Jumbotron>
        <h3>
            {
                props.creatorName + ': ' + props.title
            }
        </h3>
        <hr/>
        <ReactQuill
            value={props.content}
            theme="bubble"
            readOnly
        />
    </Jumbotron>
)

export default Post;