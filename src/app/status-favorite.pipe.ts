import { PipeTransform, Pipe } from '@angular/core';
import { EmojiModel, EmojiStatus } from './models/emoji.model';


@Pipe({
    name: "statusfav",
    pure: false
})
export class StatusFavoritePipe implements PipeTransform{
    transform(data: EmojiModel[]){
        return data.filter(emoji => emoji.status == EmojiStatus.Favorite)
    }
}