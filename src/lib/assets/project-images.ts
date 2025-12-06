import canutinBalanceSheet from './projects/canutin-balance-sheet.png?enhanced';
import canutinDashboardDark from './projects/canutin-dashboard-dark.png?enhanced';
import canutinDashboard from './projects/canutin-dashboard.png?enhanced';
import canutinData from './projects/canutin-data.png?enhanced';
import canutinTransactions from './projects/canutin-transactions.png?enhanced';
import canutinTrends from './projects/canutin-trends.png?enhanced';
import chromaboxApp from './projects/chromabox-app.png?enhanced';
import chromaboxWebsite from './projects/chromabox-website.png?enhanced';
import hollamaSessionNew from './projects/hollama-session-new.png?enhanced';
import hollamaSession from './projects/hollama-session.png?enhanced';
import hollamaSettings from './projects/hollama-settings.png?enhanced';
import juliaSanfranciscoBaghdad from './projects/julia-sanfrancisco-baghdad.png?enhanced';
import juliaSanfranciscoHeadquarters from './projects/julia-sanfrancisco-headquarters.png?enhanced';
import juliaSanfranciscoHouseDetective from './projects/julia-sanfrancisco-house-detective.png?enhanced';
import juliaSanfranciscoMessenger from './projects/julia-sanfrancisco-messenger.png?enhanced';
import juliaSanfranciscoMontreal from './projects/julia-sanfrancisco-montreal.png?enhanced';
import juliaSanfranciscoParis from './projects/julia-sanfrancisco-paris.png?enhanced';
import juliaSanfranciscoRome from './projects/julia-sanfrancisco-rome.png?enhanced';
import juliaSanfranciscoSingapore from './projects/julia-sanfrancisco-singapore.png?enhanced';
import juliaSanfranciscoSplash from './projects/julia-sanfrancisco-splash.png?enhanced';
import juliaSanfranciscoStevedore from './projects/julia-sanfrancisco-stevedore.png?enhanced';
import juliaSanfranciscoStreetMerchant from './projects/julia-sanfrancisco-street-merchant.png?enhanced';
import oakHallCover from './projects/oak-hall-cover.png?enhanced';
import oakHallFooter from './projects/oak-hall-footer.png?enhanced';
import oakHallGardens from './projects/oak-hall-gardens.png?enhanced';
import oakHallLibrary from './projects/oak-hall-library.png?enhanced';
import palfreyPressAbout from './projects/palfrey-press-about.png?enhanced';
import palfreyPressCard1 from './projects/palfrey-press-card-1.png?enhanced';
import palfreyPressCard2 from './projects/palfrey-press-card-2.png?enhanced';
import palfreyPressCard3 from './projects/palfrey-press-card-3.png?enhanced';
import palfreyPressCard4 from './projects/palfrey-press-card-4.png?enhanced';
import palfreyPressCatalog from './projects/palfrey-press-catalog.png?enhanced';
import palfreyPressHomepage from './projects/palfrey-press-homepage.png?enhanced';
import pantaiAbout from './projects/pantai-about.png?enhanced';
import pantaiCareers from './projects/pantai-careers.png?enhanced';
import pantaiHomepage from './projects/pantai-homepage.png?enhanced';
import pantaiLegal from './projects/pantai-legal.png?enhanced';
import promptspreeArticle from './projects/promptspree-article.png?enhanced';
import promptspreeChat from './projects/promptspree-chat.png?enhanced';
import promptspreeCompletion from './projects/promptspree-completion.png?enhanced';
import promptspreeFooter from './projects/promptspree-footer.png?enhanced';
import promptspreeHomepage from './projects/promptspree-homepage.png?enhanced';
import ruleOfThreeDefault from './projects/rule-of-three-default.png?enhanced';

import type { Picture } from 'vite-imagetools';

const images: Record<string, Picture> = {
	'canutin-balance-sheet.png': canutinBalanceSheet,
	'canutin-dashboard-dark.png': canutinDashboardDark,
	'canutin-dashboard.png': canutinDashboard,
	'canutin-data.png': canutinData,
	'canutin-transactions.png': canutinTransactions,
	'canutin-trends.png': canutinTrends,
	'chromabox-app.png': chromaboxApp,
	'chromabox-website.png': chromaboxWebsite,
	'hollama-session-new.png': hollamaSessionNew,
	'hollama-session.png': hollamaSession,
	'hollama-settings.png': hollamaSettings,
	'julia-sanfrancisco-baghdad.png': juliaSanfranciscoBaghdad,
	'julia-sanfrancisco-headquarters.png': juliaSanfranciscoHeadquarters,
	'julia-sanfrancisco-house-detective.png': juliaSanfranciscoHouseDetective,
	'julia-sanfrancisco-messenger.png': juliaSanfranciscoMessenger,
	'julia-sanfrancisco-montreal.png': juliaSanfranciscoMontreal,
	'julia-sanfrancisco-paris.png': juliaSanfranciscoParis,
	'julia-sanfrancisco-rome.png': juliaSanfranciscoRome,
	'julia-sanfrancisco-singapore.png': juliaSanfranciscoSingapore,
	'julia-sanfrancisco-splash.png': juliaSanfranciscoSplash,
	'julia-sanfrancisco-stevedore.png': juliaSanfranciscoStevedore,
	'julia-sanfrancisco-street-merchant.png': juliaSanfranciscoStreetMerchant,
	'oak-hall-cover.png': oakHallCover,
	'oak-hall-footer.png': oakHallFooter,
	'oak-hall-gardens.png': oakHallGardens,
	'oak-hall-library.png': oakHallLibrary,
	'palfrey-press-about.png': palfreyPressAbout,
	'palfrey-press-card-1.png': palfreyPressCard1,
	'palfrey-press-card-2.png': palfreyPressCard2,
	'palfrey-press-card-3.png': palfreyPressCard3,
	'palfrey-press-card-4.png': palfreyPressCard4,
	'palfrey-press-catalog.png': palfreyPressCatalog,
	'palfrey-press-homepage.png': palfreyPressHomepage,
	'pantai-about.png': pantaiAbout,
	'pantai-careers.png': pantaiCareers,
	'pantai-homepage.png': pantaiHomepage,
	'pantai-legal.png': pantaiLegal,
	'promptspree-article.png': promptspreeArticle,
	'promptspree-chat.png': promptspreeChat,
	'promptspree-completion.png': promptspreeCompletion,
	'promptspree-footer.png': promptspreeFooter,
	'promptspree-homepage.png': promptspreeHomepage,
	'rule-of-three-default.png': ruleOfThreeDefault
};

export function getProjectImage(filename: string): Picture | undefined {
	return images[filename];
}
