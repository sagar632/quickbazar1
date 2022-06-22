import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
//import {LoginComponent} from '../login/login.component';
import {DiaglogComponent} from '../diaglog/diaglog.component';
import {RegisterComponent} from '../register/register.component';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   TotalItemsInCart:number;

  constructor( private shoppingCart:ShoppingCartService,public dialog:MatDialog){ }

  ngOnInit(): void {
    this.TotalItemsInCart = this.shoppingCart.getTotalItemsInCart();
  }
 loginform(){
        this.dialog.open(DiaglogComponent);
    }
    registerform():void{
    	this.dialog.open(RegisterComponent);
    }
}
