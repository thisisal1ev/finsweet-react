import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

//layouts
import MainLayout from "./layouts/MainLayout"

//pages
import Home from './pages/Home'
import PNF from './pages/PageNotFound'
import About from "./pages/About"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import Blog from "./pages/Blog"
import Work from "./pages/Work"
import BlogDetail from "./pages/BlogDetail"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<PNF />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App