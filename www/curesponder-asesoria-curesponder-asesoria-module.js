(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curesponder-asesoria-curesponder-asesoria-module"],{

/***/ "./src/app/curesponder-asesoria/curesponder-asesoria.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/curesponder-asesoria/curesponder-asesoria.module.ts ***!
  \*********************************************************************/
/*! exports provided: CuresponderAsesoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuresponderAsesoriaPageModule", function() { return CuresponderAsesoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _curesponder_asesoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curesponder-asesoria.page */ "./src/app/curesponder-asesoria/curesponder-asesoria.page.ts");







var routes = [
    {
        path: '',
        component: _curesponder_asesoria_page__WEBPACK_IMPORTED_MODULE_6__["CuresponderAsesoriaPage"]
    }
];
var CuresponderAsesoriaPageModule = /** @class */ (function () {
    function CuresponderAsesoriaPageModule() {
    }
    CuresponderAsesoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_curesponder_asesoria_page__WEBPACK_IMPORTED_MODULE_6__["CuresponderAsesoriaPage"]]
        })
    ], CuresponderAsesoriaPageModule);
    return CuresponderAsesoriaPageModule;
}());



/***/ }),

/***/ "./src/app/curesponder-asesoria/curesponder-asesoria.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/curesponder-asesoria/curesponder-asesoria.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item>\r\n    <ion-label stacked class=\"my-subtittle\">Responder Asesoria</ion-label>\r\n  </ion-item>\r\n  <ion-grid>\r\n\r\n\r\n    <ion-row *ngFor=\"let listaAsesorias of asesorias\" justify-content-start>\r\n      <ion-col size=\"12\">\r\n        <ion-card color=\"primary\">\r\n          <ion-col> Asignatura\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.asignatura}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Tema\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.tema}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Nombre y Correo estudiante\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.nombre}} {{listaAsesorias.apellido}} {{listaAsesorias.correo}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Responder\r\n            <ion-item>\r\n              <ion-checkbox (ionChange)=\"asesoriaActual(listaAsesorias)\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button expand=\"full\" size=\"small\" color=\"dark\" (click)=\"guardarYbuscar()\">\r\n      <ion-icon name=\"send\"></ion-icon>Responder\r\n    </ion-button>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/curesponder-asesoria/curesponder-asesoria.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/curesponder-asesoria/curesponder-asesoria.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label {\n  font-family: 'Lobster'; }\n\n.my-subtittle {\n  font-family: 'Lobster';\n  text-align: center; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyZXNwb25kZXItYXNlc29yaWEvQzpcXFVzZXJzXFxzZXJnaW9hbmRyZXNcXERlc2t0b3BcXEJlTW9uaXRvck1vdmlsT3JpZ2luYWxcXEJlTW9uaXRvck1vdmlsLTEvc3JjXFxhcHBcXGN1cmVzcG9uZGVyLWFzZXNvcmlhXFxjdXJlc3BvbmRlci1hc2Vzb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1cmVzcG9uZGVyLWFzZXNvcmlhL2N1cmVzcG9uZGVyLWFzZXNvcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xyXG4gIH1cclxuXHJcbiAgLm15LXN1YnRpdHRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm15LWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnbG9ic3Rlcic7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/curesponder-asesoria/curesponder-asesoria.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/curesponder-asesoria/curesponder-asesoria.page.ts ***!
  \*******************************************************************/
/*! exports provided: CuresponderAsesoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuresponderAsesoriaPage", function() { return CuresponderAsesoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asesoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asesoria.service */ "./src/app/asesoria.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var CuresponderAsesoriaPage = /** @class */ (function () {
    function CuresponderAsesoriaPage(navCtrl, alertController, asesoriaService, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.asesoriaService = asesoriaService;
        this.storage = storage;
        /**
         * Estructura real de las asesorías
         */
        this.asesorias = [{
                idasesoria: "",
                nombreAsignatura: "",
                tema: "",
                fechaPublicacion: "",
                estudiante: 0
            }];
        /**
         * variable local que simula la asignatura del monitor
         */
        this.asesoria = "G8F0059";
        this.cargarDatos();
    }
    /**
     * Validar si el usuario selecciono una asesoria para responder, si cumple se redirecciona a una nueva vista
     */
    CuresponderAsesoriaPage.prototype.guardarYbuscar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.asesoriaSeleccionada != undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.set('idAsesoria', this.asesoriaSeleccionada)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateForward(['/curesponder-asesoria-calendario'])];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'Debes seleccionar una solicitud de asesoria para responder',
                            buttons: ['Close']
                        })];
                    case 4:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Obtener en tiempo de ejecucion la asesoria selecionada por el actor par darle respuesta
     * @param codigo nos indica el codigo de la asignatura que va a recibir la respuesta
     */
    CuresponderAsesoriaPage.prototype.asesoriaActual = function (codigo) {
        this.asesoriaSeleccionada = codigo.idasesoria;
        console.log('Nuevo estado:' + this.asesoriaSeleccionada);
    };
    CuresponderAsesoriaPage.prototype.ngOnInit = function () {
    };
    /**
     * Inicializa la lista de asesorias de la asignatura del monitor
     * Consumiendo el webservice
     */
    CuresponderAsesoriaPage.prototype.cargarDatos = function () {
        var _this = this;
        this.asesoriaService.getAsesoriaAsignatura(this.asesoria).subscribe(function (data) {
            console.log(data);
            _this.asesorias = Object.values(data);
        }, (function (error) {
            console.log(error);
        }));
    };
    CuresponderAsesoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curesponder-asesoria',
            template: __webpack_require__(/*! ./curesponder-asesoria.page.html */ "./src/app/curesponder-asesoria/curesponder-asesoria.page.html"),
            styles: [__webpack_require__(/*! ./curesponder-asesoria.page.scss */ "./src/app/curesponder-asesoria/curesponder-asesoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _asesoria_service__WEBPACK_IMPORTED_MODULE_3__["AsesoriaService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], CuresponderAsesoriaPage);
    return CuresponderAsesoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=curesponder-asesoria-curesponder-asesoria-module.js.map