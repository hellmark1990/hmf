@charset "UTF-8";/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license

Copyright (c) 2013 Daniel Eden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}@-webkit-keyframes bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce}@-webkit-keyframes flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{0%{-webkit-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scaleX(1.25) scaleY(0.75);transform:scaleX(1.25) scaleY(0.75)}40%{-webkit-transform:scaleX(0.75) scaleY(1.25);transform:scaleX(0.75) scaleY(1.25)}60%{-webkit-transform:scaleX(1.15) scaleY(0.85);transform:scaleX(1.15) scaleY(0.85)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rubberBand{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scaleX(1.25) scaleY(0.75);-ms-transform:scaleX(1.25) scaleY(0.75);transform:scaleX(1.25) scaleY(0.75)}40%{-webkit-transform:scaleX(0.75) scaleY(1.25);-ms-transform:scaleX(0.75) scaleY(1.25);transform:scaleX(0.75) scaleY(1.25)}60%{-webkit-transform:scaleX(1.15) scaleY(0.85);-ms-transform:scaleX(1.15) scaleY(0.85);transform:scaleX(1.15) scaleY(0.85)}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes shake{0%,100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);-ms-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);-ms-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg)}100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}}.swing{-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}@keyframes tada{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);-ms-transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);-ms-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);-ms-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);-ms-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateX(0%);transform:translateX(0%)}15%{-webkit-transform:translateX(-25%) rotate(-5deg);transform:translateX(-25%) rotate(-5deg)}30%{-webkit-transform:translateX(20%) rotate(3deg);transform:translateX(20%) rotate(3deg)}45%{-webkit-transform:translateX(-15%) rotate(-3deg);transform:translateX(-15%) rotate(-3deg)}60%{-webkit-transform:translateX(10%) rotate(2deg);transform:translateX(10%) rotate(2deg)}75%{-webkit-transform:translateX(-5%) rotate(-1deg);transform:translateX(-5%) rotate(-1deg)}100%{-webkit-transform:translateX(0%);transform:translateX(0%)}}@keyframes wobble{0%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}15%{-webkit-transform:translateX(-25%) rotate(-5deg);-ms-transform:translateX(-25%) rotate(-5deg);transform:translateX(-25%) rotate(-5deg)}30%{-webkit-transform:translateX(20%) rotate(3deg);-ms-transform:translateX(20%) rotate(3deg);transform:translateX(20%) rotate(3deg)}45%{-webkit-transform:translateX(-15%) rotate(-3deg);-ms-transform:translateX(-15%) rotate(-3deg);transform:translateX(-15%) rotate(-3deg)}60%{-webkit-transform:translateX(10%) rotate(2deg);-ms-transform:translateX(10%) rotate(2deg);transform:translateX(10%) rotate(2deg)}75%{-webkit-transform:translateX(-5%) rotate(-1deg);-ms-transform:translateX(-5%) rotate(-1deg);transform:translateX(-5%) rotate(-1deg)}100%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes bounceIn{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}70%{-webkit-transform:scale(.9);transform:scale(.9)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounceIn{0%{opacity:0;-webkit-transform:scale(.3);-ms-transform:scale(.3);transform:scale(.3)}50%{opacity:1;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}70%{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}100%{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}60%{opacity:1;-webkit-transform:translateY(30px);transform:translateY(30px)}80%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bounceInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}60%{opacity:1;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px)}80%{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}60%{opacity:1;-webkit-transform:translateX(30px);transform:translateX(30px)}80%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes bounceInLeft{0%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}60%{opacity:1;-webkit-transform:translateX(30px);-ms-transform:translateX(30px);transform:translateX(30px)}80%{-webkit-transform:translateX(-10px);-ms-transform:translateX(-10px);transform:translateX(-10px)}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}60%{opacity:1;-webkit-transform:translateX(-30px);transform:translateX(-30px)}80%{-webkit-transform:translateX(10px);transform:translateX(10px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes bounceInRight{0%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}60%{opacity:1;-webkit-transform:translateX(-30px);-ms-transform:translateX(-30px);transform:translateX(-30px)}80%{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px)}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}60%{opacity:1;-webkit-transform:translateY(-30px);transform:translateY(-30px)}80%{-webkit-transform:translateY(10px);transform:translateY(10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bounceInUp{0%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}60%{opacity:1;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}80%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px)}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.95);transform:scale(.95)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}100%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}}@keyframes bounceOut{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95)}50%{opacity:1;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}100%{opacity:0;-webkit-transform:scale(.3);-ms-transform:scale(.3);transform:scale(.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{0%{-webkit-transform:translateY(0);transform:translateY(0)}20%{opacity:1;-webkit-transform:translateY(-20px);transform:translateY(-20px)}100%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}}@keyframes bounceOutDown{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}20%{opacity:1;-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px)}100%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{opacity:1;-webkit-transform:translateX(20px);transform:translateX(20px)}100%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}}@keyframes bounceOutLeft{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}20%{opacity:1;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}100%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{opacity:1;-webkit-transform:translateX(-20px);transform:translateX(-20px)}100%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}}@keyframes bounceOutRight{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}20%{opacity:1;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}100%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{0%{-webkit-transform:translateY(0);transform:translateY(0)}20%{opacity:1;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}}@keyframes bounceOutUp{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}20%{opacity:1;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}100%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}100%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}100%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}100%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}100%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}}@keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}}@keyframes fadeOutDownBig{0%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}}@keyframes fadeOutLeftBig{0%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}}@keyframes fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}}@keyframes fadeOutRightBig{0%{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}}@keyframes fadeOutUp{0%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}}@keyframes fadeOutUpBig{0%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) translateZ(0) rotateY(0) scale(1);transform:perspective(400px) translateZ(0) rotateY(0) scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(170deg) scale(1);transform:perspective(400px) translateZ(150px) rotateY(170deg) scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(.95);transform:perspective(400px) translateZ(0) rotateY(360deg) scale(.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(1);transform:perspective(400px) translateZ(0) rotateY(360deg) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) translateZ(0) rotateY(0) scale(1);-ms-transform:perspective(400px) translateZ(0) rotateY(0) scale(1);transform:perspective(400px) translateZ(0) rotateY(0) scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(170deg) scale(1);-ms-transform:perspective(400px) translateZ(150px) rotateY(170deg) scale(1);transform:perspective(400px) translateZ(150px) rotateY(170deg) scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);-ms-transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(.95);-ms-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(.95);transform:perspective(400px) translateZ(0) rotateY(360deg) scale(.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(1);-ms-transform:perspective(400px) translateZ(0) rotateY(360deg) scale(1);transform:perspective(400px) translateZ(0) rotateY(360deg) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;-ms-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-10deg);transform:perspective(400px) rotateX(-10deg)}70%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}100%{-webkit-transform:perspective(400px) rotateX(0deg);transform:perspective(400px) rotateX(0deg);opacity:1}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);-ms-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-10deg);-ms-transform:perspective(400px) rotateX(-10deg);transform:perspective(400px) rotateX(-10deg)}70%{-webkit-transform:perspective(400px) rotateX(10deg);-ms-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}100%{-webkit-transform:perspective(400px) rotateX(0deg);-ms-transform:perspective(400px) rotateX(0deg);transform:perspective(400px) rotateX(0deg);opacity:1}}.flipInX{-webkit-backface-visibility:visible!important;-ms-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-10deg);transform:perspective(400px) rotateY(-10deg)}70%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}100%{-webkit-transform:perspective(400px) rotateY(0deg);transform:perspective(400px) rotateY(0deg);opacity:1}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);-ms-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-10deg);-ms-transform:perspective(400px) rotateY(-10deg);transform:perspective(400px) rotateY(-10deg)}70%{-webkit-transform:perspective(400px) rotateY(10deg);-ms-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}100%{-webkit-transform:perspective(400px) rotateY(0deg);-ms-transform:perspective(400px) rotateY(0deg);transform:perspective(400px) rotateY(0deg);opacity:1}}.flipInY{-webkit-backface-visibility:visible!important;-ms-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px) rotateX(0deg);transform:perspective(400px) rotateX(0deg);opacity:1}100%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px) rotateX(0deg);-ms-transform:perspective(400px) rotateX(0deg);transform:perspective(400px) rotateX(0deg);opacity:1}100%{-webkit-transform:perspective(400px) rotateX(90deg);-ms-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;-ms-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px) rotateY(0deg);transform:perspective(400px) rotateY(0deg);opacity:1}100%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px) rotateY(0deg);-ms-transform:perspective(400px) rotateY(0deg);transform:perspective(400px) rotateY(0deg);opacity:1}100%{-webkit-transform:perspective(400px) rotateY(90deg);-ms-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;-ms-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translateX(100%) skewX(-30deg);transform:translateX(100%) skewX(-30deg);opacity:0}60%{-webkit-transform:translateX(-20%) skewX(30deg);transform:translateX(-20%) skewX(30deg);opacity:1}80%{-webkit-transform:translateX(0%) skewX(-15deg);transform:translateX(0%) skewX(-15deg);opacity:1}100%{-webkit-transform:translateX(0%) skewX(0deg);transform:translateX(0%) skewX(0deg);opacity:1}}@keyframes lightSpeedIn{0%{-webkit-transform:translateX(100%) skewX(-30deg);-ms-transform:translateX(100%) skewX(-30deg);transform:translateX(100%) skewX(-30deg);opacity:0}60%{-webkit-transform:translateX(-20%) skewX(30deg);-ms-transform:translateX(-20%) skewX(30deg);transform:translateX(-20%) skewX(30deg);opacity:1}80%{-webkit-transform:translateX(0%) skewX(-15deg);-ms-transform:translateX(0%) skewX(-15deg);transform:translateX(0%) skewX(-15deg);opacity:1}100%{-webkit-transform:translateX(0%) skewX(0deg);-ms-transform:translateX(0%) skewX(0deg);transform:translateX(0%) skewX(0deg);opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{0%{-webkit-transform:translateX(0%) skewX(0deg);transform:translateX(0%) skewX(0deg);opacity:1}100%{-webkit-transform:translateX(100%) skewX(-30deg);transform:translateX(100%) skewX(-30deg);opacity:0}}@keyframes lightSpeedOut{0%{-webkit-transform:translateX(0%) skewX(0deg);-ms-transform:translateX(0%) skewX(0deg);transform:translateX(0%) skewX(0deg);opacity:1}100%{-webkit-transform:translateX(100%) skewX(-30deg);-ms-transform:translateX(100%) skewX(-30deg);transform:translateX(100%) skewX(-30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}100%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotateIn{0%{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(-200deg);-ms-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}100%{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}100%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);opacity:0}100%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);opacity:0}100%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}100%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{0%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(200deg);-ms-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}}@keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}}@keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform-origin:right bottom;-ms-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes slideInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideInLeft{0%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideInRight{0%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-2000px);transform:translateX(-2000px)}}@keyframes slideOutLeft{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-2000px);-ms-transform:translateX(-2000px);transform:translateX(-2000px)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(2000px);transform:translateX(2000px)}}@keyframes slideOutRight{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(2000px);-ms-transform:translateX(2000px);transform:translateX(2000px)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-2000px);transform:translateY(-2000px)}}@keyframes slideOutUp{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}@-webkit-keyframes slideInUp{0%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideInUp{0%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(2000px);transform:translateY(2000px)}}@keyframes slideOutDown{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(2000px);-ms-transform:translateY(2000px);transform:translateY(2000px)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes hinge{0%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}80%{-webkit-transform:rotate(60deg) translateY(0);transform:rotate(60deg) translateY(0);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}100%{-webkit-transform:translateY(700px);transform:translateY(700px);opacity:0}}@keyframes hinge{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);-ms-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}80%{-webkit-transform:rotate(60deg) translateY(0);-ms-transform:rotate(60deg) translateY(0);transform:rotate(60deg) translateY(0);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}100%{-webkit-transform:translateY(700px);-ms-transform:translateY(700px);transform:translateY(700px);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translateX(-100%) rotate(-120deg);transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;-webkit-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translateX(-100%) rotate(-120deg);-ms-transform:translateX(-100%) rotate(-120deg);transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;-webkit-transform:translateX(0px) rotate(0deg);-ms-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1;-webkit-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)}100%{opacity:0;-webkit-transform:translateX(100%) rotate(120deg);transform:translateX(100%) rotate(120deg)}}@keyframes rollOut{0%{opacity:1;-webkit-transform:translateX(0px) rotate(0deg);-ms-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)}100%{opacity:0;-webkit-transform:translateX(100%) rotate(120deg);-ms-transform:translateX(100%) rotate(120deg);transform:translateX(100%) rotate(120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale(.3);-ms-transform:scale(.3);transform:scale(.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale(.1) translateY(-2000px);transform:scale(.1) translateY(-2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateY(60px);transform:scale(.475) translateY(60px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale(.1) translateY(-2000px);-ms-transform:scale(.1) translateY(-2000px);transform:scale(.1) translateY(-2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateY(60px);-ms-transform:scale(.475) translateY(60px);transform:scale(.475) translateY(60px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale(.1) translateX(-2000px);transform:scale(.1) translateX(-2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateX(48px);transform:scale(.475) translateX(48px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale(.1) translateX(-2000px);-ms-transform:scale(.1) translateX(-2000px);transform:scale(.1) translateX(-2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateX(48px);-ms-transform:scale(.475) translateX(48px);transform:scale(.475) translateX(48px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale(.1) translateX(2000px);transform:scale(.1) translateX(2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateX(-48px);transform:scale(.475) translateX(-48px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale(.1) translateX(2000px);-ms-transform:scale(.1) translateX(2000px);transform:scale(.1) translateX(2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateX(-48px);-ms-transform:scale(.475) translateX(-48px);transform:scale(.475) translateX(-48px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale(.1) translateY(2000px);transform:scale(.1) translateY(2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateY(-60px);transform:scale(.475) translateY(-60px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale(.1) translateY(2000px);-ms-transform:scale(.1) translateY(2000px);transform:scale(.1) translateY(2000px);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}60%{opacity:1;-webkit-transform:scale(.475) translateY(-60px);-ms-transform:scale(.475) translateY(-60px);transform:scale(.475) translateY(-60px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}100%{opacity:0}}@keyframes zoomOut{0%{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(.3);-ms-transform:scale(.3);transform:scale(.3)}100%{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale(.475) translateY(-60px);transform:scale(.475) translateY(-60px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateY(2000px);transform:scale(.1) translateY(2000px);-webkit-transform-origin:center bottom;transform-origin:center bottom}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale(.475) translateY(-60px);-ms-transform:scale(.475) translateY(-60px);transform:scale(.475) translateY(-60px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateY(2000px);-ms-transform:scale(.1) translateY(2000px);transform:scale(.1) translateY(2000px);-webkit-transform-origin:center bottom;-ms-transform-origin:center bottom;transform-origin:center bottom}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale(.475) translateX(42px);transform:scale(.475) translateX(42px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateX(-2000px);transform:scale(.1) translateX(-2000px);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale(.475) translateX(42px);-ms-transform:scale(.475) translateX(42px);transform:scale(.475) translateX(42px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateX(-2000px);-ms-transform:scale(.1) translateX(-2000px);transform:scale(.1) translateX(-2000px);-webkit-transform-origin:left center;-ms-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale(.475) translateX(-42px);transform:scale(.475) translateX(-42px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateX(2000px);transform:scale(.1) translateX(2000px);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale(.475) translateX(-42px);-ms-transform:scale(.475) translateX(-42px);transform:scale(.475) translateX(-42px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateX(2000px);-ms-transform:scale(.1) translateX(2000px);transform:scale(.1) translateX(2000px);-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale(.475) translateY(60px);transform:scale(.475) translateY(60px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateY(-2000px);transform:scale(.1) translateY(-2000px);-webkit-transform-origin:center top;transform-origin:center top}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale(.475) translateY(60px);-ms-transform:scale(.475) translateY(60px);transform:scale(.475) translateY(60px);-webkit-animation-timing-function:linear;animation-timing-function:linear}100%{opacity:0;-webkit-transform:scale(.1) translateY(-2000px);-ms-transform:scale(.1) translateY(-2000px);transform:scale(.1) translateY(-2000px);-webkit-transform-origin:center top;-ms-transform-origin:center top;transform-origin:center top}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}
/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

/*! normalize.css v2.1.3 | MIT License | git.io/normalize */article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{height:0;-moz-box-sizing:content-box;box-sizing:content-box}mark{color:#000;background:#ff0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\201C" "\201D" "\2018" "\2019"}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid #c0c0c0}legend{padding:0;border:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{cursor:pointer;-webkit-appearance:button}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{padding:0;box-sizing:border-box}input[type="search"]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}@media print{*{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="javascript:"]:after,a[href^="#"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}@page{margin:2cm .5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}.navbar{display:none}.table td,.table th{background-color:#fff!important}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table-bordered th,.table-bordered td{border:1px solid #ddd!important}}*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:hover,a:focus{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}img{vertical-align:middle}.img-responsive{display:block;height:auto;max-width:100%}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;height:auto;max-width:100%;padding:4px;line-height:1.428571429;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#999}h1,h2,h3{margin-top:20px;margin-bottom:10px}h1 small,h2 small,h3 small,h1 .small,h2 .small,h3 .small{font-size:65%}h4,h5,h6{margin-top:10px;margin-bottom:10px}h4 small,h5 small,h6 small,h4 .small,h5 .small,h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size: 18px;}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px;}.lead{margin-bottom:20px;font-size:16px;font-weight:200;line-height:1.4}@media(min-width:768px){.lead{font-size: 21px;}}small,.small{font-size:85%}cite{font-style:normal}.text-muted{color:#999}.text-primary{color:#428bca}.text-primary:hover{color:#3071a9}.text-warning{color:#8a6d3b}.text-warning:hover{color:#66512c}.text-danger{color:#a94442}.text-danger:hover{color:#843534}.text-success{color:#3c763d}.text-success:hover{color:#2b542c}.text-info{color:#31708f}.text-info:hover{color:#245269}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}.list-inline>li:first-child{padding-left:0}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.428571429}dt{font-weight:bold}dd{margin-left:0}@media(min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}.dl-horizontal dd:before,.dl-horizontal dd:after{display:table;content:" "}.dl-horizontal dd:after{clear:both}.dl-horizontal dd:before,.dl-horizontal dd:after{display:table;content:" "}.dl-horizontal dd:after{clear:both}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #999}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #eee}blockquote p{font-size:17.5px;font-weight:300;line-height:1.25}blockquote p:last-child{margin-bottom:0}blockquote small,blockquote .small{display:block;line-height:1.428571429;color:#999}blockquote small:before,blockquote .small:before{content:'\2014 \00A0'}blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0}blockquote.pull-right p,blockquote.pull-right small,blockquote.pull-right .small{text-align:right}blockquote.pull-right small:before,blockquote.pull-right .small:before{content:''}blockquote.pull-right small:after,blockquote.pull-right .small:after{content:'\00A0 \2014'}blockquote:before,blockquote:after{content:""}address{margin-bottom:20px;font-style:normal;line-height:1.428571429}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Courier New",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;white-space:nowrap;background-color:#f9f2f4;border-radius:4px}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.428571429;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.container:before,.container:after{display:table;content:" "}.container:after{clear:both}.container:before,.container:after{display:table;content:" "}.container:after{clear:both}@media(min-width:768px){.container{width:750px}}@media(min-width:992px){.container{width:970px}}@media(min-width:1200px){.container{width:1170px}}.row{margin-right:-15px;margin-left:-15px}.row:before,.row:after{display:table;content:" "}.row:after{clear:both}.row:before,.row:after{display:table;content:" "}.row:after{clear:both}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666666666666%}.col-xs-10{width:83.33333333333334%}.col-xs-9{width:75%}.col-xs-8{width:66.66666666666666%}.col-xs-7{width:58.333333333333336%}.col-xs-6{width:50%}.col-xs-5{width:41.66666666666667%}.col-xs-4{width:33.33333333333333%}.col-xs-3{width:25%}.col-xs-2{width:16.666666666666664%}.col-xs-1{width:8.333333333333332%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666666666666%}.col-xs-pull-10{right:83.33333333333334%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666666666666%}.col-xs-pull-7{right:58.333333333333336%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666666666667%}.col-xs-pull-4{right:33.33333333333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.666666666666664%}.col-xs-pull-1{right:8.333333333333332%}.col-xs-pull-0{right:0}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666666666666%}.col-xs-push-10{left:83.33333333333334%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666666666666%}.col-xs-push-7{left:58.333333333333336%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666666666667%}.col-xs-push-4{left:33.33333333333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.666666666666664%}.col-xs-push-1{left:8.333333333333332%}.col-xs-push-0{left:0}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666666666666%}.col-xs-offset-10{margin-left:83.33333333333334%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666666666666%}.col-xs-offset-7{margin-left:58.333333333333336%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666666666667%}.col-xs-offset-4{margin-left:33.33333333333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.666666666666664%}.col-xs-offset-1{margin-left:8.333333333333332%}.col-xs-offset-0{margin-left:0}@media(min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666666666666%}.col-sm-10{width:83.33333333333334%}.col-sm-9{width:75%}.col-sm-8{width:66.66666666666666%}.col-sm-7{width:58.333333333333336%}.col-sm-6{width:50%}.col-sm-5{width:41.66666666666667%;}.col-sm-4{width:33.33333333333333%}.col-sm-3{width:25%}.col-sm-2{width:16.666666666666664%}.col-sm-1{width:8.333333333333332%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666666666666%}.col-sm-pull-10{right:83.33333333333334%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666666666666%}.col-sm-pull-7{right:58.333333333333336%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666666666667%}.col-sm-pull-4{right:33.33333333333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.666666666666664%}.col-sm-pull-1{right:8.333333333333332%}.col-sm-pull-0{right:0}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666666666666%}.col-sm-push-10{left:83.33333333333334%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666666666666%}.col-sm-push-7{left:58.333333333333336%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666666666667%}.col-sm-push-4{left:33.33333333333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.666666666666664%}.col-sm-push-1{left:8.333333333333332%}.col-sm-push-0{left:0}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666666666666%}.col-sm-offset-10{margin-left:83.33333333333334%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666666666666%}.col-sm-offset-7{margin-left:58.333333333333336%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666666666667%}.col-sm-offset-4{margin-left:33.33333333333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.666666666666664%}.col-sm-offset-1{margin-left:8.333333333333332%}.col-sm-offset-0{margin-left:0}}@media(min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666666666666%}.col-md-10{width:83.33333333333334%}.col-md-9{width:75%}.col-md-8{width:66.66666666666666%}.col-md-7{width:58.333333333333336%}.col-md-6{width:50%}.col-md-5{width:41.66666666666667%}.col-md-4{width:33.33333333333333%}.col-md-3{width:25%}.col-md-2{width:16.666666666666664%}.col-md-1{width:8.333333333333332%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666666666666%}.col-md-pull-10{right:83.33333333333334%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666666666666%}.col-md-pull-7{right:58.333333333333336%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666666666667%}.col-md-pull-4{right:33.33333333333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.666666666666664%}.col-md-pull-1{right:8.333333333333332%}.col-md-pull-0{right:0}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666666666666%}.col-md-push-10{left:83.33333333333334%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666666666666%}.col-md-push-7{left:58.333333333333336%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666666666667%}.col-md-push-4{left:33.33333333333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.666666666666664%}.col-md-push-1{left:8.333333333333332%}.col-md-push-0{left:0}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666666666666%}.col-md-offset-10{margin-left:83.33333333333334%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666666666666%}.col-md-offset-7{margin-left:58.333333333333336%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666666666667%}.col-md-offset-4{margin-left:33.33333333333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.666666666666664%}.col-md-offset-1{margin-left:8.333333333333332%}.col-md-offset-0{margin-left:0}}@media(min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666666666666%}.col-lg-10{width:83.33333333333334%}.col-lg-9{width:75%}.col-lg-8{width:66.66666666666666%}.col-lg-7{width:58.333333333333336%}.col-lg-6{width:50%}.col-lg-5{width:41.66666666666667%}.col-lg-4{width:33.33333333333333%}.col-lg-3{width:25%}.col-lg-2{width:16.666666666666664%}.col-lg-1{width:8.333333333333332%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666666666666%}.col-lg-pull-10{right:83.33333333333334%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666666666666%}.col-lg-pull-7{right:58.333333333333336%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666666666667%}.col-lg-pull-4{right:33.33333333333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.666666666666664%}.col-lg-pull-1{right:8.333333333333332%}.col-lg-pull-0{right:0}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666666666666%}.col-lg-push-10{left:83.33333333333334%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666666666666%}.col-lg-push-7{left:58.333333333333336%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666666666667%}.col-lg-push-4{left:33.33333333333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.666666666666664%}.col-lg-push-1{left:8.333333333333332%}.col-lg-push-0{left:0}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666666666666%}.col-lg-offset-10{margin-left:83.33333333333334%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666666666666%}.col-lg-offset-7{margin-left:58.333333333333336%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666666666667%}.col-lg-offset-4{margin-left:33.33333333333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.666666666666664%}.col-lg-offset-1{margin-left:8.333333333333332%}.col-lg-offset-0{margin-left:0}}table{max-width:100%;background-color:transparent}th{text-align:left}.table{width:100%;margin-bottom:20px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.428571429;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background-color:#f9f9f9}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background-color:#f5f5f5}table col[class*="col-"]{position:static;display:table-column;float:none}table td[class*="col-"],table th[class*="col-"]{display:table-cell;float:none}.table>thead>tr>.active,.table>tbody>tr>.active,.table>tfoot>tr>.active,.table>thead>.active>td,.table>tbody>.active>td,.table>tfoot>.active>td,.table>thead>.active>th,.table>tbody>.active>th,.table>tfoot>.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>.active:hover,.table-hover>tbody>.active:hover>td,.table-hover>tbody>.active:hover>th{background-color:#e8e8e8}.table>thead>tr>.success,.table>tbody>tr>.success,.table>tfoot>tr>.success,.table>thead>.success>td,.table>tbody>.success>td,.table>tfoot>.success>td,.table>thead>.success>th,.table>tbody>.success>th,.table>tfoot>.success>th{background-color:#dff0d8}.table-hover>tbody>tr>.success:hover,.table-hover>tbody>.success:hover>td,.table-hover>tbody>.success:hover>th{background-color:#d0e9c6}.table>thead>tr>.danger,.table>tbody>tr>.danger,.table>tfoot>tr>.danger,.table>thead>.danger>td,.table>tbody>.danger>td,.table>tfoot>.danger>td,.table>thead>.danger>th,.table>tbody>.danger>th,.table>tfoot>.danger>th{background-color:#f2dede}.table-hover>tbody>tr>.danger:hover,.table-hover>tbody>.danger:hover>td,.table-hover>tbody>.danger:hover>th{background-color:#ebcccc}.table>thead>tr>.warning,.table>tbody>tr>.warning,.table>tfoot>tr>.warning,.table>thead>.warning>td,.table>tbody>.warning>td,.table>tfoot>.warning>td,.table>thead>.warning>th,.table>tbody>.warning>th,.table>tfoot>.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>.warning:hover,.table-hover>tbody>.warning:hover>td,.table-hover>tbody>.warning:hover>th{background-color:#faf2cc}@media(max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-x:scroll;overflow-y:hidden;border:1px solid #ddd;-ms-overflow-style:-ms-autohiding-scrollbar;-webkit-overflow-scrolling:touch}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;margin-bottom:5px;font-weight:bold}input[type="search"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type="radio"],input[type="checkbox"]{margin:4px 0 0;margin-top:1px \9;line-height:normal}input[type="file"]{display:block}select[multiple],select[size]{height:auto}select optgroup{font-family:inherit;font-size:inherit;font-style:inherit}input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}input[type="number"]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button{height:auto}output{display:block;padding-top:7px;font-size:14px;line-height:1.428571429;color:#555;vertical-align:middle}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.428571429;color:#555;vertical-align:middle;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-control:-moz-placeholder{color:#999}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee}textarea.form-control{height:auto}.form-group{margin-bottom: 15px;}.radio,.checkbox{display:block;min-height:20px;padding-left:20px;margin-top:10px;margin-bottom:10px;vertical-align:middle}.radio label,.checkbox label{display:inline;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type="radio"],.radio-inline input[type="radio"],.checkbox input[type="checkbox"],.checkbox-inline input[type="checkbox"]{float:left;margin-left:-20px}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;font-weight:normal;vertical-align:middle;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type="radio"][disabled],input[type="checkbox"][disabled],.radio[disabled],.radio-inline[disabled],.checkbox[disabled],.checkbox-inline[disabled],fieldset[disabled] input[type="radio"],fieldset[disabled] input[type="checkbox"],fieldset[disabled] .radio,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm{height:auto}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg{height:auto}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.form-control-static{margin-bottom:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media(min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block}.form-inline select.form-control{width:auto}.form-inline .radio,.form-inline .checkbox{display:inline-block;padding-left:0;margin-top:0;margin-bottom:0}.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"]{float:none;margin-left:0}}.form-horizontal .control-label,.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}.form-horizontal .form-group:before,.form-horizontal .form-group:after{display:table;content:" "}.form-horizontal .form-group:after{clear:both}.form-horizontal .form-group:before,.form-horizontal .form-group:after{display:table;content:" "}.form-horizontal .form-group:after{clear:both}.form-horizontal .form-control-static{padding-top:7px}@media(min-width:768px){.form-horizontal .control-label{text-align:right}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:normal;line-height:1.428571429;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus{color:#333;text-decoration:none}.btn:active,.btn.active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{pointer-events:none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:hover,.btn-default:focus,.btn-default:active,.btn-default.active,.open .dropdown-toggle.btn-default{color:#333;background-color:#ebebeb;border-color:#adadad}.btn-default:active,.btn-default.active,.open .dropdown-toggle.btn-default{background-image:none}.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#fff}.btn-primary{color:#fff;background-color:#428bca;border-color:#357ebd}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.open .dropdown-toggle.btn-primary{color:#fff;background-color:#3276b1;border-color:#285e8e}.btn-primary:active,.btn-primary.active,.open .dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{background-color:#428bca;border-color:#357ebd}.btn-primary .badge{color:#428bca;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.open .dropdown-toggle.btn-warning{color:#fff;background-color:#ed9c28;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open .dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.open .dropdown-toggle.btn-danger{color:#fff;background-color:#d2322d;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open .dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.open .dropdown-toggle.btn-success{color:#fff;background-color:#47a447;border-color:#398439}.btn-success:active,.btn-success.active,.open .dropdown-toggle.btn-success{background-image:none}.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.open .dropdown-toggle.btn-info{color:#fff;background-color:#39b3d7;border-color:#269abc}.btn-info:active,.btn-info.active,.open .dropdown-toggle.btn-info{background-image:none}.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-link{font-weight:normal;color:#428bca;cursor:pointer;border-radius:0}.btn-link,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#2a6496;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#999;text-decoration:none}.btn-lg{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%;padding-right:0;padding-left:0}.btn-block+.btn-block{margin-top:5px}input[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}@font-face{font-family:'Glyphicons Halflings';src:url('../fonts/glyphicons-halflings-regular.eot');src:url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('../fonts/glyphicons-halflings-regular.woff') format('woff'),url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;line-height:1;-moz-osx-font-smoothing:grayscale}.glyphicon:empty{width:1em}.glyphicon-asterisk:before{content:"\2a"}.glyphicon-plus:before{content:"\2b"}.glyphicon-euro:before{content:"\20ac"}.glyphicon-minus:before{content:"\2212"}.glyphicon-cloud:before{content:"\2601"}.glyphicon-envelope:before{content:"\2709"}.glyphicon-pencil:before{content:"\270f"}.glyphicon-glass:before{content:"\e001"}.glyphicon-music:before{content:"\e002"}.glyphicon-search:before{content:"\e003"}.glyphicon-heart:before{content:"\e005"}.glyphicon-star:before{content:"\e006"}.glyphicon-star-empty:before{content:"\e007"}.glyphicon-user:before{content:"\e008"}.glyphicon-film:before{content:"\e009"}.glyphicon-th-large:before{content:"\e010"}.glyphicon-th:before{content:"\e011"}.glyphicon-th-list:before{content:"\e012"}.glyphicon-ok:before{content:"\e013"}.glyphicon-remove:before{content:"\e014"}.glyphicon-zoom-in:before{content:"\e015"}.glyphicon-zoom-out:before{content:"\e016"}.glyphicon-off:before{content:"\e017"}.glyphicon-signal:before{content:"\e018"}.glyphicon-cog:before{content:"\e019"}.glyphicon-trash:before{content:"\e020"}.glyphicon-home:before{content:"\e021"}.glyphicon-file:before{content:"\e022"}.glyphicon-time:before{content:"\e023"}.glyphicon-road:before{content:"\e024"}.glyphicon-download-alt:before{content:"\e025"}.glyphicon-download:before{content:"\e026"}.glyphicon-upload:before{content:"\e027"}.glyphicon-inbox:before{content:"\e028"}.glyphicon-play-circle:before{content:"\e029"}.glyphicon-repeat:before{content:"\e030"}.glyphicon-refresh:before{content:"\e031"}.glyphicon-list-alt:before{content:"\e032"}.glyphicon-lock:before{content:"\e033"}.glyphicon-flag:before{content:"\e034"}.glyphicon-headphones:before{content:"\e035"}.glyphicon-volume-off:before{content:"\e036"}.glyphicon-volume-down:before{content:"\e037"}.glyphicon-volume-up:before{content:"\e038"}.glyphicon-qrcode:before{content:"\e039"}.glyphicon-barcode:before{content:"\e040"}.glyphicon-tag:before{content:"\e041"}.glyphicon-tags:before{content:"\e042"}.glyphicon-book:before{content:"\e043"}.glyphicon-bookmark:before{content:"\e044"}.glyphicon-print:before{content:"\e045"}.glyphicon-camera:before{content:"\e046"}.glyphicon-font:before{content:"\e047"}.glyphicon-bold:before{content:"\e048"}.glyphicon-italic:before{content:"\e049"}.glyphicon-text-height:before{content:"\e050"}.glyphicon-text-width:before{content:"\e051"}.glyphicon-align-left:before{content:"\e052"}.glyphicon-align-center:before{content:"\e053"}.glyphicon-align-right:before{content:"\e054"}.glyphicon-align-justify:before{content:"\e055"}.glyphicon-list:before{content:"\e056"}.glyphicon-indent-left:before{content:"\e057"}.glyphicon-indent-right:before{content:"\e058"}.glyphicon-facetime-video:before{content:"\e059"}.glyphicon-picture:before{content:"\e060"}.glyphicon-map-marker:before{content:"\e062"}.glyphicon-adjust:before{content:"\e063"}.glyphicon-tint:before{content:"\e064"}.glyphicon-edit:before{content:"\e065"}.glyphicon-share:before{content:"\e066"}.glyphicon-check:before{content:"\e067"}.glyphicon-move:before{content:"\e068"}.glyphicon-step-backward:before{content:"\e069"}.glyphicon-fast-backward:before{content:"\e070"}.glyphicon-backward:before{content:"\e071"}.glyphicon-play:before{content:"\e072"}.glyphicon-pause:before{content:"\e073"}.glyphicon-stop:before{content:"\e074"}.glyphicon-forward:before{content:"\e075"}.glyphicon-fast-forward:before{content:"\e076"}.glyphicon-step-forward:before{content:"\e077"}.glyphicon-eject:before{content:"\e078"}.glyphicon-chevron-left:before{content:"\e079"}.glyphicon-chevron-right:before{content:"\e080"}.glyphicon-plus-sign:before{content:"\e081"}.glyphicon-minus-sign:before{content:"\e082"}.glyphicon-remove-sign:before{content:"\e083"}.glyphicon-ok-sign:before{content:"\e084"}.glyphicon-question-sign:before{content:"\e085"}.glyphicon-info-sign:before{content:"\e086"}.glyphicon-screenshot:before{content:"\e087"}.glyphicon-remove-circle:before{content:"\e088"}.glyphicon-ok-circle:before{content:"\e089"}.glyphicon-ban-circle:before{content:"\e090"}.glyphicon-arrow-left:before{content:"\e091"}.glyphicon-arrow-right:before{content:"\e092"}.glyphicon-arrow-up:before{content:"\e093"}.glyphicon-arrow-down:before{content:"\e094"}.glyphicon-share-alt:before{content:"\e095"}.glyphicon-resize-full:before{content:"\e096"}.glyphicon-resize-small:before{content:"\e097"}.glyphicon-exclamation-sign:before{content:"\e101"}.glyphicon-gift:before{content:"\e102"}.glyphicon-leaf:before{content:"\e103"}.glyphicon-fire:before{content:"\e104"}.glyphicon-eye-open:before{content:"\e105"}.glyphicon-eye-close:before{content:"\e106"}.glyphicon-warning-sign:before{content:"\e107"}.glyphicon-plane:before{content:"\e108"}.glyphicon-calendar:before{content:"\e109"}.glyphicon-random:before{content:"\e110"}.glyphicon-comment:before{content:"\e111"}.glyphicon-magnet:before{content:"\e112"}.glyphicon-chevron-up:before{content:"\e113"}.glyphicon-chevron-down:before{content:"\e114"}.glyphicon-retweet:before{content:"\e115"}.glyphicon-shopping-cart:before{content:"\e116"}.glyphicon-folder-close:before{content:"\e117"}.glyphicon-folder-open:before{content:"\e118"}.glyphicon-resize-vertical:before{content:"\e119"}.glyphicon-resize-horizontal:before{content:"\e120"}.glyphicon-hdd:before{content:"\e121"}.glyphicon-bullhorn:before{content:"\e122"}.glyphicon-bell:before{content:"\e123"}.glyphicon-certificate:before{content:"\e124"}.glyphicon-thumbs-up:before{content:"\e125"}.glyphicon-thumbs-down:before{content:"\e126"}.glyphicon-hand-right:before{content:"\e127"}.glyphicon-hand-left:before{content:"\e128"}.glyphicon-hand-up:before{content:"\e129"}.glyphicon-hand-down:before{content:"\e130"}.glyphicon-circle-arrow-right:before{content:"\e131"}.glyphicon-circle-arrow-left:before{content:"\e132"}.glyphicon-circle-arrow-up:before{content:"\e133"}.glyphicon-circle-arrow-down:before{content:"\e134"}.glyphicon-globe:before{content:"\e135"}.glyphicon-wrench:before{content:"\e136"}.glyphicon-tasks:before{content:"\e137"}.glyphicon-filter:before{content:"\e138"}.glyphicon-briefcase:before{content:"\e139"}.glyphicon-fullscreen:before{content:"\e140"}.glyphicon-dashboard:before{content:"\e141"}.glyphicon-paperclip:before{content:"\e142"}.glyphicon-heart-empty:before{content:"\e143"}.glyphicon-link:before{content:"\e144"}.glyphicon-phone:before{content:"\e145"}.glyphicon-pushpin:before{content:"\e146"}.glyphicon-usd:before{content:"\e148"}.glyphicon-gbp:before{content:"\e149"}.glyphicon-sort:before{content:"\e150"}.glyphicon-sort-by-alphabet:before{content:"\e151"}.glyphicon-sort-by-alphabet-alt:before{content:"\e152"}.glyphicon-sort-by-order:before{content:"\e153"}.glyphicon-sort-by-order-alt:before{content:"\e154"}.glyphicon-sort-by-attributes:before{content:"\e155"}.glyphicon-sort-by-attributes-alt:before{content:"\e156"}.glyphicon-unchecked:before{content:"\e157"}.glyphicon-expand:before{content:"\e158"}.glyphicon-collapse-down:before{content:"\e159"}.glyphicon-collapse-up:before{content:"\e160"}.glyphicon-log-in:before{content:"\e161"}.glyphicon-flash:before{content:"\e162"}.glyphicon-log-out:before{content:"\e163"}.glyphicon-new-window:before{content:"\e164"}.glyphicon-record:before{content:"\e165"}.glyphicon-save:before{content:"\e166"}.glyphicon-open:before{content:"\e167"}.glyphicon-saved:before{content:"\e168"}.glyphicon-import:before{content:"\e169"}.glyphicon-export:before{content:"\e170"}.glyphicon-send:before{content:"\e171"}.glyphicon-floppy-disk:before{content:"\e172"}.glyphicon-floppy-saved:before{content:"\e173"}.glyphicon-floppy-remove:before{content:"\e174"}.glyphicon-floppy-save:before{content:"\e175"}.glyphicon-floppy-open:before{content:"\e176"}.glyphicon-credit-card:before{content:"\e177"}.glyphicon-transfer:before{content:"\e178"}.glyphicon-cutlery:before{content:"\e179"}.glyphicon-header:before{content:"\e180"}.glyphicon-compressed:before{content:"\e181"}.glyphicon-earphone:before{content:"\e182"}.glyphicon-phone-alt:before{content:"\e183"}.glyphicon-tower:before{content:"\e184"}.glyphicon-stats:before{content:"\e185"}.glyphicon-sd-video:before{content:"\e186"}.glyphicon-hd-video:before{content:"\e187"}.glyphicon-subtitles:before{content:"\e188"}.glyphicon-sound-stereo:before{content:"\e189"}.glyphicon-sound-dolby:before{content:"\e190"}.glyphicon-sound-5-1:before{content:"\e191"}.glyphicon-sound-6-1:before{content:"\e192"}.glyphicon-sound-7-1:before{content:"\e193"}.glyphicon-copyright-mark:before{content:"\e194"}.glyphicon-registration-mark:before{content:"\e195"}.glyphicon-cloud-download:before{content:"\e197"}.glyphicon-cloud-upload:before{content:"\e198"}.glyphicon-tree-conifer:before{content:"\e199"}.glyphicon-tree-deciduous:before{content:"\e200"}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown{position:relative;}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;list-style:none;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,0.175);box-shadow:0 6px 12px rgba(0,0,0,0.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.428571429;color:#333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{color:#262626;text-decoration:none;background-color: none;}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;background-color:#428bca;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#999}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.428571429;color:#999}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:""}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}@media(min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{z-index:2}.btn-group>.btn:focus,.btn-group-vertical>.btn:focus{outline:0}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar:before,.btn-toolbar:after{display:table;content:" "}.btn-toolbar:after{clear:both}.btn-toolbar:before,.btn-toolbar:after{display:table;content:" "}.btn-toolbar:after{clear:both}.btn-toolbar .btn-group{float:left}.btn-toolbar>.btn+.btn,.btn-toolbar>.btn-group+.btn,.btn-toolbar>.btn+.btn-group,.btn-toolbar>.btn-group+.btn-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child>.btn:last-child,.btn-group>.btn-group:first-child>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-lg>.btn{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after{display:table;content:" "}.btn-group-vertical>.btn-group:after{clear:both}.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after{display:table;content:" "}.btn-group-vertical>.btn-group:after{clear:both}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-bottom-left-radius:4px;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child>.btn:last-child,.btn-group-vertical>.btn-group:first-child>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;border-collapse:separate;table-layout:fixed}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}[data-toggle="buttons"]>.btn>input[type="radio"],[data-toggle="buttons"]>.btn>input[type="checkbox"]{display:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*="col-"]{float:none;padding-right:0;padding-left:0}.input-group .form-control{width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type="radio"],.input-group-addon input[type="checkbox"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;white-space:nowrap}.input-group-btn:first-child>.btn{margin-right:-1px}.input-group-btn:last-child>.btn{margin-left:-1px}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-4px}.input-group-btn>.btn:hover,.input-group-btn>.btn:active{z-index:2}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav:before,.nav:after{display:table;content:" "}.nav:after{clear:both}.nav:before,.nav:after{display:table;content:" "}.nav:after{clear:both}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#999}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#999;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#428bca}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.428571429;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media(min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media(min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#428bca}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media(min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}@media(min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.navbar:before,.navbar:after{display:table;content:" "}.navbar:after{clear:both}.navbar:before,.navbar:after{display:table;content:" "}.navbar:after{clear:both}@media(min-width:768px){.navbar{border-radius:4px}}.navbar-header:before,.navbar-header:after{display:table;content:" "}.navbar-header:after{clear:both}.navbar-header:before,.navbar-header:after{display:table;content:" "}.navbar-header:after{clear:both}@media(min-width:768px){.navbar-header{float:left}}.navbar-collapse{max-height:340px;padding-right:15px;padding-left:15px;overflow-x:visible;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse:before,.navbar-collapse:after{display:table;content:" "}.navbar-collapse:after{clear:both}.navbar-collapse:before,.navbar-collapse:after{display:table;content:" "}.navbar-collapse:after{clear:both}.navbar-collapse.in{overflow-y:auto}@media(min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-right:0;padding-left:0}}.container>.navbar-header,.container>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media(min-width:768px){.container>.navbar-header,.container>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media(min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media(min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}@media(min-width:768px){.navbar>.container .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media(min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media(max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media(min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}.navbar-nav.navbar-right:last-child{margin-right:-15px}}@media(min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1)}@media(min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block}.navbar-form select.form-control{width:auto}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;padding-left:0;margin-top:0;margin-bottom:0}.navbar-form .radio input[type="radio"],.navbar-form .checkbox input[type="checkbox"]{float:none;margin-left:0}}@media(max-width:767px){.navbar-form .form-group{margin-bottom:5px}}@media(min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-form.navbar-right:last-child{margin-right:-15px}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-nav.pull-right>li>.dropdown-menu,.navbar-nav>li>.dropdown-menu.pull-right{right:0;left:auto}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media(min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}.navbar-text.navbar-right:last-child{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#ccc}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{color:#555;background-color:#e7e7e7}@media(max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#999}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#999}.navbar-inverse .navbar-nav>li>a{color:#999}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{color:#fff;background-color:#080808}@media(max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#999}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#999}.navbar-inverse .navbar-link:hover{color:#fff}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:"/\00a0"}.breadcrumb>.active{color:#999}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.428571429;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{background-color:#eee}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{z-index:2;color:#fff;cursor:default;background-color:#428bca;border-color:#428bca}.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#999;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager:before,.pager:after{display:table;content:" "}.pager:after{clear:both}.pager:before,.pager:after{display:table;content:" "}.pager:after{clear:both}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#999;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.label[href]:hover,.label[href]:focus{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#999}.label-default[href]:hover,.label-default[href]:focus{background-color:#808080}.label-primary{background-color:#428bca}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#3071a9}.label-success{background-color:#5cb85c}.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;background-color:#999;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}a.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#428bca;background-color:#fff}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding:30px;margin-bottom:30px;font-size:21px;font-weight:200;line-height:2.1428571435;color:inherit;background-color:#eee}.jumbotron h1,.jumbotron .h1{line-height:1;color:inherit}.jumbotron p{line-height:1.4}.container .jumbotron{border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron{padding-right:60px;padding-left:60px}.jumbotron h1,.jumbotron .h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.428571429;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.thumbnail>img,.thumbnail a>img{display:block;height:auto;max-width:100%;margin-right:auto;margin-left:auto}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#428bca}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable{padding-right:35px}.alert-dismissable .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#428bca;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-transition:width .6s ease;transition:width .6s ease}.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.media,.media-body{overflow:hidden;zoom:1}.media,.media .media{margin-top:15px}.media:first-child{margin-top:0}.media-object{display:block}.media-heading{margin: 0 0 5px;}.media>.pull-left{margin-right:10px}.media>.pull-right{margin-left:10px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}a.list-group-item{color:#555}a.list-group-item .list-group-item-heading{color:#333}a.list-group-item:hover,a.list-group-item:focus{text-decoration:none;background-color:#f5f5f5}a.list-group-item.active,a.list-group-item.active:hover,a.list-group-item.active:focus{z-index:2;color:#fff;background-color:#428bca;border-color:#428bca}a.list-group-item.active .list-group-item-heading,a.list-group-item.active:hover .list-group-item-heading,a.list-group-item.active:focus .list-group-item-heading{color:inherit}a.list-group-item.active .list-group-item-text,a.list-group-item.active:hover .list-group-item-text,a.list-group-item.active:focus .list-group-item-text{color:#e1edf7}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-body:before,.panel-body:after{display:table;content:" "}.panel-body:after{clear:both}.panel-body:before,.panel-body:after{display:table;content:" "}.panel-body:after{clear:both}.panel>.list-group{margin-bottom:0}.panel>.list-group .list-group-item{border-width:1px 0}.panel>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}.panel>.list-group .list-group-item:last-child{border-bottom:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive{border-top:1px solid #ddd}.panel>.table>tbody:first-child th,.panel>.table>tbody:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:last-child>th,.panel>.table-responsive>.table-bordered>thead>tr:last-child>th,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th,.panel>.table-bordered>thead>tr:last-child>td,.panel>.table-responsive>.table-bordered>thead>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel-group .panel{margin-bottom:0;overflow:hidden;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse .panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse .panel-body{border-top-color:#ddd}.panel-default>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#428bca}.panel-primary>.panel-heading{color:#fff;background-color:#428bca;border-color:#428bca}.panel-primary>.panel-heading+.panel-collapse .panel-body{border-top-color:#428bca}.panel-primary>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#428bca}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse .panel-body{border-top-color:#d6e9c6}.panel-success>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#d6e9c6}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse .panel-body{border-top-color:#faebcc}.panel-warning>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse .panel-body{border-top-color:#ebccd1}.panel-danger>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#ebccd1}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse .panel-body{border-top-color:#bce8f1}.panel-info>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#bce8f1}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;display:none;overflow:auto;overflow-y:scroll}.modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.modal-dialog{position:relative;z-index:1050;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1030;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{min-height:16.428571429px;padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.428571429}.modal-body{position:relative;padding:20px}.modal-footer{padding:19px 20px 20px;margin-top:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer:before,.modal-footer:after{display:table;content:" "}.modal-footer:after{clear:both}.modal-footer:before,.modal-footer:after{display:table;content:" "}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}@media screen and (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}}.tooltip{position:absolute;z-index:1030;display:block;font-size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0);visibility:visible}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-top-color:#000;border-width:5px 5px 0}.tooltip.top-left .tooltip-arrow{bottom:0;left:5px;border-top-color:#000;border-width:5px 5px 0}.tooltip.top-right .tooltip-arrow{right:5px;bottom:0;border-top-color:#000;border-width:5px 5px 0}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-right-color:#000;border-width:5px 5px 5px 0}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-left-color:#000;border-width:5px 0 5px 5px}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-bottom-color:#000;border-width:0 5px 5px}.tooltip.bottom-left .tooltip-arrow{top:0;left:5px;border-bottom-color:#000;border-width:0 5px 5px}.tooltip.bottom-right .tooltip-arrow{top:0;right:5px;border-bottom-color:#000;border-width:0 5px 5px}.popover{position:absolute;top:0;left:0;z-index:1010;display:none;max-width:276px;padding:1px;text-align:left;white-space:normal;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);background-clip:padding-box}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;font-weight:normal;line-height:18px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover .arrow,.popover .arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover .arrow{border-width:11px}.popover .arrow:after{border-width:10px;content:""}.popover.top .arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);border-bottom-width:0}.popover.top .arrow:after{bottom:1px;margin-left:-10px;border-top-color:#fff;border-bottom-width:0;content:" "}.popover.right .arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,0.25);border-left-width:0}.popover.right .arrow:after{bottom:-10px;left:1px;border-right-color:#fff;border-left-width:0;content:" "}.popover.bottom .arrow{top:-11px;left:50%;margin-left:-11px;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);border-top-width:0}.popover.bottom .arrow:after{top:1px;margin-left:-10px;border-bottom-color:#fff;border-top-width:0;content:" "}.popover.left .arrow{top:50%;right:-11px;margin-top:-11px;border-left-color:#999;border-left-color:rgba(0,0,0,0.25);border-right-width:0}.popover.left .arrow:after{right:1px;bottom:-10px;border-left-color:#fff;border-right-width:0;content:" "}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;height:auto;max-width:100%;line-height:1}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6);opacity:.5;filter:alpha(opacity=50)}.carousel-control.left{background-image:-webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.5) 0),color-stop(rgba(0,0,0,0.0001) 100%));background-image:linear-gradient(to right,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1)}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.0001) 0),color-stop(rgba(0,0,0,0.5) 100%));background-image:linear-gradient(to right,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1)}.carousel-control:hover,.carousel-control:focus{color:#fff;text-decoration:none;outline:0;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;margin-top:-10px;margin-left:-10px;font-family:serif}.carousel-control .icon-prev:before{content:'\2039'}.carousel-control .icon-next:before{content:'\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000 \9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicons-chevron-left,.carousel-control .glyphicons-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-15px;margin-left:-15px;font-size:30px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after{display:table;content:" "}.clearfix:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important;visibility:hidden!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,tr.visible-xs,th.visible-xs,td.visible-xs{display:none!important}@media(max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table}tr.visible-xs{display:table-row!important}th.visible-xs,td.visible-xs{display:table-cell!important}}@media(min-width:768px) and (max-width:991px){.visible-xs.visible-sm{display:block!important}table.visible-xs.visible-sm{display:table}tr.visible-xs.visible-sm{display:table-row!important}th.visible-xs.visible-sm,td.visible-xs.visible-sm{display:table-cell!important}}@media(min-width:992px) and (max-width:1199px){.visible-xs.visible-md{display:block!important}table.visible-xs.visible-md{display:table}tr.visible-xs.visible-md{display:table-row!important}th.visible-xs.visible-md,td.visible-xs.visible-md{display:table-cell!important}}@media(min-width:1200px){.visible-xs.visible-lg{display:block!important}table.visible-xs.visible-lg{display:table}tr.visible-xs.visible-lg{display:table-row!important}th.visible-xs.visible-lg,td.visible-xs.visible-lg{display:table-cell!important}}.visible-sm,tr.visible-sm,th.visible-sm,td.visible-sm{display:none!important}@media(max-width:767px){.visible-sm.visible-xs{display:block!important}table.visible-sm.visible-xs{display:table}tr.visible-sm.visible-xs{display:table-row!important}th.visible-sm.visible-xs,td.visible-sm.visible-xs{display:table-cell!important}}@media(min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table}tr.visible-sm{display:table-row!important}th.visible-sm,td.visible-sm{display:table-cell!important}}@media(min-width:992px) and (max-width:1199px){.visible-sm.visible-md{display:block!important}table.visible-sm.visible-md{display:table}tr.visible-sm.visible-md{display:table-row!important}th.visible-sm.visible-md,td.visible-sm.visible-md{display:table-cell!important}}@media(min-width:1200px){.visible-sm.visible-lg{display:block!important}table.visible-sm.visible-lg{display:table}tr.visible-sm.visible-lg{display:table-row!important}th.visible-sm.visible-lg,td.visible-sm.visible-lg{display:table-cell!important}}.visible-md,tr.visible-md,th.visible-md,td.visible-md{display:none!important}@media(max-width:767px){.visible-md.visible-xs{display:block!important}table.visible-md.visible-xs{display:table}tr.visible-md.visible-xs{display:table-row!important}th.visible-md.visible-xs,td.visible-md.visible-xs{display:table-cell!important}}@media(min-width:768px) and (max-width:991px){.visible-md.visible-sm{display:block!important}table.visible-md.visible-sm{display:table}tr.visible-md.visible-sm{display:table-row!important}th.visible-md.visible-sm,td.visible-md.visible-sm{display:table-cell!important}}@media(min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table}tr.visible-md{display:table-row!important}th.visible-md,td.visible-md{display:table-cell!important}}@media(min-width:1200px){.visible-md.visible-lg{display:block!important}table.visible-md.visible-lg{display:table}tr.visible-md.visible-lg{display:table-row!important}th.visible-md.visible-lg,td.visible-md.visible-lg{display:table-cell!important}}.visible-lg,tr.visible-lg,th.visible-lg,td.visible-lg{display:none!important}@media(max-width:767px){.visible-lg.visible-xs{display:block!important}table.visible-lg.visible-xs{display:table}tr.visible-lg.visible-xs{display:table-row!important}th.visible-lg.visible-xs,td.visible-lg.visible-xs{display:table-cell!important}}@media(min-width:768px) and (max-width:991px){.visible-lg.visible-sm{display:block!important}table.visible-lg.visible-sm{display:table}tr.visible-lg.visible-sm{display:table-row!important}th.visible-lg.visible-sm,td.visible-lg.visible-sm{display:table-cell!important}}@media(min-width:992px) and (max-width:1199px){.visible-lg.visible-md{display:block!important}table.visible-lg.visible-md{display:table}tr.visible-lg.visible-md{display:table-row!important}th.visible-lg.visible-md,td.visible-lg.visible-md{display:table-cell!important}}@media(min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table}tr.visible-lg{display:table-row!important}th.visible-lg,td.visible-lg{display:table-cell!important}}.hidden-xs{display:block!important}table.hidden-xs{display:table}tr.hidden-xs{display:table-row!important}th.hidden-xs,td.hidden-xs{display:table-cell!important}@media(max-width:767px){.hidden-xs,tr.hidden-xs,th.hidden-xs,td.hidden-xs{display:none!important}}@media(min-width:768px) and (max-width:991px){.hidden-xs.hidden-sm,tr.hidden-xs.hidden-sm,th.hidden-xs.hidden-sm,td.hidden-xs.hidden-sm{display:none!important}}@media(min-width:992px) and (max-width:1199px){.hidden-xs.hidden-md,tr.hidden-xs.hidden-md,th.hidden-xs.hidden-md,td.hidden-xs.hidden-md{display:none!important}}@media(min-width:1200px){.hidden-xs.hidden-lg,tr.hidden-xs.hidden-lg,th.hidden-xs.hidden-lg,td.hidden-xs.hidden-lg{display:none!important}}.hidden-sm{display:block!important}table.hidden-sm{display:table}tr.hidden-sm{display:table-row!important}th.hidden-sm,td.hidden-sm{display:table-cell!important}@media(max-width:767px){.hidden-sm.hidden-xs,tr.hidden-sm.hidden-xs,th.hidden-sm.hidden-xs,td.hidden-sm.hidden-xs{display:none!important}}@media(min-width:768px) and (max-width:991px){.hidden-sm,tr.hidden-sm,th.hidden-sm,td.hidden-sm{display:none!important}}@media(min-width:992px) and (max-width:1199px){.hidden-sm.hidden-md,tr.hidden-sm.hidden-md,th.hidden-sm.hidden-md,td.hidden-sm.hidden-md{display:none!important}}@media(min-width:1200px){.hidden-sm.hidden-lg,tr.hidden-sm.hidden-lg,th.hidden-sm.hidden-lg,td.hidden-sm.hidden-lg{display:none!important}}.hidden-md{display:block!important}table.hidden-md{display:table}tr.hidden-md{display:table-row!important}th.hidden-md,td.hidden-md{display:table-cell!important}@media(max-width:767px){.hidden-md.hidden-xs,tr.hidden-md.hidden-xs,th.hidden-md.hidden-xs,td.hidden-md.hidden-xs{display:none!important}}@media(min-width:768px) and (max-width:991px){.hidden-md.hidden-sm,tr.hidden-md.hidden-sm,th.hidden-md.hidden-sm,td.hidden-md.hidden-sm{display:none!important}}@media(min-width:992px) and (max-width:1199px){.hidden-md,tr.hidden-md,th.hidden-md,td.hidden-md{display:none!important}}@media(min-width:1200px){.hidden-md.hidden-lg,tr.hidden-md.hidden-lg,th.hidden-md.hidden-lg,td.hidden-md.hidden-lg{display:none!important}}.hidden-lg{display:block!important}table.hidden-lg{display:table}tr.hidden-lg{display:table-row!important}th.hidden-lg,td.hidden-lg{display:table-cell!important}@media(max-width:767px){.hidden-lg.hidden-xs,tr.hidden-lg.hidden-xs,th.hidden-lg.hidden-xs,td.hidden-lg.hidden-xs{display:none!important}}@media(min-width:768px) and (max-width:991px){.hidden-lg.hidden-sm,tr.hidden-lg.hidden-sm,th.hidden-lg.hidden-sm,td.hidden-lg.hidden-sm{display:none!important}}@media(min-width:992px) and (max-width:1199px){.hidden-lg.hidden-md,tr.hidden-lg.hidden-md,th.hidden-lg.hidden-md,td.hidden-lg.hidden-md{display:none!important}}@media(min-width:1200px){.hidden-lg,tr.hidden-lg,th.hidden-lg,td.hidden-lg{display:none!important}}.visible-print,tr.visible-print,th.visible-print,td.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table}tr.visible-print{display:table-row!important}th.visible-print,td.visible-print{display:table-cell!important}.hidden-print,tr.hidden-print,th.hidden-print,td.hidden-print{display:none!important}}
/*!
 *  Font Awesome 4.0.3 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
/* FONT PATH
 * -------------------------- */
@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.0.3');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.0.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.0.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa {
  display: inline-block;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* makes the font 33% larger relative to the icon container */
.fa-lg {
  font-size: 1.3333333333333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa-2x {
  font-size: 2em;
}
.fa-3x {
  font-size: 3em;
}
.fa-4x {
  font-size: 4em;
}
.fa-5x {
  font-size: 5em;
}
.fa-fw {
  width: 1.2857142857142858em;
  text-align: center;
}
.fa-ul {
  padding-left: 0;
  margin-left: 2.142857142857143em;
  list-style-type: none;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  position: absolute;
  left: -2.142857142857143em;
  width: 2.142857142857143em;
  top: 0.14285714285714285em;
  text-align: center;
}
.fa-li.fa-lg {
  left: -1.8571428571428572em;
}
.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eeeeee;
  border-radius: .1em;
}
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
.fa.pull-left {
  margin-right: .3em;
}
.fa.pull-right {
  margin-left: .3em;
}
.fa-spin {
  -webkit-animation: spin 2s infinite linear;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}
@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(359deg);
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}
@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(359deg);
  }
}
@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(359deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
.fa-rotate-90 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.fa-rotate-180 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.fa-rotate-270 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.fa-flip-horizontal {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.fa-flip-vertical {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
}
.fa-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: middle;
}
.fa-stack-1x,
.fa-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
.fa-stack-1x {
  line-height: inherit;
}
.fa-stack-2x {
  font-size: 2em;
}
.fa-inverse {
  color: #ffffff;
}
/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
.fa-glass:before {
  content: "\f000";
}
.fa-music:before {
  content: "\f001";
}
.fa-search:before {
  content: "\f002";
}
.fa-envelope-o:before {
  content: "\f003";
}
.fa-heart:before {
  content: "\f004";
}
.fa-star:before {
  content: "\f005";
}
.fa-star-o:before {
  content: "\f006";
}
.fa-user:before {
  content: "\f007";
}
.fa-film:before {
  content: "\f008";
}
.fa-th-large:before {
  content: "\f009";
}
.fa-th:before {
  content: "\f00a";
}
.fa-th-list:before {
  content: "\f00b";
}
.fa-check:before {
  content: "\f00c";
}
.fa-times:before {
  content: "\f00d";
}
.fa-search-plus:before {
  content: "\f00e";
}
.fa-search-minus:before {
  content: "\f010";
}
.fa-power-off:before {
  content: "\f011";
}
.fa-signal:before {
  content: "\f012";
}
.fa-gear:before,
.fa-cog:before {
  content: "\f013";
}
.fa-trash-o:before {
  content: "\f014";
}
.fa-home:before {
  content: "\f015";
}
.fa-file-o:before {
  content: "\f016";
}
.fa-clock-o:before {
  content: "\f017";
}
.fa-road:before {
  content: "\f018";
}
.fa-download:before {
  content: "\f019";
}
.fa-arrow-circle-o-down:before {
  content: "\f01a";
}
.fa-arrow-circle-o-up:before {
  content: "\f01b";
}
.fa-inbox:before {
  content: "\f01c";
}
.fa-play-circle-o:before {
  content: "\f01d";
}
.fa-rotate-right:before,
.fa-repeat:before {
  content: "\f01e";
}
.fa-refresh:before {
  content: "\f021";
}
.fa-list-alt:before {
  content: "\f022";
}
.fa-lock:before {
  content: "\f023";
}
.fa-flag:before {
  content: "\f024";
}
.fa-headphones:before {
  content: "\f025";
}
.fa-volume-off:before {
  content: "\f026";
}
.fa-volume-down:before {
  content: "\f027";
}
.fa-volume-up:before {
  content: "\f028";
}
.fa-qrcode:before {
  content: "\f029";
}
.fa-barcode:before {
  content: "\f02a";
}
.fa-tag:before {
  content: "\f02b";
}
.fa-tags:before {
  content: "\f02c";
}
.fa-book:before {
  content: "\f02d";
}
.fa-bookmark:before {
  content: "\f02e";
}
.fa-print:before {
  content: "\f02f";
}
.fa-camera:before {
  content: "\f030";
}
.fa-font:before {
  content: "\f031";
}
.fa-bold:before {
  content: "\f032";
}
.fa-italic:before {
  content: "\f033";
}
.fa-text-height:before {
  content: "\f034";
}
.fa-text-width:before {
  content: "\f035";
}
.fa-align-left:before {
  content: "\f036";
}
.fa-align-center:before {
  content: "\f037";
}
.fa-align-right:before {
  content: "\f038";
}
.fa-align-justify:before {
  content: "\f039";
}
.fa-list:before {
  content: "\f03a";
}
.fa-dedent:before,
.fa-outdent:before {
  content: "\f03b";
}
.fa-indent:before {
  content: "\f03c";
}
.fa-video-camera:before {
  content: "\f03d";
}
.fa-picture-o:before {
  content: "\f03e";
}
.fa-pencil:before {
  content: "\f040";
}
.fa-map-marker:before {
  content: "\f041";
}
.fa-adjust:before {
  content: "\f042";
}
.fa-tint:before {
  content: "\f043";
}
.fa-edit:before,
.fa-pencil-square-o:before {
  content: "\f044";
}
.fa-share-square-o:before {
  content: "\f045";
}
.fa-check-square-o:before {
  content: "\f046";
}
.fa-arrows:before {
  content: "\f047";
}
.fa-step-backward:before {
  content: "\f048";
}
.fa-fast-backward:before {
  content: "\f049";
}
.fa-backward:before {
  content: "\f04a";
}
.fa-play:before {
  content: "\f04b";
}
.fa-pause:before {
  content: "\f04c";
}
.fa-stop:before {
  content: "\f04d";
}
.fa-forward:before {
  content: "\f04e";
}
.fa-fast-forward:before {
  content: "\f050";
}
.fa-step-forward:before {
  content: "\f051";
}
.fa-eject:before {
  content: "\f052";
}
.fa-chevron-left:before {
  content: "\f053";
}
.fa-chevron-right:before {
  content: "\f054";
}
.fa-plus-circle:before {
  content: "\f055";
}
.fa-minus-circle:before {
  content: "\f056";
}
.fa-times-circle:before {
  content: "\f057";
}
.fa-check-circle:before {
  content: "\f058";
}
.fa-question-circle:before {
  content: "\f059";
}
.fa-info-circle:before {
  content: "\f05a";
}
.fa-crosshairs:before {
  content: "\f05b";
}
.fa-times-circle-o:before {
  content: "\f05c";
}
.fa-check-circle-o:before {
  content: "\f05d";
}
.fa-ban:before {
  content: "\f05e";
}
.fa-arrow-left:before {
  content: "\f060";
}
.fa-arrow-right:before {
  content: "\f061";
}
.fa-arrow-up:before {
  content: "\f062";
}
.fa-arrow-down:before {
  content: "\f063";
}
.fa-mail-forward:before,
.fa-share:before {
  content: "\f064";
}
.fa-expand:before {
  content: "\f065";
}
.fa-compress:before {
  content: "\f066";
}
.fa-plus:before {
  content: "\f067";
}
.fa-minus:before {
  content: "\f068";
}
.fa-asterisk:before {
  content: "\f069";
}
.fa-exclamation-circle:before {
  content: "\f06a";
}
.fa-gift:before {
  content: "\f06b";
}
.fa-leaf:before {
  content: "\f06c";
}
.fa-fire:before {
  content: "\f06d";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-eye-slash:before {
  content: "\f070";
}
.fa-warning:before,
.fa-exclamation-triangle:before {
  content: "\f071";
}
.fa-plane:before {
  content: "\f072";
}
.fa-calendar:before {
  content: "\f073";
}
.fa-random:before {
  content: "\f074";
}
.fa-comment:before {
  content: "\f075";
}
.fa-magnet:before {
  content: "\f076";
}
.fa-chevron-up:before {
  content: "\f077";
}
.fa-chevron-down:before {
  content: "\f078";
}
.fa-retweet:before {
  content: "\f079";
}
.fa-shopping-cart:before {
  content: "\f07a";
}
.fa-folder:before {
  content: "\f07b";
}
.fa-folder-open:before {
  content: "\f07c";
}
.fa-arrows-v:before {
  content: "\f07d";
}
.fa-arrows-h:before {
  content: "\f07e";
}
.fa-bar-chart-o:before {
  content: "\f080";
}
.fa-twitter-square:before {
  content: "\f081";
}
.fa-facebook-square:before {
  content: "\f082";
}
.fa-camera-retro:before {
  content: "\f083";
}
.fa-key:before {
  content: "\f084";
}
.fa-gears:before,
.fa-cogs:before {
  content: "\f085";
}
.fa-comments:before {
  content: "\f086";
}
.fa-thumbs-o-up:before {
  content: "\f087";
}
.fa-thumbs-o-down:before {
  content: "\f088";
}
.fa-star-half:before {
  content: "\f089";
}
.fa-heart-o:before {
  content: "\f08a";
}
.fa-sign-out:before {
  content: "\f08b";
}
.fa-linkedin-square:before {
  content: "\f08c";
}
.fa-thumb-tack:before {
  content: "\f08d";
}
.fa-external-link:before {
  content: "\f08e";
}
.fa-sign-in:before {
  content: "\f090";
}
.fa-trophy:before {
  content: "\f091";
}
.fa-github-square:before {
  content: "\f092";
}
.fa-upload:before {
  content: "\f093";
}
.fa-lemon-o:before {
  content: "\f094";
}
.fa-phone:before {
  content: "\f095";
}
.fa-square-o:before {
  content: "\f096";
}
.fa-bookmark-o:before {
  content: "\f097";
}
.fa-phone-square:before {
  content: "\f098";
}
.fa-twitter:before {
  content: "\f099";
}
.fa-facebook:before {
  content: "\f09a";
}
.fa-github:before {
  content: "\f09b";
}
.fa-unlock:before {
  content: "\f09c";
}
.fa-credit-card:before {
  content: "\f09d";
}
.fa-rss:before {
  content: "\f09e";
}
.fa-hdd-o:before {
  content: "\f0a0";
}
.fa-bullhorn:before {
  content: "\f0a1";
}
.fa-bell:before {
  content: "\f0f3";
}
.fa-certificate:before {
  content: "\f0a3";
}
.fa-hand-o-right:before {
  content: "\f0a4";
}
.fa-hand-o-left:before {
  content: "\f0a5";
}
.fa-hand-o-up:before {
  content: "\f0a6";
}
.fa-hand-o-down:before {
  content: "\f0a7";
}
.fa-arrow-circle-left:before {
  content: "\f0a8";
}
.fa-arrow-circle-right:before {
  content: "\f0a9";
}
.fa-arrow-circle-up:before {
  content: "\f0aa";
}
.fa-arrow-circle-down:before {
  content: "\f0ab";
}
.fa-globe:before {
  content: "\f0ac";
}
.fa-wrench:before {
  content: "\f0ad";
}
.fa-tasks:before {
  content: "\f0ae";
}
.fa-filter:before {
  content: "\f0b0";
}
.fa-briefcase:before {
  content: "\f0b1";
}
.fa-arrows-alt:before {
  content: "\f0b2";
}
.fa-group:before,
.fa-users:before {
  content: "\f0c0";
}
.fa-chain:before,
.fa-link:before {
  content: "\f0c1";
}
.fa-cloud:before {
  content: "\f0c2";
}
.fa-flask:before {
  content: "\f0c3";
}
.fa-cut:before,
.fa-scissors:before {
  content: "\f0c4";
}
.fa-copy:before,
.fa-files-o:before {
  content: "\f0c5";
}
.fa-paperclip:before {
  content: "\f0c6";
}
.fa-save:before,
.fa-floppy-o:before {
  content: "\f0c7";
}
.fa-square:before {
  content: "\f0c8";
}
.fa-bars:before {
  content: "\f0c9";
}
.fa-list-ul:before {
  content: "\f0ca";
}
.fa-list-ol:before {
  content: "\f0cb";
}
.fa-strikethrough:before {
  content: "\f0cc";
}
.fa-underline:before {
  content: "\f0cd";
}
.fa-table:before {
  content: "\f0ce";
}
.fa-magic:before {
  content: "\f0d0";
}
.fa-truck:before {
  content: "\f0d1";
}
.fa-pinterest:before {
  content: "\f0d2";
}
.fa-pinterest-square:before {
  content: "\f0d3";
}
.fa-google-plus-square:before {
  content: "\f0d4";
}
.fa-google-plus:before {
  content: "\f0d5";
}
.fa-money:before {
  content: "\f0d6";
}
.fa-caret-down:before {
  content: "\f0d7";
}
.fa-caret-up:before {
  content: "\f0d8";
}
.fa-caret-left:before {
  content: "\f0d9";
}
.fa-caret-right:before {
  content: "\f0da";
}
.fa-columns:before {
  content: "\f0db";
}
.fa-unsorted:before,
.fa-sort:before {
  content: "\f0dc";
}
.fa-sort-down:before,
.fa-sort-asc:before {
  content: "\f0dd";
}
.fa-sort-up:before,
.fa-sort-desc:before {
  content: "\f0de";
}
.fa-envelope:before {
  content: "\f0e0";
}
.fa-linkedin:before {
  content: "\f0e1";
}
.fa-rotate-left:before,
.fa-undo:before {
  content: "\f0e2";
}
.fa-legal:before,
.fa-gavel:before {
  content: "\f0e3";
}
.fa-dashboard:before,
.fa-tachometer:before {
  content: "\f0e4";
}
.fa-comment-o:before {
  content: "\f0e5";
}
.fa-comments-o:before {
  content: "\f0e6";
}
.fa-flash:before,
.fa-bolt:before {
  content: "\f0e7";
}
.fa-sitemap:before {
  content: "\f0e8";
}
.fa-umbrella:before {
  content: "\f0e9";
}
.fa-paste:before,
.fa-clipboard:before {
  content: "\f0ea";
}
.fa-lightbulb-o:before {
  content: "\f0eb";
}
.fa-exchange:before {
  content: "\f0ec";
}
.fa-cloud-download:before {
  content: "\f0ed";
}
.fa-cloud-upload:before {
  content: "\f0ee";
}
.fa-user-md:before {
  content: "\f0f0";
}
.fa-stethoscope:before {
  content: "\f0f1";
}
.fa-suitcase:before {
  content: "\f0f2";
}
.fa-bell-o:before {
  content: "\f0a2";
}
.fa-coffee:before {
  content: "\f0f4";
}
.fa-cutlery:before {
  content: "\f0f5";
}
.fa-file-text-o:before {
  content: "\f0f6";
}
.fa-building-o:before {
  content: "\f0f7";
}
.fa-hospital-o:before {
  content: "\f0f8";
}
.fa-ambulance:before {
  content: "\f0f9";
}
.fa-medkit:before {
  content: "\f0fa";
}
.fa-fighter-jet:before {
  content: "\f0fb";
}
.fa-beer:before {
  content: "\f0fc";
}
.fa-h-square:before {
  content: "\f0fd";
}
.fa-plus-square:before {
  content: "\f0fe";
}
.fa-angle-double-left:before {
  content: "\f100";
}
.fa-angle-double-right:before {
  content: "\f101";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-angle-double-down:before {
  content: "\f103";
}
.fa-angle-left:before {
  content: "\f104";
}
.fa-angle-right:before {
  content: "\f105";
}
.fa-angle-up:before {
  content: "\f106";
}
.fa-angle-down:before {
  content: "\f107";
}
.fa-desktop:before {
  content: "\f108";
}
.fa-laptop:before {
  content: "\f109";
}
.fa-tablet:before {
  content: "\f10a";
}
.fa-mobile-phone:before,
.fa-mobile:before {
  content: "\f10b";
}
.fa-circle-o:before {
  content: "\f10c";
}
.fa-quote-left:before {
  content: "\f10d";
}
.fa-quote-right:before {
  content: "\f10e";
}
.fa-spinner:before {
  content: "\f110";
}
.fa-circle:before {
  content: "\f111";
}
.fa-mail-reply:before,
.fa-reply:before {
  content: "\f112";
}
.fa-github-alt:before {
  content: "\f113";
}
.fa-folder-o:before {
  content: "\f114";
}
.fa-folder-open-o:before {
  content: "\f115";
}
.fa-smile-o:before {
  content: "\f118";
}
.fa-frown-o:before {
  content: "\f119";
}
.fa-meh-o:before {
  content: "\f11a";
}
.fa-gamepad:before {
  content: "\f11b";
}
.fa-keyboard-o:before {
  content: "\f11c";
}
.fa-flag-o:before {
  content: "\f11d";
}
.fa-flag-checkered:before {
  content: "\f11e";
}
.fa-terminal:before {
  content: "\f120";
}
.fa-code:before {
  content: "\f121";
}
.fa-reply-all:before {
  content: "\f122";
}
.fa-mail-reply-all:before {
  content: "\f122";
}
.fa-star-half-empty:before,
.fa-star-half-full:before,
.fa-star-half-o:before {
  content: "\f123";
}
.fa-location-arrow:before {
  content: "\f124";
}
.fa-crop:before {
  content: "\f125";
}
.fa-code-fork:before {
  content: "\f126";
}
.fa-unlink:before,
.fa-chain-broken:before {
  content: "\f127";
}
.fa-question:before {
  content: "\f128";
}
.fa-info:before {
  content: "\f129";
}
.fa-exclamation:before {
  content: "\f12a";
}
.fa-superscript:before {
  content: "\f12b";
}
.fa-subscript:before {
  content: "\f12c";
}
.fa-eraser:before {
  content: "\f12d";
}
.fa-puzzle-piece:before {
  content: "\f12e";
}
.fa-microphone:before {
  content: "\f130";
}
.fa-microphone-slash:before {
  content: "\f131";
}
.fa-shield:before {
  content: "\f132";
}
.fa-calendar-o:before {
  content: "\f133";
}
.fa-fire-extinguisher:before {
  content: "\f134";
}
.fa-rocket:before {
  content: "\f135";
}
.fa-maxcdn:before {
  content: "\f136";
}
.fa-chevron-circle-left:before {
  content: "\f137";
}
.fa-chevron-circle-right:before {
  content: "\f138";
}
.fa-chevron-circle-up:before {
  content: "\f139";
}
.fa-chevron-circle-down:before {
  content: "\f13a";
}
.fa-html5:before {
  content: "\f13b";
}
.fa-css3:before {
  content: "\f13c";
}
.fa-anchor:before {
  content: "\f13d";
}
.fa-unlock-alt:before {
  content: "\f13e";
}
.fa-bullseye:before {
  content: "\f140";
}
.fa-ellipsis-h:before {
  content: "\f141";
}
.fa-ellipsis-v:before {
  content: "\f142";
}
.fa-rss-square:before {
  content: "\f143";
}
.fa-play-circle:before {
  content: "\f144";
}
.fa-ticket:before {
  content: "\f145";
}
.fa-minus-square:before {
  content: "\f146";
}
.fa-minus-square-o:before {
  content: "\f147";
}
.fa-level-up:before {
  content: "\f148";
}
.fa-level-down:before {
  content: "\f149";
}
.fa-check-square:before {
  content: "\f14a";
}
.fa-pencil-square:before {
  content: "\f14b";
}
.fa-external-link-square:before {
  content: "\f14c";
}
.fa-share-square:before {
  content: "\f14d";
}
.fa-compass:before {
  content: "\f14e";
}
.fa-toggle-down:before,
.fa-caret-square-o-down:before {
  content: "\f150";
}
.fa-toggle-up:before,
.fa-caret-square-o-up:before {
  content: "\f151";
}
.fa-toggle-right:before,
.fa-caret-square-o-right:before {
  content: "\f152";
}
.fa-euro:before,
.fa-eur:before {
  content: "\f153";
}
.fa-gbp:before {
  content: "\f154";
}
.fa-dollar:before,
.fa-usd:before {
  content: "\f155";
}
.fa-rupee:before,
.fa-inr:before {
  content: "\f156";
}
.fa-cny:before,
.fa-rmb:before,
.fa-yen:before,
.fa-jpy:before {
  content: "\f157";
}
.fa-ruble:before,
.fa-rouble:before,
.fa-rub:before {
  content: "\f158";
}
.fa-won:before,
.fa-krw:before {
  content: "\f159";
}
.fa-bitcoin:before,
.fa-btc:before {
  content: "\f15a";
}
.fa-file:before {
  content: "\f15b";
}
.fa-file-text:before {
  content: "\f15c";
}
.fa-sort-alpha-asc:before {
  content: "\f15d";
}
.fa-sort-alpha-desc:before {
  content: "\f15e";
}
.fa-sort-amount-asc:before {
  content: "\f160";
}
.fa-sort-amount-desc:before {
  content: "\f161";
}
.fa-sort-numeric-asc:before {
  content: "\f162";
}
.fa-sort-numeric-desc:before {
  content: "\f163";
}
.fa-thumbs-up:before {
  content: "\f164";
}
.fa-thumbs-down:before {
  content: "\f165";
}
.fa-youtube-square:before {
  content: "\f166";
}
.fa-youtube:before {
  content: "\f167";
}
.fa-xing:before {
  content: "\f168";
}
.fa-xing-square:before {
  content: "\f169";
}
.fa-youtube-play:before {
  content: "\f16a";
}
.fa-dropbox:before {
  content: "\f16b";
}
.fa-stack-overflow:before {
  content: "\f16c";
}
.fa-instagram:before {
  content: "\f16d";
}
.fa-flickr:before {
  content: "\f16e";
}
.fa-adn:before {
  content: "\f170";
}
.fa-bitbucket:before {
  content: "\f171";
}
.fa-bitbucket-square:before {
  content: "\f172";
}
.fa-tumblr:before {
  content: "\f173";
}
.fa-tumblr-square:before {
  content: "\f174";
}
.fa-long-arrow-down:before {
  content: "\f175";
}
.fa-long-arrow-up:before {
  content: "\f176";
}
.fa-long-arrow-left:before {
  content: "\f177";
}
.fa-long-arrow-right:before {
  content: "\f178";
}
.fa-apple:before {
  content: "\f179";
}
.fa-windows:before {
  content: "\f17a";
}
.fa-android:before {
  content: "\f17b";
}
.fa-linux:before {
  content: "\f17c";
}
.fa-dribbble:before {
  content: "\f17d";
}
.fa-skype:before {
  content: "\f17e";
}
.fa-foursquare:before {
  content: "\f180";
}
.fa-trello:before {
  content: "\f181";
}
.fa-female:before {
  content: "\f182";
}
.fa-male:before {
  content: "\f183";
}
.fa-gittip:before {
  content: "\f184";
}
.fa-sun-o:before {
  content: "\f185";
}
.fa-moon-o:before {
  content: "\f186";
}
.fa-archive:before {
  content: "\f187";
}
.fa-bug:before {
  content: "\f188";
}
.fa-vk:before {
  content: "\f189";
}
.fa-weibo:before {
  content: "\f18a";
}
.fa-renren:before {
  content: "\f18b";
}
.fa-pagelines:before {
  content: "\f18c";
}
.fa-stack-exchange:before {
  content: "\f18d";
}
.fa-arrow-circle-o-right:before {
  content: "\f18e";
}
.fa-arrow-circle-o-left:before {
  content: "\f190";
}
.fa-toggle-left:before,
.fa-caret-square-o-left:before {
  content: "\f191";
}
.fa-dot-circle-o:before {
  content: "\f192";
}
.fa-wheelchair:before {
  content: "\f193";
}
.fa-vimeo-square:before {
  content: "\f194";
}
.fa-turkish-lira:before,
.fa-try:before {
  content: "\f195";
}
.fa-plus-square-o:before {
  content: "\f196";
}

/*!
 *  Font Awesome 4.0.3 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url('../fonts/fontawesome-webfont.eot?v=4.0.3');src:url('../fonts/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'),url('../fonts/fontawesome-webfont.woff?v=4.0.3') format('woff'),url('../fonts/fontawesome-webfont.ttf?v=4.0.3') format('truetype'),url('../fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857142858em;text-align:center}.fa-ul{padding-left:0;margin-left:2.142857142857143em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.142857142857143em;width:2.142857142857143em;top:.14285714285714285em;text-align:center}.fa-li.fa-lg{left:-1.8571428571428572em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:spin 2s infinite linear;-moz-animation:spin 2s infinite linear;-o-animation:spin 2s infinite linear;animation:spin 2s infinite linear}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg)}100%{-o-transform:rotate(359deg)}}@-ms-keyframes spin{0%{-ms-transform:rotate(0deg)}100%{-ms-transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1);-webkit-transform:scale(-1,1);-moz-transform:scale(-1,1);-ms-transform:scale(-1,1);-o-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1);-webkit-transform:scale(1,-1);-moz-transform:scale(1,-1);-ms-transform:scale(1,-1);-o-transform:scale(1,-1);transform:scale(1,-1)}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-gear:before,.fa-cog:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-gears:before,.fa-cogs:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-bars:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\f0dc"}.fa-sort-down:before,.fa-sort-asc:before{content:"\f0dd"}.fa-sort-up:before,.fa-sort-desc:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-reply-all:before{content:"\f122"}.fa-mail-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\f152"}.fa-euro:before,.fa-eur:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-rupee:before,.fa-inr:before{content:"\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\f158"}.fa-won:before,.fa-krw:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,300,800);


/*************************
*******Typography******
**************************/

body {
  background: #fff;
  font-family: 'Open Sans', sans-serif;
  color:#4e4e4e;
  line-height: 22px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600; 
  font-family: 'Open Sans', sans-serif;
  color:#4e4e4e;
}

h1{
  font-size: 36px;
  color:#fff;
}

h2{
  font-size: 20px;
}

h3{
  font-size: 16px;
  color: #787878;
  font-weight: 400;
  line-height: 24px;
}

h4{
  font-size: 16px;
}

a {
  color: #c52d2f;
  -webkit-transition: color 300ms, background-color 300ms;
  -moz-transition: color 300ms, background-color 300ms;
  -o-transition:  color 300ms, background-color 300ms;
  transition:  color 300ms, background-color 300ms;
}

a:hover, a:focus {
  color: #d43133;
}

hr {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #fff;
}


.btn-primary {
  padding: 8px 20px;
  background: #c52d2f;
  color: #fff;
  border-radius: 4px;
  border:none;
  margin-top: 10px;
}


.btn-primary:hover, 
.btn-primary:focus{
  background: #c52d2f;
  outline: none;
  box-shadow: none;
} 

.btn-transparent {
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
}

.btn-transparent:hover {
  border-color: rgba(255, 255, 255, 0.5);
}

a:hover,
a:focus {
  color: #111;
  text-decoration: none;
  outline: none;
}

.dropdown-menu {
  margin-top: -1px;
  min-width: 180px;
}

.center h2{
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 20px;
}

.media>.pull-left{
  margin-right: 20px;
}

.media>.pull-right{
  margin-left: 20px;
}

body > section {
  padding: 70px 0;
}

.center {
  text-align: center;
  padding-bottom: 55px;
}

.scaleIn {
  -webkit-animation-name: scaleIn;
  animation-name: scaleIn;
}

.lead{
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

.transparent-bg {
  background-color: transparent !important;
  margin-bottom: 0;
}

@-webkit-keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}


/*************************
*******Header******
**************************/

#header .search{
  display: inline-block;
}

.navbar>.container .navbar-brand{
  margin-left: 0;
}

.top-bar {
  padding: 10px 0;
  background: #191919;
  border-bottom: 1px solid #222;
  line-height: 28px;
}

.top-number{
  color: #fff;
}

.top-number p{
  margin: 0
}

.social{
  text-align: right;
}

.social-share{
 display: inline-block;
 list-style: none;
 padding: 0;
 margin: 0;
}

ul.social-share li {
  display: inline-block;
}

ul.social-share li a {
  display: inline-block;
  color: #fff;
  background: #404040;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 2px;
}

ul.social-share li a:hover {
  background: #c52d2f;
  color: #fff;
}

.search i {
  color: #fff;
}

input.search-form{
  background: transparent;
  border: 0 none;
  width: 60px;
  padding: 0 10px;
  color: #FFF;
  -webkit-transition: all 400ms;
  -moz-transition: all 400ms;
  -ms-transition: all 400ms;
  -o-transition: all 400ms;
  transition: all 400ms;
}

input.search-form::-webkit-input-placeholder{
  color: transparent;
}

input.search-form:hover::-webkit-input-placeholder {
  color: #fff;
}

input.search-form:hover {
  width: 180px;
}

.navbar-brand {
  padding: 0;
  margin:0;
}

.navbar {
  border-radius: 0;
  margin-bottom: 0;
  background: #151515;
  padding: 15px 0;
  padding-bottom: 0;
}

 .navbar-nav{
  margin-top: 12px;
 }

.navbar-nav>li{
  margin-left: 35px;
  padding-bottom: 28px;
}

.navbar-inverse .navbar-nav > li > a {
  padding: 5px 12px;
  margin: 0;
  border-radius: 3px;
  color: #fff;
  line-height: 24px;
  display: inline-block;
}

.navbar-inverse .navbar-nav > li > a:hover{
	background-color: #c52d2f;
  color: #fff;
}

.navbar-inverse {
  border: none;
}

.navbar-inverse .navbar-brand {
  font-size: 36px;
  line-height: 50px;
  color: #fff;
}

.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus,
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #c52d2f;
  color: #fff;
}

.navbar-inverse .navbar-nav .dropdown-menu {
  background-color: rgba(0,0,0,.85);
  -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.125);
  -moz-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.125);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.125);
  border: 0;
  padding: 0;
  margin-top: 0;
  border-top: 0;
  border-radius: 0;
  left: 0;
}

.navbar-inverse .navbar-nav .dropdown-menu:before{
  position: absolute;
  top:0;
}

.navbar-inverse .navbar-nav .dropdown-menu > li > a {
  padding: 8px 15px;
  color: #fff;
}

.navbar-inverse .navbar-nav .dropdown-menu > li:hover > a,
.navbar-inverse .navbar-nav .dropdown-menu > li:focus > a,
.navbar-inverse .navbar-nav .dropdown-menu > li.active > a {
  background-color: #c52d2f;
  color: #fff;
}

.navbar-inverse .navbar-nav .dropdown-menu > li:last-child > a {
  border-radius: 0 0 3px 3px;
}

.navbar-inverse .navbar-nav .dropdown-menu > li.divider {
  background-color: transparent;
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-top: 0;
  padding-bottom: 0;
}


/*************************
*******Home Page******
**************************/


#main-slider {
  position: relative;
}

.no-margin {
  margin: 0;
  padding: 0;
}

#main-slider .carousel .carousel-content {
  margin-top: 150px;
}

#main-slider .carousel .slide-margin{
  margin-top: 140px;
}

#main-slider .carousel h2 {
  color: #fff;
}

#main-slider .carousel .btn-slide {
  padding: 8px 20px;
  background: #c52d2f;
  color: #fff;
  border-radius: 4px;
  margin-top: 25px;
  display: inline-block;
}

#main-slider .carousel .slider-img{
  text-align: right;
  position: absolute;
}


#main-slider .carousel .item {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0 !important;
  opacity: 0;
  top: 0;
  position: absolute;
  width: 100%;
  display: block !important;
  height: 730px;
  -webkit-transition: opacity ease-in-out 500ms;
  -moz-transition: opacity ease-in-out 500ms;
  -o-transition: opacity ease-in-out 500ms;
  transition: opacity ease-in-out 500ms;
}

#main-slider .carousel .item:first-child {
  top: auto;
  position: relative;
}

#main-slider .carousel .item.active {
  opacity: 1;
  -webkit-transition: opacity ease-in-out 500ms;
  -moz-transition: opacity ease-in-out 500ms;
  -o-transition: opacity ease-in-out 500ms;
  transition: opacity ease-in-out 500ms;
  z-index: 1;
}

#main-slider .prev,
#main-slider .next {
  position: absolute;
  top: 50%;
  background-color: #c52d2f;
  color: #fff;
  display: inline-block;
  margin-top: -25px;
  height: 40px;
  line-height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  z-index: 5;
}

#main-slider .prev:hover,
#main-slider .next:hover {
  background-color: #000;
}

#main-slider .prev {
  left: 10px;
}

#main-slider .next {
  right: 10px;
}

#main-slider .carousel-indicators li {
  width: 20px;
  height: 20px;
  background-color: #fff;
  margin: 0 15px 0 0;
  position: relative;
}

#main-slider .carousel-indicators li:after {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #FFF;
  left: -3px;
  top: -3px;
}

#main-slider .carousel-indicators .active{
  width: 20px;
  height: 20px;
  background-color: #c52d2f;
   margin: 0 15px 0 0;
   border: 1px solid #c52d2f;
   position: relative;
}

