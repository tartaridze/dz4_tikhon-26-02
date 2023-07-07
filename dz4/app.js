const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data)

        for (const person in data[0]){
            const parents = data[0][person].parents
            console.log(parents)
        }
    })
})







