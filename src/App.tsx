import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LotteryStatus } from "./components/LotteryStatus";
import { Rules } from "./components/Rules";
import { EligibilityChecker } from "./components/EligibilityChecker";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./lib/i18n";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-lucky-dark text-white font-sans selection:bg-lucky-green selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <LotteryStatus />
          <Rules />
          <EligibilityChecker />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
