import { SelectOption } from "../types";

export const noteOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "important", label: "Önemli" },
  { value: "personal", label: "Kişisel" },
  { value: "work", label: "İş" },
  { value: "ideas", label: "Fikirler" },
  { value: "shopping", label: "Alışveriş" },
  { value: "urgent", label: "Acil" },
  { value: "holiday", label: "Tatil" },
  { value: "health", label: "Sağlık" },
  { value: "finance", label: "Finans" },
];

export const colorMap: { [key: string]: string } = {
  important: "#FF5733", // Önemli
  personal: "#FFC300", // Kişisel
  work: "#33FF69", // İş
  ideas: "#337BFF", // Fikirler
  shopping: "#FF33F0", // Alışveriş
  urgent: "#FF3333", // Acil
  holiday: "#FF8C33", // Tatil
  health: "#33FFF0", // Sağlık
  finance: "#3378FF", // Finans
};

export const sortOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "z-a", label: "En Yeni" },
  { value: "a-z", label: "En Eski" },
];
