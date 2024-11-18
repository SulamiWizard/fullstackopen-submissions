import "../styles/phonebook.css";
const Notification = ({ message, isError }) => {
  if (message === null) {
    return null;
  }
  let className = "success";
  if (isError === true) {
    className = "error";
  }
  return <div className={className}>{message}</div>;
};
export default Notification;
