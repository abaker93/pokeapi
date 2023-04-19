import { Container } from "@mui/material";

const GenerationPanel = props => {
	return (
		<Container
			role="tabpanel"
			hidden={props.value !== props.index}
			id={`panelGen${props.gen}`}
			aria-labelledby={`genTab${props.gen}`}
		>
			{props.value === props.index && (
				props.children
			)}
		</Container>
	)
}

export default GenerationPanel;