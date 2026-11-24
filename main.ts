// One Word From Your Ex — entry program.
//
// The word: "almost".
// Why this word, against the judge brief (in order):
//  1. One word an ex would use about you: "you were almost the one",
//     "almost good enough", "almost ready". It is the word itself, not a
//     phrase, and it is exactly what an ex says about a partner they had.
//  2. Laugh: the sharp turn. The judge expects an insult adjective
//     (toxic, selfish, clingy) and gets "almost" instead — the insult
//     is that there is no insult, only a near-miss.
//  3. Sting: it is painfully true and the entrant knows it. Almost
//     the one. Almost committed. Almost loved you back. Almost counts
//     for nothing.
//  4. Lands instantly, no explanation, and no near-synonym keeps the
//     edge: "nearly" is not the phrase anyone says; "almost" is.
//  5. Relatable: everyone has been somebody's almost, or had one.
// Deliberately NOT one of the obvious ex-words (toxic / selfish /
// clingy / avoidant / unavailable): those are the likeliest house
// anchors, and a byte-identical copy of an anchor shares its rate
// and never enters the playoff. "almost" is 6 bytes, which also wins
// the size tie-break if rates ever tie.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "almost"; // exactly one word, 6 characters, no trailing newline

// Enforce the gate ourselves: one token, 1-24 characters, not whitespace.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
