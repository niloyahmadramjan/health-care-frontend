


export interface TSidebarRoute {
  path: string;
  name: string | null | undefined;
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
  }[];
};
