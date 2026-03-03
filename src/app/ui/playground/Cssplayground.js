/**
 * Original animation concept by Hyperplexed
 * Source: https://codepen.io/Hyperplexed/pen/zYXZoZg?ref=Hyperplexed
 * Modified and refactored into React components.
*/

"use client";

import Background from "./background";
import Modal from "./Modal";
import MagicCursor from "./MagicCursor";

export default function CssPlayground() {
  return (
    <div className="relative h-screen overflow-hidden bg-black cursor-none">
      <Background />
      <Modal />
      <MagicCursor />
    </div>
  );
}

