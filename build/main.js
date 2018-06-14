webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryService = (function () {
    function CategoryService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.http = http;
        this.categories = [];
    }
    CategoryService.prototype.populate = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/categories", { headers: headers })
            .map(function (res) {
            if (!res.json() || !res.json().status) {
                throw { status: 401, message: "O token temporário está expirado. Deve refazer o login novamente." };
            }
            _this.categories = res.json().data;
            return res.json().data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.remove = function (item) {
        this.categories.splice(this.categories.indexOf(item), 1);
    };
    CategoryService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
], CategoryService);

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_delivery__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CartPage = (function () {
    function CartPage(nav, cartService, toastCtrl, ga, statusBar, loginService, alertCtrl) {
        this.nav = nav;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.isLogged = false;
        this.isCashBack = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Carrinho');
        // set sample data
        this.cart = cartService.getCart();
    }
    CartPage.prototype.nameItemRequired = function (item) {
        for (var i = 0; i < item.options.required.length; i++) {
            if (item.options.required[i].id === parseInt(item.itemRequired)) {
                return item.options.required[i];
            }
        }
    };
    // plus quantity
    CartPage.prototype.plusQty = function (position, item) {
        item.quantity++;
        this.cartService.updateItem(position, item);
    };
    // minus quantity
    CartPage.prototype.minusQty = function (position, item) {
        if (item.quantity > 1) {
            item.quantity--;
            this.cartService.updateItem(position, item);
        }
        else {
            this.removeItem(item);
        }
    };
    CartPage.prototype.optional = function (item) {
        var array = [];
        for (var i = 0; i < item.options.optional.length; i++) {
            if (item.options.optional[i].selected) {
                array.push(item.options.optional[i]);
            }
        }
        return array;
    };
    CartPage.prototype.removeItem = function (item) {
        this.presentConfirm(item);
    };
    CartPage.prototype.presentConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remover produto',
            message: 'Deseja remover da sua lista?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.cartService.remove(item);
                    }
                }
            ]
        });
        alert.present();
    };
    // go to the devivery page
    CartPage.prototype.formPayment = function () {
        if (this.isLogged) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__delivery_delivery__["a" /* DeliveryPage */]);
        }
        else {
            this.presentConfirmLogin();
        }
    };
    CartPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CartPage.prototype.presentConfirmLogin = function () {
        var env = this;
        var alert = this.alertCtrl.create({
            title: 'Deseja fazer login?',
            message: 'Para continuar é necessário realizar o login.',
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        env.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                }]
        });
        alert.present();
    };
    CartPage.prototype.getTotal = function (cart) {
        return this.cartService.getTotal().toFixed(2);
    };
    CartPage.prototype.getFrete = function (frete) {
        if (isNaN(frete)) {
            return frete;
        }
        else {
            return "R$ " + frete.toFixed(2);
        }
    };
    CartPage.prototype.getDiscount = function (discount) {
        if (discount.discount_type === "1" || discount.discount_type === true) {
            return discount.value + "%";
        }
        else {
            return "R$ " + discount.value;
        }
    };
    CartPage.prototype.ionViewDidEnter = function () {
        this.isCashBack = this.cart.cashback && this.cart.cashback > 0 ? true : false;
        this.isLogged = this.loginService.isLogged();
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/cart/cart.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          Carrinho\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Carrinho\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n\n  <div padding text-center>\n    <h2>{{ cart.orders.restaurant.name }}</h2>\n    <div *ngIf="cart.flag_delivery">\n      Tempo de entrega: • {{ cart.orders.restaurant.delivery_min }} - {{ cart.orders.restaurant.delivery_max }}\n    </div>\n  </div>\n\n   <ion-card>\n      <ion-card-header >\n        Produtos\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-content style="padding-left: 0px;">\n          <ion-list>\n            <ion-item *ngFor="let item of cart.orders.items; let i = index">\n              <ion-row>\n                <ion-col col-3>\n                  <ion-thumbnail item-left>\n                  <img *ngIf="item.thumb" src="{{item.thumb}}" />\n                  <img *ngIf="!item.thumb" src="assets/img/empty-cart.png" />\n                </ion-thumbnail>\n                </ion-col>\n                <ion-col col-5 class="items-selected">\n                  {{ item.name }} x {{item.quantity}}\n                  <br/>\n                  \n                  <div class="bottom" *ngIf="item.itemRequired">\n                  <span ion-text color="gray" class="label">{{nameItemRequired(item).name}} • R$ {{nameItemRequired(item).price}}</span><br/>\n                  </div>\n                  \n                  <div class="bottom" *ngFor="let i of optional(item)">\n                    <span ion-text color="gray" class="label">{{i.name}} • R$ {{ i.price.toFixed(2) }} </span><br/>\n                  </div>\n                  <div class="bottom" *ngIf="item.description">\n                    <span ion-text color="gray" class="label">Importante: {{item.description}}</span><br/>\n                  </div>\n                </ion-col>\n                <ion-col col-3 class="items-selected-price">\n                \n                <span class="item-price" style="color: green">R${{ item.total.toFixed(2) }}</span>\n                <br/>\n\n                <ion-icon class="button-plus-minus" name="remove-circle" color="danger" (click)="minusQty(i, item)"></ion-icon>\n                  <span class="span-plus-minus" >&nbsp;&nbsp;{{ item.quantity }}&nbsp;&nbsp;</span>\n                <ion-icon ion-text class="label button-plus-minus" name="add-circle" color="green" (click)="plusQty(i, item)"></ion-icon>\n              </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  <ion-list>\n    <ion-row>\n      <ion-item>\n        <span>SUBTOTAL</span>\n        <span item-right style="color: green">R${{ cart.subTotal.toFixed(2) }}</span>\n      </ion-item>\n      <ion-item *ngIf="cart.discount && cart.discount.name && cart.discount.status">\n        <span>DESCONTO: {{cart.discount.name}}</span>\n        <span item-right style="color: red;" >-{{ getDiscount(cart.discount) }}</span>\n      </ion-item>\n      <ion-item *ngIf="cart.flag_delivery === \'1\'">\n        <span>FRETE</span>\n        <span item-right style="color: green" >{{ getFrete(cart.frete) }}</span>\n      </ion-item>\n      <ion-item *ngIf="isCashBack">\n        <span>CASHBACK</span>\n        <span item-right style="color: green">R${{ cart.cashback.toFixed(2) }}</span>\n      </ion-item>\n      <ion-item>\n        <span>TOTAL</span>\n        <span item-right style="color: green" >R${{ getTotal(cart) }}</span>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n\n\n  <div padding>\n    <button margin-bottom ion-button block color="secondary" class="border-button" (click)="formPayment()" [disabled]="!cart.orders.items || cart.orders.items.length <= 0" >\n        Escolher forma de pagamento &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/cart/cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_address_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NewAddressPage = (function () {
    function NewAddressPage(nav, navParams, formBuilder, alertCtrl, loadingCtrl, toastCtrl, statusBar, loginService, addressService) {
        this.nav = nav;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.addressService = addressService;
        this.noHaveCep = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.auxAddress = {};
        this.text = navParams.get('address') ? 'Atualizar Endereço' : 'Novo Endereço';
        this.address = navParams.get('address') ? JSON.parse(navParams.get('address')) : {};
        this.address.users_id = this.address.users_id ? this.address.users_id : navParams.get('userId');
        this.register = this.formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            street: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            neighborhood: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            complement: ['']
        });
    }
    NewAddressPage.prototype.addOrEdit = function () {
        if (!this.address.id) {
            this.save(this.address);
        }
    };
    NewAddressPage.prototype.save = function (address) {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.save(address).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                    _this.nav.pop();
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    // Remove o endereço pelo ID
    NewAddressPage.prototype.remove = function (id) {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Removendo...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.remove(id).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                    _this.address = {};
                    _this.text = 'Novo Endereço';
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    // Busca o endereço no serviço dos correios através do CEP inserido.
    NewAddressPage.prototype.findByCep = function () {
        var _this = this;
        if (!this.address.cep) {
            this.presentAlert("O campo CEP é obrigatório.");
            return;
        }
        if (!this.address.number) {
            this.presentAlert("O Número é obrigatório.");
            return;
        }
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Buscando endereço...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.findByCep(_this.address.cep).subscribe(function (result) {
                // remove the popup
                loader.dismiss();
                if (result.status) {
                    var data = result.data;
                    _this.address.street = data.logradouro;
                    _this.address.neighborhood = data.bairro;
                    _this.address.city = data.localidade;
                    _this.address.state = data.uf;
                    _this.findLatAndLngByAddress();
                }
                else {
                    _this.presentAlert(result.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    NewAddressPage.prototype.findByWithoutCep = function () {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Buscando endereço...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.findLatAndLngByAddress(_this.auxAddress).subscribe(function (result) {
                loader.dismiss();
                if (result && result.results && result.results[0] && result.results[0].geometry && result.results[0].geometry.location) {
                    _this.address.street = _this.auxAddress.street;
                    _this.address.neighborhood = _this.auxAddress.neighborhood;
                    _this.address.number = _this.auxAddress.number;
                    _this.address.complement = _this.auxAddress.complement;
                    // Separa "Araguari - MG" -> [0] = Araguari  [1] = MG
                    var aux = _this.auxAddress.city.split("-");
                    _this.address.city = aux[0];
                    _this.address.state = aux[1];
                    _this.address.latitude = result.results[0].geometry.location.lat;
                    _this.address.longitude = result.results[0].geometry.location.lng;
                    _this.address.cep = result.results[0].address_components[result.results[0].address_components.length - 1].long_name;
                    _this.findByCep();
                    // Create the popup
                    var loader_1 = _this.loadingCtrl.create({
                        content: 'Buscando endereço...'
                    });
                    // Show the popup
                    loader_1.present();
                    loader_1.present().then(function () {
                        _this.addressService.findByCep(_this.address.cep).subscribe(function (result) {
                            // remove the popup
                            loader_1.dismiss();
                            if (result.status) {
                                var data = result.data;
                                _this.address.street = data.logradouro;
                                _this.address.neighborhood = data.bairro;
                                _this.address.city = data.localidade;
                                _this.address.state = data.uf;
                                _this.iHaveCep();
                            }
                            else {
                                //this.presentAlert(result.message);
                            }
                        }, function (error) {
                            console.log(error);
                            // remove the popup
                            loader_1.dismiss();
                        });
                    });
                }
                else {
                    _this.presentToast("Verifique o seu número e cep foi digitado corretamente.");
                }
            });
        });
    };
    // Busca a latitude e longitude pelo endereço
    NewAddressPage.prototype.findLatAndLngByAddress = function () {
        var _this = this;
        if (this.address.number && this.address.number.length && this.address.cep && this.address.cep.length) {
            this.addressService.findLatAndLngByAddress(this.address).subscribe(function (result) {
                if (result && result.results && result.results[0] && result.results[0].geometry && result.results[0].geometry.location) {
                    _this.address.latitude = result.results[0].geometry.location.lat;
                    _this.address.longitude = result.results[0].geometry.location.lng;
                }
                else {
                    _this.presentToast("Verifique o seu número e cep foi digitado corretamente.");
                }
            });
        }
    };
    NewAddressPage.prototype.goToMain = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__main_tabs_main_tabs__["a" /* MainTabsPage */]);
    };
    // Seta o endereço escolhido para buscar os restaurantes que estão proximos do endereço selecionado
    NewAddressPage.prototype.setAddress = function (address) {
        var location = {
            latitude: address.latitude,
            longitude: address.longitude,
            street: address.street + ", " + address.number,
            complement: address.complement,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state,
            cep: address.cep
        };
        this.loginService.setLocation(location);
        this.presentToast("Endereço foi selecionado");
        this.goToMain();
    };
    NewAddressPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    NewAddressPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    NewAddressPage.prototype.dontNowMyCep = function () {
        this.noHaveCep = true;
        this.auxAddress = {};
    };
    NewAddressPage.prototype.iHaveCep = function () {
        this.noHaveCep = false;
    };
    return NewAddressPage;
}());
NewAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-address',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/address/new-address/new-address.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          {{ text }}\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      {{ text }}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div *ngIf="!noHaveCep">\n\n  <ion-title text-center  *ngIf="!address.street">\n      Buscar pelo CEP\n  </ion-title>\n\n  <form (ngSubmit)="findByCep()" *ngIf="!address.street">\n    <ion-item style="padding-left: 0px !important;">\n      <ion-label>CEP</ion-label>\n      <ion-input type="number" [(ngModel)]="address.cep" name="cep"></ion-input>\n    </ion-item>\n    <ion-item style="padding-left: 0px !important;">\n      <ion-label>Número</ion-label>\n      <ion-input type="number" [(ngModel)]="address.number" name="number"></ion-input>\n    </ion-item>\n    <ion-item style="padding-left: 0px !important;">\n      <ion-label>Complemento</ion-label>\n      <ion-input type="text" [(ngModel)]="address.complement" name="complement"></ion-input>\n    </ion-item>\n    <button class="border-button" ion-button color="sacia" type="submit" block>Buscar</button>\n  </form>\n\n  <div padding text-center *ngIf="!address.street">\n    <button ion-button class="button-border border-button" style="color: black" (click)="dontNowMyCep()">Não sabe o CEP? Busque por rua</button>\n  </div>\n\n  <form *ngIf="address.street || address.id">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label stacked>ENDEREÇO DE ENTREGA</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-input type="text" name="street" [disabled]="true" [(ngModel)]="address.street" placeholder="Rua" ></ion-input>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label stacked>NÚMERO</ion-label>\n        </ion-col>\n        <ion-col col-6>\n          <ion-label stacked>COMPLEMENTO</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input type="number" name="number" [(ngModel)]="address.number" placeholder="Número"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input type="text" name="complement" [(ngModel)]="address.complement" placeholder="Ex: casa, Apart" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label stacked>BAIRRO</ion-label>\n        </ion-col>\n        <ion-col col-6>\n          <ion-label stacked>CEP</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-input type="text" name="neighborhood" [disabled]="true" [(ngModel)]="address.neighborhood" placeholder="Bairro"></ion-input>\n        </ion-col>\n        <ion-col col-6>\n          <ion-input type="text" name="cep" [(ngModel)]="address.cep" placeholder="CEP" [disabled]="true" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label stacked>CIDADE</ion-label>\n        </ion-col>\n        <ion-col col-6>\n          <ion-label stacked>ESTADO</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-input type="text" name="city" [disabled]="true" [(ngModel)]="address.city" placeholder="Cidade"></ion-input>\n        </ion-col>\n        <ion-col col-6>\n          <ion-input type="text" name="state" [disabled]="true" [(ngModel)]="address.state" placeholder="Estado" ></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n\n  <button class="border-button" *ngIf="!address.id && address.street && address.latitude && address.number" ion-button block margin-top color="sacia" (click)="addOrEdit()">REGISTRAR</button>\n\n  <button [hidden]="!address.id" ion-button block margin-top color="sacia" (click)="setAddress(address)">Selecionar endereço</button>\n\n  <button class="border-button" [hidden]="!address.id" ion-button block margin-top color="primary" (click)="remove(address.id)">REMOVER</button>\n</div>\n\n<div *ngIf="noHaveCep">\n\n    <form (ngSubmit)="findByWithoutCep()" [formGroup]="register" >\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label stacked>CIDADE</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-select [(ngModel)]="auxAddress.city"\n              [ngClass]="{\'error\':!register.controls.city.valid && register.controls.city.dirty, \'success\':register.controls.city.valid && register.controls.city.dirty}" \n              okText="OK" cancelText=""\n              name="city" formControlName="city">\n              <!-- <ion-option value="Araguari - MG">Araguari - MG</ion-option>\n              <ion-option value="Uberaba - MG">Uberaba - MG</ion-option> -->\n              <ion-option value="Uberlândia - MG">Uberlândia - MG</ion-option>\n              <ion-option value="Araguari - MG">Araguari - MG</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label stacked>ENDEREÇO DE ENTREGA</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-input type="text" \n              [ngClass]="{\'error\':!register.controls.street.valid && register.controls.street.dirty, \'success\':register.controls.street.valid && register.controls.street.dirty}" \n              [(ngModel)]="auxAddress.street" \n              placeholder="Nome da rua ou avenida" \n              formControlName="street"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label stacked>BAIRRO</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-input\n              [ngClass]="{\'error\':!register.controls.neighborhood.valid && register.controls.neighborhood.dirty, \'success\':register.controls.neighborhood.valid && register.controls.neighborhood.dirty}"  \n              type="text" \n              [(ngModel)]="auxAddress.neighborhood" \n              placeholder="Bairro" \n              formControlName="neighborhood"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label stacked>NÚMERO</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-input \n              [ngClass]="{\'error\':!register.controls.number.valid && register.controls.number.dirty, \'success\':register.controls.number.valid && register.controls.number.dirty}"  \n              type="number" \n              [(ngModel)]="auxAddress.number" \n              placeholder="número" \n              formControlName="number"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label stacked>COMPLEMENTO</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-input \n              [ngClass]="{\'error\':!register.controls.complement.valid && register.controls.complement.dirty, \'success\':register.controls.complement.valid && register.controls.complement.dirty}"  \n              type="text" \n              [(ngModel)]="auxAddress.complement" \n              placeholder="Casa/Apartamento" \n              formControlName="complement"></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button class="border-button" ion-button [disabled]="register.invalid" color="sacia" type="submit" block>Buscar</button>\n      <br/>\n      \n      <ion-row>\n        <ion-col col-1></ion-col>\n        <ion-col col-9>\n          <span style="color: #ed3237;" (click)="iHaveCep()" *ngIf="!address.street" >LEMBROU DO SEU CEP? CLICK AQUI</span>\n        </ion-col>\n      </ion-row>\n    </form>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/address/new-address/new-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_3__services_address_service__["a" /* AddressService */]])
], NewAddressPage);

//# sourceMappingURL=new-address.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_new_address_new_address__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_address_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(nav, toastCtrl, http, geolocation, navParams, viewCtrl, checkInternet, loadingCtrl, loginService, locationAccuracy, statusBar, addressService, usersProvider, restaurantService) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.checkInternet = checkInternet;
        this.loadingCtrl = loadingCtrl;
        this.loginService = loginService;
        this.locationAccuracy = locationAccuracy;
        this.statusBar = statusBar;
        this.addressService = addressService;
        this.usersProvider = usersProvider;
        this.restaurantService = restaurantService;
        this.showSpinner = false;
        this.isLogged = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    // Busca todos os estabelecimentos pelo endereço que esta selecionado pelo usuário
    LocationPage.prototype.findRestaurant = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.restaurantService.getInitialHome().subscribe(function (result) {
                _this.goToHomePage();
            }, function (error) {
                if (error.status === 401) {
                    _this.goToLogout();
                }
                console.log(error);
            });
        });
    };
    //Utiliza o plugin locationAccurancy para pegar a posição do usuário pelo GPS do celular.
    LocationPage.prototype.closeToMe = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            // the accuracy option will be ignored by iOS
            _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                _this.location = {};
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.location.latitude = resp.coords.latitude;
                    _this.location.longitude = resp.coords.longitude;
                    if (_this.location.latitude && _this.location.longitude) {
                        _this.getAddress(_this.location.latitude, _this.location.longitude);
                    }
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
                });
            }, function (error) {
                console.log('Error requesting location permissions', error);
                _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
            });
        });
    };
    // Busca o endereço pela Latitude e Longitude
    LocationPage.prototype.getAddress = function (lat, lng) {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.getLocationByLatAndLng(lat, lng, loader).subscribe(function (result) {
                // Seta o endereço no carrinho de compras
                //this.setAddress(address);
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        });
    };
    // Busca o endereço na API do Google Maps pela latitude e longitude
    LocationPage.prototype.getLocationByLatAndLng = function (lat, lng, loader) {
        var env = this;
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true&key=AIzaSyAnIl-LlxxlgkQ5iD9MiHdEj4AJ-g9K8nc")
            .map(function (res) {
            var formatJson = JSON.parse(res["_body"]);
            // Convert resposta da API do google em um objeto
            if (formatJson.results.length) {
                var address = env.loginService.mountAddress(formatJson.results[0].address_components, env.location);
                // Seta o endereço recebido da API
                env.loginService.setLocation(address);
                env.findRestaurant();
            }
            else {
                env.presentToast("Desculpe, não conseguimos a sua localização. Tente novamente.");
            }
            loader.dismiss();
            return res;
        })
            .catch(function (error) {
            loader.dismiss();
            return error;
        });
    };
    // Busca todos os endereços do usuário
    LocationPage.prototype.findAddress = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Buscando endereços...'
        });
        this.showSpinner = true;
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.addressService.findById(_this.loginService.getUser().id).subscribe(function (data) {
                _this.address = data.data;
                _this.showSpinner = false;
            }, function (error) {
                _this.showSpinner = false;
                if (error.status === 401) {
                    _this.goToLogout();
                }
                console.log(error);
            });
        });
    };
    // Abre a tela para cadastrar novo endereço
    LocationPage.prototype.newAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__address_new_address_new_address__["a" /* NewAddressPage */], {
            userId: this.loginService.getUser().id
        });
    };
    // Seta o endereço escolhido para buscar os restaurantes que estão proximos do endereço selecionado
    LocationPage.prototype.setAddress = function (address) {
        var location = {
            latitude: address.latitude,
            longitude: address.longitude,
            street: address.street + ", " + address.number,
            complement: address.complement,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state,
            cep: address.cep
        };
        this.loginService.setLocation(location);
        this.findRestaurant();
    };
    // Redireciona para tela principal
    LocationPage.prototype.goToHomePage = function () {
        // Redirecionado para tela principal
        this.nav.pop();
    };
    // Assim que entrar na tela busca todos os endereços daquele usuário
    LocationPage.prototype.ionViewWillEnter = function () {
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        this.isLogged = this.loginService.isLogged();
        this.address = this.addressService.getAll();
        if (this.isLogged && !this.address.length) {
            this.findAddress();
        }
    };
    LocationPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    LocationPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    LocationPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/location/location.html"*/'<!--\n  Generated template for the GoogleMapsAutocompletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Endereço de entrega\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Endereço de Entrega\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="!address || !address.length" style="font-size: 30px; text-align: center;">Selecione o endereço de entrega:</div>\n\n  <div style="text-align: center;font-size: 20px;" *ngIf="address && address.length">Selecionar endereço de entrega:</div>\n  <ion-card *ngFor="let address of address">\n    <ion-card-content (click)="setAddress(address)" *ngIf="address.latitude && address.longitude" class="white">\n      {{address.street}} • {{address.number}}<br/>\n      <div *ngIf="address.complement" >Complemento: {{address.complement}}<br/></div>\n      Bairro: {{address.neighborhood}} \n\n      <ion-icon color="graybo" name="arrow-dropright-circle" style="float: right; font-size: 50px;" ></ion-icon>\n      <br/>\n      {{address.city}} • {{address.state}}<br/>\n      CEP: {{address.cep}}\n    </ion-card-content>\n  </ion-card>\n\n  <div padding text-center *ngIf="isLogged && (!address || !address.length)">\n    <button ion-button block margin-bottom color="sacia" class="border-button" (click)="newAddress()">Novo Endereço</button>\n  </div>\n\n  <ion-card (click)="closeToMe()" >\n    <ion-card-content text-center>\n      <ion-icon name="locate"></ion-icon> Perto de mim\n    </ion-card-content>\n  </ion-card>\n\n  <ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n\n  <ion-fab right bottom style="font-size: 250%" *ngIf="isLogged">\n    <button ion-fab color="sacia" (click)="newAddress()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_12__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_9__services_address_service__["a" /* AddressService */],
        __WEBPACK_IMPORTED_MODULE_11__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginService = LoginService_1 = (function () {
    function LoginService(geolocation, http, locationAccuracy, usersProvider) {
        this.geolocation = geolocation;
        this.http = http;
        this.locationAccuracy = locationAccuracy;
        this.usersProvider = usersProvider;
        this.http = http;
        this.user = {};
    }
    LoginService.prototype.getLocation = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.location = {};
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.location.latitude = resp.coords.latitude;
                        _this.location.longitude = resp.coords.longitude;
                        if (_this.location.latitude && _this.location.longitude) {
                            _this.getAddress(_this.location.latitude, _this.location.longitude).subscribe();
                        }
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                    });
                }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
    };
    LoginService.prototype.login = function (profile) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/authenticate", profile)
            .timeout(10000)
            .map(function (res) {
            var result = res.json();
            if (result.status) {
                _this.user = res.json().data;
                _this.user.location = _this.location;
                _this.user.favorites_restaurants_ids = JSON.parse(_this.user.favorites_restaurants_ids);
                _this.user.token = res.json().token;
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(error);
        });
    };
    LoginService.prototype.loginExternal = function (profile) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/loginfacebook", profile)
            .timeout(10000)
            .map(function (res) {
            _this.user = res.json().data;
            _this.user.location = _this.location;
            _this.user.favorites_restaurants_ids = JSON.parse(_this.user.favorites_restaurants_ids);
            _this.user.token = res.json().token;
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(error);
        });
    };
    LoginService.prototype.setUser = function (user) {
        this.user = user;
        this.setLocation(this.location);
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.getUserLocation = function () {
        // Caso não tenha location, busca o primeiro endereço cadastrado
        if ((!this.user.location || !this.user.location.latitude) && this.user.Addresses && this.user.Addresses.length) {
            var address = this.user.Addresses[0];
            var location_1 = LoginService_1.mountLocation(address);
            this.setLocation(location_1);
            return location_1;
        }
        return this.user.location;
    };
    LoginService.prototype.setFavoritesRestaurantsIds = function (favorites) {
        this.user.favorites_restaurants_ids = favorites;
    };
    LoginService.prototype.updateUser = function (profile) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users", profile, { headers: headers })
            .timeout(10000)
            .map(function (res) {
            var user = res.json().data;
            _this.user.firstName = user.firstName;
            _this.user.lastName = user.lastName;
            _this.user.country_code = user.country_code;
            _this.user.phone = user.phone;
            res.json().data = _this.user;
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(error);
        });
    };
    LoginService.prototype.setLocation = function (location) {
        if (location) {
            this.user.location = location;
            this.location = location;
            this.setUserDatabase({
                id: 1,
                json: JSON.stringify(this.user)
            });
        }
    };
    LoginService.prototype.setNewUser = function (status) {
        this.user.isNew = status;
        this.setUserDatabase(this.user);
    };
    LoginService.prototype.setActivation = function (code, status) {
        this.user.code = code;
        this.user.activation_code = status;
        this.setUserDatabase(this.user);
    };
    // Busca o endereço pela Latitude e Longitude
    LoginService.prototype.getAddress = function (lat, lng) {
        var _this = this;
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true&key=AIzaSyD1PPrTt9S6nYT-wPFs0q4mIpbY3XyAjqA")
            .timeout(10000)
            .map(function (res) {
            var formatJson = JSON.parse(res["_body"]);
            // Convert resposta da API do google em um objeto
            var address;
            // Convert resposta da API do google em um objeto
            if (formatJson.results.length) {
                address = _this.mountAddress(formatJson.results[0].address_components, {
                    latitude: lat,
                    longitude: lng
                });
            }
            // Seta o endereço recebido da API
            _this.location = address;
            return res;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(error);
        });
    };
    LoginService.prototype.getToken = function () {
        return this.user.token;
    };
    // Salva o usuário no banco de dados local
    LoginService.prototype.setUserDatabase = function (model) {
        return this.usersProvider.update(model);
    };
    //Monta o objeto endereço apartir do dados retornados da API do google
    LoginService.prototype.mountAddress = function (address, location) {
        /*
        [0] -> Número
        [1] -> Rua/Avenida
        [2] -> Bairo
        [3] -> Cidade
        [5] -> Estado
        [6] -> Area level 2
        [7] -> ZipCode
        */
        return {
            street: address[1].long_name + " • " + address[0].long_name,
            complement: null,
            neighborhood: address[2].long_name,
            city: address[3].long_name,
            state: address[5].long_name,
            cep: address[6].long_name,
            latitude: location.latitude,
            longitude: location.longitude
        };
    };
    // Monta o objeto location apartir dos dados de endereço
    LoginService.mountLocation = function (address) {
        return {
            latitude: address.latitude,
            longitude: address.longitude,
            street: address.street + ", " + address.number,
            complement: address.complement,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state,
            cep: address.cep
        };
    };
    LoginService.prototype.isLogged = function () {
        return this.user && this.user.first_name ? true : false;
    };
    return LoginService;
}());
LoginService = LoginService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
        __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["b" /* UsersProvider */]])
], LoginService);

