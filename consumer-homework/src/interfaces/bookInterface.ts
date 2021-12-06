export interface BookInterface {
    authors: Array<Author>;
    bookshelves?: Array<string>;
    copyright?: boolean;
    download_count: number;
    formats: Object;
    id: number;
    languages: Array<string>;
    media_type: string;
    subjects: Array<string>;
    title: string;
    translators: Array<string>;
}

interface Author {
    birth_year:  number;
    death_year?: number;
    name: string;
}