// Birth sniper entry: buy in the first 3 slots after a curve is created,
// but only while the launch is still uncrowded (at most 2 distinct buyers
// so far, creator's early buys at most 0.75 SOL) — those two filters are
// the edge. Exit fast: take profit +10%, stop loss -8%, hard exit after
// 30 slots, out at once if the dev sells. No adds, no pyramid.
// Run by the grader as `node /bot/main.ts` with this directory mounted at
// /bot; the SDK shim is vendored beside it (vendor/makefun-bot.ts is a
// byte-identical copy of the kit's sdk/ts/makefun-bot.ts).

import { runBot } from './vendor/makefun-bot.ts';
import { createBot, DEFAULT_PARAMS } from './strategy.ts';

const bot = createBot(DEFAULT_PARAMS);

await runBot({
  onBatch: (state, batch) => bot.onBatch(state, batch),
});
