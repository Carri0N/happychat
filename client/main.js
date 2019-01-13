(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalchat/globalchat.component */ "./src/app/globalchat/globalchat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'chat', component: _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_2__["GlobalchatComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin.service */ "./src/app/signin.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./globalchat/globalchat.component */ "./src/app/globalchat/globalchat.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-display/chat-display.component */ "./src/app/chat-display/chat-display.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _mood_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mood.service */ "./src/app/mood.service.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
/* harmony import */ var _roomselect_roomselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roomselect/roomselect.component */ "./src/app/roomselect/roomselect.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _file_display_file_display_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./file-display/file-display.component */ "./src/app/file-display/file-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_9__["GlobalchatComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_12__["ChatDisplayComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_13__["ChatFormComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_15__["UserlistComponent"],
                _roomselect_roomselect_component__WEBPACK_IMPORTED_MODULE_16__["RoomselectComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["Dialog"],
                _file_display_file_display_component__WEBPACK_IMPORTED_MODULE_30__["FileDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _mood_service__WEBPACK_IMPORTED_MODULE_14__["MoodService"], _signup_service__WEBPACK_IMPORTED_MODULE_6__["SignupService"], _signin_service__WEBPACK_IMPORTED_MODULE_7__["SigninService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["Dialog"], _file_display_file_display_component__WEBPACK_IMPORTED_MODULE_30__["FileDisplayComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-display/chat-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#msg{\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    margin-left: 10px;\r\n    padding: 0px;\r\n}\r\n#msg li {\r\n    border-bottom: solid;\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: lightgrey;\r\n    margin-right: 5px;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n#head{\r\n    font-size: 12px;\r\n    color: grey;\r\n}\r\n#timestamp{\r\n    margin-right: 5px;\r\n    float: left;\r\n}\r\n#name {\r\n    float: left;\r\n}\r\n#mood {\r\n    float:right;\r\n}\r\n#message {\r\n    font-family: \"Verdana\", Times, serif;\r\n    color: black;\r\n    font-size: 18px;\r\n    float: left;\r\n}\r\n#markedMessage {\r\n    float: left;\r\n    font-family: \"Verdana\", Times, serif;\r\n    color: lightgrey;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n}\r\n#img {\r\n    margin-right: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/chat-display/chat-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messageContainer\">\n  <ul id=\"msg\">\n    <li *ngFor=\"let msg of messages\">\n      <div style=\"float: left\">\n        <div *ngIf=\"msg.img == null && msg.code == 3\">\n          <img id=\"img\" src=\"assets/image/default-user.png\">\n        </div>\n        <div *ngIf=\"msg.img != null && msg.code == 3\">\n          <img id=\"img\" [src]=\"'data:image/jpg;base64,'+msg.img\" />\n        </div>\n      </div>\n      <div style=\"float: left\">\n        <div id=\"head\">\n          <div id=\"timestamp\"><strong>{{msg.timestamp}}</strong></div>\n          <div id=\"name\"><strong>{{msg.user}}</strong></div>\n          <div id=\"mood\">{{msg.id}}</div>\n        </div>\n        <div style=\"clear: both\"></div>\n\n        <div *ngIf=\"msg.code == 3\" id=\"message\">{{msg.msg}}</div>\n        <div *ngIf=\"msg.code != 3\" id=\"markedMessage\">{{msg.msg}}</div>\n\n        <div style=\"clear: both\"></div>\n      </div>\n      <div *ngIf=\"msg.isFile\" style=\"float:left; margin-left: 10px\">\n        <mat-spinner *ngIf=\"!msg.file\"></mat-spinner>\n        <button mat-icon-button *ngIf=\"msg.file\" (click)=\"openDialog(msg.file)\">\n          <mat-icon *ngIf=\"msg.file.split(':')[1].startsWith('image')\">panorama</mat-icon>\n          <mat-icon *ngIf=\"msg.file.split(':')[1].startsWith('audio')\">audiotrack</mat-icon>\n          <mat-icon *ngIf=\"msg.file.split(':')[1].startsWith('video')\">videocam</mat-icon>\n          <mat-icon *ngIf=\"!msg.file.split(':')[1].startsWith('video')&&!msg.file.split(':')[1].startsWith('audio')&&!msg.file.split(':')[1].startsWith('image')\">attach_file</mat-icon>\n        </button>\n      </div>\n      <div style=\"clear: both\"></div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/chat-display/chat-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.ts ***!
  \********************************************************/
/*! exports provided: ChatDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDisplayComponent", function() { return ChatDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _file_display_file_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-display/file-display.component */ "./src/app/file-display/file-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDisplayComponent = /** @class */ (function () {
    function ChatDisplayComponent(dialog) {
        this.dialog = dialog;
    }
    ChatDisplayComponent.prototype.ngOnInit = function () {
    };
    ChatDisplayComponent.prototype.openDialog = function (file) {
        var dialogRef = this.dialog.open(_file_display_file_display_component__WEBPACK_IMPORTED_MODULE_2__["FileDisplayComponent"], {
            data: file,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatDisplayComponent.prototype, "messages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatDisplayComponent.prototype, "userlist", void 0);
    ChatDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-display',
            template: __webpack_require__(/*! ./chat-display.component.html */ "./src/app/chat-display/chat-display.component.html"),
            styles: [__webpack_require__(/*! ./chat-display.component.css */ "./src/app/chat-display/chat-display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ChatDisplayComponent);
    return ChatDisplayComponent;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n#filebutton{\r\n    margin-top: 0px;\r\n    width: 20px;\r\n    height: 100%;\r\n}\r\n#submit{\r\n    width: 40px;\r\n    height: 100%;\r\n    margin-top: 0px;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\ninput{\r\n    height: 100%;\r\n    width: 84%;\r\n    float: left;\r\n}\r\n#container{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-left: 4px;\r\n}\r\n#file{\r\n    width: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" #chatForm=\"ngForm\">\n    \n    <input data-emojiable=\"true\" [(ngModel)]=\"messageText\" class=\"form-control\" type=\"text\" id=\"input\" name=\"msg\" placeholder=\"{{filename}}\"\n      required>\n    <button mat-stroked-button type=\"submit\" id=\"submit\">\n      <mat-icon class=\"icon\">send</mat-icon>\n    </button>\n    <label id=\"filebutton\" for=\"file\">\n      <button mat-stroked-button style=\"pointer-events: none;\">\n        <mat-icon class=\"icon\" style=\"pointer-events: none;\">attach_file</mat-icon>\n      </button>\n    </label>\n    <input type=\"file\" name=\"file\" id=\"file\" (change)=\"onChange($event)\" />\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent() {
        this.sendEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messageText = "";
        this.file = null;
        this.filename = "Enter Message";
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.onSubmit = function () {
        if (this.messageText != "") {
            this.sendEvent.emit({ text: this.messageText, file: this.file });
            this.messageText = "";
            console.log(this.file);
            this.file = null;
            this.filename = "Enter Message";
        }
    };
    ChatFormComponent.prototype.onChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.filename = file.name;
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.file = reader_1.result; };
            reader_1.readAsDataURL(file);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatFormComponent.prototype, "sendEvent", void 0);
    ChatFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/user */ "./src/app/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(ts) {
        this.ts = ts;
        this.userlist = [];
        this.socket = this.ts.getSocket();
    }
    /**
     * adds user to chat
     * @param room(chat,user)
     */
    ChatService.prototype.join = function (room) {
        this.socket.emit('join', room);
    };
    /**
     * emits message in specific chatroom
     * @param chatroom
     * @param message
     */
    ChatService.prototype.sendMessage = function (message, file) {
        if (!file) {
            this.socket.emit('message', { message: message, isFile: false });
        }
        else {
            this.socket.emit('message', {
                message: message,
                isFile: true,
                data: file,
                fileSize: file.size
            });
        }
    };
    /**
     * requests list of all user from server
     */
    ChatService.prototype.getList = function () {
        this.socket.emit('listmsg');
    };
    /**
     * lets everybody know that you left
     */
    ChatService.prototype.logout = function () {
        this.socket.emit('leave');
    };
    /**
     * recives the messages
     */
    ChatService.prototype.getMessages = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('message', function (message) {
                if (message.code == 1) {
                    _this.userlist.push(new _classes_user__WEBPACK_IMPORTED_MODULE_3__["User"](message.username, null));
                }
                observer.next(message);
            });
        });
    };
    ChatService.prototype.getMessageFile = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('messageFile', function (data) {
                observer.next(data);
            });
        });
    };
    ChatService.prototype.getAllUsers = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('list', function (list) {
                observer.next(list);
            });
        });
    };
    ChatService.prototype.getUserPic = function (user) {
        this.socket.emit('getuserpic', user);
    };
    ChatService.prototype.getUserPics = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('userpic', function (info) {
                observer.next(info);
            });
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/classes/message.ts":
/*!************************************!*\
  !*** ./src/app/classes/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(id, isFile, user, timestamp, msg, code) {
        this.img = null;
        this.file = null;
        this.user = user;
        this.timestamp = timestamp;
        this.msg = msg;
        this.code = code;
        this.isFile = isFile;
        this.id = id;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, image) {
        this.name = name;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/file-display/file-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/file-display/file-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    width: 480px;\r\n    height: 320px;\r\n}"

/***/ }),