var LoginService_1;
//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersProvider = (function () {
    function UsersProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    UsersProvider.prototype.insert = function (user) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into users (json) values (?)';
            var data = [user.json];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.update = function (user) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update users set json = ? where id = ?';
            var data = [user.json, user.id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.remove = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from users where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.get = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from users where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var user = new User();
                    user.id = item.id;
                    user.json = item.json;
                    return user;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.getUserById = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM users where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
                else {
                    return null;
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT u.* FROM users u';
            return db.executeSql(sql, {})
                .then(function (data) {
                if (data.rows.length > 0) {
                    var users = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var user = data.rows.item(i);
                        users.push(user);
                    }
                    return users;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    return UsersProvider;
}());
UsersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
], UsersProvider);

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('DatabaseProvider carregado com sucesso!');
    }
    /**
     * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
     */
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'users.db',
            location: 'default'
        });
    };
    /**
    * Cria a estrutura inicial do banco de dados
    */
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            // Inserindo dados padrão
            _this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS users (id integer primary key AUTOINCREMENT NOT NULL, json TEXT)']
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    /**
    * Incluindo os dados padrões
    * @param db
    */
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from users', {})
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                // Criando as tabelas
                db.sqlBatch([
                    ['insert into users (json) values (?)', ['{}']],
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de usuários', e); });
    };
    return DatabaseProvider;
}());
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
], DatabaseProvider);

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finish_order_finish_order__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PaymentPage = (function () {
    function PaymentPage(nav, navParams, alertCtrl, cartService, ga, statusBar, userService, restaurantService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.cartService = cartService;
        this.ga = ga;
        this.statusBar = statusBar;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.money = "0";
        this.isCashBack = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Tipo de Pagamento');
        this.cart = this.cartService.getCart();
        this.payments = this.restaurantService.getPayment(this.cart.orders.restaurant.id);
        this.wallet = this.userService.getWallet();
        if (!this.wallet) {
            this.userService.getBalance().subscribe(function (result) {
                _this.wallet = result;
            }, function (error) {
                console.log(error);
                if (error.status === 401) {
                    //this.presentToast("Sua sessão expirou");
                    //this.goToLogout();
                }
            });
        }
    }
    PaymentPage.prototype.getPayment = function (payment) {
        var name = payment.name === 'Dinheiro' ? payment.name : '';
        var card = payment.card ? payment.card : '';
        var online = card.length && payment.is_online === 0 ? '(máquina)' : '';
        return name + ' ' + card + ' ' + online;
    };
    PaymentPage.prototype.disabledButton = function () {
        if (!this.cart.orders.payment || !this.cart.orders.payment.name) {
            return true;
        }
        return false;
    };
    PaymentPage.prototype.finishOrder = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__finish_order_finish_order__["a" /* FinishOrderPage */]);
    };
    PaymentPage.prototype.changePayment = function () {
        if (this.cart.orders.payment.name === 'Dinheiro') {
            this.presentMoney();
        }
        else {
            if (this.cart.orders.payment.name !== 'Dinheiro') {
                this.cart.orders.money = null;
            }
        }
    };
    PaymentPage.prototype.ionViewDidEnter = function () {
        this.isCashBack = this.cart.cashback && this.cart.cashback > 0 ? true : false;
    };
    // Troco
    PaymentPage.prototype.presentMoney = function () {
        var _this = this;
        var env = this;
        var alert = this.alertCtrl.create({
            title: 'TROCO',
            message: 'Troco para quanto?',
            inputs: [{
                    name: 'money',
                    type: 'number',
                    placeholder: 'Ex: 50',
                }],
            buttons: [{
                    text: 'Pronto',
                    handler: function (data) {
                        if (parseInt(data.money) <= 0 || parseInt(data.money) > 100000) {
                            var alert_1 = _this.alertCtrl.create({
                                title: "Alerta",
                                subTitle: "O valor inserido é inválido!",
                                buttons: [{
                                        text: 'Ok',
                                        handler: function (data) {
                                            env.presentMoney();
                                        }
                                    }]
                            });
                            alert_1.present();
                        }
                        else {
                            if (data.money) {
                                data.money = "R$ " + parseFloat(data.money).toFixed(2);
                            }
                            else {
                                data.money = "";
                            }
                            _this.cart.orders.money = data.money;
                        }
                    }
                }]
        });
        alert.present();
    };
    PaymentPage.prototype.getMoney = function (payment) {
        if (payment.name === 'Dinheiro') {
            return this.cart.orders.money ? ' • Troco: ' + this.cart.orders.money : '';
        }
    };
    PaymentPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    PaymentPage.prototype.toggle = function () {
        if (this.isCashBack) {
            this.payCashBack();
        }
        this.cart.cashback = 0.0;
    };
    // Troco
    PaymentPage.prototype.payCashBack = function () {
        var _this = this;
        var env = this;
        var alert = this.alertCtrl.create({
            title: 'Utilizar créditos',
            message: 'Valor pago em créditos?',
            inputs: [{
                    name: 'cashback',
                    type: 'number',
                    placeholder: 'Ex: 50',
                }],
            buttons: [{
                    text: 'Pronto',
                    handler: function (data) {
                        if (parseFloat(data.cashback) > _this.wallet.total) {
                            var alert_2 = _this.alertCtrl.create({
                                title: "Alerta",
                                subTitle: "Saldo indisponível!",
                                buttons: [{
                                        text: 'Ok',
                                        handler: function (data) {
                                            env.payCashBack();
                                        }
                                    }]
                            });
                            alert_2.present();
                        }
                        else {
                            if (parseInt(data.cashback) <= 0) {
                                var alert_3 = _this.alertCtrl.create({
                                    title: "Alerta",
                                    subTitle: "O valor inserido é inválido!",
                                    buttons: [{
                                            text: 'Ok',
                                            handler: function (data) {
                                                env.payCashBack();
                                            }
                                        }]
                                });
                                alert_3.present();
                            }
                            else {
                                _this.cart.cashback = Number(data.cashback);
                                if (_this.cart.flag_delivery === "1" && !isNaN(_this.cart.frete)) {
                                    _this.cart.cashback = _this.cart.cashback >= (_this.cart.subTotal + _this.cart.frete) ? _this.cart.subTotal + _this.cart.frete : _this.cart.cashback;
                                    _this.cart.total = _this.cart.subTotal + _this.cart.frete - _this.cart.cashback;
                                }
                                else {
                                    _this.cart.cashback = _this.cart.cashback >= _this.cart.subTotal ? _this.cart.subTotal : _this.cart.cashback;
                                    _this.cart.total = _this.cart.subTotal - _this.cart.cashback;
                                }
                            }
                        }
                    }
                }]
        });
        alert.present();
    };
    PaymentPage.prototype.getTotal = function (cart) {
        return this.cartService.getTotal().toFixed(2);
    };
    PaymentPage.prototype.getFrete = function (frete) {
        if (isNaN(frete)) {
            return frete;
        }
        else {
            return "R$ " + frete.toFixed(2);
        }
    };
    PaymentPage.prototype.getDiscount = function (discount) {
        if (discount.discount_type === "1" || discount.discount_type === true) {
            return discount.value + "%";
        }
        else {
            return "R$ " + discount.value;
        }
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/payment/payment.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n   <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Metodo Pagamento\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      Metodo Pagamento\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="margin-top: 5px;"  padding>\n\n  <!--choose item options-->\n  <div class="light-bg" padding>\n    <ion-icon name="card"></ion-icon>\n    FORMA DE PAGAMENTO\n  </div>\n  <ion-list radio-group [(ngModel)]="cart.orders.payment" (ionChange)="changePayment();">\n    <ion-item *ngFor="let payment of payments">\n\n      <ion-label>\n        {{getPayment(payment)}} {{cart.orders.money ? getMoney(payment) : \'\'}}\n        <img src="{{payment.img}}" style="float: right; width: 10% !important" />\n      </ion-label>\n      <ion-radio [value]="payment" item-left></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <div class="light-bg" padding *ngIf="wallet && wallet.total">\n    <ion-icon name="card"></ion-icon>\n    SALDO EM CRÉDITOS: R$ {{wallet.totalFormat}}\n  </div>\n  <ion-list>\n    <ion-item *ngIf="wallet && wallet.total && wallet.total > 0">\n      <ion-label>Cashback</ion-label>\n      <ion-checkbox (click)="toggle()" [(ngModel)]="isCashBack"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="isCashBack && wallet && wallet.total > 0">\n    <ion-row>\n      <ion-item>\n        <span>SUBTOTAL</span>\n        <span item-right style="color: green">R${{ cart.subTotal.toFixed(2) }}</span>\n      </ion-item>\n      <ion-item *ngIf="cart.discount && cart.discount.name && cart.discount.status">\n        <span>DESCONTO: {{cart.discount.name}}</span>\n        <span item-right>{{ getDiscount(cart.discount) }}</span>\n      </ion-item>\n      <ion-item *ngIf="cart.flag_delivery === \'1\'">\n        <span>FRETE</span>\n        <span item-right style="color: green" >{{ getFrete(cart.frete) }}</span>\n      </ion-item>\n      <ion-item>\n        <span>CASHBACK</span>\n        <span item-right style="color: green">R${{ cart.cashback.toFixed(2) }}</span>\n      </ion-item>\n      <ion-item>\n        <span>TOTAL</span>\n        <span item-right style="color: green" >R${{ getTotal(cart) }}</span>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n\n  <br/><br/>\n  <button margin-bottom [disabled]="disabledButton()" ion-button block color="secondary" (click)="finishOrder()">\n    Detalhes do Pedido &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__["a" /* RestaurantService */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CouponService = (function () {
    function CouponService(http, loginService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.http = http;
        this.coupons = [];
        this.populate().subscribe(function (result) {
            _this.coupons = result;
        });
    }
    CouponService.prototype.populate = function () {
        var _this = this;
        var location = this.loginService.getUser().location;
        if (!location) {
            location = {};
            // Lat e Lng Uberlândia Minas Gerais
            location.latitude = -18.914608;
            location.longitude = -48.275380;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/coupon/latitude/" + location.latitude + "/longitude/" + location.longitude, { headers: headers })
            .timeout(10000)
            .map(function (res) {
            _this.coupons = [];
            var coupons = res.json().data;
            for (var i = 0; i < coupons.length; i++) {
                coupons[i].json = JSON.parse(coupons[i].json);
                _this.coupons.push(coupons[i]);
            }
            return _this.coupons;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
        });
    };
    CouponService.prototype.getAll = function () {
        return this.coupons;
    };
    CouponService.prototype.remove = function (item) {
        this.coupons.splice(this.coupons.indexOf(item), 1);
    };
    CouponService.prototype.validate = function (restaurantId, couponName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/coupon/validate/restaurant/" + restaurantId + "/coupon/" + couponName, { headers: headers })
            .timeout(10000)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
        });
    };
    CouponService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    return CouponService;
}());
CouponService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
], CouponService);

//# sourceMappingURL=coupon.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__construction_construction__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RegisterPage = (function () {
    function RegisterPage(nav, registerService, usersProvider, cartService, loginService, toastCtrl, alertCtrl, loadingCtrl, checkInternet, statusBar, ga, formBuilder) {
        this.nav = nav;
        this.registerService = registerService;
        this.usersProvider = usersProvider;
        this.cartService = cartService;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.checkInternet = checkInternet;
        this.statusBar = statusBar;
        this.ga = ga;
        this.formBuilder = formBuilder;
        this.showPasswordIsChecked = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Registrar');
        this.showPasswordIsChecked = false;
        this.profile = {
            country_code: 55
        };
        this.register = this.formBuilder.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            country_code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            showPassword: ['']
        });
    }
    // register
    RegisterPage.prototype.signUp = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        if (!this.validateEmail(this.profile.email)) {
            this.presentAlert("Alerta", "Endereço de e-mail inválido");
            return;
        }
        if (this.profile.password.length < 6) {
            this.presentAlert("Alerta", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }
        if (this.profile.password !== this.profile.repeatPassword) {
            this.presentAlert("Alerta", "Senhas não são iguais.");
            return;
        }
        this.ga.trackEvent('Click', 'Botão Registro', null, null);
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.registerService.save(_this.profile).subscribe(function (result) {
                // remove the popup
                loader.dismiss();
                if (result.status) {
                    if (result.data.information && result.data.information.status) {
                        _this.presentAlert("", result.data.information.msg);
                    }
                    else {
                        _this.presentToast(result.message);
                    }
                    _this.register.reset();
                    _this.redirectMainPage(result.data);
                }
                else {
                    _this.presentAlert("Alerta", result.message);
                }
            }, function (error) {
                console.log(error);
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                // remove the popup
                loader.dismiss();
            });
        });
    };
    RegisterPage.prototype.validateEmail = function (email) {
        // Expressão para formato de email
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Valida se email é valido
        if (!re.test(email)) {
            return false;
        }
        return true;
    };
    RegisterPage.prototype.redirectMainPage = function (user) {
        // Seta o Usuário no LoginService
        this.loginService.setUser(user);
        //Após realizar o cadastro, salva o usuário no banco de dados local.
        this.saveUserDatabase(user);
        // Seta o usuário no Carrinho de Compras.
        this.cartService.setUser(user);
        this.nav.pop();
    };
    RegisterPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage.prototype.saveUserDatabase = function (user) {
        var model = new __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["a" /* User */]();
        model.id = 1;
        model.json = JSON.stringify(user);
        this.updateUser(model)
            .then(function () {
            console.log("Usuário inserido no banco de dados com sucesso");
        })
            .catch(function () {
            console.log("Erro ao tentar salvar o usuário no banco de dados local");
        });
    };
    // Salva o usuário no banco de dados local
    RegisterPage.prototype.updateUser = function (model) {
        return this.usersProvider.update(model);
    };
    // go to term page
    RegisterPage.prototype.getTerm = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__terms_terms__["a" /* TermsPage */]);
    };
    // go to term page
    RegisterPage.prototype.getConstruction = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__construction_construction__["a" /* ConstructionPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/register/register.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<script src="register.ts"></script>\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          Cadastrar\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Cadastrar\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="register" (ngSubmit)="signUp()" >\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label stacked>NOME</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input type="text" \n            [ngClass]="{\'error\':!register.controls.first_name.valid && register.controls.first_name.dirty, \'success\':register.controls.first_name.valid && register.controls.first_name.dirty}" \n            [(ngModel)]="profile.first_name" \n            [(ngModel)]="profile.first_name" \n            placeholder="Nome"\n            formControlName="first_name"></ion-input>\n\n        </ion-col>\n        <ion-col>\n          <ion-input type="text" \n            [ngClass]="{\'error\':!register.controls.last_name.valid && register.controls.last_name.dirty, \'success\':register.controls.last_name.valid && register.controls.last_name.dirty}" \n            [(ngModel)]="profile.last_name" \n            placeholder="Sobrenome" \n            formControlName="last_name"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label stacked>E-MAIL</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input \n            type="email" \n            [ngClass]="{\'error\':!register.controls.email.valid && register.controls.email.dirty, \'success\':register.controls.email.valid && register.controls.email.dirty}" \n            [(ngModel)]="profile.email" \n            placeholder="seuemail@exemplo.com" \n            formControlName="email"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <ion-label stacked>PAÍS</ion-label>\n          <ion-select \n            [ngClass]="{\'error\':!register.controls.country_code.valid && register.controls.country_code.dirty, \'success\':register.controls.country_code.valid && register.controls.country_code.dirty}" \n            [(ngModel)]="profile.country_code" \n            formControlName="country_code">\n            <ion-option value="55">+55 - Brasil</ion-option>\n          </ion-select>\n        </ion-col>\n        <ion-col col-9>\n          <ion-label stacked>TELEFONE</ion-label>\n          <ion-input type="text" \n              [ngClass]="{\'error\':!register.controls.phone.valid && register.controls.phone.dirty, \'success\':register.controls.phone.valid && register.controls.phone.dirty}" \n              name="phone" placeholder="Celular" \n              [brmasker]="{phone: true}" \n              [(ngModel)]="profile.phone" \n              formControlName="phone"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label stacked>SENHA</ion-label>\n          <ion-input \n            type="password"\n            clearOnEdit="false"\n            *ngIf="!showPasswordIsChecked"\n            [ngClass]="{\'error\':!register.controls.password.valid && register.controls.password.dirty, \'success\':register.controls.password.valid && register.controls.password.dirty}" \n            [(ngModel)]="profile.password" \n            formControlName="password">\n            </ion-input>\n          <ion-input \n            type="text"\n            clearOnEdit="false"\n            *ngIf="showPasswordIsChecked"\n            [ngClass]="{\'error\':!register.controls.password.valid && register.controls.password.dirty, \'success\':register.controls.password.valid && register.controls.password.dirty}" \n            [(ngModel)]="profile.password" \n            formControlName="password">\n            </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label stacked>CONFIRMAR SENHA</ion-label>\n          <ion-input \n            type="password"\n            clearOnEdit="false"\n            *ngIf="!showPasswordIsChecked"\n            [ngClass]="{\'error\':!register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty, \'success\':register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty}" \n            [(ngModel)]="profile.repeatPassword" \n            formControlName="repeatPassword" ></ion-input>\n          <ion-input \n            type="text"\n            clearOnEdit="false"\n            *ngIf="showPasswordIsChecked"\n            [ngClass]="{\'error\':!register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty, \'success\':register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty}" \n            [(ngModel)]="profile.repeatPassword" \n            formControlName="repeatPassword" ></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row>\n      <ion-col>\n         <span ion-text color="gray">A senha deve ter pelo menos 6 caracteres.</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n         <ion-item no-lines no-padding>\n          <ion-label>Mostrar senhas</ion-label>\n          <ion-checkbox [(ngModel)]="showPasswordIsChecked" formControlName="showPassword"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  <div margin-top>\n    <span (click)="getTerm()" ion-text color="sacia"> Ao criar uma conta estará de acordo com os termos de uso e a política de privacidade</span>\n  </div>\n\n  <button [disabled]="register.invalid" type="submit" ion-button block margin-top color="sacia">REGISTRAR</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-title>Termos e Condições</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Termos e Condições\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>Termos e Condições</h2>\n\n  <span class="terms-intro">\n		<p>Por favor, leia com atenção os termos e condições.</p>\n		<p>Ao se cadastrar na plataforma <a href="http://www.saciafome.com.br">www.saciafome.com.br</a>  você ESTÁ DE ACORDO COM AS CONDIÇÕES E TERMOS do Website.</p>\n		<p>Note que a recusa destes Termos do Website impedirá que você faça pedidos de produtos do nosso Website e Aplicativo.</p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">1. SERVIÇOS DISPONIBILIZADOS AO USUÁRIO</p>\n		<p>1.1 Este TERMO se aplica para regular o uso do serviço oferecido pelo SACIAFOME  aos USUÁRIOS, qual seja, possibilitar a escolha, por estes, de ESTABELECIMENTOS E DEMAIS ESTABELECIMENTOS cadastrados e, via on-line, efetivar solicitações para aquisição (e entrega em domicílio ou retirada no local) de gêneros alimentícios fornecidos pelos ESTABELECIMENTOS, de acordo com as opções disponibilizadas por estes, sendo possível, igualmente, aos USUÁRIOS, a efetivação do pagamento do preço dos produtos diretamente ao estabelecimento quando do recebimento do produto adquirido.</p>\n\n		<p>1.2 O serviço do SACIAFOME consiste, portanto, em aproximar, através da plataforma digital e aplicativo, os USUÁRIOS e os ESTABELECIMENTOS cadastrados, possibilitando que os USUÁRIOS encaminhem, aos ESTABELECIMENTOS, pedidos de entrega de gêneros alimentícios, bem como, sendo essa a opção dos USUÁRIOS, receber on-line pagamento do preço dos produtos entregues aos USUÁRIOS pelos ESTABELECIMENTOS.</p>\n\n		<p>1.3 Desde logo fica esclarecido ao USUÁRIO - o qual se declara ciente - que o serviço oferecido pelo SACIAFOME se relaciona apenas à \'intermediação para comercialização de produtos alimentícios, não abarcando preparo, embalagem, disponibilização e entrega física (via motoboy ou outros meios) dos produtos, sendo esses de responsabilidade integral do ESTABELECIMENTO, a quem deverão ser direcionados quaisquer reclamações acerca de problemas decorrentes de vício, defeito ou inexecução da feitura, preparo e entrega de produtos alimentícios.</p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">2. CADASTRO</p>\n		<p>2.1 O USUÁRIO, para utilizar os serviços acima descritos, deverá ter capacidade jurídica para atos civis e deverá, necessariamente, prestar as informações exigidas no CADASTRO, assumindo integralmente a responsabilidade (inclusive cível e criminal) pela exatidão e veracidade das informações fornecidas no CADASTRO, que poderá ser verificado, a qualquer momento, pelo SACIAFOME.</p>\n\n		<p>2.1.1 Em caso de informações incorretas, inverídicas ou não confirmadas, bem assim na hipótese da negativa em corrigi-las ou enviar documentação que comprove a correção, o SACIAFOME se reserva o direito de não concluir o cadastramento em curso ou, ainda, de bloquear o cadastro já existente, impedindo o USUÁRIO de utilizar os serviços on-line até que, a critério do SACIAFOME, a situação de anomalia esteja regularizada. O SACIAFOME se reserva o direito de impedir, a seu critério, novos CADASTROS, ou cancelar os já efetuados, em caso de ser detectada anomalia que, em sua análise, seja revestida de gravidade ou demonstre tentativa deliberada de burlar as regras aqui descritas, obrigatórias para todos os USUÁRIOS. Também agirá o SACIAFOME de tal forma caso verifique descumprimento, pelo USUÁRIO, de qualquer obrigação prevista no presente TERMO.</p>\n\n		<p>2.2 Efetuado, com sucesso, o CADASTRO, o USUÁRIO terá acesso aos serviços por meio de login e senha, dados esses que se compromete a não divulgar a terceiros, ficando sob sua exclusiva responsabilidade qualquer solicitação de serviço que seja feita com o uso de login e senha de sua titularidade. </p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">3. OBRIGAÇÕES DO USUÁRIO</p>\n		<p>3.1 É obrigação do USUÁRIO fornecer informações cadastrais totalmente verídicas e exatas, responsabilizando-se exclusiva e integralmente (em todas as searas jurídicas) por todo o conteúdo por si informado no item CADASTRO, mantendo atualizado e confirmado o endereço para entrega dos produtos encomendados.</p>\n\n		<p>3.2 O USUÁRIO se obriga, também, a pagar integralmente o preço dos produtos por si solicitados ou encomendados ao ESTABELECIMENTO e efetivamente a si entregues, seja pela modalidade OFF-LINE, seja por qualquer outra forma, diretamente ao portador dos produtos encomendados por meio deste site (dinheiro, cheque, tickets, etc.). </p>\n\n		<p>3.3 O USUÁRIO que seja menor de 18 anos de idade está ciente de que não poderá encomendar e adquirir, em qualquer hipótese, produtos alcoólicos, responsabilizando-se pela correta informação de sua idade no item CADASTRO.</p>\n\n		<p>3.4 O USUÁRIO concorda com o uso das informações de avaliações e feedbacks do serviços dos ESTABELECIMENTOS e do SACIAFOME, conforme descrito nos TERMOS DE PRIVACIDADE do SACIAFOME.</p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">5. MODIFICAÇÕES DESTE TERMO</p>\n		<p>5.1 O presente TERMO DE USO poderá, a qualquer tempo, ter seu conteúdo, ou parte dele, modificados para adequações e inserções, tudo com vistas ao aprimoramento dos serviços disponibilizados.</p>\n\n		<p>5.2 As novas condições entrarão em vigência assim que veiculada no site, sendo possível ao USUÁRIO manifestar oposição a quaisquer dos termos modificados, desde que o faça por escrito, através do site SACIAFOME o que gerará o cancelamento de seu CADASTRO. </p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">6. CANAL DE COMUNICAÇÃO</p>\n\n		<p>6.1 Para estabelecer contato entre SACIAFOME e o USUÁRIO fica disponibilizado no Aplicativo a opção “AJUDA”, sendo certo que o USUÁRIO se obriga, igualmente, a manter em seu cadastro endereço eletrônico atual por intermédio do qual se farão as comunicações a ele dirigidas pelo SACIAFOME, desde logo emprestando-se validade jurídica e efetividade a esse meio eletrônico de troca de informações recíprocas. </p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">7. ACEITAÇÃO DO TERMO DE USO</p>\n\n		<p>7.1 O USUÁRIO declara ter lido, entendido e que aceita todas as regras, condições e obrigações estabelecidas no presente TERMO.</p>\n	</span>\n\n  <span>\n		<p class="fix-terms-text">8. FORO DE ELEIÇÃO</p>\n\n		<p>8.1 As partes elegem como competente para dirimir eventuais controvérsias que venham a surgir da interpretação e do cumprimento do presente TERMO o foro da Comarca de Uberlândia - MG.</p>\n	</span>\n\n  <span>\n		Última atualização: 14 de outubro de 2017.\n	</span>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConstructionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConstructionPage = (function () {
    function ConstructionPage(nav, navParams, platform) {
        this.nav = nav;
        this.navParams = navParams;
        this.platform = platform;
    }
    ConstructionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConstructionPage');
    };
    // go to login page
    ConstructionPage.prototype.getLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ConstructionPage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    return ConstructionPage;
}());
ConstructionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-construction',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/construction/construction.html"*/'<!--\n  Generated template for the ConstructionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n   <ion-navbar color="sacia" hideBackButton="true">\n    <ion-row>\n      <ion-col col-4>\n        \n      </ion-col>\n      <ion-col col-5>\n        <img src="assets/img/logo.png" width="100px" style="display:inline-block" height="70px"/>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<br/><br/>\n<div class="msg" text-center>\n\n<div class="msg1">Sistema Instavél</div>\n\n<br/>\n\nNão foi possível estabelecer conexão.\n\nVerifique o seu sinal de internet ou tente reabrir o aplicativo!\n\n<br/><br/>\nObrigado!\n\n</div>\n\n<br/>\n<button ion-button block margin-top color="sacia" (click)="exitApp()">SAIR</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/construction/construction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */]])
], ConstructionPage);

//# sourceMappingURL=construction.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LeadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LeadPage = (function () {
    function LeadPage(app, nav, toastCtrl, alertCtrl, loadingCtrl, ga, restaurantService, checkInternet, statusBar, formBuilder) {
        this.app = app;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ga = ga;
        this.restaurantService = restaurantService;
        this.checkInternet = checkInternet;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Sugerir Restaurante');
        this.restaurant = {
            country_code: 55
        };
        this.register = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            country_code: [''],
            phone: [''],
            city: [''],
            street: [''],
            number: [''],
            neighborhood: [''],
            state: ['']
        });
    }
    LeadPage.prototype.ionViewDidEnter = function () {
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
    };
    LeadPage.prototype.save = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            return false;
        }
        this.ga.trackEvent('Click', 'Botão Sugerir Restaurante', null, null);
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.restaurantService.lead(_this.restaurant).subscribe(function (result) {
                // remove the popup
                loader.dismiss();
                if (result.status) {
                    _this.register.reset();
                    _this.presentToast(result.message);
                }
                else {
                    _this.presentAlert("Alerta", result.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    LeadPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    LeadPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Tela de sem acesso a internet
    LeadPage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    return LeadPage;
}());
LeadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lead',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/lead/lead.html"*/'<!--\n  Generated template for the LeadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-title>\n      Sugerir Restaurante\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="register" (ngSubmit)="save()" >\n    <ion-grid>\n		<ion-row>\n			<ion-col>\n			  <ion-label stacked>NOME DO RESTAURANTE *</ion-label>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n			  <ion-input \n			  	[ngClass]="{\'error\':!register.controls.name.valid && register.controls.name.dirty, \'success\':register.controls.name.valid && register.controls.name.dirty}"\n			  	type="text" [(ngModel)]="restaurant.name" \n			  	placeholder="Restaurante" \n			  	formControlName="name"></ion-input>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n			  <ion-label stacked>TELEFONE</ion-label>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n			  <ion-input \n			  	[ngClass]="{\'error\':!register.controls.name.valid && register.controls.name.dirty, \'success\':register.controls.name.valid && register.controls.name.dirty}"\n			  	type="text" name="phone" \n			  	placeholder="Telefone ou Celular" \n			  	[(ngModel)]="restaurant.phone" \n			  	formControlName="phone"></ion-input>\n			</ion-col>\n		</ion-row>\n	    <ion-row>\n	        <ion-col col-6>\n	          <ion-label stacked>CIDADE</ion-label>\n	        </ion-col>\n	        <ion-col col-6>\n	          <ion-label stacked>ESTADO</ion-label>\n	        </ion-col>\n	    </ion-row>\n	    <ion-row>\n	        <ion-col col-6>\n	          <ion-input \n	          	[ngClass]="{\'error\':!register.controls.city.valid && register.controls.city.dirty, \'success\':register.controls.city.valid && register.controls.city.dirty}"\n	          	type="text" name="city" \n	          	[(ngModel)]="restaurant.city" \n	          	formControlName="city" \n	          	placeholder="Cidade"></ion-input>\n	        </ion-col>\n	        <ion-col col-6>\n	          <ion-input \n	          	[ngClass]="{\'error\':!register.controls.state.valid && register.controls.state.dirty, \'success\':register.controls.state.valid && register.controls.state.dirty}"\n	          	type="text" \n	          	name="state"  \n	          	[(ngModel)]="restaurant.state" \n	          	formControlName="state" \n	          	placeholder="Estado" ></ion-input>\n	        </ion-col>\n	    </ion-row>\n    </ion-grid>\n\n\n  <button [disabled]="register.invalid" type="submit" ion-button block margin-top color="sacia">ENVIAR</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/lead/lead.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_5__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], LeadPage);

