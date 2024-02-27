import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Currency from './pages/Currency/Currency';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Layout = () => {
    return (
      <>
        <nav>
          <NavBar />
        </nav>
        <main className="outlet">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: '/', element: <Home /> },
        {
          path: 'conventer',
          element: <Currency />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
