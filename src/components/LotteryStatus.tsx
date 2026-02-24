import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Clock, Coins, Trophy } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function LotteryStatus() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [poolSize, setPoolSize] = useState(124500);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Reset simulation
          setPoolSize(prevPool => prevPool * 0.5 + Math.floor(Math.random() * 5000));
          return 900;
        }
        return prev - 1;
      });
      
      // Simulate pool growth
      if (Math.random() > 0.7) {
        setPoolSize(prev => prev + Math.floor(Math.random() * 100));
      }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Countdown & Pool */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-lucky-card border border-lucky-green/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy size={200} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-400 mb-2">{t('lottery.next_draw')}</h2>
              <div className="text-6xl sm:text-8xl font-mono font-bold text-white mb-8 tracking-tighter">
                {formatTime(timeLeft)}
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-lucky-green font-mono mb-1">{t('lottery.pool')}</p>
                  <div className="text-4xl sm:text-5xl font-bold text-white flex items-center gap-2">
                    {poolSize.toLocaleString()} <span className="text-lg text-gray-500">LUCKY4</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">≈ ${(poolSize * 0.04).toFixed(2)} USD</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{t('lottery.winner_gets')}</p>
                    <p className="text-xl font-mono text-lucky-gold">{(poolSize * 0.5).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{t('lottery.rollover')}</p>
                    <p className="text-xl font-mono text-white">{(poolSize * 0.5).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Recent Winners */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Trophy className="text-lucky-gold" /> {t('lottery.recent_winners')}
              </h3>
              <span className="text-sm text-lucky-green animate-pulse">● {t('lottery.live_feed')}</span>
            </div>
            
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-lucky-card border border-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lucky-green to-blue-500 flex items-center justify-center text-xs font-bold text-black">
                      0x
                    </div>
                    <div>
                      <p className="font-mono text-sm text-white">0x{Math.random().toString(16).slice(2, 6)}...{Math.random().toString(16).slice(2, 6)}</p>
                      <p className="text-xs text-gray-500">{i * 15 + 2} {t('lottery.mins_ago')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-lucky-gold font-bold">+{Math.floor(Math.random() * 50000 + 10000).toLocaleString()}</p>
                    <p className="text-xs text-gray-500">LUCKY4</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
