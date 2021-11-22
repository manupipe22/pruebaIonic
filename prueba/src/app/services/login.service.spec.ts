import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  
  beforeEach(() => {
    ​TestBed​.​configureTestingModule​(​{ 
      ​      ​imports​: ​[​ ​HttpClientTestingModule​ ​]​, 
      ​      ​declarations​: ​[​]​, 
      ​      ​providers​: ​[LoginService] 
      ​    ​}​);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logServe', () => {
    let data=[{"id":1,"email":"asdf@gmail.com","pass":"asdfg"},
    {"id":2,"email":"otro@hotmail.com","pass":"asdfg"},
    {"id":3,"email":"paila@gmail.com","pass":"asdfg"}];
    
    service.logServe().subscribe(val=>{
      expect(val).toEqual(data);
    });
  });

  it('response', () => {
    let data:any=[{"id":1,"email":"asdf@gmail.com","pass":"asdfg"},
    {"id":2,"email":"otro@hotmail.com","pass":"asdfg"},
    {"id":3,"email":"paila@gmail.com","pass":"asdfg"}];
    expect(service.response()).toEqual(data);
  });
});
