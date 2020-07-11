export interface ContributorInfo {
  name: string;
  description: string;
  avatar: string;
  webUrl?: string;
  donateUrl?: string;
}

export const contributors: ContributorInfo[] = [
  {
    name: 'Ente',
    description: 'I like ducks!',
    avatar: 'assets/contributors/ente.svg',
    webUrl: 'https://duckpond.ch',
    donateUrl: 'https://github.com/sponsors/Enteee',
  },
  {
    name: 'JR',
    description: 'Logo design',
    avatar: 'assets/contributors/jek-ramos.jpeg',
    webUrl: 'https://www.instagram.com/jekramosdesign/',
  },
];
