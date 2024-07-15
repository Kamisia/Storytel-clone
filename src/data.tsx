export interface NavLinkData {
  text: string;
  href?: string;
}

export interface NavLinkData2 {
  text: string;
  href?: string;
}
export interface PopularTag {
  text: string;
  href?: string;
}
export interface PopularSearch {
  title: string;
  img: string;
  author: string;
  href?: string;
}

export const navLinkData: NavLinkData[] = [
  { text: "Audiobooki", href: "/" },
  { text: "E-booki", href: "/" },
  { text: "Serie wydawnicze", href: "/" },
  { text: "Kategorie", href: "/" },
];

export const navLinkData2: NavLinkData2[] = [{ text: "Zaloguj", href: "/" }];

export const popularTag: PopularTag[] = [
  { text: "Wiedźmin", href: "/" },
  { text: "Fantasy dla młodzieży", href: "/" },
  { text: "Romans", href: "/" },
  { text: "Seryjni mordercy", href: "/" },
  { text: "Starożytność", href: "/" },
  { text: "Piłka nożna", href: "/" },
];
export const popularSearch: PopularSearch[] = [
  { title: "", author: "", href: "/", img: "" },
];
