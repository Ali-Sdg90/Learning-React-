import React, { Component } from "react";

import styles from "./FetchAxios.module.css";

class GetPost extends Component {
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
            : fetch("https://jsonplaceholder.typicode.com/posts")
                  .then((response) => response.json())
                  .then((json) =>
                      this.setState(
                          (prevState) => ({
                              posts: json,
                              showPosts: !prevState.showPosts,
                          }),
                          () => {
                              console.log("=> Get", json);
                          }
                      )
                  );
    };

    postReq = () => {
        const body = JSON.stringify({
            title: "foo",
            body: "bar",
            id: 1,
        });

        const headers = {
            "Content-type": "application/json; charset=UTF-8",
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: body,
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => console.log("=> Post", json));
    };

    deleteReq = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => console.log("=> Delete", json));
    };

    render() {
        return (
            <div>
                <br></br>
                <h4 className={styles.fetch}>Fetch</h4>
                <br></br>
                <br></br>
                <br></br>
                <span>Get : </span>
                <button onClick={this.getReq}>
                    {this.state.showPosts ? "Hide Posts" : "Get Posts"}
                </button>

                <span> | Post :</span>
                <button onClick={this.postReq}>
                    {this.state.showPosts ? "Hide Posts" : "Post Req"}
                </button>

                <span> | Delete :</span>
                <button onClick={this.deleteReq}>Delete Posts</button>

                {/* {console.log(this.state.posts.length, this.state.showPosts)} */}

                {this.state.posts.length ? (
                    this.state.showPosts ? (
                        <div className={styles.container}>
                            {this.state.posts.map((post) =>
                                post.id <= "30" ? (
                                    <p key={post.id}>
                                        {post.id}. {post.title}
                                    </p>
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

export default GetPost;
