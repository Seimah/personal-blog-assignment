import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home (props) {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {

        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(() => {})

    })
    return(
        <h1> My home page </h1>
    )
}

export default Home;