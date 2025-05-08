import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/auth/Login';
import { Products } from './pages/products/Products';
import { Inventory } from './pages/inventory/Inventory';
import { Production } from './pages/production/Production';
import { KitchenProduction } from './pages/production/KitchenProduction';
import { ConfectioneryProduction } from './pages/production/ConfectioneryProduction';
import { BakeryProduction } from './pages/production/BakeryProduction';
import { ProductionOrder } from './pages/production/ProductionOrder';
import { POS } from './pages/pos/POS';
import { PDVEnhanced } from './pages/pos/PDVEnhanced';
import { Reports } from './pages/reports/Reports';
import { AppLayout } from './components/layouts/AppLayout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AccountingModule } from './pages/accounting/AccountingModule';
import { AccountantDashboard } from './pages/accounting/AccountantDashboard';
import { FiscalIntegration } from './pages/accounting/FiscalIntegration';
import { SpedGeneration } from './pages/accounting/SpedGeneration';
import { NFeManagement } from './pages/accounting/NFeManagement';
import { CompanyManagement } from './pages/accounting/CompanyManagement';
import { EntityRegistration } from './pages/accounting/EntityRegistration';
import { UserSettingsPage } from './pages/settings/UserSettingsPage';
import { SystemCustomizationPage } from './pages/settings/SystemCustomizationPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="products/*" element={<Products />} />
            <Route path="inventory/*" element={<Inventory />} />
            <Route path="production">
              <Route index element={<Production />} />
              <Route path="kitchen" element={<KitchenProduction />} />
              <Route path="confectionery" element={<ConfectioneryProduction />} />
              <Route path="bakery" element={<BakeryProduction />} />
              <Route path="order/:id" element={<ProductionOrder />} />
              <Route path="order/new" element={<ProductionOrder />} />
            </Route>
            <Route path="pos" element={<POS />} />
            <Route path="pdv" element={<PDVEnhanced />} />
            <Route path="reports" element={<Reports />} />
            <Route path="accounting">
              <Route index element={<AccountingModule />} />
              <Route path="dashboard" element={<AccountantDashboard />} />
              <Route path="fiscal" element={<FiscalIntegration />} />
              <Route path="sped" element={<SpedGeneration />} />
              <Route path="nfe" element={<NFeManagement />} />
              <Route path="companies" element={<CompanyManagement />} />
              <Route path="entities" element={<EntityRegistration />} />
            </Route>
            <Route path="settings">
              <Route path="users" element={<UserSettingsPage />} />
              <Route path="customize" element={<SystemCustomizationPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;