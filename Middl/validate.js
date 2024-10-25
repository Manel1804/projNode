//importer yup
var yup= require("yup")
async function validate(req, res, next){
    try{
        const Schema= yup.object().shape({
            username:yup.string().matches(/^[A-Z]/).required(),
            email:yup.string().email().matches(/@esprit.tn/, "L'email doit se terminer par @esprit.tn").required(),
            cin:yup.number().required()
        });
 await Schema.validate(req.body);
 //next heya eli bech t3adik lel controller, te5dem ken ki eli 9balha ykoun executé
 next()
    }catch(err){
        res.status(400).send(err);
    }
}
module.exports = validate;