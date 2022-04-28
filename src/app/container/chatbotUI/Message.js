import "./Message.css";

export const MessageLeft = ({ message }) => {
  return (
    <div className="messageBlue">
      <div>
        <p className="messageContent">{message}</p>
      </div>
    </div>
  );
};

export const MessageRight = ({ message }) => {
  return (
    <div className="messageRowRight">
      <div className="messageOrange">
        <p className="messageContent">{message}</p>
      </div>
    </div>
  );
};
