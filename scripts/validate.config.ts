/** Rules for scripts/validate.ts. Edit these lists, not the validator. */

export const ALLOWED_TAGS = ['free', 'oss', 'local', 'paid', 'freemium'] as const;

export const CLUSTERS = ['think', 'create', 'work', 'build', 'life'] as const;

/** best_for longer than this many words is flagged. Tag markers like `OSS` don't count. */
export const MAX_BEST_FOR_WORDS = 15;

/** true = over-long best_for fails CI. Set to false to make it a warning. */
export const MAX_WORDS_IS_ERROR = true;

/**
 * Ad-copy phrases banned in best_for. Matching is case-insensitive.
 * Plain words match whole words only ("best" matches "Best", not "bestow").
 * Add new phrases at the end.
 */
export const MARKETING_PHRASES = [
  'best',
  'revolutionary',
  '#1',
  'ultimate',
  'game-changing',
  'game changer',
  'world-class',
  'cutting-edge',
  'seamless',
  'effortless',
  '!',
];

/** URL query params removed before the duplicate check. */
export const TRACKING_PARAM_PREFIXES = ['utm_', 'fbclid', 'gclid'];

/**
 * Rows that broke a style rule before validation existed. Each one is
 * reported as a warning instead of failing CI. Remove an entry once its
 * row is rewritten, and don't add new ones.
 *   key: tool name (or "Tool name > display_name" for an also_listed row)
 */
export const LEGACY_STYLE_EXCEPTIONS: Record<string, string> = {};
