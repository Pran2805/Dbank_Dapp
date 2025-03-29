import { Dbank_backend } from "../declarations/Dbank_backend";

window.addEventListener("load", async () => {
    console.log("Loading...");

    try {
        let currentAmount = await Dbank_backend.checkBalance(); // Ensure it's awaited
        document.getElementById("value").innerText = currentAmount.toFixed(2);
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
});

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = e.target.querySelector('#submit-btn');
    button.value = 'Loading...';
    button.setAttribute('disabled', true);

    const depositInput = document.getElementById('deposit');
    const withdrawInput = document.getElementById('withdraw');

    const deposit = depositInput.value ? parseFloat(depositInput.value) : 0;  
    const withdraw = withdrawInput.value ? parseFloat(withdrawInput.value) : 0;

    console.log("Deposit:", deposit, typeof deposit);
    console.log("Withdraw:", withdraw, typeof withdraw);

    if (deposit > 0) {
        await Dbank_backend.topUp(deposit);
    }
    
    if (withdraw > 0) {
        await Dbank_backend.withdraw(withdraw);
    }

    let currentAmount = await Dbank_backend.checkBalance();
    document.getElementById("value").innerText = currentAmount.toFixed(2);
    depositInput.value = ""
    withdrawInput.value = ""
    button.removeAttribute('disabled');
    button.value = 'Finalize Transaction';
});
