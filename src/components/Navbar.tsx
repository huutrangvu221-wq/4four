import { motion } from "motion/react";
import { Wallet, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lucky-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              className="flex items-center gap-2"
            >
              <img src="/logo.svg" alt="4 Token Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold font-mono text-white hidden sm:block">
                4
              </span>
            </motion.div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#lottery" className="hover:text-lucky-green px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('nav.lottery')}</a>
              <a href="#rules" className="hover:text-lucky-green px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('nav.rules')}</a>
              <a href="#check" className="hover:text-lucky-green px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('nav.check')}</a>
              
              <button 
                onClick={toggleLanguage}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Switch Language"
              >
                <Globe size={20} />
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-lucky-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#lottery" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.lottery')}</a>
            <a href="#rules" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.rules')}</a>
            <a href="#check" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.check')}</a>
          </div>
        </div>
      )}
    </nav>
  );
}
