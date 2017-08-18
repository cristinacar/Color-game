$(document).ready(function(){
    $('.form-newproduct form').form({
        name: {
            identifier: 'name',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter a product name',
                }
            ]
        },

        price: {
            identifier: 'price',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter a price'
                },
                {
                    type: 'number',
                    prompt: 'The price must be a number'
                }
            ]
        },

        stock: {
            identifier: 'stock',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter how many products you have on stock'
                },
                {
                    type: 'integer',
                    prompt: 'The stock must be a number'
                }
            ]
        }
    });
});