import { useContext } from "react";
import { UseContext } from "../context/useContex";

function UserData() {
  const { data1, setData } = useContext(UseContext);
  return [ data1, setData ];
}

export default UserData;
