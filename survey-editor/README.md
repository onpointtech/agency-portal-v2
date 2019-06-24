# Angular 7 Cli (QuickStart Boilerplate) + SurveyJS: Survey Library and Survey Creator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and modified to use SurveyJS: Survey Library and Survey Creator.

You can just clone this repo and run "npm i" and "ng serve" command.


## Steps to add SurveyJS: Survey Library and Survey Creator into the generated empty project

 1. **Create a new project.**  
	```
	ng new surveyjs-angular-cli
	cd surveyjs-angular-cli
	```

 2. **Add SurveyJS: Survey Library and Survey Creator dependencies.**
	```
	npm install -save survey-angular
	npm install -save surveyjs-widgets
	npm install -save survey-creator
	```

3. **Add knockout typings to the '/src/tsconfig.app.json' file.**
	```
    "types": [
      "knockout"
    ]
	```

4. **Add Survey and Survey Creator components files.**
	```
	src/app/survey.component.ts
	src/app/survey.creator.component.ts
	```

5. **Use compoents in the app.module.ts file.**
	```
	import { SurveyComponent } from './survey.component';
	import { SurveyCreatorComponent } from './survey.creator.component';
	@NgModule({
    declarations: [
      AppComponent,
      SurveyComponent,
      SurveyCreatorComponent
    ],
	```
	  
6. **Change markup in the app.component.html file.**
	```
	<h1>Survey</h1><survey [json]="json"></survey>
	<h1>SurveyJS Creator</h1><survey-creator></survey-creator>
	```

7. **Add "jQuery polyfill" for bootstrap in the polyfills.ts file (https://github.com/angular/angular-cli/issues/2129).**

	```
	import * as jQuery from 'jquery';
	window['jQuery'] = jQuery;
	```

8. **Run project.**
	```
	ng serve
	```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
