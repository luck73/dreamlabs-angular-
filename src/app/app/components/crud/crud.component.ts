import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  text: any;
  erro: any;

  queryField = new FormControl();

  onSearch() {
    console.log(this.queryField.value);
  }

  constructor(private crudService: CrudService) {
    this.getter();
  }
  totalLength:any;
  page:number=1;
  showpost:any = [];

  ngOnInit():void {
    this.crudService.getPost().subscribe((result) =>{
      this.showpost = result;
      this.totalLength = result.length;
      console.log(this.showpost)
    })
  }
  getter() {
    this.crudService.getPost().subscribe((data: Text) => {
      this.text = data;
      console.log('As informacoes foram recebidas', data);
      console.log('A aplicacao foi preenchida', this.text);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }
}
