
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Manufacturing from "./pages/Manufacturing";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const App = () => {
  // Create a QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParallaxProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ParallaxProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
