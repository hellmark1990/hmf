/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!
 * Bootstrap-select v1.12.2 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b?b.replace(this.re,this.ch):""}),b}function c(b){var c=arguments,d=b;[].shift.apply(c);var e,f=this.each(function(){var b=a(this);if(b.is("select")){var f=b.data("selectpicker"),g="object"==typeof d&&d;if(f){if(g)for(var h in g)g.hasOwnProperty(h)&&(f.options[h]=g[h])}else{var i=a.extend({},k.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),g);i.template=a.extend({},k.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,g.template),b.data("selectpicker",f=new k(this,i))}"string"==typeof d&&(e=f[d]instanceof Function?f[d].apply(f,c):f.options[d])}});return"undefined"!=typeof e?e:f}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return!(g+j>e)&&c.call(d,f,i)!=-1};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c});var d={useDefault:!1,_set:a.valHooks.select.set};a.valHooks.select.set=function(b,c){return c&&!d.useDefault&&a(b).data("selected",!0),d._set.apply(this,arguments)};var e=null;a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?("function"==typeof Event?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):c.fireEvent?(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)):this.trigger(a)},a.expr.pseudos.icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr.pseudos.aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())};var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},g={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},h=function(a){var b=function(b){return a[b]},c="(?:"+Object.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}},i=h(f),j=h(g),k=function(b,c){d.useDefault||(a.valHooks.select.set=d._set,d.useDefault=!0),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title"));var e=this.options.windowPadding;"number"==typeof e&&(this.options.windowPadding=[e,e,e,e]),this.val=k.prototype.val,this.render=k.prototype.render,this.refresh=k.prototype.refresh,this.setStyle=k.prototype.setStyle,this.selectAll=k.prototype.selectAll,this.deselectAll=k.prototype.deselectAll,this.destroy=k.prototype.destroy,this.remove=k.prototype.remove,this.show=k.prototype.show,this.hide=k.prototype.hide,this.init()};k.VERSION="1.12.2",k.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},k.prototype={constructor:k,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight===!0&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!1),b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!0),b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid").focus(),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",c=this.$element.parent().hasClass("input-group")?" input-group-btn":"",d=this.autofocus?" autofocus":"",e=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",f=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+i(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",g=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+c+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+d+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+e+f+g+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+h+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){var a=this.createLi();this.$menuInner[0].innerHTML=a},createLi:function(){var c=this,d=[],e=0,f=document.createElement("option"),g=-1,h=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},j=function(d,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+(f?' style="'+f+'"':"")+(c.options.liveSearchNormalize?' data-normalized-text="'+b(i(a(d).html()))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+' role="option">'+d+'<span class="'+c.options.iconBase+" "+c.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(g--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];f.className="bs-title-option",f.innerHTML=this.options.title,f.value="",k.insertBefore(f,k.firstChild);var l=a(k.options[k.selectedIndex]);void 0===l.attr("selected")&&void 0===this.$element.data("selected")&&(f.selected=!0)}return this.$element.find("option").each(function(b){var f=a(this);if(g++,!f.hasClass("bs-title-option")){var k=this.className||"",l=this.style.cssText,m=f.data("content")?f.data("content"):f.html(),n=f.data("tokens")?f.data("tokens"):null,o="undefined"!=typeof f.data("subtext")?'<small class="text-muted">'+f.data("subtext")+"</small>":"",p="undefined"!=typeof f.data("icon")?'<span class="'+c.options.iconBase+" "+f.data("icon")+'"></span> ':"",q=f.parent(),r="OPTGROUP"===q[0].tagName,s=r&&q[0].disabled,t=this.disabled||s;if(""!==p&&t&&(p="<span>"+p+"</span>"),c.options.hideDisabled&&(t&&!r||s))return void g--;if(f.data("content")||(m=p+'<span class="text">'+m+o+"</span>"),r&&f.data("divider")!==!0){if(c.options.hideDisabled&&t){if(void 0===q.data("allOptionsDisabled")){var u=q.children();q.data("allOptionsDisabled",u.filter(":disabled").length===u.length)}if(q.data("allOptionsDisabled"))return void g--}var v=" "+q[0].className||"";if(0===f.index()){e+=1;var w=q[0].label,x="undefined"!=typeof q.data("subtext")?'<small class="text-muted">'+q.data("subtext")+"</small>":"",y=q.data("icon")?'<span class="'+c.options.iconBase+" "+q.data("icon")+'"></span> ':"";w=y+'<span class="text">'+i(w)+x+"</span>",0!==b&&d.length>0&&(g++,d.push(h("",null,"divider",e+"div"))),g++,d.push(h(w,null,"dropdown-header"+v,e))}if(c.options.hideDisabled&&t)return void g--;d.push(h(j(m,"opt "+k+v,l,n),b,"",e))}else if(f.data("divider")===!0)d.push(h("",b,"divider"));else if(f.data("hidden")===!0)d.push(h(j(m,k,l,n),b,"hidden is-hidden"));else{var z=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!z&&c.options.hideDisabled)for(var A=a(this).prevAll(),B=0;B<A.length;B++)if("OPTGROUP"===A[B].tagName){for(var C=0,D=0;D<B;D++){var E=A[D];(E.disabled||a(E).data("hidden")===!0)&&C++}C===B&&(z=!0);break}z&&(g++,d.push(h("",null,"divider",e+"div"))),d.push(h(j(m,k,l,n),b))}c.liObj[b]=g}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),d.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this;b!==!1&&this.$element.find("option").each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.togglePlaceholder(),this.tabIndex();var e=this.$element.find("option").map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content").toString():e+c.html()+b}}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){c=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+c).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",j(a.trim(f.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(f),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("input");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle&&getComputedStyle(d),v=u?null:a(d),w={vert:parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),horiz:parseInt(u?u.paddingLeft:v.css("paddingLeft"))+parseInt(u?u.paddingRight:v.css("paddingRight"))+parseInt(u?u.borderLeftWidth:v.css("borderLeftWidth"))+parseInt(u?u.borderRightWidth:v.css("borderRightWidth"))},x={vert:w.vert+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2,horiz:w.horiz+parseInt(u?u.marginLeft:v.css("marginLeft"))+parseInt(u?u.marginRight:v.css("marginRight"))+2};document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f,g,h,i,j=this,k=this.$menu,l=this.$menuInner,m=a(window),n=this.$newElement[0].offsetHeight,o=this.$newElement[0].offsetWidth,p=this.sizeInfo.liHeight,q=this.sizeInfo.headerHeight,r=this.sizeInfo.searchHeight,s=this.sizeInfo.actionsHeight,t=this.sizeInfo.doneButtonHeight,u=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,w=this.sizeInfo.menuExtras,x=this.options.hideDisabled?".disabled":"",y=function(){var b,c=j.$newElement.offset(),d=a(j.options.container);j.options.container&&!d.is("body")?(b=d.offset(),b.top+=parseInt(d.css("borderTopWidth")),b.left+=parseInt(d.css("borderLeftWidth"))):b={top:0,left:0};var e=j.options.windowPadding;f=c.top-b.top-m.scrollTop(),g=m.height()-f-n-b.top-e[2],h=c.left-b.left-m.scrollLeft(),i=m.width()-h-o-b.left-e[1],f-=e[0],h-=e[3]};if(y(),"auto"===this.options.size){var z=function(){var m,n=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},u=j.$menuInner[0].getElementsByTagName("li"),x=Array.prototype.filter?Array.prototype.filter.call(u,n("hidden",!1)):j.$lis.not(".hidden"),z=Array.prototype.filter?Array.prototype.filter.call(x,n("dropdown-header",!0)):x.filter(".dropdown-header");y(),b=g-w.vert,c=i-w.horiz,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height"),k.data("width")||k.data("width",k.width()),e=k.data("width")):(d=k.height(),e=k.width()),j.options.dropupAuto&&j.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),j.$newElement.hasClass("dropup")&&(b=f-w.vert),"auto"===j.options.dropdownAlignRight&&k.toggleClass("dropdown-menu-right",h>i&&c-w.horiz<e-o),m=x.length+z.length>3?3*p+w.vert-2:0,k.css({"max-height":b+"px",overflow:"hidden","min-height":m+q+r+s+t+"px"}),l.css({"max-height":b-q-r-s-t-v.vert+"px","overflow-y":"auto","min-height":Math.max(m-v.vert,0)+"px"})};z(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",z),m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",z)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(x).length>this.options.size){var A=this.$lis.not(".divider").not(x).children().slice(0,this.options.size).last().parent().index(),B=this.$lis.slice(0,A+1).filter(".divider").length;b=p*this.options.size+B*u+v.vert,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height")):d=k.height(),j.options.dropupAuto&&this.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),k.css({"max-height":b+q+r+s+t+"px",overflow:"hidden","min-height":""}),l.css({"max-height":b-v.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d,e=this,f=a(this.options.container),g=function(a){e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),f.is("body")?c={top:0,left:0}:(c=f.offset(),c.top+=parseInt(f.css("borderTopWidth"))-f.scrollTop(),c.left+=parseInt(f.css("borderLeftWidth"))-f.scrollLeft()),d=a.hasClass("dropup")?0:a[0].offsetHeight,e.$bsContainer.css({top:b.top-c.top+d,left:b.left-c.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);e.isDisabled()||(g(e.$newElement),e.$bsContainer.appendTo(e.options.container).toggleClass("open",!b.hasClass("open")).append(e.$menu))}),a(window).on("resize scroll",function(){g(e.$newElement)}),this.$element.on("hide.bs.select",function(){e.$menu.data("height",e.$menu.height()),e.$bsContainer.detach()})},setSelected:function(a,b,c){c||(this.togglePlaceholder(),c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b).find("a").attr("aria-selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),this.$button.attr("tabindex")!=-1||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},togglePlaceholder:function(){var a=this.$element.val();this.$button.toggleClass("bs-placeholder",null===a||""===a||a.constructor===Array&&0===a.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&this.$element.attr("tabindex")!==-98&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),f=d.parent().data("originalIndex"),g=b.$element.val(),h=b.$element.prop("selectedIndex"),i=!0;if(b.multiple&&1!==b.options.maxOptions&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var j=b.$element.find("option"),k=j.eq(f),l=k.prop("selected"),m=k.parent("optgroup"),n=b.options.maxOptions,o=m.data("maxOptions")||!1;if(b.multiple){if(k.prop("selected",!l),b.setSelected(f,!l),d.blur(),n!==!1||o!==!1){var p=n<j.filter(":selected").length,q=o<m.find("option:selected").length;if(n&&p||o&&q)if(n&&1==n)j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(f,!0);else if(o&&1==o){m.find("option:selected").prop("selected",!1),k.prop("selected",!0);var r=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+r+'"]').removeClass("selected"),b.setSelected(f,!0)}else{var s="string"==typeof b.options.maxOptionsText?[b.options.maxOptionsText,b.options.maxOptionsText]:b.options.maxOptionsText,t="function"==typeof s?s(n,o):s,u=t[0].replace("{n}",n),v=t[1].replace("{n}",o),w=a('<div class="notify"></div>');t[2]&&(u=u.replace("{var}",t[2][n>1?0:1]),v=v.replace("{var}",t[2][o>1?0:1])),k.prop("selected",!1),b.$menu.append(w),n&&p&&(w.append(a("<div>"+u+"</div>")),i=!1,b.$element.trigger("maxReached.bs.select")),o&&q&&(w.append(a("<div>"+v+"</div>")),i=!1,b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(f,!1)},10),w.delay(750).fadeOut(300,function(){a(this).remove()})}}}else j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),b.setSelected(f,!0);!b.multiple||b.multiple&&1===b.options.maxOptions?b.$button.focus():b.options.liveSearch&&b.$searchbox.focus(),i&&(g!=b.$element.val()&&b.multiple||h!=b.$element.prop("selectedIndex")&&!b.multiple)&&(e=[f,k.prop("selected"),l],b.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1),b.$element.trigger("changed.bs.select",e),e=null})},liveSearchListener:function(){var c=this,d=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){c.$menuInner.find(".active").removeClass("active"),c.$searchbox.val()&&(c.$searchbox.val(""),c.$lis.not(".is-hidden").removeClass("hidden"),d.parent().length&&d.remove()),c.multiple||c.$menuInner.find(".selected").addClass("active"),setTimeout(function(){c.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(c.$lis.not(".is-hidden").removeClass("hidden"),c.$lis.filter(".active").removeClass("active"),d.remove(),c.$searchbox.val()){var e,f=c.$lis.not(".is-hidden, .divider, .dropdown-header");if(e=c.options.liveSearchNormalize?f.find("a").not(":a"+c._searchStyle()+'("'+b(c.$searchbox.val())+'")'):f.find("a").not(":"+c._searchStyle()+'("'+c.$searchbox.val()+'")'),e.length===f.length)d.html(c.options.noneResultsText.replace("{0}",'"'+i(c.$searchbox.val())+'"')),c.$menuInner.append(d),c.$lis.addClass("hidden");else{e.parent().addClass("hidden");var g,h=c.$lis.not(".hidden");h.each(function(b){var c=a(this);c.hasClass("divider")?void 0===g?c.addClass("hidden"):(g&&g.addClass("hidden"),g=c):c.hasClass("dropdown-header")&&h.eq(b+1).data("optgroup")!==c.data("optgroup")?c.addClass("hidden"):g=null}),g&&g.addClass("hidden"),f.not(".hidden").first().addClass("active")}}})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){if(this.multiple){"undefined"==typeof b&&(b=!0),this.findLis();var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),e=d.length,f=[];if(b){if(d.filter(".selected").length===d.length)return}else if(0===d.filter(".selected").length)return;d.toggleClass("selected",b);for(var g=0;g<e;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a('[role="listbox"] li',n),l=o.$newElement.hasClass("open"),!l&&(c.keyCode>=48&&c.keyCode<=57||c.keyCode>=96&&c.keyCode<=105||c.keyCode>=65&&c.keyCode<=90))return o.options.container?o.$button.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),void o.$searchbox.focus();if(o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(c.preventDefault(),c.stopPropagation(),o.$menuInner.click(),o.$button.focus()),d=a('[role="listbox"] li'+p,n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$menuInner.find("li"),d=o.options.liveSearchNormalize?d.filter(":a"+o._searchStyle()+"("+b(q[c.keyCode])+")"):d.filter(":"+o._searchStyle()+"("+q[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.find("a").filter(":focus").parent()),g=d.filter(p).first().index(),h=d.filter(p).last().index(),f=d.eq(e).nextAll(p).eq(0).index(),i=d.eq(e).prevAll(p).eq(0).index(),j=d.eq(f).prevAll(p).eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.first().data("index"),h=d.last().data("index"),f=d.eq(e).nextAll().eq(0).data("index"),i=d.eq(e).prevAll().eq(0).data("index"),j=d.eq(f).prevAll().eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&e--,e!=j&&e>i&&(e=i),e<g&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&e++,e==-1&&(e=0),e!=j&&e<f&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active").eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).children("a").focus();else if(!m.is("input")){var r,s,t=[];d.each(function(){a(this).hasClass("disabled")||a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==q[c.keyCode]&&t.push(a(this).index())}),r=a(document).data("keycount"),r++,a(document).data("keycount",r),s=a.trim(a(":focus").text().toLowerCase()).substring(0,1),s!=q[c.keyCode]?(r=1,a(document).data("keycount",r)):r>=t.length&&(a(document).data("keycount",0),r>t.length&&(r=1)),d.eq(t[r-1]).children("a").focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menuInner.find(".active a").click(),
m.focus());else{var u=a(":focus");u.click(),u.focus(),c.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var l=a.fn.selectpicker;a.fn.selectpicker=c,a.fn.selectpicker.Constructor=k,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=l,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',k.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);c.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return od.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){od=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function g(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function h(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function j(a,b){for(var c in b)i(b,c)&&(a[c]=b[c]);return i(b,"toString")&&(a.toString=b.toString),i(b,"valueOf")&&(a.valueOf=b.valueOf),a}function k(a,b,c,d){return rb(a,b,c,d,!0).utc()}function l(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function m(a){return null==a._pf&&(a._pf=l()),a._pf}function n(a){if(null==a._isValid){var b=m(a),c=qd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function o(a){var b=k(NaN);return null!=a?j(m(b),a):m(b).userInvalidated=!0,b}function p(a){return void 0===a}function q(a,b){var c,d,e;if(p(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),p(b._i)||(a._i=b._i),p(b._f)||(a._f=b._f),p(b._l)||(a._l=b._l),p(b._strict)||(a._strict=b._strict),p(b._tzm)||(a._tzm=b._tzm),p(b._isUTC)||(a._isUTC=b._isUTC),p(b._offset)||(a._offset=b._offset),p(b._pf)||(a._pf=m(b)),p(b._locale)||(a._locale=b._locale),rd.length>0)for(c in rd)d=rd[c],e=b[d],p(e)||(a[d]=e);return a}
// Moment prototype object
function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
sd===!1&&(sd=!0,a.updateOffset(this),sd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}
// compare two arrays, return the number of differences
function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return j(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),td[b]||(w(c),td[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=j({},a);for(c in b)i(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},j(e[c],a[c]),j(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)i(a,c)&&!i(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=j({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Dd[c]=Dd[c+"s"]=Dd[b]=a}function K(a){return"string"==typeof a?Dd[a]||Dd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)i(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Ed[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Ed[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Id[a]=e),b&&(Id[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Id[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Fd);for(b=0,c=d.length;b<c;b++)Id[d[b]]?d[b]=Id[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Hd[b]=Hd[b]||W(b),Hd[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gd.lastIndex=0;d>=0&&Gd.test(a);)a=a.replace(Gd,c),Gd.lastIndex=0,d-=1;return a}function Z(a,b,c){$d[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return i($d,a)?$d[a](b._strict,b._locale):new RegExp(_(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),f(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)_d[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&i(_d,a)&&_d[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||ke).test(b)?"format":"standalone"][a.month()]:this._months}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[ke.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=k([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:null):(e=je.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:(e=je.call(this._longMonthsParse,g),e!==-1?e:null)):(e=je.call(this._longMonthsParse,g),e!==-1?e:(e=je.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ja(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),!f(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ne),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=oe),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=k([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ua(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}
// HELPERS
// LOCALES
function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}
// MOMENTS
function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=k([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=ue),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ve),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=we),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=k([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ua(a,b){return b._meridiemParse}
// LOCALES
function Va(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Za(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Be[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=xe._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
$a(b)}catch(a){}return Be[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function $a(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=p(b)?bb(a):_a(a,b),c&&(xe=c)),xe._abbr}function _a(a,b){if(null!==b){var c=Ae;if(b.abbr=a,null!=Be[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Be[a]._config;else if(null!=b.parentLocale){if(null==Be[b.parentLocale])return Ce[b.parentLocale]||(Ce[b.parentLocale]=[]),Ce[b.parentLocale].push({name:a,config:b}),null;c=Be[b.parentLocale]._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Be[a]=new C(B(c,b)),Ce[a]&&Ce[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Be[a]}
// useful for testing
return delete Be[a],null}function ab(a,b){if(null!=b){var c,d=Ae;
// MERGE
null!=Be[a]&&(d=Be[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Be[a],Be[a]=c,
// backwards compat for now: also set the locale
$a(a)}else
// pass null for config to unupdate, useful for tests
null!=Be[a]&&(null!=Be[a].parentLocale?Be[a]=Be[a].parentLocale:null!=Be[a]&&delete Be[a]);return Be[a]}
// returns locale data
function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return xe;if(!c(a)){if(
//short-circuit everything else
b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return wd(Be)}function db(a){var b,c=a._a;return c&&m(a).overflow===-2&&(b=c[be]<0||c[be]>11?be:c[ce]<1||c[ce]>ea(c[ae],c[be])?ce:c[de]<0||c[de]>24||24===c[de]&&(0!==c[ee]||0!==c[fe]||0!==c[ge])?de:c[ee]<0||c[ee]>59?ee:c[fe]<0||c[fe]>59?fe:c[ge]<0||c[ge]>999?ge:-1,m(a)._overflowDayOfYear&&(b<ae||b>ce)&&(b=ce),m(a)._overflowWeeks&&b===-1&&(b=he),m(a)._overflowWeekday&&b===-1&&(b=ie),m(a).overflow=b),a}
// date from iso format
function eb(a){var b,c,d,e,f,g,h=a._i,i=De.exec(h)||Ee.exec(h);if(i){for(m(a).iso=!0,b=0,c=Ge.length;b<c;b++)if(Ge[b][1].exec(i[1])){e=Ge[b][0],d=Ge[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=He.length;b<c;b++)if(He[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+He[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Fe.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),kb(a)}else a._isValid=!1}
// date from iso format or fallback
function fb(b){var c=Ie.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function gb(a,b,c){return null!=a?a:null!=b?b:c}function hb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ib(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=hb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[ce]&&null==a._a[be]&&jb(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=gb(a._a[ae],d[ae]),a._dayOfYear>pa(e)&&(m(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[be]=c.getUTCMonth(),a._a[ce]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[de]&&0===a._a[ee]&&0===a._a[fe]&&0===a._a[ge]&&(a._nextDay=!0,a._a[de]=0),a._d=(a._useUTC?ta:sa).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[de]=24)}}function jb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=gb(b.GG,a._a[ae],wa(sb(),1,4).year),d=gb(b.W,1),e=gb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(sb(),f,g);c=gb(b.gg,a._a[ae],j.year),
// Default to current week.
d=gb(b.w,j.week),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f}d<1||d>xa(c,f,g)?m(a)._overflowWeeks=!0:null!=i?m(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ae]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function kb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void eb(b);b._a=[],m(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Fd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&m(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Id[f]?(d?m(b).empty=!1:m(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&m(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
m(b).charsLeftOver=i-j,h.length>0&&m(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[de]<=12&&m(b).bigHour===!0&&b._a[de]>0&&(m(b).bigHour=void 0),m(b).parsedDateParts=b._a.slice(0),m(b).meridiem=b._meridiem,
// handle meridiem
b._a[de]=lb(b._locale,b._a[de],b._meridiem),ib(b),db(b)}function lb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function mb(a){var b,c,d,e,f;if(0===a._f.length)return m(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],kb(b),n(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=m(b).charsLeftOver,
//or tokens
f+=10*m(b).unusedTokens.length,m(b).score=f,(null==d||f<d)&&(d=f,c=b));j(a,c||b)}function nb(a){if(!a._d){var b=L(a._i);a._a=h([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ib(a)}}function ob(a){var b=new r(db(pb(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function pb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?o({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(g(b)?a._d=b:c(d)?mb(a):d?kb(a):qb(a),n(a)||(a._d=null),a))}function qb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):g(d)?b._d=new Date(d.valueOf()):"string"==typeof d?fb(b):c(d)?(b._a=h(d.slice(0),function(a){return parseInt(a,10)}),ib(b)):"object"==typeof d?nb(b):f(d)?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function rb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,ob(i)}function sb(a,b,c,d){return rb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function tb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return sb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function ub(){var a=[].slice.call(arguments,0);return tb("isBefore",a)}function vb(){var a=[].slice.call(arguments,0);return tb("isAfter",a)}function wb(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function xb(a){return a instanceof wb}function yb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function zb(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Ab(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Me)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Bb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(s(b)||g(b)?b.valueOf():sb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):sb(b).local()}function Cb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Db(b,c){var d,e=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Ab(Xd,b),null===b)return this}else Math.abs(b)<16&&(b=60*b);return!this._isUTC&&c&&(d=Cb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Tb(this,Ob(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?e:Cb(this)}function Eb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Fb(a){return this.utcOffset(0,a)}function Gb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Cb(this),"m")),this}function Hb(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=Ab(Wd,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Ib(a){return!!this.isValid()&&(a=a?sb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Jb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Kb(){if(!p(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=pb(a),a._a){var b=a._isUTC?k(a._a):sb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Lb(){return!!this.isValid()&&!this._isUTC}function Mb(){return!!this.isValid()&&this._isUTC}function Nb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ob(a,b){var c,d,e,g=a,
// matching against regexp is expensive, do it on demand
h=null;// checks for null or undefined
return xb(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:f(a)?(g={},b?g[b]=a:g.milliseconds=a):(h=Ne.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:u(h[ce])*c,h:u(h[de])*c,m:u(h[ee])*c,s:u(h[fe])*c,ms:u(yb(1e3*h[ge]))*c}):(h=Oe.exec(a))?(c="-"===h[1]?-1:1,g={y:Pb(h[2],c),M:Pb(h[3],c),w:Pb(h[4],c),d:Pb(h[5],c),h:Pb(h[6],c),m:Pb(h[7],c),s:Pb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Rb(sb(g.from),sb(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new wb(g),xb(a)&&i(a,"_locale")&&(d._locale=a._locale),d}function Pb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Qb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Rb(a,b){var c;return a.isValid()&&b.isValid()?(b=Bb(b,a),a.isBefore(b)?c=Qb(a,b):(c=Qb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Sb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ob(c,d),Tb(this,e,a),this}}function Tb(b,c,d,e){var f=c._milliseconds,g=yb(c._days),h=yb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Ub(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Vb(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||sb(),e=Bb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,sb(d)))}function Wb(){return new r(this)}function Xb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Yb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Zb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function $b(a,b){var c,d=s(a)?a:sb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function _b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ac(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function bc(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Bb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=cc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function cc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function dc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ec(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function fc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function gc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function hc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.from(sb(),a)}function jc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function kc(a){return this.to(sb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function lc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function mc(){return this._locale}function nc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=K(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function oc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function pc(){return this._d.valueOf()-6e4*(this._offset||0)}function qc(){return Math.floor(this.valueOf()/1e3)}function rc(){return new Date(this.valueOf())}function sc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function tc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function uc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function vc(){return n(this)}function wc(){return j({},m(this))}function xc(){return m(this).overflow}function yc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function zc(a,b){U(0,[a,a.length],0,b)}
// MOMENTS
function Ac(a){return Ec.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Bc(a){return Ec.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Cc(){return xa(this.year(),1,4)}function Dc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ec(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Fc.call(this,a,b,c,d,e))}function Fc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Gc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Hc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Ic(a,b){b[ge]=u(1e3*("0."+a))}
// MOMENTS
function Jc(){return this._isUTC?"UTC":""}function Kc(){return this._isUTC?"Coordinated Universal Time":""}function Lc(a){return sb(1e3*a)}function Mc(){return sb.apply(null,arguments).parseZone()}function Nc(a){return a}function Oc(a,b,c,d){var e=bb(),f=k().set(d,b);return e[c](f,a)}function Pc(a,b,c){if(f(a)&&(b=a,a=void 0),a=a||"",null!=b)return Oc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Oc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Qc(a,b,c,d){"boolean"==typeof a?(f(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,f(b)&&(c=b,b=void 0),b=b||"");var e=bb(),g=a?e._week.dow:0;if(null!=c)return Oc(b,(c+g)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Oc(b,(h+g)%7,d,"day");return i}function Rc(a,b){return Pc(a,b,"months")}function Sc(a,b){return Pc(a,b,"monthsShort")}function Tc(a,b,c){return Qc(a,b,c,"weekdays")}function Uc(a,b,c){return Qc(a,b,c,"weekdaysShort")}function Vc(a,b,c){return Qc(a,b,c,"weekdaysMin")}function Wc(){var a=this._data;return this._milliseconds=Ze(this._milliseconds),this._days=Ze(this._days),this._months=Ze(this._months),a.milliseconds=Ze(a.milliseconds),a.seconds=Ze(a.seconds),a.minutes=Ze(a.minutes),a.hours=Ze(a.hours),a.months=Ze(a.months),a.years=Ze(a.years),this}function Xc(a,b,c,d){var e=Ob(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Yc(a,b){return Xc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Zc(a,b){return Xc(this,a,b,-1)}function $c(a){return a<0?Math.floor(a):Math.ceil(a)}function _c(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*$c(bd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ad(g)),h+=e,g-=$c(bd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ad(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function bd(a){
// the reverse of daysToMonths
return 146097*a/4800}function cd(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ad(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(bd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function dd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)}function ed(a){return function(){return this.as(a)}}function fd(a){return a=K(a),this[a+"s"]()}function gd(a){return function(){return this._data[a]}}function hd(){return t(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function id(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function jd(a,b,c){var d=Ob(a).abs(),e=of(d.as("s")),f=of(d.as("m")),g=of(d.as("h")),h=of(d.as("d")),i=of(d.as("M")),j=of(d.as("y")),k=e<pf.s&&["s",e]||f<=1&&["m"]||f<pf.m&&["mm",f]||g<=1&&["h"]||g<pf.h&&["hh",g]||h<=1&&["d"]||h<pf.d&&["dd",h]||i<=1&&["M"]||i<pf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,id.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function kd(a){return void 0===a?of:"function"==typeof a&&(of=a,!0)}
// This function allows you to set a threshold for relative time strings
function ld(a,b){return void 0!==pf[a]&&(void 0===b?pf[a]:(pf[a]=b,!0))}function md(a){var b=this.localeData(),c=jd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function nd(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=qf(this._milliseconds)/1e3,e=qf(this._days),f=qf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=t(d/60),b=t(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=t(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var od,pd;pd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var qd=pd,rd=a.momentProperties=[],sd=!1,td={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var ud;ud=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)i(a,b)&&c.push(b);return c};var vd,wd=ud,xd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},yd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},zd="Invalid date",Ad="%d",Bd=/\d{1,2}/,Cd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Dd={},Ed={},Fd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Gd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Hd={},Id={},Jd=/\d/,Kd=/\d\d/,Ld=/\d{3}/,Md=/\d{4}/,Nd=/[+-]?\d{6}/,Od=/\d\d?/,Pd=/\d\d\d\d?/,Qd=/\d\d\d\d\d\d?/,Rd=/\d{1,3}/,Sd=/\d{1,4}/,Td=/[+-]?\d{1,6}/,Ud=/\d+/,Vd=/[+-]?\d+/,Wd=/Z|[+-]\d\d:?\d\d/gi,Xd=/Z|[+-]\d\d(?::?\d\d)?/gi,Yd=/[+-]?\d+(\.\d{1,3})?/,Zd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$d={},_d={},ae=0,be=1,ce=2,de=3,ee=4,fe=5,ge=6,he=7,ie=8;vd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var je=vd;
// FORMATTING
U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
J("month","M"),
// PRIORITY
M("month",8),
// PARSING
Z("M",Od),Z("MM",Od,Kd),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[be]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[be]=e:m(c).invalidMonth=a});
// LOCALES
var ke=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,le="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),me="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ne=Zd,oe=Zd;
// FORMATTING
U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
J("year","y"),
// PRIORITIES
M("year",1),
// PARSING
Z("Y",Vd),Z("YY",Od,Kd),Z("YYYY",Sd,Md),Z("YYYYY",Td,Nd),Z("YYYYYY",Td,Nd),ba(["YYYYY","YYYYYY"],ae),ba("YYYY",function(b,c){c[ae]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ae]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ae]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};
// MOMENTS
var pe=O("FullYear",!0);
// FORMATTING
U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),
// ALIASES
J("week","w"),J("isoWeek","W"),
// PRIORITIES
M("week",5),M("isoWeek",5),
// PARSING
Z("w",Od),Z("ww",Od,Kd),Z("W",Od),Z("WW",Od,Kd),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var qe={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),
// ALIASES
J("day","d"),J("weekday","e"),J("isoWeekday","E"),
// PRIORITY
M("day",11),M("weekday",11),M("isoWeekday",11),
// PARSING
Z("d",Od),Z("e",Od),Z("E",Od),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:m(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});
// LOCALES
var re="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),se="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),te="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ue=Zd,ve=Zd,we=Zd;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),
// ALIASES
J("hour","h"),
// PRIORITY
M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Od),Z("h",Od),Z("HH",Od,Kd),Z("hh",Od,Kd),Z("hmm",Pd),Z("hmmss",Qd),Z("Hmm",Pd),Z("Hmmss",Qd),ba(["H","HH"],de),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[de]=u(a),m(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d)),m(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e)),m(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e))});var xe,ye=/[ap]\.?m?\.?/i,ze=O("Hours",!0),Ae={calendar:xd,longDateFormat:yd,invalidDate:zd,ordinal:Ad,ordinalParse:Bd,relativeTime:Cd,months:le,monthsShort:me,week:qe,weekdays:re,weekdaysMin:te,weekdaysShort:se,meridiemParse:ye},Be={},Ce={},De=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ee=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fe=/Z|[+-]\d\d(?::?\d\d)?/,Ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],He=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ie=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var Je=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:o()}),Ke=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:o()}),Le=function(){return Date.now?Date.now():+new Date};zb("Z",":"),zb("ZZ",""),
// PARSING
Z("Z",Xd),Z("ZZ",Xd),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ab(Xd,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Me=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var Ne=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Oe=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ob.fn=wb.prototype;var Pe=Sb(1,"add"),Qe=Sb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Re=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),zc("gggg","weekYear"),zc("ggggg","weekYear"),zc("GGGG","isoWeekYear"),zc("GGGGG","isoWeekYear"),
// ALIASES
J("weekYear","gg"),J("isoWeekYear","GG"),
// PRIORITY
M("weekYear",1),M("isoWeekYear",1),
// PARSING
Z("G",Vd),Z("g",Vd),Z("GG",Od,Kd),Z("gg",Od,Kd),Z("GGGG",Sd,Md),Z("gggg",Sd,Md),Z("GGGGG",Td,Nd),Z("ggggg",Td,Nd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
U("Q",0,"Qo","quarter"),
// ALIASES
J("quarter","Q"),
// PRIORITY
M("quarter",7),
// PARSING
Z("Q",Jd),ba("Q",function(a,b){b[be]=3*(u(a)-1)}),
// FORMATTING
U("D",["DD",2],"Do","date"),
// ALIASES
J("date","D"),
// PRIOROITY
M("date",9),
// PARSING
Z("D",Od),Z("DD",Od,Kd),Z("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),ba(["D","DD"],ce),ba("Do",function(a,b){b[ce]=u(a.match(Od)[0],10)});
// MOMENTS
var Se=O("Date",!0);
// FORMATTING
U("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
J("dayOfYear","DDD"),
// PRIORITY
M("dayOfYear",4),
// PARSING
Z("DDD",Rd),Z("DDDD",Ld),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),
// FORMATTING
U("m",["mm",2],0,"minute"),
// ALIASES
J("minute","m"),
// PRIORITY
M("minute",14),
// PARSING
Z("m",Od),Z("mm",Od,Kd),ba(["m","mm"],ee);
// MOMENTS
var Te=O("Minutes",!1);
// FORMATTING
U("s",["ss",2],0,"second"),
// ALIASES
J("second","s"),
// PRIORITY
M("second",15),
// PARSING
Z("s",Od),Z("ss",Od,Kd),ba(["s","ss"],fe);
// MOMENTS
var Ue=O("Seconds",!1);
// FORMATTING
U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
J("millisecond","ms"),
// PRIORITY
M("millisecond",16),
// PARSING
Z("S",Rd,Jd),Z("SS",Rd,Kd),Z("SSS",Rd,Ld);var Ve;for(Ve="SSSS";Ve.length<=9;Ve+="S")Z(Ve,Ud);for(Ve="S";Ve.length<=9;Ve+="S")ba(Ve,Ic);
// MOMENTS
var We=O("Milliseconds",!1);
// FORMATTING
U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var Xe=r.prototype;Xe.add=Pe,Xe.calendar=Vb,Xe.clone=Wb,Xe.diff=bc,Xe.endOf=oc,Xe.format=gc,Xe.from=hc,Xe.fromNow=ic,Xe.to=jc,Xe.toNow=kc,Xe.get=R,Xe.invalidAt=xc,Xe.isAfter=Xb,Xe.isBefore=Yb,Xe.isBetween=Zb,Xe.isSame=$b,Xe.isSameOrAfter=_b,Xe.isSameOrBefore=ac,Xe.isValid=vc,Xe.lang=Re,Xe.locale=lc,Xe.localeData=mc,Xe.max=Ke,Xe.min=Je,Xe.parsingFlags=wc,Xe.set=S,Xe.startOf=nc,Xe.subtract=Qe,Xe.toArray=sc,Xe.toObject=tc,Xe.toDate=rc,Xe.toISOString=ec,Xe.inspect=fc,Xe.toJSON=uc,Xe.toString=dc,Xe.unix=qc,Xe.valueOf=pc,Xe.creationData=yc,
// Year
Xe.year=pe,Xe.isLeapYear=ra,
// Week Year
Xe.weekYear=Ac,Xe.isoWeekYear=Bc,
// Quarter
Xe.quarter=Xe.quarters=Gc,
// Month
Xe.month=ka,Xe.daysInMonth=la,
// Week
Xe.week=Xe.weeks=Ba,Xe.isoWeek=Xe.isoWeeks=Ca,Xe.weeksInYear=Dc,Xe.isoWeeksInYear=Cc,
// Day
Xe.date=Se,Xe.day=Xe.days=Ka,Xe.weekday=La,Xe.isoWeekday=Ma,Xe.dayOfYear=Hc,
// Hour
Xe.hour=Xe.hours=ze,
// Minute
Xe.minute=Xe.minutes=Te,
// Second
Xe.second=Xe.seconds=Ue,
// Millisecond
Xe.millisecond=Xe.milliseconds=We,
// Offset
Xe.utcOffset=Db,Xe.utc=Fb,Xe.local=Gb,Xe.parseZone=Hb,Xe.hasAlignedHourOffset=Ib,Xe.isDST=Jb,Xe.isLocal=Lb,Xe.isUtcOffset=Mb,Xe.isUtc=Nb,Xe.isUTC=Nb,
// Timezone
Xe.zoneAbbr=Jc,Xe.zoneName=Kc,
// Deprecations
Xe.dates=x("dates accessor is deprecated. Use date instead.",Se),Xe.months=x("months accessor is deprecated. Use month instead",ka),Xe.years=x("years accessor is deprecated. Use year instead",pe),Xe.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Eb),Xe.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Kb);var Ye=C.prototype;Ye.calendar=D,Ye.longDateFormat=E,Ye.invalidDate=F,Ye.ordinal=G,Ye.preparse=Nc,Ye.postformat=Nc,Ye.relativeTime=H,Ye.pastFuture=I,Ye.set=A,
// Month
Ye.months=fa,Ye.monthsShort=ga,Ye.monthsParse=ia,Ye.monthsRegex=na,Ye.monthsShortRegex=ma,
// Week
Ye.week=ya,Ye.firstDayOfYear=Aa,Ye.firstDayOfWeek=za,
// Day of Week
Ye.weekdays=Fa,Ye.weekdaysMin=Ha,Ye.weekdaysShort=Ga,Ye.weekdaysParse=Ja,Ye.weekdaysRegex=Na,Ye.weekdaysShortRegex=Oa,Ye.weekdaysMinRegex=Pa,
// Hours
Ye.isPM=Va,Ye.meridiem=Wa,$a("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var Ze=Math.abs,$e=ed("ms"),_e=ed("s"),af=ed("m"),bf=ed("h"),cf=ed("d"),df=ed("w"),ef=ed("M"),ff=ed("y"),gf=gd("milliseconds"),hf=gd("seconds"),jf=gd("minutes"),kf=gd("hours"),lf=gd("days"),mf=gd("months"),nf=gd("years"),of=Math.round,pf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},qf=Math.abs,rf=wb.prototype;
// Deprecations
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
return rf.abs=Wc,rf.add=Yc,rf.subtract=Zc,rf.as=cd,rf.asMilliseconds=$e,rf.asSeconds=_e,rf.asMinutes=af,rf.asHours=bf,rf.asDays=cf,rf.asWeeks=df,rf.asMonths=ef,rf.asYears=ff,rf.valueOf=dd,rf._bubble=_c,rf.get=fd,rf.milliseconds=gf,rf.seconds=hf,rf.minutes=jf,rf.hours=kf,rf.days=lf,rf.weeks=hd,rf.months=mf,rf.years=nf,rf.humanize=md,rf.toISOString=nd,rf.toString=nd,rf.toJSON=nd,rf.locale=lc,rf.localeData=mc,rf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nd),rf.lang=Re,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Vd),Z("X",Yd),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.17.1",b(sb),a.fn=Xe,a.min=ub,a.max=vb,a.now=Le,a.utc=k,a.unix=Lc,a.months=Rc,a.isDate=g,a.locale=$a,a.invalid=o,a.duration=Ob,a.isMoment=s,a.weekdays=Tc,a.parseZone=Mc,a.localeData=bb,a.isDuration=xb,a.monthsShort=Sc,a.weekdaysMin=Vc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Uc,a.normalizeUnits=K,a.relativeTimeRounding=kd,a.relativeTimeThreshold=ld,a.calendarFormat=Ub,a.prototype=Xe,a});
!function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],a);else if("object"==typeof exports)module.exports=a(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment)}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function(c,d){var e,f,g,h,i,j,k,l={},m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},w={},x=function(){return void 0!==b.tz&&void 0!==d.timeZone&&null!==d.timeZone&&""!==d.timeZone},y=function(a){var c;return c=void 0===a||null===a?b():b.isDate(a)||b.isMoment(a)?b(a):x()?b.tz(a,j,d.useStrict,d.timeZone):b(a,j,d.useStrict),x()&&c.tz(d.timeZone),c},z=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return i.indexOf("Y")!==-1;case"M":return i.indexOf("M")!==-1;case"d":return i.toLowerCase().indexOf("d")!==-1;case"h":case"H":return i.toLowerCase().indexOf("h")!==-1;case"m":return i.indexOf("m")!==-1;case"s":return i.indexOf("s")!==-1;default:return!1}},A=function(){return z("h")||z("m")||z("s")},B=function(){return z("y")||z("M")||z("d")},C=function(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]},D=function(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return z("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:d.tooltips.pickHour}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),z("m")&&(z("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:d.tooltips.pickMinute}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),z("s")&&(z("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:d.tooltips.pickSecond}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),h||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:d.tooltips.togglePeriod}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]))},E=function(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[D()];return z("h")&&e.push(b),z("m")&&e.push(c),z("s")&&e.push(d),e},F=function(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&B()&&A()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:d.tooltips.selectTime}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))},G=function(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(C()),e=a("<div>").addClass("timepicker").append(E()),f=a("<ul>").addClass("list-unstyled"),g=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(F());return d.inline&&b.removeClass("dropdown-menu"),h&&b.addClass("usetwentyfour"),z("s")&&!h&&b.addClass("wider"),d.sideBySide&&B()&&A()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(g),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(g),b):("top"===d.toolbarPlacement&&f.append(g),B()&&f.append(a("<li>").addClass(d.collapse&&A()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&f.append(g),A()&&f.append(a("<li>").addClass(d.collapse&&B()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&f.append(g),b.append(f))},H=function(){var b,e={};return b=c.is("input")||d.inline?c.data():c.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c])}),e},I=function(){var b,e=(n||c).position(),f=(n||c).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(c.is("input"))b=c.after(o).parent();else{if(d.inline)return void(b=c.append(o));b=c,c.children().first().after(o)}if("auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+c.outerHeight()<f.top?"top":"bottom"),"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),"static"===b.css("position")&&(b=b.parents().filter(function(){return"static"!==a(this).css("position")}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a non-static positioned container");o.css({top:"top"===g?"auto":e.top+c.outerHeight(),bottom:"top"===g?b.outerHeight()-(b===c?0:e.top):"auto",left:"left"===h?b===c?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-c.outerWidth()-(b===c?0:e.left)})},J=function(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||c.trigger(a)},K=function(a){"y"===a&&(a="YYYY"),J({type:"dp.update",change:a,viewDate:f.clone()})},L=function(a){o&&(a&&(k=Math.max(p,Math.min(3,k+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[k].clsName).show())},M=function(){var b=a("<tr>"),c=f.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(f.clone().endOf("w"));)b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");o.find(".datepicker-days thead").append(b)},N=function(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0},O=function(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0},P=function(a){return d.disabledHours[a.format("H")]===!0},Q=function(a){return d.enabledHours[a.format("H")]===!0},R=function(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&N(b))return!1;if(d.enabledDates&&"d"===c&&!O(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&d.daysOfWeekDisabled.indexOf(b.day())!==-1)return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&P(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!Q(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){if(b.isBetween(this[0],this[1]))return e=!0,!1}),e)return!1}return!0},S=function(){for(var b=[],c=f.clone().startOf("y").startOf("d");c.isSame(f,"y");)b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");o.find(".datepicker-months td").empty().append(b)},T=function(){var b=o.find(".datepicker-months"),c=b.find("th"),g=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),R(f.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(f.year()),R(f.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),g.removeClass("active"),e.isSame(f,"y")&&!m&&g.eq(e.month()).addClass("active"),g.each(function(b){R(f.clone().month(b),"M")||a(this).addClass("disabled")})},U=function(){var a=o.find(".datepicker-years"),b=a.find("th"),c=f.clone().subtract(5,"y"),g=f.clone().add(6,"y"),h="";for(b.eq(0).find("span").attr("title",d.tooltips.prevDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+g.year()),d.maxDate&&d.maxDate.isBefore(g,"y")&&b.eq(2).addClass("disabled");!c.isAfter(g,"y");)h+='<span data-action="selectYear" class="year'+(c.isSame(e,"y")&&!m?" active":"")+(R(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");a.find("td").html(h)},V=function(){var a,c=o.find(".datepicker-decades"),g=c.find("th"),h=b({y:f.year()-f.year()%100-1}),i=h.clone().add(100,"y"),j=h.clone(),k=!1,l=!1,m="";for(g.eq(0).find("span").attr("title",d.tooltips.prevCentury),g.eq(2).find("span").attr("title",d.tooltips.nextCentury),c.find(".disabled").removeClass("disabled"),(h.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(h,"y"))&&g.eq(0).addClass("disabled"),g.eq(1).text(h.year()+"-"+i.year()),(h.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(i,"y"))&&g.eq(2).addClass("disabled");!h.isAfter(i,"y");)a=h.year()+12,k=d.minDate&&d.minDate.isAfter(h,"y")&&d.minDate.year()<=a,l=d.maxDate&&d.maxDate.isAfter(h,"y")&&d.maxDate.year()<=a,m+='<span data-action="selectDecade" class="decade'+(e.isAfter(h)&&e.year()<=a?" active":"")+(R(h,"y")||k||l?"":" disabled")+'" data-selection="'+(h.year()+6)+'">'+(h.year()+1)+" - "+(h.year()+12)+"</span>",h.add(12,"y");m+="<span></span><span></span><span></span>",c.find("td").html(m),g.eq(1).text(j.year()+1+"-"+h.year())},W=function(){var b,c,g,h=o.find(".datepicker-days"),i=h.find("th"),j=[],k=[];if(B()){for(i.eq(0).find("span").attr("title",d.tooltips.prevMonth),i.eq(1).attr("title",d.tooltips.selectMonth),i.eq(2).find("span").attr("title",d.tooltips.nextMonth),h.find(".disabled").removeClass("disabled"),i.eq(1).text(f.format(d.dayViewHeaderFormat)),R(f.clone().subtract(1,"M"),"M")||i.eq(0).addClass("disabled"),R(f.clone().add(1,"M"),"M")||i.eq(2).addClass("disabled"),b=f.clone().startOf("M").startOf("w").startOf("d"),g=0;g<42;g++)0===b.weekday()&&(c=a("<tr>"),d.calendarWeeks&&c.append('<td class="cw">'+b.week()+"</td>"),j.push(c)),k=["day"],b.isBefore(f,"M")&&k.push("old"),b.isAfter(f,"M")&&k.push("new"),b.isSame(e,"d")&&!m&&k.push("active"),R(b,"d")||k.push("disabled"),b.isSame(y(),"d")&&k.push("today"),0!==b.day()&&6!==b.day()||k.push("weekend"),J({type:"dp.classify",date:b,classNames:k}),c.append('<td data-action="selectDay" data-day="'+b.format("L")+'" class="'+k.join(" ")+'">'+b.date()+"</td>"),b.add(1,"d");h.find("tbody").empty().append(j),T(),U(),V()}},X=function(){var b=o.find(".timepicker-hours table"),c=f.clone().startOf("d"),d=[],e=a("<tr>");for(f.hour()>11&&!h&&c.hour(12);c.isSame(f,"d")&&(h||f.hour()<12&&c.hour()<12||f.hour()>11);)c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(R(c,"h")?"":" disabled")+'">'+c.format(h?"HH":"hh")+"</td>"),c.add(1,"h");b.empty().append(d)},Y=function(){for(var b=o.find(".timepicker-minutes table"),c=f.clone().startOf("h"),e=[],g=a("<tr>"),h=1===d.stepping?5:d.stepping;f.isSame(c,"h");)c.minute()%(4*h)===0&&(g=a("<tr>"),e.push(g)),g.append('<td data-action="selectMinute" class="minute'+(R(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(h,"m");b.empty().append(e)},Z=function(){for(var b=o.find(".timepicker-seconds table"),c=f.clone().startOf("m"),d=[],e=a("<tr>");f.isSame(c,"m");)c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(R(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");b.empty().append(d)},$=function(){var a,b,c=o.find(".timepicker span[data-time-component]");h||(a=o.find(".timepicker [data-action=togglePeriod]"),b=e.clone().add(e.hours()>=12?-12:12,"h"),a.text(e.format("A")),R(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(e.format(h?"HH":"hh")),c.filter("[data-time-component=minutes]").text(e.format("mm")),c.filter("[data-time-component=seconds]").text(e.format("ss")),X(),Y(),Z()},_=function(){o&&(W(),$())},aa=function(a){var b=m?null:e;if(!a)return m=!0,g.val(""),c.data("date",""),J({type:"dp.change",date:!1,oldDate:b}),void _();if(a=a.clone().locale(d.locale),x()&&a.tz(d.timeZone),1!==d.stepping)for(a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping).seconds(0);d.minDate&&a.isBefore(d.minDate);)a.add(d.stepping,"minutes");R(a)?(e=a,f=e.clone(),g.val(e.format(i)),c.data("date",e.format(i)),m=!1,_(),J({type:"dp.change",date:e.clone(),oldDate:b})):(d.keepInvalid?J({type:"dp.change",date:a,oldDate:b}):g.val(m?"":e.format(i)),J({type:"dp.error",date:a,oldDate:b}))},ba=function(){var b=!1;return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return!c||!c.transitioning||(b=!0,!1)}),b?l:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",I),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,J({type:"dp.hide",date:e.clone()}),g.blur(),k=0,f=e.clone(),l)):l},ca=function(){aa(null)},da=function(a){return void 0===d.parseInputDate?(!b.isMoment(a)||a instanceof Date)&&(a=y(a)):a=d.parseInputDate(a),a},ea={next:function(){var a=q[k].navFnc;f.add(q[k].navStep,a),W(),K(a)},previous:function(){var a=q[k].navFnc;f.subtract(q[k].navStep,a),W(),K(a)},pickerSwitch:function(){L(1)},selectMonth:function(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c),k===p?(aa(e.clone().year(f.year()).month(f.month())),d.inline||ba()):(L(-1),W()),K("M")},selectYear:function(b){var c=parseInt(a(b.target).text(),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY")},selectDecade:function(b){var c=parseInt(a(b.target).data("selection"),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY")},selectDay:function(b){var c=f.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),aa(c.date(parseInt(a(b.target).text(),10))),A()||d.keepOpen||d.inline||ba()},incrementHours:function(){var a=e.clone().add(1,"h");R(a,"h")&&aa(a)},incrementMinutes:function(){var a=e.clone().add(d.stepping,"m");R(a,"m")&&aa(a)},incrementSeconds:function(){var a=e.clone().add(1,"s");R(a,"s")&&aa(a)},decrementHours:function(){var a=e.clone().subtract(1,"h");R(a,"h")&&aa(a)},decrementMinutes:function(){var a=e.clone().subtract(d.stepping,"m");R(a,"m")&&aa(a)},decrementSeconds:function(){var a=e.clone().subtract(1,"s");R(a,"s")&&aa(a)},togglePeriod:function(){aa(e.clone().add(e.hours()>=12?-12:12,"h"))},togglePicker:function(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(g.collapse("hide"),h.collapse("show")):(g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date)}},showPicker:function(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show()},showHours:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show()},showMinutes:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);h||(e.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),aa(e.clone().hours(c)),ea.showPicker.call(l)},selectMinute:function(b){aa(e.clone().minutes(parseInt(a(b.target).text(),10))),ea.showPicker.call(l)},selectSecond:function(b){aa(e.clone().seconds(parseInt(a(b.target).text(),10))),ea.showPicker.call(l)},clear:ca,today:function(){var a=y();R(a,"d")&&aa(a)},close:ba},fa=function(b){return!a(b.currentTarget).is(".disabled")&&(ea[a(b.currentTarget).data("action")].apply(l,arguments),!1)},ga=function(){var b,c={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};return g.prop("disabled")||!d.ignoreReadonly&&g.prop("readonly")||o?l:(void 0!==g.val()&&0!==g.val().trim().length?aa(da(g.val().trim())):m&&d.useCurrent&&(d.inline||g.is("input")&&0===g.val().trim().length)&&(b=y(),"string"==typeof d.useCurrent&&(b=c[d.useCurrent](b)),aa(b)),o=G(),M(),S(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),_(),L(),a(window).on("resize",I),o.on("click","[data-action]",fa),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),I(),o.show(),d.focusOnShow&&!g.is(":focus")&&g.focus(),J({type:"dp.show"}),l)},ha=function(){return o?ba():ga()},ia=function(a){var b,c,e,f,g=null,h=[],i={},j=a.which,k="p";w[j]=k;for(b in w)w.hasOwnProperty(b)&&w[b]===k&&(h.push(b),parseInt(b,10)!==j&&(i[b]=!0));for(b in d.keyBinds)if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[j]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--)if(!(v[e[c]]in i)){f=!1;break}if(f){g=d.keyBinds[b];break}}g&&(g.call(l,o),a.stopPropagation(),a.preventDefault())},ja=function(a){w[a.which]="r",a.stopPropagation(),a.preventDefault()},ka=function(b){var c=a(b.target).val().trim(),d=c?da(c):null;return aa(d),b.stopImmediatePropagation(),!1},la=function(){g.on({change:ka,blur:d.debug?"":ba,keydown:ia,keyup:ja,focus:d.allowInputToggle?ga:""}),c.is("input")?g.on({focus:ga}):n&&(n.on("click",ha),n.on("mousedown",!1))},ma=function(){g.off({change:ka,blur:blur,keydown:ia,keyup:ja,focus:d.allowInputToggle?ba:""}),c.is("input")?g.off({focus:ga}):n&&(n.off("click",ha),n.off("mousedown",!1))},na=function(b){var c={};return a.each(b,function(){var a=da(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),!!Object.keys(c).length&&c},oa=function(b){var c={};return a.each(b,function(){c[this]=!0}),!!Object.keys(c).length&&c},pa=function(){var a=d.format||"L LT";i=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=e.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return e.localeData().longDateFormat(a)||a})}),j=d.extraFormats?d.extraFormats.slice():[],j.indexOf(a)<0&&j.indexOf(i)<0&&j.push(i),h=i.toLowerCase().indexOf("a")<1&&i.replace(/\[.*?\]/g,"").indexOf("h")<1,z("y")&&(p=2),z("M")&&(p=1),z("d")&&(p=0),k=Math.max(p,k),m||aa(e)};if(l.destroy=function(){ba(),ma(),c.removeData("DateTimePicker"),c.removeData("date")},l.toggle=ha,l.show=ga,l.hide=ba,l.disable=function(){return ba(),n&&n.hasClass("btn")&&n.addClass("disabled"),g.prop("disabled",!0),l},l.enable=function(){return n&&n.hasClass("btn")&&n.removeClass("disabled"),g.prop("disabled",!1),l},l.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,l},l.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===l[a])throw new TypeError("option "+a+" is not recognized!");l[a](b)}),l},l.date=function(a){if(0===arguments.length)return m?null:e.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return aa(null===a?null:da(a)),l},l.format=function(a){if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a string or boolean:false parameter "+a);return d.format=a,i&&pa(),l},l.timeZone=function(a){if(0===arguments.length)return d.timeZone;if("string"!=typeof a)throw new TypeError("newZone() expects a string parameter");return d.timeZone=a,l},l.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,l},l.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,j&&pa(),l},l.disabledDates=function(b){if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=na(b),d.enabledDates=!1,_(),l},l.enabledDates=function(b){if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=na(b),d.disabledDates=!1,_(),l},l.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,_(),l;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||b<0||isNaN(b)?a:(a.indexOf(b)===-1&&a.push(b),a)},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!R(e,"d");){if(e.add(1,"d"),31===b)throw"Tried 31 times to find a valid date";b++}aa(e)}return _(),l},l.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&b.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+b.format(i));return d.maxDate=b,d.useCurrent&&!d.keepInvalid&&e.isAfter(a)&&aa(d.maxDate),f.isAfter(b)&&(f=b.clone().subtract(d.stepping,"m")),_(),l},l.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&b.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+b.format(i));return d.minDate=b,d.useCurrent&&!d.keepInvalid&&e.isBefore(a)&&aa(d.minDate),f.isBefore(b)&&(f=b.clone().add(d.stepping,"m")),_(),l},l.defaultDate=function(a){if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,l;"string"==typeof a&&(a="now"===a||"moment"===a?y():y(a));var b=da(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!R(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=b,(d.defaultDate&&d.inline||""===g.val().trim())&&aa(d.defaultDate),l},l.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,e.locale(d.locale),f.locale(d.locale),i&&pa(),o&&(ba(),ga()),l},l.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||a<1)&&(a=1),d.stepping=a,l)},l.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&b.indexOf(a.toLowerCase())===-1)throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,l},l.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?l:(d.collapse=a,o&&(ba(),ga()),l)},l.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(ba(),ga()),l},l.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(ba(),ga()),l},l.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,l},l.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(ba(),ga()),l},l.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(r.indexOf(a)===-1)throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,k=Math.max(r.indexOf(a),p),L(),l},l.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(u.indexOf(a)===-1)throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(ba(),ga()),l},l.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),t.indexOf(b.horizontal)===-1)throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),s.indexOf(b.vertical)===-1)throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical}return _(),l},l.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,_(),l},l.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(ba(),ga()),l},l.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(ba(),ga()),l},l.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(ba(),ga()),l},l.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,l},l.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,l},l.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,l},l.clear=function(){return ca(),l},l.keyBinds=function(a){return 0===arguments.length?d.keyBinds:(d.keyBinds=a,l)},l.getMoment=function(a){return y(a)},l.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,l},l.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,l},l.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,l},l.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");
return d.keepInvalid=a,l},l.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,l},l.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,l},l.disabledTimeIntervals=function(b){if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,_(),l},l.disabledHours=function(b){if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(d.disabledHours=oa(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}aa(e)}return _(),l},l.enabledHours=function(b){if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=oa(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}aa(e)}return _(),l},l.viewDate=function(a){if(0===arguments.length)return f.clone();if(!a)return f=e.clone(),l;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f=da(a),K(),l},c.is("input"))g=c;else if(g=c.find(d.datepickerInput),0===g.length)g=c.find("input");else if(!g.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(c.hasClass("input-group")&&(n=0===c.find(".datepickerbutton").length?c.find(".input-group-addon"):c.find(".datepickerbutton")),!d.inline&&!g.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return e=y(),f=e.clone(),a.extend(!0,d,H()),l.options(d),pa(),la(),g.prop("disabled")&&l.disable(),g.is("input")&&0!==g.val().trim().length?aa(da(g.val().trim())):d.defaultDate&&void 0===g.attr("placeholder")&&aa(d.defaultDate),d.inline&&ga(),l};return a.fn.datetimepicker=function(b){b=b||{};var d,e=Array.prototype.slice.call(arguments,1),f=!0,g=["destroy","hide","show","toggle"];if("object"==typeof b)return this.each(function(){var d,e=a(this);e.data("DateTimePicker")||(d=a.extend(!0,{},a.fn.datetimepicker.defaults,b),e.data("DateTimePicker",c(e,d)))});if("string"==typeof b)return this.each(function(){var c=a(this),g=c.data("DateTimePicker");if(!g)throw new Error('bootstrap-datetimepicker("'+b+'") method was called on an element that is not using DateTimePicker');d=g[b].apply(g,e),f=d===g}),f||a.inArray(b,g)>-1?this:d;throw new TypeError("Invalid arguments for DateTimePicker: "+b)},a.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(7,"d")):this.date(b.clone().add(this.stepping(),"m"))}},down:function(a){if(!a)return void this.show();var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(7,"d")):this.date(b.clone().subtract(this.stepping(),"m"))},"control up":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(1,"y")):this.date(b.clone().add(1,"h"))}},"control down":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(1,"y")):this.date(b.clone().subtract(1,"h"))}},left:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"d"))}},right:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"d"))}},pageUp:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"M"))}},pageDown:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(a){a&&a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},delete:function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},a.fn.datetimepicker});
/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */
+function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.toggle"), f = "object" == typeof b && b;
            e || d.data("bs.toggle", e = new c(this, f)), "string" == typeof b && e[b] && e[b]()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, this.defaults(), c), this.render()
    };
    c.VERSION = "2.2.0", c.DEFAULTS = {
        on: "On",
        off: "Off",
        onstyle: "primary",
        offstyle: "default",
        size: "normal",
        style: "",
        width: null,
        height: null
    }, c.prototype.defaults = function () {
        return {
            on: this.$element.attr("data-on") || c.DEFAULTS.on,
            off: this.$element.attr("data-off") || c.DEFAULTS.off,
            onstyle: this.$element.attr("data-onstyle") || c.DEFAULTS.onstyle,
            offstyle: this.$element.attr("data-offstyle") || c.DEFAULTS.offstyle,
            size: this.$element.attr("data-size") || c.DEFAULTS.size,
            style: this.$element.attr("data-style") || c.DEFAULTS.style,
            width: this.$element.attr("data-width") || c.DEFAULTS.width,
            height: this.$element.attr("data-height") || c.DEFAULTS.height
        }
    }, c.prototype.render = function () {
        this._onstyle = "btn-" + this.options.onstyle, this._offstyle = "btn-" + this.options.offstyle;
        var b = "large" === this.options.size ? "btn-lg" : "small" === this.options.size ? "btn-sm" : "mini" === this.options.size ? "btn-xs" : "", c = a('<label class="btn">').html(this.options.on).addClass(this._onstyle + " " + b), d = a('<label class="btn">').html(this.options.off).addClass(this._offstyle + " " + b + " active"), e = a('<span class="toggle-handle btn btn-default">').addClass(b), f = a('<div class="toggle-group">').append(c, d, e), g = a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked") ? this._onstyle : this._offstyle + " off").addClass(b).addClass(this.options.style);
        this.$element.wrap(g), a.extend(this, {
            $toggle: this.$element.parent(),
            $toggleOn: c,
            $toggleOff: d,
            $toggleGroup: f
        }), this.$toggle.append(f);
        var h = this.options.width || Math.max(c.outerWidth(), d.outerWidth()) + e.outerWidth() / 2, i = this.options.height || Math.max(c.outerHeight(), d.outerHeight());
        c.addClass("toggle-on"), d.addClass("toggle-off"), this.$toggle.css({
            width: h,
            height: i
        }), this.options.height && (c.css("line-height", c.height() + "px"), d.css("line-height", d.height() + "px")), this.update(!0), this.trigger(!0)
    }, c.prototype.toggle = function () {
        this.$element.prop("checked") ? this.off() : this.on()
    }, c.prototype.on = function (a) {
        return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle), this.$element.prop("checked", !0), void(a || this.trigger()))
    }, c.prototype.off = function (a) {
        return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"), this.$element.prop("checked", !1), void(a || this.trigger()))
    }, c.prototype.enable = function () {
        this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1)
    }, c.prototype.disable = function () {
        this.$toggle.attr("disabled", "disabled"), this.$element.prop("disabled", !0)
    }, c.prototype.update = function (a) {
        this.$element.prop("disabled") ? this.disable() : this.enable(), this.$element.prop("checked") ? this.on(a) : this.off(a)
    }, c.prototype.trigger = function (b) {
        this.$element.off("change.bs.toggle"), b || this.$element.change(), this.$element.on("change.bs.toggle", a.proxy(function () {
            this.update()
        }, this))
    }, c.prototype.destroy = function () {
        this.$element.off("change.bs.toggle"), this.$toggleGroup.remove(), this.$element.removeData("bs.toggle"), this.$element.unwrap()
    };
    var d = a.fn.bootstrapToggle;
    a.fn.bootstrapToggle = b, a.fn.bootstrapToggle.Constructor = c, a.fn.toggle.noConflict = function () {
        return a.fn.bootstrapToggle = d, this
    }, a(function () {
        a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()
    }), a(document).on("click.bs.toggle", "div[data-toggle^=toggle]", function (b) {
        var c = a(this).find("input[type=checkbox]");
        c.bootstrapToggle("toggle"), b.preventDefault()
    })
}(jQuery);
//# sourceMappingURL=bootstrap-toggle.min.js.map

