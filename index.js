const prompt = require('prompt-sync')()

async function fetchData(state, date){
    // ca/2021-01-10.json
    let requestURL ="https://api.covidtracking.com/v2/states/" +state+"/"+date+".json"

    console.log(requestURL)
    const response=await fetch (requestURL)
    const data = await response.json()

    console.log(data.data.cases.total.value)
    return data
}
const Question = prompt("Enter a state.:")
const Questions = prompt("Enter a Date.:")

fetchData(Question, Questions)
const bodyProp= prompt("Enter body properties:")
fetchData()



async function createImage(bookData){
    const options={
        method:"POST",
    headers:{
        Authorization:"Bearer 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",
        'Content-Type' : "application/json",
    },
    body:JSON.stringify(bookData)
    }
const response=await fetch ('https://api.openai.com/v1/images/generations', options)
const data = await response.json();
console.log(data);
}

const question = prompt("Answer question here:")

createImage({
    prompt:question
})