#main-slider .carousel-indicators .active:after {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: #c52d2f;
  border: 1px solid #c52d2f;
  left: -3px;
  top: -3px;
}

#main-slider .active .animation.animated-item-1 {
  -webkit-animation: fadeInUp 300ms linear 300ms both;
  -moz-animation: fadeInUp 300ms linear 300ms both;
  -o-animation: fadeInUp 300ms linear 300ms both;
  -ms-animation: fadeInUp 300ms linear 300ms both;
  animation: fadeInUp 300ms linear 300ms both;
}

#main-slider .active .animation.animated-item-2 {
  -webkit-animation: fadeInUp 300ms linear 600ms both;
  -moz-animation: fadeInUp 300ms linear 600ms both;
  -o-animation: fadeInUp 300ms linear 600ms both;
  -ms-animation: fadeInUp 300ms linear 600ms both;
  animation: fadeInUp 300ms linear 600ms both;
}

#main-slider .active .animation.animated-item-3 {
  -webkit-animation: fadeInUp 300ms linear 900ms both;
  -moz-animation: fadeInUp 300ms linear 900ms both;
  -o-animation: fadeInUp 300ms linear 900ms both;
  -ms-animation: fadeInUp 300ms linear 900ms both;
  animation: fadeInUp 300ms linear 900ms both;
}

