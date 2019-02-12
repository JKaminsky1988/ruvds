import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"

import "./css/all.min.css"

import Header from "./containers/Header"
import Main from "./containers/Main"
import Footer from "./containers/Footer"

class App extends Component {
	render() {
		return (
			<Grid container>
				<Header />
				<Main />
				<Footer />
			</Grid>
		)
	}
}

export default App
