export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
    type: string;
    dimension: string;
  };
  image: string;
  created: string;
}
