
import { Button } from "@/components/ui/button";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Joblisting from "./pages/joblisting";
import Job from "./pages/job";
import Myjobs from "./pages/myjobs";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      }
      ,
      {
        path: "/onboarding",
        element: <Onboarding />,
      }
      ,
      {
        path: "/job-listing",
        element: <Joblisting />,
      }
      ,
      {
        path: "/job/:id",
        element: <Job />,
      }
      ,
      {
        path: "/my-jobs",
        element: <Myjobs />,
      }
      ,
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      }
      ,
      {
        path: "/post-jobs",
        element: <PostJob />,
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
