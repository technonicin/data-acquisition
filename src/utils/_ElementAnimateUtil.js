import { DOMEventHandlerUtil } from "./_DOMEventHandlerUtil"
import { ElementStyleUtil } from "./_ElementStyleUtil"

function getElementOffset(el) {
  // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
  // Support: IE <=11 only
  // Running getBoundingClientRect on a
  // disconnected node in IE throws an error
  if (!el.getClientRects().length) {
    return { top: 0, left: 0 }
  }

  // Get document-relative position by adding viewport scroll to viewport-relative gBCR
  const rect = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView
  if (win) {
    return {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    }
  }

  return rect
}


export class ElementAnimateUtil {
  static animate(from, to, duration, update, complete) {
    /**
     * TinyAnimate.easings
     *  Adapted from jQuery Easing
     */
    const easings = {
      linear: function (t, b, c, d) {
        return (c * t) / d + b
      }
    }

    // Create mock done() function if necessary
    if (!complete) {
      complete = function () { }
    }

    // Animation loop
    // let canceled = false;
    const change = to - from

    function loop(timestamp) {
      var time = (timestamp || +new Date()) - start

      if (time >= 0) {
        update(easings.linear(time, from, change, duration))
      }
      if (time >= 0 && time >= duration) {
        update(to)
        if (complete) {
          complete()
        }
      } else {
        window.requestAnimationFrame(loop)
      }
    }

    update(from)

    // Start animation loop
    const start =
      window.performance && window.performance.now
        ? window.performance.now()
        : +new Date()

    window.requestAnimationFrame(loop)
  }

  static animateClass(element, animationName, callBack) {
    const animateClasses = animationName.split(" ")
    animateClasses.forEach(cssClass => element.classList.add(cssClass))
    DOMEventHandlerUtil.one(element, "animationend", function () {
      animateClasses.forEach(cssClass => element.classList.remove(cssClass))
    })

    if (callBack) {
      DOMEventHandlerUtil.one(element, "animationend", callBack)
    }
  }

  static transitionEnd(element, callBack) {
    DOMEventHandlerUtil.one(element, "transitionend", callBack)
  }

  static animationEnd(element, callBack) {
    DOMEventHandlerUtil.one(element, "animationend", callBack)
  }

  static animationDelay(element, value) {
    ElementStyleUtil.set(element, "animation-delay", value)
  }

  static animationDuration(element, value) {
    ElementStyleUtil.set(element, "animation-duration", value)
  }

  static scrollTo(element, offset, duration = 500) {
    let targetPos = element ? getElementOffset(element).top : 0
    let scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (offset) {
      scrollPos += offset
      targetPos = targetPos - offset
    }

    const from = scrollPos
    const to = targetPos

    ElementAnimateUtil.animate(from, to, duration, function (value) {
      document.documentElement.scrollTop = value
      // document.body.parentNode.scrollTop = value;
      document.body.scrollTop = value
    }) //, easing, done
  }
  static scrollTop(offset, duration) {
    ElementAnimateUtil.scrollTo(null, offset, duration)
  }
}
