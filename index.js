function focusMe(options) {
    let accessibleBlock = document.querySelector(`.${options.accessibleBlock}`);
    let elements = accessibleBlock.querySelectorAll('.focus-me');
    let aryLabel = options.labels;

    elements.forEach((el, index) => {
        el.setAttribute('tabindex', 0);
        el.setAttribute('aria-label', aryLabel[index]);
    })
}

module.exports.focusMe = focusMe;