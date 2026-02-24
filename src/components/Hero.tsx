import { motion } from "motion/react";
import { ArrowRight, Trophy, Flame, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-lucky-green/10 text-lucky-green text-sm font-mono mb-6 border border-lucky-green/20">
              {t('hero.powered')}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-white">{t('hero.title.1')}</span>
              <span className="block text-lucky-green text-glow mt-2">4</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              {t('hero.subtitle')}
              <br />
              {t('hero.subtitle.2')}
            </p>
            
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-lucky-green text-black font-bold px-8 py-4 rounded-xl hover:bg-lucky-green/90 transition-all transform hover:scale-105 flex items-center gap-2 text-lg shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                {t('hero.buy')} <ArrowRight size={20} />
              </button>
              <button className="bg-white/5 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 text-lg">
                {t('hero.chart')}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8"
          >
            <div className="p-6 bg-lucky-card rounded-2xl border border-white/5 hover:border-lucky-green/30 transition-colors group">
              <div className="w-12 h-12 bg-lucky-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lucky-green/20 transition-colors">
                <Trophy className="text-lucky-green" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('hero.card.win.title')}</h3>
              <p className="text-gray-400 text-sm">{t('hero.card.win.desc')}</p>
            </div>
            
            <div className="p-6 bg-lucky-card rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors group">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-colors">
                <Flame className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('hero.card.deflation.title')}</h3>
              <p className="text-gray-400 text-sm">{t('hero.card.deflation.desc')}</p>
            </div>
            
            <div className="p-6 bg-lucky-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                <RefreshCw className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('hero.card.compound.title')}</h3>
              <p className="text-gray-400 text-sm">{t('hero.card.compound.desc')}</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-lucky-green/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-lucky-gold/5 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
