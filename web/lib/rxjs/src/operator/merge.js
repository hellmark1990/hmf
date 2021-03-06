"use strict";
var Observable_1 = require('../Observable');
var Scheduler_1 = require('../Scheduler');
var ArrayObservable_1 = require('../observable/ArrayObservable');
var mergeAll_1 = require('./mergeAll');
var isScheduler_1 = require('../util/isScheduler');
this;
Observable_1.Observable < T > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , scheduler ?  : Scheduler_1.Scheduler;
Observable_1.Observable();
this;
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
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
ObservableInput < T4 > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
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
ObservableInput < T5 > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
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
Observable_1.Observable < T > , v2;
ObservableInput < T2 > , v3;
ObservableInput < T3 > , v4;
ObservableInput < T4 > , v5;
ObservableInput < T5 > , v6;
ObservableInput < T6 > , concurrent ?  : number, scheduler ?  : Scheduler_1.Scheduler;
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
    return: this.lift.call(mergeStatic.apply(void 0, [this].concat(observables)))
};
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {...Observable} observables Input Observables to merge together.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1) {
        return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
}
exports.mergeStatic = mergeStatic;
//# sourceMappingURL=merge.js.map