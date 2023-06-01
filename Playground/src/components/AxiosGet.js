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

    render() {
        return (
            <div>
                <br></br>
                <h4 className={styles.axios}>Axios</h4>
                <br></br>
                <br></br>
                <br></br>
                <span>Get : </span>
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
            </div>
        );
    }
}

export default axiosGet;
