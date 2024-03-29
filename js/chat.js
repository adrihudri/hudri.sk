"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }
        return function(t, n, s) {
            return n && e(t.prototype, n), s && e(t, s), t
        }
    }(),
    Chat = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return _classCallCheck(this, e), this.config = Object.assign({}, e.defaultConfig, n), this.state = {
                hasSeenMaxCharResponse: !1
            }, this.callbacks = {}, this.messages = t, this.conversation = document.createElement("ol"), this.conversation.className = "cui__list", this.answers = document.createElement("div"), this.answers.className = "cui__responses", this.hostElement = document.querySelector(this.config.targetNode), this.hostElement || console.warn("Host element coulndt be attached. Node not found"), this.hostElement.classList.add("cui"), this.hostElement.appendChild(this.conversation), this.hostElement.appendChild(this.answers), this.say(this.messages.greeting), this
        }
        return _createClass(e, [{
            key: "getAbsoluteRect",
            value: function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.top + window.pageYOffset,
                    s = t.left + window.pageXOffset;
                return {
                    x: s,
                    y: n
                }
            }
        }, {
            key: "setMessages",
            value: function(e) {
                this.messages = e
            }
        }, {
            key: "scrollIntoView",
            value: function(e) {
                var t = this.hostElement.getBoundingClientRect(),
                    n = t.bottom - window.innerHeight,
                    s = document.querySelector(this.config.scrollNode),
                    i = function a() {
                        n > 0 && (s.scrollTop = s.scrollTop + 10, n -= 10, window.requestAnimationFrame(a))
                    };
                i()
            }
        }, {
            key: "emit",
            value: function(e, t) {
                (this.callbacks[e] || function() {}).call(this, t)
            }
        }, {
            key: "on",
            value: function(e, t) {
                return this.callbacks[e] = t, this
            }
        }, {
            key: "animateResponse",
            value: function(e, t, n) {
                var s = this;
                this.addSpeechBubble(t, !0);
                var i = [].slice.call(e.parentNode.children),
                    a = this.getAbsoluteRect(t),
                    o = this.getAbsoluteRect(e),
                    r = a.x - o.x,
                    c = a.y - o.y;
                e.style.transform = "translate3d(" + r + "px, " + c + "px, 0)", t.style.opacity = 0, e.addEventListener("transitionend", function() {
                    n.call(s, e), e.parentNode.innerHTML = "", t.style.opacity = 1
                }, !1), i.forEach(function(t) {
                    if (t !== e) return t.style.transform = "translate3d(0, 100px, 0)"
                })
            }
        }, {
            key: "createSpeechBubble",
            value: function(e) {
                var t = document.createElement("div"),
                    n = "response" === e.type ? "cui__bubble cui__bubble--response" : "cui__bubble";
                return t.setAttribute("class", n), t.innerHTML = e.text, t
            }
        }, {
            key: "createAnswerButton",
            value: function(e, t) {
                var n = this,
                    s = Object.assign({}, {
                        delay: 0,
                        onFinish: function() {}
                    }, t),
                    i = this.createSpeechBubble({
                        text: e.text || "",
                        type: "response"
                    });
                return i.style.transform = "translate3d(0, 72px, 0)", this.answers.appendChild(i), setTimeout(function() {
                    i.style.transform = "translate3d(0, 0, 0)", i.addEventListener("transitionend", setTimeout(s.onFinish.bind(n, i), 750))
                }, 450 + s.delay), i
            }
        }, {
            key: "chooseAnswer",
            value: function(e) {
                var t = this,
                    n = e.answers.map(function(e, n) {
                        return t.createAnswerButton(e, {
                            delay: 65 + 65 * n
                        })
                    });
                n.forEach(function(n, s) {
                    n.addEventListener("click", function(i) {
                        t.animateResponse(n, n.cloneNode(!0), function() {
                            t.say(t.messages[e.answers[s].path]), t.emit("answer", {
                                item: e.answers[s]
                            })
                        })
                    })
                })
            }
        }, {
            key: "writeAnswer",
            value: function(e) {
                var t = this,
                    n = this.createAnswerButton(e, {
                        onFinish: function(e) {
                            e.focus()
                        }
                    });
                n.classList.add("cui__answers__placeholder"), n.setAttribute("contentEditable", !0), n.addEventListener("paste", function(e) {
                    requestAnimationFrame(function() {
                        n.innerHTML = n.innerText
                    })
                }), n.addEventListener("keyup", function(e) {
                    return n.innerText.length ? void n.classList.remove("cui__answers__placeholder") : (n.classList.add("cui__answers__placeholder"), n.focus())
                });
                var s = !1,
                    i = function() {
                        n.innerText.length && !s && (s = !0, t.animateResponse(n, n.cloneNode(!0), function(n) {
                            e.path && t.say(t.messages[e.path]), t.emit("answer", {
                                item: e,
                                text: n.innerHTML
                            })
                        }))
                    };
                n.addEventListener("blur", i.bind(this)), n.addEventListener("keydown", function(e) {
                    13 === e.keyCode && (e.preventDefault(), n.removeEventListener("blur", i), i())
                }), n.addEventListener("keypress", function(e) {
                    n.innerText.length > t.config.maxCharsResponse && (e.preventDefault(), t.state.hasSeenMaxCharResponse || (t.state.hasSeenMaxCharResponse = !0, t.say([t.config.maxCharsResponseText])))
                })
            }
        }, {
            key: "addSpeechBubble",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = document.createElement("li");
                if (s.classList.add("cui__list__item"), s.appendChild(e), this.conversation.appendChild(s), !n) {
                    var i = e.getBoundingClientRect();
                    window.getComputedStyle(e).opacity, e.classList.add("cui__bubble--slideIn");
                    var a = e.innerHTML.indexOf("iframe") >= 0;
                    a && e.classList.add("cui__bubble--embed");
                    var o = e.innerHTML;
                    e.innerHTML = "...", e.addEventListener("transitionend", function(n) {
                        "min-width" === n.propertyName && (e.innerHTML = o, e.removeAttribute("style"), t.scrollIntoView())
                    }), setTimeout(function() {
                        e.style.minHeight = i.height + "px", e.style.minWidth = i.width + "px", e.classList.add("cui__bubble--fade"), setTimeout(function() {
                            e.innerHTML = o, e.removeAttribute("style"), a || t.scrollIntoView()
                        }, 350)
                    }, this.config.chatDelay)
                }
            }
        }, {
            key: "say",
            value: function(e) {
                var t = this;
                e.forEach(function(e, n) {
                    setTimeout(function() {
                        if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) switch (e.type) {
                            case "choose":
                                return t.chooseAnswer(e);
                            case "write":
                                return t.writeAnswer(e)
                        }
                        var n = t.createSpeechBubble({
                            text: e
                        });
                        t.addSpeechBubble(n)
                    }, t.config.chatDelay * n + n * n * 70)
                })
            }
        }]), e
    }();
Chat.defaultConfig = {
    targetNode: "body",
    scrollNode: "body",
    chatDelay: 1350,
    maxCharsResponse: 120,
    maxCharsResponseText: "Let's keep it casual... no need for long messages. :)"
}, Chat.info = {
    name: "Array Chat",
    description: "A simple, array based chat UI"
};