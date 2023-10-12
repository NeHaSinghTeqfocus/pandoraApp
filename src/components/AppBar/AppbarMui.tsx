import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import EarthIcon from "../../../public/EarthIcon.png";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@mui/material";
import { useRouter } from "next/router";

const pages = ["Dashboard"];
const settings = ["Dashboard", "Setting", "Logout"];
const Language = ["Arbic", "Hindi", "English", "Brazil", "Chineese"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorLngUser, setAnchorLngUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenLanguage = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLngUser(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setAnchorLngUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();
  const currentUrl = router.asPath; // Get the current URL
  const isDashboard = router.pathname === "/workspace";

  return (
    <Box sx={{ "& .MuiPaper-root": { background: "#FBFBFB" } }}>
      <AppBar position="static" sx={{ width: "vw", backgroundColor: "fff" }}>
        <Container maxWidth="lg" disableGutters sx={{ backgroundColor: "fff" }}>
          <Toolbar disableGutters sx={{ backgroundColor: "fff" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                // onAuxClick={handleclickRoute}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F52F2F " }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 1,
                    color: "black",
                    display: "block",
                    textTransform: "none",
                    marginLeft: "15px",
                  }}
                >
                  {page}
                </Button>
              ))}
              {isDashboard ? (
                <Button
                  onClick={() => router.push("/workspace")}
                  sx={{
                    textTransform: "none",
                    color: "black",
                    display: "block",
                    height:'38px',
                    marginTop:'7px'
                  }}
                >
                  {currentUrl.split("/")}
                </Button>
              ) : (
                ""
              )}
            </Box>
            <Box sx={{ padding: "5px 10px 5px 10px", marginLeft: "-30px" }}>
              <Typography
                variant="caption"
                sx={{
                  background: "#3FD39F",
                  padding: "15px 5px 15px 5px",
                }}
              >
                Please select one file from Workspace to start Analysis
              </Typography>
            </Box>
            <Box sx={{ padding: "5px 10px 5px 5px" }}>
              <Tooltip title="Languages">
                <IconButton
                  onClick={handleOpenLanguage}
                  sx={{ p: 0, color: "black" }}
                >
                  <Image
                    src={EarthIcon}
                    alt="Language-Icon"
                    height={20}
                    width={20}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorLngUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorLngUser)}
                onClose={handleCloseLanguage}
              >
                {Language.map((Language) => (
                  <MenuItem key={Language} onClick={handleCloseLanguage}>
                    <Typography variant="subtitle2" textAlign="center">
                      {Language}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "black" }}
                >
                  <Avatar
                    sx={{ backgroundColor: "gray" }}
                    alt="Kunal singh"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
