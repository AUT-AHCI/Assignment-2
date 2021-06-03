import React, { } from 'react';
import { Container} from 'react-bootstrap';

const Findings = () => {
	const containerStyle = {
		background: 'rgba(0, 0, 0, 0.6)',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
	};

	return (
        <div style={containerStyle}>
            <Container className="d-flex flex-column justify-content-center align-items-center w-50">
            
                <br/><br/><br/>
                <h1>Findings</h1>
                <br/>
                <p>
                    To conduct the analysis of the data, statistical analysis was used.
                    Gathered data is translated into graphs, tables and charts to help 
                    readability and present the data in an understandable manner. 
                    Findings are then presented in a logical, sequential order 
                    (University of Southern California, 2021).
                </p>
                <p>
                    We then utilized descriptive analysis to perform a primary level of 
                    analysis as outlined by Bhatia (2018), to summarize individual variables 
                    and find patterns.
                </p>
                <p>
                    We analysed the data to check for statistics such as:
                </p>
                <ul>
                    <li>Mean - the numerical average</li>
                    <li>Median - a midpoint in the numerical data</li>
                    <li>Mode - the most common value</li>
                    <li>Percentage - preference amongst the respondents</li>
                    <li>Frequency - the number of times a certain value appears</li>
                    <li>Range - highest and lowest values within the data</li>
                </ul>

                <br/><br/><br/>
                <h1>How The Testing Went</h1>
                <br/>
                <p>
                    Testing began on the 1st of June, with the survey being distributed amongst 20 people.
                </p>
                <p>
                    Over the course of our testing phase, we were able to retrieve 
                    15 results from participants.
                </p>

                <br/><br/><br/>
                <h1>Results</h1>
                <br/>
                <p>
                    On average, participants using the sign-up form found the password requirements 
                    using the form to not be difficult. Our form did not have the password requirements 
                    clearly stated on the page next to the password fields, only when the user would 
                    enter a password that did not match our criteria would they be alerted. This could 
                    be the result of users having previous experience using sign-up forms from other 
                    websites in the past, which usually require strict and strong passwords.
                </p>
                <img src="/charts/Picture1.png" width="90%"/>
                <br /><br /><br />
                <p>
                    Participants on average found the SSO comfortable to utilize when signing up. 
                    Although some users had issues when using google SSO from their mobile devices, 
                    or the fact that the SSO option opens a new window which could be missed by some users. 
                    The issue with mobile was fixed by the user attempting from their computer instead, 
                    although other users did not face this issue. 
                </p>
                <img src="/charts/Picture2.png" width="90%"/>
                <br /><br /><br />
                <p>
                    Most participants found that SSO would save them time when signing up. 
                    This is also correlated in the output times found below and is consistent 
                    with our hypothesis. Though due to missing data we are unable to conclusively 
                    confirm this assertion. However, we can state that there was a higher degree 
                    of participants that did not encounter any issues. Though as stated previously, 
                    this is inconclusive at this time.
                </p>
                <img src="/charts/Picture3.png" width="90%"/>
                <br /><br /><br />
                <p>
                    There were several usability factors that resulted in our participants encountering 
                    delays in the use of the form. One of the most common usability factors was the password 
                    requirements were not clearly identified. This resulted in the participants having to 
                    type in their password and then wait and see if the password would meet the required criteria. 
                    Though by having a prompt to inform the participants that the password did not meet the 
                    password requirements was found to be quite useful. In terms of usability most participants 
                    would have preferred a notification of all of the password requirements instead of a 
                    notification of the individual criteria that were not initially meet.
                </p>
                <img src="/charts/Picture4.png" width="90%"/>
                <br /><br /><br />
                <p>
                    A large proportion of participants preferred SSO over Form sign up. This was due to several 
                    factors, one of which was the usability rating (1 being easy, 10 being hard) for form sign 
                    up being ~2.73 (2 dp). When compared to SSO which had a useability rating of ~1.53 (2 dp). 
                    This tells us that SSO is much easier to use in terms of usability by participants. Though 
                    this does not conclusively tell us that. However, when the degree of comfort with SSO is 
                    brought in we start to paint a picture of this.
                </p>
                <img src="/charts/Picture5.png" width="90%"/>
                <br /><br /><br />
                <p>
                    As seen in the above image. Our participants were 53% comfortable using SSO in terms of the 
                    usability of this sign-up method. The 47% of participants of which were not comfortable also 
                    listed several issues with the usability of SSO. This tells us that SSO can be quite alienating 
                    to our participants, this can be reflected by the sudden change to the rendered website. 
                    For example, a new window opens for the SSO. This window’s sudden appearance completely 
                    changes from the website’s style. Instead of having blue undertones, the participants have 
                    a new window appearing that is white. This is a great example of how usability can cause 
                    confusion and as previously stated, only 53% of participants were comfortable with the usability 
                    of SSO. This leads us to conclude that SSO does have some usability issues, which will require 
                    further study to identify more accurately.
                </p>
                <img src="/charts/Picture6.png" width="90%"/>
                <br /><br /><br />
                <p>
                    As expected in our hypothesis, along with following the preference of the participants, 
                    the time taken by SSO was noticeably less than form sign up. On average, the time taken 
                    for each participant using SSO was around half that of their form time. This can also be 
                    reflected in the above graph which shows us the usability of both sign up methods and when 
                    the below graph is compared. We can see how the usability of the sign-up methods for each 
                    person is reflected across both graphs.
                </p>
                <img src="/charts/Picture7.png" width="90%"/>
                <br /><br /><br />
                <img src="/charts/Picture8.png" width="90%"/>
                <br /><br /><br />
                <p>
                    As you can see in the above diagram, a form takes on average ~50% more than SSO to complete. 
                    This along with the usability survey that we had our participants undertake, 
                    tells us that SSO has a lesser amount of usability issues than form sign up. 
                    However, SSO still has some usability issues as previously mentioned.
                </p>
                <img src="/charts/Picture9.png" width="90%"/>
                <br /><br /><br />
                <p>
                    Even though the number of seconds does not differ much in doing both SSO and form sign up, 
                    it can be clearly seen from the graph that most of the participants feel that they can save 
                    some time by doing SSO since they do not have to go through matching the password requirements 
                    that is required by the form sign up.
                </p>
                <img src="/charts/Picture10.png" width="90%"/>
                <br /><br /><br />
                <p>
                    There is one outlier for the form at approximately 110 and none for the SSO. 
                    This indicates that there was more uniformity and consistency in the time undertaken 
                    by the participants for SSO. However, as there are no other outliers for the form time, 
                    this cannot be conclusively proven at this time. Though both boxplots do show that there 
                    is a shorter amount of time taken by the participants when using SSO and the median is also 
                    lower than the form’s median. This tells us that there is quite a difference in time for 
                    both methods. This is be reflected in the usability rating as several other usability factors 
                    such as usability issues, comfortability with using SSO and overall preference.
                </p>
                <img src="/charts/Picture11.png" width="90%"/>
                <br /><br /><br />
                <p>
                    Furthermore, the perceived time by the participants was 87% more than form sign-up. 
                    This directly correlates to the actual time taken by the users as well as the 
                    overall usability of SSO.
                </p>
                <br/><br/><br/>
               

                <br/><br/><br/>
                <h1>Conclusion</h1>
                <br/>
                <h2>Summary</h2>
                <p>
                    In conclusion, our study findings have shown that there is indeed a noticeable time 
                    save using SSO instead of form sign-up, with most participants displaying preference 
                    for SSO. However, it is not absolute, with some users preferring form sign-up, and an 
                    almost 50-50 split amongst participants whether they were comfortable utilizing SSO.
                    <br />
                    The most common issue participants encountered or mentioned was the password requirements 
                    for the form sign-up, primarily how there was no note mentioning the requirements until a 
                    sign-up attempt was made.
                    <br />
                    If we were to have more participants involved, we would expect 
                    that our findings would be to a higher accuracy. Also, if we were to target a broader range 
                    of individuals to participate in this study, we would expect that there would be a more 
                    representative outcome, this is due to a variety of different factors. Mostly this is due 
                    to a more diverse sample range having different perspectives on usability in relation to 
                    SSO and typical form sign up.
                </p>
                <br />
                <h2>Hypothesis</h2>
                <p>
                    While we hypothesized that SSO would save users some small amount of time, the 
                    actual result was halving time taken on average. This indicates that offering users the 
                    option of SSO when using sign-in methods is a noticeable quality of life improvement, 
                    that most users prefer having.
                    <br />
                    We also hypothesized that participants would indicate preference for having control over 
                    account details, which could be argued was incorrect as most participants preferred using SSO, 
                    although only half of them indicated they were comfortable linking their google account instead 
                    of creating a new account through the form.
                </p>
                <br />
                <h2>Recommendations</h2>
                <p>
                    Based on our research study, we believe that offering both methods of sign-in is beneficial to users. 
                    In the case that form sign-up is used, we would recommend that clearly indicating requirements for 
                    fields such as the password would be a worthwhile quality of life for the user, as having to redo 
                    their password multiple times to meet new criteria is distasteful.
                </p>
                <br />
                <h2>Future Research</h2>
                <p>
                    In the event of future study, or redoing research around this topic, we would likely 
                    take a more qualitative approach, utilizing interviews and observation techniques to 
                    gather more in-depth information and understanding into how participants navigate and 
                    use the item of research.
                    <br />
                    We would also disengage from making direct comparisons, and instead look more into how each 
                    individual element affects the participants.
                </p>
                <br />
                <h2>HCI Discoveries</h2>
                <p>
                    Thanks to undertaking this research study, through both researching methodologies, 
                    processes & analysis techniques, and conducting the study itself, we as a team have 
                    developed a greater understanding of academic research practices.
                    <br />
                    We have come to understand that direct comparisons are not always an ideal method 
                    of conducting research, particularly when attempting to uncover usability issues and 
                    possible improvements. While quantitative methodology worked out in our favor due to 
                    time constraints, it provided a rather basic analysis into the usability of our 
                    research topic, highlighting how qualitative research would’ve likely been the more 
                    suitable approach, with a slightly more refined and less comparative research question.
                </p>
                <br />
                <h2>Collection Method</h2>
                <p>
                    Our collection method was flawed to a certain degree. The main issue being that some of the 
                    data that was collected was unable to be recorded. This resulted in the loss of partial data, 
                    however we were able to identify this issue during the beginning of our data collection and 
                    resolve this issue. Our collection method could also be strengthened by a more diverse 
                    sample size, as stated previously.
                </p>


                <br /><br /><br />
                <br /><br /><br />
                <div className="references">
				<h1>References</h1>
				<p>
					University of Southern California. (2021).
					<em> Quantitative Methods. </em>
					Retrieved June 1, 2021, from
					https://libguides.usc.edu/writingguide/quantitative
				</p>
                <p>
					Bhatia, M. (2018).
					<em> Your Guide to Qualitative and Quantitative Data Analysis Methods. </em>
					Retrieved June 1, 2021, from
					https://humansofdata.atlan.com/2018/09/qualitative-quantitative-data-analysis-methods/
				</p>
                

                
                <br/><br/><br/>
                </div>
            </Container>
        </div>
    );
};

export default Findings;