//# sourceMappingURL=lead.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RatingPage = (function () {
    function RatingPage(nav, navParams, toastCtrl, loadingCtrl, statusBar, restaurantService, loginService, cartService, usersProvider, formBuilder) {
        this.nav = nav;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.statusBar = statusBar;
        this.restaurantService = restaurantService;
        this.loginService = loginService;
        this.cartService = cartService;
        this.usersProvider = usersProvider;
        this.formBuilder = formBuilder;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.order = JSON.parse(navParams.get('order'));
        this.restaurant = this.order.orders.restaurant;
        this.register = this.formBuilder.group({
            rate_food: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rate_custo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rate_packing: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rate_delivery: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: ['']
        });
        // Verifica se cliente foi buscar "0"
        if (parseInt(this.order.flag_delivery) < 1) {
            this.register.controls['rate_delivery'].setValue(0);
        }
    }
    RatingPage.prototype.rating = function (rate, description) {
        var _this = this;
        var user = this.loginService.getUser();
        var userString = {
            img: user.img,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            country_code: user.country_code,
            phone: user.phone,
        };
        var json = {
            restaurants_id: this.restaurant.id,
            rate_food: this.register.get('rate_food').value,
            rate_custo: this.register.get('rate_custo').value,
            rate_delivery: this.register.get('rate_delivery').value,
            rate_packing: this.register.get('rate_packing').value,
            description: this.register.get('description').value,
            user: JSON.stringify(userString)
        };
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.restaurantService.rating(json).subscribe(function (result) {
                loader.dismiss();
                if (result.status) {
                    _this.updateRating(json);
                    _this.toast(result.message);
                    _this.nav.pop();
                }
                else {
                    _this.toast(result.message);
                }
            }, function (error) {
                loader.dismiss();
                console.log(error);
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    RatingPage.prototype.toast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RatingPage.prototype.updateRating = function (rating) {
        this.order.orders.rating = rating;
        var json = {
            id: this.order.id,
            orders: JSON.stringify(this.order.orders),
        };
        this.cartService.updateRating(json).subscribe(function (result) {
        });
    };
    RatingPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    RatingPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    RatingPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return RatingPage;
}());
RatingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rating',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/rating/rating.html"*/'<!--\n  Generated template for the RatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          Avaliação\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Avaliação\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-content>\n\n	<div padding-left padding-right>\n	    <div class="info white-bg" padding text-center>\n	      <h2>{{ restaurant.name }}</h2>\n        <h5>Avaliação</h5>\n	    </div>\n  </div>\n\n  <form [formGroup]="register" (ngSubmit)="rating()" >\n    <div class="margin">\n      <span ion-text color="gray" class="label">Comida *</span><br/>\n      <rating\n      	[(ngModel)]="rate_food"\n          readOnly="false"\n          max="5"\n          emptyStarIconName="star-outline"\n          halfStarIconName="star-half"\n          starIconName="star"\n          nullable="false"\n          formControlName="rate_food"  ></rating>\n      <hr/>\n      <span ion-text color="gray" class="label">Custo/Beneficio *</span><br/>\n      <rating\n        [(ngModel)]="rate_custo"\n          readOnly="false"\n          max="5"\n          emptyStarIconName="star-outline"\n          halfStarIconName="star-half"\n          starIconName="star"\n          nullable="false"\n          formControlName="rate_custo"></rating>\n      <span ion-text color="gray" class="label">Embalagem *</span><br/>\n      <rating\n        [(ngModel)]="rate_packing"\n          readOnly="false"\n          max="5"\n          emptyStarIconName="star-outline"\n          halfStarIconName="star-half"\n          starIconName="star"\n          nullable="false"\n          formControlName="rate_packing"></rating>\n      <div *ngIf="order.flag_delivery > 0">\n        <hr/>\n        <span ion-text color="gray" class="label">Tempo de Entrega *</span><br/>\n        <rating\n          [(ngModel)]="rate_delivery"\n            readOnly="false"\n            max="5"\n            emptyStarIconName="star-outline"\n            halfStarIconName="star-half"\n            starIconName="star"\n            nullable="false"\n            formControlName="rate_delivery"  ></rating>\n        </div>\n      </div>\n    <!-- add note -->\n    <div padding>\n      <div class="light-bg" padding>Deixe o seu comentário</div>\n      <div padding>\n        <ion-textarea type="text" placeholder="Ex: comida estava muito boa e a entrega foi super rapida" [(ngModel)]="description" formControlName="description" ></ion-textarea>\n      </div>\n      <div margin-top>\n        <span ion-text color="gray">Todos os campos (*) são obrigatórios.</span>\n      </div>\n      <button [disabled]="register.invalid" type="submit" class="border-button" ion-button block color="secondary">Enviar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/rating/rating.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RatingPage);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SmsPage = (function () {
    function SmsPage(navCtrl, navParams, alertCtrl, toastCtrl, ga, statusBar, loginService, loadingCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela SMS');
        var user = this.loginService.getUser();
        if (!user.amount_requests || !isNaN(user.amount_requests)) {
            user.amount_requests = 0;
        }
        this.profile = {
            country_code: "+55",
            phone: user.phone ? user.phone : '',
            amount_requests: user.amount_requests
        };
        this.codeReceived = {
            code: user.code,
            phone: user.phone
        };
    }
    SmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmsPage');
    };
    SmsPage.prototype.sendSms = function () {
        var _this = this;
        if (!this.profile.phone || this.profile.phone.length < 10) {
            this.presentAlert("Alerta", "Insira o número telefônico");
        }
        this.ga.trackEvent('Click', 'Botão envia sms', null, null);
        var loader = this.loadingCtrl.create({
            content: 'Enviando...'
        });
        // Show the popup
        loader.present().then(function () {
            _this.userService.sendSms(_this.profile.country_code + _this.profile.phone).subscribe(function (result) {
                if (result.status) {
                    _this.codeReceived = result.data;
                    _this.codeReceived = result.data;
                    _this.profile.amount_requests = result.data.amount_requests;
                    _this.presentToast(result.message);
                    _this.userService.setPhone(_this.profile.country_code, _this.profile.phone);
                }
                else {
                    _this.presentAlert("Alerta", result.message);
                }
                loader.dismiss();
            }, function (erro) {
                loader.dismiss();
            });
        });
    };
    SmsPage.prototype.validCode = function () {
        var _this = this;
        if (this.profile.code === this.codeReceived.code + "") {
            this.ga.trackEvent('Click', 'Botão valida codigo sms', null, null);
            var loader_1 = this.loadingCtrl.create({
                content: 'Validando...'
            });
            // Show the popup
            loader_1.present().then(function () {
                _this.userService.updateActivationPhone().subscribe(function (result) {
                    loader_1.dismiss();
                    if (result.status) {
                        _this.presentToast("Pronto, agora é só escolher sua comida.");
                        _this.loginService.setActivation(_this.profile.code, true);
                        _this.closeModal();
                    }
                    else {
                        _this.presentAlert("Alerta", result.message);
                    }
                }, function (error) {
                    loader_1.dismiss();
                });
            });
        }
        else {
            this.presentAlert("Alerta", "Código inválido!");
        }
    };
    SmsPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    SmsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SmsPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    return SmsPage;
}());
SmsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sms',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/sms/sms.html"*/'<!--\n  Generated template for the SmsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Concluir Cadastro\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n<div class="msg1" text-center>Insira o seu número de telefone abaixo, com um prefixo da sua cidade (ex: (34) 98888-8888)</div>\n\n<form (ngSubmit)="sendSms()" style="margin-top: -25px">\n  <ion-list margin-top>\n    <ion-row text-center style="padding: 7px;">\n      <ion-col col-12>\n        <ion-item style="border-radius: 2px">\n          <ion-label> <ion-icon color="redsacia2" name="call"></ion-icon></ion-label>\n          <ion-input \n            type="text" \n            name="phone" \n            placeholder="Celular" \n            [brmasker]="{phone: true}" \n            [(ngModel)]="profile.phone"></ion-input>\n        </ion-item>    \n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <div text-center style="padding-top: 0px; margin-top: -20px; padding-left: 12px; padding-right: 12px;">\n    <span >Tentativas: {{profile.amount_requests}}/5</span>\n    <button \n      [disabled]="!profile.phone || !profile.phone.length" \n      ion-button block \n      color="sacia" \n      type="submit"\n       class="border-button">Adicionar telefone</button>\n  </div>\n</form>\n\n<br/><br/>\n\n\n<form (ngSubmit)="validCode()" style="margin-top: -25px">\n  <ion-list margin-top>\n    <ion-row text-center style="padding: 7px;">\n      <ion-col col-12>\n        <ion-item no-lines class="success" style="border-radius: 2px">\n          <ion-label> <ion-icon color="redsacia2" name="key"></ion-icon></ion-label>\n          <ion-input\n            type="text" \n            [(ngModel)]="profile.code" \n            placeholder="Insira seu codigo" \n            name="code"></ion-input>\n        </ion-item>    \n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <div text-center style="padding-top: 0px; margin-top: -20px; padding-left: 12px; padding-right: 12px;">\n    <button [disabled]="!profile.code || !profile.code.length" ion-button block color="sacia" type="submit" class="border-button">ATIVAR</button>\n  </div>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/sms/sms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
], SmsPage);

//# sourceMappingURL=sms.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PromotionService = (function () {
    function PromotionService(http, loginService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.http = http;
        this.promotions = [];
        this.populate().subscribe(function (result) {
            _this.promotions = result;
        });
    }
    PromotionService.prototype.populate = function () {
        var location = this.loginService.getUser().location;
        if (!location) {
            location = {};
            // Lat e Lng Uberlândia Minas Gerais
            location.latitude = -18.914608;
            location.longitude = -48.275380;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/promotion/restaurant/latitude/" + location.latitude + "/longitude/" + location.longitude, { headers: headers })
            .map(function (res) {
            return res.json().data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
        });
    };
    PromotionService.prototype.getAll = function () {
        return this.promotions;
    };
    PromotionService.prototype.getRestaurants = function (promotionId) {
        for (var i = 0; i < this.promotions.length; i++) {
            if (this.promotions[i].id === promotionId) {
                return this.promotions[i].Restaurants;
            }
        }
        return [];
    };
    PromotionService.prototype.getById = function (id) {
        for (var i = 0; i < this.promotions.length; i++) {
            if (this.promotions[i].id === id) {
                return this.promotions[i];
            }
        }
        return {};
    };
    PromotionService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    return PromotionService;
}());
PromotionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
], PromotionService);

//# sourceMappingURL=promotion-service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HistoryDetailsPage = (function () {
    function HistoryDetailsPage(navParams, nav, historyOrderService, alertCtrl, callNumber, launchNavigator, toastCtrl, ga, usersProvider, statusBar, events, loadingCtrl) {
        this.navParams = navParams;
        this.nav = nav;
        this.historyOrderService = historyOrderService;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.usersProvider = usersProvider;
        this.statusBar = statusBar;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.statusName = ['', 'PENDENTE - AGUARDANDO CONFIRMAÇÃO',
            'EM PREPARO - JÁ FOI CONFIRMADO',
            'SAIU PARA ENTREGA',
            'CONCLUÍDO - PEDIDO ENTREGUE',
            'CANCELADO - PEDIDO CANCELADO',
            'PRONTO - CLIENTE VEM BUSCAR',
        ];
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Acompanhamento do Pedido');
        var orderId = JSON.parse(navParams.get('orderId'));
        this.order = this.historyOrderService.getById(orderId);
        this.order.statusName = this.statusName[this.order.status];
        this.logs = JSON.parse(this.order.log);
        var env = this;
        events.subscribe('order:update', function (response, time) {
            env.getOrderById(response.orderId);
        });
    }
    HistoryDetailsPage.prototype.getOrderById = function (id) {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Atualizando pedido...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.historyOrderService.getRefreshById(id).subscribe(function (result) {
                try {
                    _this.order = result.data;
                    _this.order.statusName = _this.statusName[_this.order.status];
                    _this.logs = JSON.parse(_this.order.log);
                    loader.dismiss();
                }
                catch (ex) {
                    loader.dismiss();
                }
            }, function (error) {
                console.log(error);
                loader.dismiss();
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    HistoryDetailsPage.prototype.getPayment = function (payment) {
        var name = payment.name;
        var card = payment.card ? payment.card : '';
        var online = card.length && payment.is_online === 0 ? 'máquina' : '';
        return name + ' ' + card + ' ' + online;
    };
    HistoryDetailsPage.prototype.getFrete = function (frete) {
        if (frete && !isNaN(frete)) {
            return "R$" + parseFloat(frete).toFixed(2);
        }
        else {
            return 'Grátis';
        }
    };
    HistoryDetailsPage.prototype.getTotal = function (total) {
        if (typeof total === 'string') {
            return parseFloat(total).toFixed(2);
        }
        return total;
    };
    HistoryDetailsPage.prototype.getPriceItem = function (price) {
        return price ? parseFloat(price) : 0.00;
    };
    HistoryDetailsPage.prototype.isDelivery = function () {
        if (parseInt(this.order.flag_delivery) > 0) {
            return true;
        }
        return false;
    };
    HistoryDetailsPage.prototype.orderCancel = function (note) {
        var _this = this;
        // 5 -> CANCELADO - PEDIDO CANCELADO
        var order = {
            userName: this.order.orders.user.first_name + " " + this.order.orders.user.last_name,
            status: 5,
            note: note,
            orderId: this.order.id
        };
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Aguarde o cancelamento...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.historyOrderService.cancelOrder(order).subscribe(function (result) {
                if (result.status) {
                    _this.order.status = result.orderStatus;
                    _this.order.note = result.note;
                    _this.presentToast(result.message);
                }
                else {
                    _this.presentAlert(result.message);
                }
                loader.dismiss();
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    HistoryDetailsPage.prototype.isDiscount = function (discount) {
        try {
            discount = JSON.parse(discount);
            return discount && discount.status;
        }
        catch (ex) {
            return false;
        }
    };
    HistoryDetailsPage.prototype.getFormatDate = function () {
        var stringDate = this.logs.status[0].updatedAt;
        stringDate = stringDate.substring(0, stringDate.lastIndexOf("-"));
        var split = stringDate.split('T');
        var date = split[0].split('-');
        var time = split[1].split('.');
        return date[2] + '/' + date[1] + '/' + date[0] + ' ' + time[0];
    };
    HistoryDetailsPage.prototype.ionViewDidEnter = function () {
        if (this.order && this.order.id) {
            this.order = this.historyOrderService.getById(this.order.id);
        }
    };
    HistoryDetailsPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    HistoryDetailsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HistoryDetailsPage.prototype.presentOrderCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'CANCELAR PEDIDO',
            message: 'Você realmente deseja cancelar o seu pedido?',
            inputs: [{
                    name: 'note',
                    placeholder: 'Motivo do cancelamento'
                }],
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sim',
                    handler: function (data) {
                        if (data.note) {
                            _this.orderCancel(data.note);
                        }
                        else {
                            _this.presentAlert("Motivo do cancelamento é obrigatório");
                        }
                    }
                }]
        });
        alert.present();
    };
    HistoryDetailsPage.prototype.showCallNumber = function (number) {
        this.callNumber.callNumber(number, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    HistoryDetailsPage.prototype.navigate = function () {
        var startLat = this.order.orders.address.latitude, startLng = this.order.orders.address.longitude, endLat = this.order.orders.restaurant.address.latitude, endLng = this.order.orders.restaurant.address.longitude;
        this.launchNavigator.navigate([endLat, endLng], {
            start: startLat + ',' + startLng,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        });
    };
    // go to login page
    HistoryDetailsPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    HistoryDetailsPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    HistoryDetailsPage.prototype.getShowObservacao = function (order) {
        if (order.note && order.status !== 4 && order.status !== 6) {
            return true;
        }
        return false;
    };
    HistoryDetailsPage.prototype.getStatus = function (status) {
        return parseInt(status);
    };
    HistoryDetailsPage.prototype.getDiscount = function (discount) {
        discount = JSON.parse(discount);
        if (discount.discount_type === "1" || discount.discount_type === true) {
            return discount.value + "%";
        }
        else {
            return "R$ " + discount.value;
        }
    };
    return HistoryDetailsPage;
}());
HistoryDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history-detail',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/order/details/history-detail.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          {{ order.orders.restaurant.name }}\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title >\n      {{ order.orders.restaurant.name }}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <img src="{{ order.orders.restaurant.thumb }}" class="size-thumb" alt="">\n  <!--restaurant info-->\n  <div class="light-bg">\n    <div class="info white-bg" padding text-center>\n      <h2>{{ order.orders.restaurant.name }}</h2>\n      <div class="text-bold">\n        <span ion-text color="green">{{ order.statusName }}</span>\n      </div>\n      \n      <span *ngIf="isDelivery()" ion-text color="gray">Entrega: {{ order.orders.restaurant.delivery_min }} - {{ order.orders.restaurant.delivery_max }}</span>\n\n      <span *ngIf="!isDelivery()" ion-text color="gray">Espera: {{ order.orders.restaurant.delivery_min }} - {{ order.orders.restaurant.delivery_max }}</span>\n\n      <br/>\n      \n      <button ion-button (click)="presentOrderCancel()" class="pull-right" *ngIf="order.status === \'1\'" color="redsacia">CANCELAR</button>\n    </div>\n  </div>\n\n  <ion-card *ngIf="order.orders.restaurant.phone && getStatus(order.status) < 4 ">\n    <ion-card-header >\n      Chamar Restaurante\n    </ion-card-header>\n    <ion-card-content>\n      \n      <button (click)="showCallNumber(order.orders.restaurant.phone)" ion-button block margin-top color="sacia"><ion-icon name="call"></ion-icon>&nbsp;&nbsp; Ligar</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="!isDelivery() && getStatus(order.status) < 4 ">\n    <ion-card-header >\n      Como chegar\n    </ion-card-header>\n    <ion-card-content>\n      \n      <button (click)="navigate()" ion-button block margin-top color="maps"><ion-icon name="navigate"></ion-icon>&nbsp;&nbsp; Navegar</button>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngIf="getStatus(order.status) < 4">\n    <ion-card-header >\n      Nº do pedido: <span style="color: #93c35d">#{{ order.id }}</span>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngIf="getStatus(order.status) < 4">\n    <ion-card-header >\n      Tempo em Espera: {{ order.waitingTime }}\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngIf="getShowObservacao(order) && getStatus(order.status) !== 4">\n    <ion-card-header >\n      Observação\n    </ion-card-header>\n    <ion-card-content>\n      {{order.note}}\n    </ion-card-content>\n  </ion-card>\n\n   <ion-card>\n    <ion-card-header >\n      Produtos\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n        <ion-list>\n          <ion-item *ngFor="let item of order.orders.items">\n            <ion-row>\n              <ion-col col-3 *ngIf="item.thumb">\n                <img src="{{ item.thumb }}" item-left>          \n              </ion-col>\n              <ion-col col-8 class="items-selected">\n                {{ item.name }} x {{item.quantity}}\n                <br/>\n                \n                <div class="bottom" *ngIf="item.options.required.name">\n                <span ion-text color="gray" class="label">{{item.options.required.name}} • R$ {{getPriceItem(item.options.required.name.price).toFixed(2)}}</span><br/>\n                </div>\n                \n                <div class="bottom" *ngFor="let i of item.options.optional">\n                  <span ion-text color="gray" class="label">{{i.name}} • R$ {{getPriceItem(i.price).toFixed(2)}} </span><br/>\n                </div>\n\n                <div class="bottom" *ngIf="item.description">\n                  <span ion-text color="gray" class="label">{{item.description}}</span><br/>\n                </div>\n\n                <div class="bottom">\n                  <span ion-text color="green" class="label">Total: R$ {{item.total.toFixed(2)}} </span><br/>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="isDelivery()">\n    <ion-card-header >\n      Endereço de entrega\n    </ion-card-header>\n    <ion-card-content>\n      {{order.orders.address.street}} • {{order.orders.address.number}}<br/>\n      <div *ngIf="order.orders.address.complement" >Complemento: {{order.orders.address.complement}}<br/></div>\n      Bairro: {{order.orders.address.neighborhood}}<br/>\n      {{order.orders.address.city}} • {{order.orders.address.state}}<br/>\n      CEP: {{order.orders.address.cep}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="!isDelivery()">\n    <ion-card-content>\n      Cliente vai buscar.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      Horário do pedido\n    </ion-card-header>\n    <ion-card-content>\n      {{  getFormatDate()  }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      Pagamento\n    </ion-card-header>\n    <ion-card-content>\n      <span>{{order.orders.payment.name}}</span>\n      <span *ngIf="order.orders.payment.card">{{order.orders.payment.card}}</span>\n      <span *ngIf="order.orders.money">Troco {{order.orders.money}}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      Subtotal\n    </ion-card-header>\n    <ion-card-content>\n      R$ {{ getTotal(order.sub_total) }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.flag_delivery">\n    <ion-card-header >\n      Frete\n    </ion-card-header>\n    <ion-card-content>\n      {{ getFrete( order.frete ) }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.cashback && order.cashback > 0">\n    <ion-card-header >\n      Cashback\n    </ion-card-header>\n    <ion-card-content>\n      R$ {{ order.cashback }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="isDiscount(order.discount)">\n    <ion-card-header >\n      Desconto\n    </ion-card-header>\n    <ion-card-content>\n      {{ getDiscount(order.discount) }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content color="green" class="text-bold total">\n        Total: R$ {{ getTotal(order.total) }}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/order/details/history-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_history_order_service__["a" /* HistoryOrderService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], HistoryDetailsPage);

//# sourceMappingURL=history-detail.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_address__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorite_favorite__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lead_lead__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__digital_wallet_digital_wallet__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var UserPage = (function () {
    function UserPage(nav, app, alertCtrl, loginService, toastCtrl, statusBar, usersProvider) {
        this.nav = nav;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.usersProvider = usersProvider;
        // username
        this.username = 'Perfil';
        this.isLogged = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
    }
    // got to payment setting
    UserPage.prototype.goToPayment = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    // go to help page
    UserPage.prototype.goToHelp = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    UserPage.prototype.goToFavorite = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__favorite_favorite__["a" /* FavoritePage */]);
    };
    // go to setting page
    UserPage.prototype.goToSetting = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    // go to setting page
    UserPage.prototype.goToDigitalWallet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__digital_wallet_digital_wallet__["a" /* DigitalWalletPage */]);
    };
    // go to setting page
    UserPage.prototype.goToAddress = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__address_address__["a" /* AddressPage */]);
    };
    // go to lead page
    UserPage.prototype.goToLead = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__lead_lead__["a" /* LeadPage */]);
    };
    // go to term page
    UserPage.prototype.getTerm = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__terms_terms__["a" /* TermsPage */]);
    };
    // go to login page
    UserPage.prototype.goToLogout = function () {
        this.presentConfirm();
    };
    // Remove o usuário do banco de dados local
    UserPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    UserPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    UserPage.prototype.ionViewWillEnter = function () {
        this.isLogged = this.loginService.isLogged();
        if (!this.isLogged) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */], {
                backButton: true
            });
            this.username = 'Perfil';
        }
        else {
            var user = this.loginService.getUser();
            this.username = user.first_name + ' ' + user.last_name;
        }
    };
    UserPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Você tem certeza?',
            message: 'Deseja realmente sair?',
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.loginService.setUser({});
                        _this.updateUser();
                        _this.presentToast("Usuário deslogado");
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */], {
                            backButton: true
                        });
                    }
                }]
        });
        alert.present();
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/user/user.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          {{ username }}\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      {{ username }}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list *ngIf="isLogged">\n    <ion-item (click)="goToSetting()" class="item-padding">\n      <ion-icon name="contact" item-left></ion-icon>\n      Perfil\n    </ion-item>\n    <ion-item (click)="goToDigitalWallet()" class="item-padding">\n      <ion-icon name="cash" item-left></ion-icon>\n      Carteira Digital\n    </ion-item>\n    <ion-item (click)="goToAddress()" class="item-padding">\n      <ion-icon name="md-map" item-left></ion-icon>\n      Meus endereços\n    </ion-item>\n    <ion-item (click)="goToFavorite()" class="item-padding">\n      <ion-icon name="md-heart" item-left></ion-icon>\n      Favoritos\n    </ion-item>\n    <ion-item (click)="goToHelp()" class="item-padding">\n      <ion-icon name="md-help" item-left></ion-icon>\n      Ajuda\n    </ion-item>\n    <ion-item (click)="goToLead()" class="item-padding">\n      <ion-icon name="restaurant" item-left></ion-icon>\n      Sugerir Restaurante\n    </ion-item>\n    <ion-item (click)="getTerm()" class="item-padding">\n      <ion-icon name="paper" item-left></ion-icon>\n      Termos e Condições\n    </ion-item>    \n    <ion-item (click)="goToLogout()" class="item-padding">\n      <ion-icon name="log-out" item-left></ion-icon>\n      Sair\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/user/user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_7__providers_users_users__["b" /* UsersProvider */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppVersionService = (function () {
    function AppVersionService(http, plt, version) {
        this.http = http;
        this.plt = plt;
        this.version = version;
        this.http = http;
        this.getCurrentAppVersion();
    }
    // Busca nas configurações em qual versão se encontra o aplicativo.
    AppVersionService.prototype.getCurrentAppVersion = function () {
        var _this = this;
        this.version.getVersionCode().then(function (result) {
            _this.appVersion = result.toString();
            console.log(_this.appVersion);
        })
            .catch(function (error) {
            _this.appVersion = null;
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
        });
    };
    // Busca no servidor em qual versão deve ser executado o aplicativo
    AppVersionService.prototype.populate = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/app-version/last-version/origin/" + this.plt._platforms.toString())
            .map(function (res) {
            _this.newVersion = res.json().data.version;
            return res.json();
        })
            .catch(function (error) {
            console.log("Passei aqui truta");
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AppVersionService.prototype.getAppVersion = function () {
        return this.appVersion;
    };
    AppVersionService.prototype.getNewVersion = function () {
        return this.newVersion;
    };
    return AppVersionService;
}());
AppVersionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */]])
], AppVersionService);

