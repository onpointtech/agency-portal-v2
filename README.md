# Guide on how to use this project (and develop angular 8)

## How to install (Windows)
install git

git clone the repository
`https://github.com/onpointtech/agency-portal-v2.git`

Open the folder agency-portal
`cd agency-portal`


Install the node modules
`npm install`


## how to run the frontend (angular)
To run, open the directory, open terminal and type
`ng serve`

Then open this link in your browser
`localhost:4200`

## how to run the backend (angular)
open eclipse

build the project as maven project

run the application

open this link in your browser
`http://localhost:8080/swagger-ui.html`

## How to develop the agency portal

### Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

In generating components you can opt to remove some portions of the component.
* Adding `-is`  removes the app.componentname.component.css file.
* Adding `--skipTests` removes the app.componentname.component.spec.ts.

Sample code:
`ng generate component readme-window -is --skipTests` creates only two files
* app.readme-window.component.ts
* app.readme-window.component.html
* may also use a shortcut `ng g c readme-window -is --skipTests`

### Running tests

This isn't implemented yet.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

## Building your own module / library of components, services, etc
Basic idea:
1) create your own library
* may opt to put a prefix
2) create your components
3) export the components in the module of the library
4) build the library, do an npm install
5) import the module to the project you are using
6) edit the components
* may opt to build continuously 
* if you choose the build continuously and you break it, you need to build it twice (first to unlink, second is to build again), also need to run ng serve again

### 1. Create your own project
In your terminal type
`ng generate library library-name`
* You can add a prefix by putting `-p prefixWord`
* All components made in this library will have the prefixWord before it (using it in selector)
* In using a component, say we call it  _rain-maker_, the parent component will call it in the html by using _<prefixWord-rain-maker></prefixWord-rain-maker>_
* Sample use will be `ng generate library library-name -p prefixWord`

### 2. Create your components for your library
In your terminal type
`ng generatecomponent component-name --project==library-name`
* for a smaller component you can remove the css and spec.ts by using `-is --skipTests`
* It will look like `ng generate component component-name --project==library-name -is --skipTests`

### 3. Export the components in the module of the library
Navigate to `dist/library-name/lib/library-name.module.ts`

You should see your component imported and inside the declarations.
__Imported:__
`import { SomeComponent } from './some-place/some.component';`

__Inside the declarations:__
```... 
@NgModule({  
  declarations:[  
...
     SomeComponent
  ],
  ...
  ```
__Inside the exports:__
You should not find your component yet, you need to explicitly add it there. Modify it to be like this

from this
```
  exports:[  
...
AnotherComponent
  ]

```
to this
```
  exports:[  
...
    AnotherComponent,
    SomeComponent
  ]

```
### 4. Build the library and do an npm install
We have to build the library every time we edit it.
This should build the library
`ng build library-name`

This next line should install the npm modules needed for the library
`npm install dist/library-name`

### 5. Import the library to your project
First navigate to your src/app-name/app-name.module.ts

We need to do three things here
1) import the library to your modules
* Add on top `import { LibraryNameModule } from 'library-name';`
2) put the components you will use in the declarations
`... 
@NgModule({  
  declarations:[  
...
     SomeComponent
  ],
  ...
  `
3)  put the library name in your imports
`
  imports:[  
...
    LibraryNameModule
  ]
`
### 6. Editing the components live
We will assume you are doing an ng serve while the app is importing a component that is being edited
Instead of our usual build library we will use the `--watch` to have the changes compiled live
`ng build library-name --watch`

#### Errors
* if you make an edit to the components, and this edit doesnt compile to the library. You'll find the app that imports this library to not work. To fix this
* Run `ng build library-name --watch` once to unlink the library to the main app
* Run `ng build library-name --watch` a second time to finally build it
* Run `ng serve` to your app. You're done. 
* This error doesn't happen if you save code that works.

## Building your own app in a library

Run `ng generate application app-name --prefix appn`

You continue normal app development in angular. And use number 6 above, to see how to build components live.


#Angular Basic Concepts

## Components
These are portions of the website that have code + html (+ css + tests)

to make a component run

`ng generate component some`

the is shortcut for this:

`ng g c some`

there is a command to skip making css files and test files:

`ng g c some -is --skipTests`

to use the component in a parent html, import it first:

`import { SomeComponent } from './some-place/some.component';`

then in the html, you can now use the component as

`<app-name-some></app-name-some>`


## Services
These are pieces of code that are used again and again throughout the site. Think of it as recurring functions.

to make a service run

`ng generate service some`

# Coding Standards
```
 import {ThisModule } from 'here';
import { ThisComponent } from 'here as well';

import { OTHERMODELS } from '../../this place';

@Component({
...
})
export class SomeComponent {
//Input && Output goes first
  @Input() input;
  @Output() output; // this is usually an event emitter

//Variable declarations goes next
  variable1: number;
  variablesAreCamelCase: any;
  variablesCanGetFrom = OTHERMODELS;

//Constructor goes next
  constructor(public variable) { }

//NgOnInit goes next
  ngOnInit() {
    this.variable1 = 1;
    //instantiate the variables here
  }


//Next set of functions goes next
  function1() {
  }

  function2() {
  }

} 
```