// 1. Масив рядків
const usernames: string[] = ["alice", "bob", "charlie"];

// 2. Масив чисел
const ratings: number[] = [4.5, 3.8, 5];

// 3. Інтерфейс для продукту
interface Product {
  id: number;
  title: string;
}

// 4. Масив об’єктів
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
