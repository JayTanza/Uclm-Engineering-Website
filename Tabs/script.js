//This tag select everything has specific selector
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents =  document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.tabTarget)//target allows every content that display
    tabContents.forEach(tabContent => {
    tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
        tab.classList.add('active')
        target.classList.add('active')//class active when presses the button i will display
    })
})