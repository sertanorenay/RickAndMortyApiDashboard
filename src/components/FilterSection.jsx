import React from 'react'

function FilterSection({ filters, setFilters, onSearch }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">İsim</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="İsme göre ara..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Durum</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Durum Seçin</option>
            <option value="alive">Yaşıyor</option>
            <option value="dead">Ölü</option>
            <option value="unknown">Bilinmiyor</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Tür</label>
          <input
            type="text"
            name="species"
            value={filters.species}
            onChange={handleFilterChange}
            placeholder="Türe göre ara..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Cinsiyet</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
          >
            <option value="">Cinsiyet Seçin</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
            <option value="genderless">Cinsiyetsiz</option>
            <option value="unknown">Bilinmiyor</option>
          </select>
        </div>
      </div>
      <button
        onClick={onSearch}
        className="w-full md:w-auto bg-green-600 hover:bg-green-700"
      >
        Sorgula
      </button>
    </div>
  )
}

export default FilterSection 