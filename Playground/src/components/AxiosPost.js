import React, { Component } from "react";

import axios from "axios";

import styles from "./FetchAxios.module.css";

class AxiosPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            savePost: [],
            showPost: false,
        };
    }

    changeHandler = (event) => {
        // console.log(event.target.name);
        this.setState(
            {
                [event.target.name]: event.target.value,
            },
            () => {
                // console.log(this.state);
            }
        );
    };

    postReq = (event) => {
        const { title, body, showPost } = this.state;

        event.preventDefault();
        showPost
            ? this.setState((prevState) => ({
                  showPost: !prevState.showPost,
              }))
            : axios
                  .post("https://jsonplaceholder.typicode.com/posts", {
                      title: title,
                      body,
                  })
                  .then((response) =>
                      this.setState(
                          (prevState) => ({
                              savePost: response.data,
                              showPost: !prevState.showPost,
                          }),
                          () => {
                              // console.log("=> Post")
                          }
                      )
                  );
        // .then((response) => console.log(response));
    };

    render() {
        const { title, body, savePost, showPost } = this.state;
        return (
            <>
                <br></br>
                <form>
                    <fieldset>
                        <legend>Post :</legend>
                        <br></br>
                        <label>Title : </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler}
                            required
                        ></input>
                        <br></br>
                        <br></br>
                        <label>Body : </label>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler}
                            required
                        ></input>
                        <br></br>
                        <br></br>
                        <input
                            type="submit"
                            onClick={this.postReq}
                            value={showPost ? "Hide Post" : "Post Req"}
                        ></input>
                    </fieldset>

                    {/* {console.log(savePost)} */}

                    {showPost ? (
                        <div className={styles.container}>
                            <h3>1. {savePost.title}</h3>
                            <p>{savePost.body}</p>
                            <p>Status : {savePost.id}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </form>
            </>
        );
    }
}

export default AxiosPost;
