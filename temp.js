        // ============================================
        // 1. DATA MODEL
        // ============================================

        const ROUTINE = {
            day1: {
                name: 'DÍA 1 - PECHO',
                emoji: '💪',
                exercises: [
                    {
                        id: 'e1',
                        name: 'Contractor de Pecho',
                        sets: 4,
                        reps: 12,
                        rest: 60,
                        video: 'https://www.youtube.com/results?search_query=contractor+pecho+gym',
                        tips: 'Mantén los codos ligeramente flexionados y controla el movimiento.'
                    },
                    {
                        id: 'e2',
                        name: 'Press de Banca con Mancuernas',
                        sets: 4,
                        reps: 12,
                        rest: 60,
                        video: 'https://www.youtube.com/results?search_query=press+banca+mancuernas',
                        tips: 'Mantén los pies firmes en el suelo y la espalda pegada al banco.'
                    },
                    {
                        id: 'e3',
                        name: 'Apertura en Banco Inclinado',
                        sets: 4,
                        reps: 12,
                        rest: 60,
                        video: 'https://www.youtube.com/results?search_query=apertura+banco+inclinado',
                        tips: 'No bajes demasiado para evitar lesiones en el hombro.'
                    },
                    {
                        id: 'e4',
                        name: 'Pullover',
                        sets: 4,
                        reps: 12,
                        rest: 60,
                        video: 'https://www.youtube.com/results?search_query=pullover+gym',
                        tips: 'Estira bien el pecho en la fase excéntrica.'
                    }
                ]
            },
            day2: {
                name: 'DÍA 2 - PIERNAS',
                emoji: '🦵',
                exercises: [
                    { id: 'e5', name: 'Extensión de Piernas', sets: 5, reps: 12, rest: 90, warmup: true, video: 'https://x.com/DSecretsOfLife/status/1972513225175437469', tips: 'Primera serie es calentamiento con peso ligero.' },
                    { id: 'e6', name: 'Prensa', sets: 4, reps: 12, rest: 90, video: 'https://www.youtube.com/results?search_query=prensa+piernas', tips: 'No bloquees las rodillas completamente en la extensión.' },
                    { id: 'e7', name: 'Sentadillas', sets: 4, reps: 12, rest: 90, video: 'https://www.youtube.com/results?search_query=sentadillas+técnica', tips: 'Baja hasta que los muslos estén paralelos al suelo.' },
                    { id: 'e8', name: 'Hip Thrust', sets: 4, reps: 12, rest: 90, video: 'https://www.youtube.com/results?search_query=hip+thrust', tips: 'Aprieta los glúteos en la parte superior del movimiento.' },
                    { id: 'e9', name: 'Femoral Tumbado', sets: 5, reps: 12, rest: 90, video: 'https://www.youtube.com/results?search_query=femoral+tumbado', tips: 'Controla el movimiento en ambas fases.' },
                    { id: 'e10', name: 'Aductor', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=aductor+máquina', tips: 'Movimiento controlado, no uses impulso.' },
                    { id: 'e11', name: 'Abductores', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=abductores+máquina', tips: 'Mantén la espalda recta durante el ejercicio.' }
                ]
            },
            day3: {
                name: 'DÍA 3 - ESPALDA',
                emoji: '💪',
                exercises: [
                    { id: 'e12', name: 'Jalón al Pecho Agarre Ancho', sets: 4, reps: 12, rest: 60, warmup: true, video: 'https://www.youtube.com/results?search_query=jalón+pecho+agarre+ancho', tips: 'Primera serie es calentamiento. Tira con los codos, no con las manos.' },
                    { id: 'e13', name: 'Remo Bajo en Polea', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=remo+bajo+polea', tips: 'Mantén la espalda recta y aprieta las escápulas al final.' },
                    { id: 'e14', name: 'Remo en Banco con Mancuernas', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=remo+banco+mancuernas', tips: 'El codo debe subir más alto que la espalda.' },
                    { id: 'e15', name: 'Pullover en Polea', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=pullover+polea+espalda', tips: 'Mantén los brazos ligeramente flexionados.' }
                ]
            },
            day4: {
                name: 'DÍA 4 - BÍCEPS Y HOMBRO',
                emoji: '💪',
                exercises: [
                    { id: 'e16', name: 'La Vuelta al Mundo', sets: 4, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=vuelta+al+mundo+hombros', tips: 'Movimiento circular completo y controlado.' },
                    { id: 'e17', name: 'Elevaciones Laterales', sets: 3, reps: 15, rest: 60, video: 'https://www.youtube.com/results?search_query=elevaciones+laterales', tips: 'No subas más arriba de los hombros.' },
                    { id: 'e18', name: 'Elevaciones Frontales', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=elevaciones+frontales', tips: 'Mantén el core activado para evitar balanceo.' },
                    { id: 'e19', name: 'Press de Hombro en Máquina', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=press+hombro+máquina', tips: 'Empuja hacia arriba sin bloquear los codos.' },
                    { id: 'e20', name: 'Pájaro Máquina Peck Deck', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=pájaro+máquina', tips: 'Aprieta las escápulas al final del movimiento.' },
                    { id: 'e21', name: 'Jalón al Mentón', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=jalón+mentón', tips: 'Los codos deben ir más altos que las manos.' }
                ]
            },
            day5: {
                name: 'DÍA 5 - BÍCEPS Y TRÍCEPS',
                emoji: '💪',
                exercises: [
                    { id: 'e22', name: 'Curl de Bíceps con Mancuerna', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=curl+bíceps+mancuerna', tips: 'No balancees el cuerpo, solo mueve el antebrazo.' },
                    { id: 'e23', name: 'Curl de Bícep en Polea', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=curl+bíceps+polea', tips: 'Mantén los codos pegados al cuerpo.' },
                    { id: 'e24', name: 'Martillo', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=curl+martillo', tips: 'Agarre neutral, como si sostuvieras un martillo.' },
                    { id: 'e25', name: 'Tríceps con Cuerda en Polea', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=tríceps+cuerda+polea', tips: 'Separa la cuerda al final del movimiento.' },
                    { id: 'e26', name: 'Trasnuca con Mancuerna', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=trasnuca+mancuerna+tríceps', tips: 'Mantén el codo apuntando hacia arriba.' },
                    { id: 'e27', name: 'Tríceps con Barra Z en Polea', sets: 3, reps: 12, rest: 60, video: 'https://www.youtube.com/results?search_query=tríceps+barra+z', tips: 'Codos pegados al cuerpo durante todo el movimiento.' }
                ]
            }
        };

        // ============================================
        // 2. STATE MANAGEMENT
        // ============================================

        let currentDay = 'day1';
        let currentExerciseId = null;
        let currentExerciseIndex = 0;
        let currentSetNumber = 1;
        let workoutStartTime = null;
        let timerInterval = null;
        let workoutData = {};

        // Load data from localStorage
        function loadData() {
            const saved = localStorage.getItem('gymflow-data');
            if (saved) {
                workoutData = JSON.parse(saved);
            }
        }

        // Auto-save (como behavioral-activation)
        function autoSave() {
            localStorage.setItem('gymflow-data', JSON.stringify(workoutData));
        }

        // ============================================
        // 3. INITIALIZATION
        // ============================================

        function init() {
            loadData();
            updateCurrentDate();
            renderDaySelector();
            loadWorkoutView();
            loadExerciseNotes();
        }

        function updateCurrentDate() {
            const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            const now = new Date();
            const dateStr = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
            document.getElementById('currentDate').textContent = dateStr;
        }

        // ============================================
        // 4. DAY SELECTOR
        // ============================================

        function renderDaySelector() {
            const container = document.getElementById('daySelector');
            const days = ['day1', 'day2', 'day3', 'day4', 'day5'];

            container.innerHTML = days.map(day => {
                const dayData = ROUTINE[day];
                const dayNum = day.replace('day', '');
                return `
                    <button 
                        class="day-btn ${day === currentDay ? 'active' : ''}"
                        onclick="changeDay('${day}')"
                    >
                        <span class="emoji">${dayData.emoji}</span>
                        Día ${dayNum}
                    </button>
                `;
            }).join('');
        }

        function changeDay(day) {
            currentDay = day;
            renderDaySelector();
            loadWorkoutView();
        }

        // ============================================
        // 5. WORKOUT VIEW
        // ============================================

        function loadWorkoutView() {
            const dayData = ROUTINE[currentDay];
            const todayKey = getTodayKey();
            const todayData = workoutData[todayKey] || { day: currentDay, exercises: {} };

            document.getElementById('workoutTitle').textContent = dayData.name;

            const totalSets = dayData.exercises.reduce((sum, ex) => sum + ex.sets, 0);
            document.getElementById('workoutSubtitle').textContent =
                `${dayData.exercises.length} ejercicios • ${totalSets} series totales`;

            const exerciseListHtml = dayData.exercises.map((exercise, index) => {
                const exerciseData = todayData.exercises[exercise.id] || { sets: [] };
                const completedSets = exerciseData.sets.length;
                const isCompleted = completedSets >= exercise.sets;
                const isActive = currentExerciseId === exercise.id;

                let status = '⚪';
                if (isCompleted) status = '✅';
                else if (isActive) status = '▶️';

                let lastWorkout = '';
                if (completedSets > 0) {
                    const lastSet = exerciseData.sets[completedSets - 1];
                    lastWorkout = `<div class="exercise-last">Última: ${lastSet.weight}kg × ${lastSet.reps} reps</div>`;
                }

                return `
                    <div class="exercise-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}" 
                         onclick="startExercise('${exercise.id}', ${index})">
                        <div class="exercise-status">${status}</div>
                        <div class="exercise-info">
                            <div class="exercise-name">${exercise.name}</div>
                            <div class="exercise-details">
                                ${completedSets}/${exercise.sets} series • ${exercise.reps} reps
                                ${exercise.warmup ? ' • 🔥 Calentamiento' : ''}
                            </div>
                            ${lastWorkout}
                        </div>
                    </div>
                `;
            }).join('');

            document.getElementById('exerciseList').innerHTML = exerciseListHtml;

            // Show/hide views
            document.getElementById('workoutView').classList.remove('hidden');
            document.getElementById('exerciseView').classList.add('hidden');
            document.getElementById('summaryView').classList.remove('active');
        }

        // ============================================
        // 6. EXERCISE VIEW
        // ============================================

        function startExercise(exerciseId, index) {
            currentExerciseId = exerciseId;
            currentExerciseIndex = index;

            const dayData = ROUTINE[currentDay];
            const exercise = dayData.exercises.find(ex => ex.id === exerciseId);
            const todayKey = getTodayKey();
            const todayData = workoutData[todayKey] || { day: currentDay, exercises: {} };
            const exerciseData = todayData.exercises[exerciseId] || { sets: [] };

            currentSetNumber = exerciseData.sets.length + 1;

            if (currentSetNumber > exercise.sets) {
                // Exercise already completed, but allow viewing
                currentSetNumber = exercise.sets;
            }

            // Update UI
            document.getElementById('exerciseName').textContent = exercise.name;
            document.getElementById('exerciseProgress').textContent =
                `Ejercicio ${index + 1} de ${dayData.exercises.length}`;
            document.getElementById('exerciseTips').textContent = exercise.tips;
            document.getElementById('setNumber').textContent =
                `SERIE ${currentSetNumber} de ${exercise.sets}`;

            // Render video section
            renderVideoSection(exercise.video);

            // Show last workout reference
            const lastWorkoutEl = document.getElementById('lastWorkout');
            const lastWorkoutData = getLastWorkoutForExercise(exerciseId);
            if (lastWorkoutData) {
                lastWorkoutEl.classList.remove('hidden');
                const daysAgo = Math.floor((Date.now() - new Date(lastWorkoutData.date).getTime()) / (1000 * 60 * 60 * 24));
                const avgWeight = Math.round(lastWorkoutData.sets.reduce((sum, s) => sum + s.weight, 0) / lastWorkoutData.sets.length);
                const avgReps = Math.round(lastWorkoutData.sets.reduce((sum, s) => sum + s.reps, 0) / lastWorkoutData.sets.length);
                document.getElementById('lastWorkoutData').textContent =
                    `${avgWeight}kg × ${avgReps} reps (hace ${daysAgo} días)`;
            } else {
                lastWorkoutEl.classList.add('hidden');
            }

            // Auto-fill weight and reps inputs
            if (exerciseData.sets.length > 0) {
                // Use last set from TODAY
                const lastSet = exerciseData.sets[exerciseData.sets.length - 1];
                document.getElementById('weightInput').value = lastSet.weight;
                document.getElementById('repsInput').value = lastSet.reps;
            } else if (lastWorkoutData) {
                // Use average from LAST WORKOUT
                const avgWeight = Math.round(lastWorkoutData.sets.reduce((sum, s) => sum + s.weight, 0) / lastWorkoutData.sets.length);
                const avgReps = Math.round(lastWorkoutData.sets.reduce((sum, s) => sum + s.reps, 0) / lastWorkoutData.sets.length);
                document.getElementById('weightInput').value = avgWeight;
                document.getElementById('repsInput').value = avgReps;
            } else {
                // No previous data - use defaults
                document.getElementById('weightInput').value = '';
                document.getElementById('repsInput').value = exercise.reps;
            }

            // Render completed sets
            renderCompletedSets(exerciseData.sets);

            // Show/hide views
            document.getElementById('workoutView').classList.add('hidden');
            document.getElementById('exerciseView').classList.remove('hidden');
            document.getElementById('exerciseView').classList.add('active');

            // Hide rest timer
            document.getElementById('restTimerInline').classList.remove('active');

            // Start workout timer if first exercise
            if (!workoutStartTime) {
                workoutStartTime = Date.now();
            }

            // Render exercise note
            renderExerciseNote(exerciseId);
        }

        function renderCompletedSets(sets) {
            const container = document.getElementById('completedSetsList');
            if (sets.length === 0) {
                container.innerHTML = '<p style="color: var(--gray-600); font-size: 14px;">No hay series completadas aún</p>';
                return;
            }

            let html = sets.map((set, index) => `
                <div class="completed-set">
                    <span class="set-label">Serie ${index + 1}</span>
                    <span class="set-data">${set.weight}kg × ${set.reps} reps</span>
                    <span class="set-time">${new Date(set.timestamp).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            `).join('');

            // Add delete last set button
            html += '<button class="delete-last-set-btn" onclick="deleteLastSet()">🗑️ Borrar última serie</button>';

            container.innerHTML = html;
        }

        function renderVideoSection(videoUrl) {
            const container = document.getElementById('videoSection');

            // Detect video type
            const isTwitter = videoUrl.includes('twitter.com') || videoUrl.includes('x.com');
            const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

            if (isTwitter) {
                // Extract tweet ID from URL
                const tweetId = extractTweetId(videoUrl);
                if (tweetId) {
                    container.innerHTML = `
                        <div class="video-embed-container" id="twitterEmbed-${tweetId}">
                            <div style="color: var(--gray-600); font-size: 14px;">Cargando video...</div>
                        </div>
                        <a class="video-link twitter" href="${videoUrl}" target="_blank">🐦 Ver en X/Twitter</a>
                    `;

                    // Load Twitter embed
                    loadTwitterEmbed(tweetId);
                } else {
                    // Fallback if can't extract ID
                    container.innerHTML = `
                        <div class="placeholder">🎥</div>
                        <a class="video-link twitter" href="${videoUrl}" target="_blank">🐦 Ver en X/Twitter</a>
                    `;
                }
            } else if (isYouTube) {
                // YouTube - show link (can be upgraded to iframe embed later)
                container.innerHTML = `
                    <div class="placeholder">🎥</div>
                    <a class="video-link" href="${videoUrl}" target="_blank">📺 Ver Técnica en YouTube</a>
                `;
            } else {
                // Generic video link
                container.innerHTML = `
                    <div class="placeholder">🎥</div>
                    <a class="video-link" href="${videoUrl}" target="_blank">🎥 Ver Video de Técnica</a>
                `;
            }
        }

        function extractTweetId(url) {
            // Extract tweet ID from various Twitter/X URL formats
            const patterns = [
                /status\/(\d+)/,           // https://twitter.com/user/status/123456
                /\/(\d+)(?:\?|$)/,         // https://x.com/user/status/123456?s=20
            ];

            for (const pattern of patterns) {
                const match = url.match(pattern);
                if (match && match[1]) {
                    return match[1];
                }
            }

            return null;
        }

        function loadTwitterEmbed(tweetId) {
            // Wait for Twitter SDK to load
            if (typeof twttr === 'undefined') {
                setTimeout(() => loadTwitterEmbed(tweetId), 500);
                return;
            }

            const container = document.getElementById(`twitterEmbed-${tweetId}`);
            if (!container) return;

            // Clear loading message
            container.innerHTML = '';

            // Create tweet embed
            twttr.widgets.createTweet(
                tweetId,
                container,
                {
                    theme: 'light',
                    cards: 'visible',
                    conversation: 'none',
                    align: 'center',
                    width: 550
                }
            ).then((el) => {
                if (!el) {
                    container.innerHTML = '<div style="color: var(--danger); font-size: 14px;">Error al cargar el video</div>';
                }
            });
        }

        function deleteLastSet() {
            // Show confirmation dialog
            if (!confirm('¿Seguro que quieres borrar la última serie?')) {
                return;
            }

            const todayKey = getTodayKey();
            const exerciseData = workoutData[todayKey]?.exercises[currentExerciseId];

            if (!exerciseData || exerciseData.sets.length === 0) {
                alert('⚠️ No hay series para borrar');
                return;
            }

            // Remove last set
            exerciseData.sets.pop();

            // Decrement current set number
            currentSetNumber = exerciseData.sets.length + 1;

            // Save changes
            autoSave();

            // Stop rest timer if active
            stopRestTimer();

            // Update UI
            const dayData = ROUTINE[currentDay];
            const exercise = dayData.exercises.find(ex => ex.id === currentExerciseId);
            document.getElementById('setNumber').textContent =
                `SERIE ${currentSetNumber} de ${exercise.sets}`;
            renderCompletedSets(exerciseData.sets);

            // If all sets were deleted, refresh workout view
            if (exerciseData.sets.length === 0) {
                loadWorkoutView();
            }
        }

        function completeSet() {
            const weight = parseFloat(document.getElementById('weightInput').value);
            const reps = parseInt(document.getElementById('repsInput').value);

            if (!weight || weight <= 0 || !reps || reps <= 0) {
                alert('⚠️ Por favor ingresa peso y reps válidos');
                return;
            }

            const dayData = ROUTINE[currentDay];
            const exercise = dayData.exercises.find(ex => ex.id === currentExerciseId);
            const todayKey = getTodayKey();

            // Initialize data structure if needed
            if (!workoutData[todayKey]) {
                workoutData[todayKey] = { day: currentDay, exercises: {}, date: todayKey };
            }
            if (!workoutData[todayKey].exercises[currentExerciseId]) {
                workoutData[todayKey].exercises[currentExerciseId] = { sets: [] };
            }

            // Add set
            workoutData[todayKey].exercises[currentExerciseId].sets.push({
                weight,
                reps,
                timestamp: new Date().toISOString()
            });

            autoSave();

            // Update UI
            currentSetNumber++;
            const exerciseData = workoutData[todayKey].exercises[currentExerciseId];

            if (currentSetNumber <= exercise.sets) {
                // More sets remaining
                document.getElementById('setNumber').textContent =
                    `SERIE ${currentSetNumber} de ${exercise.sets}`;
                renderCompletedSets(exerciseData.sets);

                // Start rest timer with custom rest time if available
                const customRestTimes = exerciseData.customRestTimes || [];
                const previousSetIndex = currentSetNumber - 2; // The set we just completed (0-indexed)
                const restTime = customRestTimes[previousSetIndex] || exercise.rest;
                startRestTimer(restTime);
            } else {
                // Exercise completed
                renderCompletedSets(exerciseData.sets);

                // Show completion message
                setTimeout(() => {
                    alert('✅ ¡Ejercicio completado!');
                    backToWorkout();
                }, 500);
            }
        }

        function backToWorkout() {
            currentExerciseId = null;
            document.getElementById('exerciseView').classList.remove('active');
            loadWorkoutView();
            stopRestTimer();
        }

        // ============================================
        // 7. REST TIMER
        // ============================================

        function startRestTimer(seconds) {
            stopRestTimer(); // Clear any existing timer

            const timerDisplay = document.getElementById('timerDisplay');
            const timerBarFill = document.getElementById('timerBarFill');
            const restTimerInline = document.getElementById('restTimerInline');

            restTimerInline.classList.add('active');

            // Use timestamps instead of counter for background-safe timing
            const startTime = Date.now();
            const endTime = startTime + (seconds * 1000);
            const totalDuration = seconds * 1000;

            function updateTimer() {
                const now = Date.now();
                const remainingMs = Math.max(0, endTime - now);
                const remaining = Math.ceil(remainingMs / 1000);

                const mins = Math.floor(remaining / 60);
                const secs = remaining % 60;
                timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

                const elapsed = now - startTime;
                const percentage = Math.min(100, (elapsed / totalDuration) * 100);
                timerBarFill.style.width = percentage + '%';

                if (remainingMs <= 0) {
                    stopRestTimer();
                    restTimerInline.classList.remove('active');

                    // Improved Vibration (more distinctive pattern)
                    try {
                        if ('vibrate' in navigator) {
                            navigator.vibrate([400, 200, 400, 200, 600]);
                        }
                    } catch (e) {
                        console.warn('Vibration failed:', e);
                    }

                    // Visual Flash (essential for iOS - no vibration support)
                    try {
                        const flash = document.createElement('div');
                        flash.className = 'timer-flash-overlay';
                        document.body.appendChild(flash);
                        setTimeout(() => flash.remove(), 1000);
                    } catch (e) {
                        console.warn('Visual flash failed:', e);
                    }

                    // Audio Beep (800 Hz tone for 0.5s)
                    try {
                        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();

                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);

                        oscillator.frequency.value = 800;
                        oscillator.type = 'sine';

                        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.5);
                    } catch (e) {
                        console.warn('Audio beep failed:', e);
                    }

                    // Notification
                    if ('Notification' in window && Notification.permission === 'granted') {
                        new Notification('⏰ Descanso terminado', {
                            body: '¡Listo para la siguiente serie!',
                            icon: '/gymrat/icons/icon-192.png'
                        });
                    }
                }

            }

            updateTimer();
            timerInterval = setInterval(updateTimer, 1000);
        }


        function stopRestTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            document.getElementById('restTimerInline').classList.remove('active');
        }

        function skipRest() {
            stopRestTimer();
        }

        // Request notification permission
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }

        // ============================================
        // 7.5. CUSTOM REST TIME CONFIGURATION
        // ============================================

        function showRestTimeConfig() {
            const dayData = ROUTINE[currentDay];
            const exercise = dayData.exercises.find(ex => ex.id === currentExerciseId);

            if (!exercise) return;

            const todayKey = getTodayKey();
            const todayData = workoutData[todayKey] || { day: currentDay, exercises: {} };
            const exerciseData = todayData.exercises[currentExerciseId] || { sets: [] };

            // Get existing custom rest times or use default
            const customRestTimes = exerciseData.customRestTimes || [];

            // Determine default rest time based on exercise
            const defaultRest = exercise.rest;

            // Generate modal content
            let modalContent = '<p style="margin-bottom: 16px; color: var(--gray-600); font-size: 14px;">Configura el tiempo de descanso para cada serie (en segundos).</p>';

            for (let i = 0; i < exercise.sets; i++) {
                const restTime = customRestTimes[i] || defaultRest;
                modalContent += `
                    <div class="rest-config-item">
                        <span class="rest-config-label">Serie ${i + 1}</span>
                        <input
                            type="number"
                            class="rest-config-input"
                            id="restTime-${i}"
                            value="${restTime}"
                            min="0"
                            max="600"
                            step="5"
                        />
                        <span style="margin-left: 8px; color: var(--gray-600); font-size: 14px;">seg</span>
                    </div>
                `;
            }

            document.getElementById('restTimeModalBody').innerHTML = modalContent;
            document.getElementById('restTimeModal').classList.add('active');
        }

        function closeRestTimeModal() {
            document.getElementById('restTimeModal').classList.remove('active');
        }

        function saveRestTimeConfig() {
            const dayData = ROUTINE[currentDay];
            const exercise = dayData.exercises.find(ex => ex.id === currentExerciseId);

            if (!exercise) return;

            const todayKey = getTodayKey();

            // Initialize data structure if needed
            if (!workoutData[todayKey]) {
                workoutData[todayKey] = { day: currentDay, exercises: {}, date: todayKey };
            }
            if (!workoutData[todayKey].exercises[currentExerciseId]) {
                workoutData[todayKey].exercises[currentExerciseId] = { sets: [] };
            }

            // Collect custom rest times
            const customRestTimes = [];
            for (let i = 0; i < exercise.sets; i++) {
                const input = document.getElementById(`restTime-${i}`);
                const restTime = parseInt(input.value) || exercise.rest;
                customRestTimes.push(restTime);
            }

            // Save to workout data
            workoutData[todayKey].exercises[currentExerciseId].customRestTimes = customRestTimes;
            autoSave();

            // Close modal
            closeRestTimeModal();

            // Show confirmation
            alert('✅ Tiempos de descanso configurados correctamente');
        }

        // ============================================
        // 8. WORKOUT SUMMARY
        // ============================================

        function finishWorkout() {
            const todayKey = getTodayKey();
            const todayData = workoutData[todayKey];

            if (!todayData || Object.keys(todayData.exercises).length === 0) {
                alert('⚠️ No has completado ningún ejercicio aún');
                return;
            }

            // Calculate stats
            let totalVolume = 0;
            let totalSets = 0;

            Object.values(todayData.exercises).forEach(exerciseData => {
                exerciseData.sets.forEach(set => {
                    totalVolume += set.weight * set.reps;
                    totalSets++;
                });
            });

            const durationMinutes = workoutStartTime ?
                Math.round((Date.now() - workoutStartTime) / (1000 * 60)) : 0;

            // Update UI
            const dayData = ROUTINE[currentDay];
            document.getElementById('summaryDay').textContent = dayData.name;
            document.getElementById('summaryVolume').textContent = totalVolume.toLocaleString('es-ES') + ' kg';
            document.getElementById('summarySets').textContent = totalSets + ' series';
            document.getElementById('summaryDuration').textContent = durationMinutes + ' min';

            // Show summary view
            document.getElementById('workoutView').classList.add('hidden');
            document.getElementById('exerciseView').classList.remove('active');
            document.getElementById('summaryView').classList.add('active');

            // Reset workout start time
            workoutStartTime = null;
        }

        function backToHome() {
            document.getElementById('summaryView').classList.remove('active');
            loadWorkoutView();
        }

        // ============================================
        // 9. EXERCISE NOTES
        // ============================================

        let exerciseNotes = {};
        let saveNoteTimeout = null;

        // Load exercise notes from localStorage
        function loadExerciseNotes() {
            const saved = localStorage.getItem('gymflow-exercise-notes');
            if (saved) {
                try {
                    exerciseNotes = JSON.parse(saved);
                } catch (e) {
                    console.error('Error loading exercise notes:', e);
                    exerciseNotes = {};
                }
            }
        }

        // Save exercise notes to localStorage
        function saveExerciseNotes() {
            localStorage.setItem('gymflow-exercise-notes', JSON.stringify(exerciseNotes));
        }

        // Render exercise note section
        function renderExerciseNote(exerciseId) {
            const container = document.getElementById('exerciseNotes');
            const note = exerciseNotes[exerciseId] || '';
            const hasNote = note.trim().length > 0;

            if (hasNote) {
                // Show existing note with edit button
                container.innerHTML = `
                    <div class="exercise-note-box">
                        <div class="exercise-note-header">
                            <h3>📝 Mis Notas</h3>
                            <button class="exercise-note-edit-btn" onclick="toggleEditNote('${exerciseId}')">✏️ Editar</button>
                        </div>
                        <div class="exercise-note-text" id="noteText-${exerciseId}">${note}</div>
                        <textarea
                            class="exercise-note-textarea hidden"
                            id="noteTextarea-${exerciseId}"
                            placeholder="Ej: Sentí buena activación | Próxima semana 25kg | Ajuste 3 funciona mejor"
                            maxlength="500"
                            oninput="onNoteInput('${exerciseId}')"
                        >${note}</textarea>
                    </div>
                `;
            } else {
                // Show add note button
                container.innerHTML = `
                    <button class="exercise-note-add-btn" onclick="showNoteEditor('${exerciseId}')">
                        + Añadir nota
                    </button>
                `;
            }
        }

        // Toggle edit mode for note
        function toggleEditNote(exerciseId) {
            const textDiv = document.getElementById(`noteText-${exerciseId}`);
            const textarea = document.getElementById(`noteTextarea-${exerciseId}`);
            const editBtn = event.target;

            if (textarea.classList.contains('hidden')) {
                // Enter edit mode
                textDiv.classList.add('hidden');
                textarea.classList.remove('hidden');
                textarea.focus();
                editBtn.textContent = '✓ Guardar';
            } else {
                // Exit edit mode
                textDiv.classList.remove('hidden');
                textarea.classList.add('hidden');
                editBtn.textContent = '✏️ Editar';

                // Update displayed text
                textDiv.textContent = textarea.value;
            }
        }

        // Show note editor for new note
        function showNoteEditor(exerciseId) {
            const container = document.getElementById('exerciseNotes');
            container.innerHTML = `
                <div class="exercise-note-box">
                    <div class="exercise-note-header">
                        <h3>📝 Mis Notas</h3>
                    </div>
                    <textarea
                        class="exercise-note-textarea"
                        id="noteTextarea-${exerciseId}"
                        placeholder="Ej: Sentí buena activación | Próxima semana 25kg | Ajuste 3 funciona mejor"
                        maxlength="500"
                        oninput="onNoteInput('${exerciseId}')"
                        autofocus
                    ></textarea>
                </div>
            `;

            // Focus textarea
            setTimeout(() => {
                document.getElementById(`noteTextarea-${exerciseId}`).focus();
            }, 100);
        }

        // Handle note input with debounced save
        function onNoteInput(exerciseId) {
            const textarea = document.getElementById(`noteTextarea-${exerciseId}`);
            const noteText = textarea.value.trim();

            // Clear existing timeout
            if (saveNoteTimeout) {
                clearTimeout(saveNoteTimeout);
            }

            // Save after 500ms of no typing
            saveNoteTimeout = setTimeout(() => {
                if (noteText.length > 0) {
                    exerciseNotes[exerciseId] = noteText;
                } else {
                    delete exerciseNotes[exerciseId];
                }
                saveExerciseNotes();
            }, 500);
        }

        // ============================================
        // 10. UTILITY FUNCTIONS
        // ============================================

        function getTodayKey() {
            const now = new Date();
            return now.toISOString().split('T')[0];
        }

        function getLastWorkoutForExercise(exerciseId) {
            const todayKey = getTodayKey();
            const sortedDates = Object.keys(workoutData)
                .filter(date => date !== todayKey)
                .sort()
                .reverse();

            for (const date of sortedDates) {
                const workout = workoutData[date];
                if (workout.exercises[exerciseId] && workout.exercises[exerciseId].sets.length > 0) {
                    return {
                        date,
                        sets: workout.exercises[exerciseId].sets
                    };
                }
            }

            return null;
        }

        // ============================================
        // 11. BACKUP / RESTORE
        // ============================================

        function exportBackup() {
            const data = {
                workoutData: workoutData,
                exerciseNotes: exerciseNotes,
                exportDate: new Date().toISOString(),
                version: '1.0'
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `gymflow-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);

            alert('✅ Backup exportado correctamente a tu carpeta de Descargas');
        }

        function importBackup() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const data = JSON.parse(event.target.result);

                        // Validate data structure
                        if (!data.workoutData && !data.exerciseNotes) {
                            alert('❌ Archivo de backup no válido');
                            return;
                        }

                        // Confirm before overwriting
                        const confirm = window.confirm(
                            '⚠️ ¿Estás seguro de importar este backup?\n\n' +
                            'Esto SOBRESCRIBIRÁ todos tus datos actuales.\n\n' +
                            'Si tienes datos importantes, exporta un backup primero.'
                        );

                        if (!confirm) return;

                        // Import data
                        if (data.workoutData) {
                            workoutData = data.workoutData;
                            localStorage.setItem('gymflow-data', JSON.stringify(workoutData));
                        }

                        if (data.exerciseNotes) {
                            exerciseNotes = data.exerciseNotes;
                            localStorage.setItem('gymflow-exercise-notes', JSON.stringify(exerciseNotes));
                        }

                        alert('✅ Backup importado correctamente. La página se recargará.');

                        // Reload page to reflect changes
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);

                    } catch (error) {
                        console.error('Error importing backup:', error);
                        alert('❌ Error al importar el backup. Verifica que el archivo sea válido.');
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        // ============================================
        // 12. INIT APP
        // ============================================

        init();

        // Prevent accidental page refresh
        window.addEventListener('beforeunload', (e) => {
            if (currentExerciseId) {
                e.preventDefault();
                e.returnValue = 'Tienes un entreno en progreso. ¿Seguro que quieres salir?';
            }
        });

        console.log('🚀 GymFlow iniciado correctamente');
