import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  data:any[]=[{"id":1,"email":"asdf@gmail.com","pass":"asdfg"},
  {"id":2,"email":"otro@hotmail.com","pass":"asdfg"},
  {"id":3,"email":"paila@gmail.com","pass":"asdfg"}]

  private _header =new HttpHeaders({
    'content-Type':'application/json'
  })

  constructor(public httpClient:HttpClient) { }

  public logServe():Observable<any>{
    return this.httpClient.get<any>("https://mocki.io/v1/42d9623a-417d-42ff-bc0b-0071a341a537",{headers:this._header})
  }

  public response(){
    return this.data
  }


}
