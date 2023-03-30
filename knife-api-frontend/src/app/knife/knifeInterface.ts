export interface KnifeInterface{
    id: number;
    name: string;
    category: Category;
    photoUrls: string[];
    tags: Tags[];
    statusEnum: StatusEnum;
}

export enum StatusEnum{
    AVAILABLE="available",
    PENDING="pending",
    OUT_OF_STOCK="available"
}

export interface Category{
    id: number;
    name: string;
}

export interface Tags{
  id: number;
  name: string;
}
