const express = require('express');
const { employee } = require("./models/employees.model");
const { sequelize } = require("./lib/index");
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const employeeData = [
	{
	  name: 'Alice',
	  salary: 60000,
	  department: 'Engineering',
	  designation: 'Software Engineer'
	},
	{
    name : 'Bob',
    salary : 70000,
    department : 'Marketing',
    designation : 'Marketing Manager'
  },
	{
	  name: 'Charlie',
	  salary: 80000,
	  department: 'Engineering',
	  designation: 'Senior Software Engineer'
	}
]

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync();
    await employee.bulkCreate(employeeData);
    res.status(200).json({ message: "Database seeding successful" });
  } catch (error) {
    res.status(500).json({ message: "Error seeding the database" });
  }
})

app.get("/employees", async (req, res) => {
    try {
      const results = await employee.findAll();
      if (results.length === 0) {
        return res.status(404).json({ message: "No employees found." });
      }
      res.status(200).json({ employees : results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
