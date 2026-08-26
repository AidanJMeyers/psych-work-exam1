// Chapter 6 practice questions — all MCQ, matching the exam format.

export default [
  {
    q: 'In Chapter 6, "validity" refers specifically to:',
    type: 'mcq',
    choices: [
      'The extent to which a test samples the job domain',
      'The validity coefficient based on criterion-related validity — the correlation between the predictor and the job performance criterion',
      'The reliability of the test across administrations',
      'Whether the test is legally defensible under the Uniform Guidelines'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The chapter states this explicitly: saying a procedure’s validity is .40 means it correlates .40 with the job performance criterion. Option A describes content validity.'
  },
  {
    q: 'Which is NOT one of the three reasons the textbook gives for devoting two chapters to personnel selection?',
    type: 'mcq',
    choices: [
      'Personnel selection is the largest area of practice in I-O psychology',
      'Selection procedures have been held to higher legal scrutiny since the 1964 Civil Rights Act',
      'Selection is one of the most well-developed research areas in I-O psychology',
      'Selection procedures are the only HR practice governed by federal law'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The three reasons are practice size, legal implications, and research maturity. Civil Rights law also reaches compensation, training, and occupational health (Ch. 1).'
  },
  {
    q: 'The basic assumption underlying personnel selection is that:',
    type: 'mcq',
    choices: [
      'All applicants have equal potential given adequate training',
      'Individual differences — generally identified through a job analysis — can be used to predict job performance',
      'Past employers provide accurate performance information',
      'Interviews are the most valid method of assessment'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'Assessing individual differences to predict performance is the core logic, and job analysis (Ch. 3) is what identifies which differences matter.'
  },
  {
    q: 'When applicants take a test at home, away from any representative of the organization, this is called:',
    type: 'mcq',
    choices: ['Group administered testing', 'Unproctored Internet testing', 'A power test', 'Remote proctoring'],
    correct: 1,
    difficulty: 'E',
    explanation: 'It is convenient and commonplace but raises cheating and test security concerns. Remote proctoring — a person observing remotely or reviewing video — is one solution vendors use.'
  },
  {
    q: 'One recommended safeguard for unproctored Internet testing is to:',
    type: 'mcq',
    choices: [
      'Use it only as an initial applicant screening, followed by other selection procedures',
      'Restrict it to non-cognitive tests only',
      'Administer it only to internal candidates',
      'Double the time limit to reduce test anxiety'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Ployhart et al. (2017). The other safeguard mentioned is remote proctoring, with a person observing from a remote location or video recordings reviewed later.'
  },
  {
    q: 'A test that requires the test-taker to work as quickly as possible, and on which most applicants do not finish, is a:',
    type: 'mcq',
    choices: ['Power test', 'Speed test', 'Non-cognitive test', 'Low-fidelity simulation'],
    correct: 1,
    difficulty: 'E',
    explanation: 'The idea is that only exceptional applicants finish. Clerical data-checking tests are the chapter’s example. Power tests, by contrast, let respondents go at their own pace — typical of personality tests.'
  },
  {
    q: 'Two retail companies both use interviews to hire salespeople, but Company A assesses job knowledge while Company B assesses interpersonal skills. Figure 6.1 uses this to illustrate:',
    type: 'mcq',
    choices: [
      'That interviews have low validity',
      'The distinction between selection METHODS and the CONSTRUCTS or KSAOs being measured',
      'That structured interviews outperform unstructured ones',
      'The importance of adverse impact analysis'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Arthur and Villado (2008). The implication is that validity depends not only on which method is used but on what that method is measuring.'
  },
  {
    q: '"Utility" in personnel selection is determined by which three factors?',
    type: 'mcq',
    choices: [
      'Validity, reliability, and content coverage',
      'The procedure’s validity, the cost of using it, and the benefit it provides in improved worker performance',
      'Adverse impact, applicant reactions, and legal defensibility',
      'Sample size, criterion quality, and administration time'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Utility is the DOLLAR VALUE of using a procedure. A test may be a good predictor but cost so much to administer that it is not worth it.'
  },
  {
    q: 'Adverse impact is defined as:',
    type: 'mcq',
    choices: [
      'Any negative applicant reaction to a selection procedure',
      'The degree to which there are mean differences in the performance of different subgroups on a selection procedure',
      'The legal finding that a test discriminates intentionally',
      'The reduction in validity caused by range restriction'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'Because it affects workforce diversity and the likelihood of successfully defending a procedure in litigation, adverse impact "largely determines whether or not employers are willing to use a given selection procedure."'
  },
  {
    q: 'According to Table 6.6, what is the validity of tests of general cognitive ability (g)?',
    type: 'mcq',
    choices: ['.33', '.44', '.51', '.54'],
    correct: 2,
    difficulty: 'M',
    explanation: '.51 (Schmidt & Hunter, 1998). .33 is unstructured interviews, .44 structured interviews, and .54 work samples — the only procedure in the table with a higher validity than g.'
  },
  {
    q: 'The chapter explains that g predicts job performance primarily because:',
    type: 'mcq',
    choices: [
      'It correlates with conscientiousness',
      'It relates to knowledge acquisition in training and on the job — it allows workers to learn their job more quickly',
      'It is easy and inexpensive to measure',
      'It is unaffected by test-taker motivation'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Hunter (1986) on training and Kuncel et al. (2004) on the job. This mechanism also explains why g predicts especially well for COMPLEX jobs and for core task performance.'
  },
  {
    q: 'g is described as an especially good predictor of job performance for:',
    type: 'mcq',
    choices: ['Entry-level jobs', 'Complex jobs', 'Sales jobs specifically', 'Jobs requiring physical ability'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Schmidt & Hunter (2004). Salgado et al. (2003) replicated this in a European meta-analysis, finding that job complexity MODERATES the relationship between g and job performance.'
  },
  {
    q: 'g is a better predictor of which type of performance?',
    type: 'mcq',
    choices: [
      'Core task performance, compared with contextual performance',
      'Contextual performance, compared with core task performance',
      'Counterproductive work behavior',
      'Adaptive performance'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Ones et al. (2012a). This connects directly to Chapter 4’s task/contextual distinction — g helps you master the core tasks, not necessarily the citizenship behaviors.'
  },
  {
    q: 'Spearman (1904) is credited with:',
    type: 'mcq',
    choices: [
      'Developing the Wonderlic Personnel Test',
      'Differentiating g from other specific abilities such as verbal and numerical reasoning, while noting they are correlated',
      'Establishing the Big Five personality framework',
      'Demonstrating adverse impact in cognitive testing'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The correlation exists because g allows a person to develop specific abilities depending on opportunities and interests (Ones et al., 2012a).'
  },
  {
    q: 'The Wonderlic Personnel Test consists of:',
    type: 'mcq',
    choices: [
      '195 items with no time limit',
      '50 items administered in 12 minutes, arranged in order of difficulty',
      '100 items administered in 30 minutes',
      '50 items with unlimited time, arranged randomly'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The assumption is that most candidates will not finish. Research shows it primarily measures verbal comprehension, followed by deduction and numerical fluency. (195 items is the PAQ from Ch. 3.)'
  },
  {
    q: 'Regarding ethnic group differences on tests of g, the chapter notes all of the following EXCEPT:',
    type: 'mcq',
    choices: [
      'Mean scores for Blacks and Hispanics tend to be lower than for Whites, with similar means for White and Asian groups',
      'There is considerable variability within each ethnic group and considerable overlap between groups',
      'Differences on actual job performance are often LESS than differences on tests of g',
      'The differences disappear entirely when tests are administered online'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'The chapter also notes mean differences may partly reflect the tests’ focus on ACQUIRED SKILL such as math and vocabulary (Schmidt, 2002). Administration medium is not offered as a remedy.'
  },
  {
    q: 'One recommended strategy for reducing the adverse impact of cognitive ability tests is to:',
    type: 'mcq',
    choices: [
      'Lower the cut-off score below the group mean',
      'Use g in combination with other predictors that are LOW in adverse impact, such as personality tests',
      'Administer the test only to internal candidates',
      'Convert the test to an unproctored online format'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Chernyshenko et al. (2011); Lievens et al. (2005). The chapter also stresses that one would not use g as the sole predictor without, say, an interview.'
  },
  {
    q: 'The Bennett Mechanical Comprehension test asks respondents about:',
    type: 'mcq',
    choices: [
      'Whether letter/number strings are the same or different',
      'Pictures of mechanical equipment such as gears, pulleys, and airplanes — e.g., which way a pulley would turn',
      'Personality descriptions rated for accuracy',
      'Hypothetical workplace dilemmas'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'It is "perhaps one of the best-known tests of mechanical ability," used for hiring into skilled trades, mechanics, and equipment operator jobs. Option A describes a clerical ability test.'
  },
  {
    q: 'Most clerical ability tests are:',
    type: 'mcq',
    choices: [
      'Power tests scored on accuracy alone',
      'Speed tests, timed, with scores determined by how many items are completed AND how many are wrong',
      'Untimed simulations of office work',
      'Non-cognitive tests'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The item format asks test-takers to mark items that differ from each other, working quickly. They are used for hiring office or clerical workers.'
  },
  {
    q: 'Before deciding whether to use a psychomotor test, the chapter emphasizes that it is important to:',
    type: 'mcq',
    choices: [
      'Check the test’s adverse impact statistics',
      'Do a job analysis, so the particular psychomotor skills assessed match the job',
      'Pilot the test on undergraduate students',
      'Confirm the test is available in multiple languages'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Guion (1998). Psychomotor tests assess a wide range of possible abilities — dexterity, coordination, agility of fingers, hands, or body — so matching skill to job is essential.'
  },
  {
    q: 'Guion and Gottier (1965) famously concluded that:',
    type: 'mcq',
    choices: [
      'Personality tests predict performance better than cognitive tests',
      'It is difficult to advocate, with a clear conscience, the use of personality measures in most situations as a basis for making employment decisions',
      'The Big Five framework should replace clinical personality inventories',
      'Integrity tests should replace polygraph testing'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Their conclusion reflected the era’s reliance on clinically derived tests such as the MMPI, developed on psychiatric populations and therefore poor predictors of job performance. Barrick and Mount (1991) overturned this.'
  },
  {
    q: 'Why were personality tests such as the MMPI poor predictors of job performance?',
    type: 'mcq',
    choices: [
      'They were too short to be reliable',
      'They focused on CLINICAL DIAGNOSIS and were developed on psychiatric populations rather than the normal adult population',
      'They were administered as speed tests',
      'They were susceptible to adverse impact'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'They included dimensions such as "schizophrenia" and "paranoia." The chapter notes such clinically derived tests remain acceptable for some HIGH-RISK jobs such as police officers or juvenile probation officers.'
  },
  {
    q: 'According to Barrick and Mount (1991), which Big Five dimension is the best predictor of performance ACROSS ALL JOBS?',
    type: 'mcq',
    choices: ['Extraversion', 'Openness to experience', 'Conscientiousness', 'Agreeableness'],
    correct: 2,
    difficulty: 'E',
    explanation: 'Figure 6.5 and Table 6.6 both state that conscientiousness is the most consistent of the Big Five in predicting performance across all jobs. It includes achievement-orientation, detail-orientation, and dependability.'
  },
  {
    q: 'Which Big Five dimension is described as a good predictor of performance for SALES AND MANAGEMENT jobs?',
    type: 'mcq',
    choices: ['Extraversion', 'Conscientiousness', 'Openness to experience', 'Neuroticism'],
    correct: 0,
    difficulty: 'M',
    explanation: 'Extraversion — being sociable, assertive, and friendly — also relates to training performance. Openness predicts success in training specifically.'
  },
  {
    q: 'Which Big Five dimension is identified as a predictor of success in TRAINING?',
    type: 'mcq',
    choices: ['Agreeableness', 'Openness to experience', 'Neuroticism', 'Conscientiousness'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Figure 6.5 describes openness as including being interested in learning and culture, making it a predictor of training success. (Extraversion also relates to training performance.)'
  },
  {
    q: 'Figure 6.5 notes that neuroticism:',
    type: 'mcq',
    choices: [
      'Is the strongest negative predictor of performance across jobs',
      'May only affect job performance if at HIGH LEVELS',
      'Predicts training performance better than openness',
      'Is unrelated to any work outcome'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Neuroticism includes being anxious or easily upset; stated positively, the dimension is emotional stability. Its effect on performance appears concentrated at high levels.'
  },
  {
    q: 'The chapter identifies TWO reasons the Five-Factor Model caught on quickly for selection. Which does it call "more important to many employers"?',
    type: 'mcq',
    choices: [
      'Personality tests are relatively inexpensive',
      'Personality tests generally show LOW ADVERSE IMPACT against protected groups, especially compared with cognitive ability tests',
      'Personality tests have higher validity than cognitive ability tests',
      'Personality tests cannot be faked'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Foldes et al. (2008). The chapter says "that factor alone has made personality tests very attractive to many employers" — even though Big Five validities are described as fairly modest.'
  },
  {
    q: 'Which aspects of job performance does personality relate to particularly strongly?',
    type: 'mcq',
    choices: [
      'Core task performance and adaptive performance',
      'Organizational citizenship behaviors and counterproductive work behavior',
      'Creative performance and technical performance',
      'Training performance only'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Ones et al. (2007). Note the contrast with g, which predicts CORE TASK performance better than contextual performance — the two predictor types cover different parts of the criterion space.'
  },
  {
    q: 'Adding an "at work" frame of reference to a personality test:',
    type: 'mcq',
    choices: [
      'Reduces faking but has no effect on validity',
      'Increases the test’s predictive validity, as confirmed meta-analytically',
      'Increases adverse impact',
      'Converts the test from a power test to a speed test'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Hunthausen et al. (2003) demonstrated it with airline ticket-counter employees; Shaffer and Postlethwaite (2012) confirmed it meta-analytically. It works because people behave differently across contexts, and the framing aligns items with the work criterion.'
  },
  {
    q: 'Conscientiousness includes the subtraits of achievement-striving and orderliness. According to Oswald and Hough (2011), which is probably more important for predicting performance in MOST jobs?',
    type: 'mcq',
    choices: ['Orderliness', 'Achievement-striving', 'They contribute equally', 'Neither predicts performance'],
    correct: 1,
    difficulty: 'H',
    explanation: 'Orderliness may certainly matter for certain types of jobs, but achievement is probably more important across most jobs. This illustrates the broader point that facets may predict better than broad factors.'
  },
  {
    q: 'Which of the following is NOT one of the methods researchers have used to "catch" or control faking on personality tests?',
    type: 'mcq',
    choices: [
      'Warning test-takers about faking',
      'Eye-track technology',
      'Forced-choice items',
      'Administering the test as a speed test'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'The three named approaches are warnings, eye-tracking, and forced-choice items where respondents must choose among seemingly equally desirable alternatives. Personality tests are power tests, not speed tests.'
  },
  {
    q: 'What does research suggest about the effect of faking on personality test VALIDITY?',
    type: 'mcq',
    choices: [
      'Faking substantially reduces validity in all applications',
      'Over thousands of selection decisions in a large company, faking has MINIMAL effects on validity',
      'Faking increases validity by identifying motivated applicants',
      'The effect has never been studied empirically'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Hogan et al. (2007). Faking may affect applicants’ RELATIVE scores, but not aggregate validity much. The chapter also notes fakers may better understand what the job requires — "a good thing."'
  },
  {
    q: 'Marcus (2009) proposed that faking should be reconceptualized as:',
    type: 'mcq',
    choices: [
      'Deliberate deception requiring detection and penalty',
      'Positive self-presentation from the applicant’s perspective, which should not necessarily be considered a bad thing',
      'A form of test anxiety',
      'Evidence of low conscientiousness'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter poses the rhetorical question: if an applicant wanted a job, understood what was needed, and presented their skills in that light, "would that necessarily be bad?"'
  },
  {
    q: 'Carter et al. (2014) raised which challenge to conventional assumptions about personality and performance?',
    type: 'mcq',
    choices: [
      'That conscientiousness is unrelated to performance',
      'That there may be OPTIMAL LEVELS of traits such as conscientiousness — more is not always better',
      'That personality is unstable over time',
      'That the Big Five should be replaced by HEXACO'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter puts it plainly: "a person may at some point be too conscientious." This challenges the assumption of a simple LINEAR relationship between personality and performance.'
  },
  {
    q: 'Proactive personality is defined as:',
    type: 'mcq',
    choices: [
      'The tendency to adjust oneself to new situations',
      'The tendency to recognize and act on opportunities in the environment',
      'A combination of self-esteem, locus of control, self-efficacy, and neuroticism',
      'The ability to perceive and manage emotions in oneself and others'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Bateman & Crant (1993). Crant (1995) found it predicted real estate agents’ sales performance — and did so OVER AND ABOVE conscientiousness and extraversion, showing it is a distinct trait. Option A is adaptability; option C is CSE.'
  },
  {
    q: 'Core self-evaluations (CSE) is made up of which four traits?',
    type: 'mcq',
    choices: [
      'Self-esteem, locus of control, self-efficacy, and neuroticism',
      'Conscientiousness, agreeableness, openness, and extraversion',
      'Honesty, humility, sincerity, and fairness',
      'Learning, interpersonal, cultural, and physical adaptability'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Described as the "bottom-line evaluations that people make of themselves." Judge (2009) points to evidence CSE predicts job performance, perhaps better than each component variable alone.'
  },
  {
    q: 'The HEXACO model proposes a sixth personality dimension. What is it?',
    type: 'mcq',
    choices: [
      'Emotionality',
      'Honesty/humility — including sincerity, fairness, and lack of greed',
      'Proactivity',
      'Emotional intelligence'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Ashton & Lee (2007). The chapter notes whether a sixth factor actually exists is "far from settled" — but honesty/humility reappears as the best explanation for the validity of PERSONALITY-BASED integrity tests.'
  },
  {
    q: 'The concern with emotional intelligence (EI) as a selection tool is that:',
    type: 'mcq',
    choices: [
      'It has never been shown to relate to any work outcome',
      'It is unclear whether EI is different from existing personality and cognitive ability measures, and thus whether it predicts over and above them',
      'It has high adverse impact',
      'It cannot be measured reliably'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'One possibility raised is that EI is a good predictor only for jobs requiring a good bit of "emotional labor," where one’s true emotions and the emotions required on the job do not match (Joseph & Newman, 2010).'
  },
  {
    q: 'The growth of integrity testing stems from:',
    type: 'mcq',
    choices: [
      'The 1964 Civil Rights Act',
      'The outlawing of polygraph or lie detector tests in the 1980s',
      'The Barrick and Mount meta-analysis of 1991',
      'The Uniform Guidelines of 1978'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Polygraphs had been used until then to predict negative employee behaviors. Self-report integrity tests filled the gap.'
  },
  {
    q: '"I have used marijuana while at work" is an example of which type of integrity test item?',
    type: 'mcq',
    choices: ['Personality-based (covert)', 'Overt', 'Forced-choice', 'Situational judgment'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Overt integrity tests directly ask about theft, illegal drug use, or fighting. A covert item would be something like "I look for excitement and thrills at work," whose purpose is not obvious to the test-taker.'
  },
  {
    q: 'Research indicates the validity of OVERT integrity tests is best explained by ____, while the validity of PERSONALITY-BASED integrity tests is best explained by ____.',
    type: 'mcq',
    choices: [
      'HEXACO honesty/humility; the Big Five',
      'the Big Five; HEXACO honesty/humility',
      'cognitive ability; the Big Five',
      'the Big Five; cognitive ability'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Marcus et al. (2007). Separately, from a Big Five standpoint, personality-based integrity tests are generally a function of conscientiousness, agreeableness, and neuroticism (Sackett & Wanek, 1996).'
  },
  {
    q: 'Ones, Viswesvaran, and Schmidt (1993) reported what average validity for integrity tests predicting counterproductive work behaviors?',
    type: 'mcq',
    choices: ['.25', '.33', '.41', '.47'],
    correct: 3,
    difficulty: 'M',
    explanation: '.47 for behaviors such as theft, absenteeism, tardiness, and violence. The .41 figure is from Ones & Viswesvaran (2001) for predicting SUPERVISORY RATINGS — higher than that of personality tests.'
  },
  {
    q: 'A study of over 700,000 applicants found that integrity tests:',
    type: 'mcq',
    choices: [
      'Have high adverse impact against ethnic minorities',
      'Have relatively LOW adverse impact against ethnic minorities',
      'Cannot be faked',
      'Predict theft better than any other outcome'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Ones & Viswesvaran (1998). Low adverse impact plus acceptable validity is what makes integrity tests attractive, especially in industries like retail where theft is a major problem.'
  },
  {
    q: 'Van Iddekinge et al. (2012) challenged integrity test validity. How did the debate resolve?',
    type: 'mcq',
    choices: [
      'Ones et al. conceded the point and integrity tests were abandoned',
      'Ones et al. argued the study pool was not comprehensive and included measures that were not actually integrity tests; Sackett and Schmitt concluded the tests are probably sufficiently valid but more research is needed',
      'The EEOC banned integrity testing',
      'The dispute was resolved by a new meta-analysis showing validity above .60'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This exchange is a good example of scientific self-correction in I-O — and of why the chapter says meta-analytic findings on integrity test validity "vary."'
  },
  {
    q: 'Employers use integrity tests largely to:',
    type: 'mcq',
    choices: [
      '"Select in" the highest-potential candidates',
      '"Select out" candidates who might be difficult on the job',
      'Assess managerial potential',
      'Replace the employment interview'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Table 6.6 states this directly. It is a screening-out tool rather than a ranking tool — which fits its focus on predicting negative behaviors.'
  },
  {
    q: 'Which selection procedure does the chapter describe as "undoubtedly the most frequently used"?',
    type: 'mcq',
    choices: ['Cognitive ability test', 'The interview', 'Work sample', 'Reference check'],
    correct: 1,
    difficulty: 'E',
    explanation: 'Used by both small and large employers — "it is hard to imagine making a selection decision without an interview of some sort."'
  },
  {
    q: 'A "realistic job preview" (RJP) provides the applicant with:',
    type: 'mcq',
    choices: [
      'A written summary of the job specifications',
      'A preview of what the job is like, BOTH GOOD AND BAD',
      'A work sample of typical job tasks',
      'Feedback on their interview performance'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The "both good and bad" element is essential to the definition — an RJP that presented only positives would not be realistic. It can be delivered as part of a job interview.'
  },
  {
    q: 'Why did early research conclude the selection interview had low predictive validity?',
    type: 'mcq',
    choices: [
      'Interviewers were untrained',
      'Most interviews were UNSTRUCTURED — different applicants were asked very different, often non-job-related questions',
      'Interviews were conducted by telephone',
      'Applicants engaged in impression management'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Arvey & Campion (1982). The introduction of structured interviews — where all applicants are asked the same job-related questions — changed this considerably.'
  },
  {
    q: '"What would you do if an angry customer called and started yelling at you?" is an example of which type of interview question?',
    type: 'mcq',
    choices: ['Behavioral', 'Situational', 'Unstructured', 'Biodata'],
    correct: 1,
    difficulty: 'E',
    explanation: 'Situational interviews (Latham et al., 1980) ask about HYPOTHETICAL situations. The behavioral version would be "Think about a time that an angry customer called… How did you handle it?"'
  },
  {
    q: 'The behavioral interview rests on which underlying premise?',
    type: 'mcq',
    choices: [
      'Applicants reveal their true personality under stress',
      'The best predictor of future behavior is past behavior',
      'Hypothetical reasoning reflects cognitive ability',
      'Structured questions eliminate interviewer bias'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Janz (1982). This is why behavioral interviews ask about past experiences, and why situational interviews may be more appropriate when applicants have relatively little experience to draw on.'
  },
  {
    q: 'According to Levashina et al. (2014), situational interviews seem to measure ____, while behavioral interviews seem to measure ____.',
    type: 'mcq',
    choices: [
      'experience and personality; job knowledge and cognitive ability',
      'job knowledge and cognitive ability; experience and some personality dimensions',
      'social skills; technical skills',
      'motivation; ability'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Because they measure different things, the authors conclude either or both might be acceptable for different purposes — though behavioral questions have slightly higher validity for high-complexity jobs.'
  },
  {
    q: 'What are the validities of structured versus unstructured interviews (McDaniel et al., 1994)?',
    type: 'mcq',
    choices: ['.44 vs. .33', '.51 vs. .44', '.33 vs. .25', '.54 vs. .45'],
    correct: 0,
    difficulty: 'M',
    explanation: 'Structured .44, unstructured .33. Both appear in Table 6.6, and both are noted as being PREFERRED BY APPLICANTS.'
  },
  {
    q: 'Despite lower validity, the chapter says unstructured interviews may still be useful for:',
    type: 'mcq',
    choices: [
      'Predicting core task performance',
      'Assessing interpersonal skills and personality, gauging group fit, and letting the interviewee ask questions',
      'Reducing adverse impact against older applicants',
      'Satisfying Uniform Guidelines requirements'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Blackman (2002) on personality judgment. The authors add they are "doubtful that most hiring managers would be prepared to hire a prospective employee without some sort of interview to get to know them first."'
  },
  {
    q: 'Which is NOT one of the five ways the chapter lists for adding structure to a selection interview?',
    type: 'mcq',
    choices: [
      'Use the same job-related questions for all applicants',
      'Develop standardized rating scales',
      'Use multiple raters and train raters',
      'Conduct the interview by telephone rather than face-to-face'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The five are: same job-related questions, standardized rating scales, note-taking, multiple raters, and rater training. Medium of delivery is not among them.'
  },
  {
    q: 'Interview questions should be generated from the job analysis. From which three sources specifically?',
    type: 'mcq',
    choices: [
      'Tasks, KSAs, and critical incidents',
      'O*NET, the DOT, and the PAQ',
      'Job descriptions, job specifications, and salary surveys',
      'Supervisor ratings, peer ratings, and self-ratings'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'All three are Chapter 3 outputs. The goal is an interview that "adequately samples the job — that is to say, is CONTENT VALID."'
  },
  {
    q: 'Rater training for interviews should include how to avoid which biases?',
    type: 'mcq',
    choices: [
      'Halo, similarity, and leniency/severity',
      'Adverse impact, range restriction, and criterion contamination',
      'Faking, impression management, and social desirability',
      'Deficiency, contamination, and relevance'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'These are performance appraisal biases discussed in Chapter 5, applied here to interview ratings. Training also covers correct procedures, frame of reference, scale use, and resolving rater differences.'
  },
  {
    q: 'Regarding illegal interview questions, the chapter makes which crucial point?',
    type: 'mcq',
    choices: [
      'Employers may ask anything as long as they do not use the information in the decision',
      'It is illegal to ask a question that may cause the applicant to BELIEVE they will face discrimination, even if the employer does not plan to use the information',
      'Questions about ability to perform key job tasks are also prohibited',
      'Only questions about age are restricted'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Restricted topics include age, disability, citizenship, marital status, and children. The employer IS still allowed to ask whether the applicant can perform the key job tasks.'
  },
  {
    q: 'Huffcutt et al.’s (2001) meta-analysis found that interviews PRIMARILY measure:',
    type: 'mcq',
    choices: [
      'Mental ability and job knowledge',
      'Personality and social skills',
      'Physical ability and dexterity',
      'Vocational interests'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Personality and social skills come first, followed by mental ability and job knowledge and skills. Structured interviews assess job knowledge, organizational fit, and decision-making; unstructured ones assess interests, education, and experience.'
  },
  {
    q: 'Bourdage et al. (2018) found that DECEPTIVE impression management by interviewees was related to:',
    type: 'mcq',
    choices: [
      'Higher interviewer ratings and faster hiring',
      'Being eliminated later in the hiring process, even if the applicant scored well on the initial interview',
      'No detectable outcome',
      'Higher post-hire job performance'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Deceptive IM includes telling fictional stories or misstating the reason for leaving a previous job. HONEST IM — self-promotion and ingratiation — was related to HIGHER interviewer ratings.'
  },
  {
    q: 'Which type of interview is MORE susceptible to job applicants’ impression management tactics?',
    type: 'mcq',
    choices: ['Structured interviews', 'Unstructured interviews', 'Situational interviews', 'Behavioral interviews'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Barrick et al. (2009). This is one more reason structure improves validity — it constrains the applicant’s ability to steer the conversation.'
  },
  {
    q: 'Psychological fidelity in a work sample refers to:',
    type: 'mcq',
    choices: [
      'The extent to which the sample LOOKS like the job',
      'The extent to which the sample ELICITS THE KSAs needed on the job',
      'The applicant’s emotional reaction to the assessment',
      'The reliability of raters scoring the sample'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Goldstein et al. (1993). Psychological fidelity gives work samples clear CONTENT VALIDITY. PHYSICAL fidelity — looking like the job — is what makes them attractive to applicants.'
  },
  {
    q: 'What is the primary DOWNSIDE of work sample tests?',
    type: 'mcq',
    choices: [
      'They have low criterion-related validity',
      'They are expensive, because they can only be administered to one applicant at a time',
      'They have high adverse impact',
      'Applicants dislike them'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'For that reason work samples are often used as one of the LATER selection hurdles, after cheaper procedures. Their validity (.54) is the highest in Table 6.6 and applicants find them attractive.'
  },
  {
    q: 'A design constraint on work samples is that they should NOT:',
    type: 'mcq',
    choices: [
      'Use the actual equipment used on the job',
      'Assess job skills that applicants would be expected to learn later on the job',
      'Be scored by trained raters',
      'Take longer than one hour to administer'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Gatewood et al. (2018). This parallels the physical ability test caution about accounting for post-hire training — you should not require pre-hire mastery of what the job will teach.'
  },
  {
    q: 'Assessment centers were first used on a large scale in the US by:',
    type: 'mcq',
    choices: ['The US Army in the 1940s', 'AT&T in the 1960s', 'General Motors in the 1970s', 'Google in the 2000s'],
    correct: 1,
    difficulty: 'M',
    explanation: 'They are described as "work samples for managers" and are now used in many large organizations across the US and Europe, with growing popularity in Asia.'
  },
  {
    q: 'An assessment center exercise requiring candidates to review memoranda or e-mails and determine which have priority is called:',
    type: 'mcq',
    choices: ['Leaderless group discussion', 'Role play', 'The in-box/in-basket exercise', 'A low-fidelity simulation'],
    correct: 2,
    difficulty: 'M',
    explanation: 'After working on their responses, candidates present their answers to trained raters — experts in management or psychologists.'
  },
  {
    q: 'Which assessment center exercise presents candidates with a problem AS A GROUP so they can be evaluated for teamwork and leadership?',
    type: 'mcq',
    choices: ['In-box exercise', 'Role play', 'Leaderless group discussion', 'Situational judgment test'],
    correct: 2,
    difficulty: 'M',
    explanation: 'Role plays involve playing out a one-on-one situation such as dealing with a subordinate who has a performance problem; the leaderless group discussion is the group exercise.'
  },
  {
    q: 'Which is described as a distinctive advantage of assessment centers — doing "double duty"?',
    type: 'mcq',
    choices: [
      'They can be administered to large groups simultaneously',
      'They can be used both to decide whom to promote AND to provide rich feedback to candidates, whether or not they are promoted',
      'They serve as both a work sample and a personality test',
      'They eliminate adverse impact entirely'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The developmental feedback function is unusual among selection procedures. Note that assessment centers do carry SOME SMALL amount of adverse impact (Whetzel et al., 2008), so option D is wrong.'
  },
  {
    q: 'Hoffman et al. (2015) found assessment center exercises are related to cognitive ability and which personality traits?',
    type: 'mcq',
    choices: [
      'Conscientiousness and agreeableness',
      'Extraversion and openness to experience',
      'Neuroticism and conscientiousness',
      'Agreeableness and openness'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'There remain unresolved questions about whether assessment centers should be thought of as units of EXERCISES or of KSA DIMENSIONS, and calls to examine their interpersonal nature more deeply.'
  },
  {
    q: 'Situational judgment tests are technically known as:',
    type: 'mcq',
    choices: ['High-fidelity simulations', 'Low-fidelity simulations', 'Power tests', 'Overt assessments'],
    correct: 1,
    difficulty: 'M',
    explanation: 'They put the applicant into a work-related situation and ask what they believe is the right action, without the physical realism (and cost) of a true work sample.'
  },
  {
    q: 'What did Lievens and Sackett (2012) find using a video-based SJT with Belgian medical students?',
    type: 'mcq',
    choices: [
      'The SJT predicted medical school grades but not later performance',
      'The SJT, focused on interpersonal skills, predicted internship performance seven years later and work performance nine years later',
      'The SJT had unacceptable adverse impact',
      'The SJT predicted only first-year performance'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter calls this "quite an impressive feat." Remember the two intervals: 7 years for internship performance, 9 years for work performance.'
  },
  {
    q: 'SJT formats can vary on which two elements?',
    type: 'mcq',
    choices: [
      'Stimulus format and response format',
      'Time limit and scoring key',
      'Proctoring and platform',
      'Fidelity and adverse impact'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Bauer et al. (2011). Stimulus material may be written or a short video; responses may be multiple-choice or open-ended, with alternatives presented in written or video format.'
  },
  {
    q: 'What distinguishes biodata from ratings of training and experience (T&E forms)?',
    type: 'mcq',
    choices: [
      'Biodata are used only in the private sector',
      'Biodata are EMPIRICALLY SCORED through a research-established process, whereas T&E forms are NOT empirically scored but are scored by a trained rater',
      'T&E forms ask about life experience while biodata ask only about education',
      'Biodata are administered orally'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter states that when psychologists use the term "biodata," it is implied that detailed, empirical scoring has been used to validate the measures. T&E forms are common in the PUBLIC sector.'
  },
  {
    q: 'What is the reported validity range for biodata?',
    type: 'mcq',
    choices: ['.11 to .45', '.19 to .43', '.37 to .52', 'Up to .25'],
    correct: 2,
    difficulty: 'M',
    explanation: '.37 to .52 (Hunter & Hunter, 1984; Vinchur et al., 1998). .11–.45 is T&E forms, .19–.43 is SJTs, and "up to .25" is personality tests.'
  },
  {
    q: 'Research suggests that biodata faking can be reduced by:',
    type: 'mcq',
    choices: [
      'Using forced-choice item formats exclusively',
      'Asking applicants to ELABORATE on their answers — providing further information and explanation',
      'Administering the items orally',
      'Shortening the biodata form'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Levashina et al. (2012); Schmitt & Kunce (2002). Applicants should also be told that any answers they provide are open to later verification by the employer.'
  },
  {
    q: 'Van Iddekinge et al.’s (2019) meta-analysis of PRE-HIRE work experience found correlations of:',
    type: 'mcq',
    choices: [
      '.06 with job performance, .11 with training performance, and .00 with turnover',
      '.37 with job performance and .52 with turnover',
      '.44 with job performance across all criteria',
      '.51 with job performance for complex jobs'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'The chapter calls this "the bad news." Pre-hire experience was slightly better at predicting performance immediately after hire, and experience gained WITHIN the current organization may be more predictive.'
  },
  {
    q: 'The chapter notes which key problem with résumés as a selection tool?',
    type: 'mcq',
    choices: [
      'They have been shown to have zero validity',
      'Applicants CONTROL the information provided, so different applicants supply different — and sometimes inaccurate — information, making comparison difficult',
      'They are prohibited under the Uniform Guidelines',
      'They cannot be scanned electronically'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'There is also little hard research on résumé validity, though research consistently shows they can lead to DISCRIMINATION by the screener. Pre-formatted online résumé builders are the recommended fix.'
  },
  {
    q: 'Why does the chapter question reference checks as PREDICTORS of work performance?',
    type: 'mcq',
    choices: [
      'They take too long to complete',
      'Applicants tend to select their own referees based on who will be most positive about them, avoiding people who might identify problems',
      'They are illegal in most states',
      'Referees are rarely willing to respond'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'They still make sense for verifying information, checking for safety "red flags," and avoiding NEGLIGENT HIRING — the hiring of someone who might, for example, hurt other people.'
  },
  {
    q: '"Ban the box" laws, enacted in over 30 US states, prevent employers from:',
    type: 'mcq',
    choices: [
      'Requiring credit checks for any position',
      'Asking about criminal history on a job application',
      'Using unproctored Internet testing',
      'Conducting reference checks without applicant consent'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Although the laws vary by state, the purpose is to allow those with a criminal history to obtain employment (Maurer, 2018).'
  },
  {
    q: 'Hogan (1991) identified which two broad dimensions capturing most job-related physical demands?',
    type: 'mcq',
    choices: [
      'Muscular strength/endurance and physical skill in movements',
      'Cardiovascular fitness and flexibility',
      'Explosive strength and reaction time',
      'Dexterity and coordination'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Baker & Gebhardt (2012) describe two testing approaches built on this: construct-based tests (e.g., cardiovascular fitness) and simulation-like exams with high face validity (e.g., dragging a dummy, hauling equipment upstairs).'
  },
  {
    q: 'In the Chicago fire department case, what produced the adverse impact finding?',
    type: 'mcq',
    choices: [
      'The test itself was unrelated to firefighting tasks',
      'The passing score was 65 out of 100, but the city used a CUT-OFF SCORE OF 89, so 90 percent of male but only 19 percent of female applicants passed',
      'Women were excluded from taking the test',
      'The test was administered without accommodation for disabilities'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The lawsuit ended with a settlement of almost $2 million and the city adopting a new physical ability test (Byrne, 2013). The EEOC cautions that such tests must be truly job related and not arbitrary.'
  },
  {
    q: 'Bernerth et al. (2012) found that a strong credit score was associated with:',
    type: 'mcq',
    choices: [
      'High conscientiousness and high agreeableness',
      'High conscientiousness but LOW agreeableness — and credit scores were NOT associated with workplace deviance',
      'Low conscientiousness and high agreeableness',
      'No personality traits at all'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The lack of association with workplace deviance undercuts the main employer rationale for using credit scores. Adverse impact is also a concern, since Blacks and Hispanics tend to have lower credit scores than Whites.'
  },
  {
    q: 'Van Iddekinge et al. (2011) found that vocational interests:',
    type: 'mcq',
    choices: [
      'Were unrelated to job performance in any sample',
      'Were related to job performance in a military sample and had relatively LOW adverse impact',
      'Predicted performance only in artistic occupations',
      'Had higher validity than cognitive ability tests'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Vocational interests were long studied in the VOCATIONAL COUNSELING literature but largely ignored by I-O as a selection topic. This study suggests they "may hold promise for making hiring decisions."'
  },
  {
    q: 'Which procedure has the HIGHEST validity listed in Table 6.6?',
    type: 'mcq',
    choices: ['Cognitive ability (g), at .51', 'Work samples, at .54', 'Integrity tests, at .47', 'Structured interviews, at .44'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Work samples at .54 edge out g at .51. The full ladder runs: work samples .54 > g .51 > integrity .47 > assessment centers .45 > structured interviews .44 > unstructured interviews .33.'
  },
  {
    q: 'According to Table 6.6, which procedure combines HIGH validity with LOW COST?',
    type: 'mcq',
    choices: ['Work samples', 'Assessment centers', 'Cognitive ability (g)', 'Situational judgment tests'],
    correct: 2,
    difficulty: 'M',
    explanation: 'Table 6.6 states "High validity and low cost. Has adverse impact against some ethnic groups." Work samples and assessment centers are both explicitly noted as costly.'
  },
  {
    q: 'Table 6.6 notes that biodata has:',
    type: 'mcq',
    choices: [
      'Low development costs but high administration costs',
      'UP-FRONT DEVELOPMENT COSTS but is relatively inexpensive to administer',
      'The lowest validity of any procedure listed',
      'The highest adverse impact of any procedure listed'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The cost structure is the reverse of work samples, which are cheap to design but expensive per applicant because only one candidate can be assessed at a time.'
  },
  {
    q: 'Van Iddekinge et al. (2016) asked recruiters to rate the FACEBOOK pages of college graduates and found:',
    type: 'mcq',
    choices: [
      'Ratings predicted later job performance well',
      'Ratings were NOT predictive of later job performance and tended to FAVOR FEMALE AND WHITE applicants',
      'Ratings predicted turnover but not performance',
      'Recruiters could not agree on ratings'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Zhang et al. (2020) added that personal social networking sites often surface demographic data prohibited from use in hiring under US law. The authors recommend employers AVOID using personal social media for hiring decisions.'
  },
  {
    q: 'How does the chapter distinguish LinkedIn from Facebook for selection purposes?',
    type: 'mcq',
    choices: [
      'Both should be avoided equally',
      'Work-related sites such as LinkedIn may be useful because they are more likely to provide JOB-RELATED information; recruiter ratings there may be reliable, valid, low in adverse impact, and predictive of career success',
      'LinkedIn ratings have higher adverse impact',
      'LinkedIn data are legally prohibited in all 50 states'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Hartwell & Campion (2020); Roulin & Levashina (2019). The distinction is between PERSONAL and WORK-RELATED social networking sites.'
  },
  {
    q: 'Recent findings on test administration platforms suggest that:',
    type: 'mcq',
    choices: [
      'Mobile administration systematically lowers scores',
      'A range of tests — cognitive, non-cognitive, and SJT — are essentially EQUIVALENT when administered by computers and mobile devices',
      'Only paper administration is legally defensible',
      'Gamified tests increase faking'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Brown & Grossenbacher (2017); Illingworth et al. (2015); Morelli et al. (2014). Gamified tests, by contrast, are meant to ENGAGE test-takers, REDUCE faking, and take little time (Nikolaou et al., 2019).'
  },
  {
    q: 'The Current Research Issues section concludes that:',
    type: 'mcq',
    choices: [
      'Selection technology has been thoroughly validated before adoption',
      'The technology of selection practice is FAR OUTPACING the research on validity, applicant acceptability, legality, and adverse impact',
      'AI scoring has been shown to eliminate bias entirely',
      'I-O psychologists should avoid collaborating with data scientists'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Gonzalez et al. (2019); König et al. (2020); Woods et al. (2020). The reviews call for I-O psychologists and data scientists to work closely together — "a significant challenge for the field, but also an opportunity."'
  },
  {
    q: 'A critic of AI-scored video interviews would most likely argue that:',
    type: 'mcq',
    choices: [
      'AI cannot process voice or visual data',
      'Bias may not be easily eliminated, because many scoring algorithms simply reflect past, possibly biased decisions',
      'AI scoring is prohibited by the EEOC',
      'Applicants uniformly prefer AI to human interviewers'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Proponents argue AI saves recruiter costs, surfaces insights like voice intonation or eye tracking, and can eliminate bias. Preliminary research also shows applicants generally PREFER face-to-face interviews — though explaining asynchronous video interviews significantly reduces their concerns (Basch & Melchers, 2019).'
  },
  {
    q: 'An organization wants a valid, inexpensive predictor with low adverse impact to pair with a cognitive ability test. Based on Chapter 6, the best fit is:',
    type: 'mcq',
    choices: [
      'An assessment center',
      'A Big Five personality test with an "at work" frame of reference',
      'A work sample test',
      'A credit history check'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Personality tests have modest validity (up to .25) but are inexpensive and low in adverse impact — precisely the combination the chapter recommends for offsetting g’s adverse impact. Assessment centers and work samples are costly; credit checks have adverse impact and weak validity.'
  },
  {
    q: 'A small employer wants to improve hiring but can afford only one change. Based on the chapter, the highest-leverage change would be to:',
    type: 'mcq',
    choices: [
      'Add a credit history check',
      'Convert its unstructured interviews into structured interviews with job-analysis-derived questions and standardized rating scales',
      'Begin screening applicants’ Facebook profiles',
      'Adopt an assessment center'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Structure raises interview validity from .33 to .44, improves litigation outcomes, keeps adverse impact low, and — as the chapter notes — many of these recommendations "can be easily adopted by even the smallest employer." Assessment centers are expensive and Facebook screening is explicitly discouraged.'
  },
  {
    q: 'A hiring manager says, "We use an interview, so our process is valid." Based on Chapter 6, the best correction is:',
    type: 'mcq',
    choices: [
      'Interviews are never valid predictors',
      'Validity depends on the METHOD used AND on what the method is MEASURING — and unstructured interviews (.33) are substantially less valid than structured ones (.44)',
      'Interviews are valid only for managerial jobs',
      'Only work samples produce defensible validity evidence'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This combines the Arthur and Villado method-versus-construct point with the structure findings. "Using an interview" specifies neither what is being measured nor how much structure is present.'
  },
  {
    q: 'Which pairing of selection procedure and its Table 6.6 comment is INCORRECT?',
    type: 'mcq',
    choices: [
      'Integrity tests — typically used to "select out" job applicants',
      'Assessment centers — frequently used for managerial assessment; costly to administer',
      'Situational judgment tests — perceived positively by applicants, less costly than other work sample-like assessments',
      'Work samples — inexpensive to administer and easily given to large groups'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Table 6.6 says work samples are "costlier to administer than other predictors," because they can only be administered to one applicant at a time. Their validity (.54) and applicant appeal are their strengths.'
  }
];
