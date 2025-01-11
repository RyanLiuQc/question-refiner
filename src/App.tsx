import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
import Index2 from "./pages/Index2";
import Index from "./pages/Index";
import Index3 from "./pages/Index3";

import Index4 from "./pages/Index4";

import Index5 from "./pages/Index5";

import Index6 from "./pages/Index6";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/chat" element={<Index2 />} />
          
          <Route path="/faq" element={<Index3 />} />
          
          <Route path="/mentors" element={<Index4 />} />

          <Route path="/qom" element={<Index5 />} />

          <Route path="/tips" element={<Index6 />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
