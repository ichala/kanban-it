import React from 'react';
import Column from '../../components/Column/Column';
import Layout from '../../config/Layout/Layout';

const Home = () => (
  <>
    <Layout>
      {Array(10)
        .fill(<Column />)
        ?.map((Column) => Column)}

    </Layout>
  </>
);

export default Home;
