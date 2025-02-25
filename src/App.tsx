
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import EmployeePage from "./pages/EmployeePage";
import ConversationPage from "./pages/ConversationPage";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                !isAuthenticated ? (
                  <Login onLogin={() => setIsAuthenticated(true)} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                isAuthenticated ? (
                  <CategoryPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/employee/:employeeId"
              element={
                isAuthenticated ? (
                  <EmployeePage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/conversation/:conversationId"
              element={
                isAuthenticated ? (
                  <ConversationPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
