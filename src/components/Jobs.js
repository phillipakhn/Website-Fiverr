import React from "react";
import "./CSS/Jobs.css";

const JobCard = ({ job }) => {
  const { title, description, applicationLink } = job;

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={applicationLink} className="apply-button">
        Apply Now
      </a>
    </div>
  );
};

const Jobs = ({ jobs = [] }) => {
  document.title = "Job Openings";

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1 className="jobs-title">Explore Job Openings</h1>
      </div>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
