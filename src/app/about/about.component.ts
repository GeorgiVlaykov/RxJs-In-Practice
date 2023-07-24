import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable, Subject, concat, interval, merge, noop, of } from "rxjs";
import { map } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const subject = new Subject();
  }
}
