import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import CharacterTable from './components/CharacterTable'
import CharacterDetail from './components/CharacterDetail'
import FilterSection from './components/FilterSection'

function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  })
  const [activeFilters, setActiveFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  })
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, error } = useQuery({
    queryKey: ['characters', currentPage, activeFilters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage,
        ...Object.fromEntries(
          Object.entries(activeFilters).filter(([_, value]) => value !== '')
        )
      })
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?${params}`
      )
      return response.data
    }
  })

  const handleSearch = () => {
    setActiveFilters(filters)
    setCurrentPage(1)
  }

  if (isLoading) return <div>Yükleniyor...</div>
  if (error) return <div>Hata oluştu: {error.message}</div>

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Rick and Morty Karakterleri</h1>
        
        <FilterSection 
          filters={filters} 
          setFilters={setFilters}
          onSearch={handleSearch}
        />
        
        {data?.results?.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow">
            Filtrelere uygun karakter bulunamadı.
          </div>
        ) : (
          <div className="space-y-6">
            <CharacterTable 
              data={data?.results || []}
              onRowClick={setSelectedCharacter}
            />
            
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
              >
                Önceki
              </button>
              <span className="text-gray-700 font-medium">Sayfa {currentPage}</span>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={!data?.info?.next}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
              >
                Sonraki
              </button>
            </div>
          </div>
        )}

        {selectedCharacter && (
          <CharacterDetail 
            character={selectedCharacter} 
            onClose={() => setSelectedCharacter(null)} 
          />
        )}
      </div>
    </div>
  )
}

export default Home
