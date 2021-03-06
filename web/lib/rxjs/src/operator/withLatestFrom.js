"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var OuterSubscriber_1 = require('../OuterSubscriber');
var subscribeToResult_1 = require('../util/subscribeToResult');
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
ObservableInput < any > [];
Observable_1.Observable();
this;
Observable_1.Observable < T > , array;
ObservableInput < any > [], project;
(function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i - 0] = arguments[_i];
    }
    return R;
});
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
args: Array();
Observable_1.Observable < R > {
    let: project, any: ,
    if: function () { }, typeof: args[args.length - 1] === 'function' };
{
    project = args.pop();
}
var observables = args;
return this.lift(new WithLatestFromOperator(observables, project));
var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map