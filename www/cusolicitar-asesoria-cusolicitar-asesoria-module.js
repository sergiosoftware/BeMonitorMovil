(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cusolicitar-asesoria-cusolicitar-asesoria-module"],{

/***/ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cusolicitar-asesoria/cusolicitar-asesoria.module.ts ***!
  \*********************************************************************/
/*! exports provided: CUSolicitarAsesoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSolicitarAsesoriaPageModule", function() { return CUSolicitarAsesoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cusolicitar_asesoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cusolicitar-asesoria.page */ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.ts");







var routes = [
    {
        path: '',
        component: _cusolicitar_asesoria_page__WEBPACK_IMPORTED_MODULE_6__["CUSolicitarAsesoriaPage"]
    }
];
var CUSolicitarAsesoriaPageModule = /** @class */ (function () {
    function CUSolicitarAsesoriaPageModule() {
    }
    CUSolicitarAsesoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cusolicitar_asesoria_page__WEBPACK_IMPORTED_MODULE_6__["CUSolicitarAsesoriaPage"]]
        })
    ], CUSolicitarAsesoriaPageModule);
    return CUSolicitarAsesoriaPageModule;
}());



/***/ }),

/***/ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-item>\n        <ion-label stacked class=\"my-label\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/icon/tittle.png\">\n          </ion-avatar>BeMonitor Móvil\n        </ion-label>\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item>\n            <ion-label stacked class=\"my-label\">Solicitar Asesoria</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Asignatura</ion-label>\n            <ion-select placeholder=\"Select One\">\n              <ion-select-option value=\"f\">Ingenieria de Software III</ion-select-option>\n              <ion-select-option value=\"m\">Redes de Computadores II</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Tema</ion-label>\n            <ion-input placeholder=\"...\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-button size=\"small\" color=\"dark\">\n              <ion-icon name=\"send\"></ion-icon>Solicitar\n            </ion-button>\n          </ion-item>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label {\n  font-family: 'Lobster';\n  src: url(https://fonts.google.com/?query=lobster&selection.family=Lobster);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vzb2xpY2l0YXItYXNlc29yaWEvQzpcXFVzZXJzXFxzZXJnaW9hbmRyZXNcXERlc2t0b3BcXElvbmljXFxCZU1vbml0b3JNb3ZpbC9zcmNcXGFwcFxcY3Vzb2xpY2l0YXItYXNlc29yaWFcXGN1c29saWNpdGFyLWFzZXNvcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QiwwRUFBMEU7RUFDMUUsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXNvbGljaXRhci1hc2Vzb3JpYS9jdXNvbGljaXRhci1hc2Vzb3JpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS8/cXVlcnk9bG9ic3RlciZzZWxlY3Rpb24uZmFtaWx5PUxvYnN0ZXIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.ts ***!
  \*******************************************************************/
/*! exports provided: CUSolicitarAsesoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSolicitarAsesoriaPage", function() { return CUSolicitarAsesoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CUSolicitarAsesoriaPage = /** @class */ (function () {
    function CUSolicitarAsesoriaPage() {
        this.casosdeUso = [
            {
                nombre: 'Solicitar Asesoria',
                imagen: 'assets/imagenes/solicitarasesoria.jpg',
                audio: 'assets/sonidos/bombo1.mp3'
            }
        ];
    }
    CUSolicitarAsesoriaPage.prototype.reproducirSonido = function (instrumento) {
        var sonido = new Audio();
        sonido.src = instrumento.audio;
        sonido.load();
        sonido.play();
    };
    CUSolicitarAsesoriaPage.prototype.ngOnInit = function () {
    };
    CUSolicitarAsesoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cusolicitar-asesoria',
            template: __webpack_require__(/*! ./cusolicitar-asesoria.page.html */ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.html"),
            styles: [__webpack_require__(/*! ./cusolicitar-asesoria.page.scss */ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CUSolicitarAsesoriaPage);
    return CUSolicitarAsesoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=cusolicitar-asesoria-cusolicitar-asesoria-module.js.map