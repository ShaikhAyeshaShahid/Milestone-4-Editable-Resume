document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resumeForm") as HTMLFormElement | null;
    const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement | null;
    const editButton = document.getElementById('editResume') as HTMLButtonElement | null;
    const profileImageInput = document.getElementById("profileImage") as HTMLInputElement | null;
    const profileImagePreview = document.getElementById("profileImagePreview") as HTMLImageElement | null;

    if (!resumeContainer || !form || !profileImageInput || !profileImagePreview) return;

    // Initialize counts
    let skillCount = 1;
    let experienceCount = 1;
    let educationCount = 1;

    function updateResume() {
        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
        const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
        const jobTitle = (document.getElementById("title") as HTMLInputElement).value;
        const description = (document.getElementById("description") as HTMLTextAreaElement).value;
        const location = (document.getElementById("location") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const github = (document.getElementById("github") as HTMLInputElement).value;
        const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
        const skillsedit = (document.getElementById("skill1") as HTMLInputElement).value;
        const proficiency1 = (document.getElementById("proficiency1") as HTMLInputElement).value;

        const eduDegree1 = (document.getElementById("eduDegree1") as HTMLInputElement).value;
        const eduSchool1 = (document.getElementById("eduSchool1") as HTMLInputElement).value;
        const eduStartDate1 = (document.getElementById("eduStartDate1") as HTMLInputElement).value;
        const eduEndDate1 = (document.getElementById("eduEndDate1") as HTMLInputElement).value;

        const expTitle1 = (document.getElementById("expTitle1") as HTMLInputElement).value;
        const expCompany1 = (document.getElementById("expCompany1") as HTMLInputElement).value;
        const expStartDate1 = (document.getElementById("expStartDate1") as HTMLInputElement).value;
        const expEndDate1 = (document.getElementById("expEndDate1") as HTMLInputElement).value;
        const expDescription1 = (document.getElementById("expDescription1") as HTMLInputElement).value;


        // Handle Profile Image
        let profileImageUrl = '';
        if (profileImageInput && profileImageInput.files && profileImageInput.files[0]) {
            profileImageUrl = URL.createObjectURL(profileImageInput.files[0]);
        }

        let skillsHtml = '';
        document.querySelectorAll(".skill-item").forEach((item, index) => {
            const skillName = (item.querySelector(`input[name="skill${index + 1}"]`) as HTMLInputElement)?.value || '';
            const proficiency = (item.querySelector(`input[name="proficiency${index + 1}"]`) as HTMLInputElement)?.value || '';
            skillsHtml += `<p>${skillName}: ${proficiency}%</p>`;
        });

        let experiencesHtml = '';
        document.querySelectorAll(".experience-item").forEach((item, index) => {
            const jobTitle = (item.querySelector(`input[name="expTitle${index + 1}"]`) as HTMLInputElement)?.value || '';
            const company = (item.querySelector(`input[name="expCompany${index + 1}"]`) as HTMLInputElement)?.value || '';
            const startDate = (item.querySelector(`input[name="expStartDate${index + 1}"]`) as HTMLInputElement)?.value || '';
            const endDate = (item.querySelector(`input[name="expEndDate${index + 1}"]`) as HTMLInputElement)?.value || 'Present';
            const description = (item.querySelector(`textarea[name="expDescription${index + 1}"]`) as HTMLTextAreaElement)?.value || '';
            experiencesHtml += `<div><h4>${jobTitle} at ${company}</h4><p>${startDate} - ${endDate}</p><p>${description}</p></div>`;
        });

        let educationHtml = '';
        document.querySelectorAll(".education-item").forEach((item, index) => {
            const degree = (item.querySelector(`input[name="eduDegree${index + 1}"]`) as HTMLInputElement)?.value || '';
            const school = (item.querySelector(`input[name="eduSchool${index + 1}"]`) as HTMLInputElement)?.value || '';
            const startDate = (item.querySelector(`input[name="eduStartDate${index + 1}"]`) as HTMLInputElement)?.value || '';
            const endDate = (item.querySelector(`input[name="eduEndDate${index + 1}"]`) as HTMLInputElement)?.value || 'Present';
            educationHtml += `<div><h4>${degree}</h4><p>${school}</p><p>${startDate} - ${endDate}</p></div>`;
        });

        if (resumeContainer) {
            resumeContainer.innerHTML = `
                <div class="profile">
                    ${profileImageUrl ? `<img src="${profileImageUrl}" alt="Profile Image" class="profile-image">` : ''}
                    <h1 class="editable">${firstName} ${lastName}</h1>
                    <h4 class="editable">${email}</h4>
                    <h2 class="editable">${jobTitle}</h2>
                    <p class="editable">${description}</p>
                    <p class="editable">${location} | ${phone} | ${email}</p>
                    <p class="editable"><a href="${github}" target="_blank">GitHub</a> | <a href="${linkedin}" target="_blank">LinkedIn</a></p>
                </div>
           <h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 2rem; 
    font-weight: 700; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">Skills</h3>

<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 1.5rem; 
    font-weight: 500; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">${skillsHtml}</h3>

<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 2rem; 
    font-weight: 700; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">Experience</h3>

<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 1.5rem; 
    font-weight: 500; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">${experiencesHtml}</h3>



<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 2rem; 
    font-weight: 700; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">Education</h3>

<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 2rem; 
    font-weight: 700; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">${educationHtml}</h3>

<h3 class="editable" style="
    color: var(--primary-color); 
    font-size: 1.5rem; 
    font-weight: 500; 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
    border-bottom: 2px solid var(--accent-color); 
    padding-bottom: 5px;
">${eduDegree1} ${eduSchool1}</h3>


            `;
            resumeContainer.style.display = "block";
        }

        if (editButton) editButton.style.display = "inline";
    }

    // Toggle edit mode
    if (editButton) {
        editButton.addEventListener('click', () => {
            const isEditing = editButton.textContent === "Edit Resume";

            // Toggle contentEditable attribute
            const editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(el => {
                (el as HTMLElement).contentEditable = isEditing ? "true" : "false";
            });

            // Update button text
            editButton.textContent = isEditing ? "Save Changes" : "Edit Resume";
        });
    }

    function addSkill() {
        skillCount++;
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <label for="skill${skillCount}">Skill ${skillCount}:</label>
            <input type="text" id="skill${skillCount}" name="skill${skillCount}">
            <label for="proficiency${skillCount}">Proficiency:</label>
            <input type="range" min="0" max="100" id="proficiency${skillCount}" name="proficiency${skillCount}">
        `;
        document.getElementById('skillsContainer')?.appendChild(skillItem);
    }

    function addExperience() {
        experienceCount++;
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <label for="expTitle${experienceCount}">Job Title:</label>
            <input type="text" id="expTitle${experienceCount}" name="expTitle${experienceCount}">
            <label for="expCompany${experienceCount}">Company:</label>
            <input type="text" id="expCompany${experienceCount}" name="expCompany${experienceCount}">
            <label for="expStartDate${experienceCount}">Start Date:</label>
            <input type="date" id="expStartDate${experienceCount}" name="expStartDate${experienceCount}" required>
            <label for="expEndDate${experienceCount}">End Date:</label>
            <input type="date" id="expEndDate${experienceCount}" name="expEndDate${experienceCount}">
            <label for="expDescription${experienceCount}">Description:</label>
            <textarea id="expDescription${experienceCount}" name="expDescription${experienceCount}"></textarea>
        `;
        document.getElementById('experienceContainer')?.appendChild(experienceItem);
    }

    function addEducation() {
        educationCount++;
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = `
            <label for="eduDegree${educationCount}">Degree:</label>
            <input type="text" id="eduDegree${educationCount}" name="eduDegree${educationCount}">
            <label for="eduSchool${educationCount}">School:</label>
            <input type="text" id="eduSchool${educationCount}" name="eduSchool${educationCount}">
            <label for="eduStartDate${educationCount}">Start Date:</label>
            <input type="date" id="eduStartDate${educationCount}" name="eduStartDate${educationCount}" required>
            <label for="eduEndDate${educationCount}">End Date:</label>
            <input type="date" id="eduEndDate${educationCount}" name="eduEndDate${educationCount}">
        `;
        document.getElementById('educationContainer')?.appendChild(educationItem);
    }

    function previewImage() {
        if (profileImageInput && profileImageInput.files && profileImageInput.files[0]) {
            const file = profileImageInput.files[0];
            const reader = new FileReader();
            reader.onload = function (event) {
                if (profileImagePreview) {
                    profileImagePreview.src = event.target?.result as string;
                    profileImagePreview.style.display = 'block';
                }
            }
            reader.readAsDataURL(file);
        } else if (profileImagePreview) {
            profileImagePreview.style.display = 'none';
        }
    }

    if (profileImageInput) profileImageInput.addEventListener("change", previewImage);
    document.getElementById("addSkill")?.addEventListener("click", addSkill);
    document.getElementById("addExperience")?.addEventListener("click", addExperience);
    document.getElementById("addEducation")?.addEventListener("click", addEducation);

    if (form) form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateResume();
    });
});