/***/ "./src/app/file-display/file-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/file-display/file-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img *ngIf=\"data.split(':')[1].startsWith('image')\" [src]=\"data\" alt=\"---\" style=\"width: 150px;height: 150px;\" />\n  <audio *ngIf=\"data.split(':')[1].startsWith('audio')\" controls [src]=\"data\"></audio>\n  <video *ngIf=\"data.split(':')[1].startsWith('video')\" controls [src]=\"data\"></video>\n</div>\n<button mat-raised-button (click)=\"save()\"> Save </button>"

/***/ }),

/***/ "./src/app/file-display/file-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/file-display/file-display.component.ts ***!
  \********************************************************/
/*! exports provided: FileDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDisplayComponent", function() { return FileDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FileDisplayComponent = /** @class */ (function () {
    function FileDisplayComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FileDisplayComponent.prototype.ngOnInit = function () {
    };
    FileDisplayComponent.prototype.save = function () {
        download(this.data, "content", this.data.split(',')[0].split(':')[1]);
    };
    FileDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-display',
            template: __webpack_require__(/*! ./file-display.component.html */ "./src/app/file-display/file-display.component.html"),
            styles: [__webpack_require__(/*! ./file-display.component.css */ "./src/app/file-display/file-display.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], FileDisplayComponent);
    return FileDisplayComponent;
}());



/***/ }),

