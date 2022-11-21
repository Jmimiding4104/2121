function getData() {
    axios
        .get(
            `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`
        )
        .then(function (response) {
            console.log(response.data);
            getProductCard(response.data.products);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
}

function getProductCard(total) {
    let str = ``;
    total.forEach((item) => {
        console.log(item);
    });
}

getData()
