export interface ICharacter {
    _id: number;
    films:	string[];
    shortFilms:	string[];
    tvShows:	string[];
    videoGames:	string[];
    parkAttractions: string[];
    allies: string[];
    enemies: string[];
    sourceUrl: string
    name: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    url: string;
alignment:	string;
}

export interface IOneCharacter {
    _id: number,
    films: string[];
    tvShows: string[];
    shortFilms: string[];
}