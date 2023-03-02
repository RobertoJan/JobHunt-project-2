import firebaseInfo from "./firebase.js";
import {getDatabase, ref, push, onValue, get, remove, child} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const database = getDatabase(firebaseInfo);
const dbRef = ref(database);

const applicationsRef = ref(database, '/applications');
const submissionsRef = ref(database, '/submittedApps');


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
        notes: notesInput,
        submitted: false
    }
    
    if (companyNameInput && companyFieldInput && companyUrlInput && contactInfoInput && skillsetInput && notesInput) {
       

        push(applicationsRef, companyInfoObj)

        companyNameInput = '';
        companyFieldInput = '';
        companyUrlInput = '';
        contactInfoInput = '';
        skillsetInput = '';
        notesInput = '';
    }

})


onValue(applicationsRef, function(data){
    if(data.exists()){
        const companyInfo = data.val();
        // console.log(companyInfo)

        ulElement.innerHTML ="";

        for (let key in companyInfo){
            // console.log(key)
            const company = companyInfo[key].companyName;
            const companyContact = companyInfo[key].contactInfo;
            const companyLink = companyInfo[key].link;
            const companyField = companyInfo[key].field;
            const companySkills = companyInfo[key].skills;
            const companyNotes = companyInfo[key].notes;
            const companyKey = key;

            // console.log(company, companyContact, companyLink, companyField, companySkills, companyNotes)

            const li = document.createElement('li');
            const div = document.createElement('div');
            const button = document.createElement('button');
            const button2 = document.createElement('button');

            li.innerHTML = `<h4>Company: ${company}</h4>
            <p>Field: ${companyField}</p>
            <p>URL: ${companyLink}</p>
            <p>Conacts: ${companyContact}</p>
            <p>Skills: ${companySkills}</p>
            <p>Notes: ${companyNotes}</p>
            `
            button.innerHTML = `<i class="fa-regular fa-square"></i>`
            button2.innerHTML = `<i class="fa-soild fa-x"></i>`

            div.append(button, button2);
            li.id = companyKey
            li.append(div);
            ulElement.append(li);
        }
    }
})

// Click to check the submitted data
ulElement.addEventListener('click', function(e){
    if (e.target.tagName === 'I') {
        updateSubmitted(e.target);

        addToSubbmitted();
    }

})

function updateSubmitted(icon){
    icon.classList.toggle('fa-check-square');
    icon.parentElement.classList.toggle('text-muted');
};


// add the subbmitted pile
function addToSubbmitted(companyKey){

    get(child(applicationsRef, `${companyKey}`)).then(function(snapshot){

        const selectedApplication = snapshot.val();
        console.log(selectedApplication)

        const name = selectedApplication.companyName;
        const field = selectedApplication.field;
        const link = selectedApplication.link;
        const contact = selectedApplication.contactInfo;
        const skills = selectedApplication.skills;
        const notes = selectedApplication.notes;
       
        const subbmittedApps = {
            companyName: name,
            field: field,
            link: link,
            contactInfo: contact,
            skills: skills,
            notes: notes,
            submitted: true
        }

        push(submissionsRef, subbmittedApps)

    })

}