const app = require('express')();
const Student = require('./models/Student')
const PORT = 3000;

require('./utils/connection')


app.get('/stats', async (req, res) => {

    const students = await Student.find().limit(1)


    const totalMarks = await Student.aggregate([
        {
            $addFields: {
                totalMarks: {
                    $add: ["$marks.math", "$marks.english", "$marks.science"]
                }
            }
        },
        { $sort: { totalMarks: -1 } },
        { $limit: 3 }
    ])


    const highestAvgOverall = await Student.aggregate([
        {
            $addFields: {
                totalMarks: {
                    $add: ["$marks.math", "$marks.english", "$marks.science"]
                }
            }
        },
        {
            $group: {
                _id: "$class",
                avgTotal: {$avg: "$totalMarks"}
            }
        },
        { $sort: { avgTotal: -1 } },
    ])

    const failedStudents = await Student.aggregate([
        {
            $match: {
                $or: [
                    {"marks.math": {$lt: 50}},
                    {"marks.english": {$lt: 50}},
                    {"marks.science": {$lt: 50}},
                ]
            }
        }
    ])

    const totalStudentsByClass = await Student.aggregate(

        [{
            $group: {
                _id: "$class",
                totalStudents: { $sum: 1 },
                avgEnglishMarks: { $avg: '$marks.english' },
                avgMathMarks: { $avg: '$marks.math' },
                avgScienceMarks: { $avg: '$marks.science' },
            }
        }]
    );

    // const averageMarks = await Student.aggregate(
    //     [
    //         {
    //             $group: {
    //                 _id: '$class',
    //                 avgMathMarks: {$avg: '$marks.math'},
    //                 avgEnglishMarks: {$avg: '$marks.math'}
    //             }
    //         }
    //     ]
    // )

    res.status(200).json({
        totalStudentsByClass,
        students,
        totalMarks,
        failedStudents,
        highestAvgOverall
    })
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})