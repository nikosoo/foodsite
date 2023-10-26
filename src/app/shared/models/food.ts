export class Food {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

  constructor(id: number, name: string, price: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
