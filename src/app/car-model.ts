export interface Car {
    name: string,
    date: string,
    model: string,
    isSold: boolean,
    id?: number
}

export interface Cars {
    cars: Car[]
}