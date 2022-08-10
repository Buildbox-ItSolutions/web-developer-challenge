import { IPostAdd, IPostEntity } from "../entities/post";

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

  async getAll(): Promise<IPostEntity[]> {
    return JSON.parse(localStorage.getItem(this._repositoryName) || "[]");
  }

  get(id: number): Promise<IPostEntity> {
    throw new Error("Method not implemented.");
  }

  async add(entity: IPostAdd): Promise<IPostEntity> {
    const items = JSON.parse(
      localStorage.getItem(this._repositoryName) || "[]"
    );

    const now = new Date().toISOString();
    const post: IPostEntity = {
      ...entity,
      id: items.length + 1,
      createdAt: now,
      updatedAt: now,
    };

    items.push(post);
    localStorage.setItem(this._repositoryName, JSON.stringify(items));

    return post;
  }

  update(entity: IPostEntity): Promise<IPostEntity> {
    throw new Error("Method not implemented.");
  }

  async destroy(id: number): Promise<void> {
    const items = JSON.parse(
      localStorage.getItem(this._repositoryName) || "[]"
    );
    const filtered = items.filter((item: IPostEntity) => item.id !== id);
    localStorage.setItem(this._repositoryName, JSON.stringify(filtered));
  }
}
