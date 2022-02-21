import { memo} from "react";
import UserDetails from '../components/UserDetails';
import UserPicker from '../components/UserPicker';

const HomeContent = memo(() => {
  return (
    <div>
      <UserPicker />
      <UserDetails />
    </div>
  );
});

export default HomeContent