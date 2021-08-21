async function result(req,res)
{   
    var oper = req.body.operacao;
    var result;
    var n1, n2;
    n1 = parseInt(req.body.nUm);
    n2 = parseInt(req.body.nDois);

    switch(oper)
    {
        case 'soma':
            result = n1 + n2;
            break;
        case 'subtracao':
            result = n1 - n2;
            break;
        case 'multiplicacao':
            result = n1 * n2;
            break;
        case 'divisao':
            result = n1 / n2;
            break;
    }
    msg = result;
    res.render("result.ejs",req.body);
}
async function add(req,res)
{
    res.render("add.ejs", {});
}

module.exports = {add,result};