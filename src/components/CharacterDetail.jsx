import React from 'react'
import { translate } from '../utils/translate'

function CharacterDetail({ character, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40" onClick={onClose}></div>
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50" onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 text-center">{character.name}</h2>
              <button 
                onClick={onClose}
                className="text-custom-blue hover:text-blue-700 bg-transparent absolute top-4 right-4 p-2 rounded-full transition duration-200 ease-in-out"
              >
                <span className="sr-only">Kapat</span>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 mb-6 flex justify-center">
              <img 
                src={character.image} 
                alt={character.name}
                className="object-cover rounded-lg"
              />
            </div>
            
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Durum</dt>
                <dd className="mt-1 text-sm text-gray-900">{translate(character.status)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Tür</dt>
                <dd className="mt-1 text-sm text-gray-900">{translate(character.species)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Cinsiyet</dt>
                <dd className="mt-1 text-sm text-gray-900">{translate(character.gender)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Köken</dt>
                <dd className="mt-1 text-sm text-gray-900">{translate(character.origin.name)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Son Konum</dt>
                <dd className="mt-1 text-sm text-gray-900">{translate(character.location.name)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail 