import React from "react";
import { Button } from "@material-ui/core";
import { Calendar } from "../component/calendar";

export function Home() {
	return (
		<div>
			<Button color="primary">Hello World</Button>

			<div>
				Calendar
				<Calendar />
			</div>
		</div>
	);
}
