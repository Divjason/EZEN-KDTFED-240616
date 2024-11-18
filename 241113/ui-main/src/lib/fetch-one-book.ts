import { BookData } from "@/types";

const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `https://onebite-books-server01.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default fetchOneBook;
