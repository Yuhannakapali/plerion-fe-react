export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

export interface ProductPayload extends Product {
  meta?: {
    filename: string;
    type: string;
  };
}

export type errorsMessage = {
  message: string;
};
export type errors = {
  id?: errorsMessage;
  name?: errorsMessage;
  description?: errorsMessage;
  price?: errorsMessage;
  file?: errorsMessage;
};
