const express=require('express');
const router=express.Router();
const { getContacts, createContact,getContact, putContact, deleteContact}=require('../controller/contactController');
const validateToken = require('../middleware/validatTokenHandler');

router.use(validateToken);
router.route('/').get(getContacts).post(createContact);



router.route('/:id').get(getContact).put(putContact).delete(deleteContact);



module.exports=router;