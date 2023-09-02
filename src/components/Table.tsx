

function Table() {

  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Image
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Price
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Description
            </th>
            <th className="px-6 py-3 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.name
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                    src="https://via.placeholder.com/400x400"
                    alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.slug
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                published
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <a href="#"
                className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                Delete
              </a>
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.name
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                    src="https://via.placeholder.com/400x400"
                    alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.slug
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <a href="#"
                className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                Delete
              </a>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.name
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                    src="https://via.placeholder.com/400x400"
                    alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                page.slug
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                draft
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <a href="#"
                className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>


  )
}

export default Table
