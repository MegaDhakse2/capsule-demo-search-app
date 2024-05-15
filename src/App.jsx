import { RouterProvider } from "react-router-dom";
import appRouter from "./router";
import { useSelector } from "react-redux";
import Loader from "./components/UI/loader/Loader";

export default function App() {
  const loader = useSelector(state => state.ui.loader);

  return (
    <>
      {loader.isLoading && <Loader/>}
      <RouterProvider router={appRouter}/>
    </>
  )
}
