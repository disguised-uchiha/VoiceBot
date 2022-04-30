import ChatIcon from "@mui/icons-material/Chat";
import { Fab } from "@mui/material";
import { createUseStyles } from "react-jss";

const Chatbot = () => {
  const classes = useStyles();
  return (
    <Fab color="primary" aria-label="add" className={classes.fab} sx={{ position: "absolute" }}>
      <ChatIcon />
    </Fab>
  );
};

export default Chatbot;

const useStyles = createUseStyles({
  fab: {
    bottom: 10,
    right: 10
  }
});
