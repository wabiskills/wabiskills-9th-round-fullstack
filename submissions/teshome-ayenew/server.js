

const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('Welcome to WabiSkills 9th Round! family Iam Teshome');
});

app.post('/register', (req, res) => {
    const { fullName, email, course } = req.body;

    res.status(200).json({
        message: 'Student registered successfully!',
        student: {
            fullName: fullName,
            email: email,
            course: course
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
