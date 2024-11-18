import { BookData } from "@/types";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = "https://onebite-books-server01.vercel.app/book/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchRandomBooks;
