import { useSettings } from '@/app/settings-context'

export type Locale =
  | 'en'
  | 'en-GB'
  | 'es'
  | 'fr'
  | 'de'
  | 'hi'
  | 'ja'
  | 'zh-CN'
  | 'zh-TW'
  | 'pt-BR'
  | 'it'
  | 'ru'
  | 'ar'
  | 'nl'
  | 'pl'
  | 'sv'
  | 'tr'
  | 'id'
  | 'ko'

export interface TranslationStrings {
  analyze: string
  settings: string
  home: string
  settingsTitle: string
  settingsSubtitle: string
  apiKeyTitle: string
  defaultsTitle: string
  defaultsSubtitle: string
  device: string
  mobile: string
  desktop: string
  checks: string
  performance: string
  accessibility: string
  bestPractices: string
  seo: string
  language: string
  languageHelp: string
  theme: string
  system: string
  light: string
  dark: string
  privacy: string
  yourData: string
  clearHistory: string
  removeApiKey: string
  resetEverything: string
  languageChanged: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  viewSample: string
  sampleSubtitle: string
  labTest: string
  labTestDesc: string
  realUserData: string
  realUserDesc: string
  analyzeButton: string
  urlPlaceholder: string
}

const en: TranslationStrings = {
  analyze: 'Analyze',
  settings: 'Settings',
  home: 'Home',
  settingsTitle: 'Settings',
  settingsSubtitle:
    'Everything here is saved in this browser only. Nothing is sent anywhere except the tests themselves, which go to Google.',
  apiKeyTitle: 'API key',
  defaultsTitle: 'Defaults',
  defaultsSubtitle: 'Used to prefill the test form. You can still change them per test.',
  device: 'Device',
  mobile: 'Mobile',
  desktop: 'Desktop',
  checks: 'Checks',
  performance: 'Performance',
  accessibility: 'Accessibility',
  bestPractices: 'Best practices',
  seo: 'SEO',
  language: 'Language',
  languageHelp: 'Select the language for SpeedSphere and Google audit reports.',
  theme: 'Theme',
  system: 'System',
  light: 'Light',
  dark: 'Dark',
  privacy: 'Privacy',
  yourData: 'Your data',
  clearHistory: 'Clear history',
  removeApiKey: 'Remove API key',
  resetEverything: 'Reset everything',
  languageChanged: 'Language updated to',
  heroBadge: 'Powered by Google PageSpeed Insights',
  heroTitle: 'Put a page on the bench.',
  heroSubtitle:
    'Google loads it on a simulated phone or desktop and measures everything. We turn the readings into plain English and point at the fixes that matter most.',
  viewSample: 'View sample report',
  sampleSubtitle: 'A full saved result. No quota used, works offline.',
  labTest: 'Lab test',
  labTestDesc:
    'One controlled visit, run by Google right now. Takes 10 to 60 seconds. Good for finding causes.',
  realUserData: 'Real-user data',
  realUserDesc:
    'How actual Chrome visitors experienced the page over the last 28 days, when there’s enough traffic.',
  analyzeButton: 'Analyze',
  urlPlaceholder: 'https://example.com',
}

