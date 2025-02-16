import React from 'react'

const Project = () => {
    //./assets/images/cardDetails.jpg
    const projects = [
        {
            id: 1,
            projectImage: ["cardDetails.jpg", "card details"],
            projectCategory: "Card Details",
            projectTitle: "Socail Proof",
            moreDetails: "https://elasri21.github.io/interactive/"
        },
        {
            id: 2,
            projectImage: ["unifeed.png", "unifeed"],
            projectCategory: "Unifeed Blog",
            projectTitle: "Unifeed",
            moreDetails: "https://elasri21.github.io/unifeedblog/"
        },
        {
            id: 3,
            projectImage: ["snippets.png", "snippets"],
            projectCategory: "Snippet Landing Page",
            projectTitle: "Snippet",
            moreDetails: "https://elasri21.github.io/snippet/"
        },
        {
            id: 4,
            projectImage: ["timenow.png", "time out"],
            projectCategory: "Time Now Landing Page",
            projectTitle: "Timenow",
            moreDetails: "https://elasri21.github.io/timenow/"
        },
        {
            id: 5,
            projectImage: ["bookmark.jpg", "book mark"],
            projectCategory: "Book Mark Landing Page",
            projectTitle: "bookmark",
            moreDetails: "https://elasri21.github.io/bookmark/"
        },
        {
            id: 6,
            projectImage: ["darktheme.jpg", "dark theme"],
            projectCategory: "Dark Theme Landing Page",
            projectTitle: "Dark Theme",
            moreDetails: "https://elasri21.github.io/dark-theme-landing-page/"
        },
        {
            id: 7,
            projectImage: ["managing.jpg", "managing landing page"],
            projectCategory: "Managing Landing Page",
            projectTitle: "Managing",
            moreDetails: "https://elasri21.github.io/manage-landing-page/"
        },
        {
            id: 8,
            projectImage: ["easy.jpg", "easy bank"],
            projectCategory: "Easy Bank Landing Page",
            projectTitle: "Easy Bank",
            moreDetails: "https://elasri21.github.io/easy-bank/"
        }
    ];
  return (
    <section className="projects" id="projects">
        <h2 className="title">Projects</h2>
        <div className="content">
            {projects.map(project => 
                <div className="project-card" key={project.id}>
                    <div className="project-image">
                        <img src={new URL(`../assets/images/${project.projectImage[0]}`, import.meta.url).href} alt={project.projectImage[1]} />
                    </div>
                    <div className="project-info">
                        <p className="project-category">{project.projectCategory}</p>
                        <strong className="project-title">
                            <span>{project.projectTitle}</span>
                            <a href={project.moreDetails} target="_blank" className="more-details">View Site</a>
                        </strong>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Project