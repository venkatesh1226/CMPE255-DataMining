import conversionFactors from './conversion.js';

// Populate the category dropdown menu
function populateCategories() {
    // Add code here
    document.getElementById('category').innerHTML = '<option value="length">Length</option><option value="area">Area</option><option value="volume">Volume</option><option value="mass">Mass</option><option value="speed">Speed</option><option value="temperature">Temperature</option><option value="time">Time</option>';
    populateUnits();

}

// Populate the source and target unit dropdown menus
function populateUnits() {
    // Add code here
    var category = document.getElementById('category').value;
    document.getElementById('sourceUnit').innerHTML = '';
    document.getElementById('targetUnit').innerHTML = '';
    for (var unit in conversionFactors[category]) {
        var lower=unit.toLowerCase();
        document.getElementById('sourceUnit').innerHTML += '<option value="' + lower + '">' + unit + '</option>';
        document.getElementById('targetUnit').innerHTML += '<option value="' + lower + '">' + unit + '</option>';
    }
    convertUnits();


}

// Perform the unit conversion
function convertUnits() {
    // Add code here
    
    var sourceUnit = document.getElementById('sourceUnit').value;
    var targetUnit = document.getElementById('targetUnit').value;
    var input = document.getElementById('input').value;
    var category = document.getElementById('category').value;

    // console.log(typeof document.getElementById('sourceUnit'));
    


    var output = input * conversionFactors[category][targetUnit]/conversionFactors[category][sourceUnit]  ;
    // console.log("**"+output);
    document.getElementById('result').textContent = output;
    
    // var output = input * conversionFactors.sourceUnit / conversionFactors.targetUnit;
    // console.log(output);
    // document.getElementById('result').innerHTML = output;

}

// Swap the source and target units
function swapUnits() {
    // Add code here

    var sourceUnit = document.getElementById('sourceUnit').value;
    var targetUnit = document.getElementById('targetUnit').value;
    document.getElementById('sourceUnit').value = targetUnit;
    document.getElementById('targetUnit').value = sourceUnit;
    convertUnits();
    
}

// Save the conversion history
function saveHistory() {
    // Add code here
    var sourceUnit = document.getElementById('sourceUnit').value;
    var targetUnit = document.getElementById('targetUnit').value;
    var input = document.getElementById('input').value;
    var output = document.getElementById('output').innerHTML;
    var history = document.getElementById('history');
    history.innerHTML += '<tr><td>' + input + ' ' + sourceUnit + '</td><td>' + output + ' ' + targetUnit + '</td></tr>';
    
}

// Load the conversion history
function loadHistory() {
    // Add code here
    var history = document.getElementById('history');
    history.innerHTML = '<tr><th>Source</th><th>Target</th></tr>';
    
}

// Add event listeners for the dropdown menus and buttons
document.getElementById('category').addEventListener('change', populateUnits);
document.getElementById('sourceUnit').addEventListener('change', convertUnits);
document.getElementById('targetUnit').addEventListener('change', convertUnits);
document.getElementById('input').addEventListener('input', convertUnits);
document.getElementById('swap').addEventListener('click', swapUnits);
document.getElementById('convert').addEventListener('click', saveHistory);

// Populate the category dropdown menu and load the conversion history when the page loads
window.onload = function() {
    populateCategories();
    loadHistory();
};
