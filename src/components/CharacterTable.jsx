import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { translate } from '../utils/translate'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('name', {
    header: 'KARAKTER ADI',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'DURUM',
    cell: info => translate(info.getValue()),
  }),
  columnHelper.accessor('species', {
    header: 'TÜR',
    cell: info => translate(info.getValue()),
  }),
  columnHelper.accessor('gender', {
    header: 'CİNSİYET',
    cell: info => translate(info.getValue()),
  }),
]

function CharacterTable({ data, onRowClick }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
      <table className="min-w-full divide-y divide-gray-200">
        <thead style={{
          backgroundColor: '#043c6e',
          position: 'relative'
        }}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} style={{backgroundColor: '#043c6e'}}>
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  style={{backgroundColor: '#043c6e'}}
                  className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id}
              onClick={() => onRowClick(row.original)}
              className="hover:bg-blue-50 transition-all duration-200 ease-in-out cursor-pointer group"
            >
              {row.getVisibleCells().map((cell, index) => (
                <td 
                  key={cell.id} 
                  className={`px-6 py-4 whitespace-nowrap text-base group-hover:text-theme-blue
                    ${index === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}
                    transition-colors duration-200`}                  
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>              
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CharacterTable 