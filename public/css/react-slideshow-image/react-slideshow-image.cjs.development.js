'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ResizeObserver = _interopDefault(require('resize-observer-polyfill'));
var tween_js = require('@tweenjs/tween.js');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var getStartingIndex = function getStartingIndex(children, defaultIndex) {
  if (defaultIndex && defaultIndex < React__default.Children.count(children)) {
    return defaultIndex;
  }
  return 0;
};
var getResponsiveSettings = function getResponsiveSettings(wrapperWidth, responsive) {
  if (typeof window !== 'undefined' && Array.isArray(responsive)) {
    return responsive.find(function (each) {
      return each.breakpoint <= wrapperWidth;
    });
  }
  return;
};
var EASING_METHODS = {
  linear: tween_js.Easing.Linear.None,
  ease: tween_js.Easing.Quadratic.InOut,
  'ease-in': tween_js.Easing.Quadratic.In,
  'ease-out': tween_js.Easing.Quadratic.Out,
  cubic: tween_js.Easing.Cubic.InOut,
  'cubic-in': tween_js.Easing.Cubic.In,
  'cubic-out': tween_js.Easing.Cubic.Out
};
var getEasing = function getEasing(easeMethod) {
  if (easeMethod) {
    return EASING_METHODS[easeMethod];
  }
  return EASING_METHODS.linear;
};
var showPreviousArrow = function showPreviousArrow(_ref, currentIndex, moveSlides) {
  var prevArrow = _ref.prevArrow,
    infinite = _ref.infinite;
  var isDisabled = currentIndex <= 0 && !infinite;
  var props = {
    'data-type': 'prev',
    'aria-label': 'Previous Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };
  if (prevArrow) {
    return /*#__PURE__*/React__default.cloneElement(prevArrow, _extends({
      className: (prevArrow.props.className || '') + " nav " + (isDisabled ? 'disabled' : '')
    }, props));
  }
  var className = "nav default-nav " + (isDisabled ? 'disabled' : '');
  return /*#__PURE__*/React__default.createElement("button", Object.assign({
    type: "button",
    className: className
  }, props), /*#__PURE__*/React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  })));
};
var showNextArrow = function showNextArrow(properties, currentIndex, moveSlides, responsiveSettings) {
  var nextArrow = properties.nextArrow,
    infinite = properties.infinite,
    children = properties.children;
  var slidesToScroll = 1;
  if (responsiveSettings) {
    slidesToScroll = responsiveSettings == null ? void 0 : responsiveSettings.settings.slidesToScroll;
  } else if ('slidesToScroll' in properties) {
    slidesToScroll = properties.slidesToScroll || 1;
  }
  var isDisabled = currentIndex >= React__default.Children.count(children) - slidesToScroll && !infinite;
  var props = {
    'data-type': 'next',
    'aria-label': 'Next Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };
  if (nextArrow) {
    return /*#__PURE__*/React__default.cloneElement(nextArrow, _extends({
      className: (nextArrow.props.className || '') + " nav " + (isDisabled ? 'disabled' : '')
    }, props));
  }
  var className = "nav default-nav " + (isDisabled ? 'disabled' : '');
  return /*#__PURE__*/React__default.createElement("button", Object.assign({
    type: "button",
    className: className
  }, props), /*#__PURE__*/React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })));
};
var showDefaultIndicator = function showDefaultIndicator(isCurrentPageActive, key, indicatorProps) {
  return /*#__PURE__*/React__default.createElement("li", {
    key: key
  }, /*#__PURE__*/React__default.createElement("button", Object.assign({
    type: "button",
    className: "each-slideshow-indicator " + (isCurrentPageActive ? 'active' : '')
  }, indicatorProps)));
};
var showCustomIndicator = function showCustomIndicator(isCurrentPageActive, key, indicatorProps, eachIndicator) {
  return /*#__PURE__*/React__default.cloneElement(eachIndicator, _extends({
    className: eachIndicator.props.className + " " + (isCurrentPageActive ? 'active' : ''),
    key: key
  }, indicatorProps));
};
var showIndicators = function showIndicators(props, currentIndex, navigate, responsiveSettings) {
  var children = props.children,
    indicators = props.indicators;
  var slidesToScroll = 1;
  if (responsiveSettings) {
    slidesToScroll = responsiveSettings == null ? void 0 : responsiveSettings.settings.slidesToScroll;
  } else if ('slidesToScroll' in props) {
    slidesToScroll = props.slidesToScroll || 1;
  }
  var pages = Math.ceil(React__default.Children.count(children) / slidesToScroll);
  return /*#__PURE__*/React__default.createElement("ul", {
    className: "indicators"
  }, Array.from({
    length: pages
  }, function (_, key) {
    var indicatorProps = {
      'data-key': key,
      'aria-label': "Go to slide " + (key + 1),
      onClick: navigate
    };
    var isCurrentPageActive = Math.floor((currentIndex + slidesToScroll - 1) / slidesToScroll) === key;
    if (typeof indicators === 'function') {
      return showCustomIndicator(isCurrentPageActive, key, indicatorProps, indicators(key));
    }
    return showDefaultIndicator(isCurrentPageActive, key, indicatorProps);
  }));
};

