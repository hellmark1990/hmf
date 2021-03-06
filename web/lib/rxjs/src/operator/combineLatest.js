"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var isArray_1 = require('../util/isArray');
var OuterSubscriber_1 = require('../OuterSubscriber');
var subscribeToResult_1 = require('../util/subscribeToResult');
var none = {};
this;
Observable_1.Observable < T > , project;
(function (v1) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , project;
(function (v1, v2) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , project;
(function (v1, v2, v3) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , project;
(function (v1, v2, v3, v4) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , project;
(function (v1, v2, v3, v4, v5) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , v6;
ObservableInput < T6 > , project;
(function (v1, v2, v3, v4, v5, v6) { return R; });
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput();
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput();
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput();
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput();
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , v6;
ObservableInput();
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
observables: Array();
Observable_1.Observable();
this;
Observable_1.Observable < T > , array;
ObservableInput < T > [];
Observable_1.Observable();
this;
Observable_1.Observable < T > , array;
ObservableInput < TOther > [], project;
(function (v1) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return R;
});
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
observables: Array();
Observable_1.Observable < R > {
    let: project }.apply(void 0, values.concat([Array(), R = null]));
if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
}
// if the first and only other argument besides the resultSelector is an array
// assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0];
}
observables.unshift(this);
return this.lift.call(new ArrayObservable_1.ArrayObservable(observables), new CombineLatestOperator(project));
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map