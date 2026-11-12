// Lecture-emphasis layer for Exam 2 (Chapters 8–14).
//
// Built by reading the professor's own seven slide decks end to end and
// comparing them against the textbook content in src/chapters/.
//
//   heavy      — topics she gave dedicated slide(s) to, with slide numbers.
//                These are the highest-probability exam material.
//   activities — her in-class activities, discussion prompts and quizzes.
//                Scenario questions on the exam tend to reuse these framings.
//   numbers    — specific figures she put on a slide. Memorize these.
//   absent     — in the textbook (and in this dashboard) but NOT on her
//                slides. Still fair game, but study it after the above.
//
// Slide numbers are PDF page numbers of the decks as exported.

export default {
  8: {
    deckSlides: 46,
    heavy: [
      { t: 'Needs assessment — all four analyses', s: '9–16', note: 'Organizational → job → person → demographic, in that order. Slide 9 asks outright: "Which analysis tells us who needs training?" (person analysis). Demographic analysis = who the trainees are: education, age, familiarity with technology, motivation to learn, personality.' },
      { t: 'Training goals stated behaviorally', s: '15', note: 'Her example: "make 3 different espresso drinks correctly in 2 minutes using the standard company equipment." Goals come AFTER the organizational, job and person analyses.' },
      { t: 'Massed vs. spaced learning; decay and boosters', s: '20–21', note: 'Spaced = small sessions over a longer period, and it wins. She pairs this with decay of learning, which is why booster sessions get scheduled.' },
      { t: 'On-the-job training', s: '23', note: 'High psychological AND physical fidelity. Her named weakness: most organizations have no "train the trainer" program to ensure quality.' },
      { t: 'Machine simulators and debriefing', s: '24', note: 'Debriefing is what maximizes learning in simulation. Three things to cover: what happened, what could have been done better, what was learned.' },
      { t: 'Lecture — one-way vs. two-way', s: '25', note: 'Two-way is the most effective form. One-way is not effective for behaviors and skills. Lecture is good for facts and basic knowledge to large groups, and is cheap.' },
      { t: 'Programmed instruction: linear vs. branching', s: '26–27', note: 'Linear = continue or repeat the previous module. Branching = may repeat, repeat part, or get a remedial module. She gave the contrast its own slide, then a pros/cons slide. Branching is the costly one.' },
      { t: 'Behavior modeling training', s: '28', note: 'Bandura (1977) social learning theory. Used for behaviorally complex skills like interpersonal skills. Affects learning outcomes, and to a LESSER extent on-the-job behavior (Taylor et al., 2005). Slide asks what learners do after watching the model — practice.' },
      { t: 'Diversity training', s: '29', note: 'Kalinoski et al. (2014): increases affective, skill-based AND cognitive outcomes. Training using social interaction had greater effects on affect.' },
      { t: 'Online training (e-learning)', s: '32', note: 'Sitzmann et al. (2006): equal to classroom for knowledge outcomes; BETTER than classroom when trainees get control plus practice plus feedback. Her question — a video-and-quiz module needs practice with feedback added.' },
      { t: 'Kirkpatrick\'s four levels', s: '37–39', note: 'Three slides. Reactions → learning → behavior → results, moving from immediate trainee reaction to organizational impact. She drills the failure chain: liked it but learned nothing; learned but never used it; changed behavior but no organizational gain. Higher levels are harder and costlier, and results is the hardest.' },
      { t: 'Kraiger et al. (1993) three domains', s: '40', note: 'Cognitive (knowledge, facts, problem-solving), skill-based (technical skills, task performance), affective (attitudes, motivation, confidence, self-efficacy). A second criteria model alongside Kirkpatrick — know both.' },
      { t: 'The three evaluation designs', s: '42–44', note: 'Pretest-posttest (shows change, but practice effects and no control group); posttest-only (simple, but cannot show cause); posttest-only WITH control group, which she labels the strongest evidence of effectiveness.' },
      { t: 'The ten training methods', s: '22', note: 'OJT, machine simulators, lecture, programmed instruction, behavior modeling, diversity, managerial, onboarding, online, team training. Managerial methods get their own slide: developmental assessment centers, executive coaching, case study, business games, role plays, cross-cultural training.' },
      { t: 'New employee onboarding', s: '31, 34', note: 'Two slides. Orientation is the most relevant part of new-employee training. Covers history, language, politics, people, goals/values, performance proficiency — plus task AND social demands.' }
    ],
    activities: [
      { t: 'Does this problem need training?', s: '17–18', note: 'Campus café with order errors. Decide training vs. workplace fix for: new hires struggling with the ordering system (training), experienced staff erring during understaffed rushes (staffing, not training), menu buttons showing outdated information (fix the system). This is the classic "not every problem is a training problem" question.' },
      { t: 'Kirkpatrick diagnosis', s: '39', note: 'Trainees rate a workshop highly but supervisors see no change. Reactions strong, behavior weak — investigate transfer: opportunity to use the skill, supervisor support, whether the training targeted the real gap.' },
      { t: 'Reading an evaluation data table', s: '45–46', note: 'Clothing-store e-learning, 200 employees. Reactions 4.8/5; learning 7.1 → 9.4; behavior (customer ratings) 6.2 → 6.4. Learning improved most, behavior barely moved — a transfer problem, not a learning problem. No results-level data at all.' }
    ],
    numbers: [
      '$83 billion — U.S. spend on training in 2019',
      '$1,200+ — average spend per employee, 2018',
      '6–10% per year — growth of training investment in countries such as Brazil',
      '30–60 months — how fast employee knowledge and skills go out of date'
    ],
    absent: [
      { t: 'ADDIE model', note: 'Not on her slides.' },
      { t: 'Utility analysis / ROI of training', note: 'Not on her slides.' },
      { t: 'Error management training', note: 'Not on her slides.' },
      { t: 'Goal orientation as a trainee characteristic', note: 'Not on her slides.' },
      { t: 'Transfer of training as its own topic', note: 'Appears only inside Kirkpatrick\'s behavior level ("did the training transfer?") on slide 37. No transfer-climate slide — but her slide 39 and 45–46 activities are both transfer problems in disguise.' }
    ]
  },

  9: {
    deckSlides: 46,
    heavy: [
      { t: 'Extrinsic vs. intrinsic motivation', s: '4', note: 'Outside the individual (pay) vs. inside (enjoyment of the work itself). She returns to this under SDT.' },
      { t: 'The three-family taxonomy', s: '6, 34', note: 'Need-based / process-based / application-based. She organized the whole unit this way and made students present one family each — expect to be asked to classify a theory.' },
      { t: 'Hierarchy of needs', s: '9–11', note: 'Maslow. Lower needs before higher — she names this a FULFILLMENT PROGRESSION. Limited empirical support. Five levels with her examples: physiological (water, food, air), security (safe housing, steady employment, healthcare), social (friendships, acceptance), esteem (recognition, competence, accomplishment), self-actualization (self-awareness, growth, meaningful work).' },
      { t: 'ERG theory', s: '12–13', note: 'Alderfer, after Maslow. Existence (physiological + security), relatedness (social), growth (esteem + self-actualization). Key contrast: can pursue all three at once and move between them NONLINEARLY. Some empirical support.' },
      { t: 'Acquired needs theory', s: '14–15', note: 'McClelland. Achievement, power, affiliation; each person has a DOMINANT need. She explicitly notes it has more consistent empirical support than Maslow or ERG.' },
      { t: 'Self-determination theory', s: '38–39, 41', note: 'Three slides plus a worked answer slide. Autonomy, competence, relatedness. Motivation can be AUTONOMOUS (self-endorsed) or CONTROLLED (pressure/obligation) — that distinction is the point. Her undermining examples: bonus plus micromanagement kills autonomy; rewarding only the top performer kills competence; individual bonuses kill relatedness; paying for work already enjoyed shifts intrinsic to controlled.' },
      { t: 'Equity theory', s: '18–19', note: 'Adams. Inputs vs. outputs, compared as a RATIO against a referent other. Perceived inequity motivates you to resolve it.' },
      { t: 'Organizational justice — her three forms', s: '20–21', note: 'Distributive (fairness of the outcome), procedural (fairness of the policies and guidelines used to decide), and INTERPERSONAL (fairness of how people are treated). She says interpersonal, not interactional — use her word. Slide 21 is a full path model: justice → commitment, task performance, OCBs, and counterproductive work behavior (negative), with supervisor relationship quality and POS feeding in.' },
      { t: 'Goal setting theory + SMART', s: '24–26', note: 'One of the best-supported I/O theories. Difficult AND specific goals. Full SMART slide: specific, measurable, attainable (challenging yet realistic), relevant, time-bound.' },
      { t: 'Job characteristics theory', s: '27–28', note: 'Hackman and Oldham. Five characteristics — skill variety, task identity, task significance, autonomy, feedback — create three psychological states — meaningfulness, responsibility, knowledge of results — which drive motivation, performance, satisfaction, and lower absenteeism and turnover. Know the three states by name.' },
      { t: 'Job redesign — four terms', s: '29', note: 'Rotation (systematically moved between jobs), enlargement (more duties, same level), enrichment (more authority and control — the motivational one), and JOB CRAFTING (employees proactively reshape tasks, relationships, or how they see the work). Crafting also reappears in Ch 12 — she emphasizes it twice.' },
      { t: 'Reinforcement theory and the four reinforcers', s: '30–32', note: 'Skinner, operant conditioning. Positive reinforcement, negative reinforcement, punishment, extinction — laid out as a 2×2 of introduce/remove × positive/negative. Her examples: praise (positive), stops nagging once the report is in (negative), fewer hours for poor performance (punishment), ignores great performance (extinction).' },
      { t: 'Compensation', s: '33', note: 'Not a theory, but she includes it. Lavinsky (2010) asked what motivates people at work: meaningful work 29%, money 25%, recognition 17%.' }
    ],
    activities: [
      { t: 'Theory matching from employee comments', s: '42–43', note: 'With her own answer key. "I never know how the manager decides who gets the best shifts" → procedural justice. "Told to do a better job but don\'t know what that means" → goal setting. "No say in how I help customers" → job characteristics or SDT (autonomy). "Only the top seller gets recognized" → reinforcement, with equity also defensible.' },
      { t: 'Campus bookstore case', s: '44–46', note: 'Shifts change without explanation, little feedback, no say, told to "sell more," only the top seller is praised. Her summary table maps each fix to a theory: SDT, ERG, equity, justice, goal setting, JCT, reinforcement. Practice naming two causes and two realistic changes.' },
      { t: 'How a manager undermines motivation while giving rewards', s: '40–41', note: 'Pure SDT application. Her five answers are on slide 41.' }
    ],
    numbers: [
      'Lavinsky (2010): meaningful work 29%, money 25%, recognition 17%',
      '3 — needs in ERG, in acquired needs, and in SDT (different threes; keep them straight)',
      '5 → 3 → outcomes — the shape of job characteristics theory'
    ],
    absent: [
      { t: 'Expectancy theory', note: 'Appears ONLY as a line item in the slide-34 summary chart. No slide, no VIE breakdown. This dashboard weights it much more heavily than she does.' },
      { t: 'Herzberg two-factor / motivator-hygiene', note: 'Also only a line item on slide 34.' },
      { t: 'Motivating potential score (MPS) formula', note: 'Not on her slides — she gives the five characteristics but never the score.' },
      { t: 'Growth need strength as a moderator', note: 'Not on her slides.' },
      { t: 'Schedules of reinforcement (fixed/variable, ratio/interval)', note: 'Not on her slides. She covers the four TYPES of reinforcer instead — do not confuse the two.' }
    ]
  },

  10: {
    deckSlides: 43,
    heavy: [
      { t: 'Bases of power — SIX, including information', s: '5–8', note: 'French & Raven (1960) as she presents it: coercive, reward, legitimate, expert, INFORMATION, referent. Information power = holding important information others need. She then gives TEN practice items (slides 7–8) asking you to name the base — expect this format on the exam.' },
      { t: 'Leadership emergence vs. effectiveness', s: '9', note: 'Emergence = whether someone is perceived as a leader in the group. Effectiveness = what the leader actually accomplishes. Two different outcomes.' },
      { t: 'The three approaches', s: '10', note: 'Trait, behavioral, contingency. She assigned one per group — know what distinguishes them.' },
      { t: 'Trait approach and its history', s: '11–13', note: '"Great man" thinking before the 20th century, then personal factors (gender, age, intelligence, height, personality), set aside mid-century, revived late century by better personality measurement and meta-analysis.' },
      { t: 'Intelligence and leadership', s: '15', note: 'Judge, Colbert & Ilies (2004): followers\' PERCEPTION of intelligence predicts being seen as a leader more strongly than MEASURED intelligence does. Ties to implicit leadership theories.' },
      { t: 'Glass ceiling vs. glass cliff', s: '16–17', note: 'She put a comparison line right on the slide: ceiling = the barrier to getting INTO top leadership; cliff = the riskier conditions once you are there (high-risk, high-stress, unstable or failing situations). Gender differences in effectiveness are small and context dependent.' },
      { t: 'Race and leadership', s: '18', note: 'Few style differences by race. The explanation is perceptions and evaluations — unconscious bias from leadership prototypes and stereotypes — and the same behavior drawing different reactions.' },
      { t: 'Ohio State and Michigan studies', s: '21–22', note: 'Initiating structure (task) and consideration (relational). Both schools found the same two. The universal assumption failed, which is what produced the contingency approach — but recent meta-analysis is kind to them, and INITIATING STRUCTURE is the most important predictor of group performance.' },
      { t: 'DeRue et al. (2011) — traits vs. behaviors', s: '23', note: 'Behaviors matter more than traits. Integrated model: traits → behaviors → effectiveness.' },
      { t: 'Path-goal theory', s: '26–27', note: 'The ONLY contingency theory she developed. Four styles: directive (like initiating structure), supportive (like consideration), participative, achievement-oriented. Effectiveness depends on person, task and work group. Slide 27 is a situation→style matching table — ambiguous task plus low preference for independence → directive; ambiguous task plus high preference for independence → participative; employees feel highly capable → directive is WRONG; clear but dissatisfying task → supportive; highly relevant issue → participative; independent or achievement-oriented employees → achievement-oriented.' },
      { t: 'Transformational vs. transactional', s: '30–31', note: 'Four transformational behaviors: idealized influence (charisma), inspirational motivation, intellectual stimulation, individualized consideration. Four transactional styles: contingent reward, active management by exception, passive management by exception, laissez-faire. Note she files laissez-faire under transactional.' },
      { t: 'Leader-member exchange', s: '32–33', note: 'Dyadic, unique relationship per employee. High quality = trust, mutual liking, professional respect, mutual obligation; low quality = job description only. TRUST is what distinguishes them. Slide 33 is a full antecedents → LMX → consequences model (competence, personality, perceived similarity, leader behaviors, leader fairness, impression management → autonomy, satisfaction, commitment, turnover (negative), career success).' },
      { t: 'Authentic leadership', s: '34', note: 'Arose after corporate scandals. Leaders who "remain true to themselves": self-awareness, honesty and sincerity, strong sense of right and wrong.' },
      { t: 'Servant leadership', s: '35–36', note: 'Lead by serving; follower growth, happiness and well-being come first. Six characteristics on her diagram: empowering and developing people, humility and modesty, authenticity, accepting others, providing direction, serving the broader community.' },
      { t: 'Abusive supervision', s: '37', note: 'Sustained display of hostile and demeaning behaviors, EXCLUDING physical contact — that exclusion is part of the definition. Ridiculing, reminding of failures, rudeness, invading privacy.' },
      { t: 'Leadership development', s: '39–41', note: 'Genes matter somewhat but skills can be developed; development differs from ordinary management training. 360 feedback (subordinates, colleagues, higher-level managers) plus coaching plus mentoring. Development assignments — overseas postings, managing a different team — used by Nike, GE and Coca-Cola.' },
      { t: 'GLOBE study universals', s: '42', note: 'Universally endorsed: trustworthy, dynamic, confidence builder, foresight. Universally undesirable: loner, irritable, dictatorial. Culture-specific: risk taker, self-effacing, self-sacrificing, compassionate.' }
    ],
    activities: [
      { t: 'Identify the power base ×10', s: '7–8', note: 'Suspension threat → coercive. 20-year expert → expert. Extra vacation day → reward. Chair assigns committees → legitimate. Admire character and vision → referent. Confidential merger data → information. High-ranking position → legitimate. Removal from a desirable project → coercive. Trusted physician → expert. "Don\'t want to let him down" → referent.' },
      { t: 'Why are women underrepresented despite small effectiveness differences?', s: '17', note: 'Points at glass ceiling, glass cliff, prototypes and bias rather than ability.' },
      { t: 'Do traditional traits and behaviors still apply?', s: '43', note: 'Open discussion on modern structures — connects forward to Ch 14\'s lattice and virtual organizations.' }
    ],
    numbers: [
      '43% of full-time U.S. employees are women, but only 6% of Fortune 1000 CEOs (BLS, 2013)',
      '4 — Fortune 500 companies led by an African-American CEO as of 2020',
      '6 — bases of power in her version',
      '4 + 4 — transformational behaviors and transactional styles',
      '360 — degrees of feedback: subordinates, colleagues, higher-level managers'
    ],
    absent: [
      { t: 'Fiedler\'s LPC scale and situational favorability', note: 'Fiedler is NAMED on slide 25 as one of three contingency theories, but gets no slide. No LPC, no favorability dimensions.' },
      { t: 'Vroom\'s normative model in detail', note: 'Also named only on slide 25.' },
      { t: 'Substitutes for leadership', note: 'Not on her slides.' }
    ]
  },

  11: {
    deckSlides: 41,
    heavy: [
      { t: 'Job attitudes definition', s: '4', note: 'Feelings or beliefs about one\'s job, organization, supervisor, or another aspect of the workplace.' },
      { t: 'The ABC of attitudes', s: '5', note: 'Cognitive (beliefs), affective (feelings), behavioral (intentions to act). She labels it "the ABC of Attitudes" on the slide. The same three-part structure returns in Ch 14 for resistance to change — she is clearly reusing it.' },
      { t: 'THREE key job attitudes', s: '6–7', note: 'Job satisfaction (Muchinsky, 2006), organizational commitment (Mowday, Steers & Porter, 1979), and WORK ENGAGEMENT (Schaufeli, Bakker & Salanova, 2006) — dedication, absorption, excitement, passion. Do not answer "the two key attitudes"; she teaches three and shows their meta-analytic correlations.' },
      { t: 'Global vs. facet measurement', s: '9–13', note: 'Five slides including a full strengths/weaknesses table. Global is quick and comparable but cannot say WHY; facet gives targeted detail but is longer, causes fatigue, and can miss facets it does not include.' },
      { t: 'Commitment: uni- vs. multi-dimensional', s: '14–16', note: 'Overall commitment vs. the three components, which she glosses as want (affective), need (continuance), ought (normative).' },
      { t: 'Nomological network', s: '17–18', note: 'She defines the term: a framework showing how a construct relates theoretically and empirically to other constructs. Antecedents — job characteristics, leadership, stress, perceived organizational support, justice, personality, person-environment fit — feed satisfaction and commitment, which feed performance, OCBs, counterproductive work behavior, absenteeism, turnover and unit performance.' },
      { t: 'Pay and satisfaction', s: '19–20', note: 'Employees think pay is the number one driver (Schramm, 2014), but the actual pay-level correlation with satisfaction is only r = .15 (Judge, Piccolo, Podsakoff, Shaw & Rich, 2010). A favorite exam move: belief vs. finding.' },
      { t: 'Attitudes and performance — the real sizes', s: '21–22', note: 'Satisfaction → performance r = .30; commitment → performance r = .13. Her explanation: performance also needs ability, resources and opportunity, and the environment can suppress it. Attitudes predict TURNOVER and OCBs better than performance.' },
      { t: 'Direction of causality', s: '24–25', note: 'Two slides plus her answer. Performance → satisfaction is the STRONGER direction, because performing well generates pride, rewards and felt competence; being happy only slightly boosts output. If she asks which way the arrow runs, this is the answer she wants.' },
      { t: 'Satisfaction and turnover', s: '23', note: 'Higher satisfaction → fewer turnover INTENTIONS → less likely to quit. Note the intention step.' },
      { t: 'Newcomers and onboarding', s: '26', note: 'First few weeks are critical for adjustment and socialization. Bauer, Bodner, Erdogan, Truxillo & Tucker (2007): structured onboarding improves attachment and satisfaction, raising retention.' },
      { t: 'Emotions vs. moods', s: '28', note: 'Emotions are momentary, tied to specific events. Moods have less clear causes and last longer. Emotions guide perception and reaction.' },
      { t: 'Emotional contagion', s: '30', note: 'Emotions spread through work groups via verbal and nonverbal expression — both positive and negative.' },
      { t: 'Emotional labor', s: '31–32', note: 'Regulating displays that do not match what is felt. Surface acting changes only the expression; deep acting also attempts to change the underlying emotion. Her discussion presses on which is more exhausting and whether customers can tell.' },
      { t: 'Legal and organizational stakes', s: '33', note: 'Dissatisfied employees are more likely to SUE and more likely to UNIONIZE. A distinctive slide — easy to overlook, easy to test.' }
    ],
    activities: [
      { t: 'The Employee Review Crisis', s: '41', note: 'Her five-part consulting case: which attitudes are driving the reviews and turnover; global or facet measure; two risks of confronting the posters; two concrete fixes; how negative emotions could help. Lead with the ABC components and the nomological network, and recommend FACET measurement because the complaints are facet-specific.' },
      { t: 'When is a negative emotion helpful?', s: '35–36', note: 'Her answers: anger → advocacy; anxiety → double-checking medications; frustration → process improvement; guilt → apology and repair; fear → reporting hazards. Takeaway on the slide: negative emotions provide information, increase vigilance, and motivate constructive action.' },
      { t: 'When is a positive emotion harmful?', s: '37–38', note: 'Overconfidence overlooking risk; excitement causing impulsive decisions; happiness becoming complacency; optimism ignoring a slipping deadline; enthusiasm discouraging critical feedback.' },
      { t: 'Promoting a full emotional range without risk', s: '39–40', note: 'Psychological safety, normalizing emotions, constructive expression, modeling regulation, healthy outlets, clear behavioral expectations, addressing root causes. Her line: do not try to eliminate negative emotions or force positivity.' }
    ],
    numbers: [
      'r = .15 — pay level and job satisfaction (Judge et al., 2010)',
      'r = .30 — job satisfaction and performance',
      'r = .13 — organizational commitment and performance',
      '3 — key job attitudes (satisfaction, commitment, work engagement)',
      '3 — attitude components, and 3 commitment components (want / need / ought)',
      '6 — basic categories of emotions'
    ],
    absent: [
      { t: 'The JDI and MSQ by name', note: 'She teaches "facet-based measures (e.g., pay, quality of supervision)" generically and never names the Job Descriptive Index or the Minnesota Satisfaction Questionnaire.' },
      { t: 'Exit, voice, loyalty, neglect', note: 'Not on her slides.' },
      { t: 'The unfolding model of turnover', note: 'Not on her slides. She teaches satisfaction → turnover intentions instead.' },
      { t: 'Affective events theory', note: 'Not on her slides.' },
      { t: 'Withdrawal behaviors as a progression', note: 'Not on her slides.' }
    ]
  },

  12: {
    deckSlides: 49,
    heavy: [
      { t: 'Well-being defined', s: '4', note: 'Employee health, safety, satisfaction AND engagement — all four. Stress, health and safety are intertwined.' },
      { t: 'Stressor → stress → strain', s: '5', note: 'Stressor = the event, context or demand (it elevates adrenaline); strain = the response to stress. She diagrams the three in order.' },
      { t: 'The four models, named as a set', s: '6, 42–48', note: 'GAS, transactional, COR, JD-R — biological, psychological, resource-based and workplace perspectives respectively. She assigned one per team and then gave each its own slide. Know which lens each one is.' },
      { t: 'General adaptation syndrome', s: '43–45', note: 'Selye, University of Montreal, one of the first to study stress and immune response. Alarm (recognizes the stressor, fight-or-flight, cortisol and adrenaline up) → resistance (adapts and keeps functioning but stays aroused) → exhaustion (resources depleted; fatigue, burnout, illness, worse performance).' },
      { t: 'Transactional model — PRIMARY and SECONDARY appraisal', s: '46', note: 'Lazarus. Stress does not come from the event; it comes from appraisal. Primary appraisal: "is this threatening, harmful, or challenging?" Secondary appraisal: "do I have the resources to cope?" She names both steps — know them separately.' },
      { t: 'Conservation of resources', s: '47', note: 'Hobfoll, a workplace-specific model. People seek to obtain, protect and build resources (time, energy, money, social support, self-esteem). Stress = resources threatened, lost, or not gained after investment. Resource LOSS outweighs resource gain, and the resource-rich cope better.' },
      { t: 'Job demands-resources — the TWO processes', s: '48', note: 'Health impairment process: high demands → strain → burnout. Motivational process: high resources → engagement → better performance. She names both — this is the most testable thing in the model.' },
      { t: 'Challenge vs. hindrance stressors', s: '49', note: 'Challenge stressors are developmental and POSITIVELY related to work engagement: role demands, time urgency, workload. Hindrance stressors are negatively linked: job constraints, hassles, organizational politics.' },
      { t: 'Five antecedents of strain', s: '9–15', note: 'Role demands (ambiguity = lack of clarity; conflict = contradictory demands), information overload, work-life trade-offs, interpersonal challenges, evaluation apprehension. Evaluation apprehension — concern about being judged — reduces willingness to SHARE KNOWLEDGE.' },
      { t: 'Work-family conflict and mindfulness', s: '12–13', note: '168 hours in a week to allocate. Work-family conflict runs both directions. Mindfulness — noticing without evaluating or ruminating — reduces it.' },
      { t: 'Interpersonal challenges', s: '14', note: 'Abusive supervision (back from Ch 10), workplace bullying, customer complaints. A climate of mistreatment reduction lowers strain and improves attitudes.' },
      { t: 'Individual differences in stress reactions', s: '16', note: 'Framed explicitly as why the transactional model matters. Type A (competitive, impatient, achievement-oriented — perceives more stress), Type B (relaxed), workaholism, negative affect, neuroticism.' },
      { t: 'Three categories of consequences', s: '18–21', note: 'Physiological (aches, heart rate, skin, cardiovascular disease, Type II diabetes, cognitive impairment), psychological, behavioral (lower performance, withdrawal, anger or violence, alcohol and drug abuse).' },
      { t: 'Stress-performance inverted U', s: '22', note: 'Underload → inactive and laid back; the stress zone → fully engaged and motivated; overload → stressed and anxious.' },
      { t: 'Five individual stress-management approaches', s: '25–31', note: 'Diet, exercise, sleep, time management, social support. Social support splits three ways — emotional, informational, instrumental — and BUFFERS job stressors. Time management: prioritize with challenging specific goals, mentally simulate tomorrow\'s tasks, structure where and when you work.' },
      { t: 'Four organizational approaches', s: '33–36', note: 'Healthy work environments, flexible work arrangements, recovery opportunities, employee resource programs. Healthy environments = autonomy, supportive climate, JOB CRAFTING (second appearance after Ch 9), plus the physical environment: windows, open-office caveats, ergonomic design.' },
      { t: 'Recovery opportunities — six types', s: '35', note: 'Sabbaticals, vacations, personal days, evenings, naps, micro breaks. Detachment and recovery prevent exhaustion.' },
      { t: 'EAPs vs. WWPs', s: '36', note: 'Employee assistance programs = confidential counseling for problems distracting from work. Workplace wellness programs = healthy choices, gym reimbursement, smoking cessation, weight loss, rewards and penalties. Know which is which.' },
      { t: 'Safety compliance vs. safety participation', s: '39', note: 'Compliance = core safety behaviors, following rules, using equipment. Participation = supporting coworkers and safety norms. Her safety emphasis is on these two behaviors.' }
    ],
    activities: [
      { t: 'Optimal stress levels', s: '23', note: 'How can employees hit the productive part of the curve, and how can managers help? Pair it with the five individual and four organizational approaches.' },
      { t: 'Production pressure vs. safety', s: '40', note: 'How supervisors balance output goals against a safe environment, and what top management\'s role is. Safety climate logic without the term.' },
      { t: 'Design a low-stressor customer service job', s: '41', note: 'Is it possible, where would you start, what factors? Best answered with JD-R: cut hindrance demands, add resources (autonomy, support, feedback).' }
    ],
    numbers: [
      '7–8 hours — minimum adult sleep need',
      '4 consecutive nights of 5 hours of sleep ≈ a blood alcohol level of .06%',
      '168 hours in a week',
      '5,230+ U.S. workers killed at work in 2018',
      '3 — appraisal-relevant model stages (alarm/resistance/exhaustion), consequence categories, and support types',
      '5 individual vs. 4 organizational stress-management approaches',
      '6 — recovery opportunity types'
    ],
    absent: [
      { t: 'Eustress', note: 'Not on her slides, though the inverted U carries the same idea.' },
      { t: 'Safety climate (the term) and near misses', note: 'Not in this deck — she puts safety climate in the Ch 14 types-of-climate slide instead. Here, safety is compliance vs. participation.' },
      { t: 'Burnout dimensions (exhaustion, cynicism, inefficacy)', note: 'Burnout is named as an outcome but never decomposed.' },
      { t: 'Demand-control model (Karasek)', note: 'Not on her slides — JD-R covers this ground for her.' }
    ]
  },

  13: {
    deckSlides: 30,
    heavy: [
      { t: 'Group vs. work team', s: '2', note: 'Group = individuals who interact such that one person\'s actions affect the others (Bauer & Erdogan, 2010); may just share resources. Work team = "interdependent collection of individuals who share responsibility for specific outcomes" (Sundstrom, DeMeuse & Futrell, 1990). A team is technically a special kind of group, but the terms get used interchangeably.' },
      { t: 'Informal vs. formal groups', s: '3', note: 'Informal = natural and spontaneous (work friend group, running group). Formal = deliberate and systematic (a work unit). Short slide, easy definition question.' },
      { t: 'The six myths about teams', s: '5–9', note: 'FIVE slides — a true/false quiz then two answer slides. (1) Harmony helps → MYTH, too much harmony cuts constructive conflict and critical thinking. (2) Mix it up with new members → PARTLY TRUE, fresh ideas but turnover disrupts cohesion, trust, efficiency. (3) Bigger is better → MYTH, coordination problems, social loafing, communication issues. (4) Face-to-face is passé → MYTH, virtual teams can work but are not automatically more efficient and struggle with coordination, trust, communication. (5) Performance depends on the leader → MYTH, oversimplified; structure, task design, member skills and processes all matter. (6) Teamwork is magical → MYTH, talented people alone do not suffice; teams need clear goals, structure, coordination, processes. Note #2 is the only one not a flat myth.' },
      { t: 'Team effectiveness = performance + viability', s: '11', note: 'Performance = successful delivery of an output to customers inside or outside the organization. Viability = ability AND desire of members to keep working together.' },
      { t: 'Her three-category framework', s: '12', note: 'The organizing diagram for the whole chapter. Group COMPOSITION (size, tenure, personality, diversity) → group PROCESSES (teamwork skills, norms, roles, conflict) → group AFFECT & COGNITION (cohesion, psychological safety, collective efficacy) → team effectiveness. If she asks you to organize the factors, use these three.' },
      { t: 'Group size and social loafing', s: '14', note: 'Social loafing = putting forth less effort in a joint activity than when acting alone. Gains do rise with size but hit a point of DIMINISHING RETURNS.' },
      { t: 'Group tenure', s: '15', note: 'Lower effectiveness when members join and leave frequently — but it depends on the relative abilities of those who stay versus leave.' },
      { t: 'Group personality: elevation and variability', s: '16', note: 'Elevation = the average score; variability = the variance. AGREEABLENESS is among the strongest personality predictors of team performance while being among the weakest for individual performance. Conscientiousness predicts team performance only when similarity in conscientiousness is HIGH.' },
      { t: 'Group diversity and faultlines', s: '17', note: 'Faultlines = "hypothetical dividing lines that may split a group into subgroups based on one or more attributes" (Lau & Murnighan, 1998). They trigger in-groups and out-groups; subgroups can help or hurt depending on type. Diversity\'s upside: more information, more experience, more ways to approach a problem.' },
      { t: 'Team processes, incl. team mental models', s: '18–19', note: 'Teamwork skills; TEAM MENTAL MODELS (degree to which individual conceptualizations are shared — higher TMM, more effective; her example is a shared understanding of the project steps); team roles (understanding role importance raises role performance); conflict (some is normal and beneficial, and psychological safety is critical when it happens).' },
      { t: 'Best practices for meetings', s: '20', note: 'A full slide of seven: agendas beforehand, start on time, run effectively, come prepared, use time strategically for critical issues, cover relevant issues, make it comfortable to voice concerns.' },
      { t: 'Group cohesion', s: '22', note: 'Degree to which the group wishes to stay together in future. Marked by collective identity, shared sense of purpose, and satisfaction with how the group operates. Significant positive correlation with effectiveness.' },
      { t: 'Psychological safety', s: '23', note: 'Perceptions of the negative or positive consequences of taking interpersonal risks at work (Edmondson, 1999). Safer → more idea sharing and communal action; linked to team motivation, learning and performance.' },
      { t: 'Team efficacy', s: '24', note: 'The team\'s belief it can perform its tasks well (Bandura, 1997). Related to effectiveness, and the relationship is STRONGER when the task is more interdependent.' },
      { t: 'Brainstorming', s: '26', note: 'Generate as many as possible, withhold judgment, encourage wild ideas — and her key procedural point: have members write ideas down individually in a quiet environment FIRST, then share.' },
      { t: 'Groupthink and how to avoid it', s: '27–28', note: 'Desire for harmony and consensus that avoids critical debate. Her four linked outcomes: high collective efficacy too early, suppressed productive conflict, overconfidence and ignoring alternatives, too little time spent deciding. Remedies: discuss the symptoms, a rotating devil\'s advocate, outside experts reacting to ideas, a culture that values difference, and debating ethical implications.' },
      { t: 'Virtual teams — 10 tips', s: '29', note: 'Meet physically while forming; clarify tasks and processes; establish communication norms; pick the right technology; build a work rhythm; develop a shared language; create a "virtual water cooler"; track commitments; foster shared leadership; connect one-on-one.' }
    ],
    activities: [
      { t: 'The team-building true/false quiz', s: '5–9', note: 'The single most exam-shaped thing in this deck. Answers on slides 8–9.' },
      { t: 'Marshmallow challenge (Tom Wujec TED talk)', s: '30', note: 'How business students approached it vs. kindergartners, and what that says about team decision making. Kindergartners prototype and iterate; MBAs plan and jockey for status.' },
      { t: 'Benefits and drawbacks of a team you were on', s: '4', note: 'Open reflection — a likely short-answer framing.' }
    ],
    numbers: [
      '2 — facets of team effectiveness (performance, viability)',
      '3 — her factor categories (composition, processes, affect & cognition)',
      '4 — composition features, and 4 process features',
      '6 — myths about teams',
      '10 — tips for virtual teams',
      '1998 — Lau & Murnighan, faultlines; 1999 — Edmondson, psychological safety; 1997 — Bandura, efficacy'
    ],
    absent: [
      { t: 'Tuckman\'s five stages (forming/storming/norming/performing/adjourning)', note: 'Completely absent from her deck — the words never appear. This dashboard and the textbook build the chapter around it; she does not. Worth knowing, but not where her emphasis is.' },
      { t: 'Punctuated equilibrium / Gersick', note: 'Absent. Follows from the above.' },
      { t: 'Process loss', note: 'Absent. She teaches social loafing instead.' },
      { t: 'Sundstrom\'s six team types', note: 'Absent — she cites Sundstrom only for the work-team definition.' },
      { t: 'Task vs. relationship vs. process conflict', note: 'Absent. Her conflict treatment is one line: some conflict is normal and beneficial, and psychological safety is what matters.' },
      { t: 'Google / Project Aristotle', note: 'Absent. She cites Edmondson for psychological safety, not Google.' },
      { t: 'Mumford\'s ten roles; McGrath\'s four task types', note: 'Absent — her roles slide is one line about understanding role importance.' },
      { t: 'Janis\'s eight symptoms and mindguards', note: 'Absent. She gives four groupthink outcomes and five remedies instead.' },
      { t: 'Cross-trained teams; stand-up meetings', note: 'Absent.' }
    ]
  },

  14: {
    deckSlides: 49,
    heavy: [
      { t: 'Organizational structure as a blueprint', s: '3', note: 'Who does what, who reports to whom, how employees are grouped, how departments work together. Shapes how information flows, how decisions are made, how work gets done.' },
      { t: 'The four structural dimensions', s: '3–12', note: 'Ten slides. FORMALIZATION — rules and procedures, and how much deviation is tolerated; high formalization risks dysfunctional bureaucracy, prevents change, and invites rule-breaking or following the letter not the spirit. CENTRALIZATION — decision authority concentrated at the top; gives consistency and standardization but slower decisions (her example: McDonald\'s standardized food). DEPARTMENTALIZATION — grouping by function, product, customer type or geography, with real org charts from P&G (product), JP Morgan Chase (customer + function) and Marriott (geography + function), all HYBRIDS. SPAN OF CONTROL — how many report to one manager; narrow vs. wide.' },
      { t: 'The hospital worked example', s: '12', note: 'All four dimensions applied at once: strict patient-care procedures (formalization), administrators decide (centralization), nursing/surgery/radiology (departmentalization), head nurse supervising 10 (span of control).' },
      { t: 'Contemporary structures: matrix, lattice, virtual', s: '14–19', note: 'Seven slides, framed as "types of buildings" built from the dimension "building blocks." MATRIX — report to two bosses, typically a functional and a project manager; responds better to a specific product or market but produces ROLE CONFLICT AND AMBIGUITY. LATTICE — highly flexible, few or no formal hierarchies, NO assigned managers, employees initiate or join projects of their own choosing, leaders emerge by persuading others to join. VIRTUAL ORGANIZATION — she explicitly warns it is NOT just a company that allows remote work; it relies on technology and a network of external partners, contractors, suppliers or dispersed employees. Her example: NIRPS, created in 2011 by NASA and the Department of Defense.' },
      { t: 'Culture vs. climate', s: '22–23', note: 'A full two-column slide. Culture = shared unwritten rules; beliefs, values and assumptions taken for granted; an informal control system ("this is how we do things around here"). Climate = how employees perceive what it is like to work here; shared views of policies, practices and what gets rewarded; MORE VISIBLE AND EASIER TO MEASURE than culture. Then a five-item classify-it activity.' },
      { t: 'Types of climate', s: '24', note: 'Safety, diversity, customer service, empowerment, ethics, mistreatment, justice. Safety climate and diversity climate get examples — note that safety climate lives HERE, not in the Ch 12 deck.' },
      { t: 'Why culture matters', s: '25', note: 'Influences organizational performance, employee attitudes and behaviors, and perceptions of what matters and what is expected.' },
      { t: 'Six factors that create culture', s: '27–31', note: 'Five slides. Founder\'s values (become the foundation if the organization succeeds); organizational history and environment (what worked gets kept and passed on); ATTRACTION-SELECTION-ATTRITION (attraction → selection → attrition → retention; organizations become more like the people who fit and stay); newcomer socialization (orientation, mentoring, observing); leadership style (behavior more than words; shapes performance indirectly through norms); reward systems (formal pay and promotions plus informal recognition signal what success looks like).' },
      { t: 'Organizational development', s: '33–35', note: 'OD = behavioral-science-based theories, techniques and systems for planning change by changing individuals\' on-the-job behavior (Porras & Robertson, 1991). THREE intervention families: HUMAN PROCESS (how people work together — team building, conflict resolution training, improving employee-manager communication); TECHNO-STRUCTURAL (job design, structure, technology — redesigning jobs to cut workload, changing reporting structures, new performance management); STRATEGIC CHANGE (whole-organization — mergers, culture change, moving to remote or hybrid).' },
      { t: 'The central claim about change', s: '33', note: 'Success depends on how employees EXPERIENCE and ACCEPT it. Even good changes fail if employees do not understand, support or adopt them. Her software example: trained and supported → succeeds; confused and excluded → fails.' },
      { t: 'Resistance to change — the ABC again', s: '37', note: 'Cognitive ("this new system will slow us down"), affective ("I feel stressed about learning this"), behavioral (avoiding, complaining, slowing adoption, refusing). Same three-part structure as the Ch 11 attitude components — she is deliberately reusing it.' },
      { t: 'Five reasons people resist', s: '38', note: 'Habits, personality (e.g. low openness), trust in the organization and management, personal impact of the change, and features of the change (complexity, uncertainty, cost). Her closing line: people resist for psychological, personal and practical reasons, not just because they "don\'t like change."' },
      { t: 'Lewin\'s three stages', s: '39–42', note: 'Four slides, revealed one stage at a time. Unfreezing = employees understand and are motivated to change. Change = actually implement it. Refreezing = new ways of working or organizing are made permanent.' },
      { t: 'Kotter\'s eight steps', s: '43–47', note: 'Four slides, two steps each, every step explained. (1) Establish urgency — help people see why now. (2) Form a coalition of influential supporters. (3) Create a vision — define the change and how. (4) Communicate the vision widely and consistently. (5) Remove obstacles — outdated systems, resistance, policies. (6) Create small wins for momentum. (7) Don\'t quit prematurely — use early wins to push deeper. (8) Anchor the change in corporate culture. Closing slide: change is a step-by-step process that becomes part of the culture, not a single event.' }
    ],
    activities: [
      { t: 'Describe the organizational structure', s: '13', note: '120-employee software company: departments by function, detailed handbook and standardized procedures, senior executives approve budgets and hiring, managers supervise 8–10. Answers: high formalization, centralized, functional departmentalization, moderately narrow span — helps consistency, hurts flexibility and innovation. The most likely structure question on the exam.' },
      { t: 'Culture or climate?', s: '23', note: 'Her five items. Learning that speaking up about mistakes is discouraged → culture. Reviews are fair and performance is rewarded → climate. "Customers always come first" belief → culture. Workplace feels supportive, managers approachable → climate. Avoiding challenging a supervisor because it is "not how things are done" → culture. Rule of thumb: perceptions of current policies and rewards = climate; taken-for-granted beliefs = culture.' },
      { t: 'Which structure for a new innovative product?', s: '20', note: 'Lattice, matrix or virtual, and the effect on communication, flexibility and innovation.' },
      { t: 'Changing an incivility climate', s: '48', note: 'Step-by-step plan for a culture of rudeness, bullying, stress and turnover. Build the answer on Kotter or Lewin plus the six culture-creation levers (especially leadership behavior and reward systems).' },
      { t: 'Organizational culture search', s: '49', note: 'Three companies via website, Glassdoor, news and job ads — is the claimed culture the perceived culture? Espoused vs. enacted.' }
    ],
    numbers: [
      '4 — structural dimensions (formalization, centralization, departmentalization, span of control)',
      '3 — contemporary structures (matrix, lattice, virtual)',
      '7 — types of climate she lists',
      '6 — culture-creation factors',
      '3 — OD intervention families, and 3 components of resistance',
      '3 — Lewin\'s stages; 8 — Kotter\'s steps',
      '2011 — NIRPS, her virtual-organization example (NASA + DoD)'
    ],
    absent: [
      { t: 'Mechanistic vs. organic structures', note: 'Absent from her deck. She teaches the four dimensions, then jumps straight to matrix/lattice/virtual.' },
      { t: 'Classical theory (Taylor, Fayol, Weber) and the human relations movement', note: 'Absent. The dashboard opens Ch 14 with this history; she does not cover it.' },
      { t: 'The situational / contingency paradigm of structure', note: 'Absent as a named idea.' },
      { t: 'Competing values framework (adhocracy, market, clan, hierarchy)', note: 'Absent. Her culture treatment is culture vs. climate, climate types, and the six creation factors.' },
      { t: 'Schein\'s three levels (artifacts, values, assumptions)', note: 'Absent by name, though her culture definition leans on values and assumptions.' },
      { t: 'Strong vs. weak culture; appreciative inquiry; survey feedback; re-engineering and TQM', note: 'Absent.' }
    ]
  }
};
