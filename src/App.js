import "./App.css";
import Body from "./components/body";
import Checkout from "./components/checkout";
import Header from "./components/header";
import Loginpage from "./components/login";
import Registerpage from "./components/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: (
//         <Protected>
//           <Home></Home>
//         </Protected>
//       ),
//     }
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router} />

//       {/* <Header /> */}
//       {/* <Body /> */}
//       {/* <Registerpage /> */}
//       {/* <Loginpage /> */}
//       {/* <Checkout /> */}

//     </div>
//   );
// }

// export default App;
import AddToCard from "./components/allproducts";
import ProductForm from "./components/productdetails";
import ProductList from "./components/allproducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registerpage></Registerpage>,
  },
  {
    path: "/Body",
    element: <Body></Body>,
  },
  {
    path: "/product/:title",
    element: <AddToCard></AddToCard>,
  },
  {
    path: "/productDetail",
    element: <ProductForm />,
  },
  {
    path: "/allproducts",
    element: <ProductList/>,
  },
  {
    path: "/allproducts",
    element: <ProductList/>,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
