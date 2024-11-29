import React from "react";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import { ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

// export const dynamicParams = false;

// Static Parameter를 생성하는 함수!!!

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const ReviewList = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed: ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();
  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={style.container}>
      <Booktail bookId={(await params).id} />
      <ReviewEditor bookId={(await params).id} />
      <ReviewList bookId={(await params).id} />
    </div>
  );
};

export default Page;
