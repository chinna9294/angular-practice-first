import { Component } from '@angular/core';

// Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
// A component controls a patch of screen called a view
// You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.
//The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
//It's not a component until you mark it as one with the @Component decorator.
// the component and its template describe a view.
//In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in HTML and what services it requires.
@Component({
  // A selector instructs Angular to instantiate this component wherever it finds the corresponding tag in template HTML.
  selector: 'parent-test-one',
  // A template is a block of HTML that tells Angular how to render the component in your application.
  // You can define a template for your component in one of two ways: by referencing an external file, or directly within the component.

  //template: '<h1> Hello World ! </h1>' for multiple line use ` instead of '
  // A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your application's logic and the state of application and DOM data. 
  // Your template can use data binding to coordinate the application and DOM data, pipes to transform data before it is displayed, and directives to apply application logic to what gets displayed.
  //The template-syntax elements tell Angular how to render the HTML to the screen, using program logic and data.
  //{{hero.name}}, (click), and [hero] bind program data to and from the DOM, responding to user input.
  //The <app-hero-detail> tag in the example is an element that represents a new component, HeroDetailComponent. HeroDetailComponent (code not shown) defines the hero-detail child view of HeroListComponent. Notice how custom components like this mix seamlessly with native HTML in the same layouts.
  templateUrl: './parent-test-one.component.html',
  // This template defines the component's host view.
  // You can declare component styles uses for its template in one of two ways: by referencing an external file, or directly within the component.
  //styles: ['h1{font-weight: normal;}'] array of string
  styleUrls: ['./parent-test-one.component.css'],
  //providers: [HeroService]
  //An array of providers for services that the component requires. In the example, this tells Angular how to provide the HeroService instance that the component's constructor uses to get the list of heroes to display.
})

//Angular creates, updates, and destroys components as the user moves through the application. Your application can take action at each moment in this lifecycle through optional lifecycle hooks, like ngOnInit().

//Views are typically arranged hierarchically, allowing you to modify or show and hide entire UI sections or pages as a unit.

//The component can also define a view hierarchy, which contains embedded views, hosted by other components.
//A view hierarchy can include views from components in the same NgModule, but it also can (and often does) include views from components that are defined in different NgModules.
export class ParentTestOneComponent {}
//selector: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an application's HTML contains <app-hero-list></app-hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
