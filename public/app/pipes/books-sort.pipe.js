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
    var GetFieldPipe, SortByFieldPipe;
    function sort(array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GetFieldPipe = (function () {
                function GetFieldPipe() {
                }
                GetFieldPipe.prototype.transform = function (array, field) {
                    array = sort(array, field);
                    var set = new Set();
                    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                        var item = array_1[_i];
                        if (field == 'name') {
                            set.add(item[field][0]);
                        }
                        else {
                            set.add(item[field]);
                        }
                    }
                    return Array.from(set);
                };
                GetFieldPipe = __decorate([
                    core_1.Pipe({
                        name: "getFields"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GetFieldPipe);
                return GetFieldPipe;
            }());
            exports_1("GetFieldPipe", GetFieldPipe);
            SortByFieldPipe = (function () {
                function SortByFieldPipe() {
                }
                SortByFieldPipe.prototype.transform = function (array, field, value) {
                    return array.filter(function (book) { return book[field].indexOf(value) == 0; });
                };
                SortByFieldPipe = __decorate([
                    core_1.Pipe({
                        name: "sortByField"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortByFieldPipe);
                return SortByFieldPipe;
            }());
            exports_1("SortByFieldPipe", SortByFieldPipe);
        }
    }
});
//# sourceMappingURL=books-sort.pipe.js.map