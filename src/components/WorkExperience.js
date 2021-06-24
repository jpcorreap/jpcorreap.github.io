import React from "react";
import Uniandes_logo from "../assets/uniandes.png";
import ITESM_logo from "../assets/itesm.png";
import CustomDataGrid from "./CustomDataGrid/CustomDataGrid";
import Grid from "@material-ui/core/Grid";

function WorkExperience() {
  const columns = [
    {
      field: "company",
      headerName: "Company",
      flex: 0.5,
    },
    {
      field: "title",
      headerName: "Job title",
      flex: 0.8,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.6,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1.5,
    },
    {
      field: "technologies",
      headerName: "Technologies / languages",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 0,
      date: "Jan 2021 - Present",
      company: "University Project",
      title: "Mobile Developer",
      description:
        "Develop and maintenance of Flutter app for https://gradua.herokuapp.com/ (code remains private at this moment)",
      technologies: "Flutter",
    },
    {
      id: 1,
      date: "Nov 2020 - Present",
      company: "Alfred",
      title: "Software Developer",
      description:
        "Develop and maintenance of two web applications to customers and maintenance of a Django backend.",
      technologies: "React, Redux, Material UI",
    },
    {
      id: 2,
      date: "Aug - Dec 2020",
      company: "Universidad de los Andes",
      title: "Fullstack Web Development teaching assistant",
      description:
        "Responsible of supporting +30 students in a Fullstack Web Development course by implementing MERN stack.",
      technologies: "Mongo, Express, React, Node",
    },
    {
      id: 3,
      date: "May - Sep 2020",
      company: "Universidad de los Andes",
      title: "Moodle LMS developer assistant",
      description:
        "Responsible of create, upload and modify content to Moodle LMS platform for German A1 and A2 courses by using HTML and CSS.",
      technologies: "Moodle, HTML, CSS, JavaScript",
    },
    {
      id: 4,
      date: "Sep - Dec 2020",
      company: "Universidad de los Andes",
      title: "Volunteer in University's COVIDA Project",
      description:
        "Responsible of developing a mobile app to track patients remotely. The app was called PlusVida.",
      technologies: "Flutter",
    },
    {
      id: 5,
      date: "Jan - May 2020",
      company: "Universidad de los Andes",
      title: "Python Programming teaching assistant",
      description:
        "Responsible of support and grade +24 students in an introduction to programming course by using Python programming language.",
      technologies: "Python",
    },
    {
      id: 6,
      date: "Aug - Dec 2019",
      company: "Tecnológico de Monterrey",
      title: "Teaching assistant",
      description:
        "Responsible of supporting professors in administrative tasks, from creation of essays to grade Programming in Python students, within the scolarship Leaders of Tomorrow.",
      technologies: "Python",
    },
    {
      id: 7,
      date: "Jun - Jul 2019",
      company: "Universidad de los Andes",
      title: "Moodle LMS developer assistant",
      description:
        "Responsible of create, upload and modify content to Moodle LMS platform for German A1 and A2 courses by using HTML and CSS.",
      technologies: "Moodle, HTML, CSS, JavaScript",
    },
    {
      id: 8,
      date: "Jan - May 2019",
      company: "Universidad de los Andes",
      title: "Algorithmic and OOP in Java teaching assistant",
      description:
        "Responsible of support and grade +18 students in an Object-oriented programming course by using Java language.",
      technologies: "Java",
    },
    {
      id: 9,
      date: "Jan - May 2018",
      company: "Universidad de los Andes",
      title: "Algorithmic and OOP in Java teaching assistant",
      description:
        "Responsible of support and grade +18 students in an Object-oriented programming course by using Java language.",
      technologies: "Java",
    },
    {
      id: 10,
      date: "Aug - Dic 2017",
      company: "Universidad de los Andes",
      title: "Algorithmic and OOP in Java teaching assistant",
      description:
        "Responsible of support and grade +24 students in an Object-oriented programming course by using Java language.",
      technologies: "Java",
    },
  ];

  return (
    <>
      <h3 className="text-center">Other projects and work experience</h3>
      <Grid
        item
        style={{
          height: "800px",
        }}
      >
        <CustomDataGrid columns={columns} rows={rows} />
      </Grid>
    </>
  );
}

export default WorkExperience;
