import {Model} from './model';

export class EmojiModel extends Model<EmojiModel> {
    name: string;
    url: string;
  
    status: EmojiStatus = EmojiStatus.Default;
  }
  
  export enum EmojiStatus {
    Deleted = 1,
    Default = 2,
    Favorite = 3
  }