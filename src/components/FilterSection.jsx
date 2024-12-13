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
        <div className="space-y-1 text-center">
          <label className="text-sm font-medium text-gray-700">İsim</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="İsme göre ara..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="space-y-1 text-center">
          <label className="text-sm font-medium text-gray-700">Durum</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Durum Seçin</option>
            <option value="alive">Yaşıyor</option>
            <option value="dead">Ölü</option>
            <option value="unknown">Bilinmiyor</option>
          </select>
        </div>
        <div className="space-y-1 text-center">
          <label className="text-sm font-medium text-gray-700">Tür</label>
          <select
            name="species"
            value={filters.species}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Tür Seçin</option>
            <option value="human">İnsan</option>
            <option value="alien">Uzaylı</option>
            <option value="robot">Robot</option>
            <option value="humanoid">İnsansı</option>
            <option value="animal">Hayvan</option>
            <option value="mythological">Mitolojik Yaratık</option>
            <option value="cronenberg">Cronenberg</option>
            <option value="poopybutthole">Kaka Deliği</option>
            <option value="unknown">Bilinmiyor</option>
          </select>
        </div>
        <div className="space-y-1 text-center">
          <label className="text-sm font-medium text-gray-700">Cinsiyet</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Cinsiyet Seçin</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
            <option value="genderless">Cinsiyetsiz</option>
            <option value="unknown">Bilinmiyor</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onSearch}
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-center"
          style={{ backgroundColor: '#043c6e' }}
        >
          Filtrele
        </button>
      </div>
    </div>
  )
}

export default FilterSection