import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
const TipPage = lazy(() => import("./pages/TipPage"));
const CasePage = lazy(() => import("./pages/CasePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const DashboardLayout = lazy(() =>
  import("./components/admin/DashboardLayout")
);
const ProtectedRoute = lazy(() => import("./components/admin/ProtectedRoute"));
const StatisticsPage = lazy(() => import("./pages/admin/StatisticsPage"));
const FormPage = lazy(() => import("./pages/admin/FormPage"));
const EditFormPage = lazy(() => import("./pages/admin/EditFormPage"));
const WordCollectionPage = lazy(() =>
  import("./pages/admin/WordCollectionPage")
);
const AdminCategoryPage = lazy(() => import("./pages/admin/AdminCategoryPage"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/tips", lazy: { Component: () => TipPage } },
      { path: "/cases", lazy: { Component: () => CasePage } },
      { path: "/collection", lazy: { Component: () => CollectionPage } },
      {
        path: "/categories/:category",
        lazy: { Component: () => CategoryPage },
      },
    ],
  },
  { path: "/admin", lazy: { Component: () => AdminLoginPage } },
  {
    path: "/dashboard",
    element: <ProtectedRoute element={<DashboardLayout />} />,
    children: [
      { index: true, lazy: { Component: () => StatisticsPage } },
      { path: "add-word", lazy: { Component: () => FormPage } },
      { path: "edit-word/:id", lazy: { Component: () => EditFormPage } },
      { path: "collection", lazy: { Component: () => WordCollectionPage } },
      {
        path: "categories/:category",
        lazy: { Component: () => AdminCategoryPage },
      },
    ],
  },
]);
