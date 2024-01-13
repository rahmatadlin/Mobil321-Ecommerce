import { MyResponseType, ProductType } from "@/defs/TypeDefs";

// Bikin typenya bisa di mana aja, penentuan dotnya bisa dipake aja
// Bahkan bisa ditaro di setelah function
// Penempatan type pengaruh di mana kita nge dotnya

export const fetchProduct = async (NumStart?: number, NumFinish?: number) => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const responseJson: MyResponseType<ProductType[]> = await response.json();
  if (!response.ok) throw new Error("Error From Fetch Product");

  if (!NumStart && !NumFinish) {
    return responseJson.data;
  }

  return responseJson.data.slice(NumStart, NumFinish);
};

export const currencyFormatted = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

export const fetchProductBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store",
  });
  const responseJson: MyResponseType<ProductType> = await response.json();

  if (!response.ok) {
    throw new Error(`Failed To Fetch Product`);
  }

  return responseJson.data;
};
