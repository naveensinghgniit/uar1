import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-ag-grid-app',
  templateUrl: './ag-grid-app.component.html',
  styleUrls: ['./ag-grid-app.component.css']
})
export class AgGridAppComponent implements OnInit {

  columnDefs = [
    { headerName: 'Document ID', field: 'documentId' },
    { headerName: 'Document Type', field: 'documentType' },
    { headerName: 'Invoice Date', field: 'invoiceDate' },
    { headerName: 'Invoice Number', field: 'invoiceNumber' },
    { headerName: 'Supplier Number ', field: 'supplierNumber ' },
    { headerName: 'Supplier Name ', field: 'supplierName' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Currency Code', field: 'currencyCode' },
    { headerName: 'GST %', field: 'gst' },
    { headerName: 'Approver 1', field: 'approver1' },
    { headerName: 'Date of Approver 1', field: 'dateOfApprover1' },
    { headerName: 'Approver 2', field: 'approver2' },
    { headerName: 'Date of Approver 2', field: 'dateOfApprover2' },
    { headerName: 'Finance Validation', field: 'financeValidation' },
    { headerName: 'Date of Finance Validation ', field: 'dateOfFinanceValidation' }
  ];

  rowData = [
    // { documentId: 12345, documentType: 'PV', invoiceDate: '01/03/2016 9:00', invoiceNumber: 'Business Unit1', supplierNumber: 'GLCode1', supplierName: 'SubLedger1', status: 'Completed', price: 1000, currencyCode: '$', gst: '12%', approver1: 'Sam', dateOfApprover1: '01/03/2016 9:20', approver2: 'Sam', dateOfApprover2: '06/03/2016 9:20', financeValidation: 'Emma', dateOfFinanceValidation:'21/03/2016 11:05'},
    // { documentId: 12345, documentType: 'PV', invoiceDate: '01/03/2016 9:00', invoiceNumber: 'Business Unit1', supplierNumber: 'GLCode1', supplierName: 'SubLedger1', status: 'Completed', price: 1000, currencyCode: '$', gst: '12%', approver1: 'Sam', dateOfApprover1: '01/03/2016 9:20', approver2: 'Sam', dateOfApprover2: '06/03/2016 9:20', financeValidation: 'Emma', dateOfFinanceValidation: '21/03/2016 11:05' },
    // { documentId: 12345, documentType: 'PV', invoiceDate: '01/03/2016 9:00', invoiceNumber: 'Business Unit1', supplierNumber: 'GLCode1', supplierName: 'SubLedger1', status: 'Completed', price: 1000, currencyCode: '$', gst: '12%', approver1: 'Sam', dateOfApprover1: '01/03/2016 9:20', approver2: 'Sam', dateOfApprover2: '06/03/2016 9:20', financeValidation: 'Emma', dateOfFinanceValidation: '21/03/2016 11:05' }
  ];

  private dataUrl:string = 'assets/data.json';

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(
      data => {
        this.rowData = data as string[];
      });
  }

}