#main-slider .active .animation.animated-item-4 {
  -webkit-animation: fadeInUp 300ms linear 1200ms both;
  -moz-animation: fadeInUp 300ms linear 1200ms both;
  -o-animation: fadeInUp 300ms linear 1200ms both;
  -ms-animation: fadeInUp 300ms linear 1200ms both;
  animation: fadeInUp 300ms linear 1200ms both;
}

#feature {
  background: #f2f2f2;
  padding-bottom: 40px;
}

.features{
  padding: 0;
}

.feature-wrap {
  margin-bottom: 35px;
  overflow: hidden;
}

.feature-wrap h2{
  margin-top: 10px;
}

.feature-wrap .pull-left {
  margin-right: 25px;
}

.feature-wrap i{
  font-size: 48px;
  height: 110px;
  width: 110px;
  margin: 3px;
  border-radius: 100%;
  line-height: 110px;
  text-align:center;
  background: #ffffff;
  color: #c52d2f;
  border: 3px solid #ffffff;
  box-shadow: inset 0 0 0 5px #f2f2f2;
  -webkit-box-shadow: inset 0 0 0 5px #f2f2f2;
  -webkit-transition: 500ms;
  -moz-transition: 500ms;
  -o-transition: 500ms;
  transition: 500ms;
  float: left;
  margin-right: 25px;
}

