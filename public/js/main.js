(function () {
    'use strict';

    var notesAccordion = () => function () {
      function toggleAccordion(buttonEl) {
        var controlsId = buttonEl.getAttribute('aria-controls');
        var contentEl = document.getElementById(controlsId);
        var open = buttonEl.getAttribute('aria-expanded') === 'true'; // Don't do anything if the open state doesn't change

        if (open === contentEl.hidden) {
          return;
        } // Update the internal state


        buttonEl.setAttribute('aria-expanded', "".concat(!open));

        if (!open) {
          contentEl.removeAttribute('hidden');
        } else {
          contentEl.setAttribute('hidden', '');
        }
      }

      function onButtonClick(event) {
        var buttonEl = event.currentTarget;
        toggleAccordion(buttonEl);
      }

      function initializeAccordion(accordionEl) {
        var buttonEl = accordionEl.querySelector('button[aria-expanded]');
        buttonEl.addEventListener('click', onButtonClick);
      } // Initialize accordions


      var accordions = document.querySelectorAll('.accordion h2');
      accordions.forEach(accordionEl => {
        initializeAccordion(accordionEl);
      });
    }();

    if (/complete|interactive/.test(document.readyState)) {
      notesAccordion();
    } else {
      document.addEventListener('DOMContentLoaded', notesAccordion);
    }

})();
//# sourceMappingURL=main.js.map
