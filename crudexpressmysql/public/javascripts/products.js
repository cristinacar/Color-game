$(document).ready(function(){
    $('#tbl-products #btn-delete').click(function(e){
        e.preventDefault();
        var element = $(this);
        var id = element.parent().parent().find('#product_id').text();

       
        
        $.ajax({
            url: 'http://localhost:3000/deleteproducts',
            method: 'post',
            data: {id: id},
            success: function(res){
                if(res.res){
                    element.parent().parent().remove();
                }
            }
        });
    })
});