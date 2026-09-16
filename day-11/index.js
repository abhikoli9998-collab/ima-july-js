
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded successfully");
        }, 2000);
    });
}
async function showData() {
    const result = await getData();
    console.log(result);
}

showData();