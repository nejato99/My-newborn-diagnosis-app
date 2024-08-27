document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('babyInfoForm');
    const diagnosisResult = document.getElementById('diagnosisResult');
    const diagnosisText = document.getElementById('diagnosisText');
    const treatmentOptions = document.getElementById('treatmentOptions');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const babyName = document.getElementById('babyName').value;
        const babyAge = parseInt(document.getElementById('babyAge').value);
        const babySex = document.getElementById('babySex').value;
        const babyWeight = parseFloat(document.getElementById('babyWeight').value);
        const babyDOB = document.getElementById('babyDOB').value;

        const notBreathing = document.getElementById('notBreathing').checked;
        const gasping = document.getElementById('gasping').checked;
        const poorBreathing = document.getElementById('poorBreathing').checked;

        const yellowSkin = document.getElementById('yellowSkin').checked;
        const yellowEyes = document.getElementById('yellowEyes').checked;
        const yellowFace = document.getElementById('yellowFace').checked;

        let diagnosis = '';
        let treatments = [];

        // Asphyxia diagnosis
        if (notBreathing || gasping || poorBreathing) {
            diagnosis = 'Asphyxia';
            treatments = ['Amoxicillin', 'Ampicillin', 'Augmentin', 'Diclofenac', 'TTC'];
        } else {
            diagnosis = 'No Asphyxia';
        }

        // Jaundice diagnosis
        if (yellowSkin && yellowEyes && babyAge < 24) {
            diagnosis += ', Severe Jaundice';
