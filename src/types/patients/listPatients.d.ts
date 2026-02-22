export interface patients {
    id: number,
    name: string,
    species: string,
    gender: string,
    race: string,
    age: number,
    weight: number,
    owner: string,
    lastVisit: date,
    status: string,
};

export interface selectPatient {
    id: number,
    name: string,
    species: string,
    gender: string,
    race: string,
    age: number,
    weight: number,
    owner: string,
};