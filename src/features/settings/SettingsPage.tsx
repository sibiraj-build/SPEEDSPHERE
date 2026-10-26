import {
  Check,
  Database,
  Languages,
  Monitor,
  Moon,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sun,
  SunMoon,
} from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'
import { useSettings } from '@/app/settings-context'
import { ConfirmButton } from '@/components/shared/ConfirmButton'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { CATEGORY_IDS, type CategoryId, type Strategy } from '@/lib/psi-types'
import type { Theme } from '@/lib/storage'
import { clearLastRun } from '@/lib/storage'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import { useAnalysis } from '../analyze/analysis-context'
import { ApiKeyPanel } from './ApiKeyPanel'

const LOCALES: { value: string; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'en-GB', label: 'English (UK)' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'it', label: 'Italiano' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'pl', label: 'Polski' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'sv', label: 'Svenska' },
  { value: 'tr', label: 'Türkçe' },
  { value: 'ru', label: 'Русский' },
  { value: 'ar', label: 'العربية' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'zh-CN', label: '中文（简体）' },
  { value: 'zh-TW', label: '中文（繁體）' },
]

const POPULAR_LOCALES = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'ja', label: '日本語' },
  { value: 'zh-CN', label: '中文' },
]

const PRIVACY_POINTS = [
  'Your key never leaves this browser except inside requests to googleapis.com.',
  'It is never put in share links, history, downloaded JSON, page text, logs or error messages.',
  'The page address you test is sent to Google, which loads it from its own servers.',
  'No analytics, no trackers, no third-party scripts or fonts.',
]

