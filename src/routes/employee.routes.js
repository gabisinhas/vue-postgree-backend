const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// Rota responsavel para criar novo registro
router.post('/employees', employeeController.createEmployee);

// Rota para listar todos os funcionatios cadastrados
router.get('/employees', employeeController.listAllEmployees);

// Procurar funcionário por ID
router.get('/employees/:id', employeeController.findEmployeeByID);

// Atualizar funcionário por ID
router.put('/employees/:id', employeeController.updateEmployeeByID);

// Deletar funcionário por ID
router.delete('/employees/:id', employeeController.deleteEmployeeByID);

module.exports = router;