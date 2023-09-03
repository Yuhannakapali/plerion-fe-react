import Table from "./components/Table"
import Modal from "./components/Modal"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import { Product } from "./types/Products";
import { actions } from "./types/TableProps";
import ConformationModal from "./components/conformation/ConformationModal";


function App() {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product>({} as Product);
  const [conformationModalOpen, setConformationModalOpen] = useState<boolean>(false)
  useEffect(() => {
    setProducts([
      {
        id: "13123123213312",
        name: "Product1",
        price: 10.2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image_url: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
      },
      {
        id: "131231",
        name: "Product1",
        price: 10.2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image_url: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
      },
    ])
  }, [])

  const addProduct = (item: Product) => {
    setProducts([...products, item])
    toast.success('Product has been add sucessfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const toggleConformationModal = () => {
    setConformationModalOpen(!conformationModalOpen);
  }

  const deleteProduct = () => {
    const newProducts = products.filter(el => el.id !== selected.id);
    setProducts(newProducts)
    toggleConformationModal();
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
                {/* <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-searcg" type="text" placeholder="Search" /> */}
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
      <Modal isOpen={modalOpen} toggle={toggleModal} addProduct={addProduct} />
      <ConformationModal isOpen={conformationModalOpen} toggle={toggleConformationModal} action={deleteProduct} />
    </>
  )
}

export default App
