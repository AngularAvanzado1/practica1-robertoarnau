
export interface ItemListConfigModel {
  keysRefs: KeysRefModel[];
  data: Array <any>;
}

export interface KeysRefModel{
  destinationKey: string;
  originKey: string;
}

