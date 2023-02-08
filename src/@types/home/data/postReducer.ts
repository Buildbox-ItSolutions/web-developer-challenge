export type postTypeExport = {
    assigned: string;
    message: string;
    image: string;
}

export interface postType extends postTypeExport {
    id: string;
}

export type actionType = {
    type: string;
    payload: {
        assigned?: string;
        message?: string;
        image?: string;
        id?: string;
    }
}