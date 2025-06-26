import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Core pages (loaded immediately)
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));

// Service Pages (loaded on demand)
const HomeExtensions = lazy(() => import("./pages/services/HomeExtensions"));
const LoftConversions = lazy(() => import("./pages/services/LoftConversions"));
const KitchenRenovations = lazy(() => import("./pages/services/KitchenRenovations"));
const BathroomRenovations = lazy(() => import("./pages/services/BathroomRenovations"));
const Bathrooms = lazy(() => import("./pages/services/Bathrooms"));
const PatiosDriveways = lazy(() => import("./pages/services/PatiosDriveways"));

// Location-based Service Pages (loaded on demand)
const HouseExtensionsKingston = lazy(() => import("./pages/services/house-extensions/Kingston"));
const HouseExtensionsPutney = lazy(() => import("./pages/services/house-extensions/Putney"));
const HouseExtensionsRichmond = lazy(() => import("./pages/services/house-extensions/Richmond"));
const HouseExtensionsSurbiton = lazy(() => import("./pages/services/house-extensions/Surbiton"));
const HouseExtensionsTwickenham = lazy(() => import("./pages/services/house-extensions/Twickenham"));
const HouseExtensionsWimbledon = lazy(() => import("./pages/services/house-extensions/Wimbledon"));

const LoftConversionsKingston = lazy(() => import("./pages/services/loft-conversions/Kingston"));
const LoftConversionsPutney = lazy(() => import("./pages/services/loft-conversions/Putney"));
const LoftConversionsRichmond = lazy(() => import("./pages/services/loft-conversions/Richmond"));
const LoftConversionsSurbiton = lazy(() => import("./pages/services/loft-conversions/Surbiton"));
const LoftConversionsTwickenham = lazy(() => import("./pages/services/loft-conversions/Twickenham"));
const LoftConversionsWimbledon = lazy(() => import("./pages/services/loft-conversions/Wimbledon"));

// Area Pages (loaded on demand)
const KingstonUponThames = lazy(() => import("./pages/areas/KingstonUponThames"));
const Putney = lazy(() => import("./pages/areas/Putney"));
const Richmond = lazy(() => import("./pages/areas/Richmond"));
const Surbiton = lazy(() => import("./pages/areas/Surbiton"));
const Twickenham = lazy(() => import("./pages/areas/Twickenham"));
const Wimbledon = lazy(() => import("./pages/areas/Wimbledon"));

// Portfolio Pages (loaded on demand)
const PortfolioHouseExtensions = lazy(() => import("./pages/portfolio/HouseExtensions"));
const PortfolioLoftConversions = lazy(() => import("./pages/portfolio/LoftConversions"));

// Resource Pages (loaded on demand)
const CostCalculator = lazy(() => import("./pages/resources/CostCalculator"));
const ExtensionIdeas = lazy(() => import("./pages/resources/ExtensionIdeas"));
const FAQ = lazy(() => import("./pages/resources/FAQ"));
const PlanningPermissionGuide = lazy(() => import("./pages/resources/PlanningPermissionGuide"));

// Additional Pages (loaded on demand)
const YourJourney = lazy(() => import("./pages/YourJourney"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Ładowanie...</div>}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />

              {/* Service Routes */}
              <Route path="/services/home-extensions" element={<HomeExtensions />} />
              <Route path="/services/loft-conversions" element={<LoftConversions />} />
              <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
              <Route path="/services/bathroom-renovations" element={<BathroomRenovations />} />
              <Route path="/services/bathrooms" element={<Bathrooms />} />
              <Route path="/services/patios-driveways" element={<PatiosDriveways />} />

              {/* Location-based Service Routes */}
              <Route path="/services/house-extensions/kingston" element={<HouseExtensionsKingston />} />
              <Route path="/services/house-extensions/putney" element={<HouseExtensionsPutney />} />
              <Route path="/services/house-extensions/richmond" element={<HouseExtensionsRichmond />} />
              <Route path="/services/house-extensions/surbiton" element={<HouseExtensionsSurbiton />} />
              <Route path="/services/house-extensions/twickenham" element={<HouseExtensionsTwickenham />} />
              <Route path="/services/house-extensions/wimbledon" element={<HouseExtensionsWimbledon />} />

              <Route path="/services/loft-conversions/kingston" element={<LoftConversionsKingston />} />
              <Route path="/services/loft-conversions/putney" element={<LoftConversionsPutney />} />
              <Route path="/services/loft-conversions/richmond" element={<LoftConversionsRichmond />} />
              <Route path="/services/loft-conversions/surbiton" element={<LoftConversionsSurbiton />} />
              <Route path="/services/loft-conversions/twickenham" element={<LoftConversionsTwickenham />} />
              <Route path="/services/loft-conversions/wimbledon" element={<LoftConversionsWimbledon />} />

              {/* Area Routes */}
              <Route path="/areas/kingston" element={<KingstonUponThames />} />
              <Route path="/areas/putney" element={<Putney />} />
              <Route path="/areas/richmond" element={<Richmond />} />
              <Route path="/areas/surbiton" element={<Surbiton />} />
              <Route path="/areas/twickenham" element={<Twickenham />} />
              <Route path="/areas/wimbledon" element={<Wimbledon />} />

              {/* Portfolio Routes */}
              <Route path="/portfolio/house-extensions" element={<PortfolioHouseExtensions />} />
              <Route path="/portfolio/loft-conversions" element={<PortfolioLoftConversions />} />

              {/* Resource Routes */}
              <Route path="/resources/cost-calculator" element={<CostCalculator />} />
              <Route path="/resources/extension-ideas" element={<ExtensionIdeas />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
