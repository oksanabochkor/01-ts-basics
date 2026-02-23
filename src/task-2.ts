// 1. Створюємо інтерфейс
interface Product {
  readonly id: number;     // тільки для читання
  title: string;
  description?: string;    // необов'язкове поле
}

// 2. Типізуємо об'єкт
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
