import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export const dynamic = "force-dynamic";

// 특정페이지의 유형을 강제로 static, dynamic 페이지로 설정하도록 하는 옵션들
// 1. auto : 페이지 컴포넌트의 기본값을 보장 => 강제
// 2. force-dynamic : 페이지를 강제적으로 Dynamic 페이지로 설정
// 3. force-static
// 4. error

const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = async () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
};

export default Home;
