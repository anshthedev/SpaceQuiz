const quizData = [
    {
      question: "Who was the first person on the Moon?",
      options: ["Sally K. Ride", "Neil Armstrong", "Alan B. Shepard", "Guion S. Bluford"],
      answer: "Neil Armstrong"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
      {
      question: "What planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Neptune"],
      answer: "Mars"
      },
      {
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Saturn"
      },
      {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      answer: "Mercury"
      },
      {
      question: "Which planet is known for its rings?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Saturn"
      },
      {
      question: "What is the brightest planet in the night sky?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Venus"
      },
      {
      question: "What celestial body orbits the Earth?",
      options: ["The Moon", "Mars", "Venus", "Jupiter"],
      answer: "The Moon"
      },
      {
      question: "Which planet is known as the Morning Star or the Evening Star?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      answer: "Venus"
      },
      {
      question: "Which planet has a surface temperature hot enough to melt lead?",
      options: ["Venus", "Mercury", "Mars", "Jupiter"],
      answer: "Venus"
      },
      {
      question: "What is the largest moon in our solar system?",
      options: ["Ganymede", "Titan", "Callisto", "Io"],
      answer: "Ganymede"
      },
      {
      question: "Which planet has the Great Red Spot, a giant storm?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter"
      },
      {
      question: "What type of galaxy is the Milky Way?",
      options: ["Spiral", "Elliptical", "Irregular", "Lenticular"],
      answer: "Spiral"
      },
      {
      question: "What is the closest star to Earth?",
      options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
      answer: "Proxima Centauri"
      },
      {
      question: "What is the term for a system where two stars orbit each other?",
      options: ["Binary star", "Neutron star", "Dwarf star", "Giant star"],
      answer: "Binary star"
      },
      {
      question: "What is the main element that fuels stars?",
      options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
      answer: "Hydrogen"
      },
      {
      question: "What do stars form from?",
      options: ["Nebulae", "Black holes", "Comets", "Asteroids"],
      answer: "Nebulae"
      },
      {
      question: "What is the term for a large group of stars, gas, and dust held together by gravity?",
      options: ["Galaxy", "Universe", "Solar System", "Nebula"],
      answer: "Galaxy"
      },
      {
      question: "What do you call the remains of a star that has exploded?",
      options: ["Supernova", "White dwarf", "Neutron star", "Black hole"],
      answer: "Supernova"
      },
      {
      question: "What term describes the bending of light due to gravity?",
      options: ["Gravitational lensing", "Redshift", "Blueshift", "Diffraction"],
      answer: "Gravitational lensing"
      },
      {
      question: "What is the point of no return around a black hole called?",
      options: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"],
      answer: "Event horizon"
      },
      {
      question: "Which celestial phenomenon occurs when the Moon passes directly between the Sun and Earth, blocking the Sun's light?",
      options: ["Solar eclipse", "Lunar eclipse", "Transit", "Occultation"],
      answer: "Solar eclipse"
      },
      {
      question: "What type of celestial object is Pluto classified as?",
      options: ["Planet", "Dwarf planet", "Comet", "Asteroid"],
      answer: "Dwarf planet"
      },
      {
      question: "What phenomenon describes the universe's expansion at an accelerating rate?",
      options: ["Big Bang", "Black hole", "Dark energy", "Redshift"],
      answer: "Dark energy"
      },
      {
      question: "What is the name of the first artificial satellite launched into space?",
      options: ["Sputnik", "Explorer", "Voyager", "Hubble"],
      answer: "Sputnik"
      },
      {
      question: "What is the term for the boundary around a black hole beyond which no light can escape?",
      options: ["Event horizon", "Photon sphere", "Accretion disk", "Ergosphere"],
      answer: "Event horizon"
      },
      {
      question: "Which of these elements is most abundant in the universe?",
      options: ["Hydrogen", "Oxygen", "Carbon", "Iron"],
      answer: "Hydrogen"
      },
      {
      question: "What do astronomers call a group of stars forming a recognizable pattern?",
      options: ["Constellation", "Galaxy", "Cluster", "Nebula"],
      answer: "Constellation"
      },
      {
      question: "Which space telescope was launched by NASA to observe distant galaxies in new detail?",
      options: ["Hubble Space Telescope", "James Webb Space Telescope", "Chandra X-ray Observatory", "Spitzer Space Telescope"],
      answer: "James Webb Space Telescope"
      },
      {
      question: "What is the most common type of star found in the Milky Way?",
      options: ["Red giant", "White dwarf", "Neutron star", "Red dwarf"],
      answer: "Red dwarf"
      },
      {
      question: "Which planet is famous for its highly tilted rotational axis?",
      options: ["Jupiter", "Mars", "Uranus", "Mercury"],
      answer: "Uranus"
      },
      {
      question: "What is the name of Mars' largest moon?",
      options: ["Phobos", "Deimos", "Europa", "Titan"],
      answer: "Phobos"
      },
      {
      question: "What causes an aurora to occur in the Earth's atmosphere?",
      options: ["Solar winds", "Lunar pull", "Magnetic fields", "Cosmic rays"],
      answer: "Solar winds"
      },
      {
      question: "Which planet in our solar system rotates on its side relative to its orbit around the Sun?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Uranus"
      },
      {
      question: "What is the term for a small body of matter from outer space that enters the Earth's atmosphere, becoming incandescent as a result of friction?",
      options: ["Asteroid", "Meteoroid", "Comet", "Meteor"],
      answer: "Meteor"
      },
      {
      question: "What is the coldest planet in our solar system?",
      options: ["Neptune", "Uranus", "Jupiter", "Mars"],
      answer: "Neptune"
      },
      {
      question: "What is the largest type of star in the universe?",
      options: ["Red giant", "Supergiant", "White dwarf", "Neutron star"],
      answer: "Supergiant"
      },
      {
      question: "What type of astronomical object is a 'pulsar'?",
      options: ["A rapidly rotating neutron star", "A collapsing white dwarf", "A medium-size black hole", "A large asteroid"],
      answer: "A rapidly rotating neutron star"
      },
      {
      question: "Which element was first discovered on the sun before it was found on Earth?",
      options: ["Helium", "Hydrogen", "Neon", "Nitrogen"],
      answer: "Helium"
      },
      {
      question: "What are the small rocky bodies that orbit the Sun primarily found between Mars and Jupiter called?",
      options: ["Comets", "Asteroids", "Meteoroids", "Moons"],
      answer: "Asteroids"
      },
      {
      question: "What is the term used for the alignment of three celestial bodies in a straight line?",
      options: ["Syzygy", "Conjunction", "Opposition", "Perihelion"],
      answer: "Syzygy"
      },
      {
      question: "Which planet in our solar system has the most extensive and complex ring system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Saturn"
      },
      {
      question: "What phenomenon occurs when the shadow of one celestial body falls on another?",
      options: ["Eclipse", "Equinox", "Solstice", "Conjunction"],
      answer: "Eclipse"
      },
      {
      question: "What is the term for the point in the orbit of a planet, asteroid, or comet at which it is closest to the sun?",
      options: ["Aphelion", "Perihelion", "Apogee", "Perigee"],
      answer: "Perihelion"
      },
      {
      question: "What kind of celestial object is the Sun?",
      options: ["Planet", "Comet", "Star", "Moon"],
      answer: "Star"
      },
      {
      question: "Which planet is closest in size to Earth?",
      options: ["Mars", "Venus", "Mercury", "Neptune"],
      answer: "Venus"
      },
      {
        question: "What is the name of the boundary that defines the edge of our solar system where the Sun's influence ends?",
        options: ["Kuiper Belt", "Oort Cloud", "Heliopause", "Asteroid Belt"],
        answer: "Heliopause"
        },
        { 
          question: "What term describes the time it takes for a planet to complete one rotation on its axis?",
          options: ["Orbital period", "Solar day", "Sidereal day", "Equinox"],
          answer: "Sidereal day"
        },
        {
          question: "What phenomenon occurs when the shadow of one celestial body falls on another?",
          options: ["Eclipse", "Equinox", "Solstice", "Conjunction"],
          answer: "Eclipse"
          },
          {
            question: "What are the small rocky bodies that orbit the Sun primarily found between Mars and Jupiter called?",
            options: ["Comets", "Asteroids", "Meteoroids", "Moons"],
            answer: "Asteroids"},];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  let otherQuestion = 10;
  
  function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
          const button = document.createElement("button");
          button.innerText = option;
          optionsElement.appendChild(button);
          button.addEventListener("click", selectAnswer);
      });
  }
  
  function selectAnswer(e) {
      const selectedButton = e.target;
      const answer = quizData[currentQuestion].answer;
      if (selectedButton.innerText === answer) {
          score++;
      }
      currentQuestion++;
      if (currentQuestion < otherQuestion) {
          showQuestion();
      } else {
          showResult();
      }
  }
  
  function showResult() {
      quiz.innerHTML = `
          <h1>Quiz Completed!</h1>
          <p>Your score: ${score}/10</p>
          <button onclick=restartQuiz()>Restart</button>`;
  }
  
  function restartQuiz() {
    otherQuestion = 10;
    currentQuestion = 0;
    score = 0;
    showQuestion();
}


  
  showQuestion();