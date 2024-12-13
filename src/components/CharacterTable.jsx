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
    header: 'İsim',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Durum',
    cell: info => translate(info.getValue()),
  }),
  columnHelper.accessor('species', {
    header: 'Tür',
    cell: info => translate(info.getValue()),
  }),
  columnHelper.accessor('gender', {
    header: 'Cinsiyet',
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
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border border-gray-200 p-2 bg-gray-50">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id}
              onClick={() => onRowClick(row.original)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border border-gray-200 p-2">
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