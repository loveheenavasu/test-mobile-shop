import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

const HomePage = React.lazy(() => import("../pages/HomePage"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Search = React.lazy(() => import("../pages/Search"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const NewCheckout = React.lazy(() => import("../pages/NewCheckout"));
const BuyNow = React.lazy(() => import("../pages/Checkout/BuyNow"));
const Receipt = React.lazy(() => import("../pages/Checkout/Receipt"));
const Categories = React.lazy(() => import("../pages/Search/Categories"));
const TypeCategories = React.lazy(() => import("../pages/Search/Types"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
const AccessoryDetails = React.lazy(() => import("../pages/AccessoryDetails"));
const Aboutus = React.lazy(() => import("../pages/Links/about-us"));
const Warranty = React.lazy(() => import("../pages/Links/warranty"));
const FAQS = React.lazy(() => import("../pages/Links/faqs"));
const Terms = React.lazy(() => import("../pages/Links/terms"));
const LoginAdmin = React.lazy(() => import("../admin/pages/Staff/loginStaff"));
const PreOrder = React.lazy(() => import("../pages/Search/preorder"));
const AlgoliaSuggestion = React.lazy(() => import('../components/AutoComplete/AlgoliaSuggestion'));

const HomeRoute = () => {

  return(
    <React.Suspense fallback={<div><Spinner /></div>}>
  <Switch>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/accessory/:id" component={AccessoryDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/buynow" component={BuyNow} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/new-checkout" component={NewCheckout} />
      <Route exact path="/receipt" component={Receipt} />
      <Route exact path="/search" component={Search} /> 
      <Route exact path="/aboutus" component={Aboutus} /> 
      <Route exact path="/warranty" component={Warranty} /> 
      <Route exact path="/faqs" component={FAQS} /> 
      <Route exact path="/terms" component={Terms} /> 
      <Route exact path="/login/staff" component={LoginAdmin} />
      <Route exact path="/products/:slug" component={ Categories } /> 
      <Route exact path="/category/:condition" component={ TypeCategories } />  
      <Route exact path="/preorder" component={PreOrder}/>
      <Route exact path="/suggestions" component={AlgoliaSuggestion}/>
    </Layout>
  </Switch>
  </React.Suspense>
    )}

export default HomeRoute