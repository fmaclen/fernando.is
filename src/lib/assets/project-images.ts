import canutinBalanceSheet from './projects/canutin-balance-sheet.png';
import canutinDashboardDark from './projects/canutin-dashboard-dark.png';
import canutinDashboard from './projects/canutin-dashboard.png';
import canutinData from './projects/canutin-data.png';
import canutinTransactions from './projects/canutin-transactions.png';
import canutinTrends from './projects/canutin-trends.png';
import chromaboxApp from './projects/chromabox-app.png';
import chromaboxWebsite from './projects/chromabox-website.png';
import hollamaSessionNew from './projects/hollama-session-new.png';
import hollamaSession from './projects/hollama-session.png';
import hollamaSettings from './projects/hollama-settings.png';
import juliaSanfranciscoBaghdad from './projects/julia-sanfrancisco-baghdad.png';
import juliaSanfranciscoHeadquarters from './projects/julia-sanfrancisco-headquarters.png';
import juliaSanfranciscoHouseDetective from './projects/julia-sanfrancisco-house-detective.png';
import juliaSanfranciscoMessenger from './projects/julia-sanfrancisco-messenger.png';
import juliaSanfranciscoMontreal from './projects/julia-sanfrancisco-montreal.png';
import juliaSanfranciscoParis from './projects/julia-sanfrancisco-paris.png';
import juliaSanfranciscoRome from './projects/julia-sanfrancisco-rome.png';
import juliaSanfranciscoSingapore from './projects/julia-sanfrancisco-singapore.png';
import juliaSanfranciscoSplash from './projects/julia-sanfrancisco-splash.png';
import juliaSanfranciscoStevedore from './projects/julia-sanfrancisco-stevedore.png';
import juliaSanfranciscoStreetMerchant from './projects/julia-sanfrancisco-street-merchant.png';
import oakHallCover from './projects/oak-hall-cover.png';
import oakHallFooter from './projects/oak-hall-footer.png';
import oakHallGardens from './projects/oak-hall-gardens.png';
import oakHallLibrary from './projects/oak-hall-library.png';
import palfreyPressAbout from './projects/palfrey-press-about.png';
import palfreyPressCard1 from './projects/palfrey-press-card-1.png';
import palfreyPressCard2 from './projects/palfrey-press-card-2.png';
import palfreyPressCard3 from './projects/palfrey-press-card-3.png';
import palfreyPressCard4 from './projects/palfrey-press-card-4.png';
import palfreyPressCatalog from './projects/palfrey-press-catalog.png';
import palfreyPressHomepage from './projects/palfrey-press-homepage.png';
import pantaiAbout from './projects/pantai-about.png';
import pantaiCareers from './projects/pantai-careers.png';
import pantaiHomepage from './projects/pantai-homepage.png';
import pantaiLegal from './projects/pantai-legal.png';
import promptspreeArticle from './projects/promptspree-article.png';
import promptspreeChat from './projects/promptspree-chat.png';
import promptspreeCompletion from './projects/promptspree-completion.png';
import promptspreeFooter from './projects/promptspree-footer.png';
import promptspreeHomepage from './projects/promptspree-homepage.png';
import ruleOfThreeDefault from './projects/rule-of-three-default.png';

const images: Record<string, string> = {
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

export function getProjectImage(filename: string): string | undefined {
	return images[filename];
}
