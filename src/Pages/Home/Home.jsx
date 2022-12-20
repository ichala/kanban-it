import { Outlet } from 'react-router-dom';
import Layout from '../../config/Layout/Layout';
import ColumnsList from '../../components/Column/ColumnsList';

const Home = () => (
  <>
    <Layout>
      <ColumnsList />
      <Outlet />
    </Layout>
  </>
);

export default Home;
