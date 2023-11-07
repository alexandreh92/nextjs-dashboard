"use client";

import { testAction } from "../lib/actions";

export default function MyButton() {
  return <button onClick={() => testAction()}>click me</button>;
}
