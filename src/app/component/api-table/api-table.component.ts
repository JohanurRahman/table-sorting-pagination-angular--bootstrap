import { Component, OnInit } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service';
import { IApiTable } from '../../_model/i-api-table';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css'],
  providers: [ApiTableService]
})
export class ApiTableComponent implements OnInit {

  dataSource: IApiTable[];

  selectedRowIndex: number;

  constructor(private _apiResponse: ApiTableService) { }

  ngOnInit() {
    
    this._apiResponse.fetchData().subscribe
      ((response) => {
        this.dataSource = response;
      })

  }

  // Pagination
  page: number = 1;

  // Sorting
  key: string = 'id';
  sorted: boolean = false;

  sort(key: string) {
    this.key = key;
    this.sorted = !this.sorted;
  }


  // Clicked cell highlight
  onClick(row: any) {
    this.selectedRowIndex = row.id;
  }

}
