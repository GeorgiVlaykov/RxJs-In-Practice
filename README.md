## The RxJs In Practice Course

This repository contains the code of the [RxJs In Practice Course](https://angular-university.io/course/rxjs-course).

This course repository is updated to Angular v15:

![RxJs In Practice Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png)

# Installation pre-requisites

Please use Node 18 (Long Term Support version).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli

# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/rxjs-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd rxjs-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

# Questions

## What is Reactive programming and how does it relate to Angular?

The principle of responsive programming is that you can just build the different streams and operations that take place on those flows by specifying the whole program.

Angular uses RxJS for some aspects of its internal service, such as Http, Router, etc.
RxJS is a very powerful library that facilitates the design of applications.

## What are the advantages of Reactive Programming?

- Easy to handle streams of data.
- Has many useful operators that can save time: switchMap, concatMap.
- Helps avoid callback hell.
- Makes complex threading easy.
- Cleaner & maintainable code.

## What is Back-Pressure in Reactive Programming?

Back-Pressure is a resistance or force opposing the desired flow of data through software.

When one component is struggling to keep up, the entire system needs to respond sensibly. It is unacceptable for the component under stress to fail or to drop messages in an uncontrolled fashion. Since it is not easy to handle and can't fail, it should communicate that it is under stress to upstream components and get them to reduce the load. This back-pressure is an important feedback mechanism that facilitates systems to respond to load rather than collapse under such a situation gracefully. The back-pressure may cascade up to the user, at which point responsiveness may degrade. Still, this mechanism will ensure that the system is resilient under load and will provide information that may allow the system to apply other resources to make easy the load by distributing it.

<b>In simple words, we can say that Back-pressure provides the strategies for coping with Observables that produce items more rapidly than their observers consume them.</b>

## What is RxJS?

RxJS is a library for reactive Streams which can be used to deal with asynchronous data streams and events called "Reactive Extensions for JavaScript" (RxJS).

RxJS uses JavaScript reactive programming. RxJS is very popular because it makes writing asynchronous code simple for developers.

## What do you understand by the term Non-Blocking in RxJS?

It's an algorithm that does not allow threads competing for the same resource to be indefinitely postponed through mutual exclusion of the resource.

## What is Stream?

A stream is a key part of reactive programming. In simple terms,
"A stream refers to values of data overtime"

The reason for it being called a stream is that you should think of the data as continuous and not really having an end, unless you explicitly define an end.

## What is [Observable](https://rxjs.dev/guide/observable)?

"Observable represents the idea of an invokable collection of future values or events."

It's an object that emits values over time.

In RxJS, you model asynchronous data streams using observable sequences Or just called observables, too.
An Observable is an object that over time and asynchronously emits multiple data values (data stream).

## What is the difference between an observable and a promise?

Promise:
A Promise emits a single event at the completion or failure of an async operation.

- A promise emits a single value (has a single callback at the end of completion or failure)
- A promise is Not Lazy A Promise cannot be cancelled

Observable:
An observer is like a stream and allows you to pass at least zero or more events where the callback is needed for each event.

- Observable is favored over Promise, it can emit multiple values over a time.
- Observables are "cold". They are not called until we're subscribed to them.
- You may cancel an Observable with the unsubscribe() method
- Observable provides a lot of efficient operators like map, foreach, filter, reduce, retry, retryWhen

## What is the difference between Cold and Hot Observables?

Cold observables only starts pushing values to observers when subscribe is called. You can use cold observable if you don't want to produce data before any observer is subscribed, for example Ajax call.

Hot observables produce values even before subscriptions are made. Hot observables such as mousemove events, stock pickers or WebSocket connections, are already produced in values even before subscription is active if you want to share some resources or data between many subscribers, you have to use hot observables.

## What are RxJS [Operators](https://rxjs.dev/guide/operators)?

A stream is a key part of reactive programming. In simple terms,
An operator is simply a method that acts on an Observable and changes the stream in some way. The purpose of operator, to modify or filter originally emitted values in the way we need for the project tasks.

## What is [Observers](https://rxjs.dev/guide/observer) and [Subscriptions](https://rxjs.dev/guide/subscription)?

Observers and Subscriptions are related to the concept of Observable.

Observers:
Observer is a set of callbacks that know how to listen to the values of the Observable.

- Observers are also referred to as listeners (or consumers)
- Observers may listen or subscribe to the data being observed.

Subscription:
Subscription is an observable execution

- Subscriptions are objects returned when an Observable is subscribed.
- Subscription is useful mainly to cancel the execution

## What is [Subject](https://rxjs.dev/guide/subject)?

Subjects are special types of Observers, so you can also subscribe to other Observables and listen to published data

Special thing about subject is they are multicasted. It means - "The values are multicasted to many Observers" while default RxJS Observable is unicast

## What are different types of Subject?

There are two types of Subjects: BehaviorSubject and ReplaySubject.

## What are the differences between Subject, BehaviorSubject and ReplaySubject?

Subject:
In case of Subject, Observers who are subscribed at a later date will not obtain the data values emitted prior to their subscription.

ReplaySubject:
In ReplaySubject, Observers who are subscribed at a later point will receive all the old data values issued prior to their subscription. As it operates by using a buffer that holds the values emitted and re-emits (replaying) a sequence of old values once new Observers are subscribed.

BehaviorSubject:
BehaviorSubject functions similar to ReplaySubject but only re-issues the last emitted value (current value). So you're interested in the last / current value of the observer, if BehaviorSubject is useful.

## What is RxJS Map and What is Higher-Order Observable Mapping?

RxJS map operator lets us project the payload of the Observable into something else.The power of Observables is revealed when you start using Rx operators to transform, combine, manipulate, and work with sequences of items emitted by Observables.

## When we use the switchMap, mergeMap and concatMap?

There are mainly four types of mapping operators used in RxJS: concatMap(), mergeMap(), switchMap() and exhaustMap(). All of these operators are mapping or flattening operators used to flatten observables, but they are applicable in very different scenarios. The switchMap and mergeMap are the most powerful and frequently used operators. Having the following example:

```js
this.form.valueChanges
  .pipe(
    concatMap(formValue => this.http.put("/api/book/",formValue))
    )
  .subscribe(
    response => ... handle successful ...,
    err => ... handle error ...
  );
```

- What is RxJS [concatMap](https://rxjs.dev/api/operators/concatMap)?

  The two main benefits of using concatMap() operator are that we no longer have to use nested subscribes with higher-order mapping operator, and the second is, all http requests are sent to the backend sequentially.

  This is how the concatMap operator ensures that the requests still occur in sequence:

  - concatMap takes each form value and transforms it into an observer HTTP, known as an inner observer.
  - concatMap subscribes to the inner Observable and sends its output to the Observable result
  - The second form of value can come more quickly than is needed to request in the backend the previous form value. When this occurs, the new form value is not converted to an HTTP request immediately.

- What is RxJS [mergeMap](https://rxjs.dev/api/operators/mergeMap)?

  mergeMap allows for multiple inner subscriptions to be active at a time. Because of this, one of the most common use-case for mergeMap is requests that should not be canceled.

  Unlike the RxJS concatMap operator, mergeMap() will not wait until the Observable finishes until the next Observable is subscribed.

  - In mergeMap operator, every Observable source value is mapped in an internal Observable.
  - The inner Observable is then subscribed by mergeMap.
  - When the inner observables emit new values, the output Observable immediately reflects them.
  - In the mergeMap, unlike the concatMap operator, we do not need to wait until the previous inner observable is completed.

- What is RxJS [switchMap](https://rxjs.dev/api/operators/switchMap)?

  Unlike the mergeMap operator, in the switchMap operator, we unsubscribe the previous Observable before subscribing to the new Observable if the new Observable begins to emit the values.

  Simply put, it means switching to a new observable. The previous inner observable (result of the function you provided) is canceled for each emission and the new observable is subscribed.

## When we use zip and combineLatest and withLatestFrom?

zip and combineLatest are functions and withLatestFrom is operator that allows to combine a few observable sequences in a different ways, that are really helpful in real world application.

Composing functions and operators usually accept observables as their params and also they return observable that emits array with values produced by argument observables. This result observable emission logic is different depending on which operator or function we use

# Useful Links

[RxJS: Glossary And Semantics](https://rxjs.dev/guide/glossary-and-semantics)

[RxJS Operators](https://rxjs.dev/guide/operators)

[RxJS Marbles: Interactive diagrams of Rx Observables](https://rxmarbles.com/)

[Learn RxJS operators and Reactive Programming principles with animations](https://reactive.how/)

[Rx Visualizer: Animated playground for Rx Observables](https://rxviz.com/)

[Learn to combine RxJs sequences with super intuitive interactive diagrams](https://indepth.dev/posts/1114/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams)

[Interactive Diagrams to learn combining RxJS sequences by Max NgWizard K](https://gist.github.com/PCreations/99765f48b1f60c9427c479c25f3e3bbd)

[learnrxjs.io: Clear examples, explanations, and resources for RxJS.](https://www.learnrxjs.io/)
