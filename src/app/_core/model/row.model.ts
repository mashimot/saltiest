import { Column } from './column.model';

export class Row {
  id?: number;
  grid?: string;
  columns?: Array<Column>;
}
