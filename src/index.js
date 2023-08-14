import './styles.css';


//Project Factory Function
const projectFactory = (name, tasks) => {
    return {name, tasks};
};


const projectInput = document.getElementById('new-project-input')
const projectButton = document.getElementById('new-project-button');
const projectList = document.getElementById('project-list');

// Load projects from local storage on page load
const storedProjects = JSON.parse(localStorage.getItem('projectArray')) || [];
const projects = storedProjects;

// Display stored projects in the project list on page load
projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project.name;
    projectList.appendChild(projectItem);
});


//Add an event listener to the create new project button.
projectButton.addEventListener('click', function(){
    const projectName = projectInput.value;

    //Checks for a project name.
    if (projectInput.value === ""){
        alert("Name your project!")

    //Create a li with the text content equal to the project name's text content, and appends it to the project ul.
    } else {
        const projectItem = document.createElement('li');
        projectItem.textContent = projectName;
        projectList.appendChild(projectItem);
        
        //Create the project with the factory function and pushes the new project to the empty projects array.
        const newProject = projectFactory(projectName)
        projects.push(newProject);


        //Create a serialized version of the projects array.
        let projects_serialized = JSON.stringify(projects);

        //Store the serialized version of the projects array.
        localStorage.setItem("projectArray", projects_serialized); 

       
        console.log(projects_serialized);
        console.log(projects);

    } 

    
});