var defaultProps = {
  duration: 5000,
  transitionDuration: 1000,
  defaultIndex: 0,
  infinite: true,
  autoplay: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  easing: 'linear',
  canSwipe: true,
  cssClass: '',
  responsive: []
};

var FadeZoom = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var _useState = React.useState(getStartingIndex(props.children, props.defaultIndex)),
    index = _useState[0],
    setIndex = _useState[1];
  var wrapperRef = React.useRef(null);
  var innerWrapperRef = React.useRef(null);
  var tweenGroup = React.useRef(new tween_js.Group());
  var timeout = React.useRef();
  var resizeObserver = React.useRef();
  var childrenCount = React.useMemo(function () {
    return React__default.Children.count(props.children);
  }, [props.children]);
  var applyStyle = React.useCallback(function () {
    if (innerWrapperRef.current && wrapperRef.current) {
      var wrapperWidth = wrapperRef.current.clientWidth;
      var fullwidth = wrapperWidth * childrenCount;
      innerWrapperRef.current.style.width = fullwidth + "px";
      for (var _index = 0; _index < innerWrapperRef.current.children.length; _index++) {
        var eachDiv = innerWrapperRef.current.children[_index];
        if (eachDiv) {
          eachDiv.style.width = wrapperWidth + "px";
          eachDiv.style.left = _index * -wrapperWidth + "px";
          eachDiv.style.display = "block";
        }
      }
    }
  }, [wrapperRef, innerWrapperRef, childrenCount]);
  var initResizeObserver = React.useCallback(function () {
    if (wrapperRef.current) {
      resizeObserver.current = new ResizeObserver(function (entries) {
        if (!entries) return;
        applyStyle();
      });
      resizeObserver.current.observe(wrapperRef.current);
    }
  }, [wrapperRef, applyStyle]);
  var play = React.useCallback(function () {
    var autoplay = props.autoplay,
      children = props.children,
      duration = props.duration,
      infinite = props.infinite;
    if (autoplay && React__default.Children.count(children) > 1 && (infinite || index < React__default.Children.count(children) - 1)) {
      timeout.current = setTimeout(moveNext, duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, index]);
  React.useEffect(function () {
    initResizeObserver();
    return function () {
      tweenGroup.current.removeAll();
      clearTimeout(timeout.current);
      removeResizeObserver();
    };
  }, [initResizeObserver, tweenGroup]);
  React.useEffect(function () {
    clearTimeout(timeout.current);
    play();
  }, [index, props.autoplay, play]);
  React.useEffect(function () {
    applyStyle();
  }, [childrenCount, applyStyle]);
  React.useImperativeHandle(ref, function () {
    return {
      goNext: function goNext() {
        moveNext();
      },
      goBack: function goBack() {
        moveBack();
      },
      goTo: function goTo(index, options) {
        if (options != null && options.skipTransition) {
          setIndex(index);
        } else {
          moveTo(index);
        }
      }
    };
  });
  var removeResizeObserver = function removeResizeObserver() {
    if (resizeObserver.current && wrapperRef.current) {
      resizeObserver.current.unobserve(wrapperRef.current);
    }
  };
  var pauseSlides = function pauseSlides() {
    if (props.pauseOnHover) {
      clearTimeout(timeout.current);
    }
  };
  var startSlides = function startSlides() {
    var pauseOnHover = props.pauseOnHover,
      autoplay = props.autoplay,
      duration = props.duration;
    if (pauseOnHover && autoplay) {
      timeout.current = setTimeout(function () {
        return moveNext();
      }, duration);
    }
  };
  var moveNext = function moveNext() {
    var children = props.children,
      infinite = props.infinite;
    if (!infinite && index === React__default.Children.count(children) - 1) {
      return;
    }
    transitionSlide((index + 1) % React__default.Children.count(children));
  };
  var moveBack = function moveBack() {
    var children = props.children,
      infinite = props.infinite;
    if (!infinite && index === 0) {
      return;
    }
    transitionSlide(index === 0 ? React__default.Children.count(children) - 1 : index - 1);
  };
  var preTransition = function preTransition(event) {
    var currentTarget = event.currentTarget;
    if (currentTarget.dataset.type === 'prev') {
      moveBack();
    } else {
      moveNext();
    }
  };
  var animate = function animate() {
    requestAnimationFrame(animate);
    tweenGroup.current.update();
  };
  var transitionSlide = function transitionSlide(newIndex) {
    var existingTweens = tweenGroup.current.getAll();
    if (!existingTweens.length) {
      var _innerWrapperRef$curr;
      if (!((_innerWrapperRef$curr = innerWrapperRef.current) != null && _innerWrapperRef$curr.children[newIndex])) {
        newIndex = 0;
      }
      clearTimeout(timeout.current);
      var value = {
        opacity: 0,
        scale: 1
      };
      animate();
      var tween = new tween_js.Tween(value, tweenGroup.current).to({
        opacity: 1,
        scale: props.scale
      }, props.transitionDuration).onUpdate(function (value) {
        if (!innerWrapperRef.current) {
          return;
        }
        innerWrapperRef.current.children[newIndex].style.opacity = value.opacity;
        innerWrapperRef.current.children[index].style.opacity = 1 - value.opacity;
        innerWrapperRef.current.children[index].style.transform = "scale(" + value.scale + ")";
      });
      tween.easing(getEasing(props.easing));
      tween.onStart(function () {
        if (typeof props.onStartChange === 'function') {
          props.onStartChange(index, newIndex);
        }
      });
      tween.onComplete(function () {
        if (innerWrapperRef.current) {
          setIndex(newIndex);
          innerWrapperRef.current.children[index].style.transform = "scale(1)";
        }
        if (typeof props.onChange === 'function') {
          props.onChange(index, newIndex);
        }
      });
      tween.start();
    }
  };
  var moveTo = function moveTo(gotoIndex) {
    if (gotoIndex !== index) {
      transitionSlide(gotoIndex);
    }
  };
  var navigate = function navigate(event) {
    var currentTarget = event.currentTarget;
    if (!currentTarget.dataset.key) {
      return;
    }
    if (parseInt(currentTarget.dataset.key) !== index) {
      moveTo(parseInt(currentTarget.dataset.key));
    }
  };
  return /*#__PURE__*/React__default.createElement("div", {
    dir: "ltr",
    "aria-roledescription": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "react-slideshow-container " + (props.cssClass || ''),
    onMouseEnter: pauseSlides,
    onMouseOver: pauseSlides,
    onMouseLeave: startSlides
  }, props.arrows && showPreviousArrow(props, index, preTransition), /*#__PURE__*/React__default.createElement("div", {
    className: "react-slideshow-fadezoom-wrapper " + props.cssClass,
    ref: wrapperRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "react-slideshow-fadezoom-images-wrap",
    ref: innerWrapperRef
  }, (React__default.Children.map(props.children, function (thisArg) {
    return thisArg;
  }) || []).map(function (each, key) {
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        opacity: key === index ? '1' : '0',
        zIndex: key === index ? '1' : '0'
      },
      "data-index": key,
      key: key,
      "aria-roledescription": "slide",
      "aria-hidden": key === index ? 'false' : 'true'
    }, each);
  }))), props.arrows && showNextArrow(props, index, preTransition)), props.indicators && showIndicators(props, index, navigate));
});
FadeZoom.defaultProps = defaultProps;