.feature-wrap i:hover {
  background: #c52d2f;
  color: #fff;
  box-shadow: inset 0 0 0 5px #c52d2f;
  -webkit-box-shadow: inset 0 0 0 5px #c52d2f;
  border: 3px solid #c52d2f;
}

#recent-works .col-xs-12.col-sm-4.col-md-3{
  padding: 0;
}

#recent-works{
    padding-bottom: 70px;
}

.recent-work-wrap {
  position: relative;
}

.recent-work-wrap img{
  width: 100%;
}

.recent-work-wrap .recent-work-inner{
  top: 0;
  background: transparent;
  opacity: .8;
  width: 100%;
  border-radius: 0;
  margin-bottom: 0;
}

.recent-work-wrap .recent-work-inner h3{
  margin: 10px 0;
}

.recent-work-wrap .recent-work-inner h3 a{
  font-size: 24px;
  color: #fff;
}

.recent-work-wrap .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 0;
  background: #c52d2f;
  color: #fff;
  vertical-align: middle;
  -webkit-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  transition: opacity 500ms;  
  padding: 30px;
}

.recent-work-wrap .overlay .preview {
  bottom: 0;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  border-radius: 0;
  background: transparent;
  text-align: center;
  color: #fff;
}

.recent-work-wrap:hover .overlay {
  opacity: 1;
}

