// console.log()
export const log = (content) => {
    console.log(content);
}

// converts string to proper case
export const toProperCase = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
}

// query selector with optional scope
export const select = (selector, scope) => {
    return (scope || document).querySelector(selector);
}

// add event listener wrapper
export const listen = (target, event, callback, capture = false) => {
    target.addEventListener(event, callback, !!capture);
}

// log event
export const logEvent = (e) => log(e);

// sanitize input
export const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}

// create element with optional class name
export const createElement = (tag, className) => {
    const el = document.createElement(tag);
    if(className) el.classList.add(className);
    return el;
}

// delete all content
export const deleteChildElements = (parentElement) => {
    let child = parentElement.firstElementChild;
    while(child) {
        parentElement.removeChild(child);
        child = parentElement.firstElementChild;
    }
}

// add class with optional query scope
export const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className);
}
