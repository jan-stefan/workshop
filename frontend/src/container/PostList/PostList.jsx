import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post/Post.jsx';
import { ScaleLoader } from 'react-spinners';
import { actions } from '../../actions';
import Centering from '../../components/Centering/Centering';
import { Alert, Collapse, PageHeader, Grid, Button, FormGroup, FormControl } from 'react-bootstrap';
import ReactQuill from 'react-quill';

const proxyToValue = proxy => proxy.target.value;

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            title: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
    }
    submitPost() {
        this.props.sendPost({
            data: {
                id: 1,
                creatorName: this.props.username,
                title: this.state.title,
                content: this.state.userInput
            },
            cridentials: {
                username: this.props.username,
                password: this.props.password
            }
        })
        this.setState({
            userInput: '',
            title: ''
        })
    }
    handleUserInput(userInput) {
        this.setState({ userInput });
    }
    handleTitleInput(proxy) {
        this.setState({ title: proxyToValue(proxy) });
    }
    render() {
        return (
            <div>
                {
                    this.props.username === null || this.props.password === null ?
                        <Centering>
                            <Alert
                                bsStyle="warning"
                            >
                                <strong>You have to login to proceed</strong>
                            </Alert>
                        </Centering>
                        :
                        this.props.loading ?
                            <Centering>
                                <ScaleLoader />
                            </Centering>
                            :
                            this.props.error ?
                                ''
                                :
                                <Grid>
                                    <Button bsStyle="primary" onClick={this.props.reloadPosts}>
                                        Reload
                                    </Button>
                                    <PageHeader>
                                        Write something nice!
                                    </PageHeader>
                                    <FormGroup>
                                        <FormControl
                                            type="text"
                                            placeholder="Title"
                                        />
                                    </FormGroup>
                                    <ReactQuill
                                        value={this.state.userInput}
                                        onChange={this.handleUserInput}
                                    />
                                    <Centering>
                                        <hr />
                                        <Button bsStyle="primary" onClick={this.submitPost}>
                                            Submit
                                        </Button>
                                    </Centering>
                                    <hr />
                                    {
                                        this.props.posts.map((post, index) => (
                                            <Post
                                                key={'post-' + index}
                                                creatorName={post.creatorName}
                                                title={post.title}
                                                content={post.content}
                                            />
                                        ))
                                    }
                                </Grid>


                }
                <Collapse in={this.props.error}>
                    <Alert
                        bsStyle="danger"
                    >
                        <strong>Oh snap! There went something wrong!</strong>
                    </Alert>
                </Collapse>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.data,
        ...state.ui.postList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendPost: postData => { dispatch(actions.sendPost(postData)) },
        reloadPosts: () => {dispatch(actions.reloadPosts())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)