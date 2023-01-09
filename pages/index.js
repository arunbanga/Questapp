import React from "react";
import Head from "next/head";
import Study_to_plan_now from "../Components/Study_to_plan_now";
import What_we_are_trying from "../Components/What_we_are_trying";
import Every_student_needs from "../Components/Every_student_needs";
import Get_start3_steps from "../Components/Get_start3_steps";
import Testimonial from "../Components/Testimonial";
import More_about_us from "../Components/More_about_us";
import Create_my_plan from "../Components/Create_my_plan";
import Footer_section from "../Components/Footer_section";
import Its_your_turn from "../Components/Its_your_turn";
import Header from "../Components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.js";
import "../styles/Header.module.css";

const index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <title>Navigated Learning with Questt App - Download | Questt</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Questt's navigated learning journey empowers students with the power of AI by providing data driven actionable steps. Our Strategy prepares personalized plans for students to get ready for their exams the right way!"
        />
        <meta
          property="og:title"
          content="Navigated Learning with Questt App - Download | Questt"
        />
        <meta
          property="og:description"
          content="Questt's navigated learning journey empowers students with the power of AI by providing data driven actionable steps. Our Strategy prepares personalized plans for students to get ready for their exams the right way!"
        />
        <meta property="og:image" content="/og.png" />
        <meta
          property="og:image:alt"
          content="Navigated Learning with Questt App - Download"
        />
      </Head>
      <div>
        {/* header start */}
        <Header />
        {/* <!---header end---> */}
        {/* <!--Study Plan Now section--> */}
        <Study_to_plan_now />
        {/* <!--Study Plan Now section end--></div> */}
        {/* <!------What we’re trying to solve start------> */}
        <What_we_are_trying />
        {/* <!------What we’re trying to solve end------>
      <!--------Every Student needs a Personalised Study Plan--------> */}
        <Every_student_needs />
        {/* <!--------Every Student needs a Personalised Study Plan end--------> */}
        {/* <!-------Get started in just 3 steps!--------> */}
        <Get_start3_steps />
        {/* <!-------Get started in just 3 steps! end--------> */}
        {/* <!-------Testimonial Section---------->
      <!---Testimonial section start here---> */}
        <Testimonial />
        {/* <!-------Testimonial Section end----------> */}

        {/* More about us------  */}
        <More_about_us />
        {/* <!-----More about us End------> */}

        {/* <!----Create my Plan-----> */}
        <Create_my_plan />
        {/* <!--------Create my Plan end---------> */}
        {/* <!--------Its your turn-------------> */}
        <Its_your_turn />
        {/* <!--------Its your turn end-------------> */}
        {/* <!----footer-section start------> */}
        <Footer_section />
        {/* <!----footer-section start end------> */}
        {/* <script src="Components/Javascript.js"></script> */}
      </div>
    </>
  );
};

export default index;
