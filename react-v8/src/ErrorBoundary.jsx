import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
	state = { haserror: false };
	static getDerivedStateFromError() {
		return { haserror: true };
	}

	componentDidCatch(error, errorinfo) {
		console.error("Error boundry caught an error", error, errorinfo);
	}

	render() {
		if (this.state.haserror) {
			return (
				<h2>
					There was an error with this listing. <Link to="/">Click Here</Link>{" "}
					to back to the home page.
				</h2>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
