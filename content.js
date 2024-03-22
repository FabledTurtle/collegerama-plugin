// content.js
window.addEventListener('load', function() {
    // Wait for the page to fully load before manipulating the DOM
    var listColumnWrapper = document.getElementById('ListColumnWrapper');
    var contentColumnWrapper = document.getElementById('ContentColumnWrapper');
    
    if (listColumnWrapper && contentColumnWrapper) {
        // Move listColumnWrapper under contentColumnWrapper
        contentColumnWrapper.appendChild(listColumnWrapper);
        // move the listColumnWrapper to the bottom of the page
        contentColumnWrapper.style.order = '2';
        // listColumnWrapper.style.order = '1';

    }
});

// content.js
window.addEventListener('load', function() {
    // Wait for the page to fully load before manipulating the DOM
    
    // Change --color-222222 to black
    document.documentElement.style.setProperty('--color-222222', 'black');
    document.documentElement.style.setProperty('--color-303030', 'black');
    document.documentElement.style.setProperty('--navbar-color', '#111111');
});




// content.js
window.addEventListener('load', function() {
    // Wait for the page to fully load before manipulating the DOM
    
    // Create a <style> element
    var styleElement = document.createElement('style');
    
    // Define the CSS rules
    var css = '.header-gutter { background-color: #222222 !important; }';
    
    // Set the CSS text of the <style> element
    styleElement.textContent = css;
    
    // Append the <style> element to the <head> of the document
    document.head.appendChild(styleElement);
});



// // content.js
// window.addEventListener('load', function() {
//     // Wait for the page to fully load before manipulating the DOM
    
//     // Check if the window matches the media query condition
//     if (window.matchMedia('(min-width: 1440px)').matches) {
//         // Find the element with id 'ContentColumnWrapper'
//         var contentColumnWrapper = document.getElementById('ContentColumnWrapper');
        
//         // Check if the element exists
//         if (contentColumnWrapper) {
//             // Find the element with class 'col-xl-10' inside 'ContentColumnWrapper'
//             var colXl10Element = contentColumnWrapper.querySelector('.col-xl-10');
            
//             // Check if the element with class 'col-xl-10' exists
//             if (colXl10Element) {
//                 // Set its width to 100%
//                 colXl10Element.style.width = '100%';
//             }
//         }
//     }
// });

// // content.js
// window.addEventListener('load', function() {
//     // Wait for the page to fully load before manipulating the DOM
    
//     // Find the element with id 'ContentColumn'
//     var contentColumn = document.getElementById('ContentColumn');
    
//     // Check if the element exists
//     if (contentColumn) {
//         // Select the Presentation-View element within ContentColumn
//         var presentationView = contentColumn.querySelector('.Presentation-View');
        
//         // Check if the Presentation-View element exists
//         if (presentationView) {
//             // Change the CSS style of Presentation-View
//             presentationView.style.opacity = '1';
//         }
        
//         // Change the CSS of the div with id 'ContentColumn'
//         contentColumn.style.cssText += ' @media (max-width: 1000px) { opacity: 1; }';
//     }
// });