//# sourceMappingURL=app-version-service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_recover__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(nav, view, navParams, loginService, alertCtrl, toastCtrl, facebook, ga, statusBar, checkInternet, loadingCtrl, usersProvider) {
        this.nav = nav;
        this.view = view;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.ga = ga;
        this.statusBar = statusBar;
        this.checkInternet = checkInternet;
        this.loadingCtrl = loadingCtrl;
        this.usersProvider = usersProvider;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Login');
        this.loginService = loginService;
        this.profile = {};
        // this.profile.email = 'sms@gmail.com';
        // this.profile.password = '123456';
        this.getLocation();
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        if (this.navParams.get('backButton')) {
            this.view.showBackButton(false);
        }
        if (this.loginService.isLogged()) {
            this.popNav();
        }
    };
    LoginPage.prototype.getLocation = function () {
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            return false;
        }
        this.loginService.getLocation();
    };
    // login
    LoginPage.prototype.login = function () {
        // FIM data lançamento
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        if (!this.profile.email || !this.profile.password) {
            this.presentAlert("Alerta", "E-mail e senha deve ser preenchidos");
            return;
        }
        // TODO add your login code here
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present().then(function () {
            _this.loginService.login(_this.profile).subscribe(function (result) {
                loader.dismiss();
                if (result.status) {
                    //Após realizar o login salvar o usuário no banco de dados local.
                    _this.saveUserDatabase(_this.loginService.getUser());
                    // Apresentar a mensagem recebida do servidor
                    _this.presentToast(result.message);
                    _this.popNav();
                }
                else {
                    // Apresenta a mensagem de erro vindo do servidor.
                    _this.presentAlert("Alerta", result.message);
                }
            }, function (error) {
                loader.dismiss();
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                // remove the popup
                console.log(error);
            });
        });
    };
    /**
     * Login API do FACEBOOK
     * Após buscar os dados (nome, email, ...) é realizado uma busca no nosso servidor.
     */
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        var env = this;
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        var permissions = new Array();
        permissions = ["public_profile", "email"];
        loader.present();
        this.facebook.login(permissions).then(function (response) {
            var params = new Array();
            var userId = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            _this.facebook.api("/me?fields=name,email", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                var json = {
                    img: user.picture,
                    first_name: user.name,
                    last_name: '',
                    email: user.email,
                    gender: user.gender,
                    authenticate: 'facebook',
                    token: accessToken
                };
                // Verificar se facebook retornou o email do usuário
                if (json.email) {
                    env.completeLoginExternal(json);
                }
                else {
                    env.presentToast('É preciso ter um e-mail em sua conta do Facebook.');
                }
                loader.dismiss();
            }, function (error) {
                loader.dismiss();
                alert(error);
                console.log('ERRO LOGIN: ', error);
            });
        }, function (error) {
            if (error.name === "TimeoutError") {
                _this.presentToast('Tente novamente!');
            }
            console.log('Error logging into Facebook', error);
        });
    };
    /**
     * Após realizar um login externo (Facebook) é realizado a busca do usuário na nossa base
     *
     */
    LoginPage.prototype.completeLoginExternal = function (user) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present().then(function () {
            //now we have the users info, let's save it in the NativeStorage
            _this.loginService.loginExternal(user).subscribe(function (result) {
                loader.dismiss();
                if (result.status) {
                    //Após realizar o login salvar o usuário no banco de dados local.
                    _this.saveUserDatabase(_this.loginService.getUser());
                    // Caso tenha alguma informação para mostrar o usuário
                    if (result.data.information && result.data.information.status) {
                        _this.presentAlert("", result.data.information.msg);
                    }
                    else {
                        // Apresentar a mensagem recebida do servidor
                        _this.presentToast(result.message);
                    }
                    _this.popNav();
                }
                else {
                    _this.presentAlert("Alerta", result.message);
                }
            }, function (error) {
                loader.dismiss();
                // remove the popup
                console.log(error);
            });
        });
    };
    // go to register page
    LoginPage.prototype.signUp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.withoutInternet = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    // go to recover password page
    LoginPage.prototype.recover = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__recover_recover__["a" /* RecoverPage */]);
    };
    LoginPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.saveUserDatabase = function (user) {
        var model = new __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["a" /* User */]();
        model.id = 1;
        model.json = JSON.stringify(user);
        this.updateUser(model)
            .then(function () {
            console.log("Usuário inserido no banco de dados com sucesso");
        })
            .catch(function () {
            console.log("Erro ao tentar salvar o usuário no banco de dados local");
        });
    };
    // Salva o usuário no banco de dados local
    LoginPage.prototype.updateUser = function (model) {
        return this.usersProvider.update(model);
    };
    LoginPage.prototype.popNav = function () {
        this.nav.pop();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/login/login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-title>\n      Entrar em Sacia Fome\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="white">\n\n  <br/>\n  \n  <form (ngSubmit)="login()" style="margin-top: -25px">\n      <ion-list margin-top>\n        <ion-row text-center style="margin-right: 16px;">\n          <ion-col col-12>\n            <ion-item style="border-radius: 2px; border-bottom: none;">\n              <ion-label> \n                <ion-icon color="redsacia2" name="at"></ion-icon>\n              </ion-label>\n              \n              <ion-input type="email" \n                [(ngModel)]="profile.email" \n                placeholder="Digite seu email" \n                name="email"></ion-input>\n            </ion-item>    \n          </ion-col>\n          <ion-col col-12>\n            <ion-item style="border-radius: 2px; border-bottom: none;">\n              <ion-label> \n                <ion-icon color="redsacia2" name="lock"></ion-icon>\n              </ion-label>\n              \n              <ion-input\n                type="password"\n                clearOnEdit="false"\n                [(ngModel)]="profile.password" \n                placeholder="Digite sua senha" \n                name="password">\n              </ion-input>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n      <div text-center style="padding-top: 0px; margin-top: -20px; padding-left: 12px; padding-right: 12px;">\n        <br/>\n        <button ion-button block color="secondary" type="submit" class="border-button">Login</button>\n        <span ion-text color="sacia" (click)="recover()" margin-top>Esqueceu a sua senha?</span>\n      </div>\n  </form>\n\n  <div text-center style="padding-top: 0px; padding: 12px;">\n    <button ion-button block margin-bottom color="facebook" class="border-button" (click)="loginFacebook()">Entrar com Facebook</button>\n  </div>\n\n  <div text-center>\n    <span ion-text (click)="signUp()" margin-top>\n      Não tem uma conta ainda?\n      <span style="color: #ffb42d">Cadastre-se</span>\n    </span>\n  </div>\n  <br/><br/>\n  \n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["b" /* UsersProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = (function () {
    function CartService(loginService, plt, http) {
        this.loginService = loginService;
        this.plt = plt;
        this.http = http;
        this.initCart();
    }
    CartService.prototype.initCart = function () {
        this.cart = {
            flag_delivery: undefined,
            status: 1,
            frete: 0.0,
            discount: {
                status: false,
                name: '',
                value: 0.0
            },
            subTotal: 0.0,
            total: 0.0,
            push_user_id: '',
            payment: {},
            users_id: '',
            restaurants_id: '',
            orders: {
                restaurant: {},
                items: [],
                address: {}
            }
        };
    };
    CartService.prototype.getCart = function () {
        if (this.cart.orders.user) {
            var user = this.setUser(this.loginService.getUser());
            this.cart.orders.user = user;
            this.cart.users_id = user.id;
        }
        return this.cart;
    };
    CartService.prototype.getRestaurant = function () {
        return this.cart.orders.restaurant;
    };
    CartService.prototype.remove = function (item) {
        this.cart.orders.items.splice(this.cart.orders.items.indexOf(item), 1);
        this.priceTotal();
    };
    CartService.prototype.addItem = function (item) {
        item = this.calculate(item);
        this.cart.orders.items.push(item);
        this.priceTotal();
    };
    CartService.prototype.updateItem = function (position, item) {
        item = this.calculate(item);
        this.cart.orders.items[position] = item;
        this.priceTotal();
    };
    CartService.prototype.setUser = function (user) {
        user = {
            id: user.id,
            img: user.img,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            cpf: user.cpf,
            country_code: user.country_code,
            phone: user.phone,
            isNew: user.isNew
        };
        return user;
    };
    CartService.prototype.getDiscount = function () {
        return this.discount;
    };
    CartService.prototype.setDiscount = function (discount) {
        this.discount = {
            status: discount.status !== undefined ? discount.status : true,
            name: discount.name,
            value: discount.price,
            discount_type: discount.discount_type
        };
    };
    CartService.prototype.setPromotion = function (promotion) {
        this.promotion = {
            img: promotion.img,
            name: promotion.name,
            description: promotion.description,
            cupom: promotion.cupom,
            only_new_user: promotion.only_new_user,
            free_delivery: promotion.free_delivery,
            is_valid: promotion.is_valid
        };
        try {
            var discount = JSON.parse(this.promotion.cupom);
            this.setDiscount(discount);
        }
        catch (ex) {
            this.setDiscount({});
        }
    };
    CartService.prototype.calculate = function (item) {
        item = Object.assign({}, item);
        var additional = 0;
        if (item.itemRequired) {
            var itemRequired_1 = [];
            item.options.required.forEach(function (el) {
                if (el.id === parseInt(item.itemRequired)) {
                    item.price = el.price;
                    itemRequired_1.push(el);
                }
            });
            // Somentes os itens required que foram selecionado
            item.options.required = itemRequired_1;
        }
        var itemOptionals = [];
        item.options.optional.forEach(function (el) {
            if (el.selected) {
                additional += parseFloat(el.price);
                itemOptionals.push(el);
            }
        });
        // Somentes os itens opcionais que foram selecionado  
        item.options.optional = itemOptionals;
        item.Additionals = undefined;
        if (typeof item.price === 'string') {
            item.price = item.price.replace(",", ".");
        }
        item.total = (additional + parseFloat(item.price)) * item.quantity;
        return item;
    };
    CartService.prototype.priceTotal = function () {
        var cart = this.cart;
        cart.total = 0;
        this.cart.orders.items.forEach(function (el) {
            cart.total += el.total;
        });
        this.cart.subTotal = this.cart.total;
        if (this.cart.discount && this.cart.discount.name) {
            if (this.cart.discount.discount_type === '1' || this.cart.discount.discount_type === true) {
                this.cart.total = this.cart.subTotal - (this.cart.subTotal * (this.cart.discount.value / 100));
            }
            else {
                this.cart.total = this.cart.subTotal - this.cart.discount.value;
            }
        }
    };
    CartService.prototype.getTotal = function () {
        if (this.cart.flag_delivery === "1" && !isNaN(this.cart.frete)) {
            this.cart.cashback = this.cart.cashback >= (this.cart.subTotal + this.cart.frete) ? this.cart.subTotal + this.cart.frete : this.cart.cashback;
            this.cart.total = this.cart.subTotal + this.cart.frete - this.cart.cashback;
        }
        else {
            this.cart.cashback = this.cart.cashback >= this.cart.subTotal ? this.cart.subTotal : this.cart.cashback;
            this.cart.total = (this.cart.subTotal - this.cart.cashback) < 0 ? 0.00 : this.cart.subTotal - this.cart.cashback;
        }
        if (this.cart.discount && this.cart.discount.name) {
            if (this.cart.discount.discount_type === "1" || this.cart.discount.discount_type === true) {
                this.cart.total = this.cart.total - (this.cart.subTotal * (this.cart.discount.value / 100));
            }
            else {
                this.cart.total = this.cart.total - this.cart.discount.value;
            }
        }
        return this.cart.total;
    };
    CartService.prototype.setAddress = function (address) {
        this.cart.orders.address = address;
    };
    CartService.prototype.setRestaurant = function (restaurant) {
        var frete = null;
        if (restaurant.precoFrete) {
            frete = restaurant.precoFrete;
        }
        else {
            frete = this.calculateFrete(restaurant.frete, restaurant.frete_km, restaurant.km_max, restaurant.km_normal, restaurant.distance);
        }
        var user = this.setUser(this.loginService.getUser());
        this.cart = {
            flag_delivery: undefined,
            status: 1,
            frete: frete,
            discount: this.discount,
            subTotal: 0.0,
            total: 0.0,
            push_user_id: this.pushUserId,
            users_id: user.id,
            restaurants_id: restaurant.id,
            orders: {
                user: user,
                restaurant: this.restaurantFields(restaurant),
                items: [],
                address: this.loginService.getUser().location,
                payment: restaurant.Payments,
                promotion: this.promotion
            },
            cashback: 0.0,
            percentage_discount: restaurant.percentage_discount,
            origin: this.plt._platforms.toString()
        };
    };
    CartService.prototype.restaurantFields = function (restaurant) {
        return {
            id: restaurant.id,
            img: restaurant.img,
            name: restaurant.name,
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
            delivery_min: restaurant.delivery_min,
            delivery_max: restaurant.delivery_max,
            frete: restaurant.frete,
            frete_km: restaurant.frete_km,
            km_max: restaurant.km_max,
            km_normal: restaurant.km_normal,
            phone: restaurant.phone,
            distance: restaurant.distance,
            delivery_pickup: restaurant.delivery_pickup,
            address: {
                street: restaurant.street,
                number: restaurant.number,
                complement: restaurant.complement,
                neighborhood: restaurant.neighborhood,
                city: restaurant.city,
                state: restaurant.state,
                cep: restaurant.cep,
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
            }
        };
    };
    CartService.prototype.setPhone = function (phone) {
        this.cart.orders.user.phone = phone;
    };
    CartService.prototype.getItemRequired = function (item) {
        if (item.itemRequired) {
            for (var i = 0; i < item.options.required.length; i++) {
                var el = item.options.required[i];
                if (el.id === parseInt(item.itemRequired)) {
                    return el;
                }
            }
        }
        return {};
    };
    CartService.prototype.getItemOptionals = function (item) {
        var optionals = [];
        for (var i = 0; i < item.options.optional.length; i++) {
            var el = item.options.optional[i];
            if (el.selected) {
                optionals.push(el);
            }
        }
        return optionals;
    };
    CartService.prototype.sendOrder = function () {
        for (var i = 0; i < this.cart.orders.items.length; i++) {
            var item = this.cart.orders.items[i];
            item.options.required = this.getItemRequired(item);
            item.options.optional = this.getItemOptionals(item);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/orders", this.cart, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
        });
    };
    CartService.prototype.setPushUserId = function (pushUserId) {
        if (pushUserId) {
            this.pushUserId = pushUserId;
        }
    };
    CartService.prototype.updateRating = function (orders) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/orders/rating", orders, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
        });
    };
    /*  Seta o valor do frete
     * frete -> valor cobrado até a kilometragem max, após exceder é cobrado por km excedido (km_normal)
     * stringKmMax (até onde o estabelecimento realiza as entregas)
     * km_normal valor que sera cobrado o preço fixo do frete
     * frete_km -> caso exceda o a kilometragem do preço normal
     * distance -> distancia entre o usuário e o estabelecimento
     */
    CartService.prototype.calculateFrete = function (frete, frete_km, stringKmMax, km_normal, distance) {
        var kmMax;
        kmMax = parseFloat(stringKmMax);
        if (kmMax >= distance) {
            if (this.promotion && this.promotion.free_delivery) {
                return "Grátis";
            }
            if (isNaN(frete)) {
                return "Grátis";
            }
            // Pega a distancia excedida pelo preço normal
            var valorExtra = parseFloat(distance) - parseFloat(km_normal);
            valorExtra = valorExtra > 0 ? valorExtra : 0.0;
            var price = parseFloat(frete) + (valorExtra * parseFloat(frete_km));
            return price > 0 ? price : "Grátis";
        }
        else {
            return null;
        }
    };
    CartService.prototype.setFrete = function (frete) {
        this.cart.frete = frete;
    };
    CartService.prototype.precoFrete = function () {
        var address = this.cart.orders.address;
        var payload = {
            destinationsLatitude: address.latitude,
            destinationsLongitude: address.longitude,
            restaurants_id: this.cart.restaurants_id
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/calcula-frete", payload)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    CartService.prototype.hasItems = function () {
        return !!(this.cart.orders.items && this.cart.orders.items.length > 0);
    };
    CartService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    // Metodo para calcular a distancia entre dois endereços
    CartService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        // Radius of the earth in km
        var R = 6371;
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Distance in km
        return R * c;
    };
    CartService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], CartService);

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckInternet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckInternet = (function () {
    function CheckInternet(network) {
        this.network = network;
        this.myConnection = this.network.type && this.network.type !== 'none' ? true : false;
        var env = this;
        this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            env.myConnection = true;
        });
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            env.myConnection = false;
            console.log('network was disconnected :-(');
        });
    }
    /**
     * Verifica o tipo de conexão do usuário (3g, 4g, none, ...)
     *  Caso usuário não esteja conectado é retornado "none"
     */
    CheckInternet.prototype.isInternet = function () {
        if (!this.myConnection) {
            this.myConnection = this.network.type && this.network.type !== 'none' ? true : false;
        }
        return this.myConnection ? this.myConnection : false;
    };
    return CheckInternet;
}());
CheckInternet = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
], CheckInternet);

//# sourceMappingURL=check-internet.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestaurantService = (function () {
    function RestaurantService(loginService, categoryService, http) {
        this.loginService = loginService;
        this.categoryService = categoryService;
        this.http = http;
        this.offset = 0;
        this.haveMore = true;
        this.restaurants = [];
    }
    // Inicializa pelo home.ts
    RestaurantService.prototype.getInitialHome = function () {
        var _this = this;
        var location = this.getUserLocation();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/latitude/" + location.latitude + "/longitude/" + location.longitude + "/offset/" + this.offset + "/limit/15")
            .timeout(20000)
            .map(function (res) {
            _this.haveMore = res.json().data && res.json().data.length ? true : false;
            _this.restaurants = _this.arrayUnique(_this.restaurants.concat(res.json().data));
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    // Melhorar Chamada getInitialHome e getRestaurants fazem a mesma coisa
    RestaurantService.prototype.getRestaurants = function (offset) {
        var _this = this;
        var location = this.getUserLocation();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/latitude/" + location.latitude + "/longitude/" + location.longitude + "/offset/" + offset + "/limit/15")
            .timeout(20000)
            .map(function (res) {
            if (offset === 0) {
                _this.restaurants = res.json().data;
            }
            else {
                _this.restaurants = _this.arrayUnique(_this.restaurants.concat(res.json().data));
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    RestaurantService.prototype.resetOffset = function () {
        this.offset = 0;
        this.restaurants = [];
    };
    RestaurantService.prototype.setOffset = function (offset) {
        this.offset += offset;
    };
    // Pega a localização do usuário
    RestaurantService.prototype.getUserLocation = function () {
        var location = this.loginService.getUser().location;
        return location ? location : { latitude: null, longitude: null };
    };
    RestaurantService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    RestaurantService.prototype.getHaveMore = function () {
        return this.haveMore;
    };
    //Busca todos os restaurantes por ids [1,2,3]
    RestaurantService.prototype.getByIds = function (ids) {
        var _this = this;
        var lat, lng;
        var location = this.getUserLocation();
        if (location && location.latitude) {
            lat = location.latitude;
            lng = location.longitude;
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/ids/" + JSON.stringify(ids) + "/latitude/" + lat + "/longitude/" + lng)
            .timeout(10000)
            .map(function (res) {
            var restaurants = res.json().data;
            if (restaurants && restaurants.length) {
                for (var i = 0; i < restaurants.length; i++) {
                    _this.favoritesRestaurants.push(restaurants[i]);
                }
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    // Retorna os que ainda não foi carregado
    RestaurantService.prototype.getByFavoriteAlreadyLoad = function (ids) {
        this.favoritesRestaurants = [];
        if (!this.restaurants) {
            this.restaurants = [];
        }
        for (var i = 0; i < this.restaurants.length; i++) {
            for (var j = 0; j < ids.length; j++) {
                if (this.restaurants[i].id === ids[j]) {
                    this.favoritesRestaurants.push(this.restaurants[i]);
                    ids.splice(j, 1);
                    break;
                }
            }
        }
        return ids;
    };
    RestaurantService.prototype.getFavoritesRestaurants = function () {
        return this.favoritesRestaurants;
    };
    // Busca os restaurantes pelo nome %name%
    RestaurantService.prototype.getByLike = function (value) {
        var location = this.getUserLocation();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/like/" + value + "/latitude/" + location.latitude + "/longitude/" + location.longitude)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    // Busca os restaurantes pela categoria do restaurante
    RestaurantService.prototype.getByCategory = function (id) {
        var location = this.getUserLocation();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/category/" + id + "/latitude/" + location.latitude + "/longitude/" + location.longitude)
            .timeout(10000)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    RestaurantService.prototype.getAll = function () {
        return this.restaurants;
    };
    RestaurantService.prototype.getPayment = function (id) {
        var validPayments = [];
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === id) {
                return this.restaurants[i].Payments;
            }
        }
        return validPayments;
    };
    // Busca o restaurante pelo id -> busca completa
    RestaurantService.prototype.getById = function (id) {
        var _this = this;
        var location = this.getUserLocation();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/" + id + "/latitude/" + location.latitude + "/longitude/" + location.longitude)
            .timeout(15000)
            .map(function (res) {
            if (res.json().status) {
                var restaurant = _this.getExistById(res.json().data.id);
                if (restaurant && restaurant.id) {
                    _this.overwriteRestaurant(res.json().data);
                }
                else {
                    _this.restaurants.push(res.json().data);
                }
            }
            return res.json().data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    // Verifica se o restaurante ja esta na lista carregada
    RestaurantService.prototype.getExistById = function (id) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === id) {
                return this.restaurants[i];
            }
        }
        return {};
    };
    // Sobreescreve o restaurante já carregado
    RestaurantService.prototype.overwriteRestaurant = function (restaurant) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === restaurant.id) {
                this.restaurants[i] = restaurant;
            }
        }
    };
    RestaurantService.prototype.remove = function (item) {
        this.restaurants.splice(this.restaurants.indexOf(item), 1);
    };
    RestaurantService.prototype.rating = function (rate) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/rating", rate, { headers: headers })
            .timeout(10000)
            .map(function (res) {
            var result = res.json().data;
            var json = {
                id: rate.restaurants_id,
                stars: result
            };
            _this.updateRatingRestaurant(json).subscribe(function (result) { });
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    RestaurantService.prototype.updateRatingRestaurant = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/restaurant/rating", json, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    RestaurantService.prototype.getRatings = function (restaurantId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/rating/restaurant/" + restaurantId)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    RestaurantService.prototype.lead = function (restaurant) {
        restaurant.createdBy = this.loginService.getUser().email;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].url + "/lead", restaurant, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    RestaurantService.prototype.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].id === a[j].id)
                    a.splice(j--, 1);
            }
        }
        return a;
    };
    return RestaurantService;
}());
RestaurantService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], RestaurantService);

//# sourceMappingURL=restaurant-service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    //Produção Google
    //url: "https://prod.saciafome.com"
    //Desenvolvimento
    url: "https://www.uaifoody.com"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lead_lead__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rating_rating__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sms_sms__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_location_accuracy__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cities_cities__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(app, nav, loadingCtrl, alertCtrl, toastCtrl, restaurantService, historyOrderService, checkInternet, locationAccuracy, geolocation, http, statusBar, ga, usersProvider, cartService, loginService) {
        this.app = app;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.restaurantService = restaurantService;
        this.historyOrderService = historyOrderService;
        this.checkInternet = checkInternet;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.http = http;
        this.statusBar = statusBar;
        this.ga = ga;
        this.usersProvider = usersProvider;
        this.cartService = cartService;
        this.loginService = loginService;
        this.isLogged = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.haveMore = true;
        this.ga.trackView('Tela Principal');
        this.location = {};
        this.showSpinner = false;
        this.getUserById();
    }
    HomePage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__login_login__["a" /* LoginPage */]);
    };
    // view restaurant detail
    HomePage.prototype.viewRestaurant = function (restaurant) {
        var _this = this;
        var id = restaurant.id;
        restaurant = this.restaurantService.getExistById(id);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__["a" /* RestaurantPage */], {
                id: id
            });
        }
        else {
            if (!this.checkInternet.isInternet()) {
                this.withoutInternet();
                return false;
            }
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present().then(function () {
                _this.restaurantService.getById(id).subscribe(function (data) {
                    loader_1.dismiss();
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__["a" /* RestaurantPage */], {
                        id: id
                    });
                }, function (error) {
                    loader_1.dismiss();
                    if (error.name === "TimeoutError") {
                        _this.presentToast('Tente novamente!');
                    }
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                    console.log(error);
                });
            }, function (error) {
                loader_1.dismiss();
                _this.presentToast("Desculpe. Tente novamente.");
            });
        }
    };
    // Busca os restaurentes na base de dados
    HomePage.prototype.findRestaurant = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        var env = this;
        this.showSpinner = true;
        this.location = this.restaurantService.getUserLocation();
        if (this.location && this.location.latitude && this.location.longitude) {
            this.restaurantService.getInitialHome().subscribe(function (result) {
                setTimeout(function () {
                    env.restaurants = _this.restaurantService.getAll();
                }, 0);
                env.message = result.message;
                env.showSpinner = false;
            }, function (error) {
                console.log(error);
                env.showSpinner = false;
                if (error.status === 401) {
                    env.presentToast("Sua sessão expirou");
                    env.goToLogout();
                }
            });
        }
    };
    // Chama Tela para selecionar endereço.
    HomePage.prototype.getMyAddresses = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */]);
    };
    // Trocar de endereço
    HomePage.prototype.changeAddress = function () {
        this.getMyAddresses();
    };
    // Tela de sem acesso a internet
    HomePage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    HomePage.prototype.fullActivation = function () {
        var user = this.loginService.getUser();
        if (user && (user.activation_code === false)) {
            this.sms();
        }
    };
    // Tela de sms, valida número telefonico
    HomePage.prototype.sms = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__sms_sms__["a" /* SmsPage */]);
    };
    //Verifica se possui algum pedido que precisa ser avaliado
    HomePage.prototype.findHistoryOrder = function () {
        var _this = this;
        if (this.isLogged) {
            // Antes de tudo vericar se usuário possui Internet
            if (!this.checkInternet.isInternet()) {
                this.withoutInternet();
                return false;
            }
            this.historyOrderService.getByUser().subscribe(function (data) {
                // remove the popup
                var orders = data.data;
                if (orders) {
                    for (var i = 0; i < orders.length; i++) {
                        if (orders[i].status === "4" && !orders[i].orders.rating) {
                            _this.getRating(orders[i]);
                            break;
                        }
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    // Tela para avaliação do restaurante
    HomePage.prototype.getRating = function (order) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__rating_rating__["a" /* RatingPage */], {
            order: JSON.stringify(order)
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("Entrei enter home");
        this.restaurantService.resetOffset();
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.isLogged = this.loginService.isLogged();
        this.user = this.loginService.getUser();
        this.findRestaurant();
        this.findHistoryOrder();
        // Busca todos os restaurantes
        this.restaurants = this.restaurantService.getAll();
        // Caso ainda não tenha restaurante é realizado uma nova busca
        if (!this.restaurants || !this.restaurants.length) {
            this.message = 'Nenhum estabelecimento foi encontrado';
        }
        else {
            this.showSpinner = false;
        }
    };
    HomePage.prototype.getUserName = function () {
        if (this.isLogged) {
            var user = this.loginService.getUser();
            return user.first_name;
        }
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HomePage.prototype.getCircle = function (index, size) {
        return index + 1 < size ? '• ' : '';
    };
    HomePage.prototype.goToCities = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__cities_cities__["a" /* CitiesPage */]);
    };
    HomePage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage.prototype.getShowSpinner = function () {
        if (!this.location || !this.location.street) {
            return false;
        }
        return this.showSpinner;
    };
    //Utiliza o plugin locationAccurancy para pegar a posição do usuário pelo GPS do celular.
    HomePage.prototype.closeToMe = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            this.withoutInternet();
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present().then(function () {
            // the accuracy option will be ignored by iOS
            _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                _this.location = {};
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    loader.dismiss();
                    _this.location.latitude = resp.coords.latitude;
                    _this.location.longitude = resp.coords.longitude;
                    if (_this.location.latitude && _this.location.longitude) {
                        _this.getAddress(_this.location.latitude, _this.location.longitude);
                    }
                }).catch(function (error) {
                    loader.dismiss();
                    console.log('Error getting location', error);
                    _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
                });
            }, function (error) {
                loader.dismiss();
                console.log('Error requesting location permissions', error);
                _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
            });
        });
    };
    // Busca o endereço pela Latitude e Longitude
    HomePage.prototype.getAddress = function (lat, lng) {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            this.withoutInternet();
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.getLocationByLatAndLng(lat, lng, loader).subscribe(function (result) {
                // Seta o endereço no carrinho de compras
                //this.setAddress(address);
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        });
    };
    // Busca o endereço na API do Google Maps pela latitude e longitude
    HomePage.prototype.getLocationByLatAndLng = function (lat, lng, loader) {
        var env = this;
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true&key=AIzaSyAnIl-LlxxlgkQ5iD9MiHdEj4AJ-g9K8nc")
            .map(function (res) {
            loader.dismiss();
            var formatJson = JSON.parse(res["_body"]);
            // Convert resposta da API do google em um objeto
            if (formatJson.results.length) {
                var address = env.loginService.mountAddress(formatJson.results[0].address_components, env.location);
                // Seta o endereço recebido da API
                env.loginService.setLocation(address);
                env.findRestaurant();
            }
            else {
                env.presentToast("Desculpe, não conseguimos a sua localização. Tente novamente.");
            }
            return res;
        })
            .catch(function (error) {
            loader.dismiss();
            return error;
        });
    };
    // go to login page
    HomePage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToLead = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__lead_lead__["a" /* LeadPage */]);
    };
    // Remove o usuário do banco de dados local
    HomePage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    HomePage.prototype.getFrete = function (restaurant) {
        var frete = this.cartService.calculateFrete(restaurant.frete, restaurant.frete_km, restaurant.km_max, restaurant.km_normal, restaurant.distance);
        return typeof frete === 'string';
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var env = this;
        this.restaurantService.getRestaurants(0).subscribe(function (result) {
            setTimeout(function () {
                env.restaurants = _this.restaurantService.getAll();
            }, 0);
            env.message = result.message;
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
            if (error.name === "TimeoutError") {
                _this.presentToast('Tente novamente!');
            }
            if (error.status === 401) {
                env.presentToast("Sua sessão expirou");
                env.goToLogout();
            }
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.haveMore = this.restaurantService.getHaveMore();
        if (this.haveMore) {
            this.restaurantService.setOffset(1);
            this.restaurantService.getInitialHome().subscribe(function (result) {
                _this.restaurants = _this.restaurantService.getAll();
                _this.message = result.message;
                infiniteScroll.complete();
            }, function (error) {
                console.log(error);
                infiniteScroll.complete();
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        }
    };
    //Busca usuário por id. Nesse caso pelo id 1
    HomePage.prototype.getUserById = function () {
        var _this = this;
        var id = 1;
        this.usersProvider.getUserById(id)
            .then(function (result) {
            var user = {
                id: null,
                location: null
            };
            console.log(result);
            if (result) {
                user = JSON.parse(result.json);
            }
            console.log("user");
            console.log(user);
            if (user && user.id) {
                // Seta o Usuário no LoginService
                _this.loginService.setUser(user);
                _this.isLogged = _this.loginService.isLogged();
                _this.user = _this.loginService.getUser();
            }
            console.log("Banco de dados local");
            _this.loginService.setLocation(user.location);
            console.log(_this.user);
            if (_this.user.location) {
                console.log("ENtrei busca restaurantes");
                _this.findRestaurant();
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/home/home.html"*/'fg<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Seja Bem Vindo\n        </ion-title>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title >\n          Seja Bem Vindo\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center *ngIf="isLogged">\n      Seja Bem Vindo(a), {{getUserName()}}\n    </ion-title>\n\n    <ion-title text-center *ngIf="!isLogged">\n      SACIA FOME\n    </ion-title>\n\n     <ion-buttons end *ngIf="isLogged && !user.activation_code" (click)="fullActivation()">\n      <button class="activation-phone" ion-button icon-only>\n        <ion-icon name="alert"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons class="bar-buttons bar-buttons-ios" end *ngIf="!isLogged" (click)="login()">\n       <button ion-button icon-only style="font-size: 18px">\n        <ion-icon name="log-in"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--banner-->\n  <!-- <img src="{{ banner }}" alt=""> -->\n  <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="restaurants && restaurants.length">\n    <ion-refresher-content\n      refreshingSpinner="bubbles">\n    </ion-refresher-content>\n  </ion-refresher>\n\n    <div *ngIf="location && location.street" >\n      <ion-card (click)="changeAddress()" class="my-address">\n        <ion-card-content class="card-content-custom">\n          {{ location.street }}\n          <div class="pull-right">\n            Mudar\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card *ngIf="!restaurants || !restaurants.length" style="margin-left: 10px;">\n        <ion-card-content>\n          <p>{{message}}</p>\n        </ion-card-content>\n      </ion-card>\n\n\n      <div  *ngFor="let restaurant of restaurants" (click)="viewRestaurant(restaurant)">\n        <div *ngIf="!restaurant.isOpen" variant="transparent" class="open-ribbon">\n          <div variant="transparent" class="open-ribbon"><span>FECHADO</span></div>\n        </div>\n        <ion-row class="padding-row">\n          <ion-col col-2 class="margin-img">\n            <img class="redondo" *ngIf="restaurant.img" src="{{ restaurant.img }}" alt="{{ restaurant.name }}" />\n            <img class="redondo" *ngIf="!restaurant.img" src="assets/img/restaurants/estabelecimento.jpg" alt="{{ restaurant.name }}" />\n          </ion-col>\n          <ion-col col-10 style="padding-left: 22px;">\n            <div class="company-title">\n              <strong>{{restaurant.name}}</strong>\n\n              <ion-icon name="star" *ngIf="restaurant.stars" color="star" class="font-size-star float-right"> {{ restaurant.stars }} </ion-icon>\n              <span *ngIf="!restaurant.stars" ion-text color="star" class="float-right"> novo </span>\n\n            </div>\n            <div color="gray" class="text-size-1" style="padding-top: 3px;">\n                <span ion-text color="gray" *ngFor="let cat of restaurant.Categories; let i = index">{{ cat.name }} {{getCircle(i, restaurant.Categories.length)}}</span>\n            </div>\n            \n            <div color="gray" class="text-size-1">\n              <span ion-text color="gray" *ngIf="restaurant.delivery_min && restaurant.delivery_max" >\n                {{ restaurant.delivery_min }} - {{ restaurant.delivery_max }} &nbsp;&nbsp;\n              </span>\n              <span class="badge-cash-back" *ngIf="restaurant.percentage_discount">\n              {{restaurant.percentage_discount}} % </span>\n            </div>\n\n            <div *ngIf="restaurant.delivery_pickup === 1">\n              <span ion-text color="danger"> Não entregamos </span>\n            </div>\n            \n            </ion-col>\n\n        </ion-row>\n        <ion-row >\n          <ion-col col-2> </ion-col>\n          <ion-col col-10>\n            <hr align="right" style="width:92%"/>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n\n  <ion-card style="margin-left: 10px;" (click)="goToLead()">\n    <ion-card-content text-center>\n      <span style="font-size: 17px; color: #ffb42d" >Quer mais restaurantes?</span><br/>\n      <span style="color: #99999F;" >Você pode deixar a sua sugestão com a gente.</span>\n    </ion-card-content>\n  </ion-card>\n\n  <div  text-center *ngIf="!location || !location.street" >\n        \n        <h6 style="margin-top: 10%">Buscamos os restaurantes mais perto de você:</h6>\n\n        <ion-card (click)="closeToMe()" >\n          <ion-card-content text-center>\n            <ion-icon name="locate"></ion-icon> Perto de mim\n          </ion-card-content>\n        </ion-card>\n\n        <ion-row style="padding-left: 5px; padding-right: 5px;" *ngIf="isLogged">\n          <ion-col col-12>\n            <button ion-button block margin-bottom color="sacia" (click)="getMyAddresses()">Meus Endereços</button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style="padding-left: 5px; padding-right: 5px;">\n          <ion-col col-12>\n            <button ion-button block margin-bottom color="sacia" (click)="goToCities()">Cidades</button>\n          </ion-col>\n        </ion-row>\n  </div>\n  <ion-spinner name="circles" *ngIf="getShowSpinner()"></ion-spinner>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="haveMore">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_7__services_history_order_service__["a" /* HistoryOrderService */],
        __WEBPACK_IMPORTED_MODULE_11__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_17__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_18__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ItemPage = (function () {
    function ItemPage(nav, cartService, toastCtrl, ga, statusBar, navParams, imageViewerCtrl) {
        this.nav = nav;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.statusBar = statusBar;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.quantity = 1;
        this.itemRequired = 1;
        this.hasItems = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela detalhes do produto');
        // set data for item
        this.item = {};
        this.auxOptional = [];
        this.restaurantId = navParams.get('restaurantId');
        this.isOpen = navParams.get('isOpen');
        this.item = JSON.parse(navParams.get('item'));
        var separateItens = this.getItemRequired(this.item.Additionals);
        this.item.options = {};
        this.item.options.required = [];
        this.item.options.optional = [];
        this.item.options.required = separateItens.required;
        this.item.options.optional = separateItens.optional;
        this.auxOptional = this.deepClone(this.item.options.optional);
        this.itemRequired = this.item.options.required.length ? this.item.options.required[0].id : undefined;
        this.amountAdditional = 0;
    }
    // Separa itens adicionais e itens obrigatórios
    ItemPage.prototype.getItemRequired = function (additionals) {
        var required = [], optional = [];
        for (var i = 0; i < additionals.length; i++) {
            if (additionals[i].required) {
                required.push(additionals[i]);
            }
            else {
                optional.push(additionals[i]);
            }
        }
        return { required: required, optional: optional };
    };
    // plus quantity
    ItemPage.prototype.plusQty = function () {
        this.quantity++;
    };
    // minus quantity
    ItemPage.prototype.minusQty = function () {
        if (this.quantity > 1)
            this.quantity--;
    };
    // add item to cart
    ItemPage.prototype.addCart = function () {
        if (this.isOpen) {
            this.item.quantity = this.quantity;
            this.item.itemRequired = this.itemRequired;
            var toast = this.toastCtrl.create({
                message: 'Item adicionado no carrinho',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.cartService.addItem(this.item);
            this.nav.pop();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Desculpe. Estamos fechado no momento.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    // go to cart page
    ItemPage.prototype.goToCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    ItemPage.prototype.ionViewWillEnter = function () {
        var cart = this.cartService.getCart();
        if (cart.orders.restaurant && cart.orders.restaurant.id === this.restaurantId) {
            this.hasItems = cart.orders.items.length ? true : false;
        }
        else {
            this.hasItems = false;
        }
    };
    // Controla o numero de itens adicionais que pode ser selecionado
    ItemPage.prototype.changeAdditional = function (additional, position) {
        if (additional.selected) {
            this.amountAdditional++;
        }
        else {
            this.amountAdditional--;
        }
        // Verifica se o limite de itens adicionais foi excedido
        if (this.item.max_per_item && this.amountAdditional > this.item.max_per_item) {
            // Caso
            this.item.options.optional = this.deepClone(this.auxOptional);
            this.amountAdditional--;
            var toast = this.toastCtrl.create({
                message: 'Limite máximo de itens adicionais é de: ' + this.item.max_per_item,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.auxOptional[position].selected = additional.selected;
        }
    };
    // Clona um array
    ItemPage.prototype.deepClone = function (oldArray) {
        var newArray = [];
        oldArray.forEach(function (item) {
            newArray.push(Object.assign({}, item));
        });
        return newArray;
    };
    ItemPage.prototype.zoomClickImage = function (img) {
        var viewer = this.imageViewerCtrl.create(img);
        viewer.present();
    };
    return ItemPage;
}());
ItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/item/item.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          {{ item.name }}\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      {{ item.name }}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img *ngIf="item.thumb" src="{{ item.thumb }}" class="size-img" imageViewer >\n  <h2 text-center>{{ item.name }}</h2>\n  <p ion-text color="green" text-center padding-left padding-right>R$ {{ item.price }}</p>\n  <p ion-text color="gray" text-center padding-left padding-right>{{ item.ingredients }}</p>\n\n  <!--choose item options-->\n  <div class="light-bg" *ngIf="item.options.required && item.options.required.length" padding>Escolha um item</div>\n  <ion-list radio-group [(ngModel)]="itemRequired">\n    <ion-item *ngFor="let opt of item.options.required">\n      <ion-label>{{ opt.name }}</ion-label>\n      <span item-right style="color: green">R$ {{ opt.price.toFixed(2) }}</span>\n      <ion-radio value="{{ opt.id}}" item-left></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <div class="light-bg" *ngIf="item.options.optional && item.options.optional.length"  padding>\n    Adicionais \n    <span class="badge" style="float: right;" *ngIf="item.max_per_item">{{amountAdditional}}/{{item.max_per_item}} OBRIGATÓRIO</span>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let opt of this.item.options.optional; let i = index">\n      <ion-label>{{ opt.name }}</ion-label>\n      <span item-right style="color: green" >R${{ opt.price.toFixed(2) }}</span>\n      <ion-checkbox [(ngModel)]="opt.selected" (ionChange)="changeAdditional(opt, i)" ></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <!-- add note -->\n  <div class="light-bg" padding>Descrição</div>\n  <div padding>\n    <ion-textarea maxLength="5" type="text" [(ngModel)]="item.description" placeholder="Ex: sem pimentão, sem cebola, etc."></ion-textarea>\n  </div>\n\n  <!-- quantity button -->\n  <div class="qty-btn" text-center>\n    <ion-icon class="button-plus-minus" name="remove-circle" color="danger" (click)="minusQty()"></ion-icon>\n      <span class="span-plus-minus" >&nbsp;&nbsp;{{ quantity }}&nbsp;&nbsp;</span>\n    <ion-icon ion-text class="label button-plus-minus" name="add-circle" color="green" (click)="plusQty()"></ion-icon>\n  </div>\n  <br/><br/>\n\n  <!-- <ion-fab top right edge *ngIf="hasItems && isOpen">\n    <button ion-fab mini color="danger" (click)="goToCart()">\n      <ion-icon name="md-cart"></ion-icon>\n    </button>\n  </ion-fab> -->\n  <div padding>\n    <button ion-button block margin-bottom class="border-button" color="secondary" (click)="addCart()">Adicionar no carrinho</button>\n</div>\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/item/item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */]])
], ItemPage);

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_address_select_address__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_payment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DeliveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DeliveryPage = (function () {
    function DeliveryPage(nav, navParams, alertCtrl, cartService, ga, statusBar, restaurantService) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.cartService = cartService;
        this.ga = ga;
        this.statusBar = statusBar;
        this.restaurantService = restaurantService;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela buscar ou entregar');
        this.cart = this.cartService.getCart();
    }
    DeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryPage');
    };
    DeliveryPage.prototype.ionViewWillEnter = function () {
        var delivery = this.cart.flag_delivery;
        if (!delivery) {
            if (this.cart.orders.restaurant.delivery_pickup === 0 || this.cart.orders.restaurant.delivery_pickup === 2) {
                this.cart.flag_delivery = '1';
            }
            else {
                this.cart.flag_delivery = '0';
            }
        }
        this.value = this.cart.flag_delivery;
    };
    DeliveryPage.prototype.checkDelivery = function () {
        if (this.cart.frete === null) {
            this.cart.flag_delivery = '0';
            this.value = '0';
            return false;
        }
        return true;
    };
    DeliveryPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Você vai buscar?',
            message: 'Confirma que irá buscar o pedido?',
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.cart.flag_delivery = _this.value;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */]);
                    }
                }]
        });
        alert.present();
    };
    DeliveryPage.prototype.goPaymentPage = function () {
        if (this.value === "1" && (!this.cart.orders.address || !this.cart.orders.address.street)) {
            this.presentAlert("Alerta", "Você ainda não possui nenhum endereço cadastrado.");
            return false;
        }
        if (this.value === "0") {
            this.presentConfirm();
        }
        else {
            this.cart.flag_delivery = this.value;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */]);
        }
    };
    DeliveryPage.prototype.selectAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__select_address_select_address__["a" /* SelectAddressPage */]);
    };
    DeliveryPage.prototype.noDelivery = function () {
        console.log("Vai Buscar");
        this.cart.flag_delivery = '0';
    };
    DeliveryPage.prototype.yesDelivery = function () {
        console.log("Entrega");
        this.cart.flag_delivery = '1';
    };
    // go to the payment page
    DeliveryPage.prototype.formPayment = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */]);
    };
    DeliveryPage.prototype.getRestaurantDelivery = function () {
        // 0 Entregar, 1 Buscar, 2 Entregar/Buscar
        if (this.cart.orders.restaurant.delivery_pickup === 1) {
            return false;
        }
        return this.cart.frete === null ? false : true;
    };
    DeliveryPage.prototype.getFrete = function (frete) {
        if (frete === null)
            return '';
        if (isNaN(frete)) {
            return frete;
        }
        else {
            return "R$ " + frete.toFixed(2);
        }
    };
    DeliveryPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    DeliveryPage.prototype.getTotal = function () {
        return this.cartService.getTotal().toFixed(2);
    };
    return DeliveryPage;
}());
DeliveryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivery',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/delivery/delivery.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Entregar ou Buscar\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Entregar ou Buscar\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="margin-top: 5px;"  padding>\n\n  <div class="light-bg" padding *ngIf="!checkDelivery()" style="color: red">\n    <ion-icon name="compass"></ion-icon>\n    Não estamos realizando entregas em sua região.\n  </div>\n  <div class="light-bg" padding *ngIf="this.cart.orders.restaurant.delivery_pickup !== 1 && checkDelivery()">\n    <ion-icon name="compass"></ion-icon>\n    ENDEREÇO DE ENTREGA\n  </div>\n  <ion-list>\n      <ion-list radio-group [(ngModel)]="value">\n        <ion-item *ngIf="this.cart.orders.restaurant.delivery_pickup !== 0">\n          <ion-label>Vou buscar</ion-label>\n          <ion-radio color="sacia" value="0" (ionSelect)="noDelivery()"></ion-radio>\n        </ion-item>\n        <ion-item *ngIf="getRestaurantDelivery()">\n          <ion-label>Entregar</ion-label>\n          <ion-radio color="sacia" value="1" (ionSelect)="yesDelivery()"></ion-radio>\n        </ion-item>\n      </ion-list>\n    <ion-item *ngIf="value > 0">\n      <ion-label *ngIf="value > 0 && this.cart.orders.address && this.cart.orders.address.street && this.cart.orders.address.city && this.cart.frete !== null" style="color: green" >Frete: {{getFrete(this.cart.frete)}}</ion-label>\n      <ion-label *ngIf="value < 1" style="color: green" >Frete grátis</ion-label>\n    </ion-item>\n    <ion-card *ngIf="value > 0 && this.cart.orders.address && this.cart.orders.address.street && this.cart.orders.address.city">\n      <ion-card-header style="color: #93c35d; font-size: 20px">\n        Endereço de entrega\n      </ion-card-header>\n      <ion-card-content class="white"> <!-- (click)="selectAddress()" -->\n        {{this.cart.orders.address.street}}<br/>\n        <div *ngIf="this.cart.orders.address.complement" >Complemento: {{this.cart.orders.address.complement}}<br/></div>\n        Bairro: {{this.cart.orders.address.neighborhood}}<br/>\n        {{this.cart.orders.address.city}} • {{this.cart.orders.address.state}}<br/>\n        CEP: {{this.cart.orders.address.cep}}\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="value < 1">\n      <ion-card-header style="color: #93c35d; font-size: 20px">\n        Endereço para retirar\n      </ion-card-header>\n      <ion-card-content class="white"> <!-- (click)="selectAddress()" -->\n        {{this.cart.orders.restaurant.address.street}}<br/>\n        <div *ngIf="this.cart.orders.restaurant.address.complement" >Complemento: {{this.cart.orders.restaurant.address.complement}}<br/></div>\n        Bairro: {{this.cart.orders.restaurant.address.neighborhood}}<br/>\n        {{this.cart.orders.restaurant.address.city}} • {{this.cart.orders.restaurant.address.state}}<br/>\n        CEP: {{this.cart.orders.restaurant.address.cep}}\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="value >= 1 && (!this.cart.orders.address || !this.cart.orders.address.street || !this.cart.orders.address.city)" (click)="selectAddress()">\n      <ion-card-header>\n        Endereço de entrega\n      </ion-card-header>\n      <ion-card-content class="white"> <!-- (click)="selectAddress()" -->\n        Ops. Precisa cadastrar o endereço de entrega.\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <button  ion-button block color="sacia" *ngIf="value > 0" (click)="selectAddress()">\n      Mudar endereço\n    </button>\n\n  <div text-center *ngIf="cart.frete > 0">\n    <span>Total</span>\n  </div>\n  <!-- Shapes -->\n  <button ion-button style="font-size: 18px;" full outline>R$ {{getTotal()}}</button>\n\n  <br/><br/>\n  <button margin-bottom [disabled]="value >= 1 && (!this.cart.orders.address || !this.cart.orders.address.street || !this.cart.orders.address.city)" ion-button block color="secondary" (click)="goPaymentPage()">\n  Forma de Pagamento &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright"></ion-icon>\n</button>\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/delivery/delivery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__["a" /* RestaurantService */]])
], DeliveryPage);

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_new_address_new_address__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_address_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SelectAddressPage = (function () {
    function SelectAddressPage(nav, addressService, cartService, statusBar, loginService, loadingCtrl) {
        this.nav = nav;
        this.addressService = addressService;
        this.cartService = cartService;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.address = this.addressService.getAll();
        if (!this.address.length) {
            this.findAddress();
        }
    }
    SelectAddressPage.prototype.findAddress = function () {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Buscando endereços...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.findById(_this.loginService.getUser().id).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                _this.address = data.data;
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    SelectAddressPage.prototype.calculateFrete = function () {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Calculando frete...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.cartService.precoFrete().subscribe(function (result) {
                loader.dismiss();
                _this.cartService.setFrete(result.data.price);
                _this.nav.pop();
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    SelectAddressPage.prototype.newAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__address_new_address_new_address__["a" /* NewAddressPage */], { userId: this.loginService.getUser().id });
    };
    SelectAddressPage.prototype.changAddress = function (address) {
        this.cartService.setAddress(address);
        this.calculateFrete();
    };
    SelectAddressPage.prototype.ionViewWillEnter = function () {
        this.address = this.addressService.getAll();
    };
    return SelectAddressPage;
}());
SelectAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-address',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/delivery/select-address/select-address.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Meus Endereços\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Meus Endereços\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card *ngFor="let address of address">\n  <ion-card-content (click)="changAddress(address)">\n  	{{address.street}} • {{address.number}}<br/>\n  	<div *ngIf="address.complement" >Complemento: {{address.complement}}<br/></div>\n  	Bairro: {{address.neighborhood}}<br/>\n  	{{address.city}} • {{address.state}}<br/>\n  	CEP: {{address.cep}}\n  </ion-card-content>\n</ion-card>\n\n<div padding text-center>\n	<button ion-button block margin-bottom color="sacia" (click)="newAddress()">Novo Endereço</button>\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/delivery/select-address/select-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */],
        __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], SelectAddressPage);

