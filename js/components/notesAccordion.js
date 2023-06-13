export const notesAccordion = () => (function () {
        function toggleAccordion(buttonEl) {
            const controlsId = buttonEl.getAttribute('aria-controls');
            const contentEl = document.getElementById(controlsId);
            const open = buttonEl.getAttribute('aria-expanded') === 'true';

            // Don't do anything if the open state doesn't change
            if (open === contentEl.hidden) {
                return;
            }

            // Update the internal state
            buttonEl.setAttribute('aria-expanded', `${!open}`);
            if (!open) {
                contentEl.removeAttribute('hidden');
            } else {
                contentEl.setAttribute('hidden', '');
            }
        }

        function onButtonClick(event) {
            const buttonEl = event.currentTarget;
            toggleAccordion(buttonEl);
        }

        function initializeAccordion(accordionEl) {
            const buttonEl = accordionEl.querySelector('button[aria-expanded]');
            buttonEl.addEventListener('click', onButtonClick);
        }

        // Initialize accordions
        const accordions = document.querySelectorAll('.accordion h2');
        accordions.forEach((accordionEl) => {
            initializeAccordion(accordionEl);
        });
    })()
