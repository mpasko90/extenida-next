
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

// Service Pages
import HomeExtensions from "./pages/services/HomeExtensions";
import LoftConversions from "./pages/services/LoftConversions";
import KitchenRenovations from "./pages/services/KitchenRenovations";
import BathroomRenovations from "./pages/services/BathroomRenovations";
import Bathrooms from "./pages/services/Bathrooms";
import PatiosDriveways from "./pages/services/PatiosDriveways";

// Location-based Service Pages
import HouseExtensionsKingston from "./pages/services/house-extensions/Kingston";
import HouseExtensionsPutney from "./pages/services/house-extensions/Putney";
import HouseExtensionsRichmond from "./pages/services/house-extensions/Richmond";
import HouseExtensionsSurbiton from "./pages/services/house-extensions/Surbiton";
import HouseExtensionsTwickenham from "./pages/services/house-extensions/Twickenham";
import HouseExtensionsWimbledon from "./pages/services/house-extensions/Wimbledon";

import LoftConversionsKingston from "./pages/services/loft-conversions/Kingston";
import LoftConversionsPutney from "./pages/services/loft-conversions/Putney";
import LoftConversionsRichmond from "./pages/services/loft-conversions/Richmond";
import LoftConversionsSurbiton from "./pages/services/loft-conversions/Surbiton";
import LoftConversionsTwickenham from "./pages/services/loft-conversions/Twickenham";
import LoftConversionsWimbledon from "./pages/services/loft-conversions/Wimbledon";

// Area Pages
import KingstonUponThames from "./pages/areas/KingstonUponThames";
import Putney from "./pages/areas/Putney";
import Richmond from "./pages/areas/Richmond";
import Surbiton from "./pages/areas/Surbiton";
import Twickenham from "./pages/areas/Twickenham";
import Wimbledon from "./pages/areas/Wimbledon";

// Portfolio Pages
import PortfolioHouseExtensions from "./pages/portfolio/HouseExtensions";
import PortfolioLoftConversions from "./pages/portfolio/LoftConversions";

// Resource Pages
import CostCalculator from "./pages/resources/CostCalculator";
import ExtensionIdeas from "./pages/resources/ExtensionIdeas";
import FAQ from "./pages/resources/FAQ";
import PlanningPermissionGuide from "./pages/resources/PlanningPermissionGuide";

// Additional Pages
import YourJourney from "./pages/YourJourney";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/your-journey" element={<YourJourney />} />

          {/* Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/house-extensions" element={<PortfolioHouseExtensions />} />
          <Route path="/portfolio/loft-conversions" element={<PortfolioLoftConversions />} />

          {/* Areas */}
          <Route path="/areas/kingston-upon-thames" element={<KingstonUponThames />} />
          <Route path="/areas/putney" element={<Putney />} />
          <Route path="/areas/richmond" element={<Richmond />} />
          <Route path="/areas/surbiton" element={<Surbiton />} />
          <Route path="/areas/twickenham" element={<Twickenham />} />
          <Route path="/areas/wimbledon" element={<Wimbledon />} />

          {/* Services */}
          <Route path="/services/extensions" element={<HomeExtensions />} />
          <Route path="/services/house-extensions" element={<HomeExtensions />} />
          <Route path="/services/loft-conversions" element={<LoftConversions />} />
          <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
          <Route path="/services/bathroom-renovations" element={<BathroomRenovations />} />
          <Route path="/services/bathrooms" element={<Bathrooms />} />
          <Route path="/services/patios-driveways" element={<PatiosDriveways />} />

          {/* Location-based Services - House Extensions */}
          <Route path="/services/house-extensions/kingston" element={<HouseExtensionsKingston />} />
          <Route path="/services/house-extensions/putney" element={<HouseExtensionsPutney />} />
          <Route path="/services/house-extensions/richmond" element={<HouseExtensionsRichmond />} />
          <Route path="/services/house-extensions/surbiton" element={<HouseExtensionsSurbiton />} />
          <Route path="/services/house-extensions/twickenham" element={<HouseExtensionsTwickenham />} />
          <Route path="/services/house-extensions/wimbledon" element={<HouseExtensionsWimbledon />} />

          {/* Location-based Services - Loft Conversions */}
          <Route path="/services/loft-conversions/kingston" element={<LoftConversionsKingston />} />
          <Route path="/services/loft-conversions/putney" element={<LoftConversionsPutney />} />
          <Route path="/services/loft-conversions/richmond" element={<LoftConversionsRichmond />} />
          <Route path="/services/loft-conversions/surbiton" element={<LoftConversionsSurbiton />} />
          <Route path="/services/loft-conversions/twickenham" element={<LoftConversionsTwickenham />} />
          <Route path="/services/loft-conversions/wimbledon" element={<LoftConversionsWimbledon />} />

          {/* Resources */}
          <Route path="/resources/cost-calculator" element={<CostCalculator />} />
          <Route path="/resources/extension-ideas" element={<ExtensionIdeas />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/planning-permission-guide" element={<PlanningPermissionGuide />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
