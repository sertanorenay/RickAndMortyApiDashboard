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

  const handleSearch = () => {
    const newActiveFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== '')
    );
    setActiveFilters(newActiveFilters);
    setCurrentPage(1);
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['characters', currentPage, activeFilters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage,
        ...Object.fromEntries(
          Object.entries(activeFilters).filter(([_, value]) => value !== '')
        )
      });
      
      console.log(`Request URL: https://rickandmortyapi.com/api/character?${params}`);

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?${params}`
      );
      return response.data
    }
  });

  return (
    <div className="min-h-screen py-8 bg-gray-50 select-none">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#043c6e]">Rick and Morty Karakterleri</h1>
        
        <FilterSection 
          filters={filters} 
          setFilters={setFilters}
          onSearch={handleSearch}
        />
        
        {/* Filtreleme sonucundaki durumlar: Yükleniyor, Sonuç Bulunamadı, Hata */}
        {isLoading && (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow">
            <p className="text-lg">Yükleniyor...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow">
            {error.response?.status === 404 ? (
              <p className="text-lg">Aradığınız sonuçlar bulunamadı.</p>
            ) : (
              <p className="text-lg">Hata oluştu: {error.message}</p>
            )}
          </div>
        )}

        {data?.results?.length === 0 && !isLoading && !error && (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow">
            <p className="text-lg">Aradığınız sonuçlar bulunamadı.</p>
            <p className="text-sm">Lütfen filtrelerinizi gözden geçirin ve yeniden deneyin.</p>
          </div>
        )}

        {/* Filtreleme sonucunda veri varsa tabloda listelenir. */}
        {data?.results?.length > 0 && (
          <div className="space-y-6">
            <CharacterTable 
              data={data?.results || []}
              onRowClick={setSelectedCharacter}
            />
            
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="bg-theme-blue disabled:bg-gray-400"
              >
                Önceki
              </button>
              <span className="text-gray-700 font-medium">Sayfa {currentPage}</span>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={!data?.info?.next}
                className="bg-theme-blue disabled:bg-gray-400"
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
