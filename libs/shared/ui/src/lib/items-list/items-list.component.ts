import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ItemListConfigModel } from './models/item-lis-config-model';
import { ItemListModel } from './models/item-list-model';
import { ItemsParserService } from './services/items-parser-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'regiones-ui-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {

  public itemList: ItemListModel[];
  public itemList$: Observable<any>;

  @Input()
  set itemListConfig(itemsconfig$: Observable<ItemListConfigModel>){
    if(itemsconfig$){
      itemsconfig$.pipe(
        map((itemsconfig:ItemListConfigModel) => this.itemsParserService.parserDataFromConfig(itemsconfig))
      ).subscribe((items:ItemListModel[])=>{
        this.itemList = items;
        this.itemList = [...this.itemList];
        this.cdr.detectChanges();
      });
    }
  }

  @Output()
  butonAEmmitter = new EventEmitter<number>();


  constructor( private itemsParserService:ItemsParserService, private cdr: ChangeDetectorRef ) { }

  ngOnInit() {}

  public butonAEmit(id:number): void{
    this.butonAEmmitter.emit(id);
  }

}
