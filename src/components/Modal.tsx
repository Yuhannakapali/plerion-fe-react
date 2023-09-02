import { FormEvent, useState } from "react";
import { ModalProps } from "../types/ModalProps";
import { Product } from "../types/Products";

import { ChangeEvent } from 'react';

function Modal(props: ModalProps) {
  const { isOpen, toggle } = props;
  const [form, setForm] = useState<Product>({
    id: '',
    name: '',
    description: '',
    price: 0,
    image_url: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
    const { name, value } = e.target;
    if (name === 'price') {
      setForm({ ...form, 'price': parseFloat(value) })
      return
    }
    setForm({
      ...form, [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
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
              <input className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" type="number" min={0} value={form.price} name="price" onChange={handleChange} />
              <label className="font-medium text-gray-800">Image</label>
              <input type="file" className="w-full outline-none rounded  p-2 mt-2 mb-3" name="image_url" onChange={handleChange} accept="image/*" />
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button type="button" onClick={toggle} className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" ><i className="fas fa-times"></i> Cancel</button>
              <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Create</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Modal