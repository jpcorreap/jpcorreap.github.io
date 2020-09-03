function LangUtils() {
  let langUtils = {};

  langUtils.english = {
    description:
      "Double Degree MSc in Engineering & Systems and Computing Engineering student. Technology enthusiast, interested in understanding how it can improve everything: from everyday activities to the most complex projects. Problem-solving knowledge. Programming skills with languages such as Java and Python as well basics in graphic design and video edition by using Adobe's Suit (mainly Photoshop and After Effects).",
    buttons: ["Experience", "Education", "Download CV", "Contact"],
    educationTitle: "Education",
    education: [
      {
        title: "Master of Science in Engineering",
        institution: "École Centrale de Nantes",
        city: "Nantes, France",
        date: "September 2020 - Present",
      },
      {
        title: "Systems and Computing Engineering",
        institution: "Universidad de los Andes",
        city: "Bogotá, Colombia",
        date: "January 2017 - Present",
      },
      {
        title: "Professional Exchange",
        institution: "Tecnológico de Monterrey",
        city: "Pachuca de Soto, México",
        date: "August - December 2019",
      },
      {
        title: "Highschool",
        institution: "Universidad Pontificia Bolivariana",
        city: "Medellín, Colombia",
        date: "December 2016",
      },
    ],
    work_experienceTitle: "Work experience",
    work_experience: [
      {
        company: "Universidad de los Andes",
        jobs: [
          {
            title: "Fullstack Web Development teaching assistant",
            date: "August 2020 - Present",
            description:
              "Responsible of supporting +30 students in a Fullstack Web Development course by implementing MERN stack.",
          },
          {
            title: "Moodle LMS developer assistant",
            date: "May 2020 - September 2020",
            description:
              "Responsible of create, upload and modify content to Moodle LMS platform for German A1 and A2 courses by using HTML and CSS.",
          },
          {
            title: "Programming in Python teaching assistant.",
            date: "January 2020 - May 2020",
            description:
              "Responsible of support and grade +24 students in an introduction to programming course by using Python programming language.",
          },
        ],
      },
      {
        company: "Tecnológico de Monterrey",
        jobs: [
          {
            title: "Asistente operativo para docentes",
            date: "August 2019 - December 2019",
            description:
              "Responsible of supporting professors in administrative tasks, from creation of essays to grade Programming in Python students, within the scolarship Leaders of Tomorrow.",
          },
        ],
      },
      {
        company: "Universidad de los Andes",
        jobs: [
          {
            title: "Moodle LMS developer assistant",
            date: "Juny 2019 - July 2019",
            description:
              "Responsible of create, upload and modify content to Moodle LMS platform for German A1 and A2 courses by using HTML and CSS.",
          },

          {
            title: "Algorithmic and OOP in Java teaching assistant",
            date: "August 2017 - May 2019",
            description:
              "Responsible of support and grade +24 students in an Object-oriented programming course by using Java language.",
          },
        ],
      },
    ],
    skills: [
      { skill: "Java", level: 70 },
      { skill: "JavaScript", level: 80 },
      { skill: "Adobe Photoshop", level: 60 },
      { skill: "Python", level: 70 },
      { skill: "Adobe After Effects", level: 50 },
      { skill: "Adobe Premiere Pro", level: 50 },
      { skill: "SQL", level: 60 },
    ],
    courses_certifications: [
      {
        name: "Big Data: adquisición y almacenamiento de datos",
        institution: "UPV",
        platform: "Coursera",
        id: "8CY4M4LQ3JUT",
        date: "jul 2020",
        link:
          "https://www.coursera.org/account/accomplishments/certificate/8CY4M4LQ3JUT",
      },
      {
        name: "Certificación Introductoria en Big Data y Ciencia de Datos",
        institution: "Buiness Data Evolution",
        date: "nov. de 2019",
        link:
          "https://www.coursera.org/account/accomplishments/certificate/8CY4M4LQ3JUT",
      },
    ],
    awards: [
      {
        name: "Líderes del Mañana",
        institution: "Tecnológico de Monterrey",
        description: "",
      },
      {
        name: "Third place enterpreneurship",
        institution: "Universidad de los Andes",
        description: "",
      },
    ],
    languages: [
      { language: "Spanish", level: "Native speaker" },
      { language: "English", level: "B1+" },
      { language: "German", level: "B1" },
      { language: "French", level: "A2" },
    ],
  };

  langUtils.espanol = {
    description:
      "Estudiante de Ingeniería de Sistemas y Computación de la Universidad de los Andes (Colombia), cursando doble titulación con Maestría en Ingeniería de la École Centrale de Nantes (Francia). Entusiasta de la tecnología, inreseado en comprender cómo esta apoya desde las actividades cotidianas hasta los más complejos proyectos. Conocimiento en solución de problemas. Habilidades de desarrollo de software con lenguajes de programación como Python y Java, así como también el desarrollo web fullstack bajo el framework MERN, como también conocimientos básicos de diseño gráfico y edición de videos usando software de la Suite de Adobe (principalmente Photoshop, After Effects y Premiere Pro).",
    education: [
      {
        title: "MSc in Engineering",
        institution: "École Centrale de Nantes",
        city: "Nantes, France",
        date: "Present",
      },
      {
        title: "Systems and Computing Engineering",
        institution: "Universidad de los Andes",
        city: "Bogota, Colombia",
        date: "January 2017 - Present",
      },
      {
        title: "Professional Exchange",
        institution: "Tecnológico de Monterrey",
        city: "Pachuca de Soto, Mexico",
        date: "August - December 2019",
      },
      {
        title: "Highschool",
        institution: "Universidad Pontificia Bolivariana",
        city: "Medellín, Colombia",
        date: "December 2016",
      },
    ],
    work_experience: [
      {
        company: "Universidad de los Andes",
        jobs: [
          {
            title: "Fullstack Web Development teaching assistant",
            date: "August 2020 - Present",
            description:
              "Responsible of support professor in a Fullstack Web Development course by implementing MERN stack.",
          },
          {
            title: "Moodle LMS developer assistant",
            date: "May 2020 - September 2020",
            description:
              "Responsible of create, upload and modify content to Moodle LMS to German A1 and A2 courses with HTML and CSS languages.",
          },
        ],
      },
      {
        company: "Tecnológico de Monterrey",
        jobs: [
          {
            title: "Asistente operativo para docentes",
            date: "August 2019 – dic. de 2019",
            description:
              "Responsable de apoyar a los docentes en diversas tareas, desde creación y revisión de ensayos hasta calificación de laboratorios de cursos de programación en Python, esto enmarcado en el servicio becario por obtener la beca Líderes del Mañana otorgada por el Tecnológico de Monterrey.",
          },
        ],
      },
      {
        company: "Universidad de los Andes",
        jobs: [
          {
            title: "Moodle LMS developer assistant",
            date: "Juny 2019 - July 2019",
            description:
              "Responsable de crear, migrar, cargar y modificar contenido en HTML, CSS y JavaScript para los cursos de Alemán 1, Alemán 2 y Anfänger 1 (principiantes) al LMS Moodle de la Universidad.",
          },
          {
            title: "Programming in Python teaching assistant.",
            date: "January 2020 - May 2020",
            description:
              "Responsable de apoyar al docente en las clases. En el curso se enseñaba el lenguaje Python. Desempeño excelente.",
          },
          {
            title: "Algorithmic and OOP in Java teaching assistant",
            date: "August 2017 - May 2019",
            description:
              "Responsable de apoyar al docente en los laboratorios prácticos y de calificar más de 18 estudiantes. En el curso se usaba el lenguaje Java. Desempeño excelente.",
          },
        ],
      },
    ],
    skills: [
      { skill: "Java", level: 70 },
      { skill: "JavaScript", level: 80 },
      { skill: "Adobe Photoshop", level: 60 },
      { skill: "Python", level: 70 },
      { skill: "Adobe After Effects", level: 50 },
      { skill: "Adobe Premiere Pro", level: 50 },
      { skill: "SQL", level: 60 },
    ],
    courses_certifications: [
      {
        name: "Big Data: adquisición y almacenamiento de datos",
        institution: "UPV",
        platform: "Coursera",
        id: "8CY4M4LQ3JUT",
        date: "jul 2020",
        link:
          "https://www.coursera.org/account/accomplishments/certificate/8CY4M4LQ3JUT",
      },
      {
        name: "Certificación Introductoria en Big Data y Ciencia de Datos",
        institution: "Buiness Data Evolution",
        date: "nov. de 2019",
        link:
          "https://www.coursera.org/account/accomplishments/certificate/8CY4M4LQ3JUT",
      },
    ],
    awards: [
      {
        name: "Líderes del Mañana",
        institution: "Tecnológico de Monterrey",
        description: "",
      },
      {
        name: "Third place enterpreneurship",
        institution: "Universidad de los Andes",
        description: "",
      },
    ],
    languages: [
      { language: "Spanish", level: "Native speaker" },
      { language: "English", level: "B1+" },
      { language: "German", level: "B1" },
      { language: "French", level: "A2" },
    ],
  };

  return langUtils;
}

export default LangUtils;
