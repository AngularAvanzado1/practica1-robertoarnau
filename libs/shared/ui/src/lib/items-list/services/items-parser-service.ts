import { Injectable } from '@angular/core';
import { ItemListModel } from '../models/item-list-model';
import { KeysRefModel, ItemListConfigModel } from '../models/item-lis-config-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsParserService {
  constructor() {}

  public parserDataFromConfig(itemsconfig: ItemListConfigModel ): ItemListModel[]{
    const items = [];
    for(const item of itemsconfig.data){
      items.push( this.setKerefToItemListModel(item, itemsconfig.keysRefs) );
    }
    return items;
  }

  private setKerefToItemListModel(item: any,  keysRefs: KeysRefModel[]): ItemListModel{
    const itemListModel: ItemListModel = {name: '', description: '', id: 0};
    for(const itemKey of Object.keys(item)){
      for(const keysRef of keysRefs){
        if(itemKey === keysRef.originKey){
          itemListModel[keysRef.destinationKey] = item[ keysRef.originKey];
        }
      }
    }
    return itemListModel;
  }
}
