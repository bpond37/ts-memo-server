import { Sequelize, DataTypes } from 'sequelize'
import config from '../config';
import Post from './Post';

export function init(): Sequelize {
  const connectionUrl: string = config.db.url;
  const sequelize = new Sequelize(connectionUrl);

  Post.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      },
      title: {
        type: new DataTypes.STRING(20),
        allowNull: false,
      },
      body: {
        type: new DataTypes.STRING(100),
        allowNull: true,
      }
    }, {
      sequelize,
      tableName: 'posts',
      engine: 'InnoDB',
      charset: 'utf8',
    })
  
  return sequelize;
}
