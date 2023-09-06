import { FormEvent, useState, ChangeEvent, useRef } from "react";
import { ModalProps } from "../types/ModalProps";
import { ProductPayload } from "../types/Products";
import { defaultFormValues } from "../defaults";
import { toBase64 } from "../utils";

function Modal({ isOpen, onClose, actions }: ModalProps) {

  const [form, setForm] = useState<ProductPayload>(defaultFormValues);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let meta = undefined;
    let sanitizedValue: string | number = value;
    if (name === 'price') {
      sanitizedValue = parseFloat(value)
    }
    if (name === 'image_url') {
      const input = e.target as HTMLInputElement;
      if (!input.files?.length) {
        return;
      }
      const file = input.files[0];
      sanitizedValue = await toBase64(file) as string;
      meta = { filename: file.name, type: file.type }
    }
    setForm({
      ...form, [name]: sanitizedValue, meta: meta ?? form.meta
    });
  }

  const clearForm = () => {
    setForm(defaultFormValues)
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!selectedImage) return warnNotify("you haven't selected any Image file yet");
    // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    form.id = self.crypto.randomUUID();
    const success = await actions(form);
    if (success) clearForm()

  }

  return (
    <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${isOpen ? '' : 'hidden'}`} id="modal" >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label className="font-medium text-gray-800">Name</label>
              <input type="text" value={form.name} className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" name="name" onChange={handleChange} />
              <label className="font-medium text-gray-800">Description</label>
              <textarea className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" value={form.description} name="description" onChange={handleChange} />
              <label className="font-medium text-gray-800">Price</label>
              <input className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" type="number" min={0} step={0.1} value={form.price} name="price" onChange={handleChange} />
              <label className="font-medium text-gray-800">Image</label>
              <input type="file" ref={fileInputRef} className="w-full outline-none rounded  p-2 mt-2 mb-3" name="image_url" onChange={handleChange} accept="image/*" />
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" ><i className="fas fa-times"></i> Cancel</button>
              <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Create</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Modal