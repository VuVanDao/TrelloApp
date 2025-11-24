import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
} from "@mui/material";

// Import Icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MenuIcon from "@mui/icons-material/Menu"; // Icon menu cho mobile
import { Outlet } from "react-router-dom";

const drawerWidth = 260;

// 2. Nội dung Sidebar (Được tách ra để dùng chung cho cả Mobile và Desktop)
const DrawerContent = () => (
  <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
    {/* Personal Settings */}
    <Typography
      variant="caption"
      sx={{ fontWeight: "bold", mb: 1, display: "block", color: "#9fadbc" }}
    >
      Personal Settings
    </Typography>
    <List component="nav" dense>
      <ListItemButton selected>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <PersonOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Profile and Visibility" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <SettingsOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <ListAltIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Activity" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <CreditCardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Cards" />
      </ListItemButton>
    </List>

    <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

    {/* Workspace Section */}
    <Typography
      variant="caption"
      sx={{ fontWeight: "bold", mb: 1, display: "block", color: "#9fadbc" }}
    >
      Workspace
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", mb: 1, pl: 1 }}>
      <Box
        sx={{
          bgcolor: "#0079bf",
          borderRadius: 1,
          p: 0.5,
          mr: 1,
          display: "flex",
        }}
      >
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          T
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight="bold">
        Trello Workspace
      </Typography>
    </Box>

    <List component="nav" dense>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <DashboardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Boards" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <GroupOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Members" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <SettingsOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <RocketLaunchOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Upgrade workspace" />
      </ListItemButton>
    </List>

    <Box sx={{ mt: "auto", pt: 2 }}>
      <Box
        sx={{
          border: "1px solid #9fadbc",
          borderRadius: 1,
          display: "inline-block",
          px: 1,
          py: 0.2,
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          FREE
        </Typography>
      </Box>
    </Box>
  </Box>
);

// 4. Component Layout chính
export default function SettingsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* --- A. AppBar (Chỉ hiện trên Mobile) --- */}
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none" }, // Ẩn khi màn hình >= sm (600px)
          bgcolor: "#1d2125",
          backgroundImage: "none",
          boxShadow: "none",
          borderBottom: "1px solid #384148",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Trello Settings
          </Typography>
        </Toolbar>
      </AppBar>

      {/* --- B. Navigation Area --- */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* 1. Mobile Drawer (Temporary - Trượt ra trượt vào) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Tăng hiệu năng trên mobile
          sx={{
            display: { xs: "block", sm: "none" }, // Hiện trên mobile, ẩn trên desktop
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>

        {/* 2. Desktop Drawer (Permanent - Luôn hiển thị) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" }, // Ẩn trên mobile, hiện trên desktop
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>

      {/* --- C. Main Content Area --- */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowX: "hidden",
        }}
      >
        {/* Một Toolbar trống để đẩy nội dung xuống dưới AppBar trên Mobile */}
        <Toolbar sx={{ display: { sm: "none" } }} />
        <Outlet />
      </Box>
    </Box>
  );
}
