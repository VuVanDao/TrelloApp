import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

// Import Icons
import DashboardIcon from "@mui/icons-material/Dashboard"; // Icon Boards
import TableChartIcon from "@mui/icons-material/TableChart"; // Icon Templates
import HomeIcon from "@mui/icons-material/Home"; // Icon Home
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
// 5. Layout Chính
// ----------------------------------------------------------------------
export default function BoardHomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const Sidebar = () => (
    <Box
      sx={{
        width: "355px",
        pr: 2,
        display: { xs: "none", md: "block" },
        pl: 4,
      }}
    >
      {/* Top Navigation */}
      <List component="nav" dense sx={{ mb: 2 }}>
        <ListItemButton
          sx={{ mb: 0.5 }}
          selected={
            location?.pathname?.endsWith("/boards/board_dashboard") ||
            location?.pathname?.endsWith("/boards/board_dashboard/")
          }
          onClick={() => navigate("/boards/board_dashboard")}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Boards" />
        </ListItemButton>
        <ListItemButton sx={{ mb: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <TableChartIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Templates" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </List>

      <Divider
        sx={{
          my: 2,
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "white" : "black",
        }}
      />

      {/* Workspaces Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          mb: 1,
        }}
      >
        <Typography variant="caption" fontWeight="bold" color="text.secondary">
          Workspaces
        </Typography>
        <AddIcon
          fontSize="small"
          sx={{ color: "text.secondary", cursor: "pointer" }}
        />
      </Box>

      {/* Trello Workspace Accordion Item */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              bgcolor: "green",
              width: 24,
              height: 24,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
              color: "#fff",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            T
          </Box>
          <Typography variant="body2" fontWeight="500">
            Trello Workspace
          </Typography>
        </Box>

        {/* Sub menu inside workspace */}
        <List component="div" disablePadding dense>
          <ListItemButton
            sx={{ pl: 5 }}
            onClick={() => {
              navigate("all_board");
            }}
            selected={location?.pathname?.includes(
              "/boards/board_dashboard/all_board"
            )}
          >
            <ListItemIcon sx={{ minWidth: 30 }}>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Members" />
            <AddIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 5 }}
            onClick={() => {
              navigate("/Settings");
            }}
          >
            <ListItemIcon sx={{ minWidth: 30 }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>

      {/* Upgrade Box */}
      <Box
        sx={{
          p: 2,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          Upgrade this Workspace
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mb: 1.5 }}
        >
          Get unlimited boards, advanced automation, Planner (full access),
          collapsible lists, AI, and more!
        </Typography>
        <Button variant="outlined" size="small" sx={{ textTransform: "none" }}>
          Upgrade
        </Button>
      </Box>
    </Box>
  );
  return (
    <Box sx={{ display: "flex", mt: "30px", width: "100%" }}>
      {/* mt để tránh header */}
      <Sidebar />
      <Outlet />
    </Box>
  );
}
