import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./AppBar.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import worldwide from "../../../public/worldwide.png";
import Dropdown from "../../../public/Dropdown.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function AppBar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#DCF9F1",
        }}
      >
        <div>
          <h3>routes name</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span className="analys-txt">
            Please select one file from Workspace to start Analysis
          </span>
          <Image src={worldwide} alt="Language-img" height={20} width={20} />
          <Link href={""}>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              <Image
                className="DD_icon"
                src={Dropdown}
                alt="Dropdown_img"
                height={15}
                width={15}
              />
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Dashboard
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Stack>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AppBar;
