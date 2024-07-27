import React from "react";
import PropTypes from "prop-types";

const Blogs = (props) => {
  return (
    <div className="bg-white text-black">
      <div className="py-32 bg-[#FAF8FF]" id="back1">
        <h2 className="text-4xl font-extrabold text-center text-black">
          Blogs
        </h2>
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">
          Unlocking Your Dream Job: How to Make the Most of Job Portals
        </h1>
        <article className="py-4 px-2 text-2xl font-semibold">
          In today's digital age, job portals have become essential tools for
          job seekers and employers alike. These platforms offer a convenient
          and efficient way to connect talent with opportunities. However,
          navigating the vast landscape of job portals can be daunting. This
          blog post aims to guide you through maximizing your success on job
          portals and landing your dream job.
        </article>
        <article className="py-4 px-2 text-2xl font-semibold">
          Job portals are online platforms where employers post job vacancies,
          and job seekers submit their resumes and applications. Some of the
          most popular job portals include LinkedIn, Indeed, Glassdoor, and
          specialized industry-specific sites. Understanding the features and
          functionality of these portals is the first step to leveraging them
          effectively.
        </article>
        <div className="py-4 px-2 text-2xl font-semibold">
          Your profile is your digital first impression. Here are some tips to
          make it stand out:
          <section className="py-2 px-1">
            Complete Your Profile: Ensure all sections are filled out
            accurately. A complete profile ranks higher in searches.
          </section>
          <section className="py-2 px-1">
            Professional Photo: Use a clear, professional photo. This adds a
            personal touch and increases trust.
          </section>
          <section className="py-2 px-1">
            Detailed Work Experience: Highlight your achievements and
            responsibilities in each role. Use bullet points for clarity.
          </section>
          <section className="py-2 px-1">
            Skills and Endorsements: List relevant skills and seek endorsements
            from colleagues to boost your credibility.
          </section>
        </div>
        <article className="py-4 px-2 text-2xl font-semibold">
          Optimizing Your Resume
          <br />A well-optimized resume can significantly increase your chances
          of being noticed:
          <ol>
            <li>
              Keywords: Incorporate industry-specific keywords to match job
              descriptions.
            </li>
            <li>
              Format: Use a clean, professional format. Avoid overly complex
              designs that may not parse well with applicant tracking systems
              (ATS).
            </li>
            <li>
              Quantify Achievements: Use numbers and statistics to demonstrate
              your impact in previous roles.
            </li>
          </ol>
        </article>
        <article className="py-4 px-2 text-2xl font-semibold">
          Job portals are powerful tools for connecting with potential employers
          and finding your dream job. By creating a compelling profile,
          optimizing your resume, actively searching, leveraging additional
          features, and staying organized, you can significantly improve your
          chances of success. Happy job hunting!
        </article>
      </div>
    </div>
  );
};

Blogs.propTypes = {};

export default Blogs;
