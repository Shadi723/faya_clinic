import * as React from "react";
import PermanentDrawerLeft from "./Shared/PermanentDrawerLeft";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import ClinicsPage from "./Pages/ClinicsPage";
import DatesPage from "./Pages/DatesPage";
import OrdersPage from "./Pages/OrdersPage";
import ProductsPage from "./Pages/ProductsPage";
import ReportsPage from "./Pages/ReportsPage";
import { SettingsPage } from "./Pages/SettingsPage";
import UsersPage from "./Pages/UsersPage";
import { MessagesPage } from "./Pages/MessagesPage";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <PermanentDrawerLeft />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/dates" element={<DatesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/messags" element={<MessagesPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
