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
  tag: string;
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
  { tag: "Wiedźmin", href: "/", text: "tag1" },
  { tag: "Fantasy dla młodzieży", href: "/", text: "tag2" },
  { tag: "Romans", href: "/", text: "tag3" },
  { tag: "Seryjni mordercy", href: "/", text: "tag4" },
  { tag: "Starożytność", href: "/", text: "tag5" },
  { tag: "Piłka nożna", href: "/", text: "tag" },
];
export const popularSearch: PopularSearch[] = [
  { title: "", author: "", href: "/", img: "" },
];