#services {
  background: #000 url(../images/services/bg_services.png);
  background-size: cover;
}

#services .lead,
#services h2{
  color: #fff;
}

.services-wrap {
  padding: 40px 30px;
  background: #fff;
  border-radius: 4px;
  margin: 0 0 40px;
}

.services-wrap h3 {
  font-size: 20px;
  margin: 10px 0;
}

.services-wrap .pull-left {
  margin-right: 20px;
}

#middle {
  background: #f2f2f2;
}

.skill h2{
  margin-bottom: 25px;
}

.progress-wrap{
  position: relative;
}

.progress .color1,
.progress .color1 .bar-width{
  background: #2d7da4;
}

.progress .color2,
.progress .color2 .bar-width{
  background: #6aa42f;
}

.progress .color3,
.progress .color3 .bar-width{
  background: #ffcc33;
}

.progress .color4,
.progress .color4 .bar-width{
  background: #db3615;
}

.progress, 
.progress-bar {
  height: 15px;
  line-height: 15px;
  background: #e6e6e6;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  text-align: right;
}

.progress{
  position: relative;
}

.progress .bar-width{
  position: absolute;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  top: -30px;
  border-radius: 2px;
  margin-left: -30px;
}

.progress span{
  position: relative;
}

.progress span:before{
  content: " ";
  position: absolute;
  width: auto;
  height: auto;
  border-width: 8px 5px;
  border-style: solid;
  bottom: -15px;
  right: 8px;
}

