export type ObjectsItem = {
    id: string,
    name: string,
    adress: string,
    coord: number[],
    category: string,
    stars: number,
    likes: number,
    feed: number,
    gone: number,
    description: string,
    color: string,
    img: string,
}

export type Objects = Array<ObjectsItem>

export type StateType = {
}

export type ApiType = {    
}

export type UseShowObjectsContent = () => [
    state: StateType,
    api: ApiType
]