/***/ "./src/app/globalchat/globalchat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear {\r\n  clear: both;\r\n}\r\n\r\n#component {\r\n  height: 100%;\r\n}\r\n\r\n/* Header Styling */\r\n\r\n#info {\r\n  margin-top: 20px;\r\n  margin-left: 20px;\r\n  margin-right: 10px;\r\n  height: 10%;\r\n}\r\n\r\n#title {\r\n  float: left;\r\n}\r\n\r\n#userinfo {\r\n  color: grey;\r\n  border: solid;\r\n  border-width: 2px;\r\n  padding: 10px;\r\n  float: right;\r\n  border-radius: 5px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#userinfo:hover {\r\n  background-color: lightblue;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nh2{\r\n  margin: 0;\r\n  font-size: 20px;\r\n  padding-right: 10px;\r\n  display: table-cell;\r\n}\r\n\r\nh3{\r\n  padding-left: 10px;\r\n  border-left: solid;\r\n  border-color: grey;\r\n  border-width: 2px;\r\n  margin: 0;\r\n  font-size: 19px;\r\n  display: table-cell;\r\n}\r\n\r\n/* Form Styling */\r\n\r\n#userInputContainer {\r\n  width: 100%;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#fileButton {\r\n  float:left;\r\n  width: 3.25%;\r\n  cursor: pointer;\r\n}\r\n\r\n#fileImage{\r\n  pointer-events: none;\r\n}\r\n\r\nh6{\r\n  float:left;\r\n  width: 5%;\r\n}\r\n\r\n#file {\r\n  width: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\nform {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\nform button {\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nform input{\r\n  float: left;\r\n  width: 80%;\r\n}\r\n\r\n#chatform{\r\n  margin-top: 2px;\r\n  height: 5%;\r\n  width: 100%;\r\n}\r\n\r\n#messages{\r\n  height: 93%;\r\n  overflow: auto;\r\n  /*align-items: flex-start;*/\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  min-height: 0px;\r\n}\r\n\r\n.window{\r\n  height: 100%;\r\n  float:left;\r\n}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 89%;\r\n}\r\n\r\n#room{\r\n  width: 14%;\r\n  float: left;\r\n}\r\n\r\n#chat{\r\n  border-left: 1px solid lightgrey;\r\n  border-top: 1px solid lightgrey;\r\n  width: 80%;\r\n  float: left;\r\n  margin-left: 0px;\r\n}\r\n\r\n#list{\r\n  margin: 0px;\r\n  border-top: 1px solid lightgrey;\r\n  width: 18%;\r\n  float: left;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 15px;\r\n  \r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgba(0,0,0,0);\r\n \r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(78, 156, 182, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n \r\n  border:solid;\r\n  border-width: 2px;\r\n  border-color: lightblue;\r\n} "

