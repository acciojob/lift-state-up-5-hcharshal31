import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <h1>Parent Component</h1>
            {
                isLoggedIn? <h2>You are logged in!</h2>: <Child isLoggedIn={isLoggedIn} handleSubmit={handleSubmit} />
            }
        </div>
    )
}

export default Parent;