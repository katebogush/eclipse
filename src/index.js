import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/Error/Error';
import ItemPage from './components/Item/ItemPage';
import productsData from './data/products.json';
import Corsets from './components/Corsets/Corsets';
import Penuary from './components/Penuary/Penuary';
import Kupalniki from './components/Kupalniki/Kupalniki';
import Panchohu from './components/Panchohu/Panchohu';
import Costums from './components/Costums/Costums';


import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet,
    useLoaderData
} from 'react-router-dom';

const Root = () => {
    return(
        <>
            <Header />
            <Sidebar />
            <Outlet/>
            <Footer />
         </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element ={<Root/>}>
            <Route index element={<About />} />
            <Route path='/corsets' element={<Corsets />} />
            <Route path='/penuary' element={<Penuary />} />
            <Route path='/kupalniki' element={<Kupalniki />} />
            <Route path='/panchohu' element={<Panchohu />} />
            <Route path='/costums' element={<Costums />} />
            <Route path='/corsets/:ItemId' loader={loader} element={<ItemPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

function loader({params}){
    const product = productsData.filter(e=> e.id === params.ItemId)
    console.log(product)
    return true
}