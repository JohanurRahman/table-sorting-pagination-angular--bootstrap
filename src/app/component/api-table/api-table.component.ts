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

  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
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
    this.id = row.id;
    this.albumId = row.albumId;
    this.title = row.title;
    this.url = row.url;
    this.thumbnailUrl = row.thumbnailUrl;
  }

}
