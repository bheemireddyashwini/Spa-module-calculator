

import { difference } from './percentage.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('percentage-change-form');
    
    form.addEventListener('input', () => {
        // Capture user input
        const input1 = parseFloat(document.getElementById('change_1').value) || 0;
        const input2 = parseFloat(document.getElementById('change_2').value) || 0;

        // Calculate the result
        const result = difference(input1, input2);

        // Set the result
        document.getElementById('change_result').value = result;
    });
});





