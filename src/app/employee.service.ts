import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  private employeesUrl = 'api/employees'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** Log a EmployeeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }

  //Currently just gets mockdata, so no HTTP call is done
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap((_) => this.log('fetched employees')),
      catchError(this.handleError<Employee[]>('getEmployees', []))
    ); //Load from the mock server.
  }

  getEmployee(id: number): Observable<Employee> {
    // For now, assume that a employee with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap((_) => this.log(`fetching employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    ); //Load from the mock server.
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((_) => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap((newEmployee: Employee) =>
          this.log(`added employee w/ id=${newEmployee.id}`)
        ),
        catchError(this.handleError<Employee>('addEmployee'))
      );
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  /* GET employees whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found employees matching "${term}"`)
          : this.log(`no employees matching "${term}"`)
      ),
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    );
  }
}
