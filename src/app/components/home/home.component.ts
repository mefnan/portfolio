import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from "../../services/analytics/analytics.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

}
