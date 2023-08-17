import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage, messageSelector } from "../redux/messages/messagesSlice";

function Greeting() {
  const dispatch = useDispatch();
  const { message } = useSelector(messageSelector);
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return <div>{message.message}</div>;
}

export default Greeting;
