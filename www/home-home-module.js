(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"medium\">\r\n  <ion-grid>\r\n    <!--Caso de uso Solicitar Asesoria-->\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let Solicitar of SolicitarAsesoria\">\r\n        <ion-card (click)=\"reproducirSonido(Solicitar)\">\r\n          <ion-img [src]=\"Solicitar.imagen\"></ion-img>\r\n          <!-- Item as an Anchor -->\r\n          <ion-item routerLink=\"/cusolicitar-asesoria\">\r\n            <ion-label stacked class=\"my-label\">\r\n              Solicitar Asesoria\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!--Caso de uso Responder Asesoria-->\r\n\r\n      <ion-col size=\"6\" *ngFor=\"let Responder of ResponderAsesoria\">\r\n        <ion-card (click)=\"reproducirSonido(Responder)\">\r\n          <ion-img [src]=\"Responder.imagen\"></ion-img>\r\n          <!-- Item as an Anchor -->\r\n          <ion-item routerLink=\"/curesponder-asesoria\">\r\n            <ion-label stacked class=\"my-label\">\r\n              Responder Asesoria\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!--Caso de uso Consultar Asesorias Solicitadas-->\r\n\r\n      <ion-col size=\"6\" *ngFor=\"let ConsultarAsesorias of ConsultarAseosirasSolicitadas\">\r\n        <ion-card (click)=\"reproducirSonido(ConsultarAsesorias)\">\r\n          <ion-img [src]=\"ConsultarAsesorias.imagen\"></ion-img>\r\n          <!-- Item as an Anchor -->\r\n          <ion-item routerLink=\"/cuconsultar-asesorias-solicitadas\">\r\n            <ion-label stacked class=\"my-label\">\r\n              Consultar Asesorias Solicitadas\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  background: #abc; }\n\n.my-label {\n  font-family: 'lobster';\n  font-size: 100%;\n  text-align: center; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHNlcmdpb2FuZHJlc1xcRGVza3RvcFxcQmVNb25pdG9yTW92aWxPcmlnaW5hbFxcQmVNb25pdG9yTW92aWwtMS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjYWJjO1xyXG59XHJcblxyXG4ubXktbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnbG9ic3Rlcic7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm15LWhlYWRlcntcclxuICBmb250LWZhbWlseTogJ2xvYnN0ZXInO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        /**
         * Caracteristicas adicionales para las vistas, no son requisitos del cliente
         */
        this.SolicitarAsesoria = [
            {
                nombre: 'Solicitar Asesoria',
                imagen: 'assets/imagenes/solicitarasesoria.jpg',
                audio: 'assets/sonidos/bombo1.mp3'
            }
        ];
        this.ResponderAsesoria = [
            {
                nombre: 'Responder Asesoria',
                imagen: 'assets/imagenes/responderasesoria.jpg',
                audio: 'assets/sonidos/bombo1.mp3'
            }
        ];
        this.ConsultarAseosirasSolicitadas = [
            {
                nombre: 'Consultar Asesorias Solicitadas',
                imagen: 'assets/imagenes/consultarasesorias.jpg',
                audio: 'assets/sonidos/bombo1.mp3'
            }
        ];
    }
    HomePage.prototype.reproducirSonido = function (instrumento) {
        var sonido = new Audio();
        sonido.src = instrumento.audio;
        sonido.load();
        sonido.play();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map