//# sourceMappingURL=select-address.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finish_order_success_finish_order_success__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_coupon_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the FinishOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FinishOrderPage = (function () {
    function FinishOrderPage(nav, navParams, couponService, cartService, statusBar, loadingCtrl, toastCtrl, checkInternet, usersProvider, loginService, ga, userService, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.couponService = couponService;
        this.cartService = cartService;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.checkInternet = checkInternet;
        this.usersProvider = usersProvider;
        this.loginService = loginService;
        this.ga = ga;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.couponName = "";
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Finish Page');
        this.aplicarDiscount = {
            status: false,
            data: {},
            msg: ''
        };
        this.cart = cartService.getCart();
        if (this.cart.discount && this.cart.discount.name) {
            //Calcula do desconto
            this.calculateDiscount();
        }
    }
    FinishOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinishOrderPage');
    };
    FinishOrderPage.prototype.getTotal = function () {
        return this.cartService.getTotal().toFixed(2);
    };
    FinishOrderPage.prototype.isDelivery = function () {
        if (parseInt(this.cart.flag_delivery) > 0) {
            return true;
        }
        return false;
    };
    FinishOrderPage.prototype.sendOrder = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentAlert("Sem acesso a internet");
            return false;
        }
        if (!this.cart.orders.user.phone) {
            this.presentPhone();
            return;
        }
        this.ga.trackEvent('Click', 'Finalizar Pedido', null, null);
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Realizando pedido...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.cartService.sendOrder().subscribe(function (result) {
                // remove the popup
                loader.dismiss();
                if (result.status) {
                    _this.loginService.setNewUser(false);
                    _this.cartService.initCart();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__finish_order_success_finish_order_success__["a" /* FinishOrderSuccessPage */], {
                        id: result.data.id,
                        delivery_min: _this.cart.orders.restaurant.delivery_min,
                        delivery_max: _this.cart.orders.restaurant.delivery_max
                    });
                }
                else {
                    _this.presentToast(result.message, 6000);
                }
            }, function (error) {
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou", 4000);
                    _this.goToLogout();
                }
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!', 4000);
                }
                // remove the popup
                loader.dismiss();
            });
        });
    };
    FinishOrderPage.prototype.optional = function (item) {
        var array = [];
        for (var i = 0; i < item.options.optional.length; i++) {
            if (item.options.optional[i].selected) {
                array.push(item.options.optional[i]);
            }
        }
        return array;
    };
    FinishOrderPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    FinishOrderPage.prototype.presentToast = function (message, time) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: time,
            position: 'top'
        });
        toast.present();
    };
    FinishOrderPage.prototype.validateCoupon = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentAlert("Sem acesso a internet");
            return false;
        }
        if (this.couponName && this.couponName.length > 0) {
            this.couponService.validate(this.cart.restaurants_id, this.couponName).subscribe(function (result) {
                _this.aplicarDiscount = result;
                _this.couponName = '';
                if (result.status) {
                    _this.presentToast(result.msg, 3000);
                    if (_this.cart.subTotal < 1) {
                        _this.cart.subTotal = _this.cart.total;
                    }
                    _this.cart.discount = {
                        id: result.data.id,
                        status: result.status,
                        name: result.data.name,
                        value: result.data.price,
                        discount_type: result.data.discount_type
                    };
                    //Calcula do desconto
                    _this.calculateDiscount();
                }
                else {
                    _this.presentToast(result.message, 3000);
                    _this.cart.discount = {
                        status: result.status
                    };
                }
            });
        }
        else {
            this.presentToast('Deve inserir cupom', 3000);
        }
    };
    FinishOrderPage.prototype.presentConfirm = function (phone) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Salvar número telefônico?',
            message: 'Deseja salvar o número telefônico para compras futuras?',
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        _this.sendOrder();
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.updatePhone(phone);
                        _this.sendOrder();
                    }
                }]
        });
        alert.present();
    };
    FinishOrderPage.prototype.updatePhone = function (phone) {
        this.userService.updatePhone(phone).subscribe(function (result) { });
    };
    // Adicionar telefone do usuário
    FinishOrderPage.prototype.presentPhone = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Telefone',
            message: 'Telefone para Contato?',
            inputs: [{
                    name: 'phone',
                    type: 'number',
                    placeholder: ''
                }],
            buttons: [{
                    text: 'Pronto',
                    handler: function (data) {
                        _this.cartService.setPhone(data.phone);
                        if (data.phone) {
                            _this.presentConfirm(data.phone);
                        }
                    }
                }]
        });
        alert.present();
    };
    FinishOrderPage.prototype.nameItemRequired = function (item) {
        for (var i = 0; i < item.options.required.length; i++) {
            if (item.options.required[i].id === parseInt(item.itemRequired)) {
                return item.options.required[i].name + " • R$ " + item.options.required[i].price;
            }
        }
    };
    FinishOrderPage.prototype.getFormatPayment = function () {
        if (this.cart.orders.payment.name === 'Dinheiro') {
            return this.cart.orders.payment.name + " • Troco: " + this.cart.orders.money;
        }
        else {
            var online = this.cart.orders.payment.is_online === 0 ? 'máquina' : '';
            return this.cart.orders.payment.card + ' (' + online + ')';
        }
    };
    FinishOrderPage.prototype.getDiscount = function (discount) {
        if (discount.discount_type === "1" || discount.discount_type === true) {
            return discount.value + "%";
        }
        else {
            return "R$ " + discount.value;
        }
    };
    // Calcula o desconto do cupom inserido
    FinishOrderPage.prototype.calculateDiscount = function () {
        // Se for porcentagem (true)
        if (this.cart.discount.discount_type === "1") {
            this.cart.total = this.cart.subTotal - (this.cart.subTotal * (this.cart.discount.value / 100));
        }
        else {
            this.cart.total = this.cart.subTotal - this.cart.discount.value;
        }
    };
    // go to login page
    FinishOrderPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    FinishOrderPage.prototype.updateUser = function () {
        return this.usersProvider.update({
            id: 1,
            json: '{}'
        });
    };
    FinishOrderPage.prototype.getFrete = function (frete) {
        if (isNaN(frete)) {
            return frete;
        }
        else {
            return "R$ " + frete.toFixed(2);
        }
    };
    return FinishOrderPage;
}());
FinishOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finish-order',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/finish-order/finish-order.html"*/'<!--\n  Generated template for the FinishOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Finalizar Pedido\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Finalizar Pedido\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div padding text-center>\n    <h2>{{ cart.orders.restaurant.name }}</h2>\n    <div *ngIf="cart.flag_delivery === \'1\'">\n      Tempo de entrega: • {{ cart.orders.restaurant.delivery_min }} - {{ cart.orders.restaurant.delivery_max }}\n    </div>\n    <div *ngIf="cart.flag_delivery === \'0\'">\n      Tempo de espera: • {{ cart.orders.restaurant.delivery_min }} - {{ cart.orders.restaurant.delivery_max }}\n    </div>\n  </div>\n\n   <ion-card>\n      <ion-card-header >\n        Produtos\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-content style="padding-left: 0px;">\n          <ion-list>\n            <ion-item *ngFor="let item of cart.orders.items; let i = index">\n              <ion-row>\n                <ion-col col-3>\n                  <ion-thumbnail item-left>\n                  <img *ngIf="item.thumb" src="{{item.thumb}}" />\n                  <img *ngIf="!item.thumb" src="assets/img/empty-cart.png" />\n                </ion-thumbnail>\n                </ion-col>\n                <ion-col col-5 class="items-selected">\n                  {{ item.name }} x {{item.quantity}}\n                  <br/>\n                  \n                  <div class="bottom" *ngIf="item.itemRequired">\n                  <span ion-text color="gray" class="label">{{nameItemRequired(item)}}</span><br/>\n                  </div>\n                  \n                  <div class="bottom" *ngFor="let i of optional(item)">\n                    <span ion-text color="gray" class="label">{{i.name}} • R$ {{ i.price.toFixed(2) }} </span><br/>\n                  </div>\n                  <div class="bottom" *ngIf="item.description">\n                    <span ion-text color="gray" class="label">Importante: {{item.description}}</span><br/>\n                  </div>\n                </ion-col>\n                <ion-col col-3 class="items-selected-price">\n                  \n                  <span class="item-price" style="color: green">R${{ item.total.toFixed(2) }}</span>\n                  <br/>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  <ion-list>\n      <ion-card *ngIf="isDelivery()">\n      <ion-card-header >\n        Endereço de entrega\n      </ion-card-header>\n      <ion-card-content>\n        {{cart.orders.address.street}} • {{cart.orders.address.number}}<br/>\n        <div *ngIf="cart.orders.address.complement" >Complemento: {{cart.orders.address.complement}}<br/></div>\n        Bairro: {{cart.orders.address.neighborhood}}<br/>\n        {{cart.orders.address.city}} • {{cart.orders.address.state}}<br/>\n        CEP: {{cart.orders.address.cep}}\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="!isDelivery()">\n      <ion-card-header >\n        Vou buscar\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        PAGAMENTO\n      </ion-card-content>\n      <ion-card-content>\n        {{getFormatPayment()}}\n      </ion-card-content>\n    </ion-card>\n    <ion-row>\n      <ion-item>\n        <span>SUBTOTAL</span>\n        <span item-right style="color: green">R${{ cart.subTotal.toFixed(2) }}</span>\n      </ion-item>\n      <ion-item *ngIf="cart.discount && cart.discount.name && cart.discount.status">\n        <span>DESCONTO: {{cart.discount.name}}</span>\n        <span item-right style="color: red;">-{{ getDiscount(cart.discount) }}</span>\n      </ion-item>\n      <ion-item *ngIf="isDelivery()">\n        <span>FRETE</span>\n        <span *ngIf="cart.flag_delivery" item-right style="color: green" >{{getFrete(cart.frete)}}</span>\n	    </ion-item>\n      <ion-item *ngIf="cart.cashback > 0">\n        <span>CASHBACK</span>\n        <span *ngIf="cart.cashback" item-right style="color: green" >R$ {{cart.cashback.toFixed(2)}}</span>\n      </ion-item>\n      <ion-item>\n        <span>TOTAL</span>\n        <span item-right style="color: green" >R${{ getTotal() }}</span>\n      </ion-item>\n    </ion-row>\n    <br/>\n    <ion-row>\n      <ion-item>\n        <ion-input type="text" placeholder="Código da promoção" [(ngModel)]="couponName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button block color="green" (click)="validateCoupon()">Aplicar</button>\n      </ion-item>\n    </ion-row>    \n  </ion-list>\n\n  <div padding>\n    <button ion-button block color="secondary" (click)="sendOrder()">\n      Finalizar Pedido &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/finish-order/finish-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_coupon_service__["a" /* CouponService */],
        __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_7__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_8__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FinishOrderPage);

//# sourceMappingURL=finish-order.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishOrderSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FinishOrderSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FinishOrderSuccessPage = (function () {
    function FinishOrderSuccessPage(navCtrl, statusBar, ga, navParams) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.ga = ga;
        this.navParams = navParams;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela pedido realizado');
        this.orderNumber = navParams.get('id');
        if (navParams.get('delivery_min') != null || navParams.get('delivery_min') != 'null') {
            this.delivery = navParams.get('delivery_min') + " - " + navParams.get('delivery_max');
        }
    }
    FinishOrderSuccessPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_tabs_main_tabs__["a" /* MainTabsPage */]);
    };
    return FinishOrderSuccessPage;
}());
FinishOrderSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finish-order-success',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/finish-order-success/finish-order-success.html"*/'<!--\n  Generated template for the FinishOrderSuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia" hideBackButton="true">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Pedido Realizado\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      Pedido Realizado\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <br/><br/>\n  <div text-center> \n    <div class="msg">\n      Pedido: <span style="color: #73c501">#{{orderNumber}}</span><br/>\n      <span *ngIf="delivery">\n      Tempo estimado de entrega<br/> <span style="color: #73c501">{{delivery}}</span>\n      </span>\n    </div>\n    <br/>\n    <ion-icon name="checkmark-circle-outline" class="img-checkmark" ></ion-icon>\n    <br/><br/>\n    <div class="msg"> \n      Seu pedido foi enviado para o restaurante.\n      Agora é só esperar e relaxar ;)\n    </div>\n    \n  </div>\n\n  <br/>\n  <div padding>\n    <button margin-bottom ion-button block color="sacia" (click)="goToMain()">\n        Menu Principal\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/finish-order-success/finish-order-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], FinishOrderSuccessPage);

//# sourceMappingURL=finish-order-success.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.http = http;
    }
    RegisterService.prototype.save = function (profile) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users", profile)
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], RegisterService);

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RecoverPage = (function () {
    function RecoverPage(nav, formBuilder, userService, toastCtrl, alertCtrl, checkInternet, statusBar, loadingCtrl) {
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.checkInternet = checkInternet;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.recover = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RecoverPage.prototype.recoverPassword = function (email) {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Enviando nova senha...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.userService.recoverPassword(email).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    RecoverPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    RecoverPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000,
            position: 'top'
        });
        toast.present();
    };
    return RecoverPage;
}());
RecoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recover',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/recover/recover.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    \n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Esqueci a senha\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Esqueci a senha\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recover">\n    <ion-textarea type="text" [(ngModel)]="email" placeholder="Entre com seu e-mail" formControlName="email"></ion-textarea>\n  </form>\n  <button [disabled]="recover.invalid" (click)="recoverPassword(email)" ion-button block color="sacia">Enviar</button>\n</ion-content>\n\nrecoverPassword'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/recover/recover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], RecoverPage);

