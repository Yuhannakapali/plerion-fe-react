import { ProductPayload } from "../types/Products";
import validator from "validator";
import { errors } from "../types/Products";

export const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result || "");
    reader.onerror = reject;
  });

export const validateForm = (data: ProductPayload) => {
  let status: boolean = true;
  const errors = {} as errors;
  if (validator.isEmpty(data.name)) {
    status = false;
    errors.name = {
      message: "name is required field, it can't be empty",
    };
  }
  if (validator.isEmpty(data.description)) {
    status = false;
    errors.description = {
      message: "description is required field, it can't be empty",
    };
  }
  if (!validator.isNumeric(JSON.stringify(data.price)) || data.price <= 0) {
    status = false;
    errors.price = {
      message: "price is required field, it need to be greater then 0",
    };
  }
  if (
    validator.isEmpty(data.image_url) ||
    validator.isBase64(data.image_url) ||
    !data.meta ||
    !data.meta.filename ||
    !data.meta.type
  ) {
    status = false;
    errors.file = {
      message: "Image is required field, please select a image",
    };
  }

  return { status, errors };
};
