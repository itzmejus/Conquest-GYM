import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Fallback values used only if a variable is missing at build time (e.g. a
// hosting platform's dashboard env vars weren't configured for this site).
// Without this, a missing VITE_ variable referenced in index.html leaves a
// literal "%VITE_X%" placeholder in the HTML, which crashes the entire
// build (Vite's built-in html env substitution has no fallback support,
// and immediately fails on the leftover unresolved placeholder). We patch
// process.env here, before Vite's own internal html processing runs, so
// it always finds every variable defined and never hits that path.
const fallbacks = {
  VITE_BRAND_NAME: 'This Gym',
  VITE_SITE_TITLE: 'Gym Website',
  VITE_META_DESCRIPTION: 'A modern gym website.',
  VITE_SITE_URL: '',
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  for (const [key, fallback] of Object.entries(fallbacks)) {
    if (!env[key]) {
      console.warn(`[vite] ${key} is not set — using fallback "${fallback}" for this build.`)
      process.env[key] = fallback
    }
  }

  return {
    plugins: [react()],
  }
})
