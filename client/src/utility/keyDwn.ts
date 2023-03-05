import { SyntheticEvent } from "react";

export interface KeyDown<T = Element> extends SyntheticEvent<T, KeyboardEvent> {
  key: string;
}
