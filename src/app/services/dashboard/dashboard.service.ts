import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";
import {Observer, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  data: Array<Object> = [
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    }
  ]
  dataChange: Subject<Array<Object>> = new Subject<Array<Object>>();

  constructor() {
    this.dataChange.subscribe((value => {
      this.data = value
    }))
  }

}