/** Custom **/

$('body').on('click', '.toggle', function () {
    console.log($(this).find('> input').is(':checked'))
    if ($(this).find('> input').is(':checked')) {
        $('input[name="' + $(this).find('> input').data('name') + '"]').val(1);
    } else {
        $('input[name="' + $(this).find('> input').data('name') + '"]').val(0);
    }
});

/** Custom **/
"use strict";
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  }
  else {
    root.GMaps = factory();
  }


}(this, function() {

/*!
 * GMaps.js v0.4.24
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2016, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      var callback_params = original_callback_params.slice(0);
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementsByClassName = function (class_name, context) {
    var element,
        _class = class_name.replace('.', '');

    if ('jQuery' in this && context) {
        element = $("." + _class, context)[0];
    } else {
        element = document.getElementsByClassName(_class)[0];
    }
    return element;

};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in window && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {

    if (!(typeof window.google === 'object' && window.google.maps)) {
      if (typeof window.console === 'object' && window.console.error) {
        console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
      }

      return function() {};
    }

    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var valueOrDefault = function(value, defaultValue) {
      return value === undefined ? defaultValue : value;
    };

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

      if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
            /**
             * Container element
             *
             * @type {HTMLElement}
             */
            this.el = getElementById(identifier, options.context);
        } else {
            this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
          this.el = identifier;
      }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    /**
     * Google Maps map instance
     *
     * @type {google.maps.Map}
     */
    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');

      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      // context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);

        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();

          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      setTimeout(function() {
        context_menu_element.style.display = 'block';
      }, 0);
    };

    /**
     * Add a context menu for a map or a marker.
     *
     * @param {object} options - The `options` object should contain:
     * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
     * * `options` (array): A collection of context menu items:
     *   * `title` (string): Item's title shown in the context menu.
     *   * `name` (string): Item's identifier.
     *   * `action` (function): Function triggered after selecting the context menu item.
     */
    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      if (!getElementById('gmaps_context_menu')) {
        doc.body.appendChild(ul);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    /**
     * Hide the current context menu
     */
    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */
    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    /**
     * Adjust the map zoom to include all the markers added in the map.
     */
    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */
    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    /**
     * Center the map using the `lat` and `lng` coordinates.
     *
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    /**
     * Return the HTML element container of the map.
     *
     * @returns {HTMLElement} the element container.
     */
    this.getElement = function() {
      return this.el;
    };

    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */
    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */
    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.title) {
    control.title = options.title;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }

          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      GMaps.fire('marker_removed', marker, this);
    }

    if(this.markerClusterer && this.markerClusterer.clearMarkers) {
      this.markerClusterer.clearMarkers();
    }

    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      routes = [],
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(routes, result, status);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {
  var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;

  renderOptions.panel = panel;
  renderOptions = extend_object({
    map: this.map
  }, renderOptions);
  display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
  });
};

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes) {
      if (routes.length > 0) {
        var polyline_options = {
          path: routes[routes.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);

        if (options.callback) {
          options.callback(routes[routes.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;

  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.prototype.once = function(event_name, handler) {
  return GMaps.once(event_name, this, handler);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.once = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map;
    return google.maps.event.addListenerOnce(object, event_name, handler);
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      }

      // Raycast point in polygon method
      var inPoly = false;

      var numPaths = this.getPaths().getLength();
      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      }
      else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function() {
    return this['__gm_id'];
  };
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}

return GMaps;
}));

/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);
jQuery(function ($) {
    'use strict',

        //#main-slider
        $(function () {
            $('#main-slider.carousel').carousel({
                interval: 8000
            });
        });


    // accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();


    // Contact form
    var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var form_status = $('<div class="form-group errors"><label class="col-sm-3 control-label"></label><div class="col-sm-9"><div class="alert alert-danger" role="alert"><center></center></div></div></div></div>');
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(form).serialize(),
            beforeSend: function () {
                $(form).find('.form_status').remove();
            }
        }).done(function (data) {
            if (data.success) {
                location.href = data.redirect_url;
            }
            if (data.message) {
                form.find('.errors').remove();
                form.prepend(form_status);
                form_status.find('center').html(data.message);
            }
        });
    });


    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    $('form button.button-edit').on('click', function () {
        $(this).closest('.form-group').find('input[type="file"]').click();
    });

    $('form button.button-delete').on('click', function () {
        $(this).closest('.form-group').find('input[type="hidden"]').val(1);
        var image = $(this).closest('.form-group').find('.image-container > img');
        var newSrc = $(image).data('default-src') ? $(image).data('default-src') : '';
        $(image).attr('src', $(image).data('default-src'));
    });

    $('#list').click(function (event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
        $('#products .item').removeClass('grid-group-item');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });

    $('input[type="file"]').on('change', function () {
        $('img.media-object').val('');
        $('img.media-object').attr('src', URL.createObjectURL($(this)[0].files[0]));
    })

    if ($(".chosen-select").length) {
        $(".chosen-select").chosen({
            disable_search_threshold: 10,
            placeholder_text_multiple: "Select from list..",
        });
    }

    $('.btn-modal-submit').on('click', function () {
        var modal = $(this).closest('.modal');
        var form = $(modal).find('form');
        var formData = new FormData(form[0]);
        if ($(form).attr('action')) {
            $.ajax({
                url: $(form).attr('action'),
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (content) {
                    $(modal).find('.modal-body').html(content)
                    if (content.search("alert-success") !== -1) {
                        setTimeout(function () {
                            window.location.reload();
                        }, 300);
                    }
                }
            });
        }
    });

    $('button.btn-submit-form').on('click', function () {
        $('.container > form').trigger('submit');
    });

    /**
     * Top pannel
     */

    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('#content').offset().top;
        if (window_top > div_top) {
            $('#sticky').addClass('stick');
        } else {
            $('#sticky').removeClass('stick');
        }
    }

    $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });

    /**
     * Top pannel
     */

    // Tooltip init
    $('[data-toggle="tooltip"]').tooltip()

    // Dropdown init
    $(".dropdown-menu li a").click(function () {
        $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
        $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

        var dropSelect = $(this).closest('.form-group').find('select');
        $(dropSelect).val($(this).data('value'));
    });

    $(".toggle-btn-group > .btn").click(function () {
        var dropSelect = $(this).closest('.input-group-btn').find('select');
        $(dropSelect).val($(this).data('value'));

        $(this).closest('.input-group-btn').find('.btn').removeClass('active')

        if (!$(this).hasClass('selected')) {
            $(this).addClass('active');
        }
    });

    var dropzoneElement = $('#demo-upload');
    if ($(dropzoneElement).length) {
        Dropzone.autoDiscover = false;
        var CropperOBJ = 0;
        var dropzone = new Dropzone($(dropzoneElement).get(0), {
            url: "/upload",
            maxFiles: 1,
            timeout: 1,
            createImageThumbnails: true,
            addRemoveLinks: true,
            autoProcessQueue: false,
            acceptedFiles: 'image/*',
            autoQueue: false,
            parallelUploads: true,
            thumbnailWidth: null,
            thumbnailHeight: null,
            init: function () {
                this.on("maxfilesexceeded", function (file) {
                    this.removeAllFiles();
                    this.addFile(file);
                });

                var self = this;
                this.on("thumbnail", function (file, dataUrl) {
                    $('.dz-image > img').last().find('img').attr({width: 'auto', height: '100%'});
                    $('.dz-image > img').css({"width": "auto", "height": "100%"});
                    $('.dz-progress').hide();

                    $('#imageCropModal').find('img').attr('src', $('.dz-image > img').last().attr('src'));

                    var image = $('#imageCropModal').find('img').get(0);

                    var cropWidth = $(window).width() > $('#imageCropModal').find('img').prop("naturalWidth") ? $('#imageCropModal').find('img').prop("naturalWidth") : $(window).width();
                    var cropHeight = $(window).height() > $('#imageCropModal').find('img').prop("naturalHeight") + 200 ? $('#imageCropModal').find('img').prop("naturalHeight") : $(window).height() - 200;

                    if (CropperOBJ) {
                        CropperOBJ.destroy();
                    }
                    CropperOBJ = new Cropper(image, {
                        viewMode: 1,
                        modal: true,
                        minContainerWidth: cropWidth - 40,
                        minContainerHeight: cropHeight,
                        minCropBoxWidth: $(dropzoneElement).closest('form').data('image-with'),
                        minCropBoxHeight: $(dropzoneElement).closest('form').data('image-height'),
                        aspectRatio: $(dropzoneElement).closest('form').data('image-with') / $(dropzoneElement).closest('form').data('image-height'),
                    });

                    $('#imageCropModal .btn-modal-submit').on('click', function () {
                        var canvasData = CropperOBJ.getCroppedCanvas()
                        var imageDataUrl = canvasData.toDataURL('image/jpeg');

                        $('.croppedImageInput').val(imageDataUrl);
                        $('.dz-image > img').last().attr('src', imageDataUrl);
                        $('#imageCropModal').modal('hide');
                    });


                    $('#imageCropModal').modal('show');
                });

                this.on("success", function (file) {
                    alert()
                    $('.dz-image > img').css({"width": "auto", "height": "100%"});
                })
            }
        });

        $('#imageCropModal button.btn-modal-submit').on('click', function () {
            var currentPreview = $('.dropzone .dz-image-preview');
            var replacedPreview = '<div class="dz-preview dz-image-preview">' +
                '<div class="dz-image"><img/></div>' +
                '<button class="dz-remove remove-button" data-dz-remove="">' +
                '<i class="fa fa-trash" aria-hidden="true"></i>' +
                '</button>' +
                '</div>';
            $(replacedPreview).find('img').replaceWith($(currentPreview).find('img'));
            $(currentPreview).replaceWith(replacedPreview);
            $('.dz-message.needsclick').hide();
        });

        $('#imageCropModal').on('hide.bs.modal', function (e) {
            if (!$(document.activeElement).hasClass('btn-modal-submit')) {
                $(this).closest('.form-group').find('input[name$="[unlink]"]').val(1);
                $(this).closest('.form-group').find('input[name$="[unlink]"]').prop('checked', true).attr('checked', true);
                $('.dz-image-preview').remove();
                $('.dz-message.needsclick').hide();
                $('.needsclick').show();
            }
        })

        $('body').on('click', '.dz-remove', function (e) {
            if (e.eventPhase == 3) {
                $(this).closest('.form-group').find('input[name$="[unlink]"]').val(1);
                $(this).closest('.form-group').find('input[name$="[unlink]"]').prop('checked', true).attr('checked', true);
                $('.dz-image-preview').remove();
                $('.needsclick').show();
            }
        });

        $('.dz-hidden-input').on('change', function () {
            var originFileInput = $('form').find('input[name$="[binaryContent]"]');
            originFileInput[0].files = $(this)[0].files;
            $('.dz-image-preview').remove();
        });

        $('.dropzone .change-button').on('click', function (e) {
            e.stopPropagation();
            $('.dropzone.needsclick').trigger('click')
            return false;
        });
    }
});