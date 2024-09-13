window.onload = function() {
    const popup = document.getElementById('popup');
    const continueButton = document.getElementById('continueButton');

    // Check if the popup has been shown before
    if (!localStorage.getItem('popupShown')) {
        popup.style.display = 'flex'; // Show popup
    }

    continueButton.addEventListener('click', function() {
        popup.style.display = 'none';
        localStorage.setItem('popupShown', 'true'); // Set popup as shown
    });
};

function updateHeightValue(value) {
    document.getElementById('heightValue').innerText = value;
}

function updateWeightValue(value) {
    document.getElementById('weightValue').innerText = value;
}

function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    if(height > 0 && weight > 0) {
        let bmi = (weight / (height/100 * height/100)).toFixed(2);
        document.getElementById('bmi-result').innerHTML = `Your BMI is: ${bmi}`;
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal weight';
        else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
        else category = 'Obesity';
        document.getElementById('bmi-category').innerHTML = `Category: ${category}`;
    } else {
        document.getElementById('bmi-result').innerHTML = 'Please enter valid height and weight!';
    }
}