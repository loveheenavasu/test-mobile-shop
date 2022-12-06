import React from 'react';
import { Switch } from 'react-router-dom';
import AdminRoute from './AdminRoute'
import Spinner from '../components/Spinner';

import Layout from '../admin/Layout';

const Dashboard = React.lazy(() => import("../admin/pages/Dashboard"));
const AddProduct = React.lazy(() => import("../admin/pages/Products/AddProducts"));
const EditProduct = React.lazy(() => import("../admin/pages/Products/EditProducts"));
const ListProduct = React.lazy(() => import("../admin/pages/Products/ProductsList.jsx"));
const ListOrders = React.lazy(() => import("../admin/pages/Orders/OrdersList"));
const OrderDetails = React.lazy(() => import("../admin/pages/Orders/OrderDetails"));
const ListCustomers = React.lazy(() => import("../admin/pages/Customers/customersList"));
const EditCustomer = React.lazy(() => import("../admin/pages/Customers/EditCustomer"));
const AddCategory = React.lazy(() => import("../admin/pages/Categories/AddCategory"));
const EditCategory = React.lazy(() => import("../admin/pages/Categories/EditCategory"));
const ListCategories = React.lazy(() => import("../admin/pages/Categories/CategoriesList"));
const ListBrands = React.lazy(() => import("../admin/pages/Brands/BrandsList"));
const AddBrand = React.lazy(() => import("../admin/pages/Brands/AddBrands"));
const EditBrand = React.lazy(() => import("../admin/pages/Brands/EditBrands"));
const AddAccessory = React.lazy(() => import("../admin/pages/Accessories/AddAccessory"));
const ListAccessories = React.lazy(() => import("../admin/pages/Accessories/ListAccessories"));
const EditAccessories = React.lazy(() => import("../admin/pages/Accessories/EditAccessories"));
const RegisterAdmin = React.lazy(() => import("../admin/pages/Staff/registerStaff"));
const LoginAdmin = React.lazy(() => import("../admin/pages/Staff/loginStaff"));
const ListStaff = React.lazy(() => import("../admin/pages/Staff/ListStaff"));
const PreOrders = React.lazy(() => import("../admin/pages/Orders/PreOrders"));

const AdminRoutes = () => (
  <React.Suspense fallback={<div><Spinner /></div>}>
  <Switch>
    <Layout>
      <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
      <AdminRoute exact path="/admin/addproduct" component={AddProduct} />
      <AdminRoute exact path="/admin/update/:id" component={EditProduct} />
      <AdminRoute exact path="/admin/registerStaff" component={RegisterAdmin} />
      <AdminRoute exact path="/admin/listStaff" component={ListStaff} />
      <AdminRoute exact path="/admin/loginStaff" component={LoginAdmin} />
      <AdminRoute exact path="/admin/listproduct" component={ListProduct} />
      <AdminRoute exact path="/admin/customers" component={ListCustomers} /> 
      <AdminRoute exact path="/admin/customers/:id" component={EditCustomer} /> 
      <AdminRoute exact path="/admin/listorders" component={ListOrders} /> 
      <AdminRoute exact path="/admin/preorders" component={PreOrders} /> 
      <AdminRoute exact path="/admin/order/:id" component={OrderDetails} /> 
      <AdminRoute exact path="/admin/addcategory" component={AddCategory} />
      <AdminRoute exact path="/admin/category/:slug" component={EditCategory} /> 
      <AdminRoute exact path="/admin/brand/:slug" component={EditBrand} /> 
      <AdminRoute exact path="/admin/categories" component={ListCategories} />
      <AdminRoute exact path="/admin/brands" component={ListBrands} />
      <AdminRoute exact path="/admin/addbrand" component={AddBrand} />
      <AdminRoute exact path="/admin/addaccessory" component={AddAccessory} />
      <AdminRoute exact path="/admin/updateaccessory/:id" component={EditAccessories} />
      <AdminRoute exact path="/admin/listaccessories" component={ListAccessories} />
    </Layout>
  </Switch>
  </React.Suspense>
    )

export default AdminRoutes;