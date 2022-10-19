import Project from "../components/Project";

export default function Projects(props) {
  return (
    <>
      <Project
        key={1}
        id={1}
        title="Gardnr"
        pictureURL="https://raw.githubusercontent.com/MatiasWengiel/HomeGardnr--Caitlin-Croteau-Raiza-DeGuzman-Matias-Wengiel/task/finish-README/docs/Gardnr-viewunwateredplants.png"
        taglineText="Grow a beautiful, bountiful garden with Gardnr!"
        descriptionText="This web app was created using React, React-Bootstrap and SASS on the front end, and node.js and express on the back end. Developed by Matias Wengiel, Caitlin Croteau and Raiza De Guzman as a final project for Lighthouse Lab's Full Stack Web Developer Program"
        githubLink="https://github.com/MatiasWengiel/HomeGardnr--Caitlin-Croteau-Raiza-DeGuzman-Matias-Wengiel"
      />
      <Project
        key={2}
        id={2}
        title="PasswordKeepR"
        pictureURL="https://github.com/MatiasWengiel/MidtermProject-PasswordKeepR-Matias-Brian-Moe/blob/master/project_organization/PWKeepR-main-page.png?raw=true"
        taglineText="PasswordKeepR allows for the easy and secure sharing of passwords across an organization."
        descriptionText="This website was created using EJS, HTML and SASS on the front end, and node.js and express on the back end. Developed by Matias Wengiel, Mohammed Mahdi and Brian Nguyen as a midterm project for Lighthouse Lab's Full Stack Web Developer Program"
        githubLink="https://github.com/MatiasWengiel/MidtermProject-PasswordKeepR-Matias-Brian-Moe"
      />
    </>
  );
}
