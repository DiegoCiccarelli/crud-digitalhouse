const { VariantAlsoNegotiates } = require("http-errors");
const fs = require('fs');
const { allowedNodeEnvironmentFlags } = require("process");
const productosController = {

    nuevoVacio: function(req, res, next){
        res.render('new', {title: 'Nuevo Artículo'});
      },

    nuevo: function(req, res, next){
  
        let products = fs.readFileSync('data/products.json',{encoding: 'utf8'});
        let jsonProductos = JSON.parse(products);
       
        jsonProductos.push({
          id: parseInt(req.body.id),
          nombre: req.body.nombre,
          precio: parseFloat(req.body.precio),
          descripcion: req.body.descripcion,
          marca: req.body.marca,
          stock: parseInt(req.body.stock)
      
        });
       
        fs.writeFileSync('data/products.json', JSON.stringify(jsonProductos));
        res.render('newOk');
    },

    editar: function(req, res, next){
  
        console.log("llege aca")
        let products = fs.readFileSync('data/products.json',{encoding: 'utf8'});
        let jsonProductos = JSON.parse(products);
        
        for (i=0; i<jsonProductos.length; i++){
            console.log(jsonProductos);
            if(jsonProductos[i].id == req.body.id){
                jsonProductos[i].nombre= req.body.nombre,
                jsonProductos[i].precio= parseFloat(req.body.precio),
                jsonProductos[i].descripcion= req.body.descripcion,
                jsonProductos[i].marca= req.body.marca,
                jsonProductos[i].stock= parseInt(req.body.stock)

            } 
        };
       
        fs.writeFileSync('data/products.json', JSON.stringify(jsonProductos));
        res.redirect('/edit/' + req.body.id);
    },

    mostrar: function(req, res, next){
  
        let products = fs.readFileSync('data/products.json',{encoding: 'utf8'});
        let jsonProductos = JSON.parse(products);
        
        jsonProductosFiltrado = jsonProductos.find(obj => obj.id==req.params.id)
        res.render('edit' ,{jsonProductosFiltrado: jsonProductosFiltrado,
        title: "editar producto"});
        

    },

    eliminar: function(req, res, next){

        let products = fs.readFileSync('data/products.json',{encoding: 'utf8'});
        let jsonProductos = JSON.parse(products);

        if (jsonProductos.find(obj => obj.id==req.params.id)){
            
            jsonProductosFiltrado = jsonProductos.filter(obj => obj.id!=req.params.id);
            fs.writeFileSync('data/products.json', JSON.stringify(jsonProductosFiltrado));
            return res.render('deleteOk');
            

        }else{
            return res.render('deleteNo');
        };

    },

    // listado: function(req, res, next){

    //     let products = fs.readFileSync('data/products.json',{encoding: 'utf8'});
    //     let jsonProductos = JSON.parse(products);

    //     res.render('index', {jsonProductos: jsonProductos, title: "Listado productos ABM"});
        

    // }

    
   

    
    

}

module.exports = productosController;