//# sourceMappingURL=recover.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CitiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CitiesPage = (function () {
    function CitiesPage(nav, navParams, statusBar, loginService) {
        this.nav = nav;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.loginService = loginService;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.cities = [{
                street: 'Uberlândia  - MG',
                latitude: -18.8960045,
                longitude: -48.2678202
            }, {
                street: 'Araguari - MG',
                latitude: -18.543019,
                longitude: -48.159795
            }];
        this.bkpCities = this.cities;
    }
    CitiesPage.prototype.ionViewDidLoad = function () {
    };
    CitiesPage.prototype.getCity = function (city) {
        this.loginService.setLocation(city);
        this.nav.pop();
    };
    // filter list cities
    CitiesPage.prototype.filterCity = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.cities = this.bkpCities.filter(function (item) {
                return (item.street.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return CitiesPage;
}());
CitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cities',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/cities/cities.html"*/'<!--\n  Generated template for the CitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Cidades\n    </ion-title>\n\n  </ion-navbar>\n\n  	<ion-toolbar no-border-top color="sacia" >\n	    <ion-searchbar [showCancelButton]="shouldShowCancel"\n	                   [(ngModel)]="keyword"\n	                   (ionInput)="filterCity($event)"\n	                   (ionClear)="clearFilter($event)"\n	                   placeholder="Busca cidades">\n	    </ion-searchbar>\n	    <!--number of results-->\n	    <div [hidden]="!showResults" text-center>\n	      {{ cities.length }} resultados\n	    </div>\n	</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list class="list-full-border">\n	    <ion-item *ngFor="let city of cities" (click)="getCity(city)">\n	      {{ city.street }}\n	    </ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/cities/cities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
], CitiesPage);

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_restaurants_list_restaurants__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_promotion_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PromotionsPage = (function () {
    function PromotionsPage(app, nav, alertCtrl, couponService, toastCtrl, loadingCtrl, checkInternet, ga, statusBar, restaurantService, promotionService, loginService, cartService, usersProvider) {
        this.app = app;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.couponService = couponService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.checkInternet = checkInternet;
        this.ga = ga;
        this.statusBar = statusBar;
        this.restaurantService = restaurantService;
        this.promotionService = promotionService;
        this.loginService = loginService;
        this.cartService = cartService;
        this.usersProvider = usersProvider;
        this.showSpinner = true;
        this.detailSegment = "s-coupon";
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela de promoções');
        this.coupons = [];
        this.promotions = [];
        this.showMsgCoupon = false;
        this.showMsgPromotion = false;
    }
    PromotionsPage.prototype.ionViewDidEnter = function () {
        this.populate();
        this.populatePromotion();
        setInterval(function () { this.coupons = this.coupons; }, 1000);
    };
    PromotionsPage.prototype.ionViewWillLeave = function () {
        this.cartService.setPromotion({});
    };
    PromotionsPage.prototype.populate = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.showSpinner = true;
        this.couponService.populate().subscribe(function (result) {
            _this.coupons = result;
            _this.showMsgCoupon = false;
            _this.showSpinner = false;
        }, function (error) {
            _this.showSpinner = false;
            _this.showMsgCoupon = false;
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    PromotionsPage.prototype.populatePromotion = function () {
        var _this = this;
        this.showSpinner = true;
        this.promotionService.populate().subscribe(function (result) {
            _this.promotions = result;
            _this.showMsgPromotion = true;
            if (!_this.promotions.length) {
                _this.showMsgPromotion = false;
                _this.detailSegment = "s-coupon";
            }
            else {
                _this.detailSegment = "s-promotion";
            }
            _this.showSpinner = false;
        }, function (error) {
            _this.showSpinner = false;
            _this.showMsgPromotion = false;
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    PromotionsPage.prototype.getDistance = function (distance) {
        return distance ? distance : 0.00;
    };
    // view restaurant detail
    PromotionsPage.prototype.viewRestaurant = function (coupon) {
        var _this = this;
        var id = coupon.restaurants_id;
        this.cartService.setDiscount(coupon);
        var restaurant = this.restaurantService.getExistById(id);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_12__restaurant_restaurant__["a" /* RestaurantPage */], {
                id: id,
                promotion: true
            });
        }
        else {
            // Antes de tudo vericar se usuário possui Internet
            if (!this.checkInternet.isInternet()) {
                this.withoutInternet();
                return false;
            }
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present();
            loader_1.present().then(function () {
                _this.restaurantService.getById(id).subscribe(function (data) {
                    loader_1.dismiss();
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_12__restaurant_restaurant__["a" /* RestaurantPage */], {
                        id: id,
                        promotion: true
                    });
                }, function (error) {
                    console.log(error);
                    loader_1.dismiss();
                });
            }, function (error) {
                console.log(error);
                loader_1.dismiss();
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
                else {
                    _this.presentToast("Desculpe. Tente novamente.");
                }
            });
        }
    };
    // view restaurant detail
    PromotionsPage.prototype.applyPromotion = function (promotion) {
        var id = promotion.id;
        if (promotion.only_new_user === 1 && !this.loginService.getUser().isNew) {
            this.presentConfirm(promotion);
        }
        else {
            this.cartService.setPromotion(promotion);
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__list_restaurants_list_restaurants__["a" /* ListRestaurantsPage */], { promotionId: id });
        }
    };
    PromotionsPage.prototype.goToRestaurant = function (promotion) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__list_restaurants_list_restaurants__["a" /* ListRestaurantsPage */], { promotionId: promotion.id });
    };
    PromotionsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Tela de sem acesso a internet
    PromotionsPage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    PromotionsPage.prototype.getCoupon = function (coupon) {
        if (coupon.discount_type == 0) {
            return "R$ " + coupon.price + " de desconto ";
        }
        else {
            return coupon.price + " % de desconto";
        }
    };
    // go to login page
    PromotionsPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    PromotionsPage.prototype.updateUser = function () {
        return this.usersProvider.update({
            id: 1,
            json: '{}'
        });
    };
    PromotionsPage.prototype.isExpiration = function (coupon) {
        if (coupon.expiration) {
            var dateString = coupon.expiration.substr(0, (coupon.expiration.length - 5));
            var date = new Date(dateString);
            var dateNow = new Date();
            var result = date.getTime() - dateNow.getTime();
            if (coupon.privated == 0 && result > 0) {
                this.showMsgCoupon = true;
            }
            return date.getTime() - dateNow.getTime();
        }
        else {
            return -1;
        }
    };
    PromotionsPage.prototype.getExpirationDate = function (coupon) {
        var ms = this.isExpiration(coupon);
        return this.msToTime(ms);
    };
    PromotionsPage.prototype.msToTime = function (duration) {
        var seconds = (duration / 1000) % 60, minutes = (duration / (1000 * 60)) % 60, hours = (duration / (1000 * 60 * 60)) % 24;
        hours = parseInt(hours + "");
        minutes = parseInt(minutes + "");
        seconds = parseInt(seconds + "");
        var h = (hours < 10) ? "0" + hours : hours;
        var m = (minutes < 10) ? "0" + minutes : minutes;
        var s = (seconds < 10) ? "0" + seconds : seconds;
        return h + ":" + m + ":" + s;
    };
    PromotionsPage.prototype.presentConfirm = function (promotion) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Válido para novos clientes',
            message: 'Promoção não será aplicada. Deseja continuar?',
            buttons: [{
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.goToRestaurant(promotion);
                    }
                }]
        });
        alert.present();
    };
    return PromotionsPage;
}());
PromotionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-promotions',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/promotions/promotions.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n	<ion-navbar color="sacia">\n	    <ion-row>\n	      <ion-col col-3>\n	        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n	      </ion-col>\n	      <ion-col col-6>\n	        <ion-title style="margin-top: 10px;">\n	          Promoções\n	        </ion-title>\n	      </ion-col>\n	    </ion-row>\n	    <ion-row>\n	    	<ion-col col-12>\n				<ion-segment [(ngModel)]="detailSegment" >\n			      <ion-segment-button value="s-coupon">\n			        CUPONS\n			      </ion-segment-button>\n			      <ion-segment-button value="s-promotion">\n			        PROMOÇÕES\n			      </ion-segment-button>\n			    </ion-segment>\n			</ion-col>\n	    </ion-row>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      Promoções\n    </ion-title>\n\n  </ion-navbar>\n\n 	<ion-toolbar color="sacia">\n    	<ion-segment [(ngModel)]="detailSegment" >\n	      <ion-segment-button value="s-coupon">\n	        CUPONS\n	      </ion-segment-button>\n	      <ion-segment-button value="s-promotion">\n	        PROMOÇÕES\n	      </ion-segment-button>\n	    </ion-segment>\n  	</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div [ngSwitch]="detailSegment">\n\n	    <ion-list *ngSwitchCase="\'s-coupon\'">\n	    	<ion-card *ngFor="let coupon of coupons" >\n			    <div *ngIf="coupon.privated == 0 && isExpiration(coupon) > 0" (click)="viewRestaurant(coupon)" >\n\n				  <img *ngIf="coupon.json.img" src="{{coupon.json.img}}" class="size-img" />\n				  <img *ngIf="!coupon.json.img" src="assets/img/coupon.png" class="size-img" />\n				  <ion-card-content>\n				    <ion-card-title>\n				      {{coupon.json.name}}\n				      </ion-card-title>\n				    <p class="bold">\n				      Código: {{coupon.name}}\n				    </p>\n				    <p>\n				    CUPOM: {{getCoupon(coupon)}}\n				    </p>\n				    <p>\n				    	Distancia: {{getDistance(coupon.distance).toFixed(2)}} Km\n				    </p>\n				    <span class="date-expiration" text-center >Termina em: {{getExpirationDate(coupon)}}</span>\n				  </ion-card-content>\n				</div>\n			</ion-card>\n\n			 <div text-center *ngIf="!showMsgCoupon">\n			    <br/><br/>\n			    <div class="msg">\n			      Nenhum cupom encontrado para sua região. :(\n			    </div>\n\n			  </div>\n		  	<ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n	    </ion-list>\n\n	    <ion-list *ngSwitchCase="\'s-promotion\'">\n\n	    	<div *ngFor="let promotion of promotions"  text-center>\n			    <div (click)="applyPromotion(promotion)" *ngIf="promotion.is_valid === 1" >\n				  <img src="{{promotion.img}}" class="img-promotion" style="width: 100%;" />\n				</div>\n			</div>\n	    	<div text-center *ngIf="!showMsgPromotion">\n			    <br/><br/>\n			    <div class="msg">\n			      Nenhuma promoção foi encontrada para sua região. :(\n			    </div>\n\n			  </div>\n	    	<ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n	    </ion-list>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/promotions/promotions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__["a" /* CouponService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_7__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_6__services_promotion_service__["a" /* PromotionService */],
        __WEBPACK_IMPORTED_MODULE_9__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_11__providers_users_users__["b" /* UsersProvider */]])
], PromotionsPage);

//# sourceMappingURL=promotions.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_promotion_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Services */





/* Pages */





/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ListRestaurantsPage = (function () {
    function ListRestaurantsPage(app, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, checkInternet, ga, http, statusBar, restaurantService, cartService, loginService, usersProvider, promotionService) {
        this.app = app;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.checkInternet = checkInternet;
        this.ga = ga;
        this.http = http;
        this.statusBar = statusBar;
        this.restaurantService = restaurantService;
        this.cartService = cartService;
        this.loginService = loginService;
        this.usersProvider = usersProvider;
        this.promotionService = promotionService;
        this.banner = 'assets/img/banner.png';
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Promoções Restaurantes');
        this.location = {};
        this.showSpinner = false;
        this.promotionId = navParams.get('promotionId');
        this.promotion = this.promotionService.getById(this.promotionId);
        this.restaurants = this.promotionService.getRestaurants(this.promotionId);
    }
    // view restaurant detail
    ListRestaurantsPage.prototype.viewRestaurant = function (restaurant) {
        var _this = this;
        var id = restaurant.id;
        restaurant = this.restaurantService.getExistById(id);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__restaurant_restaurant__["a" /* RestaurantPage */], {
                id: id,
                promotion: true
            });
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present();
            loader_1.dismiss().then(function () {
                _this.restaurantService.getById(id).subscribe(function (data) {
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__restaurant_restaurant__["a" /* RestaurantPage */], {
                        id: id,
                        promotion: true
                    });
                }, function (error) {
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                    console.log(error);
                });
            }, function (error) {
                loader_1.dismiss();
                _this.presentToast("Desculpe. Tente novamente.");
            });
        }
    };
    // Busca os restaurentes na base de dados
    ListRestaurantsPage.prototype.findRestaurant = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            return false;
        }
        this.showSpinner = true;
        var location = this.restaurantService.getUserLocation();
        if (location && location.latitude && location.longitude) {
            this.restaurantService.getInitialHome().subscribe(function (result) {
                _this.restaurants = _this.restaurantService.getAll();
                _this.message = result.message;
                _this.showSpinner = false;
            }, function (error) {
                console.log(error);
                _this.showSpinner = false;
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        }
    };
    // Tela de sem acesso a internet
    ListRestaurantsPage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    ListRestaurantsPage.prototype.ionViewDidEnter = function () {
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.location = this.loginService.getUserLocation();
    };
    ListRestaurantsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ListRestaurantsPage.prototype.getCircle = function (index, size) {
        return index + 1 < size ? '• ' : '';
    };
    ListRestaurantsPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    ListRestaurantsPage.prototype.getShowSpinner = function () {
        if (!this.location || !this.location.street) {
            return false;
        }
        return this.showSpinner;
    };
    /* go to login page */
    ListRestaurantsPage.prototype.goToLogout = function () {
        this.updateUser();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    ListRestaurantsPage.prototype.getFrete = function (restaurant) {
        var frete = this.cartService.calculateFrete(restaurant.frete, restaurant.frete_km, restaurant.km_max, restaurant.km_normal, restaurant.distance);
        if (typeof frete === 'string') {
            return true;
        }
        return false;
    };
    /* Remove o usuário do banco de dados local */
    ListRestaurantsPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return ListRestaurantsPage;
}());
ListRestaurantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-restaurants',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/promotions/list-restaurants/list-restaurants.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Promoções\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Promoções\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div *ngIf="location && location.street" >\n      \n      <ion-card style="padding-left: 12px; padding-right: 12px;     box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3) !important;" *ngIf="restaurants && restaurants.length">\n        <ion-card-content>\n          <div class="text-title" >{{promotion.name}}</div>\n          <div class="text-description" >{{promotion.description}}</div>\n        </ion-card-content>\n      </ion-card>\n\n      <div text-center *ngIf="restaurants && restaurants.length"> \n        <span class="badge-restaurant" ion-text>{{restaurants.length}} resultados</span>\n      </div>\n\n      <ion-card *ngIf="!restaurants || !restaurants.length" style="padding: 12px">\n        <ion-card-content>\n          <p>Aguarde, em breve estaremos com novas promoções.</p>\n        </ion-card-content>\n      </ion-card>\n\n\n      <div  *ngFor="let restaurant of restaurants" (click)="viewRestaurant(restaurant)">\n        <div *ngIf="!restaurant.isOpen" variant="transparent" class="open-ribbon">\n          <div variant="transparent" class="open-ribbon"><span>FECHADO</span></div>\n        </div>\n        <ion-row class="padding-row">\n          <ion-col col-2 class="margin-img">\n            <img class="redondo" *ngIf="restaurant.img" src="{{ restaurant.img }}" alt="{{ restaurant.name }}" />\n            <img class="redondo" *ngIf="!restaurant.img" src="assets/img/restaurants/estabelecimento.jpg" alt="{{ restaurant.name }}" />\n          </ion-col>\n          <ion-col col-10 style="padding-left: 22px;">\n            <div class="company-title">\n              <strong>{{restaurant.name}}</strong>\n\n              <ion-icon name="star" *ngIf="restaurant.stars" color="star" class="font-size-star float-right"> {{ restaurant.stars }} </ion-icon>\n              <span *ngIf="!restaurant.stars" ion-text color="star" class="float-right"> novo </span>\n\n            </div>\n            <div color="gray" class="text-size-1" style="padding-top: 3px;">\n                <span ion-text color="gray" *ngFor="let cat of restaurant.Categories; let i = index">{{ cat.name }} {{getCircle(i, restaurant.Categories.length)}}</span>\n            </div>\n            \n            <div>\n               <span class="badge-free-delivery" ion-text  *ngIf="getFrete(restaurant)">Entrega: Gratis</span>\n            </div>\n\n\n            <div color="gray" class="text-size-1">\n              <span ion-text color="gray" *ngIf="restaurant.delivery_min && restaurant.delivery_max" >\n                {{ restaurant.delivery_min }} - {{ restaurant.delivery_max }} &nbsp;&nbsp;\n              </span>\n            </div>\n\n            <div *ngIf="restaurant.delivery_pickup === 1">\n              <span ion-text color="danger"> Não entregamos </span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col col-2> </ion-col>\n          <ion-col col-10>\n            <hr align="right" style="width:92%"/>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n\n  <ion-spinner name="circles" *ngIf="getShowSpinner()"></ion-spinner>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/promotions/list-restaurants/list-restaurants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_11__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_7__services_promotion_service__["a" /* PromotionService */]])
], ListRestaurantsPage);

