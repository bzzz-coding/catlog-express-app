// console.log(`main.js working`)
document.querySelector('#updateButton').addEventListener('click', updateEntry)

async function updateEntry() {
    let newDate = new Date()
        let year = newDate.getFullYear()
        let month = newDate.getMonth() + 1
        let date = newDate.getDate()
        let newDateFormatted = `${year}-${month}-${date}`
        console.log(`newDateFormatted: ${newDateFormatted}`)
    try {
        console.log(`update button clicked`)
        
        const response = await fetch('updateEntry', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementsByName('name')[0].value,
                date: document.getElementsByName('date')[0].value,
                updateDate: newDateFormatted,
                birthYear: document.getElementsByName('birthYear')[0].value,
                weight: document.getElementsByName('weight')[0].value,
                sex: document.getElementsByName('sex')[0].value,
                fixing: document.getElementsByName('fixing')[0].value,
                vaccines: document.getElementsByName('vaccines')[0].value,
                wetFood: document.getElementsByName('wetFood')[0].value,
                dryFood: document.getElementsByName('dryFood')[0].value,
                feedingNote: document.getElementsByName('feedingNote')[0].value,
                image: document.getElementsByName('image')[0].value,
                otherNote: document.getElementsByName('otherNote')[0].value,
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}


document.querySelector('#deleteButton').addEventListener('click', deleteEntry)
async function deleteEntry() {
    const nameInput = document.querySelector('.nameToDelete')
    const dateInput = document.querySelector('.dateToDelete')
    try {
        console.log(`delete button clicked`)
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameInput.value,
                date: dateInput.value
            })
        })
        const data = await response.json()
        location.reload()
    } catch (error) {
        console.log(error)
    }
}



