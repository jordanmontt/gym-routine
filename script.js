let workouts = [
    {
        "name": "Pull Workout 1",
        "link": "https://www.youtube.com/watch?v=IOl42YpK_Es",
        "exercises": [
            {
                "name": "Deadlifts",
                "sets": 1,
                "reps": 5,
                "description": "A full-body compound lift that targets the posterior chain, including hamstrings, glutes, and lower back."
            },
            {
                "name": "Chest Supported Rows",
                "sets": 3,
                "reps": "8-10",
                "description": "Removes strain from the lower back while targeting the upper and mid-back muscles."
            },
            {
                "name": "DB High Pulls",
                "sets": 3,
                "reps": "10-12",
                "description": "Targets the upper back muscles with healthy shoulder mechanics."
            },
            {
                "name": "DB Pullovers",
                "sets": "2-3",
                "reps": "10-12",
                "description": "A direct lat isolation exercise that also improves shoulder mobility."
            },
            {
                "name": "BW Chin Curls into Overhead Triceps Extension",
                "sets": 3,
                "reps": "F (failure) / 10-12",
                "description": "A combination movement that works both the biceps and triceps effectively."
            },
            {
                "name": "Angels and Devils",
                "sets": 3,
                "reps": "15-20",
                "description": "A corrective exercise that strengthens the posterior chain and promotes shoulder health."
            }
        ]
    },
    {
        "name": "Pull Workout 2",
        "link": "https://www.youtube.com/watch?v=IOl42YpK_Es",
        "exercises": [
            {
                "name": "Snatch Grip Deadlifts",
                "sets": 3,
                "reps": 5,
                "description": "A variation of the deadlift that emphasizes the upper back and grip strength."
            },
            {
                "name": "Weighted Pullups",
                "sets": 3,
                "reps": "6-8",
                "description": "A compound back and biceps movement that improves pulling strength."
            },
            {
                "name": "Alt. DB Gorilla Rows",
                "sets": 3,
                "reps": "10-12 each arm",
                "description": "A unilateral row variation that challenges stability and back engagement."
            },
            {
                "name": "Straight Arm Pushdowns",
                "sets": "2-3",
                "reps": "12-15",
                "description": "Targets the lats directly without involving the biceps."
            },
            {
                "name": "Barbell Curls into Triceps Pushdowns",
                "sets": 3,
                "reps": "6-8 / 10-12",
                "description": "A superset that balances biceps and triceps work."
            },
            {
                "name": "Face Pulls",
                "sets": 3,
                "reps": "15-20",
                "description": "Strengthens the rear delts and improves shoulder health."
            }
        ]
    },
    {
        "name": "Push Workout 1",
        "link": "https://www.youtube.com/watch?v=HE45jVN7XKM",
        "exercises": [
            {
                "name": "Bench Press",
                "sets": 4,
                "reps": "4-6",
                "description": "A fundamental chest movement that builds pressing strength."
            },
            {
                "name": "Hi-to-Low Crossover",
                "sets": 3,
                "reps": "10-12",
                "description": "An isolation movement focusing on post-pressing adduction for the chest."
            },
            {
                "name": "DB Shoulder Press",
                "sets": 4,
                "reps": "8-10",
                "description": "A standing press that strengthens the shoulders and improves stability."
            },
            {
                "name": "1.5 Side Lateral Raises",
                "sets": 3,
                "reps": "12-15",
                "description": "A side delt isolation exercise that enhances shoulder width."
            },
            {
                "name": "Lying Triceps Extensions into DB Waiter Curls",
                "sets": 3,
                "reps": "10-12",
                "description": "A superset that works both the triceps and biceps efficiently."
            },
            {
                "name": "Rotator Cuff ER",
                "sets": 3,
                "reps": "15-20",
                "description": "Strengthens the rotator cuff for improved shoulder stability and injury prevention."
            }
        ]
    },
    {
        "name": "Push Workout 2",
        "link": "https://www.youtube.com/watch?v=HE45jVN7XKM",
        "exercises": [
            {
                "name": "Barbell Overhead Press",
                "sets": 4,
                "reps": "4-6",
                "description": "A powerful shoulder press that also engages the triceps and upper chest."
            },
            {
                "name": "Underhand DB Bench Press",
                "sets": 3,
                "reps": "8-10",
                "description": "A variation of the bench press that targets the lower chest and triceps."
            },
            {
                "name": "Abduction Rows",
                "sets": 3,
                "reps": "10-12",
                "description": "An upper back movement that also helps with shoulder stability."
            },
            {
                "name": "Floor Flys",
                "sets": 3,
                "reps": "10-12",
                "description": "A chest isolation movement that provides a good stretch without excessive shoulder strain."
            },
            {
                "name": "Triceps Close Grip Bench Press into DB Curl of Choice",
                "sets": 3,
                "reps": "6-8 / 10-12",
                "description": "A compound triceps movement followed by a biceps isolation exercise."
            },
            {
                "name": "Pushup Plus",
                "sets": 3,
                "reps": "F (failure)",
                "description": "A bodyweight exercise that strengthens the chest and scapular stability."
            }
        ]
    },
    {
        "name": "Legs Workout",
        "link": "https://www.youtube.com/watch?v=X6H4l9R3DnY",
        "exercises": [
            {
                "name": "Squats",
                "sets": 4,
                "reps": "4-6",
                "description": "A compound lower body movement that targets the quads, glutes, and core."
            },
            {
                "name": "Barbell Hip Thrust",
                "sets": 3,
                "reps": "8-10",
                "description": "A glute-focused exercise that improves hip drive and lower-body power."
            },
            {
                "name": "DB/BB Alt. Reverse Lunges",
                "sets": "2-3",
                "reps": "10-12 each leg",
                "description": "A unilateral movement that enhances balance and lower body strength."
            },
            {
                "name": "Single Leg RDL rotate with Slick Floor Bridge Curls",
                "sets": "2-3",
                "reps": "10-12 each leg / F",
                "description": "A combination of posterior chain exercises that improve hamstring and glute activation."
            },
            {
                "name": "Standing DB Calf Raises rotate with Seated DB Calf Raises",
                "sets": 3,
                "reps": "15-20 each",
                "description": "A calf training superset that targets both the gastrocnemius and soleus muscles."
            }
        ]
    }
]


async function loadWorkouts() {
    try {
        let container = document.getElementById("workout-container");

        workouts.forEach(workout => {
            let workoutHTML = `<div class="workout">
                <h2><a href="${workout.link}" target="_blank">${workout.name}</a></h2>
                <ul>`;

            workout.exercises.forEach(exercise => {
                workoutHTML += `<li class="workout-item">
                    <strong>${exercise.name} (${exercise.sets} x ${exercise.reps})</strong><br>
                    <em>${exercise.description}</em>
                </li>`;
            });

            workoutHTML += `</ul></div>`;
            container.innerHTML += workoutHTML;
        });
    } catch (error) {
        console.error("Error loading workouts:", error);
    }
}

loadWorkouts();
