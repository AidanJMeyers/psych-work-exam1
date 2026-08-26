// Practice Exam — Part 2: Chapters 4 and 6, plus integrative cross-chapter items.

export default [
  // ================================================== CHAPTER 4 (12)
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'An I-O psychologist must show that a new hiring test is working. What role do criteria play?',
    type: 'mcq',
    choices: [
      'They define the minimum qualifications applicants must meet',
      'They are the outcome variables — measures of performance, knowledge, or attitudes — used to show whether the HR procedure is effective',
      'They set the cut-off score for the test',
      'They document that the test samples the job domain'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'Criteria are what makes evaluation possible. Showing that high test scorers perform better on the job is also precisely what establishes the test’s criterion-related validity.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A job analysis for a barista misses some details and includes tasks only some baristas perform. Which problem does this illustrate?',
    type: 'mcq',
    choices: [
      'The conceptual criterion is never perfectly specified — half of the criterion problem',
      'Criterion contamination from supervisor bias',
      'Low interrater reliability among SMEs',
      'Adverse impact in the criterion measure'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'The criterion problem has two halves: we can never fully specify the conceptual criterion through job analysis, AND all actual criterion measures contain error.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A firm rates call center agents solely on average call handling time. Agents who patiently resolve complex problems score poorly. This is primarily an example of:',
    type: 'mcq',
    choices: [
      'Criterion contamination',
      'Criterion deficiency — the measure fails to capture important parts of the conceptual criterion',
      'Criterion relevance',
      'Dynamic criteria'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Deficiency is the failure to overlap the conceptual criterion. Quality of resolution, customer outcomes, and citizenship behaviors all go unmeasured.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A supervisor systematically rates employees from her own department higher regardless of performance. In criterion terms, her ratings suffer from:',
    type: 'mcq',
    choices: ['Deficiency', 'Contamination', 'Relevance', 'Redundancy'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Contamination is when an actual criterion measure includes something it should not — here, bias — leading to error. It occupies the region of the actual-criterion ellipse falling outside the conceptual criterion.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A restaurant evaluates servers on three measures: orders entered correctly, order entry speed, and order entry errors per shift. What is the flaw?',
    type: 'mcq',
    choices: [
      'The criteria are contaminated by kitchen performance',
      'The criteria are largely redundant with each other and explain little unique variance, leaving important job aspects unmeasured',
      'The criteria are dynamic and will change over time',
      'The criteria measure maximum rather than typical performance'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This is the Figure 4.4 failure mode, paralleling the coffee shop that measures three aspects of espresso quality while ignoring customer interaction and stocking. Criteria should overlap the conceptual criterion but NOT each other.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A hiring manager argues that because employees can perform brilliantly on a test day, cognitive tests are all a company needs. Which distinction does this ignore?',
    type: 'mcq',
    choices: [
      'Task versus contextual performance',
      'Typical versus maximum performance — which are not strongly correlated and have different antecedents',
      'Objective versus subjective measures',
      'Composite versus multiple criteria'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Maximum performance is best predicted by cognitive ability; typical performance is best predicted by personality (Marcus et al., 2007). Sackett et al. (1988) established the two are not strongly correlated.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A training evaluation shows a composite criterion rising from 1.37 to 3.5, but one of the three component criteria barely moved. What is the correct conclusion?',
    type: 'mcq',
    choices: [
      'The training worked, and the component detail is statistical noise',
      'The composite masks a real failure; the training may need revision to address the criterion that did not improve',
      'The composite is invalid whenever components differ',
      'Multiple criteria should never be combined into a composite'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The chapter calls this "very important information for organizational researchers to have." Composites are good for bottom-line communication with management; multiple criteria give the diagnostic detail.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'Which behavior belongs to CONTEXTUAL rather than task performance?',
    type: 'mcq',
    choices: [
      'A programmer writing efficient code',
      'A barista preparing espresso drinks',
      'An employee volunteering to carry out activities that are not formally part of their job',
      'A customer service worker resolving a product problem'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Borman and Motowidlo’s taxonomy includes persisting with extra effort, volunteering beyond one’s formal job, helping and cooperating, following rules, and endorsing organizational objectives. Options A, B, and D are core task performance.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'An employee is widely admired for helping colleagues but is passed over for promotion. Which research finding does this echo?',
    type: 'mcq',
    choices: [
      'Bergeron et al. (2013): employees who spent more time on OCBs spent less time on task performance and had fewer salary increases and slower advancement',
      'Dalal (2005): OCBs and CWBs correlate −.32',
      'Pulakos et al. (2000): adaptive behavior has eight dimensions',
      'Christian et al. (2009): safety behavior depends on safety climate'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Task performance, not OCBs, drove advancement in that professional services firm. The chapter cautions this does not mean employees should avoid OCBs — only that "more OCBs are always better" should not be assumed.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A retailer compares two salespeople using dollar sales alone. What does Chapter 4 identify as the underlying problem?',
    type: 'mcq',
    choices: [
      'Sales figures are subjective measures',
      'Objective measures are not free of flaws — territory, inherited client lists, and store location contaminate the comparison',
      'Sales are a contextual performance measure',
      'Dollar sales cannot be measured reliably'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Tamara inherited a client list; Javier’s store is in a less busy, less wealthy area. The recommended fix is combining measure types so their strengths and weaknesses complement each other.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'A company enforces a strict absence policy. Employees begin coming to work while ill. This is:',
    type: 'mcq',
    choices: ['Absenteeism', 'Presenteeism', 'Counterproductive work behavior', 'Citizenship fatigue'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Presenteeism can produce serious financial losses because of the employee’s own illness and because they make others ill. Miraglia and Johns (2016) identify strict absence policies, job insecurity, and — paradoxically — higher engagement as antecedents.'
  },
  {
    chapter: 'Ch 4 — Criterion Measures',
    q: 'Which set correctly lists four of Campbell and Wiernik’s (2015) eight dimensions?',
    type: 'mcq',
    choices: [
      'Technical performance; communication; counterproductive work behavior; peer/team leadership',
      'Task performance; contextual performance; adaptive behavior; creative performance',
      'Deficiency; contamination; relevance; redundancy',
      'Typical performance; maximum performance; dynamic criteria; composite criteria'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'The eight are technical performance, communication, initiative/persistence/effort, CWB, supervisory-managerial-executive leadership, hierarchical management performance, peer/team leadership, and peer/team member management performance. Option B lists dimensions Campbell argues FALL UNDER these eight.'
  },

  // ================================================== CHAPTER 6 (17)
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'Rank these procedures from HIGHEST to LOWEST validity per Table 6.6.',
    type: 'mcq',
    choices: [
      'Work samples (.54) → cognitive ability (.51) → integrity tests (.47) → structured interviews (.44)',
      'Cognitive ability (.51) → work samples (.54) → structured interviews (.44) → integrity tests (.47)',
      'Integrity tests (.47) → work samples (.54) → cognitive ability (.51) → structured interviews (.44)',
      'Structured interviews (.44) → cognitive ability (.51) → integrity tests (.47) → work samples (.54)'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'The full ladder: work samples .54 > g .51 > integrity .47 > assessment centers .45 > structured interviews .44 > unstructured interviews .33. Biodata spans .37–.52, SJTs .19–.43, and personality up to .25.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'An employer values validity but is worried about workforce diversity. Which combination does Chapter 6 recommend?',
    type: 'mcq',
    choices: [
      'Use cognitive ability tests alone, since they have the best validity-to-cost ratio',
      'Combine cognitive ability with predictors low in adverse impact, such as personality tests',
      'Abandon all standardized testing in favor of unstructured interviews',
      'Use credit history checks, which have low adverse impact'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The chapter also states one would not use g as a sole predictor in any case, since cognitive ability presents only one part of the picture. Credit checks have adverse impact and weak validity.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'Two employers both administer a 45-minute structured interview, but one measures technical knowledge while the other measures teamwork. This illustrates:',
    type: 'mcq',
    choices: [
      'That structured interviews have unstable validity',
      'The distinction between selection METHODS and the CONSTRUCTS they measure',
      'That interviews should be replaced by work samples',
      'Adverse impact differences across employers'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Arthur and Villado (2008), illustrated in Figure 6.1. Validity depends both on which method is used and on what the method is measuring — which is why job analysis drives interview content.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'Why does g predict performance especially well for COMPLEX jobs?',
    type: 'mcq',
    choices: [
      'Complex jobs attract more conscientious applicants',
      'g relates to knowledge acquisition, letting workers learn their jobs more quickly — and complex jobs demand more learning',
      'Complex jobs have more reliable criterion measures',
      'Cognitive tests are longer for complex jobs'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Job complexity MODERATES the g–performance relationship (Schmidt & Hunter, 2004; replicated in Europe by Salgado et al., 2003). The same mechanism explains why g predicts core task performance better than contextual performance.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'Which statement about ethnic group differences on cognitive ability tests is consistent with the chapter?',
    type: 'mcq',
    choices: [
      'Group differences on tests of g are typically LARGER than group differences on actual job performance',
      'Group differences on tests of g are typically SMALLER than group differences on actual job performance',
      'There is no overlap between ethnic groups in test score distributions',
      'Differences vanish when tests are administered on mobile devices'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Sackett & Wilk (1994). The chapter also stresses considerable within-group variability and between-group overlap, and notes gaps may partly reflect the tests’ emphasis on acquired skills such as math and vocabulary.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A 50-item test administered in 12 minutes, arranged from easy to difficult, on which most candidates do not finish, is:',
    type: 'mcq',
    choices: ['The Position Analysis Questionnaire', 'The Wonderlic Personnel Test', 'The Bennett Mechanical Comprehension test', 'A situational judgment test'],
    correct: 1,
    difficulty: 'M',
    explanation: 'The Wonderlic primarily measures verbal comprehension, then deduction and numerical fluency. The PAQ (195 items) is a job analysis instrument from Chapter 3 — a common distractor.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'Which Big Five dimension would you most expect to predict success in a demanding training program?',
    type: 'mcq',
    choices: ['Agreeableness', 'Neuroticism', 'Openness to experience', 'None — training success is unrelated to personality'],
    correct: 2,
    difficulty: 'M',
    explanation: 'Figure 6.5 identifies openness as a predictor of success in training. Extraversion also relates to training performance, while conscientiousness is the most consistent predictor across all jobs.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'An employer wants to raise the validity of its existing Big Five test at essentially no cost. Which change does the research support?',
    type: 'mcq',
    choices: [
      'Convert it to a speed test',
      'Add an "at work" frame of reference — instruct test-takers to think about how they behave at work',
      'Reverse-score half the items',
      'Administer it only to finalists'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Hunthausen et al. (2003) demonstrated it; Shaffer & Postlethwaite (2012) confirmed it meta-analytically. It works because people behave differently across contexts and the framing aligns items with the work criterion.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A recruiter worries that applicants fake personality tests, making the tests worthless. Which finding tempers that conclusion?',
    type: 'mcq',
    choices: [
      'Faking has never been documented empirically',
      'Across thousands of selection decisions in a large company, faking has minimal effects on VALIDITY, even though it can shift applicants’ relative scores',
      'Faking is impossible with forced-choice items',
      'Faking increases the reliability of the measure'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Hogan et al. (2007). The chapter adds that fakers may better understand what the job requires, and Marcus (2009) reframes faking as ordinary positive self-presentation.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A retailer with a serious theft problem wants a screening tool with acceptable validity and low adverse impact. Which procedure best fits, and what is its typical use?',
    type: 'mcq',
    choices: [
      'Integrity tests (.47 for counterproductive behaviors); typically used to "select out" candidates',
      'Assessment centers (.45); typically used to rank managerial candidates',
      'Credit history checks; typically used to identify dishonesty',
      'Vocational interest inventories; typically used to assess fit'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'A study of over 700,000 applicants found integrity tests have relatively low adverse impact against ethnic minorities. Credit scores are NOT associated with workplace deviance and do carry adverse impact.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: '"Think of a time when a project deadline was at risk because a teammate fell behind. What did you do?" This is which type of question, and what does it primarily measure?',
    type: 'mcq',
    choices: [
      'Situational; job knowledge and cognitive ability',
      'Behavioral; experience and some personality dimensions',
      'Unstructured; interests and education',
      'Situational judgment test; interpersonal skill'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Behavioral interviews ask about past experience, resting on the premise that past behavior best predicts future behavior. Levashina et al. (2014) found they measure experience and personality, while situational questions measure job knowledge and cognitive ability.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A hiring team is interviewing recent graduates with almost no relevant work history. Which interview format does the chapter suggest may be more appropriate, and why?',
    type: 'mcq',
    choices: [
      'Behavioral, because past behavior predicts future behavior',
      'Situational, because applicants with relatively little experience have no past behavior to describe',
      'Unstructured, because it allows rapport building',
      'Neither — interviews are inappropriate for inexperienced applicants'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Levashina et al. (2014) note that behavioral questions have slightly higher validity for HIGH COMPLEXITY jobs, but that situational questions may suit applicants with little experience — and that either or both may be acceptable.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'An interviewer asks a candidate whether she has young children, intending not to use the answer in the decision. What is the legal status of this question?',
    type: 'mcq',
    choices: [
      'Permissible, since the information will not be used',
      'Illegal, because it is illegal to ask a question that may cause the applicant to BELIEVE they will face discrimination — regardless of intended use',
      'Permissible if the same question is asked of all candidates',
      'Permissible only in a structured interview'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Restricted topics include age, disability, citizenship, marital status, and children. Employers ARE still permitted to ask whether the applicant can perform the key job tasks.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'An applicant for a short-order cook position is asked to prepare a series of meals. Which two properties give this procedure its advantages?',
    type: 'mcq',
    choices: [
      'Psychological fidelity (elicits the required KSAs → content validity) and physical fidelity (looks like the job → applicant appeal)',
      'Low fidelity and low cost',
      'High reliability and low adverse impact',
      'Speed and power'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Work samples achieve .54 validity, the highest single figure in Table 6.6, but are costly because only one applicant can be assessed at a time — so they typically appear as a later hurdle.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A company promoting supervisors uses an in-box exercise, a role play with a problem subordinate, and a leaderless group discussion. This is an:',
    type: 'mcq',
    choices: ['Situational judgment test', 'Assessment center', 'Structured interview battery', 'Unproctored Internet test'],
    correct: 1,
    difficulty: 'E',
    explanation: 'Assessment centers are "work samples for managers," first used at scale in the US by AT&T in the 1960s, with validity as high as .45 and the ability to do "double duty" by providing developmental feedback.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A recruiter proposes screening applicants by reviewing their personal Facebook pages. Based on the current evidence, the chapter recommends:',
    type: 'mcq',
    choices: [
      'Proceeding, since recruiter ratings of social media predict performance well',
      'Avoiding personal social networking sites for hiring decisions — ratings do not predict performance, tend to favor female and White applicants, and often surface legally prohibited demographic data',
      'Using Facebook only for management-level positions',
      'Using Facebook only if applicants consent in writing'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Van Iddekinge et al. (2016) and Zhang et al. (2020). By contrast, WORK-RELATED sites such as LinkedIn may be useful, since recruiter ratings there may be reliable, valid, low in adverse impact, and predictive of career success.'
  },
  {
    chapter: 'Ch 6 — Personnel Selection',
    q: 'A city adopts a physical ability test with a passing score of 65 but sets its own cut-off at 89, and 90 percent of men but only 19 percent of women pass. What does this case illustrate?',
    type: 'mcq',
    choices: [
      'That physical ability tests are inherently invalid',
      'That cut-off scores must be job related and not arbitrary, or the test can produce severe adverse impact and litigation',
      'That women should be given a separate cut-off score',
      'That simulation-based tests are always preferable to construct-based tests'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The Chicago fire department case settled for almost $2 million and the city adopted a new test. The chapter also notes that offering physical training to all applicants may produce only minimal improvement, and that some adverse impact may be eliminable only by redesigning the job.'
  },

  // ================================================== INTEGRATIVE (5)
  {
    chapter: 'Integrative',
    q: 'Trace the correct dependency chain across chapters: what must exist BEFORE an organization can defensibly validate a selection test?',
    type: 'mcq',
    choices: [
      'A job analysis identifying tasks and KSAOs, and criterion measures of job performance',
      'A composite criterion and a utility analysis',
      'An assessment center and a competency model',
      'A meta-analysis and a moderator test'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Chapter 3 supplies the job analysis, which the Uniform Guidelines require for legal defensibility; Chapter 4 supplies the criterion; Chapter 6 supplies the predictor. Without the first two, criterion-related validity cannot be established.'
  },
  {
    chapter: 'Integrative',
    q: 'A selection test shows a validity coefficient of .35 against an unreliable supervisor rating criterion. Based on Chapters 2 and 4, what is the most likely interpretation?',
    type: 'mcq',
    choices: [
      'The test is definitively invalid and should be discarded',
      'The criterion’s unreliability may be understating the test’s true validity, since an unreliable criterion cannot detect differences among employees',
      'The validity coefficient must be squared before interpretation',
      'The test has adverse impact'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Chapter 4 states explicitly that an unreliable criterion "could make a good selection test look as if it is not predicting performance." Reliability is a necessary condition for validity on both the predictor and criterion sides.'
  },
  {
    chapter: 'Integrative',
    q: 'Which pair of concepts is most directly analogous across Chapters 2 and 6?',
    type: 'mcq',
    choices: [
      'Content validity (Ch. 2) and the requirement that a structured interview adequately sample the job (Ch. 6)',
      'Coefficient alpha (Ch. 2) and adverse impact (Ch. 6)',
      'Random assignment (Ch. 2) and unproctored Internet testing (Ch. 6)',
      'Practical significance (Ch. 2) and psychological fidelity (Ch. 6)'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Both concern sampling the domain of interest. Interview questions drawn from job analysis tasks, KSAs, and critical incidents make the interview content valid — the same argument used for work samples and task-KSA-based selection tests.'
  },
  {
    chapter: 'Integrative',
    q: 'Which finding appears in BOTH the research methods chapter and the selection chapter as a turning point for the field?',
    type: 'mcq',
    choices: [
      'Barrick and Mount’s (1991) meta-analysis showing that normal-personality tests predict job performance',
      'Flanagan’s (1954) critical incidents technique',
      'Spearman’s (1904) differentiation of g from specific abilities',
      'Adams’s (1965) equity theory'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Chapter 2 uses it to illustrate how a meta-analysis can change HR practice; Chapter 6 uses it as the moment personality testing was rehabilitated after Guion and Gottier’s 1965 dismissal.'
  },
  {
    chapter: 'Integrative',
    q: 'Across Chapters 1, 3, 4, and 6, which theme recurs most consistently in the textbook’s treatment of new technology?',
    type: 'mcq',
    choices: [
      'Technology has consistently improved the validity of I-O measurement',
      'Technology is developing faster than the research needed to establish its validity, fairness, legality, and adverse impact',
      'Technology should be avoided in HR practice',
      'Technology has eliminated the need for job analysis'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The same warning appears in Ch. 1 (High-Tech HR era, social media screening), Ch. 3 (monitored data for job analysis), Ch. 4 (big data and job performance — "big" does not mean high quality), and Ch. 6 (AI interview scoring, gamified tests).'
  }
];
