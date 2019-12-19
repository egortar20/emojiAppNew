import { Injectable } from '@angular/core';
import { EmojiModel, EmojiStatus } from '../models/emoji.model';
import { HttpClient } from '@angular/common/http';


const LOCAL_STORAGE_KEY = 'emojis';
const LOCAL_STORAGE = localStorage;

@Injectable({
  providedIn: 'root'
})
export class EmojiesService {

  private emojiesUrl = 'https://api.github.com/emojis';
  private storage;
  public term = '';
  

  public emojies: EmojiModel[] = [];

  constructor(private http: HttpClient) { 
    this.storage = JSON.parse(LOCAL_STORAGE.getItem(LOCAL_STORAGE_KEY) || '{}');
  }

  //Поиск эмоджи
  get searchEmojies() {
    return  this.emojies.filter(emoji => emoji.name.toLowerCase().includes(this.term.toLowerCase()));
  }

  //Загружаем эмоджи с серваера
  async getEmojies(): Promise<EmojiModel[]> {
    try {
      let data = await this.http.get(this.emojiesUrl).toPromise();
      this.emojies = this.loadFromLocalStorage(
        Object.keys(data).map(name => new EmojiModel({name, url: data[name]}))
      );
      console.log('loaded', this.emojies);
      return this.emojies;
    } catch ( error ) {
        this.handleError(error);
    }
  }


  //Загружаем сохраненные статусы
  loadFromLocalStorage(emojies: EmojiModel[]) {
    emojies.forEach( emoji => {
      if (!this.storage[emoji.name]) {
        return;
      }
      emoji.status = this.storage[emoji.name]
    });
    return emojies;
  }

  //сохраняем статусы
  saveToLocalStorage(emoji: EmojiModel){
    //удаляем запись если статус по умолчанию 
    if (emoji.status == EmojiStatus.Default) {
      delete this.storage[emoji.name]
    } else {
      this.storage[emoji.name] = emoji.status;
    }
    //сохраняем в LOCALSTORAGE
    LOCAL_STORAGE.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.storage))
  }

  handleError(error) {
    setTimeout(() => console.error(error));
  }

 
}
