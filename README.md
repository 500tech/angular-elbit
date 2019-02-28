## Course Material

StackBlitz:
https://stackblitz.com/edit/angular-elbit?file=readme.md

Git Repo:
https://github.com/500tech/angular-elbit

### Steps:

Start Point:
https://stackblitz.com/edit/angular-elbit-start?file=src/app/app.component.ts

Typescript Done:
https://stackblitz.com/edit/angular-elbit-typescript?file=src/typescript.ts

Component Bindings:
https://stackblitz.com/edit/angular-elbit-component-bindings?file=src/app/app.component.html

Component Lego:
https://stackblitz.com/edit/angular-elbit-component-lego?file=readme.md

ngFor, ngIf, class modifier:
https://stackblitz.com/edit/angular-elbit-ngfor-ngif-class-modifiers?file=src/index.HTML

Modules, Content:
https://stackblitz.com/edit/angular-elbit-modules-content?file=src/app/app.component.ts

Pipes:
https://stackblitz.com/edit/angular-elbit-pipes?file=src%2Fapp%2Fshared%2Fpretty-count.pipe.ts

RxJs:
https://stackblitz.com/edit/angular-elbit-rxjs?file=src/app/app.component.css

Provider + DI:
https://stackblitz.com/edit/angular-elbit-di?file=readme.md

NgRx:
https://slides.com/hackademy/ngrx?token=tDRFaRsh

## Links

TodoMVC Vanilla JS + HTML + CSS:
http://todomvc.com/examples/vanillajs/#/

Augury DevTools:
https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd

Can I Use
https://caniuse.com/

Todos API:
https://jsonplaceholder.typicode.com/todos

NgRx:
Install:
https://ngrx.io/guide/store/Install

Generate:
https://ngrx.io/guide/schematics

Redux Devtools:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

AngularUP Conference:
https://angular-up.com/

## Angular CLI

Develop:
npm i -g @angular/cli # run once
ng new myProject # create new project
ng serve (localhost:4200) # development
ng g component myComp
npm i lodash @types/lodash

Build:
ng build # development build
ng build --prod # production build
ng build --prod --source-map # production build with source maps
npm i -g http-server # test the build
http-server dist/myProject (localhost:8080)

Source Map Explorer:
npm i -g source-map-explorer
source-map-explorer dist/myProject/main.js

TSConfig - noImplicitAny
TSLint
Prettier

## VSCode

Install extensions:
Angular Essentials
Angular Schematics

## Extra Reading Material

Zone
ChangeDetection
Angular - angular.io
Angular Styleguide - https://angular.io/guide/styleguide
HTML/CSS - https://www.w3schools.com/
events - https://www.w3schools.com/tags/ref_eventattributes.asp
FlexBox - https://flexboxfroggy.com/
RX - http://reactivex.io
ngrx - https://angular.io/guide/rx-library
== - https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
=== - https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6
reduce - https://www.w3schools.com/jsref/jsref_reduce.asp

### Some cool Angular Talks:

Rob Wormald, what's new and coming in Angular:
https://www.youtube.com/watch?v=-dMegTbYHxA

Shai Reznik, funny talk about SwitchMap:
https://www.youtube.com/watch?v=rUZ9CjcaCEw

Minko Gechev, crazy things about Angular Compiler:
https://www.youtube.com/watch?v=E707WJakn7A

Uri Shaked, connecting to internet of things with Angular:
https://www.youtube.com/watch?v=J2lP54FbCaM&t=16s

And many more:
https://www.youtube.com/channel/UCBmp3Hpuq1RAsgiyJ6vr-FA
https://www.youtube.com/user/ngconfvideos
https://www.youtube.com/channel/UCzrskTiT_ObAk3xBkVxMz5g

## Augury Tips

Select element in Augury
Type \$\$el.componentInstance in console

## Follow up

== vs. ===
reduce
nx / monorepo
