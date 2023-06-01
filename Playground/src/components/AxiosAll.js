import axios from "axios";
import React, { Component } from "react";

class AxiosAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            saveData: "",
            number2Show: 1,
            selectOption: "",
        };
    }

    GetAll = () => {
        let subLink;

        axios
            .all([
                axios.get(`https://jsonplaceholder.typicode.com/users`),
                axios.get(`https://jsonplaceholder.typicode.com/posts`),
                axios.get(`https://jsonplaceholder.typicode.com/albums`),
            ])
            .then(
                axios.spread((users, posts, albums) => {
                    switch (this.state.number2Show) {
                        case 1:
                            subLink = users;
                            break;
                        case 2:
                            subLink = posts;
                            break;
                        case 3:
                            subLink = albums;
                            break;
                        default:
                            break;
                    }
                    this.setState(
                        {
                            saveData: subLink.data,
                        },
                        () => this.showOutput()
                    );
                })
            );
    };

    selectChange = (event) => {
        // console.log(event.target.value);
        this.setState(() => ({
            number2Show: Number(
                event.target.value.charAt(event.target.value.length - 1)
            ),
            selectOption: event.target.value,
        }));
    };

    showOutput = () => {
        const { saveData, selectOption } = this.state;

        console.log(selectOption);
        console.log(saveData);
    };

    render() {
        return (
            <div>
                <br></br>
                <span>All & Spread : </span>
                <select onChange={this.selectChange}>
                    <option value="option1">users</option>
                    <option value="option2">posts</option>
                    <option value="option3">albums</option>
                </select>
                <span> </span>
                <button onClick={this.GetAll}>Get Req</button>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default AxiosAll;
