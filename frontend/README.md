#Project 

This project was made for angular&rxjs demo purpose. Made by Erik Oravec...

# Leírás

A feladatod egy könyveket áruló webáruház kliensoldalának elkészítése. 

A következő elvárásoknak kell megfelelnie:

A “főoldal” tartalmazzon egy kereső mezőt, melybe beírt szöveg alapján jelenítse meg azon könyveket, amelyek címe tarmalmazza a keresett kifejezést.
A "főoldal" tartalmazzon egy gombot "multi search", ami lenyit egy újabb keresőmezőt, ezúttal több könyv címét is meg lehet adni vesszővel elválasztva, és ezúttal több http requestet elküldve parallel, majd kapjuk vissza a könyveket, amelyeket kilistázzuk egyszerre. (Itt kifejezetten egy rxjs-es megoldast varok:)) )
A megjelenített könyvek címére kattinva a weboldal váltson át a kiválasztott könyv részleteit (cím, író, leírás, borítókép) megjelenítő oldalra.
Minden megjelenített könyvnél legyen lehetőség kosárba rakni azt.
Az alkalmazás bármely oldalára navigálva mindig látható egy Cart "widget" ami mutatja hány elem van jelenleg a kosarunkban és rákattintva a Kosár oldalra navigálunk
A kosárba rakott könyvek legyenek megtekinthetőek.
Az oldal újratöltése esetén “jegyezze meg” a kosár tartalmát.

Segítség:

A tudásod szerint lehető legjobb megoldásra törekedj, azonban, ha valamire nem jut időd csak jelöld meg a kódban.
A könyvek lekérdezéséhez használd a Google Books API-t. (https://developers.google.com/books/docs/v1/getting_started)
A kosárba rakott könyveket elegendő a lehető legegyszerűbb módon kliens oldalon tárolni.
Törekedj könnyen olvasható és érthető kód írására.
Ahol lehet használj funkcionális megoldást, rxjs-t, vagy bármilyen advanced megoldást, ami szerinted illik oda
Figyelj a megfelelő felelősségi körök, komponensek elosztására.
Ne tölts túl sok időt a megoldás kinézetének igazgatásával. (használj nyugodtan Bootstrap css-t, angular materialt)

# BookShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
