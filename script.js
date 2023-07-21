const btn=document.querySelector('#btn');
const word=document.querySelector('#word');
const list=document.querySelector('#def')
btn.addEventListener('click',() =>{
    let api='https://api.dictionaryapi.dev/api/v2/entries/en/'+word.value;
    getMeaning(api);
})
async function getMeaning(api)
{
    let result=await fetch(api);
    let meaning=await result.json();
    // let meanings=meaning[0].meanings;
    // console.log(meaning[0].meanings);
    let meanings=meaning[0].meanings;
    let definitions='';
    meanings.forEach(element => {
        element.definitions.forEach(ele =>{
            definitions+=`<li>${ele.definition}</li>`;
        })
    });
    list.innerHTML=definitions;
}
