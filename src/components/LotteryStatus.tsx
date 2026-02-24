import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Clock, Coins, Trophy, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function LotteryStatus() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(0);
  const [poolSize] = useState(0.311); // Static BNB amount
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      // Calculate next 15-minute interval
      const nextInterval = Math.ceil((minutes + 1) / 15) * 15;
      const diffMinutes = nextInterval - minutes - 1;
      const diffSeconds = 60 - seconds;
      
      let totalSeconds = (diffMinutes * 60) + diffSeconds;
      
      // Handle edge case where we are exactly on the minute
      if (totalSeconds >= 900) totalSeconds = 0;
      
      return totalSeconds;
    };

    // Initial set
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="lottery" className="py-16 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Countdown & Pool */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-lucky-card border border-lucky-green/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden max-w-3xl w-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy size={200} />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-bold text-gray-400 mb-2">{t('lottery.next_draw')}</h2>
              <div className="text-6xl sm:text-8xl font-mono font-bold text-white mb-8 tracking-tighter">
                {formatTime(timeLeft)}
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-lucky-green font-mono mb-1">{t('lottery.pool')}</p>
                  <div className="text-4xl sm:text-5xl font-bold text-white flex items-center justify-center gap-2">
                    {poolSize.toLocaleString()} <span className="text-lg text-gray-500">BNB</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">≈ ${(poolSize * 600).toFixed(2)} USD</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{t('lottery.winner_gets')}</p>
                    <p className="text-xl font-mono text-lucky-gold">{(poolSize * 0.5).toFixed(4)} BNB</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{t('lottery.rollover')}</p>
                    <p className="text-xl font-mono text-white">{(poolSize * 0.5).toFixed(4)} BNB</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blockchain Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl w-full bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                <Info size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{t('lottery.explanation.title')}</h4>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {t('lottery.explanation.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t('lottery.explanation.note')}
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Recent Winners Section (Empty State) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="text-lucky-gold" /> {t('lottery.recent_winners')}
            </h3>
            <span className="text-sm text-lucky-green animate-pulse">● {t('lottery.live_feed')}</span>
          </div>
          
          <div className="bg-lucky-card border border-white/5 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-gray-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-300 mb-2">{t('lottery.no_winners')}</h4>
            <p className="text-gray-500">{t('lottery.waiting')}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
