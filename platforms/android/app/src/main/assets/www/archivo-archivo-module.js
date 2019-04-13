(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["archivo-archivo-module"],{

/***/ "./src/app/archivo/archivo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/archivo/archivo.module.ts ***!
  \*******************************************/
/*! exports provided: ArchivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoPageModule", function() { return ArchivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _archivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archivo.page */ "./src/app/archivo/archivo.page.ts");







var routes = [
    {
        path: '',
        component: _archivo_page__WEBPACK_IMPORTED_MODULE_6__["ArchivoPage"]
    }
];
var ArchivoPageModule = /** @class */ (function () {
    function ArchivoPageModule() {
    }
    ArchivoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_archivo_page__WEBPACK_IMPORTED_MODULE_6__["ArchivoPage"]]
        })
    ], ArchivoPageModule);
    return ArchivoPageModule;
}());



/***/ }),

/***/ "./src/app/archivo/archivo.page.html":
/*!*******************************************!*\
  !*** ./src/app/archivo/archivo.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>archivo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n</ion-content>-->\r\n\r\n<h1 mat-dialog-title>TeAvalo</h1>\r\n<div mat-dialog-content>\r\n  <p>Tipo de archivo</p>\r\n  <form method=\"POST\" action=\"{{url}}{{data.id}}\" enctype=\"multipart/form-data\" #form>\r\n    <select name=\"name_file\">\r\n      <option value=\"url_documento\">Documento</option>\r\n      <option value=\"foto\">Foto de perfil</option>\r\n    </select>\r\n    \r\n    <div class=\"upload-btn-wrapper\">\r\n      <button class=\"btn btn-primary btn-sm\">Cargar documento</button>\r\n      <input type=\"file\" class=\"\" name=\"file_user\" />\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button type=\"submit\" (click)=\"form.submit()\" (click)=\"onNoClick()\">Subir archivo</button>\r\n      <button mat-button (click)=\"onNoClick()\">Cerrar</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/archivo/archivo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/archivo/archivo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdm8vYXJjaGl2by5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/archivo/archivo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/archivo/archivo.page.ts ***!
  \*****************************************/
/*! exports provided: ArchivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoPage", function() { return ArchivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArchivoPage = /** @class */ (function () {
    function ArchivoPage() {
    }
    ArchivoPage.prototype.ngOnInit = function () {
    };
    ArchivoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archivo',
            template: __webpack_require__(/*! ./archivo.page.html */ "./src/app/archivo/archivo.page.html"),
            styles: [__webpack_require__(/*! ./archivo.page.scss */ "./src/app/archivo/archivo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArchivoPage);
    return ArchivoPage;
}());



/***/ })

}]);
//# sourceMappingURL=archivo-archivo-module.js.map