/***/ }),

/***/ "./src/app/globalchat/globalchat.component.html":
/*!******************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n  <div id=\"info\">\n    <div id=\"title\">\n      <h1>HappyChat</h1>\n    </div>\n    <div title=\"Logout\" id=\"userinfo\" (click)=\"backToLogin()\">\n      <h2>{{username}}</h2><h3>Chat: {{chat}}</h3>\n    </div>\n  </div>\n  <div class=\"clear\"></div>\n\n  <div id=\"main\">\n\n    <app-userlist (sendEvent)=\"userlist=$event\" class=\"window\" id=\"list\"></app-userlist>\n\n    <div class=\"window\" id=\"chat\">\n      <div id=\"messages\">\n        <app-chat-display [messages]=\"displayMessages\"></app-chat-display>\n      </div>\n      <div id=\"chatform\">\n        <app-chat-form (sendEvent)=\"sendMessage($event)\"></app-chat-form>\n      </div>\n    </div>\n   \n    \n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/globalchat/globalchat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.ts ***!
  \****************************************************/
/*! exports provided: GlobalchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalchatComponent", function() { return GlobalchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/message */ "./src/app/classes/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalchatComponent = /** @class */ (function () {
    function GlobalchatComponent(router, chatservice) {
        this.router = router;
        this.chatservice = chatservice;
        this.userlist = [];
        this.displayMessages = [];
        //moodservice: MoodService;
        this.chat = 'global';
        //this.moodservice = new MoodService();
    }
    /**
     * checks valid session and joins user to global chat
     * subscribes to chat service to get updates on messages
     */
    GlobalchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatservice.join(this.chat);
        this.chatservice.getMessages().subscribe(function (message) {
            var m = new _classes_message__WEBPACK_IMPORTED_MODULE_3__["Message"](message.id, message.isFile, message.user, message.timestamp, message.message, message.code);
            var found = false;
            var i = 0;
            while (i < _this.userlist.length && !found) {
                if (_this.userlist[i].name == message.user.split(' > ')[0]) {
                    m.img = _this.userlist[i].image;
                    found = true;
                }
                i++;
            }
            _this.displayMessages.push(m);
        });
        this.chatservice.getMessageFile().subscribe(function (messageFile) {
            _this.displayMessages.forEach(function (element) {
                if (element.id == messageFile.id) {
                    element.file = messageFile.file;
                }
            });
        });
    };
    GlobalchatComponent.prototype.sendMessage = function ($event) {
        var input = $event;
        this.chatservice.sendMessage(input.text, input.file);
    };
    /**
     * Handles file inputs TODO
     */
    GlobalchatComponent.prototype.onChange = function (event) {
        var filename = event.target.value.split('\\')[event.target.value.split('\\').length - 1];
    };
    GlobalchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-globalchat',
            template: __webpack_require__(/*! ./globalchat.component.html */ "./src/app/globalchat/globalchat.component.html"),
            styles: [__webpack_require__(/*! ./globalchat.component.css */ "./src/app/globalchat/globalchat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], GlobalchatComponent);
    return GlobalchatComponent;
}());



