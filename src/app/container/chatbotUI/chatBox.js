import React from "react";
import { useState } from "react";
import "./chatBox.css";
import {MessageLeft, MessageRight} from "./Message";
import Paper from "@mui/material/Paper";
import MicNoneIcon from "@mui/icons-material/MicNone";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const ChatBox = ({ toClose }) => {
  const [color, setColor] = useState(false);
  const handleMic = () => {
    setColor(!color);
  };
  return (
    <>
      <Paper className="outerPaper">
        <Button className="closeButton" onClick={toClose}>
          <CloseIcon size="large" />
        </Button>
        <Paper className="innerPaper">
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageRight message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageRight message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageLeft message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
            <MessageRight message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"/>
        </Paper>
        <Fab size="secondary" style={{ margin: "2.5%" }} color={color ? "primary" : ""} aria-label="add" onClick={handleMic}>
          <MicNoneIcon />
        </Fab>
      </Paper>
    </>
  );
};

export default ChatBox;
