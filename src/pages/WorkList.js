import React, { useEffect, useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

const columns = [
	{ field: "_id", headerName: "S.No", minWidth: 130 },
	{ field: "description", headerName: "Work Name", minWidth: 200 },
	{ field: "type", headerName: "Work Type", minWidth: 200 },
	{ field: "createdAt", headerName: "Date", type: "date", minWidth: 150 },

	{ field: "Edit", headerName: "Edit", type: "boolean", minWidth: 200 },
	{
		field: "fullName",
		headerName: "Status",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
];

// const rows = [
// 	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
// 	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
// 	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
// 	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
// 	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
// 	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
// 	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
// 	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
// 	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

function WorkList() {
	const classes = useStyle();
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://finflyer.herokuapp.com/api/v1/private/affilate/finance")
			.then((response) => {
				console.log(response);
				return response.json();

			})
			.then((data) => {
				// console.log(data.data);

				setData([data.data]);
			});
	}, []);

	return (
		<Container className={classes.container}>
			<h3 style={{ display: "flex", justifyContent: "center" }}>
				Work- Entry -Details
			</h3>
			<div style={{ height: 400, maxWidth: "100%" }}>
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[7]}
					checkboxSelection
					getRowId={(r) => r._id}
				/>
			</div>
		</Container>
	);
}

export default WorkList;


//  react .. 
