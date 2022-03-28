const controller = {};

controller.list =  (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customers', (err, customers) => {
            if(err){
               res.json(err);// console.log("error");
            }                
            res.render('customers', {
                data: customers
            });
        });
    });
};  

controller.save = (req, res) => {
    req.getConnection((err, conn) => {
        const data = req.body;
        
        conn.query('INSERT INTO customers set ?', [data], (err, customer) => {
            res.redirect('/');//Esta liena es para redireccionar a la pagina inicial, luego de guardar un formulario.
        });
    });
};//Con este bloque de codigo lo que hacemos es guardar los datos que recibimos desde el formulario.

controller.edit = ((req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customers WHERE id = ?', [id], (err, customer) => {
            res.render('customers_edit', {
                data: customer[0]
            });
        });
    });
});

controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomre = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customers set ? WHERE id = ?', [newCustomre, id], (err, rows) => {
            res.redirect('/');
        });
    });


};



controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customers WHERE id = ?', [id], (err, row) => {
            res.redirect('/');
        });
    });
};//Con este bloque de codigo lo que hacemos es eliminar los datos que deseemos en la lista.



module.exports = controller;