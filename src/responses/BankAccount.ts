export class Weather {
    meta!: Meta;
    data?: (DataEntity)[] | null;
  }
  export class Meta {
    paging: Paging;
    records: number;
    constructor(response: any){
        this.paging = response.data.meta.paging;
        this.records = response.data.meta.records;
    }
  }
  export class Paging {
  }
  export class DataEntity {
    name: string;
    id: number;
    account_number?: null;
    type: string;
    constructor(response: any){
        this.name = response.data.data.name;
        this.id = response.data.data.id;
        this.account_number = response.data.data.account_number;
        this.type = response.data.data.type;
    }
  }
  export class DataList{
    DataE !: DataEntity[];
  }
  