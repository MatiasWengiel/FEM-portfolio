import Project from "../components/Project";

export default function Projects(props) {
  // This is a temporary solution. In the future I will create a back-end component that will retrieve this information from a database
  return (
    <>
      <Project
        key={1}
        id={1}
        title="Portfolio"
        pictureURL="https://github.com/MatiasWengiel/FEM-portfolio/blob/main/front-end/src/images/FrontPageScreenshot.png?raw=true"
        taglineText="You are here! And now you can see how I built this"
        descriptionText="Created using React and MUI. General design and colors from frontendmentor.io's figma designs."
        githubLink="https://github.com/MatiasWengiel/FEM-portfolio"
      />
      <Project
        key={2}
        id={2}
        title="Gardnr"
        pictureURL="https://raw.githubusercontent.com/MatiasWengiel/HomeGardnr--Caitlin-Croteau-Raiza-DeGuzman-Matias-Wengiel/task/finish-README/docs/Gardnr-viewunwateredplants.png"
        taglineText="Grow a beautiful, bountiful garden with Gardnr!"
        descriptionText="This web app was created using React, React-Bootstrap and SASS on the front end, and node.js and express on the back end."
        githubLink="https://github.com/MatiasWengiel/HomeGardnr--Caitlin-Croteau-Raiza-DeGuzman-Matias-Wengiel"
      />
      <Project
        key={3}
        id={3}
        title="PasswordKeepR"
        pictureURL="https://github.com/MatiasWengiel/MidtermProject-PasswordKeepR-Matias-Brian-Moe/blob/master/project_organization/PWKeepR-main-page.png?raw=true"
        taglineText="PasswordKeepR allows for the easy and secure sharing of passwords across an organization."
        descriptionText="This website was created using EJS, HTML and SASS on the front end, and node.js and express on the back end."
        githubLink="https://github.com/MatiasWengiel/MidtermProject-PasswordKeepR-Matias-Brian-Moe"
      />
    </>
  );
}
