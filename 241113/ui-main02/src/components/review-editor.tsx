"use client";

import React, { useActionState, useEffect } from "react";
import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review-actions";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰내용"
          required
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "..." : "작성하기"}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
