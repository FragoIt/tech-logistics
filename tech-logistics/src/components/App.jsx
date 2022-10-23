import React from 'react';
import '../assets/styles/App.scss';
import Layout from '../containers/Layout';
import Footer from './Footer';
import ProductsList from '../containers/ProductsList'


const App = () => {
  return (
    <Layout>
      <ProductsList />
      <Footer />
    </Layout>
  );
}

export default App;
