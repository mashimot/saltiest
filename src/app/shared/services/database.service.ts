import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }


  getDBName() {
    return Object.keys(this.get()).map(
      data => { return data.toLowerCase(); }
    );
  }

  getType() {
    return Object.keys(this.get()['ORACLE']).map(
      data => { return data.toLowerCase(); }
    );
  }

  //key = data_type. ex: type CHAR
  //value = input type of html. ex. <input type="text" />
  /*| key         | type
    | CHAR        | <input type="text" />
    | NUMBER      | <input type="number" />
    | TIMESTAMP   | <input type="text" class="datepicker"/> //from datepicker plugin
    | VARCHAR2    | <textarea></textarea>
    */
  get() {
      return {
            ORACLE: {
                CHAR: 'text',
                NCHAR: 'text',
                VARCHAR2: 'textarea',
                VARCHAR: 'textarea',
                NVARCHAR2: 'textarea',
                INTEGER: 'text',
                /*CLOB : true,
                NCLOB : true,*/
                LONG: 'text',
                NUMBER: 'number',
                DATE: 'date',
                INTERVAL: 'text',
                TIMESTAMP: 'date'
            }
      };
  }
}
