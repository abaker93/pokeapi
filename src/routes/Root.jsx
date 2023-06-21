import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Root = () => {
	const [lang, setLang] = useState('en')

	return (
		<>
			<Header />
			<Outlet context={lang} />
			<Footer />
		</>
	)
}

export default Root