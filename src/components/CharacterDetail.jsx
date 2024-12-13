import React from 'react'

function CharacterDetail({ character, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{character.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 bg-transparent"
            >
              <span className="sr-only">Kapat</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img 
              src={character.image} 
              alt={character.name}
              className="object-cover rounded-lg"
            />
          </div>
          
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Durum</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.status}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Tür</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.species}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Cinsiyet</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.gender}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Köken</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.origin.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Son Konum</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.location.name}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail 