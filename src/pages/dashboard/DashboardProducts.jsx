import React, { useEffect, useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomUrl,
} from "@mui/x-data-grid-generator";
import { getProducts } from "../../api/product";
import { getCategories, getCategoryById } from "../../api/category";

const roles = ["Market", "Finance", "Development"];
const randomRole = () => {
  return randomArrayItem(roles);
};
const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    image: "./../src/assets/svg/Icon.svg",
    category: randomRole(),
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    // const products = getProducts();
    console.log("product added");
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

function DashboardProducts() {
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    getProducts().then((data) => setRows(data.data.products));
  }, []);
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  useEffect(() => {
    getCategories().then((data) => setCategories(data.data.categories));
  }, []);

  const handleEditClick = (id) => () => {
    console.log("edit clicked");
  };

  const handleDeleteClick = (id) => () => {
    console.log("delete clicked");
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 80,
      align: "left",
      headerClassName: "no-sort-icon",
      disableColumnMenu: true,
      sortModel: { sort: false },
      headerAlign: "left",
      renderCell: (params) => (
        <img width="50px" height="50px" src={params.value} />
      ),
    },
    { field: "name", headerName: "Name", width: 250 },

    {
      field: "category",
      headerName: "Category",
      width: 220,
      type: "text",
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: { xs: "100%", md: "70%" },
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        sx={{
          boxShadow: 3,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        disableRowSelectionOnClick={true}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        onRowEditStop={handleRowEditStop}
        slots={{
          toolbar: EditToolbar,
        }}
      />
    </Box>
  );
}

export default DashboardProducts;
