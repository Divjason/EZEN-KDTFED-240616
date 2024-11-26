import React from "react";
import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <BookItemSkeleton key={`book-item-skeleton-${idx}`} />);
};

export default BookListSkeleton;
