/**
 * Original animation concept by Hyperplexed
 * Source: https://codepen.io/Hyperplexed/pen/zYXZoZg?ref=Hyperplexed
 * Modified and refactored into React components.
*/

"use client";

import { useRef } from "react";

import Background from "./background";
import Modal from "./Modal";
import MagicCursor from "./MagicCursor";

export default function CssPlayground() {
   const modalRef = useRef(null);

  return (
    <div id="cssplayground" className="relative h-screen overflow-hidden bg-black cursor-none">
      <Background />
      <Modal ref={modalRef} />

      <MagicCursor modalRef={modalRef} />
    </div>
  );
}

