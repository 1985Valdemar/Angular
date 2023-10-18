import { Component } from "@angular/core";

//decorador tem passar informaçao
@Component({
    selector: "app-primeiro-componente",
    template: "<h2>Primeiro Componente</h2>",
    styles: ["h2 { color:red; }"]
})
export class PrimeiroComponenteComponent{}