import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";

export interface IPost {
  id: string;
  createdAt: number;
  photo?: string;
  video?: string;
  post: string;
  userId: string;
  username: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 0 10px;
`;

const TimeLine = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "contents"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { createdAt, photo, video, post, userId, username } =
            doc.data();
          return {
            id: doc.id,
            createdAt,
            photo,
            video,
            post,
            userId,
            username,
          };
        });
        setPosts(posts);
      });
    };
    fetchPosts();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
