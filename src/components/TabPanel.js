import { Container } from "@mui/material";

const TabPanel = props => {
	return (
		<Container
			role="tabpanel"
			hidden={props.value !== props.index}
			id={props.id}
			aria-labelledby={props.ariaLabelledBy}
		>
			{props.value === props.index && (
				props.children
			)}
		</Container>
	)
}

export default TabPanel;