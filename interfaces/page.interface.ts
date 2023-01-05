export enum PageCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface PageAdvantage {
    title: string;
    description: string;
    _id: string;
}

export interface PageHh {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

export interface PageBlog {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    views: number;
    _id: string;
}

export interface PageSravnikus {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface PageLearningclub {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface PageModel {
    _id: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: PageCategory;
    advantages: PageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    hh: PageHh;
    qas: any[];
    addresses: any[];
    categoryOn: string;
    blog: PageBlog;
    sravnikus: PageSravnikus;
    learningclub: PageLearningclub;
}