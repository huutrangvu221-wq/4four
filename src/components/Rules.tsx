import { motion } from "motion/react";
import { PieChart, TrendingUp, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Rules() {
  const { t } = useLanguage();

  return (
    <section id="rules" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('rules.title')}</h2>
          <p className="text-gray-400">{t('rules.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tax Structure */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-lucky-card border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-lucky-green/10 rounded-xl">
                <PieChart className="text-lucky-green" size={32} />
              </div>
              <h3 className="text-2xl font-bold">{t('rules.tax.title')}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">{t('rules.tax.pool')}</span>
                  <span className="font-mono text-lucky-green">70%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lucky-green w-[70%]" />
                </div>
                <p className="text-sm text-gray-400 mt-2">{t('rules.tax.pool.desc')}</p>
              </div>
              
              <div className="relative pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">{t('rules.tax.burn')}</span>
                  <span className="font-mono text-red-500">30%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[30%]" />
                </div>
                <p className="text-sm text-gray-400 mt-2">{t('rules.tax.burn.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Participation Rules */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-lucky-card border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-lucky-gold/10 rounded-xl">
                <ShieldCheck className="text-lucky-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold">{t('rules.how.title')}</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lucky-green/20 text-lucky-green flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-bold text-white">{t('rules.how.1.title')}</p>
                  <p className="text-sm text-gray-400">{t('rules.how.1.desc')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lucky-green/20 text-lucky-green flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-bold text-white">{t('rules.how.2.title')}</p>
                  <p className="text-sm text-gray-400">{t('rules.how.2.desc')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lucky-green/20 text-lucky-green flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-bold text-white">{t('rules.how.3.title')}</p>
                  <p className="text-sm text-gray-400">{t('rules.how.3.desc')}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
