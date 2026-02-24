import { useState } from "react";
import { motion } from "motion/react";
import { Check, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function EligibilityChecker() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<{ eligible: boolean; message: string } | null>(null);

  const checkEligibility = () => {
    if (!amount) return;
    
    const numAmount = parseFloat(amount.replace(/,/g, ''));
    const hasFour = amount.includes('4');
    const isEnough = numAmount >= 40000;

    if (isEnough && hasFour) {
      setResult({ eligible: true, message: t('check.success') });
    } else if (!isEnough) {
      setResult({ eligible: false, message: t('check.fail.amount') });
    } else {
      setResult({ eligible: false, message: t('check.fail.digit') });
    }
  };

  return (
    <section id="check" className="py-16 bg-lucky-card border-y border-white/5">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('check.title')}</h2>
        <p className="text-gray-400 mb-8">
          {t('check.subtitle')}
          <br />
          <span className="text-sm text-gray-500">{t('check.simulated')}</span>
        </p>

        <div className="relative max-w-md mx-auto">
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setResult(null);
            }}
            placeholder={t('check.placeholder')}
            className="w-full bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-xl font-mono text-white focus:outline-none focus:border-lucky-green transition-colors"
          />
          <button
            onClick={checkEligibility}
            className="absolute right-2 top-2 bottom-2 bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg transition-colors"
          >
            <Search size={20} />
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-6 p-4 rounded-xl inline-flex items-center gap-3",
              result.eligible ? "bg-lucky-green/10 text-lucky-green border border-lucky-green/20" : "bg-red-500/10 text-red-500 border border-red-500/20"
            )}
          >
            {result.eligible ? <Check size={20} /> : <X size={20} />}
            <span className="font-medium">{result.message}</span>
          </motion.div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-gray-400">40,000</span>
              <Check className="text-lucky-green" size={16} />
            </div>
            <p className="text-xs text-gray-500">{t('check.example.desc')}</p>
          </div>
          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-gray-400">45,123</span>
              <Check className="text-lucky-green" size={16} />
            </div>
            <p className="text-xs text-gray-500">{t('check.example.desc')}</p>
          </div>
          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-gray-400">104,567</span>
              <Check className="text-lucky-green" size={16} />
            </div>
            <p className="text-xs text-gray-500">{t('check.example.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
