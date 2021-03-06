"use strict";
var Observable_1 = require('../Observable');
var Scheduler_1 = require('../Scheduler');
var isScheduler_1 = require('../util/isScheduler');
var ArrayObservable_1 = require('../observable/ArrayObservable');
var mergeAll_1 = require('./mergeAll');
this;
Observable_1.Observable < T > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , v6;
ObservableInput < T6 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
observables: Array();
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
observables: Array();
Observable_1.Observable();
this;
Observable_1.Observable < T > , ;
observables: Array();
Observable_1.Observable < R > {
    return: this.lift.call(concatStatic.apply(void 0, [this].concat(observables)))
};
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins multiple Observables together by subscribing to them one at a time and
 * merging their results into the output Observable. Will wait for each
 * Observable to complete before moving on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = Rx.Observable.concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = Rx.Observable.concat(timer1, timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {Observable} input1 An input Observable to concatenate with others.
 * @param {Observable} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
        scheduler = args.pop();
    }
    if (scheduler === null && observables.length === 1) {
        return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
}
exports.concatStatic = concatStatic;
//# sourceMappingURL=concat.js.map