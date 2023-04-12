import React from "react";

import Aloha from "./Aloha";
import Hi from "./Hi";

class App extends React.Component {
    render() {
        // return <h1>Aloha React!</h1>;

        // return(
        //     <div>
        //         <h1>Aloha</h1>
        //         <p>React!</p>
        //     </div>
        // )

        return (
            <>
                <h1 className="HS&AS">Aloha</h1>
                <p>React!</p>
                <Hi />
                <Hi />
                <Aloha/>
            </>
        );
    }
}

export default App;
