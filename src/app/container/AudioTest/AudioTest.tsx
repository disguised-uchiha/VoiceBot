import { useState } from "react";
import "./AudioTest.css";
import ChatBox from "../chatbotUI/chatBox";
import Popover from "@mui/material/Popover";
import ChatIcon from "@mui/icons-material/Chat";
import Fab from "@mui/material/Fab";

const AudioTest = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false); //Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    console.log(Boolean(anchorEl));
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(()=>false);
  };

  const id = open ? "simple-popover" : undefined;
  const buttonStyle = {
    position: "absolute",
    bottom: "0%",
    right: "0%"
  };

  return (
    <>
      <Fab className="chatIcon" size="large" color="primary" aria-label="add"  onClick={handleClick}>
        <ChatIcon />
      </Fab>
      <Popover
        id="popOver"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}>
        <ChatBox toClose={handleClose} />
      </Popover>
    </>
  );
};

export default AudioTest;
