export const translate = (key) => {
  const translations = {
    Alive: 'Hayatta',
    Dead: 'Ölü',
    unknown: 'Bilinmiyor',
    Genderless: 'Cinsiyetsiz',
    Male: 'Erkek',
    Female: 'Kadın',
    Alien: "Uzaylı",
    Human: "İnsan",
    Humanoid: "İnsansı",
    Disease: "Hastalık",
    Poopybutthole: "Kaka Deliği",
    Animal: "Hayvan",
    "Mythological Creature": "Mitolojik Yaratık",
  }
  {/* İçerikleri Türkçeleştirir */}

  return translations[key] || key
} 