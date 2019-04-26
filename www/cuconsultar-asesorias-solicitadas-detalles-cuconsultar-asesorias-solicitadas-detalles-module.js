(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuconsultar-asesorias-solicitadas-detalles-cuconsultar-asesorias-solicitadas-detalles-module"],{

/***/ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CuconsultarAsesoriasSolicitadasDetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuconsultarAsesoriasSolicitadasDetallesPageModule", function() { return CuconsultarAsesoriasSolicitadasDetallesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cuconsultar_asesorias_solicitadas_detalles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuconsultar-asesorias-solicitadas-detalles.page */ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.ts");







var routes = [
    {
        path: '',
        component: _cuconsultar_asesorias_solicitadas_detalles_page__WEBPACK_IMPORTED_MODULE_6__["CuconsultarAsesoriasSolicitadasDetallesPage"]
    }
];
var CuconsultarAsesoriasSolicitadasDetallesPageModule = /** @class */ (function () {
    function CuconsultarAsesoriasSolicitadasDetallesPageModule() {
    }
    CuconsultarAsesoriasSolicitadasDetallesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cuconsultar_asesorias_solicitadas_detalles_page__WEBPACK_IMPORTED_MODULE_6__["CuconsultarAsesoriasSolicitadasDetallesPage"]]
        })
    ], CuconsultarAsesoriasSolicitadasDetallesPageModule);
    return CuconsultarAsesoriasSolicitadasDetallesPageModule;
}());



/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-item>\r\n    <ion-label stacked class=\"my-subtittle\">Consultar Asesorias Solicitadas</ion-label>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let listaAsesorias of asesorias\" justify-content-start>\r\n      <ion-col size=\"12\">\r\n        <ion-card color=\"primary\">\r\n          <ion-col> Detalles\r\n            <ion-item>\r\n              Fecha respuesta: \r\n              <ion-label class=\"my-label\"> {{listaAsesorias.fechaRespuesta}}</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              Hora respuesta: \r\n              <ion-label class=\"my-label\"> {{listaAsesorias.horaRespuesta}}</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              Nombre monitor: \r\n              <ion-label class=\"my-label\"> {{listaAsesorias.nombreMonitor}} {{listaAsesorias.apellidoMonitor}}</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              Correo monitor: \r\n              <ion-label class=\"my-label\"> {{listaAsesorias.correo}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button expand=\"full\" size=\"small\" color=\"dark\" (click)=\"regresar()\">\r\n      <ion-icon name=\"send\"></ion-icon>Regresar\r\n    </ion-button>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  background: #abc; }\n\n.my-label {\n  font-family: 'Lobster'; }\n\n.my-subtittle {\n  font-family: 'Lobster';\n  text-align: center; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vjb25zdWx0YXItYXNlc29yaWFzLXNvbGljaXRhZGFzLWRldGFsbGVzL0M6XFxVc2Vyc1xcc2VyZ2lvYW5kcmVzXFxEZXNrdG9wXFxCZU1vbml0b3JNb3ZpbE9yaWdpbmFsXFxCZU1vbml0b3JNb3ZpbC0xL3NyY1xcYXBwXFxjdWNvbnN1bHRhci1hc2Vzb3JpYXMtc29saWNpdGFkYXMtZGV0YWxsZXNcXGN1Y29uc3VsdGFyLWFzZXNvcmlhcy1zb2xpY2l0YWRhcy1kZXRhbGxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3Vjb25zdWx0YXItYXNlc29yaWFzLXNvbGljaXRhZGFzLWRldGFsbGVzL2N1Y29uc3VsdGFyLWFzZXNvcmlhcy1zb2xpY2l0YWRhcy1kZXRhbGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJjO1xyXG4gIH1cclxuICBcclxuICAubXktbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICB9XHJcblxyXG4gIC5teS1zdWJ0aXR0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5teS1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ2xvYnN0ZXInO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CuconsultarAsesoriasSolicitadasDetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuconsultarAsesoriasSolicitadasDetallesPage", function() { return CuconsultarAsesoriasSolicitadasDetallesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asesoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asesoria.service */ "./src/app/asesoria.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var CuconsultarAsesoriasSolicitadasDetallesPage = /** @class */ (function () {
    function CuconsultarAsesoriasSolicitadasDetallesPage(navCtrl, storage, alertController, asesoriaService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.asesoriaService = asesoriaService;
        /**
         * Estructura real de las asesorías detalladas
         */
        this.asesorias = [{
                fechaRespuesta: "",
                horaRespuesta: "",
                nombreMonitor: "",
                apellidoMonitor: "",
                correo: ""
            }];
        storage.get('idAsesoria').then(function (parameter) {
            console.log(parameter);
            _this.idAsesoria = parameter;
            _this.cargarDatos();
        });
    }
    CuconsultarAsesoriasSolicitadasDetallesPage.prototype.ngOnInit = function () {
    };
    CuconsultarAsesoriasSolicitadasDetallesPage.prototype.noDatos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'Lo sentimos, esta asesoría aun no tiene una respuesta',
                            buttons: ['Close']
                        })];
                    case 1:
                        alert = _a.sent();
                        this.navCtrl.navigateRoot('/cuconsultar-asesorias-solicitadas');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Regresar a la vista de las solicitudes registradas
       */
    CuconsultarAsesoriasSolicitadasDetallesPage.prototype.regresar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateForward(['/cuconsultar-asesorias-solicitadas']);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Inicializa la lista de asesorias detalladas del estudainte
     * Consumiendo el webservice
     */
    CuconsultarAsesoriasSolicitadasDetallesPage.prototype.cargarDatos = function () {
        var _this = this;
        this.asesoriaService.getDetallesAsesoria(this.idAsesoria).subscribe(function (data) {
            console.log(data);
            if (Object.values(data).length == 0) {
                _this.noDatos();
            }
            else {
                _this.asesorias = Object.values(data);
            }
        }, (function (error) {
            console.log(error);
        }));
    };
    CuconsultarAsesoriasSolicitadasDetallesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuconsultar-asesorias-solicitadas-detalles',
            template: __webpack_require__(/*! ./cuconsultar-asesorias-solicitadas-detalles.page.html */ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.html"),
            styles: [__webpack_require__(/*! ./cuconsultar-asesorias-solicitadas-detalles.page.scss */ "./src/app/cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _asesoria_service__WEBPACK_IMPORTED_MODULE_3__["AsesoriaService"]])
    ], CuconsultarAsesoriasSolicitadasDetallesPage);
    return CuconsultarAsesoriasSolicitadasDetallesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cuconsultar-asesorias-solicitadas-detalles-cuconsultar-asesorias-solicitadas-detalles-module.js.map