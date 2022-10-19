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
        descriptionText="This web app was created using node.js and express on the back end, and React, React-Bootstrap and SASS on the front end. Developed by Matias Wengiel, Caitlin Croteau and Raiza De Guzman as a final project for Lighthouse Lab's Full Stack Web Developer Program"
      />
      <Project
        key={2}
        id={2}
        title="Gardnr"
        pictureURL="https://raw.githubusercontent.com/MatiasWengiel/HomeGardnr--Caitlin-Croteau-Raiza-DeGuzman-Matias-Wengiel/task/finish-README/docs/Gardnr-viewunwateredplants.png"
        taglineText="Grow a beautiful, bountiful garden with Gardnr!"
        descriptionText="This web app was created using node.js and express on the back end, and React, React-Bootstrap and SASS on the front end. Developed by Matias Wengiel, Caitlin Croteau and Raiza De Guzman as a final project for Lighthouse Lab's Full Stack Web Developer Program"
      />
    </>
  );
}
