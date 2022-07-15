let myLeads = []

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('save-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

const leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads') )

// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage 
    render(myLeads)
}

const tabs = [
    {url: 'https://www.linkedin.com/in/per-harald-borgen'}
]

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active : true, currentWindow: true}, function(tabs) {
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id

    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)

    })

})



function render(leads) {
    let listItems = ''

    for (let i = 0; i < leads.length; i++) {
        
        // listItems +=  `<li><a target= "_blank" href = ">' + myLeads[i] + '">' + myLeads[i] + '</a></li>`
     
        listItems += 
         `<li>
            <a target= "_blank" href = "${leads[i]}"> ${leads[i]}
            </a>
         </li>`

        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener('dblclick', function () {
    console.log('double clicked')
    localStorage.clear()
    myLeads = []
    render(myLeads)

})




inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''

    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    render(myLeads)

    // console.log(localStorage.getItem('myLeads'))
})

// function renderLeads() {m 
//     let listItems = ''

//     for (let i = 0; i < myLeads.length; i++) {
        
//         // listItems +=  `<li><a target= "_blank" href = ">' + myLeads[i] + '">' + myLeads[i] + '</a></li>`
     
//         listItems += 
//          `<li>
//             <a target= "_blank" href = "${myLeads[i]}"> ${myLeads[i]}
//             </a>
//          </li>`

//         console.log(listItems)
//     }
//     ulEl.innerHTML = listItems
// }



 

function generateSentence(desc, arr) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];    
    }
    console.log()
}