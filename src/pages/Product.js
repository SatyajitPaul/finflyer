import React, { useEffect, useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";



const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

const columns = [
    { field: 'id', headerName: 'S.No', width: 130 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'open', headerName: 'Open', type:'PDF', width: 200 },
   
  ];
  
  
  const rows = [
    { id: 1, productName: 'Snow', open: '' },
    { id: 2, productName: 'Lannister', open: ''  },
    { id: 3, productName: 'Lannister', open: '' },
    { id: 4, productName: 'Stark', open: '' },
    { id: 5, productName: 'Targaryen', open: ''  },
    { id: 6, productName: 'Melisandre', open: null  },
    { id: 7, productName: 'Clifford', open: '' },
    { id: 8, productName: 'Frances', open: ''  },
    { id: 9, productName: 'Roxie', open: '' },
  ];
  

function Product() {
	const classes = useStyle();
    const [productData,setProductData]= useState([]);
   
    
	return (
		<Container className={classes.container}>
            <h3 style={{display:'flex',justifyContent:'center'}}>Product details</h3>
            <div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[8]}
				checkboxSelection
			/>
            </div>
		</Container>
	);
}

export default Product;
