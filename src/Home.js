import UserProvider from './context/context';
import HomeContent from './screens/HomeScreen';

export default function Home() {
  return (
    <UserProvider>
      <HomeContent />
    </UserProvider>
  );
}




