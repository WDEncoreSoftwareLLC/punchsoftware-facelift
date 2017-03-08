// get scroll top, left. get screen height, width
// return scroll top, left. return sreen height, width
function scrollAmount() {
    // initiate scroll values
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    // initiate screen values
    var screenHeight = window.innerHeight || document.documentElement.clientHeight,
        screenWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // get B2C_MasterPage element
    var B2C_MasterPage = document.getElementById("B2C_MasterPage"),
    // get B2C_MasterPage top offset
        B2C_MasterPageTopOffset = B2C_MasterPage.offsetTop,
    // get B2C_MasterPage left offset
        B2C_MasterPageLeftOffset = B2C_MasterPage.offsetLeft,
    // get B2C_MasterPage height
        B2C_MasterPageHeight = B2C_MasterPage.innerHeight || B2C_MasterPage.clientHeight,
    // get B2C_MasterPage width
        B2C_MasterPageWidth = B2C_MasterPage.innerWidth || B2C_MasterPage.clientWidth;
    
    // get B2C_Content element
    var B2C_Content = document.getElementById("B2C_Content"),
    // get B2C_Content top offset
        B2C_ContentTopOffset = B2C_Content.offsetTop,
    // get B2C_Content left offset
        B2C_ContentLeftOffset = B2C_Content.offsetLeft,
    // get B2C_Content height
        B2C_ContentHeight = B2C_Content.innerHeight || B2C_Content.clientHeight,
    // get B2C_Content width
        B2C_ContentWidth = B2C_Content.innerWidth || B2C_Content.clientWidth;

    // return all values
    return {
        "topPosition": scrollTop,
        "leftPosition": scrollLeft,
        "screenHeight": screenHeight,
        "screenWidth": screenWidth,

        "B2C_MasterPageTopOffset": B2C_MasterPageTopOffset,
        "B2C_MasterPageLeftOffset": B2C_MasterPageLeftOffset,
        "B2C_MasterPageHeight": B2C_MasterPageHeight,
        "B2C_MasterPageWidth": B2C_MasterPageWidth,

        "B2C_ContentTopOffset": B2C_ContentTopOffset,
        "B2C_ContentLeftOffset": B2C_ContentLeftOffset,
        "B2C_ContentHeight": B2C_ContentHeight,
        "B2C_ContentWidth": B2C_ContentWidth
    }
}

// measure the scrollbar width
function measureScrollbar() {
    // create an element
    var scrollDiv = document.createElement("div");

    // set overflow to scroll
    scrollDiv.style.overflow = "scroll";
    // set width to scroll
    scrollDiv.style.width = 50 + "px";
    // set height to scroll
    scrollDiv.style.height = 50 + "px";
    // set position to scroll
    scrollDiv.style.position = "absolute";
    // set top to scroll
    scrollDiv.style.top = -9999 + "px";

    // append to body
    document.body.appendChild(scrollDiv);
    // calculate width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // remove from body
    document.body.removeChild(scrollDiv);

    // return the width
    return scrollbarWidth;
}

