import { IPostEntity } from "../entities/post";

interface IRepository<T> {
  getAll(): Promise<T[]>;
  get(id: number): Promise<T>;
  add(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  destroy(id: number): Promise<void>;
}

export class PostRepository implements IRepository<IPostEntity> {
  private _repositoryName: string = "PostRepository";

  private static _instance: PostRepository;

  public static getInstance(): PostRepository {
    if (!this._instance) {
      this._instance = new PostRepository();
    }

    return this._instance;
  }

  getAll(): Promise<IPostEntity[]> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<IPostEntity> {
    throw new Error("Method not implemented.");
  }

  async add(entity: IPostEntity): Promise<IPostEntity> {
    const items = JSON.parse(
      localStorage.getItem(this._repositoryName) || "[]"
    );

    const post: IPostEntity = {
      ...entity,
    };

    post.id = items.length + 1;
    post.createdAt = new Date().toISOString();
    post.updatedAt = new Date().toISOString();

    items.push(post);
    localStorage.setItem(this._repositoryName, JSON.stringify(items));

    return post;
  }

  update(entity: IPostEntity): Promise<IPostEntity> {
    throw new Error("Method not implemented.");
  }
  destroy(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
