import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StatePage from "./pages/StatePage";
import CityPage from "./pages/CityPage";
import { brazilianStates } from "./data/states";
import { getAllCities } from "./data/cities";

const queryClient = new QueryClient();

// Generate city routes dynamically
const cityRoutes = getAllCities().map(({ city }) => city.slug);

// Check if slug is a state or city
const isStateSlug = (slug: string): boolean => {
  return brazilianStates.some(state => state.slug === slug);
};

const isCitySlug = (slug: string): boolean => {
  return cityRoutes.includes(slug);
};

// Dynamic route component
const DynamicPage = () => {
  const slug = window.location.pathname.slice(1);
  
  if (isStateSlug(slug)) {
    return <StatePage />;
  }
  
  if (isCitySlug(slug)) {
    return <CityPage />;
  }
  
  return <NotFound />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* State routes */}
            {brazilianStates.map(state => (
              <Route key={state.slug} path={`/${state.slug}`} element={<StatePage />} />
            ))}
            {/* City routes */}
            {cityRoutes.map(slug => (
              <Route key={slug} path={`/${slug}`} element={<CityPage />} />
            ))}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
