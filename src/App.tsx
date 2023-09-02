import Table from "./components/Table"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setModalOpen(true);
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
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
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-searcg" type="text" placeholder="Search" />
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
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} toggle={toggleModal} />
    </>



  )
}

export default App
