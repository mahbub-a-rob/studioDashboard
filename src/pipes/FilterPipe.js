System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterPipe = (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (input) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var filterWith = args[0].toLowerCase();
                    var filterBy = args[1](input).toLowerCase();
                    if (filterBy.indexOf(filterWith) > -1)
                        return false;
                    return true;
                };
                FilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'FilterPipe'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterPipe);
                return FilterPipe;
            }());
            exports_1("FilterPipe", FilterPipe);
        }
    }
});
