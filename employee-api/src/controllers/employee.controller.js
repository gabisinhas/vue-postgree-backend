const db = require('../config/database');

// Metodo para criar novo employee
exports.createEmployee = async(req,res) =>{
    const {name, job_role, salary, birth, employee_registration} = req.body;
    const {rows} = await db.query(
        "INSERT INTO employee(name, job_role, salary, birth, employee_registration) VALUES ($1,$2,$3,$4,$5)",
        [name, job_role, salary, birth, employee_registration]
    );
    res.status(201).send({
        message:'Employee Added Successfully',
        body:{name, job_role, salary, birth, employee_registration}
    })
}

exports.listAllEmployees = async(req,res) =>{
     const response = await db.query(
        'SELECT * FROM employee ORDER BY name ASC',
    );
    res.status(200).send(response.rows)
}

exports.findEmployeeByID = async(req,res) =>{
    const employeeId = req.params.id;
    const response = await db.query('SELECT * FROM employee WHERE employee_id = $1',[employeeId])
    res.status(200).send(response.rows)
 }

 exports.updateEmployeeByID = async(req,res) =>{
    const employeeId = req.params.id;
    const {name, job_role, salary, birth, employee_registration} = req.body;

    const response = await db.query(`UPDATE employee SET name = $1,job_role=$2,salary=$3,birth=$4,employee_registration=$5 WHERE employee_id=$6`,
    [name, job_role, salary, birth, employee_registration,employeeId])

    res.status(200).send({messsage:'Employee Updated!'})
 }

 exports.deleteEmployeeByID = async(req,res) =>{
    const employeeId = req.params.id;
    const {name, job_role, salary, birth, employee_registration} = req.body;

    const response = await db.query(`DELETE FROM employee WHERE employee_id=$1`,[employeeId])

    res.status(200).send({messsage:'Employee Deleted!'})
 }