import React, { Component } from "react";

import styles from "./MapAndKey.module.css";

class mapComponent extends Component {
    constructor() {
        super();
        this.state = {
            friends: [
                { id: 1, name: "Navid" },
                { id: 2, name: "Arvin" },
                { id: 3, name: "Zahra" },
                { id: 4, name: "Hanieh" },
                { id: 5, name: "Shayan" },
                { id: 6, name: "Navid" },
            ],
        };
    }
    render() {
        return (
            <>
                <p>.map and keys :</p>
                {this.state.friends.map((friend) => (
                    <p key={friend.id}>
                        <span className={styles.friends}>{friend.name}</span> is
                        my friend - key:{" "}
                        <span className={styles.keys}>{friend.id}</span>
                    </p>
                ))}
            </>
        );
    }
}

export default mapComponent;
