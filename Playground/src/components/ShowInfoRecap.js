import React, { Component } from "react";

import styles from "./ShowInfoRecap.module.css";

class ShowInfoRecap extends Component {
    constructor() {
        super();
        this.state = {
            text: "Aloha",
            option: "option2",
            isLoggedIn: false,
            chanageOrder: 0,
        };
    }

    submitInput = (event) => {
        this.setState(
            (pervState) => ({
                chanageOrder: pervState.chanageOrder + 1,
            }),
            () => console.log("Change!")
        );
    };

    changeOptions = (event) => {
        this.setState(
            {
                option: event.target.value,
            },
            () => {
                console.log(this.state.option);
            }
        );
    };

    changeText = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    changeLogin = () => {
        this.setState(
            (pervState) => ({
                isLoggedIn: !pervState.isLoggedIn,
            }),
            () => {
                console.log(this.state.isLoggedIn);
            }
        );
    };

    render() {
        let input;
        let output;

        const { text, option, isLoggedIn, chanageOrder } = this.state;

        if (chanageOrder > 2) {
            this.setState({
                chanageOrder: 0,
            });
        }

        switch (chanageOrder) {
            case 0:
                input = (
                    <input
                        type="text"
                        value={text}
                        onChange={this.changeText}
                    ></input>
                );
                break;
            case 1:
                input = (
                    <select value={option} onChange={this.changeOptions}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                );
                break;
            default:
                isLoggedIn
                    ? (input = <span>You Are Logged-in</span>)
                    : (input = (
                          <button onClick={this.changeLogin}>
                              You Are Not Logged-in
                          </button>
                      ));
                break;
        }
        return (
            <>
                <label>change Input : </label>
                <button
                    className={styles.addPadding}
                    onClick={this.submitInput}
                >
                    Change
                </button>
                <span> -({chanageOrder + 1})-</span>
                <br></br>

                <p className={styles.input}>{input}</p>

                <p>
                    output : text=<span className={styles.output}>{text}</span>
                     option=<span className={styles.output}>{option}</span>
                    isLoggedIn=
                    <span className={styles.output}>{String(isLoggedIn)}</span>
                </p>
            </>
        );
    }
}

export default ShowInfoRecap;
