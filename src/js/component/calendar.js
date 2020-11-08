import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Scheduler, DayView, WeekView, MonthView, Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = new Date();
const schedulerData = [
	{ startDate: "2020-11-08T09:45", endDate: "2018-11-08T11:00", title: "Meeting" },
	{ startDate: "2020-11-09T12:00", endDate: "2018-11-09T13:30", title: "Go to a gym" },
	{ startDate: "2020-11-10T16:00", endDate: "2018-11-10T16:30", title: "Else" },
	{ startDate: "2020-11-11T13:00", endDate: "2018-11-11T13:30", title: "Else" },
	{ startDate: "2020-11-12T19:00", endDate: "2018-11-12T19:30", title: "Else" }
];

export const Calendar = () => (
	<Paper>
		<Scheduler data={schedulerData}>
			<ViewState currentDate={currentDate} />
			<WeekView startDayHour={9} endDayHour={20} />
			<Appointments />
		</Scheduler>
	</Paper>
);
