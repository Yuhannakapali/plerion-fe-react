import Table from "./components/Table"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"
import { Product, ProductPayload } from "./types/Products";
import { actions } from "./types/TableProps";
import ConfirmationModal from "./components/conformation/ConfirmationModal";
import { sucessNotify, warnNotify } from "./utils/notification";
import Axios from "./axios";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product>({} as Product);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState<boolean>(false)

  const getProducts = async () => {
    const response = await Axios.get("/products");
    const { data: { Items } } = response;
    setProducts(Items)
  };

  useEffect(() => {
    getProducts()
  }, [])

  const addProduct = (item: ProductPayload): Promise<boolean> => {
    const result = new Promise<boolean>((resolve, reject) => {

      Axios.post("/products", item).then((res) => {
        console.log("🚀 ~ file: App.tsx:43 ~ addProduct ~ respone:", res)
        sucessNotify("Product has been added sucessfully");
        setModalOpen(false);
        getProducts();
        resolve(true)
      }).catch(err => {
        console.log(err);
        warnNotify("Unable to add Product")
        reject(false)
      });
    })
    return result
  }

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closeConformationModal = () => setConfirmationModalOpen(!confirmationModalOpen);

  const deleteProduct = async () => {
    // const newProducts = products.filter(el => el.id !== selected.id);
    // setProducts(newProducts)
    await Axios.delete(`/products?id=${selected.id}`)
    sucessNotify("Product has been removed.");
    closeConformationModal();
    getProducts()
  }

  const handleTableActions = (action: actions, data: Product) => {
    switch (action) {
      case "warn":
        setSelected(data);
        setConfirmationModalOpen(true);
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
      <ConfirmationModal isOpen={confirmationModalOpen} onClose={closeConformationModal} action={deleteProduct} />
    </>
  )
}

export default App
