import React, { Component } from "react";

import axios from "axios";

import styles from "./FetchAxios.module.css";

class axiosGet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            showPosts: false,
        };
    }

    getReq = () => {
        this.state.showPosts
            ? this.setState((prevState) => ({
                  showPosts: !prevState.showPosts,
              }))
            : axios("https://jsonplaceholder.typicode.com/posts").then(
                  (response) => {
                      this.setState((prevState) => ({
                          posts: response.data,
                          showPosts: !prevState.showPosts,
                      }));
                  }
              );
    };

    deleteReq = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                console.log(`${response.request.responseURL} Deleted.`);
                const updatedPosts = this.state.posts.filter(
                    (post) => post.id !== id
                );
                this.setState({ posts: updatedPosts });
            });
    };

    render() {
        return (
            <div>
                <br></br>
                <span>Delete : </span>
                <button onClick={this.getReq}>
                    {this.state.showPosts ? "Hide Posts" : "Get Posts"}
                </button>
                {this.state.showPosts ? (
                    this.state.posts ? (
                        <div className={styles.container}>
                            {this.state.posts.map((post) =>
                                post.id <= "30" ? (
                                    <div key={post.id}>
                                        <h3>
                                            {post.id}. {post.title}
                                        </h3>
                                        <p>{post.body}</p>
                                        <button
                                            onClick={() =>
                                                this.deleteReq(post.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                        {post.id < "30" ? <hr></hr> : ""}
                                    </div>
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    ) : (
                        ""
                    )
                ) : (
                    ""
                )}
                {this.state.showPosts ? "" : <br></br>}
                <br></br>
                <hr></hr>
            </div>
        );
    }
}

export default axiosGet;
