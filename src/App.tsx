import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/Navigation";
import Index from "./pages/Index";
import AskQuestion from "./pages/AskQuestion";
import Notes from "./pages/Notes";
import ChapterDetail from "./pages/ChapterDetail";
import Quiz from "./pages/Quiz";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import GDPRNotice from "./pages/GDPRNotice";
import CCPANotice from "./pages/CCPANotice";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:chapterId" element={<ChapterDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/gdpr-notice" element={<GDPRNotice />} />
          <Route path="/ccpa-notice" element={<CCPANotice />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