//# sourceMappingURL=list-restaurants.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sms_sms__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchPage = (function () {
    function SearchPage(nav, app, loadingCtrl, toastCtrl, cartService, categoryService, loginService, checkInternet, locationAccuracy, geolocation, ga, statusBar, http, usersProvider, restaurantService) {
        this.nav = nav;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.cartService = cartService;
        this.categoryService = categoryService;
        this.loginService = loginService;
        this.checkInternet = checkInternet;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.ga = ga;
        this.statusBar = statusBar;
        this.http = http;
        this.usersProvider = usersProvider;
        this.restaurantService = restaurantService;
        this.keyword = null;
        this.showResults = false;
        this.restaurants = [];
        this.showSpinner = false;
        this.isLogged = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela de Busca');
    }
    SearchPage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__login_login__["a" /* LoginPage */]);
    };
    SearchPage.prototype.findCategories = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        this.showSpinner = true;
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.categoryService.populate().subscribe(function (result) {
                _this.categories = result;
                _this.showSpinner = false;
            }, function (error) {
                _this.showSpinner = false;
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        }, function (error) {
            console.log(error);
            _this.showSpinner = false;
            _this.presentToast("Desculpe. Tente novamente.");
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    // filter list categories
    SearchPage.prototype.filterCat = function (ev) {
        this.categories = this.categoryService.getAll();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.categories = this.categories.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (!this.categories.length) {
                this.showResults = true;
                this.findByLike(val);
            }
            else {
                this.showResults = false;
            }
        }
    };
    SearchPage.prototype.findByLike = function (value) {
        var _this = this;
        this.showSpinner = true;
        this.restaurantService.getByLike(value).subscribe(function (data) {
            if (data.status) {
                _this.restaurants = data.data;
                _this.showResults = true;
                _this.message = data.message;
                _this.showSpinner = false;
            }
            else {
                _this.showResults = true;
                _this.showSpinner = false;
            }
        }, function (error) {
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    // clear filter
    SearchPage.prototype.clearFilter = function (ev) {
        this.categories = this.categoryService.getAll();
        this.showResults = false;
        this.keyword = null;
    };
    // search by keyword
    SearchPage.prototype.search = function (keyword) {
        this.keyword = keyword.name;
        this.findByCategory(keyword.id);
    };
    SearchPage.prototype.findByCategory = function (keyword) {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.showSpinner = true;
        this.restaurantService.getByCategory(keyword).subscribe(function (data) {
            // remove the popup
            if (data.status) {
                _this.restaurants = data.data;
                _this.showResults = true;
            }
            else {
                _this.showResults = true;
            }
            _this.showSpinner = false;
        }, function (error) {
            // remove the popup
            _this.showSpinner = false;
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    // view restaurant detail
    SearchPage.prototype.viewRestaurant = function (restaurant) {
        var _this = this;
        var id = restaurant.id;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        restaurant = this.restaurantService.getExistById(id);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__["a" /* RestaurantPage */], {
                id: id
            });
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present();
            loader_1.present().then(function () {
                _this.restaurantService.getById(id).subscribe(function (data) {
                    loader_1.dismiss();
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__["a" /* RestaurantPage */], {
                        id: id
                    });
                }, function (error) {
                    console.log(error);
                    loader_1.dismiss();
                    _this.presentToast("Desculpe. Tente novamente.");
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                });
            });
        }
    };
    SearchPage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.isLogged = this.loginService.isLogged();
        this.user = this.loginService.getUser();
        this.location = {};
        this.hasItems = false;
        this.categories = this.categoryService.getAll();
        if (!this.categories || !this.categories.length) {
            this.findCategories();
        }
        this.location = this.loginService.getUser().location;
        // Verifica se possui itens no Carrinho
        var cart = this.cartService.getCart();
        if (cart && cart.orders && cart.orders.restaurant && cart.orders.restaurant.id) {
            this.hasItems = cart.orders.items.length ? true : false;
        }
        else {
            this.hasItems = false;
        }
    };
    SearchPage.prototype.changeAddress = function () {
        this.getAddressByGoogleMaps();
    };
    SearchPage.prototype.getAddressByGoogleMaps = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */]);
        this.showResults = false;
    };
    // go to cart page
    SearchPage.prototype.goToCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SearchPage.prototype.getFrete = function (restaurant) {
        var frete = this.cartService.calculateFrete(restaurant.frete, restaurant.frete_km, restaurant.km_max, restaurant.km_normal, restaurant.distance);
        if (typeof frete === 'string') {
            return true;
        }
        return false;
    };
    SearchPage.prototype.getCircle = function (index, size) {
        return index + 1 < size ? '• ' : '';
    };
    //Utiliza o plugin locationAccurancy para pegar a posição do usuário pelo GPS do celular.
    SearchPage.prototype.closeToMe = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            // the accuracy option will be ignored by iOS
            _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                _this.location = {};
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.location.latitude = resp.coords.latitude;
                    _this.location.longitude = resp.coords.longitude;
                    if (_this.location.latitude && _this.location.longitude) {
                        _this.getAddress(_this.location.latitude, _this.location.longitude);
                    }
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
                });
            }, function (error) {
                console.log('Error requesting location permissions', error);
                _this.presentToast('Desculpe. Não conseguimos a sua localização. Tente novamente!');
            });
        });
    };
    // Busca o endereço pela Latitude e Longitude
    SearchPage.prototype.getAddress = function (lat, lng) {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        // Show the popup
        loader.present();
        loader.dismiss().then(function () {
            _this.getLocationByLatAndLng(lat, lng, loader).subscribe(function (result) {
                // Seta o endereço no carrinho de compras
                //this.setAddress(address);
            }, function (error) {
                console.log(error);
            });
        });
    };
    // Busca o endereço na API do Google Maps pela latitude e longitude
    SearchPage.prototype.getLocationByLatAndLng = function (lat, lng, loader) {
        var env = this;
        return this.http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true")
            .map(function (res) {
            var formatJson = JSON.parse(res["_body"]);
            // Convert resposta da API do google em um objeto
            var address = env.loginService.mountAddress(formatJson.results[0].address_components, env.location);
            // Seta o endereço recebido da API
            env.loginService.setLocation(address);
            loader.dismiss();
            env.location = address;
            return res;
        })
            .catch(function (error) {
            loader.dismiss();
            return error;
        });
    };
    SearchPage.prototype.fullActivation = function () {
        var user = this.loginService.getUser();
        if (user && user.activation_code === false) {
            this.sms();
        }
    };
    // Tela de sms, valida número telefonico
    SearchPage.prototype.sms = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_15__sms_sms__["a" /* SmsPage */]);
    };
    // go to login page
    SearchPage.prototype.goToLogout = function () {
        this.updateUser();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_14__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    SearchPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/search/search.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      Buscar Estabelecimentos\n    </ion-title>\n\n    <ion-buttons end *ngIf="isLogged && !user.activation_code" (click)="fullActivation()">\n      <button class="activation-phone" ion-button icon-only>\n        <ion-icon name="alert"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons class="bar-buttons bar-buttons-ios" end *ngIf="!isLogged" (click)="login()">\n       <button ion-button icon-only style="font-size: 18px">\n        <ion-icon name="log-in"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n  <ion-toolbar no-border-top color="white" >\n    <ion-searchbar [showCancelButton]="shouldShowCancel"\n                   [(ngModel)]="keyword"\n                   (ionInput)="filterCat($event)"\n                   (ionClear)="clearFilter($event)"\n                   placeholder="Busca restaurante ou categoria">\n    </ion-searchbar>\n    <!--number of results-->\n    <div [hidden]="!showResults" text-center>\n      {{ restaurants.length }} resultados\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class="list-full-border" [hidden]="showResults" *ngIf="location && location.street">\n    <ion-item *ngFor="let cat of categories" (click)="search(cat)">\n      {{ cat.name }}\n    </ion-item>\n  </ion-list>\n\n  <div [hidden]="!showResults" margin-top *ngIf="location && location.street">\n\n    <ion-card (click)="changeAddress()" class="my-address">\n      <ion-card-content class="card-content-custom">\n        {{location.street }}\n        <div class="pull-right">\n          Mudar\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <br/>\n\n    <div  *ngFor="let restaurant of restaurants" (click)="viewRestaurant(restaurant)">\n      <div *ngIf="!restaurant.isOpen" variant="transparent" class="open-ribbon">\n          <div variant="transparent" class="open-ribbon"><span>FECHADO</span></div>\n        </div>\n      <ion-row class="padding-row">\n        <ion-col col-2 class="margin-img">\n          <img class="redondo" *ngIf="restaurant.img" src="{{ restaurant.img }}" alt="{{ restaurant.name }}" />\n          <img class="redondo" *ngIf="!restaurant.img" src="assets/img/restaurants/estabelecimento.jpg" alt="{{ restaurant.name }}" />\n        </ion-col>\n        <ion-col col-10 style="padding-left: 22px;">\n          <div class="company-title">\n            <strong>{{restaurant.name}}</strong>\n\n            <ion-icon name="star" *ngIf="restaurant.stars" color="star" class="font-size-star float-right"> {{ restaurant.stars }} </ion-icon>\n            <span *ngIf="!restaurant.stars" ion-text color="star" class="float-right"> novo </span>\n\n          </div>\n          <div color="gray" class="text-size-1" style="padding-top: 3px;">\n            <span ion-text color="gray" *ngFor="let cat of restaurant.Categories; let i = index">{{ cat.name }} {{getCircle(i, restaurant.Categories.length)}}</span>\n          </div>\n          \n          <div color="gray" class="text-size-1">\n            <span ion-text color="gray" *ngIf="restaurant.delivery_min && restaurant.delivery_max" >\n                {{ restaurant.delivery_min }} - {{ restaurant.delivery_max }} &nbsp;&nbsp;\n              </span>\n          </div>\n\n          <div *ngIf="restaurant.delivery_pickup === 1">\n            <span ion-text color="danger"> Não entregamos </span>\n          </div>\n\n          <span class="badge-cash-back" *ngIf="restaurant.percentage_discount">\n              {{restaurant.percentage_discount}} % \n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col col-2> </ion-col>\n        <ion-col col-10>\n          <hr align="right" style="width:92%"/>\n        </ion-col>\n      </ion-row>\n    </div>\n\n      <ion-card class="list-full-border" *ngIf="!restaurants || !restaurants.length">\n        <ion-card-content>\n          Nenhum estabelecimento foi encontrado. :(\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n\n  <div *ngIf="!location || !location.street" padding text-center >\n        <h6 style="margin-top: 10%">Buscamos os restaurantes mais perto de você:</h6>\n        <ion-card (click)="closeToMe()">\n          <ion-card-content text-center style="margin-top: 10px;" >\n            <ion-icon name="locate"></ion-icon> Perto de mim\n          </ion-card-content>\n        </ion-card>\n\n        <button *ngIf="isLogged" style="margin-top: 10%" ion-button block margin-bottom color="sacia" (click)="getAddressByGoogleMaps()">Meus Endereços</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */],
        __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_10__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_16__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_4__services_restaurant_service__["a" /* RestaurantService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_rating__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_history_detail__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrderPage = (function () {
    function OrderPage(app, nav, toastCtrl, historyOrderService, checkInternet, usersProvider, loginService, statusBar, ga) {
        this.app = app;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.historyOrderService = historyOrderService;
        this.checkInternet = checkInternet;
        this.usersProvider = usersProvider;
        this.loginService = loginService;
        this.statusBar = statusBar;
        this.ga = ga;
        this.showSpinner = false;
        this.isLogged = false;
        this.statusName = ['', 'PENDENTE - AGUARDANDO CONFIRMAÇÃO',
            'EM PREPARO - JÁ FOI CONFIRMADO',
            'SAIU PARA ENTREGA',
            'CONCLUÍDO - PEDIDO ENTREGUE',
            'CANCELADO - PEDIDO CANCELADO',
            'PRONTO - CLIENTE VEM BUSCAR',
        ];
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Historico Pedidos');
    }
    OrderPage.prototype.findHistoryOrder = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.showSpinner = true;
        this.historyOrderService.getByUser().subscribe(function (data) {
            // remove the popup
            _this.orders = data.data;
            for (var i = 0; i < _this.orders.length; i++) {
                if (_this.orders[i].status === "4" && !_this.orders[i].orders.rating) {
                    _this.getRating(_this.orders[i]);
                    break;
                }
            }
            _this.showSpinner = false;
        }, function (error) {
            console.log(error);
            _this.showSpinner = false;
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    OrderPage.prototype.getTotal = function (total) {
        if (typeof total === 'string') {
            return parseFloat(total).toFixed(2);
        }
        return total;
    };
    OrderPage.prototype.getDetails = function (order) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__details_history_detail__["a" /* HistoryDetailsPage */], {
            orderId: order.id
        });
    };
    OrderPage.prototype.getOrderStatus = function (status) {
        return this.statusName[status];
    };
    OrderPage.prototype.isDelivery = function (order) {
        if (parseInt(order.flag_delivery) > 0) {
            return true;
        }
        if (parseInt(order.flag_delivery) > 0 && parseInt(order.status) < 4) {
            return true;
        }
        return false;
    };
    OrderPage.prototype.getRating = function (order) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__rating_rating__["a" /* RatingPage */], {
            order: JSON.stringify(order)
        });
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        console.log("Entrei");
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.isLogged = this.loginService.isLogged();
        if (this.isLogged) {
            this.findHistoryOrder();
        }
        else {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {
                backButton: true
            });
        }
    };
    OrderPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    OrderPage.prototype.getMedia = function (rate) {
        if (rate.rate_delivery) {
            var media = (rate.rate_custo + rate.rate_food + rate.rate_delivery) / 3;
            return media.toFixed(2);
        }
        else {
            var media = (rate.rate_custo + rate.rate_food) / 2;
            return media.toFixed(2);
        }
    };
    OrderPage.prototype.withoutInternet = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__without_internet_without_internet__["a" /* WithoutInternetPage */]);
    };
    // go to login page
    OrderPage.prototype.goToLogout = function () {
        this.updateUser();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {
            backButton: true
        });
    };
    // Remove o usuário do banco de dados local
    OrderPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/order/order.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n   <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-2>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-10>\n        <ion-title style="margin-top: 10px;">\n          Meus Pedidos\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title text-center>\n      Meus Pedidos\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="light-bg">\n  <div class="white-bg"  *ngFor="let order of orders" padding margin-bottom (click)="getDetails(order)">\n    <div class="thumb" [ngStyle]="{\'background-image\': \'url(\' + order.orders.restaurant.img + \')\', \'background-size\': \'150px 100px\', \'background-repeat\': \'no-repeat\'}"></div>\n\n    <ion-list class="list-full-border">\n      <ion-item>\n        \n        <ion-icon *ngIf="order.status === \'1\'" name="alert" color="facebook" item-left></ion-icon>\n        <ion-icon *ngIf="order.status === \'2\'" name="clock" color="orange2" item-left></ion-icon>\n        <ion-icon *ngIf="order.status === \'3\'" name="car" color="secondary" item-left></ion-icon>\n        <ion-icon *ngIf="order.status === \'4\'" name="checkmark-circle" color="secondary" item-left></ion-icon>\n        <ion-icon *ngIf="order.status === \'5\'" name="close-circle" color="redsacia" item-left></ion-icon>\n        <ion-icon *ngIf="order.status === \'6\'" name="walk" color="secondary" item-left></ion-icon>\n\n        <div>{{ order.orders.restaurant.name }}</div>\n        <span class="text-sm" ion-text color="dark" >{{ getOrderStatus( order.status ) }}</span>\n        <br/>\n        <span *ngIf="isDelivery(order)" class="text-sm" ion-text color="dark">Entrega: \n          {{ order.orders.restaurant.delivery_min }} - {{ order.orders.restaurant.delivery_max }}\n        </span>\n        <br *ngIf="order.orders.rating"/>\n        <span class="text-sm" ion-text color="dark" *ngIf="order.orders.rating">\n          Avaliação: \n          <ion-icon name="star" color="star"></ion-icon>\n          {{ getMedia(order.orders.rating) }}\n        </span>\n      </ion-item>\n      <ion-item>\n        <ion-icon item-left></ion-icon>\n        <span class="details" >TOTAL: R${{ getTotal(order.total) }}</span>\n        <button ion-button class="pull-right" color="secondary">DETALHES</button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-card class="list-full-border" *ngIf="isLogged && (!orders || !orders.length)">\n    <ion-card-content>\n      Você ainda não realizou nenhum pedido.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/order/order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__services_history_order_service__["a" /* HistoryOrderService */],
        __WEBPACK_IMPORTED_MODULE_6__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_8__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HelpPage = (function () {
    function HelpPage(nav, toastCtrl, alertCtrl, loadingCtrl, statusBar, userService, loginService, usersProvider, formBuilder) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.statusBar = statusBar;
        this.userService = userService;
        this.loginService = loginService;
        this.usersProvider = usersProvider;
        this.formBuilder = formBuilder;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.form = this.formBuilder.group({
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    HelpPage.prototype.sendEmail = function () {
        var _this = this;
        var profile = this.loginService.getUser();
        // Prepara os inputs para enviar ao servidor (nome, email e mensagem)
        var json = {
            name: profile.first_name + " " + profile.last_name,
            email: profile.email,
            phone: "(" + profile.country_code + ") " + profile.phone,
            message: this.form.value.message
        };
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Aguarde estamos a enviando sua mensagem...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.userService.sendEmailToSaciaFome(json).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                    _this.form.reset();
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                console.log(error);
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                // remove the popup
                loader.dismiss();
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    HelpPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    HelpPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    HelpPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    HelpPage.prototype.updateUser = function () {
        return this.usersProvider.update({
            id: 1,
            json: '{}'
        });
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/help/help.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          Ajuda\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Ajuda\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="form"> \n	  <ion-textarea type="text" formControlName="message" placeholder="Entre com sua mensagem"></ion-textarea>\n	  <button [disabled]="form.invalid" ion-button block color="sacia" style="border-radius: 2px;" (click)="sendEmail()">Enviar</button>\n	</form>\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = (function () {
    function SettingsPage(nav, toastCtrl, alertCtrl, loadingCtrl, checkInternet, usersProvider, statusBar, loginService) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.checkInternet = checkInternet;
        this.usersProvider = usersProvider;
        this.statusBar = statusBar;
        this.loginService = loginService;
        // dummy data for users
        this.user = {};
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.user = loginService.getUser();
    }
    SettingsPage.prototype.goToChangePassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    SettingsPage.prototype.updateUser = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Atualizando...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.loginService.updateUser(_this.user).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                    //Após editar o usuário atualiza também o banco de dados local.
                    _this.saveUserDatabase(_this.loginService.getUser());
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
                else {
                    _this.presentAlert('Tente novamente!');
                }
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    SettingsPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SettingsPage.prototype.saveUserDatabase = function (user) {
        var model = new __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* User */]();
        model.id = 1;
        model.json = JSON.stringify(user);
        this.updateUserLocal(model)
            .then(function () {
            console.log("Usuário inserido no banco de dados com sucesso");
        })
            .catch(function () {
            console.log("Erro ao tentar salvar o usuário no banco de dados local");
        });
    };
    // Salva o usuário no banco de dados local
    SettingsPage.prototype.updateUserLocal = function (model) {
        return this.usersProvider.update(model);
    };
    // go to login page
    SettingsPage.prototype.goToLogout = function () {
        this.updateUserLocal({
            id: 1,
            json: '{}'
        });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/settings/settings.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-6>\n        <ion-title style="margin-top: 10px;">\n          Perfil\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Perfil\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="light-bg">\n  <div padding>\n    INFORMAÇÃO DA CONTA\n  </div>\n  <ion-grid class="white-bg" padding-left padding-right padding-bottom>\n    <ion-row>\n      <ion-col>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="user.first_name"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-label stacked>Sobrenome</ion-label>\n        <ion-input type="text" [(ngModel)]="user.last_name"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col>\n        <ion-label stacked>E-MAIL</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label stacked>TELEFONE</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3>\n        <ion-select [(ngModel)]="user.country_code">\n          <ion-option value="55">+55 - Brasil</ion-option>\n        </ion-select>\n      </ion-col>\n      <ion-col col-9>\n        <ion-input type="text" name="phone" placeholder="Celular" [brmasker]="{phone: true}" [(ngModel)]="user.phone"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div padding text-center>\n    <button ion-button block margin-bottom color="sacia" style="border-radius: 2px;" (click)="updateUser()">Atualizar</button>\n\n    <button ion-button block margin-bottom color="secondary" style="border-radius: 2px;" (click)="goToChangePassword()">Modificar senha</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChangePasswordPage = (function () {
    function ChangePasswordPage(nav, userService, loginService, toastCtrl, alertCtrl, formBuilder, statusBar, checkInternet, usersProvider, loadingCtrl) {
        this.nav = nav;
        this.userService = userService;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.checkInternet = checkInternet;
        this.usersProvider = usersProvider;
        this.loadingCtrl = loadingCtrl;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.profile = {};
        this.register = this.formBuilder.group({
            oldPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    // register
    ChangePasswordPage.prototype.signUp = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.presentToast("Sem acesso a internet");
            return false;
        }
        if (this.profile.newPassword !== this.profile.repeatPassword) {
            this.presentAlert("Senhas não são iguais.");
            return;
        }
        if (this.profile.newPassword.length < 6) {
            this.presentAlert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }
        this.profile.id = this.loginService.getUser().id;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Modificando...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.userService.changePassword(_this.profile).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                if (data.status) {
                    _this.presentToast(data.message);
                    _this.register.reset();
                }
                else {
                    _this.presentAlert(data.message);
                }
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    ChangePasswordPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    ChangePasswordPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    ChangePasswordPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    ChangePasswordPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-password',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Modificar Senha\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Modificar Senha\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="register">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-input \n            type="password"\n            clearOnEdit="false"\n            [ngClass]="{\'error\':!register.controls.oldPassword.valid && register.controls.oldPassword.dirty, \'success\':register.controls.oldPassword.valid && register.controls.oldPassword.dirty}" \n            [(ngModel)]="profile.oldPassword" \n            placeholder="Senha Atual" \n            formControlName="oldPassword"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label stacked>Nova senha</ion-label>\n          <ion-input \n            type="password"\n            clearOnEdit="false"\n            [ngClass]="{\'error\':!register.controls.newPassword.valid && register.controls.newPassword.dirty, \'success\':register.controls.newPassword.valid && register.controls.newPassword.dirty}" \n            [(ngModel)]="profile.newPassword" \n            formControlName="newPassword"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label stacked>Confirmar Senha</ion-label>\n          <ion-input \n            type="password"\n            clearOnEdit="false"\n            [ngClass]="{\'error\':!register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty, \'success\':register.controls.repeatPassword.valid && register.controls.repeatPassword.dirty}" \n            [(ngModel)]="profile.repeatPassword"\n            formControlName="repeatPassword" ></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <span ion-text color="gray">A senha deve ter pelo menos 6 caracteres.</span>\n\n  <button [disabled]="register.invalid" ion-button block margin-top color="sacia" style="border-radius: 2px;" (click)="signUp()">Alterar Senha</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/change-password/change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_7__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_address_new_address__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_address_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddressPage = (function () {
    function AddressPage(nav, statusBar, addressService, loginService, loadingCtrl) {
        this.nav = nav;
        this.statusBar = statusBar;
        this.addressService = addressService;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.address = this.addressService.getAll();
        if (!this.address.length) {
            this.findAddress();
        }
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
    }
    AddressPage.prototype.findAddress = function () {
        var _this = this;
        // Create the popup
        var loader = this.loadingCtrl.create({
            content: 'Buscando endereços...'
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.addressService.findById(_this.loginService.getUser().id).subscribe(function (data) {
                // remove the popup
                loader.dismiss();
                _this.address = data.data;
            }, function (error) {
                console.log(error);
                // remove the popup
                loader.dismiss();
            });
        });
    };
    AddressPage.prototype.newAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__new_address_new_address__["a" /* NewAddressPage */], { userId: this.loginService.getUser().id });
    };
    AddressPage.prototype.editAddress = function (address) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__new_address_new_address__["a" /* NewAddressPage */], { address: JSON.stringify(address) });
    };
    AddressPage.prototype.ionViewWillEnter = function () {
        this.address = this.addressService.getAll();
    };
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/address/address.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Meus Endereços\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Meus Endereços\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card *ngFor="let add of address">\n  <ion-card-content (click)="editAddress(add)" class="white">\n    {{add.street}} • {{add.number}}<br/>\n  	<div *ngIf="add.complement" >Complemento: {{add.complement}}<br/></div>\n  	Bairro: {{add.neighborhood}}<br/>\n  	{{add.city}} • {{add.state}}<br/>\n  	CEP: {{add.cep}}\n  </ion-card-content>\n</ion-card>\n\n<ion-card class="list-full-border" *ngIf="!address || !address.length">\n    <ion-card-content>\n      Você ainda possui endereços cadastrados.\n    </ion-card-content>\n  </ion-card>\n\n<ion-fab right bottom style="font-size: 250%">\n  <button ion-fab color="sacia" (click)="newAddress()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/address/address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */],
        __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FavoritePage = (function () {
    function FavoritePage(app, nav, categoryService, restaurantService, toastCtrl, statusBar, loginService, usersProvider, cartService, loadingCtrl) {
        this.app = app;
        this.nav = nav;
        this.categoryService = categoryService;
        this.restaurantService = restaurantService;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.loginService = loginService;
        this.usersProvider = usersProvider;
        this.cartService = cartService;
        this.loadingCtrl = loadingCtrl;
        this.banner = 'assets/img/banner.png';
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.location = {};
        this.findRestaurant();
    }
    // view restaurant detail
    FavoritePage.prototype.viewRestaurant = function (restaurant) {
        var _this = this;
        var id = restaurant.id;
        restaurant = this.restaurantService.getExistById(id);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__["a" /* RestaurantPage */], {
                id: id
            });
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present();
            loader_1.present().then(function () {
                _this.restaurantService.getById(id).subscribe(function (data) {
                    loader_1.dismiss();
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__["a" /* RestaurantPage */], {
                        id: id
                    });
                }, function (error) {
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                });
            }, function (error) {
                console.log(error);
                loader_1.dismiss();
                _this.presentToast("Desculpe. Tente novamente.");
            });
        }
    };
    FavoritePage.prototype.findRestaurant = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        var ids = this.loginService.getUser().favorites_restaurants_ids;
        var array = [];
        for (var i = 0; i < ids.length; i++) {
            array.push(ids[i].restaurant);
        }
        ids = this.restaurantService.getByFavoriteAlreadyLoad(array);
        if (ids && ids.length) {
            // Show the popup
            loader.present();
            loader.present().then(function () {
                _this.restaurantService.getByIds(array).subscribe(function (result) {
                    loader.dismiss();
                    _this.restaurants = _this.restaurantService.getFavoritesRestaurants();
                }, function (error) {
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                });
            });
        }
        else {
            this.restaurants = this.restaurantService.getFavoritesRestaurants();
        }
    };
    // Chama Tela para selecionar endereço.
    FavoritePage.prototype.getAddressByGoogleMaps = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */]);
    };
    FavoritePage.prototype.getDistance = function (distance) {
        return distance ? distance : 0.00;
    };
    FavoritePage.prototype.ionViewWillEnter = function () {
        this.location = this.loginService.getUser().location;
        this.findRestaurant();
    };
    FavoritePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    FavoritePage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    FavoritePage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    FavoritePage.prototype.getCircle = function (index, size) {
        return index + 1 < size ? '• ' : '';
    };
    FavoritePage.prototype.getFrete = function (restaurant) {
        var frete = this.cartService.calculateFrete(restaurant.frete, restaurant.frete_km, restaurant.km_max, restaurant.km_normal, restaurant.distance);
        return typeof frete === 'string';
    };
    return FavoritePage;
}());
FavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorite',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/img/logo.png" width="60px" style="display:inline-block" height="40px"/>\n      </ion-col>\n      <ion-col col-9>\n        <ion-title style="margin-top: 10px;">\n          Favoritos\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      Favoritos\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--banner-->\n  <!-- <img src="{{ banner }}" alt=""> -->\n  \n  <!--list of restaurants-->\n  <br/>\n\n  <div *ngIf="location && location.street">\n    <div  *ngFor="let restaurant of restaurants" (click)="viewRestaurant(restaurant)">\n        <div *ngIf="!restaurant.isOpen" variant="transparent" class="open-ribbon">\n          <div variant="transparent" class="open-ribbon"><span>FECHADO</span></div>\n        </div>\n        <ion-row class="padding-row">\n          <ion-col col-2 class="margin-img">\n            <img class="redondo" *ngIf="restaurant.img" src="{{ restaurant.img }}" alt="{{ restaurant.name }}" />\n            <img class="redondo" *ngIf="!restaurant.img" src="assets/img/restaurants/estabelecimento.jpg" alt="{{ restaurant.name }}" />\n          </ion-col>\n          <ion-col col-10 style="padding-left: 22px;">\n            <div class="company-title">\n              <strong>{{restaurant.name}}</strong>\n\n              <ion-icon name="star" *ngIf="restaurant.stars" color="star" class="font-size-star float-right"> {{ restaurant.stars }} </ion-icon>\n              <span *ngIf="!restaurant.stars" ion-text color="star" class="float-right"> novo </span>\n\n            </div>\n            <div color="gray" class="text-size-1" style="padding-top: 3px;">\n                <span ion-text color="gray" *ngFor="let cat of restaurant.Categories; let i = index">{{ cat.name }} {{getCircle(i, restaurant.Categories.length)}}</span>\n            </div>\n            \n            <div color="gray" class="text-size-1">\n              <span ion-text color="gray" *ngIf="restaurant.delivery_min && restaurant.delivery_max" >\n                {{ restaurant.delivery_min }} - {{ restaurant.delivery_max }} &nbsp;&nbsp;\n              </span>\n            </div>\n\n            <div *ngIf="restaurant.delivery_pickup === 1">\n              <span ion-text color="danger"> Não entregamos </span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col col-2> </ion-col>\n          <ion-col col-10>\n            <hr align="right" style="width:92%"/>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf="!location || !location.street" padding text-center >\n      <div style="font-size: 23px"> \n        Ainda não temos o seu endereço :(\n      </div>\n\n        <button style="margin-top: 10%" ion-button block margin-bottom color="sacia" (click)="getAddressByGoogleMaps()">Meus Endereços</button>\n  </div>\n\n  <ion-card class="list-full-border" *ngIf="!restaurants || !restaurants.length">\n    <ion-card-content>\n      Não possui estabelecimentos em sua lista de favoritos.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/favorite/favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */],
        __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_9__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], FavoritePage);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_history_detail__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DigitalWalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DigitalWalletPage = (function () {
    function DigitalWalletPage(nav, toastCtrl, statusBar, usersProvider, historyOrderService, userService) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.usersProvider = usersProvider;
        this.historyOrderService = historyOrderService;
        this.userService = userService;
        this.showSpinner = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.wallet = {};
    }
    DigitalWalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DigitalWalletPage');
    };
    DigitalWalletPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.showSpinner = true;
        this.userService.getBalance().subscribe(function (result) {
            _this.wallet = result;
            _this.showSpinner = false;
        }, function (error) {
            console.log(error);
            _this.showSpinner = false;
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
        this.historyOrderService.getByUser().subscribe(function (data) {
        }, function (error) {
            console.log(error);
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    DigitalWalletPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    // go to login page
    DigitalWalletPage.prototype.goToLogout = function () {
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
    };
    // Remove o usuário do banco de dados local
    DigitalWalletPage.prototype.updateUser = function () {
        return this.usersProvider.update({
            id: 1,
            json: '{}'
        });
    };
    DigitalWalletPage.prototype.getMoney = function (item) {
        if (item.is_valid)
            return "R$ " + item.credit.toFixed(2);
        return "R$ " + (item.total * (item.percentage / 100)).toFixed(2);
    };
    DigitalWalletPage.prototype.getDetails = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_history_detail__["a" /* HistoryDetailsPage */], {
            orderId: item.orders_id
        });
    };
    return DigitalWalletPage;
}());
DigitalWalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-digital-wallet',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/digital-wallet/digital-wallet.html"*/'<!--\n  Generated template for the DigitalWalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  	<ion-navbar color="sacia">\n    	<ion-title>\n      		Extrato\n    	</ion-title>\n  	</ion-navbar>\n\n 	<ion-toolbar color="sacia" padding>\n		<span class="text-total">SEU SALDO</span><br/>\n		<span class="wallet-total">{{wallet.totalFormat}}</span><br/>\n	</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card *ngFor="let item of wallet.data">\n	    <ion-card-content (click)="getDetails(item)">\n	    	<span style="font-size: 12px;" ion-text color="gray">\n	    		{{item.Order.createdAt | date: \'dd/MM/yyyy H:mm\' }}\n	    	</span>\n	    	<div> \n	    		<ion-icon name="arrow-dropright" color="sacia" class="arrow-wallet"></ion-icon>\n	    		{{item.Restaurant.name}} • \n	    		<span class="badge-cash-back" *ngIf="item.percentage">\n              		{{item.percentage}} % \n      			</span>\n	    	</div>\n	    	<div>\n	    		<span style="color: #B0B0B0" *ngIf="!item.description"> ------ CRÉDITO: </span>\n	    		<span style="color: #B0B0B0" *ngIf="item.description"> ------ CRÉDITO ({{item.description}}): </span>\n	    		<span style="color: #ffb42d">{{getMoney(item)}}</span>\n	    	</div>\n	    	<div *ngIf="!item.is_valid">\n	    		<span style="color: #B0B0B0" *ngIf="!item.description"> USADO </span>\n	    	</div>\n\n    	</ion-card-content>\n  	</ion-card>\n\n  	<ion-card *ngIf="!wallet || !wallet.data || !wallet.data.length" style="padding: 12px">\n        <ion-card-content>\n          <p>Você ainda não possui nenhum saldo.</p>\n        </ion-card-content>\n      </ion-card>\n\n	<ion-spinner name="circles" *ngIf="showSpinner"></ion-spinner>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/digital-wallet/digital-wallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_6__services_history_order_service__["a" /* HistoryOrderService */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
], DigitalWalletPage);

//# sourceMappingURL=digital-wallet.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_version_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import pages




/**
 * Generated class for the AppVersionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AppVersionPage = (function () {
    function AppVersionPage(app, nav, navParams, viewCtrl, market, ga, statusBar, appVersionService) {
        this.app = app;
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.market = market;
        this.ga = ga;
        this.statusBar = statusBar;
        this.appVersionService = appVersionService;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela Atualizar Aplicativo');
        this.newVersion = this.appVersionService.getNewVersion();
        this.appVersion = this.appVersionService.getAppVersion();
    }
    AppVersionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppVersionPage');
    };
    AppVersionPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    AppVersionPage.prototype.openMarket = function () {
        this.market.open('com.ionicframework.saciafome148065');
    };
    //go to login
    AppVersionPage.prototype.goToLogin = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__["a" /* MainTabsPage */]);
    };
    return AppVersionPage;
}());
AppVersionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-app-version',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/app-version/app-version.html"*/'<!--\n  Generated template for the AppVersionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding  >\n\n<div class="msg" text-center>TEMOS UMA</div>\n<div class="msg1" text-center>NOVA VERSÃO!</div>\n\n<br/>\n\n<div class="msg2" text-center>Olá, informamos que temos uma nova versão para melhor servir você. Com gratidão.  Sacia Fome</div>\n\n<br/><br/>\n<img src="assets/img/logo.png" class="size-img">\n\n<br/>\n\n<button (click)="openMarket()" type="submit" class="button-update border-button" ion-button block margin-top color="green">Atualizar agora!</button>\n\n<button (click)="goToLogin()" type="submit" class="button-update border-button" ion-button block margin-top color="green">Atualizar depois!</button>\n\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/app-version/app-version.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__["a" /* Market */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__services_app_version_service__["a" /* AppVersionService */]])
], AppVersionPage);

//# sourceMappingURL=app-version.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(418);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_version_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_category_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_coupon_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_register_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_address_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_promotion_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_app_version_app_version__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_address_address__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_change_password_change_password__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_construction_construction__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cities_cities__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_delivery_delivery__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_digital_wallet_digital_wallet__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_favorite_favorite__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_finish_order_finish_order__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_finish_order_success_finish_order_success__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_address_new_address_new_address__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_help_help__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_home__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_lead_lead__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_order_order__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_order_details_history_detail__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_delivery_select_address_select_address__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_promotions_promotions__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_register_register__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_search_search__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_sms_sms__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_user_user__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_welcome_welcome__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_restaurant_restaurant__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_promotions_list_restaurants_list_restaurants__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_recover_recover__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_rating_rating__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_item_item__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_cart_cart__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_geolocation__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_onesignal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_facebook__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_network__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ionic2_rating__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_location_accuracy__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_app_version__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_sqlite__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_database_database__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_market__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_call_number__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_launch_navigator__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_brmasker_ionic_3__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_ionic_img_viewer__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import services












// end import services
// import pages





































// end import pages
// import plugins

// end import plugins



