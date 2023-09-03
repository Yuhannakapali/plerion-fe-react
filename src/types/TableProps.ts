import { Product } from "./Products";
export type actions = "warn" | "edit" | "open";

export type TableProps = {
  data: Product[];
  actions: (action: actions, data: Product) => void;
};
