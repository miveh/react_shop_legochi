import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

import People from "@mui/icons-material/People";
import React from "react";

function Dashboard() {
  return (
    <Box sx={{ mt: 3, bgcolor: (theme) => theme.palette.background.default }}>
      <Grid container spacing={4}></Grid>
    </Box>
  );
}

export default Dashboard;
