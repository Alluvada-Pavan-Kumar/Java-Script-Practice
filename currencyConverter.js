const btn = document.getElementById("btn");

btn.addEventListener("click", convertCurrency);

async function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    try {
        let response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        let data = await response.json();

        if (data.result === "success") {
            let rate = data.rates[to];
            let converted = (amount * rate).toFixed(2);

            document.getElementById("result").innerHTML =
                `💱 ${amount} ${from} = <b>${converted} ${to}</b>`;
        } else {
            document.getElementById("result").innerHTML =
                "Conversion failed ❌";
        }

    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML =
            "Error fetching data ⚠️";
    }
}