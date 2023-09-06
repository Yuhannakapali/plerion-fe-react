import { ProductPayload } from "./Products";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  actions: (data: ProductPayload) => Promise<boolean>;
};
