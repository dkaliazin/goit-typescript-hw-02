export interface Image {
    alt_description: string,
    id: string,
    description: string,
    urls: {
        small?: string,
        regular?: string,
        full?: string;
    },
}
export interface ApiResponse {
    results: Image[],
    total_pages: number
}