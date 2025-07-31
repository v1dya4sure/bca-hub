import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Semester from "./pages/Semester";
import Semester1Syllabus from "./pages/Semester1Syllabus";
import Semester1Notes from "./pages/Semester1Notes";
import AECCNotes from "./pages/AECCNotes";
import GE1Notes from "./pages/GE1Notes";
import GE1Physics from "./pages/GE1Physics";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/semester/:id" element={<Semester />} />
          <Route path="/semester/1/syllabus" element={<Semester1Syllabus />} />
          <Route path="/semester/1/notes" element={<Semester1Notes />} />
          <Route path="/semester/1/notes/aecc" element={<AECCNotes />} />
          <Route path="/semester/1/notes/ge1" element={<GE1Notes />} />
          <Route path="/semester/1/notes/ge1/physics" element={<GE1Physics />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
