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
    Humanoid: "Humanoid",
    "Mythological Creature": "Mitolojik Yaratık",
  }

  return translations[key] || key
} 