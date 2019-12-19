import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    return ({
      emojies: {
        '+1': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v8',
        '-1': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v8',
        '100': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v8',
        '1234': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v8',
        '1st_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v8',
        '2nd_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f948.png?v8',
        '3rd_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f949.png?v8',
        '8ball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b1.png?v8',
        'a': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f170.png?v8',
        'ab': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f18e.png?v8',
        'abc': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f524.png?v8',
        'abcd': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f521.png?v8',
        'accept': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png?v8',
        'aerial_tramway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png?v8',
        'afghanistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v8',
        'airplane': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2708.png?v8',
        'aland_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v8',
        'alarm_clock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f0.png?v8',
        'albania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f1.png?v8',
        'alembic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2697.png?v8',
        'algeria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ff.png?v8',
        'alien': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47d.png?v8',
        'ambulance': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f691.png?v8'
      }
    });
  }
}
