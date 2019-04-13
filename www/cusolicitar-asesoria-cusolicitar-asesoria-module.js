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







var CUSolicitarAsesoriaPageModule = /** @class */ (function () {
    function CUSolicitarAsesoriaPageModule() {
    }
    CUSolicitarAsesoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _cusolicitar_asesoria_page__WEBPACK_IMPORTED_MODULE_6__["CUSolicitarAsesoriaPage"]
                    }
                ])
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"medium\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label stacked class=\"my-subtittle\">Solicitar Asesoria</ion-label>\r\n          </ion-item>\r\n          <form novalidate [formGroup]=\"form\">\r\n            <ion-item>\r\n              <ion-label stacked class=\"my-label\">Asignatura</ion-label>\r\n              <ion-select formControlName=\"asignaturaA\">\r\n                <ion-select-option value=\"G8F0080\" checked=\"true\">Redes de computadores III</ion-select-option>\r\n                <ion-select-option value=\"G8F0059\">Análisis y diseño de algoritmos</ion-select-option>\r\n                <ion-select-option value=\"G8F0068\">Ingenieria de software III</ion-select-option>\r\n              </ion-select>\r\n              <div>\r\n                <ng-container *ngFor=\"let validation of validation_messages.asignaturaA\">\r\n                  <div *ngIf=\"form.get('asignaturaA').hasError(validation.type)\">\r\n                    <p>{{validation.message}}</p>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label stacked class=\"my-label\">Tema</ion-label>\r\n              <ion-input placeholder=\"...\" formControlName=\"temaA\"></ion-input>\r\n            </ion-item>\r\n            <div>\r\n              <ng-container *ngFor=\"let validation of validation_messages.temaA\">\r\n                <div *ngIf=\"form.get('temaA').hasError(validation.type)\">\r\n                  <p>{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <ion-button expand=\"full\" size=\"small\" color=\"dark\" (click)=\"save()\">\r\n              <ion-icon name=\"send\"></ion-icon>Solicitar\r\n            </ion-button>\r\n          </form>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-content>"

/***/ }),

/***/ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label {\n  font-family: 'Lobster'; }\n\n.my-subtittle {\n  font-family: 'Lobster';\n  text-align: center; }\n\np {\n  font-size: 0.8em;\n  color: #d2d2d2; }\n\nion-slides {\n  height: 100%; }\n\nion-slide {\n  display: block; }\n\nion-label, .select-text {\n  margin-left: 10px; }\n\n.invalid {\n  border: 1px solid #ea6153; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vzb2xpY2l0YXItYXNlc29yaWEvQzpcXFVzZXJzXFxzZXJnaW9hbmRyZXNcXERlc2t0b3BcXEJlTW9uaXRvck1vdmlsT3JpZ2luYWxcXEJlTW9uaXRvck1vdmlsLTEvc3JjXFxhcHBcXGN1c29saWNpdGFyLWFzZXNvcmlhXFxjdXNvbGljaXRhci1hc2Vzb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1c29saWNpdGFyLWFzZXNvcmlhL2N1c29saWNpdGFyLWFzZXNvcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xyXG4gIH1cclxuXHJcbiAgLm15LXN1YnRpdHRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICNkMmQyZDI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tbGFiZWwsIC5zZWxlY3QtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1MztcclxufVxyXG5cclxuLm15LWhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnbG9ic3Rlcic7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asesoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asesoria.service */ "./src/app/asesoria.service.ts");





var CUSolicitarAsesoriaPage = /** @class */ (function () {
    function CUSolicitarAsesoriaPage(formBuilder, asesoriaService, alertController, navCtrl) {
        this.formBuilder = formBuilder;
        this.asesoriaService = asesoriaService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        // Validation error messages that will be displayed for each form field with errors.
        this.validation_messages = {
            'temaA': [
                { type: 'pattern', message: 'Debe ingresar un tema para la asesoría' }
            ],
            'asignaturaA': [
                { type: 'pattern', message: 'Debe ingresar una asignatura para la asesoría' }
            ]
        };
        // Create the form and define fields and validators.
        this.form = this.formBuilder.group({
            asignaturaA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Z]+[0-9]+[A-Z]+[0-9]+')],
            temaA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-z0-9]+([A-z0-9 ]*)*[A-z0-9]')]
        });
    }
    /**
     * Método para generar el alter correcta
     */
    CUSolicitarAsesoriaPage.prototype.alertCorrecta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Éxito',
                            message: 'Tu asesoría ha quedado registrada, pronto te responderá alguno de nuestros monitores',
                            buttons: ['Close']
                        })];
                    case 1:
                        alert = _a.sent();
                        this.navCtrl.navigateRoot('/home');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Método para generar el alter incorrecta
     */
    CUSolicitarAsesoriaPage.prototype.alertIncorren = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'No pudimos registrar tu asesoria, intentalo mas tarde',
                            buttons: ['Close']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
     * Save form values.
     */
    CUSolicitarAsesoriaPage.prototype.save = function () {
        var _this = this;
        if ((this.form.valid) && (this.form.get('temaA').value != '')) {
            // Save your values, using this.form.get('myField').value;
            this.asignaturaAsesoria = this.form.get('asignaturaA').value;
            this.temaAsesoria = this.form.get('temaA').value;
            console.log("datos obtenidos");
            console.log(this.asignaturaAsesoria);
            console.log(this.temaAsesoria);
            var codigoEstudiante = 1701310061;
            this.asesoriaService.addAsesoria(codigoEstudiante, this.asignaturaAsesoria, this.temaAsesoria).subscribe(function (data) {
                console.log(data);
                _this.alertCorrecta();
            }, (function (error) {
                console.log(error);
                _this.alertIncorren();
            }));
        }
    };
    CUSolicitarAsesoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cusolicitar-asesoria',
            template: __webpack_require__(/*! ./cusolicitar-asesoria.page.html */ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.html"),
            styles: [__webpack_require__(/*! ./cusolicitar-asesoria.page.scss */ "./src/app/cusolicitar-asesoria/cusolicitar-asesoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _asesoria_service__WEBPACK_IMPORTED_MODULE_4__["AsesoriaService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CUSolicitarAsesoriaPage);
    return CUSolicitarAsesoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=cusolicitar-asesoria-cusolicitar-asesoria-module.js.map