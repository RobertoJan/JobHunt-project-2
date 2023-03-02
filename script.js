import firebaseInfo from "./firebase.js";
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const database = getDatabase(firebaseInfo);
const dbRef = ref(database);


const formElement = document.querySelector('form');
const ulElement = document.querySelector('ul');

const companyName = document.querySelector('#companyName');
const companyField = document.querySelector('#companyField');
const companyUrl = document.querySelector('#companyUrl');
const contactInfo = document.querySelector('#contactInfo');
const skillset = document.querySelector('#skillset');
const notes = document.querySelector('#notes');

formElement.addEventListener("submit", function(e){
    e.preventDefault();

    let companyNameInput = companyName.value;
    let companyFieldInput = companyField.value;
    let companyUrlInput = companyUrl.value;
    let contactInfoInput = contactInfo.value;
    let skillsetInput = skillset.value;
    let notesInput = notes.value;

    const companyInfoObj = {
        companyName: companyNameInput,
        field: companyFieldInput,
        link: companyUrlInput,
        contactInfo: contactInfoInput,
        skills: skillsetInput,
        notes: notesInput
    }
    
    if (companyNameInput && companyFieldInput && companyUrlInput && contactInfoInput && skillsetInput && notesInput) {
       

        push(dbRef, companyInfoObj)

        companyNameInput = '';
        companyFieldInput = '';
        companyUrlInput = '';
        contactInfoInput = '';
        skillsetInput = '';
        notesInput = '';
    }


    onValue(dbRef, function(data){
        if(data.exists()){
            const companyInfo = data.val();
            console.log(companyInfo)

            ulElement.innerHTML ="";

            for (let key in companyInfo){
                console.log(key)
                const company = companyInfo[key].companyName;
                const companyContact = companyInfo[key].contactInfo;
                const companyLink = companyInfo[key].link;
                const companyField = companyInfo[key].field;
                const companySkills = companyInfo[key].skills;
                const companyNotes = companyInfo[key].notes;

                console.log(company, companyContact, companyLink, companyField, companySkills, companyNotes)

                const li = document.createElement('li');
                const button = document.createElement('button');

                li.innerHTML = `<h4>Company: ${company}</h4>
                <p>Field: ${companyField}</p>
                <p>URL: ${companyLink}</p>
                <p>Conacts: ${companyContact}</p>
                <p>Skills: ${companySkills}</p>
                <p>Notes: ${companyNotes}</p>
                `
                button.innerHTML = `<i class="fa-regular fa-square"></i>`
                
                li.append(button)

                ulElement.append(li);




            }

        }

    })

    
     // companyCard.innerHTML = `
                // <p>Company: ${companyNameInput} </p>
                // <p>Field: ${companyFieldInput} </p>
                // <p>Link: ${companyUrlInput} </p>
                // <p>Contact: ${contactInfoInput} </p>
                // <p>Skills: ${skillsetInput}</p>
                // <p>Notes: ${notesInput}</p>
                // `

    
    // if(companyName.value.trim()&&companyField.value.trim()&&companyUrl.value.trim()&&contactInfo.value.trim()&&skillset.value.trim()&&notes.value.trim()){
    //     const companyCard = document.createElement('li');
    //     companyCard.innerHTML = `${companyName.value.trim()}`
    //     ulElement.appendChild(companyCard);
    // }
})