/***/ }),

/***/ "./src/app/login-form/dialog.html":
/*!****************************************!*\
  !*** ./src/app/login-form/dialog.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng *ngIf=\"!hide\">\r\n    <div>\r\n        <h1 style=\"margin:0px;font-size: 26px\">Welcome {{data.name}}!</h1>\r\n        <h1 style=\"margin:5px;margin-left:0px;font-size: 24px\">We noticed you're new.</h1>\r\n    </div>\r\n    <mat-divider style=\"margin:10px;margin-left:0px\"></mat-divider>\r\n    <div>\r\n\r\n        <label for=\"file\" style=\"cursor: pointer;\">\r\n            <button mat-raised-button style=\"pointer-events: none;\">Select Picture</button>\r\n        </label>\r\n        <mat-icon style=\"margin-left: 5px; float: right;\" *ngIf=\"validImage != undefined\" matSuffix>{{validImage ?\r\n            'done' : 'highlight_off'}}</mat-icon>\r\n        <input accept=\"image/x-png,image/jpeg\" id=\"file\" type=\"file\" style=\"display: none\" (change)=\"onChange($event);\" />\r\n        <div *ngIf=\"image\">\r\n            <img id=\"image\" [src]=\"image\" alt=\"---\" style=\"float:left; width: 150px;height: 150px; border: 1px solid lightgray\" />\r\n            <div *ngIf=\"validImage\" style=\"float:left;margin-left: 5px;\">\r\n                <strong>{{gender}}</strong>\r\n                <br>\r\n                <strong>{{age}}</strong>\r\n            </div>\r\n        </div>\r\n\r\n        <mat-progress-bar mode=\"query\" style=\"margin-top: 10px;\" *ngIf=\"validateImage\" value={{uploadProgress}}></mat-progress-bar>\r\n    </div>\r\n    <div style=\"clear: both\"></div>\r\n    <mat-divider style=\"margin:10px;margin-left:0px\"></mat-divider>\r\n    <div>\r\n        <mat-slide-toggle [(ngModel)]=\"mood\">Show Mood</mat-slide-toggle>\r\n    </div>\r\n\r\n    <mat-divider style=\"margin:10px;margin-left:0px\"></mat-divider>\r\n    \r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n        <button mat-button (click)=\"onSubmit()\" cdkFocusInitial>Sign Up</button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"hide\">\r\n    <mat-spinner></mat-spinner>\r\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginPart{\r\n    margin: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n#loginContainer {\r\n    width: 250px;\r\n    margin: 0 auto;\r\n    align-content: center;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\">\n  <h1 *ngIf=\"reg\">Registration successfull</h1>\n  <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n    \n    <div id=\"userpass\" class=\"loginPart\">\n\n      <mat-form-field>\n        <input name=\"user\" [(ngModel)]=\"username\" matInput placeholder=\"Username\" required>\n        <mat-hint>{{userFeedback}}</mat-hint>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input name=\"pass\" [(ngModel)]=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        <mat-hint>{{passFeedback}}</mat-hint>\n      </mat-form-field>\n\n      <button id=\"submit\" mat-raised-button type=\"submit\">Submit</button>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent, Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signin.service */ "./src/app/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, dialog, signin) {
        this.router = router;
        this.dialog = dialog;
        this.signin = signin;
        this.redirectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.username = "";
        this.password = "";
        this.reg = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signin.loginFeedback().subscribe(function (result) {
            _this.feedback(result);
        });
    };
    /**
     * Calls server on form submission.
     */
    LoginFormComponent.prototype.onSubmit = function () {
        this.signin.login(this.username, this.password);
    };
    /**
     * Evaluates the response of the server after an login-form submission.
     * @param result
     */
    LoginFormComponent.prototype.feedback = function (result) {
        var code = result.code;
        var msg = result.message;
        switch (code) {
            case 0:
                break;
            case 1:
                this.redirectEvent.emit();
                break;
            case 2:
                this.openDialog();
                break;
            case 3:
                this.passFeedback = msg;
                this.userFeedback = "";
                break;
            case 4:
                this.userFeedback = msg;
                this.passFeedback = "";
                break;
            case 5:
                this.userFeedback = "Invalid Username";
                this.passFeedback = "Invalid Password";
                break;
            case 6:
                this.userFeedback = "Username Taken";
                break;
            default:
                break;
        }
    };
    /**
     * Opens the signup dialog.
     */
    LoginFormComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(Dialog, {
            data: { name: this.username, pass: this.password },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.reg = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "redirectEvent", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var Dialog = /** @class */ (function () {
    function Dialog(signup, sb, dialogRef, data) {
        this.signup = signup;
        this.sb = sb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.hide = false;
        this.mood = false;
        this.validateImage = false;
    }
    Dialog.prototype.ngOnInit = function () {
        var _this = this;
        this.signup.fileUploadProgress().subscribe(function (result) {
            _this.uploadProgress = (result.bytesLoaded / result.file.size) * 100;
        });
        this.signup.fileValidationResult().subscribe(function (result) {
            _this.validateImage = false;
            _this.validImage = result.result;
            if (result.feedback.images[0].faces[0] != undefined) {
                _this.gender = result.feedback.images[0].faces[0].gender.gender;
                _this.age = result.feedback.images[0].faces[0].age.min + " - " + result.feedback.images[0].faces[0].age.max;
            }
            else {
                _this.gender = "";
                _this.age = "";
            }
        });
        this.signup.registerFeedback().subscribe(function (result) {
            if (result.code = 1) {
                _this.dialogRef.close(true);
            }
            else {
                _this.hide = !_this.hide;
            }
        });
    };
    Dialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Dialog.prototype.onSubmit = function () {
        if ((this.image && this.validImage) || !this.image) {
            this.signup.register(this.data.name, this.data.pass, this.mood);
            this.hide = true;
        }
        else {
            this.sb.open("Choose Valid Picture", "Close", {
                duration: 10000,
            });
        }
    };
    Dialog.prototype.onChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.image = reader_1.result; };
            reader_1.readAsDataURL(file);
            this.validateImage = true;
            this.signup.validateImage(file);
        }
    };
    Dialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.html */ "./src/app/login-form/dialog.html"),
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], Dialog);
    return Dialog;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginContainer {\r\n    margin-top: 10%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"loginContainer\">\n    <app-login-form (redirectEvent)=\"redirect()\"></app-login-form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, zone) {
        this.router = router;
        this.zone = zone;
        this.buttonName = 'Submit';
        this.inputWarning = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['/chat']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mood.service.ts":
/*!*********************************!*\
  !*** ./src/app/mood.service.ts ***!
  \*********************************/
/*! exports provided: MoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodService", function() { return MoodService; });
var MoodService = /** @class */ (function () {
    function MoodService() {
    }
    MoodService.prototype.getMood = function (input, messageObject) {
        fetch("/tone", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'cors'
            },
            body: JSON.stringify({
                texts: [input, ""]
            })
        })
            .then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
            .then(function (response) {
            //console.log("response:" +  JSON.stringify(response));
            if (response.mood) {
                messageObject.mood = response.mood;
            }
        });
    };
    return MoodService;
}());



