(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuconsultar-asesorias-solicitadas-cuconsultar-asesorias-solicitadas-module"],{

/***/ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CuconsultarAsesoriasSolicitadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuconsultarAsesoriasSolicitadasPageModule", function() { return CuconsultarAsesoriasSolicitadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cuconsultar_asesorias_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuconsultar-asesorias-solicitadas.page */ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.ts");







var routes = [
    {
        path: '',
        component: _cuconsultar_asesorias_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__["CuconsultarAsesoriasSolicitadasPage"]
    }
];
var CuconsultarAsesoriasSolicitadasPageModule = /** @class */ (function () {
    function CuconsultarAsesoriasSolicitadasPageModule() {
    }
    CuconsultarAsesoriasSolicitadasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cuconsultar_asesorias_solicitadas_page__WEBPACK_IMPORTED_MODULE_6__["CuconsultarAsesoriasSolicitadasPage"]]
        })
    ], CuconsultarAsesoriasSolicitadasPageModule);
    return CuconsultarAsesoriasSolicitadasPageModule;
}());



/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item>\r\n    <ion-label stacked class=\"my-subtittle\">Consultar Asesorias Solicitadas</ion-label>\r\n  </ion-item>\r\n  <ion-grid>\r\n\r\n\r\n    <ion-row *ngFor=\"let listaAsesorias of asesorias\" justify-content-start>\r\n      <ion-col size=\"12\">\r\n        <ion-card color=\"primary\">\r\n          <ion-col> Asignatura\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.nombreAsignatura}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Tema\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.tema}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Fecha Publicación\r\n            <ion-item>\r\n              <ion-label class=\"my-label\">{{listaAsesorias.fechaPublicacion}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col> Responder\r\n            <ion-item>\r\n              <ion-button expand=\"full\" size=\"small\" color=\"dark\" (click)=\"guardarYbuscar(listaAsesorias)\">\r\n                <ion-icon name=\"send\"></ion-icon>Más Detalles\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  background: #abc; }\n\n.my-label {\n  font-family: 'Lobster'; }\n\n.my-subtittle {\n  font-family: 'Lobster';\n  text-align: center; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vjb25zdWx0YXItYXNlc29yaWFzLXNvbGljaXRhZGFzL0M6XFxVc2Vyc1xcc2VyZ2lvYW5kcmVzXFxEZXNrdG9wXFxCZU1vbml0b3JNb3ZpbE9yaWdpbmFsXFxCZU1vbml0b3JNb3ZpbC0xL3NyY1xcYXBwXFxjdWNvbnN1bHRhci1hc2Vzb3JpYXMtc29saWNpdGFkYXNcXGN1Y29uc3VsdGFyLWFzZXNvcmlhcy1zb2xpY2l0YWRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3Vjb25zdWx0YXItYXNlc29yaWFzLXNvbGljaXRhZGFzL2N1Y29uc3VsdGFyLWFzZXNvcmlhcy1zb2xpY2l0YWRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJjO1xyXG4gIH1cclxuICBcclxuICAubXktbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICB9XHJcblxyXG4gIC5teS1zdWJ0aXR0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5teS1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ2xvYnN0ZXInO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: CuconsultarAsesoriasSolicitadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuconsultarAsesoriasSolicitadasPage", function() { return CuconsultarAsesoriasSolicitadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asesoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asesoria.service */ "./src/app/asesoria.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var CuconsultarAsesoriasSolicitadasPage = /** @class */ (function () {
    function CuconsultarAsesoriasSolicitadasPage(navCtrl, alertController, asesoriaService, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.asesoriaService = asesoriaService;
        this.storage = storage;
        /**
         * Estructura real de las asesorías
         */
        this.asesorias = [{
                idasesoria: "",
                codigoAsignatura: 0,
                tema: "",
                fechaPublicacion: "",
                estudiante: 0
            }];
        /**
         * variable local que simula el codigo del estudiante
         */
        this.estudiante = "1701310061";
        this.cargarDatos();
    }
    /**
     * Validar si el usuario selecciono una asesoria para ver mas detalles, si cumple se redirecciona a una nueva vista
     */
    CuconsultarAsesoriasSolicitadasPage.prototype.guardarYbuscar = function (asesoriaSeleccionada) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(asesoriaSeleccionada != undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.set('idAsesoria', asesoriaSeleccionada.idasesoria)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.navigateForward(['/cuconsultar-asesorias-solicitadas-detalles'])];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'Debes seleccionar una asesoria para ver mas detalles',
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
    CuconsultarAsesoriasSolicitadasPage.prototype.ngOnInit = function () {
    };
    /**
     * Inicializa la lista de asesorias de la asignatura del monitor
     * Consumiendo el webservice
     */
    CuconsultarAsesoriasSolicitadasPage.prototype.cargarDatos = function () {
        var _this = this;
        this.asesoriaService.getAsesoriasEstudiante(this.estudiante).subscribe(function (data) {
            console.log(data);
            _this.asesorias = Object.values(data);
        }, (function (error) {
            console.log(error);
        }));
    };
    CuconsultarAsesoriasSolicitadasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuconsultar-asesorias-solicitadas',
            template: __webpack_require__(/*! ./cuconsultar-asesorias-solicitadas.page.html */ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.html"),
            styles: [__webpack_require__(/*! ./cuconsultar-asesorias-solicitadas.page.scss */ "./src/app/cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _asesoria_service__WEBPACK_IMPORTED_MODULE_3__["AsesoriaService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], CuconsultarAsesoriasSolicitadasPage);
    return CuconsultarAsesoriasSolicitadasPage;
}());



/***/ })

}]);
//# sourceMappingURL=cuconsultar-asesorias-solicitadas-cuconsultar-asesorias-solicitadas-module.js.map