export default function SettingsPage() {
  const { settings, updateSettings, history, clearHistory, apiKey, removeApiKey, resetAll } =
    useSettings()
  const { t } = useTranslation()
  const { reset } = useAnalysis()
  const [notice, setNotice] = useState<string | null>(null)
  const localeId = useId()

  const CATEGORY_LABEL: Record<CategoryId, string> = {
    performance: t.performance,
    accessibility: t.accessibility,
    'best-practices': t.bestPractices,
    seo: t.seo,
  }

  function handleLocaleChange(newLocale: string, label: string) {
    updateSettings({ locale: newLocale })
    setNotice(`${t.languageChanged} ${label}`)
  }

  return (
    <div className="mx-auto max-w-[1240px] px-4 pt-10 pb-20 sm:px-6 md:pt-14">
      <h1 className="font-display text-[2.75rem] sm:text-[3.5rem]">{t.settingsTitle}</h1>
      <p className="mt-2 max-w-[60ch] text-lg text-ink-2">
        {t.settingsSubtitle}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-10">
          <ApiKeyPanel />

          <section aria-labelledby="defaults-title" className="plate p-5 sm:p-7">
            <div className="flex items-center gap-3.5">
              <span className="icon-tile" aria-hidden>
                <SlidersHorizontal className="size-5" strokeWidth={1.9} />
              </span>
              <h2 id="defaults-title" className="font-display text-[1.75rem]">
                {t.defaultsTitle}
              </h2>
            </div>
            <p className="mt-1 text-ink-2">
              {t.defaultsSubtitle}
            </p>

            <div className="mt-6 space-y-6">
              <Row label={t.device}>
                <ToggleGroup
                  type="single"
                  value={settings.strategy}
                  onValueChange={(v) => v && updateSettings({ strategy: v as Strategy })}
                  aria-label="Default device"
                >
                  <ToggleGroupItem value="mobile">
                    <Smartphone aria-hidden /> {t.mobile}
                  </ToggleGroupItem>
                  <ToggleGroupItem value="desktop">
                    <Monitor aria-hidden /> {t.desktop}
                  </ToggleGroupItem>
                </ToggleGroup>
              </Row>

              <Row label={t.checks}>
                <ToggleGroup
                  type="multiple"
                  variant="outline"
                  size="sm"
                  value={settings.categories}
                  onValueChange={(v) =>
                    v.length > 0 &&
                    updateSettings({ categories: CATEGORY_IDS.filter((c) => v.includes(c)) })
                  }
                  aria-label="Default checks"
                >
                  {CATEGORY_IDS.map((c) => (
                    <ToggleGroupItem key={c} value={c}>
                      {CATEGORY_LABEL[c]}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </Row>

              <Row label={t.language} htmlFor={localeId}>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Language selection buttons">
                    {POPULAR_LOCALES.map((l) => {
                      const isActive =
                        settings.locale === l.value ||
                        (l.value === 'en' && settings.locale === 'en-GB') ||
                        (l.value === 'zh-CN' && settings.locale === 'zh-TW')
                      return (
                        <button
                          key={l.value}
                          type="button"
                          onClick={() => handleLocaleChange(l.value, l.label)}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-control px-3.5 py-2 text-sm font-semibold transition-all cursor-pointer',
                            isActive
                              ? 'bg-signal text-signal-ink shadow-[var(--shadow-plate)] ring-2 ring-signal ring-offset-2 ring-offset-panel'
                              : 'border border-edge bg-plate text-ink hover:bg-well hover:border-rule',
                          )}
                        >
                          <Languages className="size-3.5 opacity-80" aria-hidden />
                          <span>{l.label}</span>
                          {isActive && <Check className="size-3.5 stroke-[2.5]" aria-hidden />}
                        </button>
                      )
                    })}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <label htmlFor={localeId} className="text-xs text-ink-2">
                      All languages:
                    </label>
                    <select
                      id={localeId}
                      value={settings.locale}
                      onChange={(e) => {
                        const target = LOCALES.find((l) => l.value === e.target.value)
                        handleLocaleChange(e.target.value, target?.label ?? e.target.value)
                      }}
                      className="h-9 rounded-control border border-edge bg-plate px-3 text-sm text-ink cursor-pointer focus:outline-none focus:ring-1 focus:ring-signal"
                    >
                      {LOCALES.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label} ({l.value})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="mt-2 text-sm text-ink-2">
                  {t.languageHelp}
                </p>
              </Row>

              <Row label={t.theme}>
                <ToggleGroup
                  type="single"
                  value={settings.theme}
                  onValueChange={(v) => v && updateSettings({ theme: v as Theme })}
                  aria-label="Theme"
                >
                  <ToggleGroupItem value="system">
                    <SunMoon aria-hidden /> {t.system}
                  </ToggleGroupItem>
                  <ToggleGroupItem value="light">
                    <Sun aria-hidden /> {t.light}
                  </ToggleGroupItem>
                  <ToggleGroupItem value="dark">
                    <Moon aria-hidden /> {t.dark}
                  </ToggleGroupItem>
                </ToggleGroup>
              </Row>
            </div>
          </section>
        </div>

        <div className="space-y-10">
          <section aria-labelledby="privacy-title">
            <div className="flex items-center gap-3.5">
              <span className="icon-tile" aria-hidden>
                <ShieldCheck className="size-5" strokeWidth={1.9} />
              </span>
              <h2 id="privacy-title" className="font-display text-2xl">
                {t.privacy}
              </h2>
            </div>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-ink-2">
              {PRIVACY_POINTS.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check className="mt-1 size-4 shrink-0 text-good" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="data-title" className="plate p-5">
            <div className="flex items-center gap-3.5">
              <span className="icon-tile" aria-hidden>
                <Database className="size-5" strokeWidth={1.9} />
              </span>
              <h2 id="data-title" className="font-display text-2xl">
                {t.yourData}
              </h2>
            </div>
            <p className="mt-1 text-[0.9375rem] text-ink-2">
              {history.length} saved run{history.length === 1 ? '' : 's'}
              {apiKey ? ', one API key' : ''}.
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <ConfirmButton
                title="Clear test history?"
                description="Removes all saved runs and score trends from this browser. This can’t be undone."
                confirmLabel="Clear history"
                disabled={history.length === 0}
                onConfirm={() => {
                  clearHistory()
                  setNotice('History cleared.')
                }}
              >
                {t.clearHistory}
              </ConfirmButton>
              <ConfirmButton
                title="Remove your API key?"
                description="Tests will go back to the shared quota and may hit rate limits."
                confirmLabel="Remove key"
                disabled={!apiKey}
                onConfirm={() => {
                  removeApiKey()
                  setNotice('API key removed.')
                }}
              >
                {t.removeApiKey}
              </ConfirmButton>
              <ConfirmButton
                variant="destructive"
                title="Reset everything?"
                description="Deletes your API key, history, the last report and all settings from this browser. This can’t be undone."
                confirmLabel="Reset everything"
                onConfirm={() => {
                  resetAll()
                  clearLastRun()
                  reset()
                  setNotice('Everything was reset.')
                }}
              >
                {t.resetEverything}
              </ConfirmButton>
            </div>
            <p aria-live="polite" className="mt-3 min-h-5 text-sm font-medium text-signal">
              {notice}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor?: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:items-start">
      {htmlFor ? (
        <label htmlFor={htmlFor} className="font-label pt-2 text-ink">
          {label}
        </label>
      ) : (
        <p className="font-label pt-2 text-ink">{label}</p>
      )}
      <div>{children}</div>
    </div>
  )
}
