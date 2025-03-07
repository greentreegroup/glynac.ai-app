import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import UserAvatar from './components/UserAvatar';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import EmployeePage from "./pages/EmployeePage";
import ConversationPage from "./pages/ConversationPage";
import SendEmail from "./pages/SendEmail";
import PositiveEmails from "./pages/PositiveEmails";
import NegativeEmails from "./pages/NegativeEmails";
import AllEmails from "./pages/AllEmails";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";
import Section8 from "./pages/Section8";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const user = {
    id: "1",
    name: "John Doe",
    avatar: "", // No avatar provided
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/section1" element={<Section1 />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/section3" element={<Section3 />} />
              <Route path="/section4" element={<Section4 />} />
              <Route path="/section5" element={<Section5 />} />
              <Route path="/section6" element={<Section6 />} />
              <Route path="/section7" element={<Section7 />} />
              <Route path="/section8" element={<Section8 />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        <UserAvatar user={user} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
