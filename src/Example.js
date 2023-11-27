import React, { useState } from 'react'

function Example() {
    // const username = ["Deepak", "Richard", "Vivek"]

    const [username, setUserName] = useState(["Deepak", "Richard", "Vivek"])
    const [name, setName] = useState("Jack")
    const [changeName, setChangeName] = useState("John")

    const movieName = "Frozen"
    const rating = 5
    let updatedName;

    const handleChange = (e) => {
        setChangeName(e.target.value)
    }
    const handleClick = () => {
        if (changeName) {
            setName(changeName)
            setChangeName("")//clear input
        }
    }

    return (
        <div>
            <h1>Hi {name}</h1>
            <input type="text" value={changeName} onChange={handleChange} />
            <button onClick={handleClick}>Change Name</button>
            {/* <Example1 name={updatedName} /> */}
            {/* {username.map((item) => (
                <Example1 name={item} movieName={movieName} />
            ))} */}
            {/* <h1>Movie Name: {movieName} </h1>
            <p>Rating for the movie: {rating}</p> */}
        </div>

    )
}


function Example1({ name, movieName }) {
    return (
        <div> <h1>Hi {name}</h1></div>
    )
}


export default Example