let workouts = [
    {
        "name": "Pull Workout 1",
        "link": "https://www.youtube.com/watch?v=IOl42YpK_Es",
        "exercises": [
            {
                "name": "Climbers Pull Ups",
                "sets": 3,
                "reps": "5-8",
                "description": "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "Assisted Front Lever",
                "sets": 3,
                "reps": "5-8",
                "description": "Advanced core and lat strength with full-body tension."
            },
            {
                "name": "Pull Ups",
                "sets": 3,
                "reps": "5-8",
                "description": "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "Chin Ups",
                "sets": 3,
                "reps": "5-8",
                "description": "Lats, biceps brachii, traps, rhomboids"
            },
            {
                "name": "Close Grip Pull Ups",
                "sets": 3,
                "reps": "5-8",
                "description": "Lats, biceps brachii, brachialis, brachioradialis, rhomboids"
            },
            {
                "name": "Close Grip Chin Ups",
                "sets": 3,
                "reps": "5-8",
                "description": "Lats, biceps brachii, brachialis, brachioradialis, rhomboids"
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
                "name": "Deadlift",
                "sets": 2,
                "reps": "3",
                "description": "Full-body strength for the back, glutes, hamstrings, and core. Do 2-3 warm-up sets."
            },
            {
                "name": "Seated Cable Row",
                "sets": 3,
                "reps": 8,
                "description": "Lats, rhomboids, traps"
            },
            {
                "name": "Barbell Curls",
                "sets": 3,
                "reps": "6-8",
                "description": "Arms directed exercise"
            },
            {
                "name": "Lat Pulldown with Neutral Grip",
                "sets": 3,
                "reps": "6-8",
                "description": "Lats, biceps, Brachialis, brachioradialis, rhomboids"
            },
            {
                "name": "Dumbbell Row",
                "sets": 3,
                "reps": 8,
                "description": "Lats, rhomboids, traps"
            },
            {
                "name": "DB High Pulls",
                "sets": 3,
                "reps": "10-12",
                "description": "Upper back muscles with healthy shoulder mechanics."
            }
        ]
    },
    {
        "name": "Push Workout 1",
        "link": "https://www.youtube.com/watch?v=HE45jVN7XKM",
        "exercises": [
            {
                "name": "Handstand Push Up",
                "sets": 3,
                "reps": "F",
                "description": "Advanced shoulder and triceps bodyweight strength."
            },
            {
                "name": "Deep Dip",
                "sets": 3,
                "reps": "8-10",
                "description": "Chest, shoulders, triceps with extended range of motion."
            },
            {
                "name": "Psudo Planche Push Up",
                "sets": 3,
                "reps": "6-8",
                "description": "Chest, shoulders, and core engagement simulating planche tension."
            },
            {
                "name": "Diamond Push Up",
                "sets": 3,
                "reps": "8-10",
                "description": "Triceps-focused pushup variation with close hand placement."
            },
            {
                "name": "Pushup Plus",
                "sets": 3,
                "reps": "F (failure)",
                "description": "Chest, scapular stability."
            },
            {
                "name": "The Wall Walk",
                "sets": 3,
                "reps": "F",
                "description": "Finisher exercise focused on shoulder strength and balance"
            }
        ]
    },
    {
        "name": "Push Workout 2",
        "link": "https://www.youtube.com/watch?v=HE45jVN7XKM",
        "exercises": [
            {
                "name": "Barbell Overhead Press",
                "sets": 3,
                "reps": "4-6",
                "description": "Shoulders and stability."
            },
            {
                "name": "Incline Bench Press",
                "sets": 3,
                "reps": "4-6",
                "description": "Chest strength."
            },
            {
                "name": "Cable Flys",
                "sets": 3,
                "reps": "10-12",
                "description": "Chest adduction for pectoral contraction"
            },
            {
                "name": "Rear Delt Flyes",
                "sets": 3,
                "reps": "12",
                "description": "Isolation of rear delts for balanced shoulder development."
            },
            {
                "name": "Triceps Close Grip Bench Press",
                "sets": 3,
                "reps": "6-8",
                "description": "Directed-arm exercise"
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
                "name": "Barbell Squats (or Kata Squats)",
                "sets": 3,
                "reps": "4-6",
                "description": "Quads, hamstrings, gluteus"
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
