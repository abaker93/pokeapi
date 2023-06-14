import { useState } from "react"
import { Outlet } from "react-router-dom"

const Root = () => {
	const [lang, setLang] = useState('en')

	return (
		<Outlet context={lang} />
	)
}

export default Root