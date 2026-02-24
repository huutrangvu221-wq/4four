import { Twitter, Send, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-lucky-card border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo.svg" alt="Lucky 4 Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold font-mono text-lucky-green">
                LUCKY<span className="text-white">4</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs whitespace-pre-line">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-lucky-green transition-colors">{t('footer.buy')}</a></li>
              <li><a href="#" className="hover:text-lucky-green transition-colors">{t('footer.contract')}</a></li>
              <li><a href="#" className="hover:text-lucky-green transition-colors">{t('footer.audit')}</a></li>
              <li><a href="#" className="hover:text-lucky-green transition-colors">{t('footer.whitepaper')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.community')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lucky-green hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lucky-green hover:text-black transition-all">
                <Send size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lucky-green hover:text-black transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="mt-2">{t('footer.risk')}</p>
        </div>
      </div>
    </footer>
  );
}
