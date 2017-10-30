export class Project {
  id: number;
  type: string;
  name: string;
  info: string;
  image?: string;
  stack: string[];
  repo: string;
  video?: string;
  url?: string;
  detail: Detail;
}

class Detail {
  current: string;
  future: string;
}