const es: TranslationStrings = {
  ...en,
  analyze: 'Analizar',
  settings: 'Configuración',
  home: 'Inicio',
  settingsTitle: 'Configuración',
  settingsSubtitle:
    'Todo aquí se guarda solo en este navegador. No se envía nada a ningún lado excepto las pruebas a Google.',
  apiKeyTitle: 'Clave API',
  defaultsTitle: 'Valores predeterminados',
  defaultsSubtitle: 'Utilizados para completar el formulario. Puedes cambiarlos por prueba.',
  device: 'Dispositivo',
  mobile: 'Móvil',
  desktop: 'Escritorio',
  checks: 'Comprobaciones',
  performance: 'Rendimiento',
  accessibility: 'Accesibilidad',
  bestPractices: 'Buenas prácticas',
  seo: 'SEO',
  language: 'Idioma',
  languageHelp: 'Selecciona el idioma para SpeedSphere y los informes de auditoría de Google.',
  theme: 'Tema',
  system: 'Sistema',
  light: 'Claro',
  dark: 'Oscuro',
  privacy: 'Privacidad',
  yourData: 'Tus datos',
  clearHistory: 'Borrar historial',
  removeApiKey: 'Eliminar clave API',
  resetEverything: 'Restablecer todo',
  languageChanged: 'Idioma actualizado a',
  heroBadge: 'Desarrollado con Google PageSpeed Insights',
  heroTitle: 'Pon una página en el banco de pruebas.',
  heroSubtitle:
    'Google la carga en un teléfono o escritorio simulado y mide todo. Convertimos los resultados en lenguaje claro y destacamos las mejoras más importantes.',
  viewSample: 'Ver informe de muestra',
  sampleSubtitle: 'Un resultado guardado completo. Sin cuota, funciona sin conexión.',
  labTest: 'Prueba de laboratorio',
  labTestDesc:
    'Una visita controlada ejecutada por Google ahora mismo. Tarda de 10 a 60 segundos. Ideal para identificar causas.',
  realUserData: 'Datos de usuarios reales',
  realUserDesc:
    'Cómo los usuarios reales de Chrome experimentaron la página en los últimos 28 días, si hay suficiente tráfico.',
  analyzeButton: 'Analizar',
}

const fr: TranslationStrings = {
  ...en,
  analyze: 'Analyser',
  settings: 'Paramètres',
  home: 'Accueil',
  settingsTitle: 'Paramètres',
  settingsSubtitle:
    'Tout est enregistré uniquement dans ce navigateur. Rien n’est envoyé ailleurs que les tests eux-mêmes vers Google.',
  apiKeyTitle: 'Clé API',
  defaultsTitle: 'Valeurs par défaut',
  defaultsSubtitle: 'Utilisées pour préremplir le formulaire. Modifiables par test.',
  device: 'Appareil',
  mobile: 'Mobile',
  desktop: 'Ordinateur',
  checks: 'Vérifications',
  performance: 'Performance',
  accessibility: 'Accessibilité',
  bestPractices: 'Bonnes pratiques',
  seo: 'SEO',
  language: 'Langue',
  languageHelp: 'Choisissez la langue pour SpeedSphere et les rapports d’audit Google.',
  theme: 'Thème',
  system: 'Système',
  light: 'Clair',
  dark: 'Sombre',
  privacy: 'Confidentialité',
  yourData: 'Vos données',
  clearHistory: 'Effacer l’historique',
  removeApiKey: 'Supprimer la clé API',
  resetEverything: 'Tout réinitialiser',
  languageChanged: 'Langue mise à jour vers',
  heroBadge: 'Propulsé par Google PageSpeed Insights',
  heroTitle: 'Testez une page sur le banc d’essai.',
  heroSubtitle:
    'Google la charge sur un mobile ou ordinateur simulé et mesure tout. Nous traduisons les résultats en français clair et ciblons les correctifs essentiels.',
  viewSample: 'Voir le rapport d’exemple',
  sampleSubtitle: 'Rapport complet enregistré. Sans quota, utilisable hors ligne.',
  labTest: 'Test en laboratoire',
  labTestDesc:
    'Visite contrôlée effectuée par Google dès maintenant. Prend 10 à 60 secondes. Idéal pour trouver les causes.',
  realUserData: 'Données utilisateurs réels',
  realUserDesc:
    'Expérience des visiteurs réels de Chrome au cours des 28 derniers jours.',
  analyzeButton: 'Analyser',
}

