const testimonials = [
    {

        name: "Abdiwahab",
        message: "Rodha is an active learner."
    },
    {
        name: "Rahma",
        message: "Rodha is a good software developer."

    }

];

for (let testimonial of testimonials) {
    const container = document.getElementById("testimonial-container");
    const testimonialElement = document.createElement("div");
    testimonialElement.innerHTML = `<h3>${testimonial.name}</h3>`;
    testimonialElement.innerHTML += `<p>${testimonial.message}</p>`;
    container.appendChild(testimonialElement);
    
    
}

const project = [
{
    title: "My Portfolio",
    discription: "A Website showing my coding skills.",
    technologies: "HTML,CSS"


},

{
    title: "My Grocerry Store",
    discription: "A Website that displays my grocery store.",
    technologies: "HTML,CSS"


}

]

 const projectContainer = document.getElementById("projects-container");

for (let project of projects) {
    const projectElement = document.createElement("div");
    projectElement.innerHTML =`<h3>${project.title}</h3>`;
    projectElement.innerHTML += `<p>${project.discription}</p>`;
    projectElement.innerHTML += `<p>Technologies: ${project.technologies}</p>`;
    projectContainer.appendChild(projectElement);




}










