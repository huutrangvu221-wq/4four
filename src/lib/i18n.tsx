import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  [key: string]: {
    en: string;
    zh: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.lottery': { en: 'Lottery', zh: '抽奖' },
  'nav.rules': { en: 'Rules', zh: '规则' },
  'nav.check': { en: 'Check Eligibility', zh: '资格查询' },
  'nav.connect': { en: 'Connect Wallet', zh: '连接钱包' },

  // Hero
  'hero.powered': { en: 'Powered by @Four_FORM_', zh: '基于 @Four_FORM_ 机制' },
  'hero.title.1': { en: 'The Lucky Number', zh: '幸运数字' },
  'hero.subtitle': { en: 'Hold 40,000+ tokens with a "4" in your balance to win.', zh: '持有 40,000 枚以上且数量中包含数字"4"，即可自动参与抽奖！' },
  'hero.subtitle.2': { en: 'Fair, transparent, and 100% on-chain.', zh: '智能合约自动开奖，全程透明可查，绝对公平！' },
  'hero.buy': { en: 'Buy $LUCKY4', zh: '购买 $LUCKY4' },
  'hero.chart': { en: 'View Chart', zh: '查看K线' },
  'hero.card.win.title': { en: 'Win Big', zh: '赢得大奖' },
  'hero.card.win.desc': { en: 'Every 15 minutes, a lucky holder wins 50% of the pot.', zh: '每 15 分钟开奖一次，中奖者获得奖池 50%。' },
  'hero.card.deflation.title': { en: 'Deflationary', zh: '通缩机制' },
  'hero.card.deflation.desc': { en: '30% of tax is used to buy back and burn tokens.', zh: '30% 税收用于回购销毁。' },
  'hero.card.compound.title': { en: 'Auto-Compounding', zh: '奖池滚存' },
  'hero.card.compound.desc': { en: '50% of the pot rolls over to the next round.', zh: '剩余 50% 滚入下一轮，奖池越滚越大！' },

  // Lottery Status
  'lottery.next_draw': { en: 'Next Draw In', zh: '下轮开奖倒计时' },
  'lottery.pool': { en: 'CURRENT PRIZE POOL', zh: '当前奖池' },
  'lottery.winner_gets': { en: 'WINNER GETS (50%)', zh: '中奖者获得 (50%)' },
  'lottery.rollover': { en: 'ROLLOVER (50%)', zh: '滚存下轮 (50%)' },
  'lottery.recent_winners': { en: 'Recent Winners', zh: '近期中奖名单' },
  'lottery.live_feed': { en: 'Live Feed', zh: '实时' },
  'lottery.mins_ago': { en: 'mins ago', zh: '分钟前' },

  // Rules
  'rules.title': { en: 'Tokenomics & Rules', zh: '代币经济与规则' },
  'rules.subtitle': { en: 'Simple, transparent, and built for growth.', zh: '简单透明，为增长而生。' },
  'rules.tax.title': { en: '5% Transaction Tax', zh: '5% 交易税' },
  'rules.tax.pool': { en: 'Lottery Pool', zh: '幸运4抽奖池' },
  'rules.tax.pool.desc': { en: 'Feeds the 15-minute jackpot.', zh: '70% 进入奖池。' },
  'rules.tax.burn': { en: 'Buyback & Burn', zh: '回购销毁' },
  'rules.tax.burn.desc': { en: 'Deflationary mechanism to increase value.', zh: '30% 用于回购销毁（通缩机制）。' },
  'rules.how.title': { en: 'How to Win', zh: '如何参与' },
  'rules.how.1.title': { en: 'Hold Tokens', zh: '持有代币' },
  'rules.how.1.desc': { en: 'You must hold at least 40,000 tokens in your wallet.', zh: '持有 ≥ 40,000 枚代币。' },
  'rules.how.2.title': { en: 'The Lucky "4"', zh: '幸运数字 "4"' },
  'rules.how.2.desc': { en: 'Your token balance must contain the digit "4".', zh: '持有量中必须包含数字 "4"。' },
  'rules.how.3.title': { en: 'Automatic Entry', zh: '自动参与' },
  'rules.how.3.desc': { en: 'No manual entry needed. The smart contract checks automatically every 15 minutes.', zh: '无需操作，智能合约每15分钟自动开奖。' },

  // Eligibility Checker
  'check.title': { en: 'Check Eligibility', zh: '资格查询' },
  'check.subtitle': { en: 'Enter a token amount to see if it qualifies for the lottery.', zh: '输入代币数量，查询是否具备抽奖资格。' },
  'check.simulated': { en: '(Simulated check - connect wallet for real check)', zh: '(模拟查询 - 连接钱包进行真实查询)' },
  'check.placeholder': { en: 'Enter token amount (e.g. 40000)', zh: '输入代币数量 (例如 40000)' },
  'check.success': { en: 'You are eligible for the lottery!', zh: '恭喜！您具备参与抽奖资格！' },
  'check.fail.amount': { en: 'You need at least 40,000 tokens.', zh: '您需要持有至少 40,000 枚代币。' },
  'check.fail.digit': { en: "Your balance must contain the digit '4'.", zh: "您的持币数量中必须包含数字 '4'。" },
  'check.example.desc': { en: "Contains '4' & ≥ 40k", zh: "包含 '4' 且 ≥ 4万" },

  // Footer
  'footer.desc': { en: 'The fairest on-chain lottery token. Built on FourMeme.\n100% Decentralized & Transparent.', zh: '最公平的链上抽奖代币。基于 FourMeme 构建。\n100% 去中心化且透明。' },
  'footer.links': { en: 'Quick Links', zh: '快速链接' },
  'footer.buy': { en: 'Buy on FourMeme', zh: '在 FourMeme 购买' },
  'footer.contract': { en: 'View Contract', zh: '查看合约' },
  'footer.audit': { en: 'Audit Report', zh: '审计报告' },
  'footer.whitepaper': { en: 'Whitepaper', zh: '白皮书' },
  'footer.community': { en: 'Community', zh: '社区' },
  'footer.rights': { en: 'Lucky 4 Token. All rights reserved.', zh: 'Lucky 4 Token. 版权所有。' },
  'footer.risk': { en: 'Cryptocurrency investments are subject to high market risk. Please invest cautiously.', zh: '加密货币投资具有高市场风险，请谨慎投资。' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as requested by latest prompt context implies Chinese user

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
