export default class Place {
  title: string
  description: string
  urlImage: string

  constructor(title: string, description: string, urlImage: string) {
    this.title = title
    this.description = description
    this.urlImage = urlImage
  }
}
