import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TablesComponent implements OnInit {

  countries = ['Costa Rica', 'Panama', 'Italia', 'Hoduras', 'Peru'];
  listsCompany_Country = [];

  public json:any;

  constructor(private service: ServiceService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() { 
    this.get_companies();
  }

  getDatasCountry(country) {
    // Consultar base por pais
    console.log(country);
  }
    async get_companies() {
      var json = '{ "namefuel" : "Regular" }';

      this.http
        .post<any>('http://localhost:3000/all', json, this.httpOptions)
        .subscribe(data => {

          console.log(data);

          if (data.message) {
            console.log("Compañias no obtenidas");

          } else if (data.user) {
            this.json = data;
          }
          else {
            console.log("Compañia no encontrada");
          }
        }, error => {
          alert('error');
        });
    }

  }
