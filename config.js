// ─────────────────────────────────────────────────────────────────────────────
// CardScan Pro — Configuration File
// Edit this file to set your default API provider and keys.
// This file lives in your GitHub repo alongside cardscan_pro.html
//
// HOW TO USE:
//   1. Set DEFAULT_PROVIDER to your preferred provider
//   2. Set the corresponding API key
//   3. Commit both files to GitHub — the site will use these as defaults
//   4. Users can still override keys manually in API Settings on the site
//   5. NEVER commit a real key to a public repo — use a restricted key or
//      leave blank and let users enter their own
// ─────────────────────────────────────────────────────────────────────────────

window.CARDSCAN_CONFIG = {

  // ── DEFAULT PROVIDER ────────────────────────────────────────────────────────
  // Options: 'groq' | 'together' | 'gemini' | 'claude' | 'openai' | 'ollama'
  DEFAULT_PROVIDER: 'groq',

  // ── API KEYS (leave blank '' to require user to enter manually) ─────────────
  GROQ_API_KEY:     '',   // Get free key at console.groq.com (no credit card)
  TOGETHER_API_KEY: '',   // Get $25 free at api.together.ai
  GEMINI_API_KEY:   '',   // Get free key at aistudio.google.com (5 RPM, 20/day)
  CLAUDE_API_KEY:   '',   // Get key at console.anthropic.com ($5 free credit)
  OPENAI_API_KEY:   '',   // Get key at platform.openai.com (requires billing)

  // ── OLLAMA (local only) ─────────────────────────────────────────────────────
  OLLAMA_URL:   'http://localhost:11434',
  OLLAMA_MODEL: 'llava',

  // ── GROQ MODEL OVERRIDE (leave '' to auto-detect latest live model) ─────────
  // Only set this if you want to pin a specific model.
  // Leave blank to always auto-discover the best available vision model.
  // Example: 'meta-llama/llama-4-scout-17b-16e-instruct'
  GROQ_MODEL_OVERRIDE: '',

  // ── CARD MATCHING SETTINGS ──────────────────────────────────────────────────
  // Similarity threshold for front/back card matching (0.0 - 1.0)
  // Higher = stricter matching. 0.55 works well for most cases.
  MATCH_THRESHOLD: 0.55,

  // ── UI SETTINGS ─────────────────────────────────────────────────────────────
  // Show the API settings panel open by default on first visit
  SHOW_SETTINGS_ON_START: false,

};