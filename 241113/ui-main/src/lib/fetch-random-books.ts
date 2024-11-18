import { BookData } from "@/types";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = "http://localhost:12345/book/random";

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
