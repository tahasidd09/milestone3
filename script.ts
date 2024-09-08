interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
}

// Get form and output elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const outputName = document.getElementById('output-name') as HTMLElement;
const outputEmail = document.getElementById('output-email') as HTMLElement;
const outputEducation = document.getElementById('output-education') as HTMLElement;
const outputWork = document.getElementById('output-work') as HTMLElement;
const outputSkills = document.getElementById('output-skills') as HTMLElement;

// Validate form inputs
function validateForm(data: ResumeData): boolean {
    if (!data.name || !data.email || !data.education || !data.workExperience || !data.skills) {
        alert('Please fill out all fields');
        return false;
    }
    return true;
}

// Function to populate resume
function generateResume(data: ResumeData): void {
    outputName.textContent = data.name;
    outputEmail.textContent = data.email;
    outputEducation.textContent = data.education;
    outputWork.textContent = data.workExperience;
    outputSkills.textContent = data.skills;
}

// Form submission event listener
resumeForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const formData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLInputElement).value,
        workExperience: (document.getElementById('work') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value,
    };

    // Validate form
    if (validateForm(formData)) {
        generateResume(formData);
    }
});