.progress .color1 span:before{
  border-color: #2d7da4 transparent transparent transparent;
}

.progress .color2 span:before{
  border-color: #6aa42f transparent transparent transparent;
}

.progress .color3 span:before{
  border-color: #ffcc33 transparent transparent transparent;
}

.progress .color4 span:before{
  border-color: #db3615 transparent transparent transparent;
}

.accordion h2{
  margin-bottom: 25px;
}

.panel-default{
  border-color: transparent;
}

.panel-default>.panel-heading,
.panel{
  background-color: #e6e6e6; 
  border:0 none;
  box-shadow:none;
}

.panel-default>.panel-heading+.panel-collapse .panel-body{
  background: #fff;
  color: #858586;
}

.panel-body{
  padding: 20px 20px 10px;
}

.panel-group .panel+.panel{
  margin-top: 0;
  border-top: 1px solid #d9d9d9;
}

.panel-group .panel{
  border-radius: 0;
}

.panel-heading{
  border-radius: 0;
}

.panel-title>a{
  color: #4e4e4e;
}

.accordion-inner img{
  border-radius: 4px;
}

.accordion-inner h4{
  margin-top: 0;
}

.panel-heading.active{
  background: #1f1f20;
}

.panel-heading.active .panel-title>a{
  color:#fff;
}

a.accordion-toggle  i{
  width: 45px;
  line-height: 44px;
  font-size: 20px;
  margin-top: -10px;
  text-align: center;
  margin-right: -15px;
  background: #c9c9c9;
}

.panel-heading.active a.accordion-toggle i{
  background: #c52d2f;
  color: #fff;
}

.panel-heading.active a.accordion-toggle.collapsed i{
  background: #c52d2f;
  color: #fff;
}

.nav-tabs>li{
  margin-bottom: 0px;
  border-bottom: 1px solid #e6e6e6;
}

.nav-tabs{
  border-bottom: transparent;
  border-right: 1px solid #e6e6e6;
}

.nav-tabs>li>a {
  background: #f5f5f5;
  color: #666;
  border-radius: 0;
  border: 0 none;
  line-height: 24px;
  margin-right:0;
  padding: 13px 15px;
}

.nav-tabs li:last-child{
  border-bottom: 0 none;
} 

.nav-stacked>li+li{
  margin-top: 0;
}

.nav-tabs>li>a:hover{
  background: #1f1f20;
  color:#fff;
}

.nav-tabs>li.active>a, 
.nav-tabs>li.active>a:hover, 
.nav-tabs>li.active>a:focus {
  border: 0;
  color:#fff;
  background: #1f1f20;
  position: relative;
}

.nav-tabs>li.active>a:after {
  position: absolute;
  content:  "";
  width: auto;
  height: auto;
  border-style:solid;
  border-color: transparent transparent transparent #1f1f20;
  border-width: 25px 22px;
  right: -44px;
  top:0;
}

.tab-wrap{
  border:1px solid #e6e6e6;
  margin-bottom: 20px;
}

.tab-content{
  padding: 20px;
}

.tab-content h2{
  margin-top: 0;
}

.tab-content img{
  border-radius: 4px;
}

.testimonial h2{
  margin-top: 0;
}

.testimonial-inner {
  color:#858586;
  font-size: 14px;
}

.testimonial-inner .pull-left{
  border-right: 1px solid #e7e7e7;
  padding-right: 15px;
  position: relative;
}

.testimonial-inner .pull-left:after{
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  top: 50%;
  margin-top: -5px;
  background: #FFF;
  -webkit-transform: rotate(45deg);
  border: 1px solid #e7e7e7;
  right: -5px;
  border-left: 0 none;
  border-bottom: 0 none;
}

#partner {
  background: url(../images/partners/partner_bg.png) 50% 50% no-repeat;
  background-size: cover;
}

#partner {
  color: #fff;
  text-align: center;
}

#partner h2, 
#partner h3 {
  color: #fff;
}

.partners ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.partners ul li{
  display: inline-block;
  float: left;
  width: 20%;
}

#conatcat-info{
  background: #fff url(../images/contact.png) no-repeat 90% 0;
  padding: 30px 0;
}

.contact-info i{
  width: 60px;
  height: 60px;
  font-size: 40px;
  line-height: 60px;
  color: #fff;
  background: #000;
  text-align: center;
  border-radius: 10px;
}

.contact-info h2{
  margin-top: 0;
  color: #000;
}

.contact-info{
  color:#000;
}

/*************************
********* About Us Page CSS ******
**************************/

.about-us {
  margin-top: 110px;
  margin-bottom: -110px;
}

.about-us h2, 
.skill_text h2 {
  color:#4e4e4e;
  font-size: 30px;
  font-weight: 600;
}

.about-us p {
  color:#4e4e4e;
}

#carousel-slider {
  position: relative;
}

#carousel-slider .carousel-indicators {
  bottom: -25px;
}

#carousel-slider .carousel-indicators li {
  border: 1px solid #ffbd20;
}

#carousel-slider a i {
  border: 1px solid #777;
  border-radius:50%;
  font-size: 28px;
  height: 50px;
  padding: 8px;
  position: absolute;
  top: 50%;
  width: 50px;
  color:#777;
}

#carousel-slider a i:hover {
  background:#bfbfbf;
  color:#fff;
  border: 1px solid #bfbfbf;
}

#carousel-slider 
.carousel-control {
  width:inherit;
}

#carousel-slider .carousel-control.left i {
  left:-25px
}

#carousel-slider .carousel-control.right i {
  right: -25px;
}

#carousel-slider
.carousel-control.left, 
#carousel-slider
.carousel-control.right {
  background: none;
}

.skill_text {
  display: block;
  margin-bottom: 60px;
  margin-top: 25px;
  overflow: hidden;
}

.sinlge-skill {
  background:#f2f2f2;
  border-radius: 100%;
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
  height: 200px;
  position: relative;
  width: 200px;
  text-transform: uppercase;
  overflow: hidden;
  margin: 30px 0;

}

.sinlge-skill p em {
  color: #FFFFFF;
  font-size: 38px;
}

.sinlge-skill p {
  line-height: 1;
}

.joomla-skill, 
.html-skill, 
.css-skill, 
.wp-skill {
  position: absolute;
  height: 100%;
  bottom: 0;
  width:100%;
  border-radius: 100%;
  padding: 70px 0;
  text-align: center;
}


.joomla-skill {
  background: rgb(242,242,242); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 28%, rgba(45,125,164,1) 28%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(28%,rgba(242,242,242,1)), color-stop(28%,rgba(45,125,164,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#2d7da4',GradientType=0 ); /* IE6-9 */    
}

.html-skill {
  background: rgb(242,242,242); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 9%, rgba(106,164,47,1) 9%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(9%,rgba(242,242,242,1)), color-stop(9%,rgba(106,164,47,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#6aa42f',GradientType=0 ); /* IE6-9 */
}

.css-skill {
  background: rgb(242,242,242); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 32%, rgba(255,189,32,1) 32%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(32%,rgba(242,242,242,1)), color-stop(32%,rgba(255,189,32,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#ffbd20',GradientType=0 ); /* IE6-9 */
}

.wp-skill {
  background: rgb(242,242,242); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 19%, rgba(219,54,21,1) 19%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(19%,rgba(242,242,242,1)), color-stop(19%,rgba(219,54,21,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#db3615',GradientType=0 ); /* IE6-9 */
}

.skill-wrap {
  display: block;
  overflow: hidden;
  margin: 60px 0;
}

.team h4 {
  margin-top: 0;
  text-transform: uppercase;
}

.team h5 {
  font-weight: 300;
}

.single-profile-top, 
.single-profile-bottom {
  font-weight: 400;
  line-height: 24px;
}

.single-profile-top, 
.single-profile-bottom  {
  border: 1px solid #ddd;
  padding: 15px;
  position: relative;
}

.media_image {
  margin-bottom: 10px;
}

.team .btn {
  background:transparent;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 3px;
  padding: 1px 5px;
  text-transform: uppercase;
  border:1px solid#ddd;
  margin-right: 3px;
}


ul.social_icons,
ul.tag {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: block;
}

ul.social_icons li,
ul.tag li {
  display: inline-block;
  margin-right: 5px;
}

ul.social_icons li  a i{
  border-radius: 50%;
  color: #FFFFFF;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0;
  text-align: center;
  width: 25px;
  opacity:.8;
}


.team .social_icons .fa-facebook:hover, 
.team .social_icons .fa-twitter:hover, 
.team .social_icons .fa-google-plus:hover {
  transform: rotate(360deg);
  -ms-transform:rotate(360deg);
  -webkit-transform:rotate(360deg); 
  transition-duration:2s;
  transition-property: all;
  transition-timing-function: ease;
  opacity:1;
  transition: all 0.9s ease 0s;
  -moz-transition: all 0.9s ease 0s;
  -webkit-transition: all 0.9s ease 0s;
  -o-transition: all 0.9s ease 0s;
}

.team .social_icons .fa-facebook {
  background: #0182c4;
}

.team .social_icons .fa-twitter {
  background: #20B8FF
}

.team .social_icons .fa-google-plus {
  background: #D34836
}


.team-bar .first-one-arrow {
  float: left;
  margin-right: 30px;
  width: 2%;
}

.team-bar .first-arrow {
  float: left;
  margin-left: 5px;
  margin-right: 35px;
  width: 22%;
}

.team-bar .second-arrow {
  float: left;
  margin-left: 5px;
  width: 21%;
}

.team-bar .third-arrow {
  float: left;
  margin-left: 40px;
  margin-right: 12px;
  width: 22%;
}

.team-bar .fourth-arrow {
  float: left;
  margin-left: 25px;
  width: 20%;
}

.team-bar .first-one-arrow hr {
  border-bottom: 1px solid #2D7DA4;
  border-top: 1px solid #2D7DA4;
 }

.team-bar .first-arrow hr {
  border-bottom: 1px solid #2D7DA4;
  border-top: 1px solid #2D7DA4;
 }

.team-bar .second-arrow hr {
  border-bottom: 1px solid #6aa42f;
  border-top: 1px solid #6aa42f;
}

.team-bar .third-arrow hr {
  border-bottom: 1px solid #FFBD20;
  border-top: 1px solid #FFBD20;

}

.team-bar .fourth-arrow hr {
  border-bottom: 1px solid #db3615;
  border-top: 1px solid #db3615;
}

.team-bar {
  margin-bottom: 15px;
  margin-top: 30px;
  position: relative;
}

.team-bar i {
  border-radius: 50%;
  color: #FFFFFF;
  display: block;
  height: 24px;
  line-height: 24px;
  margin-top: -32px;
  overflow: hidden;
  padding: 0;
  text-align: center;
  width: 24px;
  position: absolute;
}

.team-bar .first-arrow .fa-angle-up {
  background:#2D7DA4;
  margin-left:-33px
 }

.team-bar .second-arrow .fa-angle-down {
  background:#6AA42F;
  margin-left: -33px;
}

.team-bar .third-arrow .fa-angle-up {
  background:#FFBD20;
  margin-left: -32px;
}

.team-bar .fourth-arrow .fa-angle-down {
  background:#db3615;
  margin-left: -32px;
}

.team .single-profile-top:before, 
.team .single-profile-top:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.team .single-profile-top:before {
  left:26px;
  bottom: -20px;
  border-width: 10px;
  border-color:#fff transparent transparent transparent;
  z-index: 1;
}


.team .single-profile-top:after {
  left: 25px;
  bottom: -22px;
  border-style: solid;
  border-width: 11px;
  border-color:#ddd transparent transparent transparent;
  z-index: 0;
}

.team .single-profile-bottom:before,
.team .single-profile-bottom:after {
  position: absolute;
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
}

.team .single-profile-bottom:before {
  left:30px;
  top: -20px;
  border-width: 10px;
  border-color: transparent transparent #fff transparent;
  z-index: 1;
}

.team .single-profile-bottom:after {
  left: 29px;
  top: -22px;
  border-style: solid;
  border-width: 11px;
  border-color: transparent transparent #DDD transparent;
  z-index: 0;
}

/***********************
****Service page css****
***********************/

.services {
  padding: 0;
}

.get-started {
  background: none repeat scroll 0 0 #F3F3F3;
  border-radius: 3px;
  padding-bottom: 30px;
  position: relative;
  margin-bottom: 18px;
  margin-top: 60px;
}

.get-started h2 {
  padding-top: 30px;
  margin-bottom: 20px;
}

.request {
  bottom: -15px;
  left: 50%;
  position: absolute;
  margin-left: -110px;
}

.request h4 {
  position: absolute;
  width: 220px;
  position:relative;
}

.request h4 a{
  background:#c52d2f;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  border-radius: 3px;
  padding: 5px 15px;
}

.request h4:after {
  border-color: #c52d2f transparent transparent;
  border-style: solid;
  border-width: 12px;
  bottom: -18px;
  content: "";
  height: 0;
  position: absolute;
  right: 13px;
  z-index: -99999;
}

.request h4:before {
  border-color: #c52d2f transparent transparent;
  border-style: solid;
  border-width: 12px;
  bottom: -18px;
  content: "";
  height: 0;
  left: 13px;
  position: absolute;
  z-index: -99999;
}

.clients-area {
  padding: 60px;
}

.clients-comments {
    background-image: url("../images/image_bg.png");
    background-position: center 118px;
    background-repeat: no-repeat;
    margin-bottom: 100px;
}

.clients-comments img {
  background:#DDDDDD;
  border: 1px solid #DDDDDD;
  height: 182px;
  padding: 3px;
  width: 182px;
  transition: all 0.9s ease 0s;
  -moz-transition: all 0.9s ease 0s;
  -webkit-transition: all 0.9s ease 0s;
  -o-transition: all 0.9s ease 0s;
}

.clients-comments h3 {
  margin-top: 55px;
  font-weight: 300;
  padding: 0 40px;
}

.clients-comments h4 {
  font-weight: 300;
  margin-top: 15px;
}


.clients-comments  h4  span {
  font-weight: 700;
  font-style: oblique;
}

.footer {
  background: none repeat scroll 0 0 #2E2E2E;
  border-top: 5px solid #C52D2F;
  height: 84px;
  margin-top: 110px;
}

.footer_left {
  padding: 10px;
}

.text-left {
  color: #FFFFFF;
  font-size: 12px;
  margin-top: 15px;
}

/*************************
********* Portfolio CSS ******
**************************/

#portfolio_page {
  margin-top: 115px;
  padding-bottom: 0;
}

.portfolio-items, 
.portfolio-filter {
  list-style: none outside none;
  margin: 0 0 40px 0;
  padding: 0;
}

.portfolio-filter > li {
  display: inline-block;
}

.portfolio-filter > li a {
  background: none repeat scroll 0 0 #FFFFFF;
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
  text-transform: uppercase;
  transition: all 0.9s ease 0s;
  -moz-transition: all 0.9s ease 0s;
  -webkit-transition: all 0.9s ease 0s;
  -o-transition: all 0.9s ease 0s;
  border: 1px solid #F2F2F2;
  outline: none;
  border-radius: 3px;
}

.portfolio-filter > li a:hover,
.portfolio-filter > li a.active{
  color:#fff;
  background: #c52d2f;
  border: 1px solid #c52d2f;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.portfolio-items > li {
  float: left;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.portfolio-item {
  margin: 0;
  padding:0;
}

/* Start: Recommended Isotope styles */
/**** Isotope Filtering ****/
.isotope-item {
  z-index: 2;
}

.isotope-hidden.isotope-item {
  pointer-events: none;
  z-index: 1;
}

/**** Isotope CSS3 transitions ****/
.isotope,
.isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  -ms-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
  -moz-transition-property: height, width;
  -ms-transition-property: height, width;
  -o-transition-property: height, width;
  transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
  -moz-transition-property: -moz-transform, opacity;
  -ms-transition-property: -ms-transform, opacity;
  -o-transition-property: -o-transform, opacity;
  transition-property: transform, opacity;
}

/**** disabling Isotope CSS3 transitions ****/
.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
  -webkit-transition-duration: 0s;
  -moz-transition-duration: 0s;
  -ms-transition-duration: 0s;
  -o-transition-duration: 0s;
  transition-duration: 0s;
}

/* End: Recommended Isotope styles */
/* disable CSS transitions for containers with infinite scrolling*/
.isotope.infinite-scrolling {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}


/**************************
********* Pricing Table CSS *
**************************/

.pricing_heading {
  margin-top: 120px
}

.pricing_heading h2, 
.pricing_heading p {
  color:#4e4e4e;
}

.pricing-area h1 {
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 15px;
}

.pricing-area span {
  font-weight: 700;
  font-size: 18px;
}

.pricing-area h3, 
.pricing-area span  {
  color: #fff;
}

.plan {
  position: relative;
  margin-bottom: 70px;
}

.pricing-area ul {
  background:#FAFAFA;
  padding: 0;
  margin: 0;
}

.pricing-area ul li {
  list-style: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 400;
}

.pricing-area ul li:nth-child(even){
  background:#f5f5f5
}

.pricing-area .price-three img, 
.pricing-area .price-six img {
  position: absolute;
  right: 15px;
  top: 0;
}

.pricing-area .heading-one, 
.pricing-area .heading-two, 
.pricing-area .heading-three {
  padding:17px 0;
  border-radius:2px 2px 0 0;
} 

.pricing-area .heading-one, 
.pricing-area .heading-two, 
.pricing-area .heading-three, 
.pricing-area .heading-four, 
.pricing-area .heading-five, 
.pricing-area .heading-six, 
.pricing-area .heading-seven {
  margin-left: -10px
}


.pricing-area .heading-one, 
.pricing-area .price-one .plan-action .btn-primary {
  background: #e24f43
}

.pricing-area .heading-two, 
.pricing-area .price-two .plan-action .btn-primary {
  background:#27AE60;
}

.pricing-area .heading-three,
.pricing-area .price-three .plan-action .btn-primary {
  background: #f39c12;
}

.pricing-area .heading-four, 
.pricing-area .price-four .plan-action .btn-primary {
  background: #5c5c5c
}

.pricing-area .heading-five, 
.pricing-area .price-five .plan-action .btn-primary {
  background: #5c5c5c
}

.pricing-area .heading-six, 
.pricing-area .price-six .plan-action .btn-primary {
  background: #e24f43
;
}

.pricing-area .heading-seven, 
.pricing-area .price-seven .plan-action .btn-primary {
  background: #5c5c5c
}

.pricing-area .bg{
 background: #fafafa 
}

.pricing-area .heading-one h3:before {
  border-color: #bf4539 transparent transparent;
}

.pricing-area .heading-two h3:before {
  border-color: #1f8c4d transparent transparent;
}

.pricing-area .heading-three h3:before {
  border-color: #d4880f transparent transparent;
}

.pricing-area .heading-four h3:before {
  border-color: #424242 transparent transparent;
}

.pricing-area .heading-five h3:before {
  border-color: #424242 transparent transparent;
}

.pricing-area .heading-six h3:before {
  border-color: #bf4539 transparent transparent;
}

.pricing-area .heading-seven h3:before {
  border-color: #424242 transparent transparent;
}

.pricing-area h3:before {
  border-color: #D4880F transparent transparent;
  border-radius: 5px 0 0 0px;
  border-style: solid;
  border-width: 12px;
  content: "";
  height: 0;
  left: 4px;
  position: absolute;
  top: 78px;
  width: 0;
  z-index: -999;
}

.small-pricing h3:after {
  height:94px;
}

.small-pricing h3:before {
  top: 74px;
}

.plan-action {
  height: 40px;
}

.pricing-area .plan-action .btn-primary {
  position: relative;
  padding:5px 20px;
  color: #fff
;
  margin-top: 5px;
}

.pricing-area .plan-action .btn-primary:before {
  border-color: #E24F43 transparent transparent;
  border-radius: 5px 0 0 0;
  border-style: solid;
  border-width: 12px;
  bottom: -12px;
  content: "";
  height: 0;
  left: -9px;
  position: absolute;
  width: 0;
  z-index: -1;
}

.pricing-area .plan-action .btn-primary:after {
  border-color: #E24F43 transparent transparent;
  border-radius: 5px 0 0 0;
  border-style: solid;
  border-width: 12px;
  bottom: -12px;
  content: "";
  height: 0;
  position: absolute;
  right: -9px;
  width: 0;
  z-index: -1;
}

.pricing-area .price-two .plan-action .btn-primary:before, 
.pricing-area .price-two .plan-action .btn-primary:after {
  border-color: #1f8c4d transparent transparent;
}

.pricing-area .price-three .plan-action .btn-primary:before, 
.pricing-area .price-three .plan-action .btn-primary:after {
  border-color: #d4880f transparent transparent;
}

.pricing-area .price-four .plan-action .btn-primary:before, 
.pricing-area .price-four .plan-action .btn-primary:after, 
.pricing-area .price-five .plan-action .btn-primary:before, 
.pricing-area .price-five .plan-action .btn-primary:after, 
.pricing-area .price-seven .plan-action .btn-primary:before, 
.pricing-area .price-seven .plan-action .btn-primary:after  {
  border-color: #424242 transparent transparent;
  right: -9px;
}

.pricing-area .price-six .plan-action .btn-primary:before, 
.pricing-area .price-six .plan-action .btn-primary:after {
  border-color: #bf4539 transparent transparent;
  right: -9px;
}


/*************************
********* Contact Us CSS ******
**************************/

.gmap-area {
  background-image: url("../images/map.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 0;
}

.gmap-area .gmap iframe {
  border-radius: 50%;
  height: 280px;
  width: 300px;
}

.gmap{
    border: 10px solid #f6f5f0;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    box-shadow: 0px 0px 3px 3px #e7e4dc;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
}

.gmap-area .map-content ul {
  list-style: none; 
}

.gmap-area .map-content address h5{
  font-weight: 700;
  /* font-size: 16px; */
}

#contact-page{
  padding-top: 0;
}

#contact-page .contact-form 
.form-group label {
  color: #4E4E4E;
  font-size: 16px;
  font-weight: 300;
}

.form-group .form-control {
  padding: 7px 12px;
  border-color:#f2f2f2;
  box-shadow: none;
}

textarea#message{
  resize: none;
  padding: 10px;
}

#contact-page .contact-wrap {
  margin-top: 20px;
}

/*********************
****blog page css*****
**********************/

.widget {
  margin-bottom: 60px;
  padding-left: 0;
}

.single_comments {
  margin-bottom: 20px;
}

.single_comments img {
  float: left;
  margin-right: 10px;
  margin-top: 5px;
}

.single_comments p {
  margin-bottom: 0;
}

.widget .entry-meta span {
  display: inline-block;
  margin-right: 10px;
}

.widget h3 {
  color: #000;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.blog_category{
  list-style:none;
  margin:0;
  padding:0;
}

.blog_category li{
  float:none;
  margin-bottom:20px;
}

.blog_category li a {
  background:#f5f5f5;
  border-radius: 4px;
  color: #888;
  display: inline-block;
  padding: 5px 15px;
}

.blog_category li a:hover{
  background:#c52d2f;
  color: #fff;
}

 .badge:before {
  border-color: transparent transparent transparent #c52d2f;
  border-style: solid;
  border-width: 10px;
  bottom: -8px;
  content: "";
  height: 0;
  left: 5px;
  position: absolute;
  z-index: -99999;
}

.badge {
  background-color: #c52d2f;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
  position: relative;
  left: 60px;
  top: -18px;
  font-weight: normal;
}

.blog_archieve {
  list-style: none outside none;
  margin: 0;
  padding: 0;
}

.blog_archieve li {
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.blog_archieve li:first-child {
  padding-top: 0;
}

ul.gallery {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.gallery li {
  display: block;
  width: 60px;
  padding: 0;
  margin: 0 4px 4px 0;
  float: left;
}

ul.faq {
  list-style: none;
  margin: 0;
}

ul.faq li {
  margin-top: 30px;
}

ul.faq li:first-child {
  margin-top: 0;
}

ul.faq li span.number {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #34495e;
  color: #fff;
  font-size: 24px;
}

ul.faq li > div {
  margin-left: 70px;
}

ul.faq li > div h3 {
  margin-top: 0;
}


.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blog-item {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 50px;
}

.blog .blog-item .img-blog {
  border-radius: 5px;
  margin-bottom: 45px;
}

.blog .blog-item .blog-content {
  padding-bottom: 25px;
}

.blog .blog-item .blog-content h2 {
  margin-top: 0;
  font-size: 30px;
}

.readmore{
  margin-top: 0;
}

.blog .blog-item .blog-content h3 {
  color: #858586;
  margin-bottom: 40px;
  /* font-weight: 300 */}

.blog .blog-item .blog-content h4 {
  font-size: 14px;
}

.post-tags {

}

.blog .blog-item .entry-meta {
  border-radius: 5px;
  overflow: hidden;
}

.blog .blog-item .entry-meta > span {
  background: #f5f5f5;
  border-top: 1px solid #fff;
  display: block;
  font-size: 12px;
  overflow: hidden;
  padding: 5px;
  text-align: left;
}

#publish_date {
  background: #c52d2f;
  border-bottom: 5px solid #4e4e4e;
  color: #fff;
  padding: 5px 0;
  text-align: center;
}

.blog .blog-item .entry-meta > span {
  color: #ccc;
}

.blog .blog-item .entry-meta > span a {
  font-size: 12px;
  margin-left: 3px;
  font-weight: 300;
  color: #888;
}

ul.pagination > li > a {
  border: 1px solid #F1F1F1;
  margin-right:5px;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 14px;
}

ul.pagination > li > a i{
  margin-left:5px;
  margin-right:5px;
}

ul.pagination > li.active > a, 
ul.pagination > li:hover > a {
  background-color: #c52d2f !important;
  border-color: #c52d2f !important;
  color: #fff;
}

.search_box {
  background-image: url("../images/search_icon.png");
  background-position: 314px 15px;
  background-repeat: no-repeat;
  border-color: #DEDEDE;
  height: 48px;
  outline: medium none;
  box-shadow: none;
}

.form-control:focus {
  box-shadow:none;
  outline: 0 none;
}


ul.tag-cloud, 
ul.sidebar-gallery {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-cloud li{
    display: inline-block;
    margin-bottom: 3px;
}

.tag-cloud li a {
  background: #f5f5f5;
  color: #888;
  border: 0;
  border-radius: 4px;
  padding: 8px 15px;
}

.tag-cloud li a:hover{
  background:#c52d2f;
  color: #fff;  
}

.sidebar-gallery li{
  display: inline-block;
  margin: 0 10px 10px 0;
}

.sidebar-gallery li a {
  border-radius: 4px;
  display: inline-block;
}


/**********************
**blog single page css*
**********************/

.reply_section {
  background: #f5f5f5;
  border-radius: 5px;
}

.post_reply {
  margin-left: 10px;
  margin-top: 45px;
}

.post_reply img {
  width: 85px;
  height: 85px;
  border: 5px solid #D5D8DD;
}

.post_reply ul {
  list-style: none outside none;
  margin: 0;
  padding: 0;
  margin-top: 5px;
}

.post_reply ul li{
  float:left;
}

.post_reply ul li a {
  display: block;
}

.post_reply ul li a i {
  border: 1px solid #DDDDDD;
  border-radius: 39px;
  color: #FFFFFF;
  font-size: 20px;
  height: 30px;
  margin-right: 3px;
  padding-top: 7px;
  text-align: center;
  width: 30px;
}

.post_reply ul li a i.fa-facebook {
  background: #0182C4;
}

.post_reply ul li a i.fa-twitter {
  background: none repeat scroll 0 0 #3FC1FE;
}

.post_reply ul li a i.fa-google-plus{
 background: none repeat scroll 0 0 #D34836;
}

.post_reply ul li a i:hover{
  opacity:.5;
}

.post_reply_content {
  margin: 30px;
}

.post_reply_content h1 a:hover{
  color:#FFC800;
}

.post_reply_content h4 {
  margin-bottom: 50px;
}

.reply_section .media-body{
  display:inherit;
}

.comment_section .media-body{
  display:inherit;
}

#comments_title{
   color:#4e4e4e;
   font-weight:700px;
   font-size:20px;
   margin-top:60px;
   margin-bottom:40px;
}
.comment_section {
  margin-top: 30px;
  position: relative;
}

.post_comments img {
  width: 85px;
  height: 85px;
  margin-top: 35px;
}

.post_reply_comments {
  background:#f5f5f5;
  border-radius: 4px;
  padding: 30px;
}

.post_reply_comments:before {
  border-color: transparent #F0F0F0 transparent transparent;
  border-style: solid;
  border-width: 15px;
  content: " ";
  height: 0;
  left: 75px;
  position: absolute;
  top: 20px;
}

.post_reply_comments h3, 
.post_reply_content h3{
  margin-top: 0;
}

.post_reply_comments h1 a:hover{
  color:#c52d2f;
}

.post_reply_comments h4{
  color:#c4c4c5;
  font-weight:400;
}

.post_reply_comments p {
  padding-bottom: 30px;
}

.post_reply_comments a {
  bottom: 15px;
  position: absolute;
  right: 30px;
  background: #c52d2f;
  color: #fff;
  border-radius: 5px;
  padding: 8px 20px;
}

.post_reply_comments a:before {
  border-color: #c52d2f transparent transparent;
  border-style: solid;
  border-width: 16px;
  bottom: -11px;
  content: "";
  height: 0;
  left: -12px;
  position: absolute;
  z-index: 99999;
}

.post_reply_comments h2 a{
 
}

.message_heading {
  margin-bottom: 50px;
  margin-top: 60px;
}


/******************
 404 page css
 ******************/

#error .btn-success:hover, 
.btn-success:focus, 
.btn-success:active, 
.btn-success.active, 
.open .dropdown-toggle.btn-success:hover {
  background-color: #EBEBEB;
  border-color: #EBEBEB;
  color: #4E4E4E;
}

#error h1{
  color: #4e4e4e;
  text-transform: uppercase;
}


/******************
shortcodes page css
******************/

.shortcode-item {
  padding-bottom: 0;
}

.shortcode-item h2 {
  color: #4E4E4E;
  font-size: 24px;
  margin-bottom: 22px;
  margin-top: 0;
  font-weight: 600
}



/***********************
********* Footer ******
************************/
#bottom {
  background: #f5f5f5;
  border-bottom: 5px solid #c52d2f;
  font-size: 14px;
}

#bottom h3 {
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size:22px;
  color: #000;
}

#bottom ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#bottom ul li {
  display: block;
  padding: 5px 0;
}

#bottom ul li a {
  color: #808080;
}