// make to top button visible
function activateToTopButton() {
    // get current scroll top amount
    var scrollTopPos = scrollAmount().topPosition,
    // get current scroll left amount
        scrollLeftPos = scrollAmount().leftPosition;

    // get current screen height
    var screenHeight = scrollAmount().screenHeight,
    // get current screen width
        screenWidth = scrollAmount().screenWidth;

    // get B2C_MasterPage width
    var B2C_MasterPageWidth = scrollAmount().B2C_MasterPageWidth,
    // get B2C_MasterPage left offset
        B2C_MasterPageLeftOffset = scrollAmount().B2C_MasterPageLeftOffset;

    // get B2C_Content width
    var B2C_ContentWidth = scrollAmount().B2C_ContentWidth,
    // get B2C_Content left offset
        B2C_ContentLeftOffset = scrollAmount().B2C_ContentLeftOffset;

    // get the to top element
    var toTopButton = document.getElementById("to-top"),
        toTopButtonWidth = (toTopButton.innerWidth || toTopButton.clientWidth);

    // reset the targeted top position
    var topPosTo = (screenHeight / 2) - (26 / 2);
    // reset the targeted left position
    // don't need nested element offsets
    var leftPosTo = B2C_MasterPageLeftOffset + B2C_ContentLeftOffset + B2C_ContentWidth - (toTopButtonWidth / 2) - 2;
    
    // save scrollbar width
    var scrollbarWidth = measureScrollbar();

    // detect scroll top amount
    if (scrollTopPos > screenHeight) {
        // detect to top class name
        if (!toTopButton.className.match("scrolled")) {
            // add scrolled class name
            toTopButton.className += " scrolled";
        }
        // set top position
        toTopButton.style.top = topPosTo + "px";
        // detect if left position is offscreen
        if ((leftPosTo + 26 + measureScrollbar()) >= screenWidth) {
            // set left position
            toTopButton.style.left = screenWidth - scrollbarWidth - toTopButtonWidth - 4 + "px";
        } else {
            // set left position
            toTopButton.style.left = leftPosTo + "px";
        }
    } else {
        // remove scrolled class
        toTopButton.className = toTopButton.className.replace(" scrolled", "");
    }
}

// add to top button
function addToTopButton() {
    // HTML value of to top button (svg up arrow)
    var toTopArrow =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16px\" height=\"16px\" viewBox=\"0 0 14 14\">" + 
            "<path d=\"M14,7 L8.4,1.4 L7,0 L0,7 L1.4,8.399 L6,3.8 L6,14 L8,14 L8,3.799 L12.601,8.4 L14,7 Z\" fill=\"#ffffff\"></path>" +
        "</svg>";

    // to top button element type
    var toTopButton = document.createElement("a");

    // add to-top class
    toTopButton.className = "to-top";
    // id to-top
    toTopButton.id = "to-top";

    // give HTML value of to-top
    toTopButton.innerHTML = toTopArrow;

    // append to top button to body
    document.body.appendChild(toTopButton);
}

var scrollTimeOut;
// scroll to top of page
function scrollToTop() {
    // get current horizontal/left scroll position
    // so the horizontal/left scroll doesn't reset
    var horizontalScrollPosition = scrollAmount().leftPosition;

    // get amount to scroll by to make time ellapse 0.75 seconds
    var scrollByAmount = scrollAmount().topPosition / 20;
    var scrollTiming = function () {
        if (scrollAmount().topPosition != 0) {
            window.scrollBy(horizontalScrollPosition, -scrollByAmount);
            scrollTimeOut = setTimeout(scrollTiming, 10);
        } else {
            clearTimeout(scrollTimeOut);
        }
    };
    scrollTiming();

    // scroll the page back to the top
    //window.scrollTo(horizontalScrollPosition, 0);
}

// add the events
function addEvents() {
    // call function to add to-top button
    addToTopButton();

    // get to top button and save in local variable
    var toTopButtonClick = document.getElementById("to-top");

    // event compatibility
    if(window.addEventListener) {
        // add scroll event to activate to top button
        window.addEventListener("scroll", activateToTopButton);
        // add resize event to activate to top button
        window.addEventListener("resize", activateToTopButton);
        // add click event to scroll back to top
        toTopButtonClick.addEventListener("click", scrollToTop);
    } else {
        // add scroll event to activate to top button
        window.attachEvent("onscroll", activateToTopButton);
        // add resize event to activate to top button
        window.attachEvent("onresize", activateToTopButton);
        // add click event to scroll back to top
        toTopButtonClick.attachEvent("onclick", scrollToTop);
    }

    // activate on page load
    activateToTopButton();
}

// event compatibility
if(window.addEventListener) {
    // activate events on page load
    window.addEventListener("load", addEvents);
} else {
    // activate events on page load
    window.attachEvent("onload", addEvents);
}
