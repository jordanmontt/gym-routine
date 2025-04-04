let workouts = [
    {
        "name": "Pull Workout 1",
        "link": "https://www.youtube.com/watch?v=IOl42YpK_Es",
        "exercises": [
            {
                "name": "High Pull Ups",
                "sets": 4,
                "reps": "5-8",
                "description": "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "Pull Ups",
                "sets": 4,
                "reps": "5-8",
                "description":  "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "DB High Pulls",
                "sets": 3,
                "reps": "10-12",
                "description": "Upper back muscles with healthy shoulder mechanics."
            },
            {
                "name": "Seated Cable Row",
                "sets": "3",
                "reps": "8",
                "description": "Lats, rhomboids, traps"
            },
            {
                "name": "BW Chin Curls into Overhead Triceps Extension",
                "sets": 3,
                "reps": "F (failure) / 10-12",
                "description": "Superset for biceps and triceps."
            },
            {
                "name": "Face Pulls",
                "sets": 3,
                "reps": "15-20",
                "description": "Rear delts, shoulder health."
            }
        ]
    },
    {
        "name": "Pull Workout 2",
        "link": "https://www.youtube.com/watch?v=IOl42YpK_Es",
        "exercises": [
            {
                "name": "Towel Push Ups",
                "sets": 4,
                "reps": "5-8",
                "description": "Forearms, lats, traps, rhomboids"
            },
            {
                "name": "Chin Ups",
                "sets": 4,
                "reps": "5.8",
                "description": "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "DB Rows",
                "sets": 3,
                "reps": "10-12 each arm",
                "description": "Lats, rhomboids, traps"
            },
            {
                "name": "DB Pullovers",
                "sets": "3",
                "reps": "10-12",
                "description": "Lats, shoulder mobility."
            },
            {
                "name": "Barbell Curls into Triceps Pushdowns",
                "sets": 3,
                "reps": "6-8 / 10-12",
                "description": "Superset for biceps and triceps."
            },
            {
                "name": "Face Pulls",
                "sets": 3,
                "reps": "15-20",
                "description": "Rear delts, shoulder health."
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
                "description": "Chest strength."
            },
            {
                "name": "Hi-to-Low Crossover",
                "sets": 3,
                "reps": "10-12",
                "description": "Chest post-pressing adduction."
            },
            {
                "name": "DB Shoulder Press",
                "sets": 4,
                "reps": "8-10",
                "description": "Shoulders and stability."
            },
            {
                "name": "1.5 Side Lateral Raises",
                "sets": 3,
                "reps": "12-15",
                "description": "Side delts, shoulder width."
            },
            {
                "name": "Lying Triceps Extensions into any DB Curls",
                "sets": 3,
                "reps": "10-12",
                "description": "Superset for triceps and biceps."
            },
            {
                "name": "Rotator Cuff ER",
                "sets": 3,
                "reps": "15-20",
                "description": "Rotator cuff, shoulder stability and injury prevention."
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
                "description": "Shoulders, triceps, upper chest"
            },
            {
                "name": "Underhand DB Bench Press",
                "sets": 3,
                "reps": "8-10",
                "description": "Lower chest, triceps."
            },
            {
                "name": "Abduction Rows",
                "sets": 3,
                "reps": "10-12",
                "description": "Upper back and shoulder stability."
            },
            {
                "name": "Cable Flys",
                "sets": 3,
                "reps": "10-12",
                "description": "Chest adduction for pectoral contraction"
            },
            {
                "name": "Triceps Close Grip Bench Press into DB Curl of Choice",
                "sets": 3,
                "reps": "6-8 / 10-12",
                "description": "Superset fot triceps and biceps."
            },
            {
                "name": "Pushup Plus",
                "sets": 3,
                "reps": "F (failure)",
                "description": "Chest, scapular stability."
            }
        ]
    },
    {
        "name": "Legs Workout",
        "link": "https://www.youtube.com/watch?v=X6H4l9R3DnY",
        "exercises": [
            {
                "name": "DB Romanian Deadlift",
                "sets": 3,
                "reps": "8",
                "description": "Hamstring warm-up and stretch"
            },
            {
                "name": "Adductor Machine",
                "sets": 3,
                "reps": "8-10",
                "description": "Hip warm-up and stretch"
            },
            {
                "name": "Deadlift",
                "sets": 1,
                "reps": "5",
                "description": "Full-body strength for the back, glutes, hamstrings, and core. Do 2-3 warm-up sets."
            },
            {
                "name": "Machine Squats",
                "sets": 4,
                "reps": "4-6",
                "description": "No lower back pressure after deadlift"
            },
            {
                "name": "Glute Machine",
                "sets": 3,
                "reps": "8-10",
                "description": "Glutes and posterior chain"
            },
            {
                "name": "DB/BB Alt. Reverse Lunges",
                "sets": "2-3",
                "reps": "10-12 each leg",
                "description": "Balance, lower body strength."
            },
            {
                "name": "Standing DB Calf Raises rotate with Seated DB Calf Raises",
                "sets": 3,
                "reps": "15-20 each",
                "description": "Calves training"
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