/***/ }),

/***/ "./src/app/roomselect/roomselect.component.css":
/*!*****************************************************!*\
  !*** ./src/app/roomselect/roomselect.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roomselect/roomselect.component.html":
/*!******************************************************!*\
  !*** ./src/app/roomselect/roomselect.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  roomselect works!\n</p>\n"

/***/ }),

/***/ "./src/app/roomselect/roomselect.component.ts":
/*!****************************************************!*\
  !*** ./src/app/roomselect/roomselect.component.ts ***!
  \****************************************************/
/*! exports provided: RoomselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomselectComponent", function() { return RoomselectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomselectComponent = /** @class */ (function () {
    function RoomselectComponent() {
    }
    RoomselectComponent.prototype.ngOnInit = function () {
    };
    RoomselectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roomselect',
            template: __webpack_require__(/*! ./roomselect.component.html */ "./src/app/roomselect/roomselect.component.html"),
            styles: [__webpack_require__(/*! ./roomselect.component.css */ "./src/app/roomselect/roomselect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomselectComponent);
    return RoomselectComponent;
}());



/***/ }),

/***/ "./src/app/signin.service.ts":
/*!***********************************!*\
  !*** ./src/app/signin.service.ts ***!
  \***********************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninService = /** @class */ (function () {
    function SigninService(ts) {
        this.ts = ts;
        this.socket = this.ts.getSocket();
    }
    SigninService.prototype.login = function (username, password) {
        this.socket.emit('signin', { user: username, pass: password });
    };
    SigninService.prototype.loginFeedback = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('signinresult', function (result) {
                observer.next(result);
            });
        });
    };
    SigninService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var socketio_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socketio-file-upload */ "./node_modules/socketio-file-upload/client.js");
