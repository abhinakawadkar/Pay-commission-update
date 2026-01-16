document.getElementById('salaryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const basicPay = parseFloat(document.getElementById('basicPay').value);
    const daPercent = parseFloat(document.getElementById('da').value);
    const hikePercent = parseFloat(document.getElementById('hike').value);
    
    if (isNaN(basicPay) || isNaN(daPercent) || isNaN(hikePercent)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return;
    }
    
    // Calculate new basic pay after hike
    const newBasicPay = basicPay * (1 + hikePercent / 100);
    
    // Calculate DA amount
    const daAmount = newBasicPay * (daPercent / 100);
    
    // Total salary (basic + DA; add other allowances if needed)
    const totalSalary = newBasicPay + daAmount;
    
    document.getElementById('result').innerHTML = `
        <p>New Basic Pay: ₹${newBasicPay.toFixed(2)}</p>
        <p>DA Amount: ₹${daAmount.toFixed(2)}</p>
        <p>Total Estimated Salary: ₹${totalSalary.toFixed(2)}</p>
    `;
});
