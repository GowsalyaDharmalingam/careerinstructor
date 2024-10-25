let feedbackTemplates = [];
let selectedTemplate = '';
let customFeedback = '';

function fetchFeedbackTemplates() {
    feedbackTemplates = ['Template 1', 'Template 2', 'Template 3'];
    renderTemplates();
}

function handleTemplateSelect(template) {
    selectedTemplate = template;
}

function handleFeedbackChange(event) {
    customFeedback = event.target.value;
}

function previewFeedback() {
    alert(`Preview: ${selectedTemplate} - ${customFeedback}`);
}

function sendFeedback() {
    alert('Feedback sent to students.');
}

function saveDraft() {
    alert('Feedback saved as draft.');
}

function loadPreviousFeedback() {
    customFeedback = 'Previously saved feedback.';
    document.getElementById('customFeedback').value = customFeedback;
}

function deleteTemplate(template) {
    feedbackTemplates = feedbackTemplates.filter(t => t !== template);
    renderTemplates();
}

function createNewTemplate() {
    const newTemplate = prompt('Enter new template name:');
    if (newTemplate) {
        feedbackTemplates.push(newTemplate);
        renderTemplates();
    }
}

function importTemplates() {
    alert('Templates imported.');
}

function exportTemplates() {
    alert('Templates exported.');
}

function renderTemplates() {
    const templatesList = document.getElementById('templatesList');
    templatesList.innerHTML = ''; // Clear existing templates
    feedbackTemplates.forEach(template => {
        const li = document.createElement('li');
        li.innerHTML = `${template}
            <button onclick="handleTemplateSelect('${template}')"><i class="fas fa-pen"></i> Select</button>
            <button onclick="deleteTemplate('${template}')"><i class="fas fa-trash-alt"></i> Delete</button>`;
        templatesList.appendChild(li);
    });
}

function goBack() {
    window.history.back();
}
