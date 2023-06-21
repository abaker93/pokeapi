import { useState } from "react"
import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"


const Root = () => {
	const [lang, setLang] = useState('en')

	return (
		<>
			<Header />

			<div id="top" />
			<Outlet context={lang} />
			
			<Footer />

			<ScrollToTop />
		</>
	)
}

export default Root