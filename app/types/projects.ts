interface DateStatus {
  dateRegistry: string;
  status: string;
}

export interface Project extends DateStatus {
  id: number;
  name: string;
  description: string;
  favourites: Favourite[];
}

export interface Favourite extends DateStatus {
  id: number;
  idUser: number;
  idProject: Number;
}
