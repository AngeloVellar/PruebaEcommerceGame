const mp = new MercadoPago(‘YOUR_PUBLIC_KEY’, {
    locale: 'es-AR'
});

    const MP = async () =>{
        try{
        miArticulo = {}
        miArticulo.title = "manzana";
        miArticulo.quantity = 1;
        miArticulo.unit_price = 100;

        const response = await fetch("api/mp", {
            method: 'POST' , 
            headers: {
            'Accept': 'Application/json' , 
            'Content-Type': 'Application/json'
            },
            body: JSON.stringify(miArticulo)
        })
        const preference = await response.text()
        createCheckoutButton(preference)    
    }catch(e){alert("error: " + e)}
    }

    const createCheckoutButton = (preferenceId_OK) => {
        const bricksBuilder = mp.bricks();
        if (window.checkoutButton) {
            window.checkoutButton.unmount();
        }
        window.checkoutButton = bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId_OK,
            },
        });
        generateButton()
    };