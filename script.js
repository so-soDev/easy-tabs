const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        //Getting the value of the current tab attribute
        const tabData = this.getAttribute('data-tab');

        // Remove the 'active' class from all tabs and hide all contentRemove the 'active' class from all tabs and hide all content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.setAttribute('hidden', true));

        // Add the 'active' class to the current tab and show the corresponding content
        this.classList.add('active');
        const content = document.querySelector(`.tab-content[data-content="${tabData}"]`);
        content && content.removeAttribute('hidden');
    });
});