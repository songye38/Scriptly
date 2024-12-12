import UserProfile from '../src/Components/BasicComponents/UserProfile';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', color: 'black' }}>Welcome to Next.js!</h1>
      <UserProfile />  {/* UserProfile 컴포넌트 사용 */}
    </div>
  );
};

export default Home;