const de: TranslationStrings = {
  ...en,
  analyze: 'Analysieren',
  settings: 'Einstellungen',
  home: 'Startseite',
  settingsTitle: 'Einstellungen',
  settingsSubtitle:
    'Alles wird ausschließlich in diesem Browser gespeichert. Daten gehen nur für Tests direkt an Google.',
  apiKeyTitle: 'API-Schlüssel',
  defaultsTitle: 'Standardwerte',
  defaultsSubtitle: 'Wird zur Vorausfüllung genutzt. Kann bei jedem Test angepasst werden.',
  device: 'Gerät',
  mobile: 'Mobil',
  desktop: 'Desktop',
  checks: 'Prüfungen',
  performance: 'Leistung',
  accessibility: 'Barrierefreiheit',
  bestPractices: 'Best Practices',
  seo: 'SEO',
  language: 'Sprache',
  languageHelp: 'Wählen Sie die Sprache für SpeedSphere und Google-Auditberichte.',
  theme: 'Design',
  system: 'System',
  light: 'Hell',
  dark: 'Dunkel',
  privacy: 'Datenschutz',
  yourData: 'Ihre Daten',
  clearHistory: 'Verlauf löschen',
  removeApiKey: 'Schlüssel entfernen',
  resetEverything: 'Alles zurücksetzen',
  languageChanged: 'Sprache geändert zu',
  heroBadge: 'Unterstützt von Google PageSpeed Insights',
  heroTitle: 'Bringen Sie Ihre Seite auf den Prüfstand.',
  heroSubtitle:
    'Google lädt die Seite auf einem simulierten Smartphone oder Desktop und misst alle Messwerte in verständlicher Sprache.',
  viewSample: 'Beispielbericht ansehen',
  sampleSubtitle: 'Vollständiger gespeicherter Bericht. Ohne Kontingentverbrauch, offline verfügbar.',
  labTest: 'Labortest',
  labTestDesc: 'Kontrollierte Messung direkt durch Google. Dauert 10 bis 60 Sekunden.',
  realUserData: 'Echte Nutzerdaten',
  realUserDesc: 'Erfahrungen tatsächlicher Chrome-Nutzer der letzten 28 Tage.',
  analyzeButton: 'Analysieren',
}

const hi: TranslationStrings = {
  ...en,
  analyze: 'विश्लेषण',
  settings: 'सेटिंग्स',
  home: 'होम',
  settingsTitle: 'सेटिंग्स',
  settingsSubtitle:
    'यहाँ सब कुछ केवल इसी ब्राउज़र में सुरक्षित रहता है। केवल परीक्षण डेटा Google को भेजा जाता है।',
  apiKeyTitle: 'API कुंजी',
  defaultsTitle: 'डिफ़ॉल्ट सेटिंग्स',
  defaultsSubtitle: 'परीक्षण फ़ॉर्म को पहले से भरने के लिए उपयोग किया जाता है।',
  device: 'उपकरण',
  mobile: 'मोबाइल',
  desktop: 'डेस्कटॉप',
  checks: 'जाँच',
  performance: 'प्रदर्शन (Performance)',
  accessibility: 'सुलभता (Accessibility)',
  bestPractices: 'सर्वोत्तम प्रथाएँ',
  seo: 'एसईओ (SEO)',
  language: 'भाषा (Language)',
  languageHelp: 'SpeedSphere और Google ऑडिट रिपोर्ट के लिए भाषा चुनें।',
  theme: 'थीम',
  system: 'सिस्टम',
  light: 'लाइट',
  dark: 'डार्क',
  privacy: 'गोपनीयता',
  yourData: 'आपका डेटा',
  clearHistory: 'इतिहास साफ़ करें',
  removeApiKey: 'API कुंजी हटाएँ',
  resetEverything: 'सब कुछ रीसेट करें',
  languageChanged: 'भाषा बदलकर की गई',
  heroBadge: 'Google PageSpeed Insights द्वारा संचालित',
  heroTitle: 'वेबसाइट का सटीक प्रदर्शन मापें।',
  heroSubtitle:
    'Google इसे सिम्युलेटेड फ़ोन या डेस्कटॉप पर लोड करता है और सब कुछ मापता है। हम इसे सरल भाषा में समझाते हैं।',
  viewSample: 'नमूना रिपोर्ट देखें',
  sampleSubtitle: 'पूर्ण सहेजा गया परिणाम। बिना कोटा खर्च किए ऑफ़लाइन देखें।',
  labTest: 'लैब टेस्ट',
  labTestDesc: 'Google द्वारा नियंत्रित परीक्षण। 10 से 60 सेकंड लगते हैं।',
  realUserData: 'वास्तविक उपयोगकर्ता डेटा',
  realUserDesc: 'पिछले 28 दिनों में वास्तविक Chrome उपयोगकर्ताओं का अनुभव।',
  analyzeButton: 'विश्लेषण करें',
}

