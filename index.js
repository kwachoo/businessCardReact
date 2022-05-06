import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const div = document.getElementById("root")

function BusinessCard() {
    return(
        <App />
    )
}

ReactDOM.render(<BusinessCard />, div)