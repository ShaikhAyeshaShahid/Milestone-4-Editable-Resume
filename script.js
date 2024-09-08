document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    var form = document.getElementById("resumeForm");
    var resumeContainer = document.getElementById("resumeContainer");
    var editButton = document.getElementById('editResume');
    var profileImageInput = document.getElementById("profileImage");
    var profileImagePreview = document.getElementById("profileImagePreview");
    if (!resumeContainer || !form || !profileImageInput || !profileImagePreview)
        return;
    // Initialize counts
    var skillCount = 1;
    var experienceCount = 1;
    var educationCount = 1;
    function updateResume() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var jobTitle = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        var location = document.getElementById("location").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var github = document.getElementById("github").value;
        var linkedin = document.getElementById("linkedin").value;
        // Handle Profile Image
        var profileImageUrl = '';
        if (profileImageInput && profileImageInput.files && profileImageInput.files[0]) {
            profileImageUrl = URL.createObjectURL(profileImageInput.files[0]);
        }
        var skillsHtml = '';
        document.querySelectorAll(".skill-item").forEach(function (item, index) {
            var _a, _b;
            var skillName = ((_a = item.querySelector("input[name=\"skill".concat(index + 1, "\"]"))) === null || _a === void 0 ? void 0 : _a.value) || '';
            var proficiency = ((_b = item.querySelector("input[name=\"proficiency".concat(index + 1, "\"]"))) === null || _b === void 0 ? void 0 : _b.value) || '';
            skillsHtml += "<p>".concat(skillName, ": ").concat(proficiency, "%</p>");
        });
        var experiencesHtml = '';
        document.querySelectorAll(".experience-item").forEach(function (item, index) {
            var _a, _b, _c, _d, _e;
            var jobTitle = ((_a = item.querySelector("input[name=\"expTitle".concat(index + 1, "\"]"))) === null || _a === void 0 ? void 0 : _a.value) || '';
            var company = ((_b = item.querySelector("input[name=\"expCompany".concat(index + 1, "\"]"))) === null || _b === void 0 ? void 0 : _b.value) || '';
            var startDate = ((_c = item.querySelector("input[name=\"expStartDate".concat(index + 1, "\"]"))) === null || _c === void 0 ? void 0 : _c.value) || '';
            var endDate = ((_d = item.querySelector("input[name=\"expEndDate".concat(index + 1, "\"]"))) === null || _d === void 0 ? void 0 : _d.value) || 'Present';
            var description = ((_e = item.querySelector("textarea[name=\"expDescription".concat(index + 1, "\"]"))) === null || _e === void 0 ? void 0 : _e.value) || '';
            experiencesHtml += "<div><h4>".concat(jobTitle, " at ").concat(company, "</h4><p>").concat(startDate, " - ").concat(endDate, "</p><p>").concat(description, "</p></div>");
        });
        var educationHtml = '';
        document.querySelectorAll(".education-item").forEach(function (item, index) {
            var _a, _b, _c, _d;
            var degree = ((_a = item.querySelector("input[name=\"eduDegree".concat(index + 1, "\"]"))) === null || _a === void 0 ? void 0 : _a.value) || '';
            var school = ((_b = item.querySelector("input[name=\"eduSchool".concat(index + 1, "\"]"))) === null || _b === void 0 ? void 0 : _b.value) || '';
            var startDate = ((_c = item.querySelector("input[name=\"eduStartDate".concat(index + 1, "\"]"))) === null || _c === void 0 ? void 0 : _c.value) || '';
            var endDate = ((_d = item.querySelector("input[name=\"eduEndDate".concat(index + 1, "\"]"))) === null || _d === void 0 ? void 0 : _d.value) || 'Present';
            educationHtml += "<div><h4>".concat(degree, "</h4><p>").concat(school, "</p><p>").concat(startDate, " - ").concat(endDate, "</p></div>");
        });
        if (resumeContainer) {
            resumeContainer.innerHTML = "\n                <div class=\"profile\">\n                    ".concat(profileImageUrl ? "<img src=\"".concat(profileImageUrl, "\" alt=\"Profile Image\" class=\"profile-image\">") : '', "\n                    <h1 class=\"editable\">").concat(firstName, " ").concat(lastName, "</h1>\n                    <h4 class=\"editable\">").concat(email, "</h4>\n                    <h2 class=\"editable\">").concat(jobTitle, "</h2>\n                    <p class=\"editable\">").concat(description, "</p>\n                    <p class=\"editable\">").concat(location, " | ").concat(phone, " | ").concat(email, "</p>\n                    <p class=\"editable\"><a href=\"").concat(github, "\" target=\"_blank\">GitHub</a> | <a href=\"").concat(linkedin, "\" target=\"_blank\">LinkedIn</a></p>\n                </div>\n                <h3 class=\"editable\">Skills</h3>\n                ").concat(skillsHtml, "\n                <h3 class=\"editable\">Experience</h3>\n                ").concat(experiencesHtml, "\n                <h3 class=\"editable\">Education</h3>\n                ").concat(educationHtml, "\n            ");
            resumeContainer.style.display = "block";
        }
        if (editButton)
            editButton.style.display = "inline";
    }
    // Toggle edit mode
    if (editButton) {
        editButton.addEventListener('click', function () {
            var isEditing = editButton.textContent === "Edit Resume";
            // Toggle contentEditable attribute
            var editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(function (el) {
                el.contentEditable = isEditing ? "true" : "false";
            });
            // Update button text
            editButton.textContent = isEditing ? "Save Changes" : "Edit Resume";
        });
    }
    function addSkill() {
        var _a;
        skillCount++;
        var skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = "\n            <label for=\"skill".concat(skillCount, "\">Skill ").concat(skillCount, ":</label>\n            <input type=\"text\" id=\"skill").concat(skillCount, "\" name=\"skill").concat(skillCount, "\">\n            <label for=\"proficiency").concat(skillCount, "\">Proficiency:</label>\n            <input type=\"range\" min=\"0\" max=\"100\" id=\"proficiency").concat(skillCount, "\" name=\"proficiency").concat(skillCount, "\">\n        ");
        (_a = document.getElementById('skillsContainer')) === null || _a === void 0 ? void 0 : _a.appendChild(skillItem);
    }
    function addExperience() {
        var _a;
        experienceCount++;
        var experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = "\n            <label for=\"expTitle".concat(experienceCount, "\">Job Title:</label>\n            <input type=\"text\" id=\"expTitle").concat(experienceCount, "\" name=\"expTitle").concat(experienceCount, "\">\n            <label for=\"expCompany").concat(experienceCount, "\">Company:</label>\n            <input type=\"text\" id=\"expCompany").concat(experienceCount, "\" name=\"expCompany").concat(experienceCount, "\">\n            <label for=\"expStartDate").concat(experienceCount, "\">Start Date:</label>\n            <input type=\"date\" id=\"expStartDate").concat(experienceCount, "\" name=\"expStartDate").concat(experienceCount, "\" required>\n            <label for=\"expEndDate").concat(experienceCount, "\">End Date:</label>\n            <input type=\"date\" id=\"expEndDate").concat(experienceCount, "\" name=\"expEndDate").concat(experienceCount, "\">\n            <label for=\"expDescription").concat(experienceCount, "\">Description:</label>\n            <textarea id=\"expDescription").concat(experienceCount, "\" name=\"expDescription").concat(experienceCount, "\"></textarea>\n        ");
        (_a = document.getElementById('experienceContainer')) === null || _a === void 0 ? void 0 : _a.appendChild(experienceItem);
    }
    function addEducation() {
        var _a;
        educationCount++;
        var educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = "\n            <label for=\"eduDegree".concat(educationCount, "\">Degree:</label>\n            <input type=\"text\" id=\"eduDegree").concat(educationCount, "\" name=\"eduDegree").concat(educationCount, "\">\n            <label for=\"eduSchool").concat(educationCount, "\">School:</label>\n            <input type=\"text\" id=\"eduSchool").concat(educationCount, "\" name=\"eduSchool").concat(educationCount, "\">\n            <label for=\"eduStartDate").concat(educationCount, "\">Start Date:</label>\n            <input type=\"date\" id=\"eduStartDate").concat(educationCount, "\" name=\"eduStartDate").concat(educationCount, "\" required>\n            <label for=\"eduEndDate").concat(educationCount, "\">End Date:</label>\n            <input type=\"date\" id=\"eduEndDate").concat(educationCount, "\" name=\"eduEndDate").concat(educationCount, "\">\n        ");
        (_a = document.getElementById('educationContainer')) === null || _a === void 0 ? void 0 : _a.appendChild(educationItem);
    }
    function previewImage() {
        if (profileImageInput && profileImageInput.files && profileImageInput.files[0]) {
            var file = profileImageInput.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                if (profileImagePreview) {
                    profileImagePreview.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                    profileImagePreview.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        }
        else if (profileImagePreview) {
            profileImagePreview.style.display = 'none';
        }
    }
    if (profileImageInput)
        profileImageInput.addEventListener("change", previewImage);
    (_a = document.getElementById("addSkill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addSkill);
    (_b = document.getElementById("addExperience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addExperience);
    (_c = document.getElementById("addEducation")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addEducation);
    if (form)
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            updateResume();
        });
});