// Import ionic2-rating module













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_app_version_app_version__["a" /* AppVersionPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_construction_construction__["a" /* ConstructionPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_cities_cities__["a" /* CitiesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_delivery_delivery__["a" /* DeliveryPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_digital_wallet_digital_wallet__["a" /* DigitalWalletPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_finish_order_finish_order__["a" /* FinishOrderPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_finish_order_success_finish_order_success__["a" /* FinishOrderSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_address_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_lead_lead__["a" /* LeadPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_details_history_detail__["a" /* HistoryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_delivery_select_address_select_address__["a" /* SelectAddressPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_promotions_promotions__["a" /* PromotionsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_sms_sms__["a" /* SmsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_restaurant_restaurant__["a" /* RestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_promotions_list_restaurants_list_restaurants__["a" /* ListRestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_recover_recover__["a" /* RecoverPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_rating_rating__["a" /* RatingPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_without_internet_without_internet__["a" /* WithoutInternetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                backButtonText: '',
            }),
            __WEBPACK_IMPORTED_MODULE_59_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_61__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_70_brmasker_ionic_3__["a" /* BrMaskerModule */],
            __WEBPACK_IMPORTED_MODULE_71_ionic_img_viewer__["b" /* IonicImageViewerModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_app_version_app_version__["a" /* AppVersionPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_construction_construction__["a" /* ConstructionPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_cities_cities__["a" /* CitiesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_delivery_delivery__["a" /* DeliveryPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_digital_wallet_digital_wallet__["a" /* DigitalWalletPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_finish_order_finish_order__["a" /* FinishOrderPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_finish_order_success_finish_order_success__["a" /* FinishOrderSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_address_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_lead_lead__["a" /* LeadPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_details_history_detail__["a" /* HistoryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_delivery_select_address_select_address__["a" /* SelectAddressPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_promotions_promotions__["a" /* PromotionsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_sms_sms__["a" /* SmsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_restaurant_restaurant__["a" /* RestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_promotions_list_restaurants_list_restaurants__["a" /* ListRestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_recover_recover__["a" /* RecoverPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_rating_rating__["a" /* RatingPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_without_internet_without_internet__["a" /* WithoutInternetPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_app_version_service__["a" /* AppVersionService */],
            __WEBPACK_IMPORTED_MODULE_7__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_8__services_check_internet__["a" /* CheckInternet */],
            __WEBPACK_IMPORTED_MODULE_9__services_coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_10__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_11__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_12__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_13__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_14__services_address_service__["a" /* AddressService */],
            __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__services_history_order_service__["a" /* HistoryOrderService */],
            __WEBPACK_IMPORTED_MODULE_17__services_promotion_service__["a" /* PromotionService */],
            /* import services */
            __WEBPACK_IMPORTED_MODULE_55__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_56__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_57__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_67__ionic_native_market__["a" /* Market */],
            __WEBPACK_IMPORTED_MODULE_62__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_63__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_64__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_65__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_66__providers_users_users__["b" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_68__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_69__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_60__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_58__ionic_native_network__["a" /* Network */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(loginService, http) {
        this.loginService = loginService;
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.restaurants;
    };
    UserService.prototype.recoverPassword = function (email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users/forgot-password/" + email)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users/password", user, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.updatePhone = function (phone) {
        var user = this.getUser();
        var request = {
            id: user.id,
            phone: phone
        };
        this.setPhone("", phone);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users/phone", request, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.favouriteRestaurant = function (favouriteRestaurant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users/favorite", favouriteRestaurant, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.sendEmailToSaciaFome = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/help", user, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getBalance = function () {
        var _this = this;
        var user = this.getUser();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/wallet/user/" + user.id, {
            headers: headers
        })
            .timeout(10000)
            .map(function (res) {
            _this.wallet = res.json();
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    UserService.prototype.getWallet = function () {
        return this.wallet;
    };
    UserService.prototype.sendSms = function (phone) {
        var user = this.loginService.getUser();
        var json = {
            id: user.id,
            phone: phone
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/sms", json, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.updateActivationPhone = function () {
        var user = this.loginService.getUser();
        var json = {
            id: user.id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* CONFIG */].url + "/users/activation", json, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getUser = function () {
        return this.loginService.getUser();
    };
    UserService.prototype.setPhone = function (countryCode, phone) {
        var user = this.loginService.getUser();
        user.country_code = countryCode;
        user.phone = phone;
        this.loginService.setUser(user);
        this.loginService.setUserDatabase(user);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithoutInternetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WithoutInternetPage = (function () {
    function WithoutInternetPage(nav, navParams, toastCtrl, statusBar, checkInternet) {
        this.nav = nav;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.checkInternet = checkInternet;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
    }
    WithoutInternetPage.prototype.tryConnection = function () {
        // Antes de tudo vericar se usuário possui Internet
        var connection = this.checkInternet.isInternet();
        if (!connection) {
            this.presentToast("Sem conexão!");
            return connection;
        }
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__["a" /* MainTabsPage */]);
    };
    WithoutInternetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithoutInternetPage');
    };
    WithoutInternetPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return WithoutInternetPage;
}());
WithoutInternetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-without-internet',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/without-internet/without-internet.html"*/'<!--\n  Generated template for the WithoutInternetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n\n<div class="msg" text-center>SEM INTERNET</div>\n\n\n<img src="assets/img/internet.png" class="size-img ">\n\n<br/><br/>\n\n<button (click)="tryConnection()" type="submit" class="button-update" ion-button block margin-top color="green">TENTAR NOVAMENTE!</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/without-internet/without-internet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2__services_check_internet__["a" /* CheckInternet */]])
], WithoutInternetPage);

//# sourceMappingURL=without-internet.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_history_order_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_check_internet__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_tabs_main_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_app_version_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_app_version_app_version__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_construction_construction__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_without_internet_without_internet__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_database_database__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(app, platform, statusBar, splashScreen, oneSignal, cartService, loginService, historyOrderService, appVersionService, checkInternet, ga, events, dbProvider) {
        var _this = this;
        this.app = app;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.cartService = cartService;
        this.loginService = loginService;
        this.historyOrderService = historyOrderService;
        this.appVersionService = appVersionService;
        this.checkInternet = checkInternet;
        this.ga = ga;
        this.events = events;
        this.dbProvider = dbProvider;
        this.myConnection = {};
        var env = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            env.getOneSignal();
            _this.appVersion();
        });
    }
    MyApp.prototype.openHomePage = function () {
        this.splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_main_tabs_main_tabs__["a" /* MainTabsPage */];
    };
    MyApp.prototype.withoutInternet = function () {
        this.splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_without_internet_without_internet__["a" /* WithoutInternetPage */];
    };
    MyApp.prototype.serverNotWorking = function () {
        this.splashScreen.hide();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_12__pages_construction_construction__["a" /* ConstructionPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.appVersion = function () {
        var _this = this;
        // Antes de tudo vericar se usuário possui Internet
        if (!this.checkInternet.isInternet()) {
            this.withoutInternet();
            return false;
        }
        this.appVersionService.populate().subscribe(function (result) {
            var currentVersion = _this.appVersionService.getNewVersion();
            var appVersion = _this.appVersionService.getAppVersion();
            //Inicializa o Analytics depois que carregar a versão do aplicativo
            _this.initGoogleAnalytics();
            if (currentVersion && appVersion && currentVersion !== appVersion) {
                _this.redirectAppVersionPage();
            }
            else {
                //Criando o banco de dados
                _this.dbProvider.createDatabase()
                    .then(function () {
                    // fechando a SplashScreen somente quando o banco for criado
                    _this.openHomePage();
                })
                    .catch(function () {
                    // ou se houver erro na criação do banco
                    _this.openHomePage();
                });
            }
        }, function (error) {
            _this.serverNotWorking();
            console.log(error);
        });
    };
    MyApp.prototype.redirectAppVersionPage = function () {
        this.splashScreen.hide();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_11__pages_app_version_app_version__["a" /* AppVersionPage */]);
    };
    MyApp.prototype.getOneSignal = function () {
        var _this = this;
        var env = this;
        env.oneSignal.startInit('5b071cbb-f263-4342-bf22-a9f5dd9f8d4a', '1030970276640');
        env.oneSignal.inFocusDisplaying(env.oneSignal.OSInFocusDisplayOption.InAppAlert);
        env.oneSignal.getIds().then(function (ids) {
            //alert(ids.userId);
            console.log(ids.userId);
            env.cartService.setPushUserId(ids.userId);
            //ids.pushToken
        });
        env.oneSignal.handleNotificationReceived().subscribe(function (result) {
            // do something when notification is received
            if (result && result.payload && result.payload.additionalData) {
                _this.events.publish('order:update', result.payload.additionalData, Date.now());
            }
        });
        env.oneSignal.handleNotificationOpened().subscribe(function (result) {
            // do something when a notification is opened
            if (env.loginService.getUser() && env.loginService.getUser().id) {
                env.historyOrderService.getByUser().subscribe(function (result) { });
            }
        });
        env.oneSignal.endInit();
    };
    MyApp.prototype.initGoogleAnalytics = function () {
        var _this = this;
        var trackingId = 'UA-112991576-1';
        if (/(android)/i.test(navigator.userAgent)) {
            trackingId = 'UA-112991576-1';
        }
        else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            trackingId = 'UA-112991576-1';
        }
        this.ga.debugMode();
        this.ga.setAppVersion(this.appVersionService.getNewVersion());
        this.ga.setAllowIDFACollection(true);
        this.ga.startTrackerWithId(trackingId).then(function () {
            console.log("GoogleAnalytics Initialized with ****** : " + trackingId);
            _this.ga.enableUncaughtExceptionReporting(true)
                .then(function (_success) {
                console.log("GoogleAnalytics enableUncaughtExceptionReporting Enabled.");
            }).catch(function (_error) {
                console.log("GoogleAnalytics Error enableUncaughtExceptionReporting : " + _error);
            });
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/app/app.html"*/,
        queries: {
            nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */]('content')
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_7__services_history_order_service__["a" /* HistoryOrderService */],
        __WEBPACK_IMPORTED_MODULE_10__services_app_version_service__["a" /* AppVersionService */],
        __WEBPACK_IMPORTED_MODULE_8__services_check_internet__["a" /* CheckInternet */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_14__providers_database_database__["a" /* DatabaseProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryOrderService = (function () {
    function HistoryOrderService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.history = [];
    }
    HistoryOrderService.prototype.getByUser = function () {
        var _this = this;
        var id = this.loginService.getUser().id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/orders/user/" + id, { headers: headers })
            .map(function (res) {
            _this.history = res.json().data;
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    HistoryOrderService.prototype.getRefreshById = function (orderId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/orders/" + orderId, { headers: headers })
            .map(function (res) {
            var order = res.json().data;
            for (var i = 0; i < _this.history.length; i++) {
                if (_this.history[i].id === order.id) {
                    _this.history[i] = order;
                }
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    HistoryOrderService.prototype.cancelOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/orders/cancel", order, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    HistoryOrderService.prototype.getById = function (id) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].id + "" === id + "") {
                return this.history[i];
            }
        }
    };
    HistoryOrderService.prototype.getAll = function () {
        return this.history;
    };
    HistoryOrderService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    return HistoryOrderService;
}());
HistoryOrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
], HistoryOrderService);

//# sourceMappingURL=history-order-service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotions_promotions__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var MainTabsPage = (function () {
    function MainTabsPage(nav) {
        this.nav = nav;
        this.loaded = false;
        this.tabIndex = 0;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.search = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.order = __WEBPACK_IMPORTED_MODULE_5__order_order__["a" /* OrderPage */];
        this.promotions = __WEBPACK_IMPORTED_MODULE_3__promotions_promotions__["a" /* PromotionsPage */];
        this.account = __WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */];
    }
    return MainTabsPage;
}());
MainTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main-tabs',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/main-tabs/main-tabs.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-tabs color="white" selectedIndex="0" scroll="false" >\n  <ion-tab tabIcon="md-home" tabTitle="Início" [root]="home"></ion-tab>\n  <ion-tab tabIcon="md-search" tabTitle="Buscar" [root]="search"></ion-tab>\n  <ion-tab tabIcon="flame" tabTitle="Descontos" [root]="promotions"></ion-tab>\n  <ion-tab tabIcon="md-list-box" tabTitle="Pedidos" [root]="order"></ion-tab>\n  <ion-tab tabIcon="md-person" tabTitle="Perfil" [root]="account"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/main-tabs/main-tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
], MainTabsPage);

//# sourceMappingURL=main-tabs.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_users_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RestaurantPage = (function () {
    function RestaurantPage(alertCtrl, nav, restaurantService, cartService, loginService, userService, navParams, ga, statusBar, imageViewerCtrl, loadingCtrl, usersProvider, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.restaurantService = restaurantService;
        this.cartService = cartService;
        this.loginService = loginService;
        this.userService = userService;
        this.navParams = navParams;
        this.ga = ga;
        this.statusBar = statusBar;
        this.imageViewerCtrl = imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usersProvider = usersProvider;
        this.toastCtrl = toastCtrl;
        this.detailSegment = "cardapio";
        this.hasFavourite = false;
        this.ratings = [];
        this.leavePage = false;
        this.isLogged = false;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffb42d');
        this.ga.trackView('Tela do Restaurante');
        this.ratings = [];
        this.header = {};
        this.hasItems = false;
        this.delivery = false;
        this.restaurantId = navParams.get('id');
        this.isLogged = this.loginService.isLogged();
        var promotion = navParams.get('promotion');
        var discount = this.cartService.getDiscount();
        if (promotion && discount && discount.name) {
            if (discount.discount_type == 0 || discount.discount_type == false) {
                this.presentToast("Cupom: R$ " + discount.value + " foi aplicado.");
            }
            else {
                this.presentToast("Cupom: " + discount.value + " % de desconto foi aplicado");
            }
        }
        if (!promotion) {
            var discount_1 = {
                status: false,
                name: '',
                value: 0.0
            };
            this.cartService.setDiscount(discount_1);
        }
        this.restaurant = {};
        this.restaurant.categories = [];
        this.findRestaurant();
        this.findRatings();
    }
    RestaurantPage.prototype.findRestaurant = function () {
        var _this = this;
        var restaurant = this.restaurantService.getExistById(this.restaurantId);
        //Caso já tenha carregado o restaurante pelo Id não é necessário carregar novamente
        if (restaurant && restaurant.Cuisines) {
            this.restaurant = restaurant;
            this.configRestaurant();
        }
        else {
            var env_1 = this;
            var loader_1 = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            // Show the popup
            loader_1.present();
            loader_1.present().then(function () {
                _this.restaurantService.getById(_this.restaurantId).subscribe(function (data) {
                    setTimeout(function () {
                        env_1.restaurant = _this.restaurantService.getAll();
                    }, 0);
                    _this.configRestaurant();
                    loader_1.dismiss();
                }, function (error) {
                    console.log(error);
                    loader_1.dismiss();
                    if (error.status === 401) {
                        _this.presentToast("Sua sessão expirou");
                        _this.goToLogout();
                    }
                });
            }, function (error) {
                loader_1.dismiss();
                _this.presentToast("Desculpe. Tente novamente.");
            });
        }
    };
    RestaurantPage.prototype.findRatings = function () {
        var _this = this;
        this.restaurantService.getRatings(this.restaurantId).subscribe(function (result) {
            _this.ratings = result.data;
        }, function (error) {
            if (error.status === 401) {
                _this.presentToast("Sua sessão expirou");
                _this.goToLogout();
            }
        });
    };
    RestaurantPage.prototype.configRestaurant = function () {
        var trackName = 'Restaurante: ' + this.restaurant.name;
        this.ga.trackView(trackName);
        //Seta os dados do restaurante no pedido do usuário
        this.cartService.setRestaurant(this.restaurant);
        if (this.isLogged) {
            var user = this.loginService.getUser();
            var ids = JSON.stringify(user.favorites_restaurants_ids);
            this.hasFavourite = ids.indexOf(this.restaurantId.toString()) > -1 ? true : false;
        }
        if (this.restaurant && this.restaurant.km_max) {
            var kmMax = parseFloat(this.restaurant.km_max);
            if (!isNaN(kmMax) && kmMax > parseFloat(this.restaurant.distance)) {
                this.delivery = true;
            }
            else {
                this.delivery = false;
            }
        }
    };
    // view item
    RestaurantPage.prototype.viewItem = function (restaurantId, isOpen, item) {
        this.leavePage = true;
        if (item.disponible) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], {
                restaurantId: restaurantId,
                isOpen: isOpen,
                item: JSON.stringify(item)
            });
        }
        else {
            this.presentToast("Desculpe. Produto indisponível no momento.");
        }
    };
    // go to cart page
    RestaurantPage.prototype.goToCart = function () {
        this.leavePage = true;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    RestaurantPage.prototype.showItems = function (cat) {
        if (!cat.showItems) {
            cat.showItems = true;
        }
        else {
            cat.showItems = !cat.showItems;
        }
    };
    RestaurantPage.prototype.findCategoryByid = function (cat) {
        for (var i = 0; i < this.restaurant.categories.length; i++) {
            if (this.restaurant.categories[i].id === cat.id) {
                return this.restaurant.categories[i];
            }
        }
    };
    RestaurantPage.prototype.ionViewWillEnter = function () {
        var cart = this.cartService.getCart();
        this.leavePage = false;
        if (cart.orders.restaurant && cart.orders.restaurant.id === this.restaurantId) {
            this.hasItems = cart.orders.items.length ? true : false;
        }
        else {
            this.hasItems = false;
        }
        if (this.restaurant && this.restaurant.km_max) {
            var kmMax = parseFloat(this.restaurant.km_max);
            if (!isNaN(kmMax) && kmMax > parseFloat(this.restaurant.distance)) {
                this.delivery = true;
            }
            else {
                this.delivery = false;
            }
        }
    };
    RestaurantPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (!this.leavePage && this.cartService.hasItems()) {
            var alert_1 = this.alertCtrl.create({
                title: 'Sair',
                message: 'Deseja realmente sair desta tela? Ao sair seu pedido será excluído do carrinho',
                buttons: [{
                        text: 'Não',
                        role: 'cancel',
                        handler: function () {
                        }
                    }, {
                        text: 'Sim',
                        handler: function (data) {
                            var navTransition = alert_1.dismiss();
                            // Finalizar alerta
                            navTransition.then(function () {
                                // Permite sair da tela
                                _this.leavePage = true;
                                // Chama novamente a função ionViewCanLeave
                                _this.nav.pop();
                            });
                            // Ainda não sai da tela
                            return false;
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            return true;
        }
        // Ao entrar não sai da tela
        return false;
    };
    RestaurantPage.prototype.favorite = function () {
        var _this = this;
        var user = this.loginService.getUser();
        var ids = user.favorites_restaurants_ids;
        var msg = '';
        if (!this.hasFavourite) {
            ids.push({
                restaurant: this.restaurantId
            });
            msg = "Adicionando aos favoritos";
        }
        else {
            msg = "Removendo dos favoritos";
            for (var i = 0; i < ids.length; i++) {
                if (ids[i].restaurant === this.restaurantId) {
                    ids.splice(i, 1);
                }
            }
        }
        var favouriteRestaurant = {
            id: user.id,
            favorites_restaurants_ids: JSON.stringify(ids)
        };
        var loader = this.loadingCtrl.create({
            content: msg
        });
        // Show the popup
        loader.present();
        loader.present().then(function () {
            _this.userService.favouriteRestaurant(favouriteRestaurant).subscribe(function (data) {
                loader.dismiss();
                if (data.status) {
                    _this.loginService.setFavoritesRestaurantsIds(ids);
                    if (_this.hasFavourite) {
                        _this.presentToast("Removido da sua lista de favoritos");
                    }
                    else {
                        _this.presentToast("Adicionado na sua lista de favoritos");
                    }
                    _this.hasFavourite = !_this.hasFavourite;
                }
            }, function (error) {
                _this.presentToast("Tente novamente");
                console.log(error);
                loader.dismiss();
                if (error.name === "TimeoutError") {
                    _this.presentToast('Tente novamente!');
                }
                if (error.status === 401) {
                    _this.presentToast("Sua sessão expirou");
                    _this.goToLogout();
                }
            });
        });
    };
    RestaurantPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RestaurantPage.prototype.ionViewDidEnter = function () {
        this.topOrBottom = this.contentHandle._tabsPlacement;
        this.contentBox = document.querySelector(".scroll-content")['style'];
        if (this.topOrBottom == "top") {
            this.tabBarHeight = this.contentBox.marginTop;
        }
        else if (this.topOrBottom == "bottom") {
            this.tabBarHeight = this.contentBox.marginBottom;
        }
    };
    RestaurantPage.prototype.getPayment = function (payment) {
        var name = payment.name;
        var card = payment.card ? payment.card : '';
        var online = card.length && payment.is_online === 0 ? '(máquina)' : '';
        return name + ' ' + card + ' ' + online;
    };
    RestaurantPage.prototype.getMedia = function (rate) {
        if (rate.rate_delivery) {
            var media = (rate.rate + rate.rate_food + rate.rate_delivery) / 3;
            return media.toFixed(2);
        }
        else {
            var media = (rate.rate + rate.rate_food) / 2;
            return media.toFixed(2);
        }
    };
    RestaurantPage.prototype.getFrete = function (restaurant) {
        if (typeof restaurant.frete === 'string') {
            return true;
        }
        return false;
    };
    RestaurantPage.prototype.getCircle = function (index, size) {
        return index + 1 < size ? '• ' : '';
    };
    // go to login page
    RestaurantPage.prototype.goToLogout = function () {
        this.leavePage = true;
        this.updateUser();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    // Remove o usuário do banco de dados local
    RestaurantPage.prototype.updateUser = function () {
        return this.usersProvider.update({ id: 1, json: '{}' });
    };
    RestaurantPage.prototype.isPromition = function (category) {
        if (category.name && category.name.toUpperCase() === 'PROMOÇÕES') {
            this.promotion = category;
            return true;
        }
        return false;
    };
    RestaurantPage.prototype.canShowItem = function (item) {
        if (!item.valid_days) {
            return true;
        }
        return item.valid_days.indexOf(this.restaurant.week) > -1 ? true : false;
    };
    RestaurantPage.prototype.isShowCuisines = function (category) {
        if (category.activated === false) {
            return false;
        }
        return true;
    };
    RestaurantPage.prototype.zoomClickImage = function (event, img) {
        var viewer = this.imageViewerCtrl.create(img);
        viewer.present();
        event.stopPropagation();
    };
    return RestaurantPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("contentRef"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], RestaurantPage.prototype, "contentHandle", void 0);
RestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/restaurant/restaurant.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="sacia">\n    <ion-title style="font-family: serif; color: black">\n      {{ restaurant.name }}\n    </ion-title>\n    <ion-buttons end *ngIf="!hasFavourite" >\n      <button ion-button class="button-favourite" color="redsacia2" (click)="favorite()" >\n        <ion-icon name="md-heart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end *ngIf="hasFavourite" >\n      <button ion-button class="button-favourite" color="redsacia2" (click)="favorite()" >\n        <ion-icon name="md-heart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n -->\n<ion-header>\n\n  <ion-navbar color="sacia">\n\n    <ion-title>\n      {{ restaurant.name }}\n    </ion-title>\n\n    <ion-buttons end *ngIf="isLogged && !hasFavourite" >\n      <button ion-button class="button-favourite" color="redsacia2" (click)="favorite()" >\n        <ion-icon name="md-heart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end *ngIf="isLogged && hasFavourite" >\n      <button ion-button class="button-favourite" color="redsacia2" (click)="favorite()" >\n        <ion-icon name="md-heart"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #contentRef  > <!-- (ionScroll)="scrollingFun($event)" -->\n\n  <div class="style-header">\n    <!--restaurant info-->\n    <div  class="white">\n      <ion-row>\n        <ion-col col-2 class="margin-img">\n          <img style="margin-top: 15px; margin-left: 10px;" class="redondo" *ngIf="restaurant.img" src="{{ restaurant.img }}" alt="">\n        </ion-col>\n        <ion-col col-10 style="padding-left: 22px;">\n            <div class="company-title margin-bottom" style="margin-top: 5px; margin-bottom: 2px;">\n            <strong style="font-size: 16px;">{{restaurant.name}}</strong>\n\n\n            <ion-icon name="star" *ngIf="restaurant.stars" color="star" class="style-star"> {{ restaurant.stars }} </ion-icon>\n\n\n            <span *ngIf="!restaurant.stars" ion-text color="star" class="style-star"> novo </span>\n\n            <br/>\n          </div>\n          <div color="gray" class="text-size-1">\n              <span ion-text color="gray" *ngFor="let cat of restaurant.Categories; let i = index">{{ cat.name }} {{getCircle(i, restaurant.Categories.length)}} \n              </span>\n              <span class="text-cash-back" ion-text color="gray" *ngIf="restaurant.percentage_discount">\n                CASHBACK HOJE\n              </span>\n          </div>\n          <div>\n            <ion-icon color="gray" name="navigate"></ion-icon>\n            <span ion-text color="gray"> {{restaurant.distance}} Km • </span>\n            <span *ngIf="restaurant.delivery_min && restaurant.delivery_max" ion-text color="gray"> {{ restaurant.delivery_min }} - {{ restaurant.delivery_max }}</span>\n\n            <span class="badge-cash-back" *ngIf="restaurant.percentage_discount">\n              {{restaurant.percentage_discount}} % \n            </span>\n\n          </div>\n\n          <span ion-text class="badge-not-delivery"  *ngIf="getFrete(restaurant)">Frete: Gratis</span>\n\n          <div class="margin-bottom" *ngIf="!delivery" >\n            <span ion-text color="danger"> Não estamos realizando entregas em sua região.  </span>\n          </div>\n\n          <span *ngIf="!restaurant.isOpen" style="margin-right: 5px;" ion-text class="badge-not-delivery"> FECHADO </span>\n\n          <span *ngIf="restaurant.delivery_pickup === 1" ion-text style="margin-right: 5px;" class="badge-not-delivery"> Não entregamos </span>\n\n          <span *ngIf="restaurant.delivery_pickup === 0" style="margin-right: 5px;" ion-text class="badge-only-delivery"> Somente entregas </span>\n\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-segment [(ngModel)]="detailSegment" style="padding: 10px;">\n      <ion-segment-button value="cardapio">\n        Cardapio\n      </ion-segment-button>\n      <ion-segment-button value="details">\n        Informações\n      </ion-segment-button>\n      <ion-segment-button value="rating">\n        Avaliações\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="detailSegment">\n\n    <ion-list *ngSwitchCase="\'cardapio\'">\n      <br/>\n      <div *ngIf="promotion" >\n        <ion-card class="cardapio-promotion" *ngIf="promotion.Items && promotion.Items.length">\n          <ion-card-header  text-center (click)="showItems(promotion)">\n            <span style="color: white;">{{ promotion.name | uppercase }}</span>\n            <ion-icon *ngIf="!promotion.showItems" color="white" name="arrow-dropright-circle" style="float: right;" ></ion-icon>\n            <ion-icon *ngIf="promotion.showItems" color="white" name="arrow-dropdown-circle" style="float: right;" ></ion-icon>\n          </ion-card-header>\n        </ion-card>\n        <div *ngIf="promotion.showItems">\n          <ion-list class="list-full-border">\n            <ion-item text-wrap *ngFor="let item of promotion.Items" (click)="viewItem(restaurant.id, restaurant.isOpen, item)">\n              <span>{{ item.name }}</span>\n              <p>{{ item.ingredients }}</p>\n              <p style="color: green">R$ {{ item.price }}</p>\n              <span *ngIf="!item.disponible" ion-text color="danger"> Indisponível </span>\n              <ion-thumbnail item-right *ngIf="item.thumb" >\n                <img src="{{ item.thumb}}" imageViewer >\n              </ion-thumbnail>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n       <!--list of categories-->\n       <div *ngIf="restaurant.Cuisines && restaurant.Cuisines.length">\n        <div *ngFor="let cat of restaurant.Cuisines">\n          <div *ngIf="isShowCuisines(cat)" >\n\n            <ion-card class="cardapio" *ngIf="cat.Items && cat.Items.length && !isPromition(cat)">\n              <ion-card-header  text-center (click)="showItems(cat)">\n                {{ cat.name | uppercase }}\n                <ion-icon *ngIf="!cat.showItems" color="blacksacia" name="arrow-dropright-circle" style="float: right;" ></ion-icon>\n                <ion-icon *ngIf="cat.showItems" color="blacksacia" name="arrow-dropdown-circle" style="float: right;" ></ion-icon>\n              </ion-card-header>\n            </ion-card>\n            <div *ngIf="!isPromition(cat) && cat.showItems">\n              <ion-list class="list-full-border">\n                <div *ngFor="let item of cat.Items" (click)="viewItem(restaurant.id, restaurant.isOpen, item)">\n                  <ion-item text-wrap *ngIf="canShowItem(item)" >\n                    <span>{{ item.name }}</span>\n                    <p>{{ item.ingredients }}</p>\n                    <p style="color: green">R$ {{ item.price }}</p>\n                    <span *ngIf="!item.disponible" ion-text color="danger"> Indisponível </span>\n                    <ion-thumbnail item-right *ngIf="item.thumb"  >\n                      <img src="{{ item.thumb}}" imageViewer >\n                    </ion-thumbnail>\n                  </ion-item>\n                </div>\n              </ion-list>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'rating\'">\n      <br/>\n      <div *ngFor="let rate of ratings">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img class="redondo" *ngIf="!rate.user.img" src="assets/icon/user_male.png" width="20" height="20">\n            <img class="redondo" class="redondo" *ngIf="rate.user.img" src="{{rate.user.img}}" width="20" height="20">\n          </ion-thumbnail>\n\n          <div>\n            <span ion-text color="gray">\n              {{rate.user.first_name}} {{rate.user.last_name}}<br/>\n              <span style="font-size: 12px;" ion-text color="gray">{{rate.createdAt | date: \'dd/MM/yyyy H:mm\' }}</span>\n            </span>\n          </div>\n          <div>\n            <span ion-text color="gray">\n              Comida: <ion-icon name="star" color="star"></ion-icon> {{ rate.rate_food }}\n            </span>\n          </div>\n          <div>\n            <span ion-text color="gray">\n              Custo/Beneficio: <ion-icon name="star" color="star"></ion-icon> {{ rate.rate }}\n            </span>\n          </div>\n          <div *ngIf="rate.rate_packing">\n            <span ion-text color="gray">\n              Embalagem: <ion-icon name="star" color="star"></ion-icon> {{ rate.rate_packing }}\n            </span>\n          </div>\n          <div *ngIf="rate.rate_delivery">\n            <span ion-text color="gray">\n              Tempo de Entrega: <ion-icon name="star" color="star"></ion-icon> {{ rate.rate_delivery }}\n            </span>\n          </div>\n          <div>\n            <span ion-text color="gray">\n              Media: <ion-icon name="star" color="star"></ion-icon> {{ getMedia(rate) }}\n            </span>\n          </div>\n\n          <ion-item text-wrap *ngIf="rate.description">\n            {{rate.description}}\n          </ion-item>\n        </ion-item>\n      </div>\n\n      <ion-card *ngIf="!ratings || !ratings.length">\n        <ion-card-header>\n          Ainda não possuimos nenhum avaliação.\n        </ion-card-header>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'details\'">\n      <br/>\n      <ion-card>\n        <ion-card-header>\n          Sobre nós\n        </ion-card-header>\n        <ion-card-content >\n          {{restaurant.about_us}}\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          Descrição\n        </ion-card-header>\n        <ion-card-content >\n          {{restaurant.description}}\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-icon name="time"></ion-icon>&nbsp;&nbsp;Horário de Funcionamento\n        </ion-card-header>\n        <ion-card-content>\n          <p>Segunda: {{restaurant.monday}}</p>\n          <p>Terça: {{restaurant.tuesday}}</p>\n          <p>Quarta: {{restaurant.wednesday}}</p>\n          <p>Quinta: {{restaurant.thursday}}</p>\n          <p>Sexta: {{restaurant.friday}}</p>\n          <p>Sabado: {{restaurant.saturday}}</p>\n          <p>Domingo: {{restaurant.sunday}}</p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-icon name="card"></ion-icon>&nbsp;&nbsp;Formas de Pagamento\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row *ngFor="let payment of restaurant.Payments">\n            <ion-col col-2 *ngIf="payment.img">\n              <img src="{{payment.img}}" style="width: 60% !important" />\n            </ion-col>\n            <ion-col col-10>\n              {{getPayment(payment)}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          Sacia Fome\n        </ion-card-header>\n        <ion-card-content>\n          <p>O tempo estimado de entrega e o valor da entrega para cada zona é responsabilidade do estabelecimento.</p><br/>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n  </div>\n\n  <ion-fab right bottom *ngIf="detailSegment === \'cardapio\' && hasItems && restaurant.isOpen">\n    <button ion-fab color="danger" (click)="goToCart()">\n      <ion-icon name="md-cart"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/restaurant/restaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */],
        __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__["a" /* ImageViewerController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_users_users__["b" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
], RestaurantPage);

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AboutPage = (function () {
    function AboutPage(nav) {
        this.nav = nav;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/about/about.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var WelcomePage = (function () {
    function WelcomePage(nav, app) {
        this.nav = nav;
        this.app = app;
    }
    // go to login page
    WelcomePage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // to register page
    WelcomePage.prototype.signUp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <div class="logo" padding>\n    <ion-icon name="ios-restaurant-outline" color="white"></ion-icon>\n    <span ion-text color="white">UAIFOODY</span>\n  </div> -->\n\n  <div class="align-bottom">\n    <div class="text-desc" padding>\n      <span ion-text color="light"></span>\n    </div>\n    <button ion-button full no-margin color="secondary" (click)="login()">LOGIN</button>\n    <button ion-button full no-margin color="primary" (click)="signUp()">REGISTER</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/victor/Food/Meu Projeto/mobile/ifood-mobile/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressService = (function () {
    function AddressService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.address = [];
    }
    AddressService.prototype.getAll = function () {
        return this.address;
    };
    AddressService.prototype.findById = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/address/" + id, { headers: headers })
            .map(function (res) {
            _this.address = res.json().data;
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    // Busca o endereço pelo CEP -> Ex: 38440-046 ou 38440046
    AddressService.prototype.findByCep = function (cep) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/correios/cep/" + cep, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    // Apartir do endereço (Rua + Numero + Bairro + Cidade + Estado) busca a latitude e longitude
    AddressService.prototype.findLatAndLngByAddress = function (object) {
        var state = object.cep ? object.state + " " + object.cep : "";
        console.log(object.street + " " + object.number + "+" + object.neighborhood + " " + object.city + " " + state);
        var address = encodeURI(object.street + " " + object.number + " " + object.neighborhood + " " + object.city + " " + state);
        console.log(address);
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyD1PPrTt9S6nYT-wPFs0q4mIpbY3XyAjqA")
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AddressService.prototype.save = function (address) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/address", address, { headers: headers })
            .map(function (res) {
            _this.address.push(res.json().data);
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AddressService.prototype.update = function (address) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/address", address, { headers: headers })
            .map(function (res) {
            var address = res.json().data;
            for (var i = 0; i < _this.address.length; i++) {
                if (_this.address[i].id === address.id) {
                    _this.address[i] = address;
                }
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AddressService.prototype.remove = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.getToken());
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* CONFIG */].url + "/address/" + id, { headers: headers })
            .map(function (res) {
            for (var i = 0; i < _this.address.length; i++) {
                if (_this.address[i].id === id) {
                    _this.address.splice(i, 1);
                }
            }
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AddressService.prototype.getToken = function () {
        return this.loginService.getToken();
    };
    return AddressService;
}());
AddressService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
], AddressService);

//# sourceMappingURL=address-service.js.map

/***/ })

},[413]);
//# sourceMappingURL=main.js.map