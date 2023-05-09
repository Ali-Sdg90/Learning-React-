import React, { Component } from "react";

class RefExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                { id: 1, name: "Ali", age: 21 },
                { id: 2, name: "Saba", age: 17 },
                { id: 3, name: "Hanieh", age: 21 },
                { id: 4, name: "Navid", age: 21 },
                { id: 5, name: "Error", age: undefined },
            ],
            selectOption: "option2",
            output: "---",
        };
        this.friendRefs = [];
        // for (let i = 0; i < 5; i++) {
        //     this.friendRefs[i] = React.createRef();
        // }
        // this.friendRefs = [];
        for (let i = 0; i < this.state.names.length; i++) {
            const id = this.state.names[i].id;
            this.friendRefs[id] = React.createRef();
        }
    }

    showName = () => {
        // let boo =
        //     this.friendRefs[
        //         String(
        //             Number(this.state.selectOption.match(/\d+/g).map(Number)) +
        //                 1
        //         )
        //     ].current;
        let boo =
            this.friendRefs[
                (this.state.selectOption.match(/\d+/g) || []).map(Number)[0] + 1
            ].current;
        console.log(boo);

        this.setState({
            output: String(boo.value),
        });
    };

    changeOption = (event) => {
        this.setState(
            {
                selectOption: event.target.value,
            },
            () => {
                console.log("showName");
            }
        );
    };

    render() {
        return (
            <>
                <select
                    value={this.state.selectOption}
                    onChange={this.changeOption}
                >
                    {this.state.names.map((name) => {
                        return (
                            <option
                                value={`option${name.id}`}
                                key={`name-${name.id}`}
                                ref={this.friendRefs[name.id + 1]}
                            >
                                {name.name}
                            </option>
                        );
                    })}
                </select>
                <br></br>
                <br></br>
                <button onClick={this.showName}>show name</button>
                <p>{this.state.output}</p>
            </>
        );
    }
}

export default RefExample;
