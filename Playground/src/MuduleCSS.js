import React, { Component } from "react";
import styles from "./App.module.css";


class MuduleCSS extends Component {
    render() {
        return (
            <div>
                <p  className={styles.pinkText}>I have module style :&#41;</p>
            </div>
        );
    }
}

export default MuduleCSS;
