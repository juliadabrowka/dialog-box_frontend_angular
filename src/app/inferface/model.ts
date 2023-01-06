export interface  Token {
    number: string;
    author: string;
    get_image: string;
    serie: number;
    title: string
}

export interface Serie {
    title: string;
    get_image: string;
    description:  string;
    get_absolute_url: string;
    slug: string;
    tokens: Array<Token>;
    choices: string;
}