const ja: TranslationStrings = {
  ...en,
  analyze: '分析',
  settings: '設定',
  home: 'ホーム',
  settingsTitle: '設定',
  settingsSubtitle: 'すべての設定はこのブラウザにのみ保存されます。Googleへのテスト送信以外の送信はありません。',
  apiKeyTitle: 'APIキー',
  defaultsTitle: 'デフォルト設定',
  defaultsSubtitle: 'テストフォームの初期値として使用されます。テストごとに変更可能です。',
  device: 'デバイス',
  mobile: 'モバイル',
  desktop: 'デスクトップ',
  checks: 'チェック項目',
  performance: 'パフォーマンス',
  accessibility: 'アクセシビリティ',
  bestPractices: 'ベストプラクティス',
  seo: 'SEO',
  language: '言語',
  languageHelp: 'SpeedSphereおよびGoogle監査レポートの言語を選択します。',
  theme: 'テーマ',
  system: 'システム',
  light: 'ライト',
  dark: 'ダーク',
  privacy: 'プライバシー',
  yourData: '保存データ',
  clearHistory: '履歴を消去',
  removeApiKey: 'APIキーを削除',
  resetEverything: 'すべてリセット',
  languageChanged: '言語を変更しました：',
  heroBadge: 'Google PageSpeed Insights 搭載',
  heroTitle: 'ページをベンチマークにかける。',
  heroSubtitle: 'Googleが仮想端末で読み込み精密測定。わかりやすい解説と優先改善点を提示します。',
  viewSample: 'サンプルレポートを見る',
  sampleSubtitle: '保存済みの完全なレポート。クォータ消費なしでオフライン確認可能。',
  labTest: 'ラボテスト',
  labTestDesc: 'Googleによる1回限りの制御された計測。10〜60秒かかります。',
  realUserData: '実ユーザーデータ',
  realUserDesc: '過去28日間の実際のChromeユーザーの体験データ。',
  analyzeButton: '分析する',
}

const zhCN: TranslationStrings = {
  ...en,
  analyze: '分析',
  settings: '设置',
  home: '首页',
  settingsTitle: '设置',
  settingsSubtitle: '所有设置仅保存在此浏览器中。除向Google发送测试外，不会向任何地方传输数据。',
  apiKeyTitle: 'API密钥',
  defaultsTitle: '默认设置',
  defaultsSubtitle: '用于预填测试表单。每次测试时均可单独更改。',
  device: '设备',
  mobile: '移动端',
  desktop: '桌面端',
  checks: '检测项目',
  performance: '性能',
  accessibility: '无障碍',
  bestPractices: '最佳实践',
  seo: 'SEO',
  language: '语言',
  languageHelp: '选择SpeedSphere和Google审核报告使用的语言。',
  theme: '主题',
  system: '跟随系统',
  light: '浅色',
  dark: '深色',
  privacy: '隐私保障',
  yourData: '本地数据',
  clearHistory: '清除历史记录',
  removeApiKey: '移除API密钥',
  resetEverything: '重置所有设置',
  languageChanged: '语言已更新为',
  heroBadge: '由 Google PageSpeed Insights 驱动',
  heroTitle: '把网页放入性能测试台。',
  heroSubtitle: 'Google在模拟移动端或桌面端上全面测量，以通俗语言展现最关键的优化点。',
  viewSample: '查看示例报告',
  sampleSubtitle: '完整保存的报告。无需消耗配额，支持离线浏览。',
  labTest: '实验室测试',
  labTestDesc: 'Google即时执行的受控测试，耗时10至60秒，用于诊断根因。',
  realUserData: '真实用户数据',
  realUserDesc: '基于过去28天内Chrome真实访问者的体验数据。',
  analyzeButton: '开始分析',
}

const TRANSLATIONS: Record<string, TranslationStrings> = {
  en,
  'en-GB': en,
  es,
  fr,
  de,
  hi,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhCN,
}

export function useTranslation(): { t: TranslationStrings; locale: string } {
  const { settings } = useSettings()
  const locale = settings.locale || 'en'
  const baseLocale = locale.split('-')[0] ?? 'en'
  const t = TRANSLATIONS[locale] ?? TRANSLATIONS[baseLocale] ?? en
  return { t, locale }
}
