import { useContext } from "react";
import { userContext } from '../context/context';

function UserPicker() {
  const { userId, setUserId } = useContext(userContext);

  return (
    <select
      value={userId}
      onChange={(event) => {
        setUserId(event.target.value);
      }}
    >
      <option value="1">Leanne Graham</option>
      <option value="2">Ervin Howell</option>
      <option value="3">Clementine Bauch</option>
    </select>
  );
}

export default UserPicker