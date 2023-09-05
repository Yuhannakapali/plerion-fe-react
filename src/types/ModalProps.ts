import { Product } from "./Products";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  actions: (data: Product) => void;
};
