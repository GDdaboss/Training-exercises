export default interface IArticle {
    author: string,
    title: string,
    abstract: string,
    body: string,
    imageUrl: {
        url: string,
        createdAt: Date
    } 
}
