import { useState } from "react";
import { useRecoilValueLoadable, useResetRecoilState } from "recoil";
import { PostState } from "./recoil/selectors";

const Post = () => {
  const postState = useRecoilValueLoadable(PostState);
  const resetPostState = useResetRecoilState(PostState);

  const [formData, setFormData] = useState<{
    id?: number;
    title?: string;
    body?: string;
    userId?: number;
  }>({});

  if (postState.state !== "hasValue") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          resetPostState();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          gap: 30,
        }}
      >
        <input
          data-testid="idInput"
          type="number"
          value={formData.id}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, id: Number(e.target.value) }))
          }
        />
        <input
          data-testid="titleInput"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          data-testid="bodyInput"
          value={formData.body}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <input
          data-testid="userIdInput"
          type="number"
          value={formData.userId}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              userId: Number(e.target.value),
            }))
          }
        />
        <button data-testid="submitBtn">submit</button>
      </form>
      <ul>
        {postState.contents.map((elem, idx) => (
          <li key={idx}>
            <p>ID : {elem.id}</p>
            <p>TITLE : {elem.title}</p>
            <p>BODY : {elem.body}</p>
            <p>USER_ID : {elem.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
