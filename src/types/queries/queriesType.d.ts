export interface queries {
    id: number,
    id_pet: number,
    vet: string,
    temperature: number,
    fCardiac: number,
    reason: string,
    diagnosis: string,
    treatment: string,
    status: string,
    note: string,
    time: string,
    date: date
};

export interface selectQuery {
    id: number,
    id_pet: number,
    temperature: number,
    weight: number,
    fCardiac: number,
    diagnosis: string,
    treatment: string,
    note: string,
};