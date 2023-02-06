//Quando o documento estiver carregado serão executadas as funções
$(document).ready(function(){
    
    //Array
    var palestras = [];

    
    
    
    //******Função que fará a compra/exclusão da palestra
    $("figure").children("img").click(function(){
                
        //Opacidade
        $(this).fadeTo("slow",0.3);
        
        //Adquirindo o nome da palestra através do atributo ALT
        var palestra = $(this).attr("alt");

        
        //Verificando se a palestra selecionada está no Array
        //-1 Significa que não há registros no vetor da palestra selecionada
        if(palestras.indexOf(palestra) == -1){
        
            //Adicionando a palestra no array
            palestras.push(palestra);
                        
        }else{
            //Opacidade
            $(this).fadeTo("slow",1.0);
        
            //Localizar onde está a palestra no Array
            var indicePalestra = palestras.indexOf(palestra);   
            
            //Removendo a palestra
            palestras.splice(indicePalestra, 1);
        }
        //******Término da função    
        
        
        
        
        
        
        
        
        //******Alterando o valor do cabeçalho
        if(palestras.length == 0){
            $("#carrinho").html("Nenhuma palestra adquirida");
        }else if(palestras.length == 1){
            $("#carrinho").html("Você comprou uma palestra");
        }else{
            var frase = "Foram compradas "+palestras.length+" palestras";
            $("#carrinho").html(frase);
        }
        //******Término da função
        
        
        
        
        
        
        
        
        //******Remover valores da lista (Toda vez que for comprado ou excluída uma compra a lista atualiza)
        $("#lista").empty();
        
        var contarPalestras = palestras.length;
            
        for(var indice = 0; indice < contarPalestras; indice++){
            $("#lista").append("<p>"+palestras[indice]+"</p>");
        }   
        //******Término da função
        
        
        
        

        
        //******Habilitar o botão de Finalizar Compra        
        
        if(contarPalestras != 0){
            
            var link = "";
            
            for(var indice = 0; indice < contarPalestras; indice++){
                link += palestras[indice]+";";
            }
            
            $("#lista").append("<a href='finalizarCompra.php?palestras="+link+"' id='btnComprar'>Finalizar Compra</a>");
        }  
        //******Término da função
        
    });
 
});



