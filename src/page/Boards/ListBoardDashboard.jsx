import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

// Import Icons
import DashboardIcon from "@mui/icons-material/Dashboard"; // Icon Boards
import TableChartIcon from "@mui/icons-material/TableChart"; // Icon Templates
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Icon Recently viewed
import BusinessIcon from "@mui/icons-material/Business"; // Icon Workspace
import { recentBoards, templates } from "~/utils/constant";
import BoardCard from "~/Components/BoardCard/BoardCard";
import { useNavigate } from "react-router-dom";

const ListBoard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          py: 1,
          px: 5,
          width: "100%",
        }}
      >
        {/* --- TEMPLATES SECTION --- */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <TableChartIcon sx={{ mr: 1, color: "text.secondary" }} />
            <Typography variant="h6" fontWeight="bold">
              Most popular templates
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              Get going faster with a template from the Trello community or
            </Typography>
            <Select
              defaultValue="category"
              size="small"
              sx={{ height: 32, fontSize: 14 }}
            >
              <MenuItem value="category">choose a category</MenuItem>
            </Select>
          </Box>

          <Grid container spacing={2}>
            {templates.map((item, index) => (
              <Grid
                item
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
              >
                <BoardCard title={item.title} bg={item.bg} isTemplate />
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Browse the full template gallery
          </Typography>
        </Box>

        {/* --- RECENTLY VIEWED SECTION --- */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AccessTimeIcon sx={{ mr: 1, color: "text.secondary" }} />
            <Typography variant="h6" fontWeight="bold">
              Recently viewed
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {recentBoards.map((item, index) => (
              <Grid
                item
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
              >
                <BoardCard title={item.title} bg={item.bg} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- YOUR WORKSPACES SECTION --- */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              YOUR WORKSPACES
            </Typography>
          </Box>

          {/* Workspace Header Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  bgcolor: "green",
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1.5,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                T
              </Box>
              <Typography variant="h6" fontWeight="bold">
                Trello Workspace
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Button
                startIcon={<DashboardIcon />}
                size="small"
                color="inherit"
                onClick={() => navigate("/boards/board_dashboard/my_boards")}
              >
                Boards
              </Button>
              <Button
                startIcon={<PersonOutlineIcon />}
                size="small"
                color="inherit"
              >
                Members
              </Button>
              <Button startIcon={<SettingsIcon />} size="small" color="inherit">
                Settings
              </Button>
              <Button
                startIcon={<BusinessIcon />}
                size="small"
                sx={{ color: "#9c27b0", bgcolor: "rgba(156, 39, 176, 0.1)" }}
              >
                Upgrade
              </Button>
            </Box>
          </Box>

          {/* Boards in Workspace */}
          <Grid container spacing={2}>
            {/* Board cards */}
            {recentBoards.slice(0, 2).map((item, index) => (
              <Grid
                item
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
                key={index}
              >
                <BoardCard title={item.title} bg={item.bg} />
              </Grid>
            ))}
            {/* "Create new board" placeholder */}
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                xl: 3,
              }}
            >
              <Card
                sx={{
                  height: 100,
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body2">Create new board</Typography>
              </Card>
            </Grid>
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                xl: 3,
              }}
            >
              <Card
                sx={{
                  height: 100,
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body2">All boards</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ListBoard;
