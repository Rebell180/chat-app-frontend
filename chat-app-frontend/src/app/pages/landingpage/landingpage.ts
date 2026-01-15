import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { Chatview } from "../../shared/components/chatview/chatview";

@Component({
  selector: 'app-landingpage',
  imports: [Header, Chatview],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
