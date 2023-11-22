import { CommentsProps, PostProps, UsersProps } from "../../models/CardProps";


export const getUsers = async (): Promise<UsersProps[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data.map((props: UsersProps) => ({
      id: props.id,
      name: props.name,
    }));
  };
  
  export const getPosts = async (): Promise<PostProps[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.map((props: PostProps) => ({
      userId: props.userId,
      id: props.id,
      title: props.title,
      body: props.body,
    }));
  };

  export const getComments = async (): Promise<CommentsProps[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    return data.map((props: CommentsProps) => ({
      postId: props.postId,
      id: props.id,
      name: props.name,
      body: props.body,
    }));
  };


 