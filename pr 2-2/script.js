function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
        alert("Please enter valid numbers!");
        return;
    }

    // BMI Formula: weight (kg) / [height (m)]^2
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    const resultArea = document.getElementById('result-area');
    const scoreDisplay = document.getElementById('bmi-score');
    const categoryDisplay = document.getElementById('bmi-category');
    const msgDisplay = document.getElementById('bmi-msg');

    scoreDisplay.innerText = bmi;
    resultArea.classList.remove('hidden');

    // Categorization Logic
    if (bmi < 18.5) {
        categoryDisplay.innerText = "Underweight";
        categoryDisplay.style.color = "#3498db";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        categoryDisplay.innerText = "Healthy Weight";
        categoryDisplay.style.color = "#27ae60";
    } else if (bmi >= 25 && bmi <= 29.9) {
        categoryDisplay.innerText = "Overweight";
        categoryDisplay.style.color = "#f39c12";
    } else {
        categoryDisplay.innerText = "Obese";
        categoryDisplay.style.color = "#e74c3c";
    }
}