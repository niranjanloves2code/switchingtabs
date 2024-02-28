function setupTabs(){
    document.querySelectorAll('.tabs-btn').forEach(button => {
        button.addEventListener('click',() =>{
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);

            // console.log(sideBar)
            // console.log(tabsContainer)
            // console.log(tabNumber)
            // console.log(tabToActivate)

            sideBar.querySelectorAll('.tabs-btn').forEach(button => {
                button.classList.remove('tabs-btn-active')
            })
            
            tabsContainer.querySelectorAll('.tabs-content').forEach(tab =>{
                tab.classList.remove('tabs-content-active')
            })

            button.classList.add('tabs-btn-active')
            tabToActivate.classList.add('tabs-content-active')

        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setupTabs()

    document.querySelectorAll('.tabs').forEach(tabsContainer => {
        tabsContainer.querySelector('.tabs-sidebar .tabs-btn').click();
    })
})