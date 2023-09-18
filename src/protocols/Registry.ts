export type Registry = {
    id: number,
    name: string,
    phone: string,
    email: string
};

export type idlessRegistry = Omit <Registry, "id">