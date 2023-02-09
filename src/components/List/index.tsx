// Components
import { Post } from "../Post";

// Styles
import * as S from "./styles";

// Zustand
import React, { useState } from "react";
import { usePostStore } from "@/store/posts";
import { Post as PostProps } from "@/models/Post";

import ReactPaginate from "react-paginate";

interface ListProps {
  posts: PostProps[];
}

// Hooks
export const usePagination = () => {
  const itemsPerPage = 3;
  const posts = usePostStore((state) => state.posts);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;

    setItemOffset(newOffset);
  };

  return {
    handlePageClick,
    currentItems,
    pageCount,
    posts,
  };
};

// Render components
function List({ posts }: ListProps) {
  //  const posts = usePostStore((state) => state.posts);

  return (
    <S.ListContainer>
      {posts.length ? <span>Feed</span> : <></>}
      <div className="listContent">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            message={post.message}
            photo={post.photo.length ? post.photo[0]["image_url"] : ""}
          />
        ))}
      </div>
    </S.ListContainer>
  );
}

export function PaginatedList() {
  const { posts, currentItems, handlePageClick, pageCount } = usePagination();

  return (
    <S.PaginatedListContainer>
      <List posts={currentItems} />
      {posts.length > 3 && (
        <ReactPaginate
          pageCount={pageCount}
          nextLabel="Próximo >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          previousLabel="< Anterior"
          renderOnZeroPageCount={() => null}
          className="paginated"
          nextClassName="next button"
          previousClassName="previous button"
          pageClassName="page"
          activeClassName="active"
        />
      )}
    </S.PaginatedListContainer>
  );
}
