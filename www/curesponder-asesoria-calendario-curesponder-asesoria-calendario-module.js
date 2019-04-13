(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curesponder-asesoria-calendario-curesponder-asesoria-calendario-module"],{

/***/ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CuresponderAsesoriaCalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuresponderAsesoriaCalendarioPageModule", function() { return CuresponderAsesoriaCalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _curesponder_asesoria_calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curesponder-asesoria-calendario.page */ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.ts");







var routes = [
    {
        path: '',
        component: _curesponder_asesoria_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CuresponderAsesoriaCalendarioPage"]
    }
];
var CuresponderAsesoriaCalendarioPageModule = /** @class */ (function () {
    function CuresponderAsesoriaCalendarioPageModule() {
    }
    CuresponderAsesoriaCalendarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_curesponder_asesoria_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CuresponderAsesoriaCalendarioPage"]]
        })
    ], CuresponderAsesoriaCalendarioPageModule);
    return CuresponderAsesoriaCalendarioPageModule;
}());



/***/ }),

/***/ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-item>\r\n        <ion-label stacked class=\"my-header\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/icon/tittle.png\"> BeMonitor Móvil\r\n          </ion-avatar>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <ion-item>\r\n      <ion-label stacked class=\"my-subtittle\">Responder Asesoria</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"my-label\">\r\n        <ion-icon name=\"calendar\"></ion-icon>Fecha:\r\n      </ion-label>\r\n      <ion-datetime name=\"fechaAsesoria\" display-format=\"MMM DD, YYYY\" [(ngModel)]=\"myDate\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"my-label\">\r\n        <ion-icon name=\"alarm\">\r\n        </ion-icon>Hora:\r\n      </ion-label>\r\n      <ion-datetime name=\"horaAsesoria\" display-format=\"HH:mm\" [(ngModel)]=\"myTime\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-button expand=\"full\" size=\"small\" color=\"dark\" (click)=\"guardarDatos(myDate,myTime)\">\r\n      <ion-icon name=\"send\"></ion-icon>Responder\r\n    </ion-button>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label {\n  font-family: 'Lobster'; }\n\n.my-subtittle {\n  font-family: 'Lobster';\n  text-align: center; }\n\n.my-header {\n  font-family: 'lobster';\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyZXNwb25kZXItYXNlc29yaWEtY2FsZW5kYXJpby9DOlxcVXNlcnNcXHNlcmdpb2FuZHJlc1xcRGVza3RvcFxcQmVNb25pdG9yTW92aWxPcmlnaW5hbFxcQmVNb25pdG9yTW92aWwtMS9zcmNcXGFwcFxcY3VyZXNwb25kZXItYXNlc29yaWEtY2FsZW5kYXJpb1xcY3VyZXNwb25kZXItYXNlc29yaWEtY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1cmVzcG9uZGVyLWFzZXNvcmlhLWNhbGVuZGFyaW8vY3VyZXNwb25kZXItYXNlc29yaWEtY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICB9XHJcblxyXG4gIC5teS1zdWJ0aXR0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5teS1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ2xvYnN0ZXInO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: CuresponderAsesoriaCalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuresponderAsesoriaCalendarioPage", function() { return CuresponderAsesoriaCalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asesoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asesoria.service */ "./src/app/asesoria.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var CuresponderAsesoriaCalendarioPage = /** @class */ (function () {
    function CuresponderAsesoriaCalendarioPage(navCtrl, storage, alertController, asesoriaService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.asesoriaService = asesoriaService;
        storage.get('idAsesoria').then(function (parameter) {
            console.log(parameter);
            _this.idAsesoria = parameter;
        });
    }
    /**
     * Recibir y gurdar los datos brindados por el usuario en la vista
     * @param fechaA Fecha seleccionada por el monitor para brindar la asesoria
     * @param hora Hota selecionada por el monitor para brindar la asesoria
     */
    CuresponderAsesoriaCalendarioPage.prototype.guardarDatos = function (fechaA, hora) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (fechaA != undefined && hora != undefined) {
                    this.fechaAsesoria = fechaA;
                    this.horaAsesoria = hora;
                    console.log(this.fechaAsesoria);
                    console.log(this.horaAsesoria);
                    console.log(this.idAsesoria);
                    this.asesoriaService.addRespuesta(1, 1701122317, this.fechaAsesoria, this.horaAsesoria).subscribe(function (data) {
                        console.log(data);
                        _this.crearRespuestaCorrecta();
                    }, (function (error) {
                        console.log(error);
                    }));
                }
                else {
                    this.crearRespuestaIncorrecta();
                }
                return [2 /*return*/];
            });
        });
    };
    CuresponderAsesoriaCalendarioPage.prototype.ngOnInit = function () {
    };
    CuresponderAsesoriaCalendarioPage.prototype.crearRespuestaCorrecta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'Tu respuesta a quedado registrada',
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
    CuresponderAsesoriaCalendarioPage.prototype.crearRespuestaIncorrecta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nota',
                            message: 'Debes seleccionar una fecha y una hora',
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
    CuresponderAsesoriaCalendarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curesponder-asesoria-calendario',
            template: __webpack_require__(/*! ./curesponder-asesoria-calendario.page.html */ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.html"),
            styles: [__webpack_require__(/*! ./curesponder-asesoria-calendario.page.scss */ "./src/app/curesponder-asesoria-calendario/curesponder-asesoria-calendario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _asesoria_service__WEBPACK_IMPORTED_MODULE_3__["AsesoriaService"]])
    ], CuresponderAsesoriaCalendarioPage);
    return CuresponderAsesoriaCalendarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=curesponder-asesoria-calendario-curesponder-asesoria-calendario-module.js.map