/* harmony import */ var socketio_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socketio_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = /** @class */ (function () {
    function SignupService(ts) {
        var _this = this;
        this.ts = ts;
        this.socket = this.ts.getSocket();
        this.uploader = new socketio_file_upload__WEBPACK_IMPORTED_MODULE_1__(this.socket);
        this.uploader.addEventListener('complete', function (result) {
            _this.socket.emit('fileValidationResult');
        });
    }
    SignupService.prototype.register = function (username, password, mood) {
        this.socket.emit('signup', { user: username, pass: password, mood: mood });
    };
    SignupService.prototype.registerFeedback = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.socket.on('signupresult', function (result) {
                observer.next(result);
            });
        });
    };
    SignupService.prototype.validateImage = function (file) {
        this.uploader.submitFiles([file]);
    };
    SignupService.prototype.fileUploadProgress = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.uploader.addEventListener('progress', function (result) {
                observer.next(result);
            });
        });
    };
    SignupService.prototype.fileValidationResult = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.socket.on('fileValidation', function (result) {
                observer.next(result);
            });
        });
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_0__["TestService"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = /** @class */ (function () {
    function TestService(titleService) {
        var _this = this;
        this.titleService = titleService;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
        this.socket.on('id', function (result) {
            console.log(result);
            _this.titleService.setTitle(result);
        });
    }
    TestService.prototype.getSocket = function () {
        return this.socket;
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    padding: 10px;\r\n}\r\n\r\nh1{\r\n    margin:0px;\r\n    padding-bottom: 10px;\r\n    font-size: 24px;\r\n}\r\n\r\n#img {\r\n    margin-right: 10px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/userlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"header\">\n        <h1>Online Users: {{list.length}}</h1>\n    </div>\n    <mat-divider></mat-divider>\n    <mat-nav-list>\n        <mat-list-item *ngFor=\"let item of list\">\n            <div *ngIf=\"item.image == null\">\n                <img id=\"img\" src=\"assets/image/default-user.png\">\n            </div>\n            <div *ngIf=\"item.image!=null\">\n                <img id=\"img\" [src]=\"'data:image/jpg;base64,'+item.image\" />\n            </div>\n            <div id=\"user\">{{item.name}}</div>\n        </mat-list-item>\n    </mat-nav-list> \n</div>"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(service) {
        this.service = service;
        this.sendEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.list = [];
    }
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllUsers().subscribe(function (users) {
            _this.list = [];
            var userslist = users.split(';');
            userslist.pop();
            userslist.forEach(function (element) {
                _this.list.push(new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"](element, null));
                _this.service.getUserPic(element);
            });
            _this.sendEvent.emit(_this.list);
        });
        this.service.getMessages().subscribe(function (message) {
            if (message.code == 1) {
                _this.list.push(new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"](message.username, null));
                _this.service.getUserPic(message.username);
            }
            else if (message.code == 2) {
                //todo remove
            }
            _this.sendEvent.emit(_this.list);
        });
        this.service.getUserPics().subscribe(function (info) {
            _this.list.forEach(function (element) {
                if (element.name == info.user) {
                    element.image = info.img;
                    _this.sendEvent.emit(_this.list);
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserlistComponent.prototype, "sendEvent", void 0);
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CarrioN\Documents\Uni\6_Cloud Computing\ChatGit2\chatclient\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map