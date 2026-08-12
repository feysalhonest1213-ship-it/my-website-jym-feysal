document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membershipForm');
    const outputCard = document.getElementById('outputCard');

    // Auto-fill today's date into the Start Date input field
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extract values from form inputs
        const name = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const months = parseInt(document.getElementById('membershipType').value);
        const startDateValue = document.getElementById('startDate').value;

        // Calculate Expiration Date
        const startDate = new Date(startDateValue);
        const expireDate = new Date(startDate);
        expireDate.setMonth(expireDate.getMonth() + months);

        // Format dates for display
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedStart = startDate.toLocaleDateString('en-US', dateOptions);
        const formattedExpire = expireDate.toLocaleDateString('en-US', dateOptions);

        // Inject content into output card
        document.getElementById('outName').textContent = name;
        document.getElementById('outPhone').textContent = phone;
        document.getElementById('outPlan').textContent = months;
        document.getElementById('outStart').textContent = formattedStart;
        document.getElementById('outExpire').textContent = formattedExpire;

        // Display output container and reset form fields
        outputCard.classList.remove('hidden');
        form.reset();
        document.getElementById('startDate').value = today;
    });
});
