import Table from "./components/Table"
import Modal from "./components/Modal"
import { useState } from "react"
import { Product } from "./types/Products";
import { actions } from "./types/TableProps";
import ConformationModal from "./components/conformation/ConformationModal";
import { dummyProduct } from './defaults'
import { sucessNotify } from "./utils/notification";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(dummyProduct);
  const [selected, setSelected] = useState<Product>({} as Product);
  const [conformationModalOpen, setConformationModalOpen] = useState<boolean>(false)

  const addProduct = (item: Product) => {
    setProducts([...products, item]);
    sucessNotify("Product has been added sucessfully");
    setModalOpen(false);
  }

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const closeConformationModal = () => setConformationModalOpen(!conformationModalOpen);


  const deleteProduct = () => {
    const newProducts = products.filter(el => el.id !== selected.id);
    setProducts(newProducts)
    sucessNotify("Product has been removed.");
    closeConformationModal();
  }

  const handleTableActions = (action: actions, data: Product) => {
    switch (action) {
      case "warn":
        setSelected(data);
        setConformationModalOpen(true);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="mb-4 mt-4">
              <h1 className="text-3xl font-bolder leading-tight text-gray-900">Products</h1>
            </div>
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
              <div className="flex items-center py-2">
              </div>
              <div className="flex items-center py-2">
                <button
                  onClick={openModal}
                  className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                  New Product
                </button>
              </div>
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <Table data={products} actions={handleTableActions} />
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal isOpen={modalOpen} actions={addProduct} onClose={closeModal} />
      <ConformationModal isOpen={conformationModalOpen} onClose={closeConformationModal} action={deleteProduct} />
    </>
  )
}

export default App
