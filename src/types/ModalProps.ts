import { Product } from "./Products";

export type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  addProduct: (data: Product) => void;
};
