import { Model } from 'sequelize';

export default class Post extends Model {
  public id!: number;
  // public userId!: string;
  // public category!: number;
  public title!: string;
  public body!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