var Fade = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(FadeZoom, Object.assign({}, props, {
    scale: 1,
    ref: ref
  }));
});
Fade.defaultProps = defaultProps;

var Zoom = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(FadeZoom, Object.assign({}, props, {
    ref: ref
  }));
});
Zoom.defaultProps = defaultProps;

var Slide = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var _useState = React.useState(getStartingIndex(props.children, props.defaultIndex)),
    index = _useState[0],
    setIndex = _useState[1];
  var _useState2 = React.useState(0),
    wrapperSize = _useState2[0],
    setWrapperSize = _useState2[1];
  var wrapperRef = React.useRef(null);
  var innerWrapperRef = React.useRef(null);
  var tweenGroup = React.useRef(new tween_js.Group());
  var responsiveSettings = React.useMemo(function () {
    return getResponsiveSettings(wrapperSize, props.responsive);
  }, [wrapperSize, props.responsive]);
  var slidesToScroll = React.useMemo(function () {
    if (responsiveSettings) {
      return responsiveSettings.settings.slidesToScroll;
    }
    return props.slidesToScroll || 1;
  }, [responsiveSettings, props.slidesToScroll]);
  var slidesToShow = React.useMemo(function () {
    if (responsiveSettings) {
      return responsiveSettings.settings.slidesToShow;
    }
    return props.slidesToShow || 1;
  }, [responsiveSettings, props.slidesToShow]);
  var childrenCount = React.useMemo(function () {
    return React__default.Children.count(props.children);
  }, [props.children]);
  var eachChildSize = React.useMemo(function () {
    return wrapperSize / slidesToShow;
  }, [wrapperSize, slidesToShow]);
  var timeout = React.useRef();
  var resizeObserver = React.useRef();
  var startingSwipePosition;
  var dragging = false;
  var distanceSwiped = 0;
  var translateType = props.vertical ? 'translateY' : 'translateX';
  var swipeAttributeType = props.vertical ? 'clientY' : 'clientX';
  var swipePageAttributeType = props.vertical ? 'pageY' : 'pageX';
  var applyStyle = React.useCallback(function () {
    if (innerWrapperRef.current) {
      var fullSize = wrapperSize * innerWrapperRef.current.children.length;
      var attribute = props.vertical ? 'height' : 'width';
      innerWrapperRef.current.style[attribute] = fullSize + "px";
      if (props.vertical && wrapperRef.current) {
        wrapperRef.current.style[attribute] = wrapperSize + "px";
      }
      for (var _index = 0; _index < innerWrapperRef.current.children.length; _index++) {
        var eachDiv = innerWrapperRef.current.children[_index];
        if (eachDiv) {
          if (!props.vertical) {
            eachDiv.style[attribute] = eachChildSize + "px";
          }
          eachDiv.style.display = "block";
        }
      }
    }
  }, [wrapperSize, eachChildSize]);
  var initResizeObserver = React.useCallback(function () {
    if (wrapperRef.current) {
      resizeObserver.current = new ResizeObserver(function (entries) {
        if (!entries) return;
        setSize();
      });
      resizeObserver.current.observe(wrapperRef.current);
    }
  }, [wrapperRef]);
  var play = React.useCallback(function () {
    var autoplay = props.autoplay,
      infinite = props.infinite,
      duration = props.duration;
    if (autoplay && (infinite || index < childrenCount - 1)) {
      timeout.current = setTimeout(moveNext, duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, childrenCount, index]);
  React.useEffect(function () {
    applyStyle();
  }, [wrapperSize, applyStyle]);
  React.useEffect(function () {
    initResizeObserver();
    return function () {
      tweenGroup.current.removeAll();
      clearTimeout(timeout.current);
      removeResizeObserver();
    };
  }, [wrapperRef, initResizeObserver, tweenGroup]);
  React.useEffect(function () {
    clearTimeout(timeout.current);
    play();
  }, [index, wrapperSize, props.autoplay, play]);
  React.useImperativeHandle(ref, function () {
    return {
      goNext: function goNext() {
        moveNext();
      },
      goBack: function goBack() {
        moveBack();
      },
      goTo: function goTo(index, options) {
        if (options != null && options.skipTransition) {
          setIndex(index);
        } else {
          moveTo(index);
        }
      }
    };
  });
  var removeResizeObserver = function removeResizeObserver() {
    if (resizeObserver && wrapperRef.current) {
      resizeObserver.current.unobserve(wrapperRef.current);
    }
  };
  var pauseSlides = function pauseSlides() {
    if (props.pauseOnHover) {
      clearTimeout(timeout.current);
    }
  };
  var swipe = function swipe(event) {
    if (props.canSwipe && dragging) {
      var position;
      if (window.TouchEvent && event.nativeEvent instanceof TouchEvent) {
        position = event.nativeEvent.touches[0][swipePageAttributeType];
      } else {
        position = event.nativeEvent[swipeAttributeType];
      }
      if (position && startingSwipePosition) {
        var translateValue = eachChildSize * (index + getOffset());
        var distance = position - startingSwipePosition;
        if (!props.infinite && index === childrenCount - slidesToScroll && distance < 0) {
          // if it is the last and infinite is false and you're swiping left
          // then nothing happens
          return;
        }
        if (!props.infinite && index === 0 && distance > 0) {
          // if it is the first and infinite is false and you're swiping right
          // then nothing happens
          return;
        }
        distanceSwiped = distance;
        translateValue -= distanceSwiped;
        innerWrapperRef.current.style.transform = translateType + "(-" + translateValue + "px)";
      }
    }
  };
  var moveNext = function moveNext() {
    if (!props.infinite && index === childrenCount - slidesToScroll) {
      return;
    }
    var nextIndex = calculateIndex(index + slidesToScroll);
    transitionSlide(nextIndex);
  };
  var moveBack = function moveBack() {
    if (!props.infinite && index === 0) {
      return;
    }
    var previousIndex = index - slidesToScroll;
    if (previousIndex % slidesToScroll) {
      previousIndex = Math.ceil(previousIndex / slidesToScroll) * slidesToScroll;
    }
    transitionSlide(previousIndex);
  };
  var goToSlide = function goToSlide(_ref) {
    var currentTarget = _ref.currentTarget;
    if (!currentTarget.dataset.key) {
      return;
    }
    var datasetKey = parseInt(currentTarget.dataset.key);
    moveTo(datasetKey * slidesToScroll);
  };
  var moveTo = function moveTo(index) {
    transitionSlide(calculateIndex(index));
  };
  var calculateIndex = function calculateIndex(nextIndex) {
    if (nextIndex < childrenCount && nextIndex + slidesToScroll > childrenCount) {
      if ((childrenCount - slidesToScroll) % slidesToScroll) {
        return childrenCount - slidesToScroll;
      }
      return nextIndex;
    }
    return nextIndex;
  };
  var startSlides = function startSlides() {
    if (dragging) {
      endSwipe();
    } else if (props.pauseOnHover && props.autoplay) {
      timeout.current = setTimeout(moveNext, props.duration);
    }
  };
  var moveSlides = function moveSlides(_ref2) {
    var dataset = _ref2.currentTarget.dataset;
    if (dataset.type === 'next') {
      moveNext();
    } else {
      moveBack();
    }
  };
  var renderPreceedingSlides = function renderPreceedingSlides() {
    return React__default.Children.toArray(props.children).slice(-slidesToShow).map(function (each, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        "data-index": index - slidesToShow,
        "aria-roledescription": "slide",
        "aria-hidden": "true",
        key: index - slidesToShow
      }, each);
    });
  };
  var renderTrailingSlides = function renderTrailingSlides() {
    if (!props.infinite && slidesToShow === slidesToScroll) {
      return;
    }
    return React__default.Children.toArray(props.children).slice(0, slidesToShow).map(function (each, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        "data-index": childrenCount + index,
        "aria-roledescription": "slide",
        "aria-hidden": "true",
        key: childrenCount + index
      }, each);
    });
  };
  var setSize = function setSize() {
    var attribute = props.vertical ? 'clientHeight' : 'clientWidth';
    if (props.vertical) {
      if (innerWrapperRef.current) {
        setWrapperSize(innerWrapperRef.current.children[0][attribute]);
      }
    } else {
      if (wrapperRef.current) {
        setWrapperSize(wrapperRef.current[attribute]);
      }
    }
  };
  var startSwipe = function startSwipe(event) {
    if (props.canSwipe) {
      if (window.TouchEvent && event.nativeEvent instanceof TouchEvent) {
        startingSwipePosition = event.nativeEvent.touches[0][swipePageAttributeType];
      } else {
        startingSwipePosition = event.nativeEvent[swipeAttributeType];
      }
      clearTimeout(timeout.current);
      dragging = true;
    }
  };
  var endSwipe = function endSwipe() {
    if (props.canSwipe) {
      dragging = false;
      if (Math.abs(distanceSwiped) / wrapperSize > 0.2) {
        if (distanceSwiped < 0) {
          moveNext();
        } else {
          moveBack();
        }
      } else {
        if (Math.abs(distanceSwiped) > 0) {
          transitionSlide(index, 300);
        }
      }
    }
  };
  var animate = function animate() {
    requestAnimationFrame(animate);
    tweenGroup.current.update();
  };
  var transitionSlide = function transitionSlide(toIndex, animationDuration) {
    var transitionDuration = animationDuration || props.transitionDuration;
    var currentIndex = index;
    var existingTweens = tweenGroup.current.getAll();
    if (!wrapperRef.current) {
      return;
    }
    var attribute = props.vertical ? 'clientHeight' : 'clientWidth';
    var childSize = wrapperRef.current[attribute] / slidesToShow;
    if (!existingTweens.length) {
      clearTimeout(timeout.current);
      var value = {
        margin: -childSize * (currentIndex + getOffset()) + distanceSwiped
      };
      var tween = new tween_js.Tween(value, tweenGroup.current).to({
        margin: -childSize * (toIndex + getOffset())
      }, transitionDuration).onUpdate(function (value) {
        if (innerWrapperRef.current) {
          innerWrapperRef.current.style.transform = translateType + "(" + value.margin + "px)";
        }
      });
      tween.easing(getEasing(props.easing));
      animate();
      var newIndex = toIndex;
      if (newIndex < 0) {
        newIndex = childrenCount - slidesToScroll;
      } else if (newIndex >= childrenCount) {
        newIndex = 0;
      }
      tween.onStart(function () {
        if (typeof props.onStartChange === 'function') {
          props.onStartChange(index, newIndex);
        }
      });
      tween.onComplete(function () {
        distanceSwiped = 0;
        if (typeof props.onChange === 'function') {
          props.onChange(index, newIndex);
        }
        setIndex(newIndex);
      });
      tween.start();
    }
  };
  var isSlideActive = function isSlideActive(key) {
    return key < index + slidesToShow && key >= index;
  };
  var getOffset = function getOffset() {
    if (!props.infinite) {
      return 0;
    }
    return slidesToShow;
  };
  var style = {
    transform: translateType + "(-" + (index + getOffset()) * eachChildSize + "px)"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    dir: "ltr",
    "aria-roledescription": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "react-slideshow-container",
    onMouseEnter: pauseSlides,
    onMouseOver: pauseSlides,
    onMouseLeave: startSlides,
    onMouseDown: startSwipe,
    onMouseUp: endSwipe,
    onMouseMove: swipe,
    onTouchStart: startSwipe,
    onTouchEnd: endSwipe,
    onTouchCancel: endSwipe,
    onTouchMove: swipe
  }, props.arrows && showPreviousArrow(props, index, moveSlides), /*#__PURE__*/React__default.createElement("div", {
    className: "react-slideshow-wrapper slide " + (props.cssClass || ''),
    ref: wrapperRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "images-wrap " + (props.vertical ? 'vertical' : 'horizontal'),
    style: style,
    ref: innerWrapperRef
  }, props.infinite && renderPreceedingSlides(), (React__default.Children.map(props.children, function (thisArg) {
    return thisArg;
  }) || []).map(function (each, key) {
    var isThisSlideActive = isSlideActive(key);
    return /*#__PURE__*/React__default.createElement("div", {
      "data-index": key,
      key: key,
      className: isThisSlideActive ? 'active' : '',
      "aria-roledescription": "slide",
      "aria-hidden": isThisSlideActive ? 'false' : 'true'
    }, each);
  }), renderTrailingSlides())), props.arrows && showNextArrow(props, index, moveSlides, responsiveSettings)), !!props.indicators && showIndicators(props, index, goToSlide, responsiveSettings));
});
Slide.defaultProps = defaultProps;

exports.Fade = Fade;
exports.Slide = Slide;
exports.Zoom = Zoom;
//# sourceMappingURL=react-slideshow-image.cjs.development.js.map