#bottom ul li a:hover {
  color: #c52d2f;
}

#bottom .widget {
  margin-bottom: 0;
}

#footer {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  background: #2e2e2e;
}

#footer a {
  color: #fff;
}

#footer a:hover {
  color: #c52d2f;
}

#footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer ul > li {
  display: inline-block;
  margin-left: 15px;
}







div.pp_default .pp_top,div.pp_default .pp_top .pp_middle,div.pp_default .pp_top .pp_left,div.pp_default .pp_top .pp_right,div.pp_default .pp_bottom,div.pp_default .pp_bottom .pp_left,div.pp_default .pp_bottom .pp_middle,div.pp_default .pp_bottom .pp_right{height:13px}
div.pp_default .pp_top .pp_left{background:url(../images/prettyPhoto/default/sprite.png) -78px -93px no-repeat}
div.pp_default .pp_top .pp_middle{background:url(../images/prettyPhoto/default/sprite_x.png) top left repeat-x}
div.pp_default .pp_top .pp_right{background:url(../images/prettyPhoto/default/sprite.png) -112px -93px no-repeat}
div.pp_default .pp_content .ppt{color:#f8f8f8}
div.pp_default .pp_content_container .pp_left{background:url(../images/prettyPhoto/default/sprite_y.png) -7px 0 repeat-y;padding-left:13px}
div.pp_default .pp_content_container .pp_right{background:url(../images/prettyPhoto/default/sprite_y.png) top right repeat-y;padding-right:13px}
div.pp_default .pp_next:hover{background:url(../images/prettyPhoto/default/sprite_next.png) center right no-repeat;cursor:pointer}
div.pp_default .pp_previous:hover{background:url(../images/prettyPhoto/default/sprite_prev.png) center left no-repeat;cursor:pointer}
div.pp_default .pp_expand{background:url(../images/prettyPhoto/default/sprite.png) 0 -29px no-repeat;cursor:pointer;width:28px;height:28px}
div.pp_default .pp_expand:hover{background:url(../images/prettyPhoto/default/sprite.png) 0 -56px no-repeat;cursor:pointer}
div.pp_default .pp_contract{background:url(../images/prettyPhoto/default/sprite.png) 0 -84px no-repeat;cursor:pointer;width:28px;height:28px}
div.pp_default .pp_contract:hover{background:url(../images/prettyPhoto/default/sprite.png) 0 -113px no-repeat;cursor:pointer}
div.pp_default .pp_close{width:30px;height:30px;background:url(../images/prettyPhoto/default/sprite.png) 2px 1px no-repeat;cursor:pointer}
div.pp_default .pp_gallery ul li a{background:url(../images/prettyPhoto/default/default_thumb.png) center center #f8f8f8;border:1px solid #aaa}
div.pp_default .pp_social{margin-top:7px}
div.pp_default .pp_gallery a.pp_arrow_previous,div.pp_default .pp_gallery a.pp_arrow_next{position:static;left:auto}
div.pp_default .pp_nav .pp_play,div.pp_default .pp_nav .pp_pause{background:url(../images/prettyPhoto/default/sprite.png) -51px 1px no-repeat;height:30px;width:30px}
div.pp_default .pp_nav .pp_pause{background-position:-51px -29px}
div.pp_default a.pp_arrow_previous,div.pp_default a.pp_arrow_next{background:url(../images/prettyPhoto/default/sprite.png) -31px -3px no-repeat;height:20px;width:20px;margin:4px 0 0}
div.pp_default a.pp_arrow_next{left:52px;background-position:-82px -3px}
div.pp_default .pp_content_container .pp_details{margin-top:5px}
div.pp_default .pp_nav{clear:none;height:30px;width:110px;position:relative}
div.pp_default .pp_nav .currentTextHolder{font-family:Georgia;font-style:italic;color:#999;font-size:11px;left:75px;line-height:25px;position:absolute;top:2px;margin:0;padding:0 0 0 10px}
div.pp_default .pp_close:hover,div.pp_default .pp_nav .pp_play:hover,div.pp_default .pp_nav .pp_pause:hover,div.pp_default .pp_arrow_next:hover,div.pp_default .pp_arrow_previous:hover{opacity:0.7}
div.pp_default .pp_description{font-size:11px;font-weight:700;line-height:14px;margin:5px 50px 5px 0}
div.pp_default .pp_bottom .pp_left{background:url(../images/prettyPhoto/default/sprite.png) -78px -127px no-repeat}
div.pp_default .pp_bottom .pp_middle{background:url(../images/prettyPhoto/default/sprite_x.png) bottom left repeat-x}
div.pp_default .pp_bottom .pp_right{background:url(../images/prettyPhoto/default/sprite.png) -112px -127px no-repeat}
div.pp_default .pp_loaderIcon{background:url(../images/prettyPhoto/default/loader.gif) center center no-repeat}
div.light_rounded .pp_top .pp_left{background:url(../images/prettyPhoto/light_rounded/sprite.png) -88px -53px no-repeat}
div.light_rounded .pp_top .pp_right{background:url(../images/prettyPhoto/light_rounded/sprite.png) -110px -53px no-repeat}
div.light_rounded .pp_next:hover{background:url(../images/prettyPhoto/light_rounded/btnNext.png) center right no-repeat;cursor:pointer}
div.light_rounded .pp_previous:hover{background:url(../images/prettyPhoto/light_rounded/btnPrevious.png) center left no-repeat;cursor:pointer}
div.light_rounded .pp_expand{background:url(../images/prettyPhoto/light_rounded/sprite.png) -31px -26px no-repeat;cursor:pointer}
div.light_rounded .pp_expand:hover{background:url(../images/prettyPhoto/light_rounded/sprite.png) -31px -47px no-repeat;cursor:pointer}
div.light_rounded .pp_contract{background:url(../images/prettyPhoto/light_rounded/sprite.png) 0 -26px no-repeat;cursor:pointer}
div.light_rounded .pp_contract:hover{background:url(../images/prettyPhoto/light_rounded/sprite.png) 0 -47px no-repeat;cursor:pointer}
div.light_rounded .pp_close{width:75px;height:22px;background:url(../images/prettyPhoto/light_rounded/sprite.png) -1px -1px no-repeat;cursor:pointer}
div.light_rounded .pp_nav .pp_play{background:url(../images/prettyPhoto/light_rounded/sprite.png) -1px -100px no-repeat;height:15px;width:14px}
div.light_rounded .pp_nav .pp_pause{background:url(../images/prettyPhoto/light_rounded/sprite.png) -24px -100px no-repeat;height:15px;width:14px}
div.light_rounded .pp_arrow_previous{background:url(../images/prettyPhoto/light_rounded/sprite.png) 0 -71px no-repeat}
div.light_rounded .pp_arrow_next{background:url(../images/prettyPhoto/light_rounded/sprite.png) -22px -71px no-repeat}
div.light_rounded .pp_bottom .pp_left{background:url(../images/prettyPhoto/light_rounded/sprite.png) -88px -80px no-repeat}
div.light_rounded .pp_bottom .pp_right{background:url(../images/prettyPhoto/light_rounded/sprite.png) -110px -80px no-repeat}
div.dark_rounded .pp_top .pp_left{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -88px -53px no-repeat}
div.dark_rounded .pp_top .pp_right{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -110px -53px no-repeat}
div.dark_rounded .pp_content_container .pp_left{background:url(../images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat-y}
div.dark_rounded .pp_content_container .pp_right{background:url(../images/prettyPhoto/dark_rounded/contentPattern.png) top right repeat-y}
div.dark_rounded .pp_next:hover{background:url(../images/prettyPhoto/dark_rounded/btnNext.png) center right no-repeat;cursor:pointer}
div.dark_rounded .pp_previous:hover{background:url(../images/prettyPhoto/dark_rounded/btnPrevious.png) center left no-repeat;cursor:pointer}
div.dark_rounded .pp_expand{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -31px -26px no-repeat;cursor:pointer}
div.dark_rounded .pp_expand:hover{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -31px -47px no-repeat;cursor:pointer}
div.dark_rounded .pp_contract{background:url(../images/prettyPhoto/dark_rounded/sprite.png) 0 -26px no-repeat;cursor:pointer}
div.dark_rounded .pp_contract:hover{background:url(../images/prettyPhoto/dark_rounded/sprite.png) 0 -47px no-repeat;cursor:pointer}
div.dark_rounded .pp_close{width:75px;height:22px;background:url(../images/prettyPhoto/dark_rounded/sprite.png) -1px -1px no-repeat;cursor:pointer}
div.dark_rounded .pp_description{margin-right:85px;color:#fff}
div.dark_rounded .pp_nav .pp_play{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -1px -100px no-repeat;height:15px;width:14px}
div.dark_rounded .pp_nav .pp_pause{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -24px -100px no-repeat;height:15px;width:14px}
div.dark_rounded .pp_arrow_previous{background:url(../images/prettyPhoto/dark_rounded/sprite.png) 0 -71px no-repeat}
div.dark_rounded .pp_arrow_next{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -22px -71px no-repeat}
div.dark_rounded .pp_bottom .pp_left{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -88px -80px no-repeat}
div.dark_rounded .pp_bottom .pp_right{background:url(../images/prettyPhoto/dark_rounded/sprite.png) -110px -80px no-repeat}
div.dark_rounded .pp_loaderIcon{background:url(../images/prettyPhoto/dark_rounded/loader.gif) center center no-repeat}
div.dark_square .pp_left,div.dark_square .pp_middle,div.dark_square .pp_right,div.dark_square .pp_content{background:#000}
div.dark_square .pp_description{color:#fff;margin:0 85px 0 0}
div.dark_square .pp_loaderIcon{background:url(../images/prettyPhoto/dark_square/loader.gif) center center no-repeat}
div.dark_square .pp_expand{background:url(../images/prettyPhoto/dark_square/sprite.png) -31px -26px no-repeat;cursor:pointer}
div.dark_square .pp_expand:hover{background:url(../images/prettyPhoto/dark_square/sprite.png) -31px -47px no-repeat;cursor:pointer}
div.dark_square .pp_contract{background:url(../images/prettyPhoto/dark_square/sprite.png) 0 -26px no-repeat;cursor:pointer}
div.dark_square .pp_contract:hover{background:url(../images/prettyPhoto/dark_square/sprite.png) 0 -47px no-repeat;cursor:pointer}
div.dark_square .pp_close{width:75px;height:22px;background:url(../images/prettyPhoto/dark_square/sprite.png) -1px -1px no-repeat;cursor:pointer}
div.dark_square .pp_nav{clear:none}
div.dark_square .pp_nav .pp_play{background:url(../images/prettyPhoto/dark_square/sprite.png) -1px -100px no-repeat;height:15px;width:14px}
div.dark_square .pp_nav .pp_pause{background:url(../images/prettyPhoto/dark_square/sprite.png) -24px -100px no-repeat;height:15px;width:14px}
div.dark_square .pp_arrow_previous{background:url(../images/prettyPhoto/dark_square/sprite.png) 0 -71px no-repeat}
div.dark_square .pp_arrow_next{background:url(../images/prettyPhoto/dark_square/sprite.png) -22px -71px no-repeat}
div.dark_square .pp_next:hover{background:url(../images/prettyPhoto/dark_square/btnNext.png) center right no-repeat;cursor:pointer}
div.dark_square .pp_previous:hover{background:url(../images/prettyPhoto/dark_square/btnPrevious.png) center left no-repeat;cursor:pointer}
div.light_square .pp_expand{background:url(../images/prettyPhoto/light_square/sprite.png) -31px -26px no-repeat;cursor:pointer}
div.light_square .pp_expand:hover{background:url(../images/prettyPhoto/light_square/sprite.png) -31px -47px no-repeat;cursor:pointer}
div.light_square .pp_contract{background:url(../images/prettyPhoto/light_square/sprite.png) 0 -26px no-repeat;cursor:pointer}
div.light_square .pp_contract:hover{background:url(../images/prettyPhoto/light_square/sprite.png) 0 -47px no-repeat;cursor:pointer}
div.light_square .pp_close{width:75px;height:22px;background:url(../images/prettyPhoto/light_square/sprite.png) -1px -1px no-repeat;cursor:pointer}
div.light_square .pp_nav .pp_play{background:url(../images/prettyPhoto/light_square/sprite.png) -1px -100px no-repeat;height:15px;width:14px}
div.light_square .pp_nav .pp_pause{background:url(../images/prettyPhoto/light_square/sprite.png) -24px -100px no-repeat;height:15px;width:14px}
div.light_square .pp_arrow_previous{background:url(../images/prettyPhoto/light_square/sprite.png) 0 -71px no-repeat}
div.light_square .pp_arrow_next{background:url(../images/prettyPhoto/light_square/sprite.png) -22px -71px no-repeat}
div.light_square .pp_next:hover{background:url(../images/prettyPhoto/light_square/btnNext.png) center right no-repeat;cursor:pointer}
div.light_square .pp_previous:hover{background:url(../images/prettyPhoto/light_square/btnPrevious.png) center left no-repeat;cursor:pointer}
div.facebook .pp_top .pp_left{background:url(../images/prettyPhoto/facebook/sprite.png) -88px -53px no-repeat}
div.facebook .pp_top .pp_middle{background:url(../images/prettyPhoto/facebook/contentPatternTop.png) top left repeat-x}
div.facebook .pp_top .pp_right{background:url(../images/prettyPhoto/facebook/sprite.png) -110px -53px no-repeat}
div.facebook .pp_content_container .pp_left{background:url(../images/prettyPhoto/facebook/contentPatternLeft.png) top left repeat-y}
div.facebook .pp_content_container .pp_right{background:url(../images/prettyPhoto/facebook/contentPatternRight.png) top right repeat-y}
div.facebook .pp_expand{background:url(../images/prettyPhoto/facebook/sprite.png) -31px -26px no-repeat;cursor:pointer}
div.facebook .pp_expand:hover{background:url(../images/prettyPhoto/facebook/sprite.png) -31px -47px no-repeat;cursor:pointer}
div.facebook .pp_contract{background:url(../images/prettyPhoto/facebook/sprite.png) 0 -26px no-repeat;cursor:pointer}
div.facebook .pp_contract:hover{background:url(../images/prettyPhoto/facebook/sprite.png) 0 -47px no-repeat;cursor:pointer}
div.facebook .pp_close{width:22px;height:22px;background:url(../images/prettyPhoto/facebook/sprite.png) -1px -1px no-repeat;cursor:pointer}
div.facebook .pp_description{margin:0 37px 0 0}
div.facebook .pp_loaderIcon{background:url(../images/prettyPhoto/facebook/loader.gif) center center no-repeat}
div.facebook .pp_arrow_previous{background:url(../images/prettyPhoto/facebook/sprite.png) 0 -71px no-repeat;height:22px;margin-top:0;width:22px}
div.facebook .pp_arrow_previous.disabled{background-position:0 -96px;cursor:default}
div.facebook .pp_arrow_next{background:url(../images/prettyPhoto/facebook/sprite.png) -32px -71px no-repeat;height:22px;margin-top:0;width:22px}
div.facebook .pp_arrow_next.disabled{background-position:-32px -96px;cursor:default}
div.facebook .pp_nav{margin-top:0}
div.facebook .pp_nav p{font-size:15px;padding:0 3px 0 4px}
div.facebook .pp_nav .pp_play{background:url(../images/prettyPhoto/facebook/sprite.png) -1px -123px no-repeat;height:22px;width:22px}
div.facebook .pp_nav .pp_pause{background:url(../images/prettyPhoto/facebook/sprite.png) -32px -123px no-repeat;height:22px;width:22px}
div.facebook .pp_next:hover{background:url(../images/prettyPhoto/facebook/btnNext.png) center right no-repeat;cursor:pointer}
div.facebook .pp_previous:hover{background:url(../images/prettyPhoto/facebook/btnPrevious.png) center left no-repeat;cursor:pointer}
div.facebook .pp_bottom .pp_left{background:url(../images/prettyPhoto/facebook/sprite.png) -88px -80px no-repeat}
div.facebook .pp_bottom .pp_middle{background:url(../images/prettyPhoto/facebook/contentPatternBottom.png) top left repeat-x}
div.facebook .pp_bottom .pp_right{background:url(../images/prettyPhoto/facebook/sprite.png) -110px -80px no-repeat}
div.pp_pic_holder a:focus{outline:none}
div.pp_overlay{background:#000;display:none;left:0;position:absolute;top:0;width:100%;z-index:9500}
div.pp_pic_holder{display:none;position:absolute;width:100px;z-index:10000}
.pp_content{height:40px;min-width:40px}
* html .pp_content{width:40px}
.pp_content_container{position:relative;text-align:left;width:100%}
.pp_content_container .pp_left{padding-left:20px}
.pp_content_container .pp_right{padding-right:20px}
.pp_content_container .pp_details{float:left;margin:10px 0 2px}
.pp_description{display:none;margin:0}
.pp_social{float:left;margin:0}
.pp_social .facebook{float:left;margin-left:5px;width:55px;overflow:hidden}
.pp_social .twitter{float:left}
.pp_nav{clear:right;float:left;margin:3px 10px 0 0}
.pp_nav p{float:left;white-space:nowrap;margin:2px 4px}
.pp_nav .pp_play,.pp_nav .pp_pause{float:left;margin-right:4px;text-indent:-10000px}
a.pp_arrow_previous,a.pp_arrow_next{display:block;float:left;height:15px;margin-top:3px;overflow:hidden;text-indent:-10000px;width:14px}
.pp_hoverContainer{position:absolute;top:0;width:100%;z-index:2000}
.pp_gallery{display:none;left:50%;margin-top:-50px;position:absolute;z-index:10000}
.pp_gallery div{float:left;overflow:hidden;position:relative}
.pp_gallery ul{float:left;height:35px;position:relative;white-space:nowrap;margin:0 0 0 5px;padding:0}
.pp_gallery ul a{border:1px rgba(0,0,0,0.5) solid;display:block;float:left;height:33px;overflow:hidden}
.pp_gallery ul a img{border:0}
.pp_gallery li{display:block;float:left;margin:0 5px 0 0;padding:0}
.pp_gallery li.default a{background:url(../images/prettyPhoto/facebook/default_thumbnail.gif) 0 0 no-repeat;display:block;height:33px;width:50px}
.pp_gallery .pp_arrow_previous,.pp_gallery .pp_arrow_next{margin-top:7px!important}
a.pp_next{background:url(../images/prettyPhoto/light_rounded/btnNext.png) 10000px 10000px no-repeat;display:block;float:right;height:100%;text-indent:-10000px;width:49%}
a.pp_previous{background:url(../images/prettyPhoto/light_rounded/btnNext.png) 10000px 10000px no-repeat;display:block;float:left;height:100%;text-indent:-10000px;width:49%}
a.pp_expand,a.pp_contract{cursor:pointer;display:none;height:20px;position:absolute;right:30px;text-indent:-10000px;top:10px;width:20px;z-index:20000}
a.pp_close{position:absolute;right:0;top:0;display:block;line-height:22px;text-indent:-10000px}
.pp_loaderIcon{display:block;height:24px;left:50%;position:absolute;top:50%;width:24px;margin:-12px 0 0 -12px}
#pp_full_res{line-height:1!important}
#pp_full_res .pp_inline{text-align:left}
#pp_full_res .pp_inline p{margin:0 0 15px}
div.ppt{color:#fff;display:none;font-size:17px;z-index:9999;margin:0 0 5px 15px}
div.pp_default .pp_content,div.light_rounded .pp_content{background-color:#fff}
div.pp_default #pp_full_res .pp_inline,div.light_rounded .pp_content .ppt,div.light_rounded #pp_full_res .pp_inline,div.light_square .pp_content .ppt,div.light_square #pp_full_res .pp_inline,div.facebook .pp_content .ppt,div.facebook #pp_full_res .pp_inline{color:#000}
div.pp_default .pp_gallery ul li a:hover,div.pp_default .pp_gallery ul li.selected a,.pp_gallery ul a:hover,.pp_gallery li.selected a{border-color:#fff}
div.pp_default .pp_details,div.light_rounded .pp_details,div.dark_rounded .pp_details,div.dark_square .pp_details,div.light_square .pp_details,div.facebook .pp_details{position:relative}
div.light_rounded .pp_top .pp_middle,div.light_rounded .pp_content_container .pp_left,div.light_rounded .pp_content_container .pp_right,div.light_rounded .pp_bottom .pp_middle,div.light_square .pp_left,div.light_square .pp_middle,div.light_square .pp_right,div.light_square .pp_content,div.facebook .pp_content{background:#fff}
div.light_rounded .pp_description,div.light_square .pp_description{margin-right:85px}
div.light_rounded .pp_gallery a.pp_arrow_previous,div.light_rounded .pp_gallery a.pp_arrow_next,div.dark_rounded .pp_gallery a.pp_arrow_previous,div.dark_rounded .pp_gallery a.pp_arrow_next,div.dark_square .pp_gallery a.pp_arrow_previous,div.dark_square .pp_gallery a.pp_arrow_next,div.light_square .pp_gallery a.pp_arrow_previous,div.light_square .pp_gallery a.pp_arrow_next{margin-top:12px!important}
div.light_rounded .pp_arrow_previous.disabled,div.dark_rounded .pp_arrow_previous.disabled,div.dark_square .pp_arrow_previous.disabled,div.light_square .pp_arrow_previous.disabled{background-position:0 -87px;cursor:default}
div.light_rounded .pp_arrow_next.disabled,div.dark_rounded .pp_arrow_next.disabled,div.dark_square .pp_arrow_next.disabled,div.light_square .pp_arrow_next.disabled{background-position:-22px -87px;cursor:default}
div.light_rounded .pp_loaderIcon,div.light_square .pp_loaderIcon{background:url(../images/prettyPhoto/light_rounded/loader.gif) center center no-repeat}
div.dark_rounded .pp_top .pp_middle,div.dark_rounded .pp_content,div.dark_rounded .pp_bottom .pp_middle{background:url(../images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat}
div.dark_rounded .currentTextHolder,div.dark_square .currentTextHolder{color:#c4c4c4}
div.dark_rounded #pp_full_res .pp_inline,div.dark_square #pp_full_res .pp_inline{color:#fff}
.pp_top,.pp_bottom{height:20px;position:relative}
* html .pp_top,* html .pp_bottom{padding:0 20px}
.pp_top .pp_left,.pp_bottom .pp_left{height:20px;left:0;position:absolute;width:20px}
.pp_top .pp_middle,.pp_bottom .pp_middle{height:20px;left:20px;position:absolute;right:20px}
* html .pp_top .pp_middle,* html .pp_bottom .pp_middle{left:0;position:static}
.pp_top .pp_right,.pp_bottom .pp_right{height:20px;left:auto;position:absolute;right:0;top:0;width:20px}
.pp_fade,.pp_gallery li.default a img{display:none}
/* lg */ 
@media (min-width: 1200px) {
 /* Make Navigation Toggle on Desktop Hover */
  .dropdown:hover .dropdown-menu {
      display: block;
      -webkit-animation: fadeInUp 400ms;
      animation: fadeInUp 400ms;
  }

  #portfolio .row {
    margin-left: -10px;
    margin-right: -10px;
  }

  

}

/* md */
@media (min-width: 992px) and (max-width: 1199px) {
  
 /* Make Navigation Toggle on Desktop Hover */
  .dropdown:hover .dropdown-menu {
      display: block;
      -webkit-animation: fadeInUp 400ms;
      animation: fadeInUp 400ms;
  }

  .navbar-nav > li {
    margin-left: 10px;
  }

  .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }

  .recent-work-wrap .recent-work-inner h3 a {
    font-size: 20px;
  }

  .recent-work-wrap .overlay{
    padding: 15px;
  }

  .services-wrap {
    padding: 40px 10px 40px 30px;
  }

  .feature-wrap h2, 
  .single-services h2 {
    font-size: 18px;
  }

  .feature-wrap h3, 
  .single-services h3{
    font-size: 14px;
  }

  .tab-wrap .media .parrent.pull-left{
    clear: both;
    width: 100%;
  }

  .tab-wrap .media .parrent.media-body{
    clear: both;
  }

  #portfolio .row {
    margin-left: -10px;
    margin-right: -10px;
  }

  .recent-work-wrap .overlay .preview{
    line-height: inherit;
  }

  .team-bar .first-arrow {
    width: 21%;
  }

  .team-bar .second-arrow {
    width: 20%;
  }

  .team-bar .third-arrow {
    width: 21%;
  }

  .team-bar .fourth-arrow {
    width: 20%;
  }

  ul.social_icons li{
    margin-right: 0;
  }

}


/* sm */
@media (min-width: 768px) and (max-width: 991px) {
  /* Make Navigation Toggle on Desktop Hover */
  .dropdown:hover .dropdown-menu {
      display: block;
      -webkit-animation: fadeInUp 400ms;
      animation: fadeInUp 400ms;
  }

  .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-nav > li {
    margin-left: 0;
  }

  #main-slider .carousel h1 {
    font-size: 25px;
  }

  #main-slider .carousel h2 {
    font-size: 20px;
  }

  .tab-wrap .media .parrent.pull-left, 
  .media.accordion-inner .pull-left{
    clear: both;
    width: 100%;
  }

  .tab-wrap .media .parrent.media-body, 
  .media.accordion-inner .media-body{
    clear: both;
  }

  .services-wrap {
    padding: 40px 0 40px 30px;
  }

  .recent-work-wrap .overlay{
   padding: 15px;
  }

  .recent-work-wrap .recent-work-inner h3 a {
    font-size: 20px;
  }

  .sinlge-skill{
    width: 150px;
    height: 150px;
  } 

  .sinlge-skill p em {
    font-size: 25px;
  }

  .sinlge-skill p {
    font-size: 16px;
  }

  .team-bar .first-one-arrow {
    width: 2%;
  }

  .team-bar .first-arrow {
    width: 18%;
  }

  .team-bar .second-arrow {
    width: 24%;
  }

  .team-bar .third-arrow {
    width: 15%;
  }

  .team-bar .fourth-arrow {
    width: 20%;
  }

  .blog .blog-item .entry-meta > span a{
    font-size: 10px;
  }
}

/* xs */
@media (max-width: 767px) {
  .container > .navbar-header, .container > .navbar-collapse{
    margin-left: 0;
  }

  .top-number{
    font-size: 14px;
  }

  input.search-form:hover {
    width: 120px;
  }

  .navbar-nav > li {
    padding-bottom: 0;
  }

  #main-slider .carousel h1 {
    font-size: 25px;
  }

  #main-slider .carousel h2 {
    font-size: 16px;
  }

  .feature-wrap h2, 
  .single-services h2 {
    font-size: 18px;
  }

  .feature-wrap h3, 
  .single-services h3{
    font-size: 14px;
  }


  .media.accordion-inner .pull-left, 
  .media.accordion-inner .media-body{
    clear: both;
  }

  .accordion-inner h4 {
    margin-top: 10px;
  }

  .tab-wrap .media .pull-left{
    clear: both;
    width: 100%;
  }

  .tab-wrap .media .media-body{
    clear: both;
  }

  .nav-tabs > li.active > a:after{
    display: none;
  }

  #footer .col-sm-6{
      text-align:center;
  }
  
   #footer .pull-right{
      float: none !important;
  }

  .sinlge-skill {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .team .single-profile-top, 
  .team .single-profile-bottom {
    margin-bottom: 30px;
  }

  .clients-area {
    padding: 60px 0;
  }

  .clients-area h1 {
    font-size: 25px;
  }

  .portfolio-item, 
  #recent-works .col-xs-12.col-sm-4.col-md-3{
    padding:0 15px;
  }

  ul.social_icons li{
    margin-right: 0;
  }

  .blog .blog-item .entry-meta{
    margin-bottom: 20px;
  }

  .blog .blog-item .blog-content h3 {
    margin-bottom: 20px;
  }

  .post_reply_comments {
    padding-left: 20px;
  }
    

}

/* XS Portrait */
@media (max-width: 480px) {


}

