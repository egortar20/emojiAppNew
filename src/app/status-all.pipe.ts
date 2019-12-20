import { PipeTransform, Pipe } from '@angular/core';
import { EmojiModel, EmojiStatus } from './models/emoji.model';


@Pipe({
    name: "statusall",
    pure: false
})
export class StatusAllPipe implements PipeTransform{
    transform(data: EmojiModel[]){
        return data.filter(emoji => emoji.status != EmojiStatus.Deleted)
    }
}