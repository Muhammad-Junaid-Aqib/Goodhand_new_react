
// // import './App.css'
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CarouselComponent from './components/carousel/CarouselComponent';
// import Footer from './components/footer/Footer';

// import Navbar from './components/navbar/Navbar';
// import Home from './pages/home/Home';

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Home/>
//       {/* <CarouselComponent/> */}
//       <Footer/>
//     </>
//   )
// }

// export default App


import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/services",
          element: <Services/>
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

