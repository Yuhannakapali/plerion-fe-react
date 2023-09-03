import { Product } from "../types/Products"
import type { TableProps } from "../types/TableProps"

function Table(props: TableProps) {
  const { data, actions } = props
  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              #
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
          {data.length > 0 && data.map((product: Product, idx) => (
            <tr key={product.id} className={`${idx % 2 === 0 ? '' : 'bg-gray-100'}`}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {idx + 1}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {product.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full"
                      src={product.image_url}
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
                  {product.price}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p className="overflow-hidden truncate w-40">{product.description}</p>
                {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              </span> */}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <button
                  onClick={() => actions('warn', product)}
                  className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <p className="text-center p-2"> No data to show, Please add Product </p>
      )}
    </>
  )
}

export default Table
